import { motion } from 'motion/react'

export type Pillar = { title: string; result?: string; text?: string }

const colsClass = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }

export default function Pillars({ items, cols = 2 }: { items: Pillar[]; cols?: 2 | 3 | 4 }) {
  return (
    <div className={`grid gap-4 ${colsClass[cols]}`}>
      {items.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group rounded-card border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-xl hover:shadow-ink/5"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory font-display font-bold text-terracotta transition group-hover:bg-terracotta group-hover:text-white">
            {i + 1}
          </span>
          <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
          {p.result && <p className="mt-1 text-muted">= <span className="font-semibold text-ink">{p.result}</span></p>}
          {p.text && <p className="mt-1 text-muted">{p.text}</p>}
        </motion.div>
      ))}
    </div>
  )
}
