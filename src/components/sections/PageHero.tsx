import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import Button, { type ButtonVariant } from '@/components/ui/Button'
import DiamondMotif from '@/components/ui/DiamondMotif'

const toneStyles = {
  ink: { base: 'bg-ink', fallback: 'from-ink via-ink-soft to-terracotta/50', overlay: 'from-ink/90 via-ink/50 to-ink/10' },
  navy: { base: 'bg-navy', fallback: 'from-navy via-navy to-ochre/30', overlay: 'from-navy/90 via-navy/50 to-navy/10' },
}

type Props = {
  eyebrow: string
  title: ReactNode
  subtitle?: string
  photo?: string
  photoAlt?: string
  ctas?: { label: string; to: string; variant?: ButtonVariant }[]
  tone?: 'ink' | 'navy'
  meta?: ReactNode
}

export default function PageHero({ eyebrow, title, subtitle, photo, photoAlt, ctas = [], tone = 'ink', meta }: Props) {
  const t = toneStyles[tone]
  return (
    <section className="px-3 pt-24 sm:px-4">
      <div className={`relative mx-auto flex min-h-[460px] max-w-[1400px] items-end overflow-hidden rounded-[2rem] ${t.base}`}>
        {photo ? (
          <img src={photo} alt={photoAlt ?? ''} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <div className={`absolute inset-0 bg-linear-to-br ${t.fallback}`} />
        )}
        <div className={`absolute inset-0 bg-linear-to-t ${t.overlay}`} />
        <DiamondMotif className="absolute -right-16 -top-16 h-80 w-80 text-ochre opacity-10" />
        {!photo && photoAlt && (
          <span className="absolute right-8 top-8 rounded-full border border-white/20 px-4 py-1.5 text-xs uppercase tracking-widest text-white/50">
            {photoAlt}
          </span>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 max-w-3xl p-6 sm:p-12 lg:p-16"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-ochre">{eyebrow}</p>
          <h1 className="text-4xl font-bold leading-[1.05] text-white md:text-6xl">{title}</h1>
          {subtitle && <p className="mt-5 max-w-2xl text-lg text-white/75">{subtitle}</p>}
          {ctas.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {ctas.map((c) => (
                <Button key={c.label} to={c.to} variant={c.variant}>{c.label}</Button>
              ))}
            </div>
          )}
          {meta && <div className="mt-6">{meta}</div>}
        </motion.div>
      </div>
    </section>
  )
}
