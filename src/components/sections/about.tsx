"use client"

import { motion } from "framer-motion"
import {
  Brain,
  Clock,
  MessageSquare,
  Search,
  Target,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { fadeUp } from "@/lib/motion"
import { personalInfo } from "@/lib/resume-data"

const strengthIcons: Record<string, LucideIcon> = {
  brain: Brain,
  target: Target,
  search: Search,
  zap: Zap,
  "message-square": MessageSquare,
  users: Users,
  clock: Clock,
}

const philosophyLead =
  "I care about what happens after an application goes live, not just whether the code compiles."

const philosophyBody =
  "I think about edge cases, how data moves through a system, what might fail under unexpected conditions, and whether another developer can understand and maintain the code later. Taking the time to get these details right makes applications more dependable and saves effort in the long run. That's the kind of engineering I aim to deliver."

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28 px-4 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="01"
          label="ABOUT"
          title="A Little About Me"
          description={personalInfo.intro}
        />

        <div className="mt-12 grid items-start gap-5 sm:gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <motion.div
            {...fadeUp(0.1)}
            className="rounded-2xl border border-border bg-surface p-5 sm:p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-meta text-accent">languages</span>
              <span className="font-mono text-meta tracking-widest text-muted-foreground">
                {String(personalInfo.languages.length).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-4 space-y-2">
              {personalInfo.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between gap-3 rounded-lg border border-border/80 bg-background/40 px-3 py-2"
                >
                  <span className="text-body-sm font-medium text-foreground">
                    {lang.name}
                  </span>
                  <span className="font-mono text-meta text-accent">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.17)}
            className="rounded-2xl border border-border bg-surface p-5 sm:p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-meta text-accent">
                core_strengths
              </span>
              <span className="font-mono text-meta tracking-widest text-muted-foreground">
                {String(personalInfo.strengths.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="mt-4 grid grid-cols-1 gap-x-5 gap-y-1 sm:grid-cols-2">
              {personalInfo.strengths.map((strength) => {
                const Icon = strengthIcons[strength.icon] ?? Target

                return (
                  <li
                    key={strength.title}
                    className="flex items-center gap-2.5 rounded-lg px-1.5 py-2 text-body-sm text-foreground"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                      <Icon size={14} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="leading-snug">{strength.title}</span>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.24)}
          className="relative mt-5 overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:mt-6 sm:p-8"
        >
          <span className="relative font-mono text-meta text-accent">
            my_philosophy
          </span>
          <div className="relative mt-5 grid gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-10">
            <p className="max-w-md border-l-2 border-accent pl-4 text-card font-medium text-foreground">
              {philosophyLead}
            </p>
            <p className="max-w-prose text-body text-muted-foreground">
              {philosophyBody}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
