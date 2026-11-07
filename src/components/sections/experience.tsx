"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronDown } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { RichText } from "@/components/ui/rich-text"
import { fadeUp } from "@/lib/motion"
import { experiences } from "@/lib/resume-data"
import { cn } from "@/lib/utils"

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="experience"
      className="scroll-mt-20 border-y border-border/50 bg-muted/30 px-4 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          number="02"
          label="EXPERIENCE"
          title="Where I've Worked"
          description="The roles I've held since 2022 and the work I owned in each."
        />

        <div className="relative mt-12">
          <div className="space-y-4">
            {experiences.map((exp, idx) => {
              const isOpen = openIndex === idx
              const isCurrent = /present/i.test(exp.period)

              return (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  {...fadeUp(idx * 0.08)}
                  className="relative"
                >
                  <div
                    className={cn(
                      "overflow-hidden rounded-2xl border bg-surface transition-[border-color,box-shadow] duration-300",
                      isOpen
                        ? "border-accent/40 shadow-sm shadow-black/5 dark:shadow-black/20"
                        : "border-border hover:border-accent/25"
                    )}
                  >
                    <button
                      id={`exp-trigger-${idx}`}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      aria-controls={`exp-panel-${idx}`}
                      className="flex w-full items-start justify-between gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:p-6"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-sans text-card font-semibold">
                            {exp.role}
                          </h3>
                          {isCurrent && (
                            <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase leading-none tracking-wide text-accent">
                              <span
                                aria-hidden
                                className="h-1.5 w-1.5 rounded-full bg-accent"
                              />
                              Current
                            </span>
                          )}
                          {exp.note && (
                            <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] uppercase leading-none tracking-wide text-muted-foreground/80">
                              {exp.note}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-body-sm text-muted-foreground">
                          {exp.company}
                        </p>
                        <p className="mt-2 font-mono text-meta tabular-nums text-accent sm:hidden">
                          {exp.period}
                        </p>
                      </div>

                      <div className="flex shrink-0 flex-col items-end gap-2 sm:gap-3">
                        <span className="hidden rounded-full border border-border bg-background/60 px-2.5 py-1 font-mono text-[11px] tabular-nums leading-none text-muted-foreground sm:inline-flex">
                          {exp.period}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className={cn(
                            "flex h-6 w-6 items-center justify-center rounded-full border transition-colors duration-200",
                            isOpen
                              ? "border-accent/40 bg-accent/10 text-accent"
                              : "border-border text-muted-foreground"
                          )}
                        >
                          <ChevronDown
                            aria-hidden
                            className="h-3.5 w-3.5"
                          />
                        </motion.span>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          id={`exp-panel-${idx}`}
                          role="region"
                          aria-labelledby={`exp-trigger-${idx}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut" as const,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-border/60 px-5 py-5 sm:px-6">
                            <ul className="space-y-3">
                              {exp.achievements.map((ach, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, y: 4 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                    delay: i * 0.04,
                                    duration: 0.25,
                                  }}
                                  className="flex gap-3 text-pretty text-body-sm text-muted-foreground"
                                >
                                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                                    <Check
                                      aria-hidden
                                      className="h-3 w-3"
                                      strokeWidth={2.5}
                                    />
                                  </span>
                                  <span>
                                    <RichText text={ach} />
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
