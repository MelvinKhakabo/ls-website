export type CalendarTag = 'PUMaC' | 'STEM Hackathon' | 'AI Hackathon' | 'Public Speaking' | 'Holiday Camps' | 'Break'
export type CalendarItem = { when: string; title: string; tag: CalendarTag }

const tagStyles: Record<CalendarTag, string> = {
  PUMaC: 'bg-navy/10 text-navy',
  'STEM Hackathon': 'bg-terracotta/10 text-terracotta',
  'AI Hackathon': 'bg-terracotta text-white',
  'Public Speaking': 'bg-ochre/25 text-ink',
  'Holiday Camps': 'bg-ochre text-ink',
  Break: 'bg-line text-muted',
}

export default function CalendarList({ items, note }: { items: CalendarItem[]; note?: string }) {
  return (
    <div>
      {note && <p className="mb-4 text-center text-xs italic text-muted">{note}</p>}
      <div className="relative overflow-hidden rounded-card border border-line bg-white">
        <ul className="max-h-[420px] overflow-y-auto p-2 [scrollbar-width:thin]">
          {items.map((it, i) => (
            <li key={i} className="flex items-center gap-4 rounded-2xl px-4 py-3.5 transition hover:bg-ivory">
              <span className="w-24 shrink-0 font-display text-sm font-bold text-terracotta">{it.when}</span>
              <span className="flex-1 text-sm font-semibold sm:text-base">{it.title}</span>
              <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${tagStyles[it.tag]}`}>{it.tag}</span>
            </li>
          ))}
        </ul>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-white to-transparent" />
      </div>
    </div>
  )
}
