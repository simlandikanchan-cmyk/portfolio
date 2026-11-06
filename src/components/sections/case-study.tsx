"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { fadeUp } from "@/lib/motion"
import { featuredStats } from "@/lib/resume-data"
import {
  Shield,
  Zap,
  Server,
  Lock,
  Layers,
  Code,
} from "lucide-react"

const statIcons = [Code, Server, Zap, Shield, Layers, Lock]

const architectureItems = [
  "Five-step Razorpay verification with HMAC signing and webhook reconciliation",
  "18 security controls, including CSRF protection, rate limiting, role and status checks, KYC, and audit logging",
  "AI support chatbot powered by the Anthropic Claude API",
]

const highlightsItems = [
  "Queued email flows for welcome messages, receipts, campaign updates, and security alerts",
  "Idempotent payments with automated refund handling",
  "An audit trail for every transaction",
]

export function CaseStudy() {
  return (
    <section
      id="featured"
      className="scroll-mt-20 py-20 sm:py-28 px-4 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="03"
          label="FEATURED PROJECT"
          title="DonateBazaar — Built for Reliable Online Fundraising"
          description={
            "DonateBazaar is a Laravel-based fundraising platform designed to make online donations more secure and reliable. I worked across its backend architecture, payment processing, application security, and AI-powered donor support, building features that help campaigns and donors interact with confidence."
          }
        />

        <div className="mt-5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 font-mono text-meta text-muted-foreground">
            <Lock className="h-3 w-3 text-accent" aria-hidden="true" />
            Internal product — not publicly accessible · Demo available on request
          </span>
        </div>

        <div className="mt-10">
          <h3 className="font-sans text-card font-semibold text-foreground">
            By the Numbers
          </h3>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {featuredStats.map((stat, i) => {
              const Icon = statIcons[i]
              return (
                <motion.div
                  key={stat.label}
                  {...fadeUp(i * 0.06)}
                  className="flex flex-col items-center gap-2 p-5 rounded-xl border border-border bg-surface"
                >
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    {Icon && <Icon className="w-4 h-4" />}
                  </div>
                  <AnimatedCounter
                    to={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    duration={1.2}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <motion.div
            {...fadeUp(0.12)}
            className="p-6 rounded-2xl border border-border bg-surface"
          >
            <h3 className="mb-4 font-sans text-card font-semibold text-foreground">
              Architecture &amp; Engineering
            </h3>
            <div className="space-y-3">
              {architectureItems.map((item, i) => (
                <div
                  key={i}
                  className="flex max-w-prose gap-2 text-pretty text-body-sm text-muted-foreground"
                >
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.18)}
            className="p-6 rounded-2xl border border-border bg-surface"
          >
            <h3 className="mb-4 font-sans text-card font-semibold text-foreground">
              Key Highlights
            </h3>
            <div className="space-y-3">
              {highlightsItems.map((item, i) => (
                <div
                  key={i}
                  className="flex max-w-prose gap-2 text-pretty text-body-sm text-muted-foreground"
                >
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
