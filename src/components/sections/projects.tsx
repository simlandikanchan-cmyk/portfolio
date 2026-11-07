"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { fadeUp } from "@/lib/motion"
import { projects } from "@/lib/resume-data"

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="05"
          label="PORTFOLIO"
          title="Projects"
          description="Sites, platforms, and dashboards I've built or worked on, with links to the live versions where they exist."
        />

        <div className="mt-12 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const isExternal = project.href?.startsWith("http") ?? false
            const LinkIcon = isExternal ? ArrowUpRight : ArrowRight

            const card = (
              <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-[transform,border-color,box-shadow] duration-300 ease-out group-hover:-translate-y-1 group-hover:border-accent/40 group-hover:shadow-xl group-hover:shadow-black/5 dark:group-hover:shadow-black/25">
                <div className="relative flex aspect-[2/1] w-full items-center justify-center overflow-hidden border-b border-border bg-muted/40">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? `${project.title} preview`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transform-none"
                    />
                  ) : (
                    <>
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-[0.07]"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
                          backgroundSize: "26px 26px",
                        }}
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-[0.12]"
                        style={{
                          background:
                            "radial-gradient(circle at 30% 20%, var(--accent) 0%, transparent 62%)",
                        }}
                      />
                      <span className="relative font-mono text-5xl font-bold tracking-tighter text-foreground/10">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </>
                  )}

                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-background/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground backdrop-blur-sm">
                      {isExternal && (
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      )}
                      {isExternal ? "Live" : "Project"}
                    </span>
                    <span className="rounded-md border border-border/60 bg-background/80 px-2 py-0.5 font-mono text-[10px] tabular-nums text-muted-foreground backdrop-blur-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {project.href && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 hidden items-end justify-between gap-2 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:flex motion-reduce:opacity-100"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/90">
                        {project.linkLabel ?? "View project"}
                      </span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-black">
                        <ArrowUpRight
                          aria-hidden="true"
                          className="h-3.5 w-3.5"
                        />
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-sans text-lg font-semibold leading-snug transition-colors duration-200 group-hover:text-accent">
                      {project.title}
                    </h3>
                    {project.href && (
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                        <LinkIcon
                          aria-hidden="true"
                          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
                        />
                      </span>
                    )}
                  </div>

                  <p className="mt-2 line-clamp-2 text-pretty text-body-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-border bg-background/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )

            return (
              <motion.div
                key={project.title}
                {...fadeUp(i * 0.06, 20)}
                className="h-full"
              >
                {project.href ? (
                  <a
                    href={project.href}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {card}
                  </a>
                ) : (
                  <div className="group h-full">{card}</div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
