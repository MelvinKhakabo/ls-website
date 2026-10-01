import PatternDivider from '@/components/layout/PatternDivider'

export type Stat = { value: string; label: string }

function Row({ stats, hidden }: { stats: Stat[]; hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {stats.map((s, i) => (
        <div key={i} className="flex items-center">
          <div className="px-12 text-center">
            <div className="font-display text-4xl font-bold text-terracotta md:text-5xl">{s.value}</div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted">{s.label}</div>
          </div>
          <span className="h-2.5 w-2.5 rotate-45 bg-ochre" />
        </div>
      ))}
    </div>
  )
}

export default function ProofMarquee({ stats }: { stats: Stat[] }) {
  const row = [...stats, ...stats] // wide enough to fill large screens
  return (
    <section aria-label="Our track record" className="mt-16">
      <PatternDivider />
      <div className="group overflow-hidden bg-white py-10">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          <Row stats={row} />
          <Row stats={row} hidden />
        </div>
      </div>
      <PatternDivider />
    </section>
  )
}
