import { useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Button, { type ButtonVariant } from '@/components/ui/Button'

export type HeroSlide = { src?: string; alt: string }
type Cta = { label: string; to: string; variant?: ButtonVariant }

type Props = {
  eyebrow?: string
  title: ReactNode
  subtitle?: string
  slides: HeroSlide[]
  ctas?: Cta[]
  trustLine?: string
}

export default function Hero({ eyebrow, title, subtitle, slides, ctas = [], trustLine }: Props) {
  const [index, setIndex] = useState(0)
  const reduce = useReducedMotion()
  const slide = slides[index]

  useEffect(() => {
    if (slides.length < 2) return
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [slides.length])

  return (
    <section className="px-3 pt-24 sm:px-4">
      <div className="relative mx-auto h-[80vh] min-h-[600px] max-w-[1400px] overflow-hidden rounded-[2rem] bg-ink">
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: reduce ? 1 : 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.2 }, scale: { duration: 7, ease: 'linear' } }}
          >
            {slide.src ? (
              <img src={slide.src} alt={slide.alt} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-start justify-center bg-linear-to-br from-ink via-ink-soft to-terracotta/60 pt-32">
                <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs uppercase tracking-widest text-white/50">
                  {slide.alt}
                </span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/40 to-ink/10" />

        <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            {eyebrow && <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-ochre">{eyebrow}</p>}
            <h1 className="text-5xl font-bold leading-[1.04] text-white md:text-6xl lg:text-7xl">{title}</h1>
            {subtitle && <p className="mt-5 max-w-xl text-lg text-white/75">{subtitle}</p>}
            {ctas.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {ctas.map((c) => (
                  <Button key={c.label} to={c.to} variant={c.variant}>{c.label}</Button>
                ))}
              </div>
            )}
            {trustLine && <p className="mt-8 text-xs uppercase tracking-widest text-white/50">{trustLine}</p>}
          </motion.div>
        </div>

        {slides.length > 1 && (
          <div className="absolute bottom-6 right-6 z-10 flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.alt}
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
