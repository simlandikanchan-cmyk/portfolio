"use client"

import { motion } from "framer-motion"
import {
  Award,
  CalendarDays,
  GraduationCap,
  MapPin,
} from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { fadeUp } from "@/lib/motion"
import { certifications, education } from "@/lib/resume-data"
import { cn } from "@/lib/utils"

function scoreValue(score?: string) {
  const value = Number.parseFloat(score ?? "0")
  return Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : 0
}

const scores = education
  .map((item) => scoreValue(item.score))
  .filter((value) => value > 0)
const highestScore = scores.length > 0 ? Math.max(...scores) : 0
const graduationYear =
  education[0]?.period.match(/\d{4}/g)?.slice(-1)[0] ?? "—"
const degreeLabel =
  education[0]?.degree.split("/").slice(-1)[0]?.trim() ?? "B.Tech"

const snapshot = [
  {
    label: "highest score",
    value: highestScore > 0 ? `${highestScore}%` : "—",
  },
  {
    label: "qualifications",
    value: String(education.length).padStart(2, "0"),
  },
  { label: "graduated", value: graduationYear },
  {
    label: "certifications",
    value: String(certifications.length).padStart(2, "0"),
  },
]

function ScoreRingLarge({ score }: { score: string }) {
  const value = scoreValue(score)
  const radius = 42
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - value / 100)

  return (
    <div className="relative h-20 w-20 shrink-0 sm:h-28 sm:w-28">
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full -rotate-90"
        aria-hidden="true"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="var(--muted)"
          strokeWidth="6"
        />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-sans text-base font-bold tabular-nums text-accent sm:text-xl">
          {score}
        </span>
        <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[9px]">
          score
        </span>
      </div>
    </div>
  )
}

function ScoreRingSmall({ score }: { score: string }) {
  const value = scoreValue(score)
  const radius = 20
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - value / 100)

  return (
    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
      <svg
        viewBox="0 0 48 48"
        className="h-12 w-12 -rotate-90"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="var(--muted)"
          strokeWidth="3.5"
        />
        <motion.circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <span className="absolute font-mono text-[11px] font-semibold tabular-nums text-accent">
        {score}
      </span>
    </div>
  )
}

function ScoreBar({ value }: { value: number }) {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        <span>score</span>
        <span className="text-accent">{value}%</span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent/50 to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

export function Education() {
  const [featured, ...others] = education

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          number="06"
          label="LEARNING"
          title="Education & Certifications"
          description="The formal side of my background, plus the certification I completed for my Power BI work."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {featured && (
            <motion.article
              {...fadeUp(0.08)}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-[border-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/40 sm:p-8 lg:col-span-7"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span className="font-mono text-eyebrow uppercase tracking-[0.18em] text-accent">
                    Bachelor&apos;s degree
                  </span>
                  <h3 className="mt-2 font-sans text-2xl font-bold tracking-tight sm:text-3xl">
                    {featured.degree}
                  </h3>
                  <p className="mt-1 text-body-sm text-muted-foreground">
                    {featured.field}
                  </p>
                </div>
                {featured.score && <ScoreRingLarge score={featured.score} />}
              </div>

              <div className="relative mt-6 grid gap-x-5 gap-y-2 border-t border-border pt-5 text-meta text-muted-foreground sm:grid-cols-2">
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {featured.institution}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {featured.location}
                </span>
                <span className="flex items-center gap-1.5 font-mono tabular-nums sm:col-span-2">
                  <CalendarDays className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {featured.period}
                </span>
              </div>

              {featured.score && (
                <div className="relative">
                  <ScoreBar value={scoreValue(featured.score)} />
                </div>
              )}
            </motion.article>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {others.map((edu, i) => {
              const value = scoreValue(edu.score)
              const isHighest = value === highestScore && highestScore > 0

              return (
                <motion.article
                  key={`${edu.degree}-${edu.institution}`}
                  {...fadeUp(0.14 + i * 0.06)}
                  className={cn(
                    "relative overflow-hidden rounded-2xl border bg-surface p-5 transition-[border-color,transform] duration-300 ease-out hover:-translate-y-0.5 sm:p-6",
                    isHighest
                      ? "border-accent/40 hover:border-accent/60"
                      : "border-border hover:border-accent/40"
                  )}
                >
                  <div className="relative flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-meta tabular-nums text-muted-foreground">
                          {edu.period}
                        </span>
                        {isHighest && (
                          <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent">
                            highest
                          </span>
                        )}
                      </div>
                      <h4 className="mt-1.5 font-sans text-card font-semibold leading-snug">
                        {edu.degree}
                      </h4>
                      <p className="mt-1 flex items-center gap-1.5 text-meta text-muted-foreground">
                        <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />
                        {edu.institution} &middot; {edu.location}
                      </p>
                    </div>
                    {edu.score && <ScoreRingSmall score={edu.score} />}
                  </div>

                  {edu.score && (
                    <div className="relative">
                      <ScoreBar value={value} />
                    </div>
                  )}
                </motion.article>
              )
            })}
          </div>

          <motion.div
            {...fadeUp(0.24)}
            className="rounded-2xl border border-border bg-surface p-5 sm:p-6 lg:col-span-7"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2 font-mono text-meta text-accent">
                <Award className="h-3.5 w-3.5" aria-hidden="true" />
                certifications[]
              </span>
              <span className="font-mono text-meta tracking-widest text-muted-foreground">
                {String(certifications.length).padStart(2, "0")}
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-start gap-3 rounded-xl border border-accent/20 bg-gradient-to-br from-accent/[0.08] to-transparent p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                    <Award className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-sans text-body-sm font-semibold leading-snug">
                      {cert.title}
                    </h4>
                    <p className="mt-0.5 text-meta text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.3)}
            className="rounded-2xl border border-border bg-surface p-5 sm:p-6 lg:col-span-5"
          >
            <span className="font-mono text-meta text-accent">
              academic_snapshot
            </span>
            <dl className="mt-4 grid grid-cols-2 gap-2.5">
              {snapshot.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border/80 bg-background/40 p-3"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="mt-1 font-sans text-lg font-bold tabular-nums text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-meta text-muted-foreground">
              {degreeLabel} in {featured?.field ?? "Engineering"}, graduated{" "}
              {graduationYear}.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
