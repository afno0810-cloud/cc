import{j as A,F as z,p as B,e as P,D as S,f as F,l as T,m as k,E as C,V as w,Q as E}from"./index-CDFdL-Ae.js";import"./main-DS6bRMGz.js";function j(a=22){const g=[.5,0,0,-.45,.02,.05,-.45,.02,-.05,.5,0,0,-.45,-.04,0,-.45,.02,.05,.5,0,0,-.45,.02,-.05,-.45,-.04,0,.18,0,.04,-.1,0,.04,.02,0,.62,.18,0,-.04,.02,0,-.62,-.1,0,-.04,.02,0,.62,-.1,0,.04,-.2,0,1.12,.02,0,-.62,-.2,0,-1.12,-.1,0,-.04,-.45,.01,0,-.72,.01,.16,-.72,.01,-.16],o=new A;o.setAttribute("position",new z(g,3)),o.computeVertexNormals();const i=new Float32Array(a);for(let e=0;e<a;e++)i[e]=Math.random()*100;o.setAttribute("aPhase",new B(i,1));const c={uTime:{value:0}},l=new P({color:new F(.75,.76,.78),roughness:.8,side:S});l.onBeforeCompile=e=>{Object.assign(e.uniforms,c),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float aPhase;
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
                {
                    // flap for a few seconds, glide for a few seconds
                    float t = uTime + aPhase;
                    float flapping = smoothstep(0.2, 0.6, sin(t * 0.35 + aPhase));
                    float a = sin(t * 7.0) * 0.55 * flapping + 0.12;
                    float s = abs(position.z);
                    float k = s > 0.05 ? 1.0 : 0.0;
                    // the outer wing bends a little more than the inner one
                    float bend = a * (s > 0.63 ? 1.35 : 1.0);
                    transformed.y += k * s * sin(bend) * 0.9;
                    transformed.z = sign(position.z) * s * mix(1.0, cos(bend), k);
                }`)};const s=new T(o,l,a);s.frustumCulled=!1;const m=[];for(let e=0;e<a;e++)m.push({cx:-60+(Math.random()-.5)*140,cz:40+(Math.random()-.5)*160,r:25+Math.random()*70,h:14+Math.random()*38,w:(.08+Math.random()*.1)*(Math.random()<.5?1:-1),a:Math.random()*Math.PI*2,s:4.2+Math.random()*1.2});const d=new k,h=new E,f=new C,u=new w,M=new w;return{mesh:s,update(e,x,r){c.uTime.value=e;for(let n=0;n<a;n++){const t=m[n];t.a+=t.w*x;const p=t.r+r*400;u.set(t.cx+Math.cos(t.a)*p,t.h+Math.sin(e*.3+n)*3+r*200,t.cz+Math.sin(t.a)*p);const b=Math.sign(t.w),v=Math.atan2(-Math.cos(t.a)*b,-Math.sin(t.a)*b);f.set(-.35*Math.sign(t.w),v,0,"YXZ"),h.setFromEuler(f),M.setScalar(t.s*(1-r)),d.compose(u,h,M),s.setMatrixAt(n,d)}s.instanceMatrix.needsUpdate=!0,s.visible=r<.98}}}export{j as createBirds};
