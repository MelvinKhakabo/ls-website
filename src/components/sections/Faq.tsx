import type { ReactNode } from 'react'
import { Plus } from 'lucide-react'

export type FaqItem = { q: string; a: ReactNode }

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((it) => (
        <details key={it.q} className="group rounded-card border border-line bg-white px-6 py-5 transition open:shadow-lg open:shadow-ink/5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold">
            {it.q}
            <Plus size={20} className="shrink-0 text-terracotta transition group-open:rotate-45" />
          </summary>
          <div className="mt-4 leading-relaxed text-ink/75">{it.a}</div>
        </details>
      ))}
    </div>
  )
}
