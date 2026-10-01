import { motion } from 'motion/react'
import Button, { type ButtonVariant } from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import DiamondMotif from '@/components/ui/DiamondMotif'

export type Feature = {
  id: string
  track: string
  title: string
  tagline?: string
  paragraphs: string[]
  lists?: { heading: string; items: string[] }[]
  meta?: string[]
  photo?: string
  photoAlt: string
  accent: 'navy' | 'terracotta' | 'ochre'
  ctas: { label: string; to: string; variant?: ButtonVariant }[]
}

const accents = {
  navy: { eyebrow: 'text-navy', photo: 'from-navy to-navy/70', chip: 'bg-navy/10 text-navy', motif: 'text-ochre' },
  terracotta: { eyebrow: 'text-terracotta', photo: 'from-terracotta to-ochre', chip: 'bg-terracotta/10 text-terracotta', motif: 'text-white' },
  ochre: { eyebrow: 'text-ink/60', photo: 'from-ochre to-terracotta/60', chip: 'bg-ochre/25 text-ink', motif: 'text-ink' },
}

export default function ProgramFeature({ f, flip }: { f: Feature; flip?: boolean }) {
  const a = accents[f.accent]
  return (
    <section id={f.id} className="scroll-mt-28 py-12 md:py-16">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: flip ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className={`group relative aspect-[4/3] overflow-hidden rounded-card ${flip ? 'lg:order-2' : ''}`}
        >
          {f.photo ? (
            <img src={f.photo} alt={f.photoAlt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          ) : (
            <div className={`flex h-full items-center justify-center bg-linear-to-br ${a.photo}`}>
              <span className="rounded-full border border-white/40 px-4 py-1.5 text-xs uppercase tracking-widest text-white/80">{f.photoAlt}</span>
            </div>
          )}
          <DiamondMotif className={`absolute -bottom-10 -right-10 h-48 w-48 opacity-20 ${a.motif}`} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className={`text-xs font-bold uppercase tracking-[0.18em] ${a.eyebrow}`}>{f.track}</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">{f.title}</h2>
          {f.tagline && <p className="mt-3 font-display text-xl font-semibold text-muted">{f.tagline}</p>}
          <div className="mt-6 space-y-4 leading-relaxed text-ink/80">
            {f.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
          {f.lists?.map((l) => (
            <div key={l.heading} className="mt-6">
              <p className="mb-3 text-sm font-semibold">{l.heading}</p>
              <div className="flex flex-wrap gap-2">
                {l.items.map((it) => (
                  <span key={it} className={`rounded-full px-3 py-1.5 text-sm font-medium ${a.chip}`}>{it}</span>
                ))}
              </div>
            </div>
          ))}
          {f.meta && <p className="mt-6 text-sm font-semibold text-muted">{f.meta.join(' · ')}</p>}
          <div className="mt-8 flex flex-wrap gap-3">
            {f.ctas.map((c) => (
              <Button key={c.label} to={c.to} variant={c.variant}>{c.label}</Button>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
