"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { fadeUp } from "@/lib/motion"
import { skillGroups } from "@/lib/resume-data"

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 sm:py-28 px-4 sm:px-8 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="04"
          label="TOOLBOX"
          title="Technical Skills"
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              {...fadeUp(i * 0.08, 20)}
              className="p-5 rounded-xl border border-border bg-surface"
            >
              <span className="font-mono text-meta text-accent">
                {group.category.toLowerCase().replace(/\s+/g, "_")}()
              </span>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-muted px-3 py-1.5 font-mono text-meta font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
