import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import DiamondMotif from '@/components/ui/DiamondMotif'

export type Program = {
  number: string
  title: string
  tagline: string
  tone: 'navy' | 'terracotta' | 'ochre'
  description: string
  items: string[]
  ages: string
  cta: { label: string; to: string }
}

const tones = {
  navy: { card: 'bg-navy text-white', chip: 'bg-white/15', motif: 'text-ochre' },
  terracotta: { card: 'bg-terracotta text-white', chip: 'bg-white/20', motif: 'text-white' },
  ochre: { card: 'bg-ochre text-ink', chip: 'bg-ink/10', motif: 'text-ink' },
}

function CardLink({ to, className, children }: { to: string; className: string; children: ReactNode }) {
  return to.startsWith('http') ? <a href={to} className={className}>{children}</a> : <Link to={to} className={className}>{children}</Link>
}

export default function ProgramCards({ programs }: { programs: Program[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {programs.map((p, i) => {
        const t = tones[p.tone]
        return (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
          >
            <CardLink
              to={p.cta.to}
              className={`group relative flex h-full min-h-[480px] flex-col overflow-hidden rounded-card p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/20 ${t.card}`}
            >
              <DiamondMotif className={`absolute -right-8 -top-8 h-40 w-40 opacity-20 transition duration-700 group-hover:rotate-45 group-hover:opacity-35 ${t.motif}`} />
              <div className="flex items-center justify-between text-sm font-semibold">
                <span className="font-display opacity-60">{p.number}</span>
                <span className={`rounded-full px-3 py-1 text-xs ${t.chip}`}>Ages {p.ages}</span>
              </div>
              <h3 className="mt-14 text-3xl font-bold">{p.title}</h3>
              <p className="mt-2 font-display font-semibold opacity-90">“{p.tagline}”</p>
              <p className="mt-4 text-sm leading-relaxed opacity-80">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.items.map((it) => (
                  <span key={it} className={`rounded-full px-3 py-1 text-xs font-medium ${t.chip}`}>{it}</span>
                ))}
              </div>
              <span className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold">
                {p.cta.label}
                <ArrowUpRight size={18} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-1" />
              </span>
            </CardLink>
          </motion.div>
        )
      })}
    </div>
  )
}
