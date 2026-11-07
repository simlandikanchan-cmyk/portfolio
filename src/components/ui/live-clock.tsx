"use client"

import { useEffect, useState } from "react"
import { Clock3 } from "lucide-react"
import { cn } from "@/lib/utils"

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
})

export function LiveClock({ className }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-surface/60 px-2.5 py-1 font-mono text-[11px] tabular-nums text-muted-foreground",
        className
      )}
      aria-label="Current time in India"
    >
      <Clock3 aria-hidden className="h-3 w-3 text-accent/70" strokeWidth={1.8} />
      <span className="min-w-[4.5rem] text-center">{time ?? "--:--:--"}</span>
      <span className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
        IST
      </span>
    </div>
  )
}
