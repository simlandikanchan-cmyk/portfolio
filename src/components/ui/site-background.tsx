export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-50 dark:opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 85% 65% at 50% 0%, black 25%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 65% at 50% 0%, black 25%, transparent 90%)",
        }}
      />

      <div
        className="absolute -right-[12%] -top-[18%] h-[46rem] w-[46rem] rounded-full opacity-70 motion-safe:animate-[aurora-drift_26s_ease-in-out_infinite] dark:opacity-40"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--accent) 14%, transparent) 0%, transparent 68%)",
        }}
      />

      <div
        className="absolute -left-[15%] top-[32%] h-[36rem] w-[36rem] rounded-full opacity-50 motion-safe:animate-[aurora-drift-reverse_32s_ease-in-out_infinite] dark:opacity-30"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--secondary) 20%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-background/40 to-transparent" />
    </div>
  )
}
