"use client"

import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Check,
  Code2,
  CreditCard,
  Database,
  GitBranch,
  Layers,
  Lock,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { fadeUp } from "@/lib/motion"
import { featuredStats } from "@/lib/resume-data"

const statIcons = [Database, GitBranch, Code2, ShieldCheck, Layers, CreditCard]

const meta = [
  { label: "Role", value: "Backend / Full-Stack Developer" },
  { label: "Stack", value: "Laravel · PHP · MySQL · Razorpay · Claude API" },
  { label: "Scope", value: "Architecture · Payments · Security · AI support" },
]

const architectureItems = [
  {
    title: "Five-step Razorpay verification",
    body: "Payments are verified server-side with HMAC signatures and webhook reconciliation before the app treats them as successful. Duplicate requests and refunds are handled in the same flow.",
  },
  {
    title: "18 security controls",
    body: "CSRF protection, rate limiting, role-based permissions, KYC checks, account-status enforcement, and audit logging protect donor data and admin actions.",
  },
  {
    title: "AI donor support",
    body: "A Claude-powered chatbot answers common donor questions inside the flow, so people don't have to leave the page or wait for a reply.",
  },
]

const highlightsItems = [
  {
    title: "Reliable email delivery",
    body: "Queued flows handle welcome messages, receipts, campaign updates, and security alerts without slowing the request cycle.",
  },
  {
    title: "Idempotent payments",
    body: "Retries don't create double charges. Refunds are automated and reconciled against the original donation.",
  },
  {
    title: "Full transaction audit trail",
    body: "Every transaction leaves a traceable record, which the team uses for support queries, compliance checks, and disputes.",
  },
]

export function CaseStudy() {
  return (
    <section
      id="featured"
      className="relative scroll-mt-20 overflow-hidden px-4 py-20 sm:px-8 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]"
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="03"
          label="FEATURED PROJECT"
          title="DonateBazaar: Built for Reliable Online Fundraising"
          description="DonateBazaar is a Laravel fundraising platform. I owned the backend: architecture, data model, payment lifecycle, security, and donor support. The goal throughout was simple: every donation should be verified, recorded, and easy to trace."
        />

        <motion.div
          {...fadeUp(0.06)}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 font-mono text-meta text-muted-foreground">
            <Lock aria-hidden className="h-3 w-3 text-accent" />
            Internal product · Not publicly accessible
          </span>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-ui font-medium text-accent-foreground transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transform-none"
          >
            Request a walkthrough
            <ArrowUpRight
              aria-hidden
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
            />
          </a>
        </motion.div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {meta.map((item, i) => (
            <motion.div
              key={item.label}
              {...fadeUp(0.08 + i * 0.04)}
              className="rounded-xl border border-border bg-surface p-4"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-1.5 text-body-sm font-medium text-foreground">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp(0.18)}
          className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm shadow-black/5 dark:shadow-black/20"
        >
          <div className="flex items-center justify-between gap-3 border-b border-border bg-background/40 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/10 text-accent">
                <Layers aria-hidden className="h-3.5 w-3.5" />
              </span>
              <h3 className="font-sans text-body-sm font-semibold text-foreground">
                Platform at a glance
              </h3>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              06 metrics
            </span>
          </div>

          <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-6">
            {featuredStats.map((stat, i) => {
              const Icon = statIcons[i]

              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-2 bg-surface p-4"
                >
                  {Icon && (
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/10 text-accent">
                      <Icon
                        aria-hidden
                        className="h-3.5 w-3.5"
                        strokeWidth={1.6}
                      />
                    </span>
                  )}
                  <AnimatedCounter
                    to={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    duration={1.2}
                  />
                </div>
              )
            })}
          </div>
        </motion.div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <motion.div
            {...fadeUp(0.22)}
            className="rounded-2xl border border-border bg-surface p-6 sm:p-7"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Server aria-hidden className="h-4 w-4" />
              </span>
              <div>
                <h3 className="font-sans text-card font-semibold text-foreground">
                  Architecture &amp; Engineering
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  How it is built
                </p>
              </div>
            </div>

            <ul className="mt-5 space-y-4">
              {architectureItems.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <Check aria-hidden className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <div>
                    <p className="text-body-sm font-medium text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-pretty text-body-sm text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp(0.28)}
            className="rounded-2xl border border-border bg-surface p-6 sm:p-7"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary/20 text-accent">
                <Sparkles aria-hidden className="h-4 w-4" />
              </span>
              <div>
                <h3 className="font-sans text-card font-semibold text-foreground">
                  Key Highlights
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Why it holds up
                </p>
              </div>
            </div>

            <ul className="mt-5 space-y-4">
              {highlightsItems.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-secondary/20 text-accent">
                    <Check aria-hidden className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <div>
                    <p className="text-body-sm font-medium text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-pretty text-body-sm text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          {...fadeUp(0.32)}
          className="mt-6 rounded-xl border border-dashed border-border bg-surface/60 px-5 py-4 text-center font-mono text-meta text-muted-foreground"
        >
          Demo available on request. I can walk through the payment flow,
          security controls, and admin audit trail.
        </motion.p>
      </div>
    </section>
  )
}
