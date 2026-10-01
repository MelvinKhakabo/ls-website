import type { ReactNode } from 'react'

type Props = { eyebrow: string; title: ReactNode; intro?: string; center?: boolean }

export default function SectionHeader({ eyebrow, title, intro, center }: Props) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-terracotta">{eyebrow}</p>
      <h2 className="text-4xl font-bold leading-tight md:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
    </div>
  )
}
