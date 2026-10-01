import type { CSSProperties } from 'react'
import { motion } from 'motion/react'

export type Step = { title: string; text?: string }

export default function FlowSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="relative">
      <div className="absolute left-6 right-6 top-6 hidden h-0.5 bg-linear-to-r from-terracotta via-ochre to-terracotta/20 md:block" />
      <ol
        className="relative grid gap-8 md:grid-cols-[repeat(var(--cols),minmax(0,1fr))]"
        style={{ '--cols': steps.length } as CSSProperties}
      >
        {steps.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta font-display font-bold text-white ring-8 ring-ivory">
              {i + 1}
            </span>
            <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
            {s.text && <p className="mt-2 text-sm text-muted">{s.text}</p>}
          </motion.li>
        ))}
      </ol>
    </div>
  )
}
