import * as React from "react"
import { forwardRef, type ComponentType } from "react"
import { useReducedMotion } from "framer-motion"

// Learn more: https://www.framer.com/developers/overrides/

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

/**
 * Group photo: fades up once on load.
 * (No blur and no hover lift – both cost a lot on phones.)
 */
export function withPhotoReveal(Component: any): ComponentType {
    return forwardRef((props: any, ref) => {
        const reduce = useReducedMotion()
        if (reduce) return <Component ref={ref} {...props} />

        return (
            <Component
                ref={ref}
                {...props}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            />
        )
    })
}
