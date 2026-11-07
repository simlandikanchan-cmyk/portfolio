"use client"

import { motion } from "framer-motion"
import {
  BarChart3,
  Braces,
  CreditCard,
  Database,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { fadeUp } from "@/lib/motion"
import { skillGroups } from "@/lib/resume-data"

const groupIcons: Record<string, LucideIcon> = {
  "Languages and Frameworks": Braces,
  "Tools & Practices": Wrench,
  "Databases and Data Modeling": Database,
  "Payments and Integrations": CreditCard,
  "Security Engineering": ShieldCheck,
  "Data and BI": BarChart3,
}

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-muted/30 px-4 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="04"
          label="TOOLBOX"
          title="Tools I Work With"
          description="The stack I use day to day, plus tools I've picked up through project work."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[group.category] ?? Braces

            return (
              <motion.div
                key={group.category}
                {...fadeUp(i * 0.08, 20)}
                className="group rounded-xl border border-border bg-surface p-5 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-sm hover:shadow-black/5 dark:hover:shadow-black/20"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 font-mono text-meta text-accent">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent/10">
                      <Icon size={13} strokeWidth={2} aria-hidden="true" />
                    </span>
                    {group.category.toLowerCase().replace(/\s+/g, "_")}()
                  </span>
                  <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-muted px-3 py-1.5 font-mono text-meta font-medium text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
