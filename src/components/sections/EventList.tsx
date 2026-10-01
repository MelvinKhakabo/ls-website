import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowUpRight, MapPin } from 'lucide-react'

export type EventItem = {
  date: string
  sub?: string
  title: string
  location?: string
  tag?: string
  cta?: { label: string; to: string }
}

const ctaCls =
  'inline-flex shrink-0 items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold transition group-hover:border-terracotta group-hover:text-terracotta'

export default function EventList({ items }: { items: EventItem[] }) {
  return (
    <ul className="space-y-4">
      {items.map((e, i) => (
        <motion.li
          key={`${e.title}-${i}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
        >
          <div className="group flex flex-col gap-5 rounded-card border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink/5 sm:flex-row sm:items-center">
            <div className="flex h-20 w-24 shrink-0 flex-col items-center justify-center rounded-2xl bg-ivory text-center">
              <span className="font-display text-lg font-bold leading-tight text-terracotta">{e.date}</span>
              {e.sub && <span className="text-xs text-muted">{e.sub}</span>}
            </div>
            <div className="flex-1">
              {e.tag && <span className="text-xs font-semibold uppercase tracking-widest text-muted">{e.tag}</span>}
              <h3 className="text-lg font-bold">{e.title}</h3>
              {e.location && (
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted"><MapPin size={14} />{e.location}</p>
              )}
            </div>
            {e.cta &&
              (e.cta.to.startsWith('http') ? (
                <a href={e.cta.to} className={ctaCls}>{e.cta.label} <ArrowUpRight size={16} /></a>
              ) : (
                <Link to={e.cta.to} className={ctaCls}>{e.cta.label} <ArrowUpRight size={16} /></Link>
              ))}
          </div>
        </motion.li>
      ))}
    </ul>
  )
}
