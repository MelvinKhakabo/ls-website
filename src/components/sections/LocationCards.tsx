import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin } from 'lucide-react'
import PatternDivider from '@/components/layout/PatternDivider'

export type Place = {
  code: string
  title: string
  address: string
  chip?: string
  photo?: string
  cta: { label: string; to: string }
}

export default function LocationCards({ places }: { places: Place[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {places.map((p, i) => {
        const external = p.cta.to.startsWith('http')
        const inner = (
          <>
            <div className="relative h-56 overflow-hidden">
              {p.photo ? (
                <img src={p.photo} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              ) : (
                <div className="flex h-full items-center justify-center bg-linear-to-br from-ivory to-ochre/40 transition duration-700 group-hover:scale-105">
                  <span className="font-display text-6xl font-bold text-terracotta/80">{p.code}</span>
                </div>
              )}
              <PatternDivider className="absolute inset-x-0 bottom-0" />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="mt-2 flex gap-2 text-muted"><MapPin size={18} className="mt-0.5 shrink-0 text-terracotta" />{p.address}</p>
              {p.chip && <span className="mt-4 w-fit rounded-full bg-ivory px-3 py-1 text-xs font-semibold text-terracotta">{p.chip}</span>}
              <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-terracotta">
                {p.cta.label}
                <ArrowUpRight size={18} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-1" />
              </span>
            </div>
          </>
        )
        const cls = 'group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/10'
        return (
          <motion.div
            key={p.code}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            {external ? (
              <a href={p.cta.to} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
            ) : (
              <Link to={p.cta.to} className={cls}>{inner}</Link>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
