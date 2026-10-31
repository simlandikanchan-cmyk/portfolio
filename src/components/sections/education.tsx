"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { fadeUp } from "@/lib/motion"
import { education, certifications } from "@/lib/resume-data"

export function Education() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          number="06"
          label="LEARNING"
          title="Education & Certifications"
        />

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          <div>
            <span className="mb-4 flex items-center gap-2 font-mono text-meta text-accent">
              <GraduationCap className="w-3.5 h-3.5" />
              education[]
            </span>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  {...fadeUp(i * 0.07)}
                  className="p-5 rounded-xl border border-border bg-surface"
                >
                  <h4 className="font-sans text-card font-semibold">
                    {edu.degree}
                  </h4>
                  <p className="mt-1 text-body-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-meta text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1 font-mono tabular-nums">
                      <Calendar className="h-3 w-3" aria-hidden="true" />
                      {edu.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <span className="mb-4 flex items-center gap-2 font-mono text-meta text-accent">
              <Award className="w-3.5 h-3.5" />
              certifications[]
            </span>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  {...fadeUp(i * 0.07)}
                  className="p-5 rounded-xl border border-border bg-surface"
                >
                  <h4 className="font-sans text-card font-semibold">
                    {cert.title}
                  </h4>
                  <p className="mt-1 text-body-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
