"use client"

import {
  useMotionValue,
  useTransform,
  animate,
  useInView,
  useReducedMotion,
  motion,
} from "framer-motion"
import { useEffect, useRef } from "react"

interface AnimatedCounterProps {
  from?: number
  to: number
  suffix?: string
  label: string
  duration?: number
}

export function AnimatedCounter({
  from = 0,
  to,
  suffix = "",
  label,
  duration = 2,
}: AnimatedCounterProps) {
  const count = useMotionValue(to)
  const rounded = useTransform(() => Math.round(count.get()))
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      count.set(to)
      return
    }
    count.set(from)
    animate(count, to, { duration, ease: "easeOut" as const })
  }, [inView, count, from, to, duration, reduceMotion])

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center gap-0">
        <motion.span className="font-sans text-3xl font-bold tabular-nums tracking-tight text-accent sm:text-4xl">
          {rounded}
        </motion.span>
        <span className="font-sans text-2xl font-bold tabular-nums tracking-tight text-accent sm:text-3xl">
          {suffix}
        </span>
      </div>
      <p className="mt-1 text-meta text-muted-foreground">{label}</p>
    </div>
  )
}
