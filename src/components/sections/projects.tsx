"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { fadeUp } from "@/lib/motion"
import { projects } from "@/lib/resume-data"
import { ExternalLink } from "lucide-react"

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-28 px-4 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="05"
          label="PORTFOLIO"
          title="Projects"
        />

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div key={project.title} {...fadeUp(i * 0.08, 20)}>
              <article className="group relative rounded-2xl border border-border bg-surface p-6 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span className="font-mono text-meta text-accent">
                      project_{i + 1}()
                    </span>
                    <h3 className="mt-2 font-sans text-card font-semibold transition-colors duration-200 group-hover:text-accent">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink className="mt-6 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-[opacity,transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100" />
                </div>

                <p className="mt-3 max-w-prose text-pretty text-body-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-accent/10 px-2.5 py-1 font-mono text-meta text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 max-w-prose space-y-1.5">
                  {project.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-pretty text-body-sm text-muted-foreground"
                    >
                      <span className="shrink-0 mt-1 w-1 h-1 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
