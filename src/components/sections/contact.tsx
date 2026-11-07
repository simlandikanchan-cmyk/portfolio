"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import {
  CircleCheck,
  Clock3,
  Download,
  Loader2,
  Mail,
  MapPin,
  MapPinned,
  Phone,
  Send,
  type LucideIcon,
} from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { fadeUp } from "@/lib/motion"
import { personalInfo } from "@/lib/resume-data"
import { cn } from "@/lib/utils"

type FormErrors = {
  name?: string
  email?: string
  message?: string
}

type ContactItem = {
  icon: LucideIcon
  label: string
  value: string
  href?: string
}

const inputClasses =
  "h-11 w-full rounded-lg border border-input bg-background px-3.5 text-body-sm text-foreground placeholder:text-muted-foreground transition-[border-color,box-shadow,background-color] duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25 disabled:cursor-not-allowed disabled:opacity-50"

const textareaClasses =
  "min-h-28 w-full resize-y rounded-lg border border-input bg-background px-3.5 py-2.5 text-body-sm text-foreground placeholder:text-muted-foreground transition-[border-color,box-shadow,background-color] duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25 disabled:cursor-not-allowed disabled:opacity-50"

const phoneHref = `tel:${personalInfo.phone.replace(/[^\d+]/g, "")}`

const contactItems: ContactItem[] = [
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
  },
  {
    icon: Clock3,
    label: "Notice period",
    value: personalInfo.noticePeriod,
  },
  {
    icon: MapPinned,
    label: "Preferred locations",
    value: personalInfo.preferredLocations.join(" · "),
  },
]

function ContactCard({ icon: Icon, label, value, href }: ContactItem) {
  const content = (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/15 bg-accent/10 text-accent transition-colors group-hover:border-accent/30 group-hover:bg-accent/15">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-eyebrow uppercase text-muted-foreground">
          {label}
        </span>
        <span
          className={cn(
            "mt-0.5 block text-body-sm font-medium [overflow-wrap:anywhere]",
            href && "transition-colors group-hover:text-accent",
          )}
        >
          {value}
        </span>
      </span>
    </>
  )

  const className =
    "group flex items-center gap-3.5 rounded-xl border border-border bg-surface p-4"

  if (href) {
    return (
      <a
        href={href}
        className={cn(
          className,
          "transition-colors duration-200 hover:border-accent/40 hover:bg-accent/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        )}
      >
        {content}
      </a>
    )
  }

  return <div className={className}>{content}</div>
}

function FieldError({
  id,
  message,
}: {
  id: string
  message?: string
}) {
  return (
    <AnimatePresence initial={false}>
      {message && (
        <motion.p
          id={id}
          role="alert"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="mt-1.5 text-meta text-red-600 dark:text-red-400"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  )
}

export function Contact() {
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "opening">("idle")
  const submittingRef = useRef(false)
  const timeoutRef = useRef<number | null>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  const clearError = (field: keyof FormErrors) => {
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (submittingRef.current) return

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const message = String(formData.get("message") ?? "").trim()

    const nextErrors: FormErrors = {}
    if (name.length < 2) {
      nextErrors.name = "Please enter your name."
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address."
    }
    if (message.length < 10) {
      nextErrors.message = "Please add a few more details (at least 10 characters)."
    }

    setErrors(nextErrors)

    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      document.getElementById(firstError)?.focus()
      return
    }

    submittingRef.current = true
    setIsSubmitting(true)
    setStatus("opening")

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`

    timeoutRef.current = window.setTimeout(() => {
      submittingRef.current = false
      setIsSubmitting(false)
      setStatus("idle")
    }, 4000)
  }

  return (
    <section id="contact" className="scroll-mt-20 pt-20 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="07"
          label="GET IN TOUCH"
          title="Let's talk."
          description="I'm open to full-time backend and full-stack roles. If you have an opportunity or a project to discuss, the form below opens your email app with the message ready to send."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="flex flex-col">
            <div className="space-y-3">
              {contactItems.map((item, i) => (
                <motion.div key={item.label} {...fadeUp(i * 0.07)}>
                  <ContactCard {...item} />
                </motion.div>
              ))}
            </div>
            <motion.div {...fadeUp(0.42)} className="mt-4">
              <a
                href="/resume"
                className="group flex items-center gap-3.5 rounded-xl border border-accent/30 bg-accent/5 p-4 transition-colors duration-200 hover:border-accent/50 hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent transition-colors group-hover:border-accent/30 group-hover:bg-accent/15">
                  <Download className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-eyebrow uppercase text-accent">
                    Resume
                  </span>
                  <span className="mt-0.5 block text-body-sm font-medium text-foreground [overflow-wrap:anywhere] transition-colors group-hover:text-accent">
                    View or download resume
                  </span>
                </span>
              </a>
            </motion.div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            noValidate
            aria-busy={isSubmitting}
            {...fadeUp(0.1)}
            className="rounded-2xl border border-border bg-surface p-5 sm:p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-meta text-accent">
                send_message
              </span>
              <span className="font-mono text-eyebrow uppercase text-muted-foreground">
                all fields required
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block font-sans text-meta font-medium capitalize text-foreground/80"
                >
                  name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  onChange={() => clearError("name")}
                  className={cn(
                    inputClasses,
                    errors.name &&
                      "border-red-500/60 focus:border-red-500 focus:ring-red-500/20",
                  )}
                  placeholder="Your name"
                />
                <FieldError id="name-error" message={errors.name} />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block font-sans text-meta font-medium capitalize text-foreground/80"
                >
                  email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  onChange={() => clearError("email")}
                  className={cn(
                    inputClasses,
                    errors.email &&
                      "border-red-500/60 focus:border-red-500 focus:ring-red-500/20",
                  )}
                  placeholder="your@email.com"
                />
                <FieldError id="email-error" message={errors.email} />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block font-sans text-meta font-medium capitalize text-foreground/80"
                >
                  message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  onChange={() => clearError("message")}
                  className={cn(
                    textareaClasses,
                    errors.message &&
                      "border-red-500/60 focus:border-red-500 focus:ring-red-500/20",
                  )}
                  placeholder="Tell me about your project or opportunity..."
                />
                <FieldError id="message-error" message={errors.message} />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={
                  reduceMotion || isSubmitting ? undefined : { scale: 1.01 }
                }
                whileTap={
                  reduceMotion || isSubmitting ? undefined : { scale: 0.99 }
                }
                className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 text-ui font-medium text-accent-foreground transition-colors duration-200 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:pointer-events-none disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Opening email app...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </>
                )}
              </motion.button>

              <AnimatePresence initial={false}>
                {status === "opening" && (
                  <motion.p
                    role="status"
                    aria-live="polite"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex items-start gap-2 rounded-lg border border-accent/20 bg-accent/5 px-3 py-2 text-meta text-muted-foreground"
                  >
                    <CircleCheck
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span>
                      Your email app should open now. If it doesn&apos;t, email me
                      at{" "}
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-accent hover:underline"
                      >
                        {personalInfo.email}
                      </a>
                      .
                    </span>
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
