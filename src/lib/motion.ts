import type { Transition } from "framer-motion"

const editorialEase = [0.22, 1, 0.36, 1] as [
  number,
  number,
  number,
  number,
]

export const revealTransition: Transition = {
  duration: 0.5,
  ease: editorialEase,
}

export function fadeUp(delay = 0, distance = 18) {
  return {
    initial: { opacity: 0, y: distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" as const },
    transition: { ...revealTransition, delay },
  }
}
