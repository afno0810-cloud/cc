import * as THREE from "three"

/* Spray: water drops thrown up from the bows when Argus goes fast, and
   where you click on the water. A pool of points with a bit of physics
   (gravity, air drag), lit by the sun and the sky. */
export function createSpray(max = 700) {
    const pos = new Float32Array(max * 3)
    const vel = new Float32Array(max * 3)
    const life = new Float32Array(max) // seconds left
    const size = new Float32Array(max)
    const age = new Float32Array(max)
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage))
    geo.setAttribute("aLife", new THREE.BufferAttribute(life, 1).setUsage(THREE.DynamicDrawUsage))
    geo.setAttribute("aSize", new THREE.BufferAttribute(size, 1))
    const U = {
        uCol: { value: new THREE.Color(1, 1, 1) },
        uProj: { value: 800 },
    }
    const mat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: U,
        vertexShader: /* glsl */ `
            attribute float aLife; attribute float aSize; uniform float uProj; varying float vA;
            void main() {
                vec4 mv = modelViewMatrix * vec4(position, 1.0);
                vA = clamp(aLife * 2.0, 0.0, 1.0);
                gl_PointSize = aLife > 0.0 ? clamp(aSize * uProj / -mv.z, 1.0, 22.0) : 0.0;
                gl_Position = projectionMatrix * mv;
            }
        `,
        fragmentShader: /* glsl */ `
            uniform vec3 uCol; varying float vA;
            void main() {
                float d = length(gl_PointCoord - 0.5);
                if (d > 0.5) discard;
                float a = smoothstep(0.5, 0.15, d) * vA * 0.75;
                gl_FragColor = vec4(uCol, a);
            }
        `,
    })
    const points = new THREE.Points(geo, mat)
    points.frustumCulled = false
    points.renderOrder = 7
    let next = 0
    let alive = 0

    return {
        points,
        uniforms: U,
        emit(x, y, z, vx, vy, vz, n, spread = 1.5, s = 0.12) {
            for (let i = 0; i < n; i++) {
                const k = next
                next = (next + 1) % max
                pos[k * 3] = x + (Math.random() - 0.5) * 0.6
                pos[k * 3 + 1] = y
                pos[k * 3 + 2] = z + (Math.random() - 0.5) * 0.6
                vel[k * 3] = vx + (Math.random() - 0.5) * spread
                vel[k * 3 + 1] = vy * (0.6 + Math.random() * 0.7)
                vel[k * 3 + 2] = vz + (Math.random() - 0.5) * spread
                life[k] = 0.6 + Math.random() * 0.9
                size[k] = s * (0.5 + Math.random())
                age[k] = 0
            }
            alive = max
            geo.attributes.aSize.needsUpdate = true
        },
        // a splash where something hits the water
        splash(x, z, strength = 1) {
            this.emit(x, 0.1, z, 0, 5.5 * strength, 0, Math.round(60 * strength), 3.2 * strength, 0.14)
        },
        update(dt) {
            if (!alive) return
            let any = 0
            const drag = Math.exp(-dt * 0.9)
            for (let k = 0; k < max; k++) {
                if (life[k] <= 0) continue
                any++
                vel[k * 3 + 1] -= 9.8 * 3.3 * dt // gravity, in scene units (1 unit = 0.3 m)
                vel[k * 3] *= drag
                vel[k * 3 + 2] *= drag
                pos[k * 3] += vel[k * 3] * dt
                pos[k * 3 + 1] += vel[k * 3 + 1] * dt
                pos[k * 3 + 2] += vel[k * 3 + 2] * dt
                life[k] -= dt
                if (pos[k * 3 + 1] < -0.2) life[k] = 0
            }
            alive = any
            geo.attributes.position.needsUpdate = true
            geo.attributes.aLife.needsUpdate = true
        },
    }
}
