"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { fadeUp } from "@/lib/motion"
import { projects } from "@/lib/resume-data"

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-28 px-4 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading number="05" label="PORTFOLIO" title="Projects" />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => {
            const isExternal = project.href?.startsWith("http") ?? false
            const LinkIcon = isExternal ? ArrowUpRight : ArrowRight

            const card = (
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-[transform,border-color] duration-300 ease-out group-hover:-translate-y-1 group-hover:border-accent/40 group-focus-visible:border-accent/40">
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-meta text-accent">
                          project_{i + 1}()
                        </span>
                        {isExternal && (
                          <span className="rounded border border-accent/30 bg-accent/10 px-1.5 py-0.5 font-mono text-[10px] uppercase leading-none tracking-wide text-accent">
                            Live
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 font-sans text-card font-semibold transition-colors duration-200 group-hover:text-accent">
                        {project.title}
                      </h3>
                    </div>
                    {project.href && (
                      <LinkIcon
                        aria-hidden="true"
                        className="mt-6 h-4 w-4 shrink-0 text-muted-foreground transition-[opacity,transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    )}
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
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {project.href && project.linkLabel && (
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-mono text-meta text-accent">
                      {project.linkLabel}
                      <LinkIcon aria-hidden="true" className="h-3 w-3" />
                    </span>
                  )}
                </div>
              </article>
            )

            return (
              <motion.div
                key={project.title}
                {...fadeUp(i * 0.08, 20)}
                className="h-full"
              >
                {project.href ? (
                  <a
                    href={project.href}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label={`${project.title} — ${project.linkLabel ?? "View project"}`}
                  >
                    {card}
                  </a>
                ) : (
                  <div className="h-full">{card}</div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
