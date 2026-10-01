import { motion } from 'motion/react'

export type Testimonial = { quote: string; name: string; photo?: string; photoAlt?: string }

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="group flex h-full flex-col overflow-hidden rounded-card bg-ink text-white"
    >
      <div className="h-64 overflow-hidden">
        {t.photo ? (
          <img src={t.photo} alt={t.photoAlt ?? ''} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        ) : (
          <div className="flex h-full items-center justify-center bg-linear-to-br from-terracotta to-ochre">
            <span className="rounded-full border border-white/40 px-4 py-1.5 text-xs uppercase tracking-widest text-white/80">
              {t.photoAlt ?? 'Photo'}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-8">
        <span className="font-display text-6xl leading-none text-ochre">“</span>
        <blockquote className="mt-1 font-display text-2xl font-semibold leading-snug">{t.quote}</blockquote>
        <figcaption className="mt-auto pt-6 text-xs uppercase tracking-widest text-white/60">{t.name}</figcaption>
      </div>
    </motion.figure>
  )
}

const tones = [
  'border border-line bg-white text-ink',
  'bg-terracotta text-white',
  'bg-ink text-white',
]

export default function QuoteGrid({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((t, i) => (
        <motion.figure
          key={t.quote}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`flex min-h-[260px] flex-col rounded-card p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10 ${tones[i % tones.length]}`}
        >
          <span className="font-display text-5xl leading-none text-ochre">“</span>
          <blockquote className="mt-1 font-display text-xl font-semibold leading-snug">{t.quote}</blockquote>
          <figcaption className="mt-auto pt-6 text-xs uppercase tracking-widest opacity-60">{t.name}</figcaption>
        </motion.figure>
      ))}
    </div>
  )
}
