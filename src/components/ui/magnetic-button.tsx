"use client"

import { useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MagneticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  href?: string
  className?: string
  variant?: "primary" | "outline"
}

export function MagneticButton({
  children,
  href,
  className,
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const reduceMotion = useReducedMotion()

  const handleMouse = (e: React.MouseEvent) => {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x: x * 0.25, y: y * 0.25 })
  }

  const reset = () => setPosition({ x: 0, y: 0 })

  const base =
    "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-ui font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50"

  const variants = {
    primary:
      "bg-accent text-accent-foreground hover:bg-accent-hover",
    outline:
      "border border-border text-foreground hover:border-accent hover:bg-muted",
  }

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={reduceMotion ? undefined : { x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault()
          document
            .querySelector(href)
            ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" })
        }}
        className="inline-flex rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {content}
      </a>
    )
  }

  return (
    <button
      {...props}
      className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {content}
    </button>
  )
}
