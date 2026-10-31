"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/motion"

interface SectionHeadingProps {
  number: string
  label: string
  title: string
  description?: string
}

export function SectionHeading({
  number,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div {...fadeUp()} className="relative">
      <div className="mb-3 flex items-center gap-3">
        <span className="font-mono text-eyebrow font-medium uppercase text-accent">
          {label}
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <h2 className="font-sans text-section font-bold text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-body text-muted-foreground">
          {description}
        </p>
      )}
      <span
        className="section-number"
        aria-hidden="true"
      >
        {number}
      </span>
    </motion.div>
  )
}
