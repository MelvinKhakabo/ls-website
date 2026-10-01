import Button, { type ButtonVariant } from '@/components/ui/Button'
import DiamondMotif from '@/components/ui/DiamondMotif'
import PatternDivider from '@/components/layout/PatternDivider'

type Props = { title: string; text?: string; ctas: { label: string; to: string; variant?: ButtonVariant }[] }

export default function CtaBand({ title, text, ctas }: Props) {
  return (
    <section className="px-3 pb-24 sm:px-4">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-terracotta px-8 pb-20 pt-16 text-center text-white md:pt-20">
        <DiamondMotif className="absolute -left-10 -top-10 h-48 w-48 text-white opacity-15" />
        <DiamondMotif className="absolute -bottom-12 -right-8 h-56 w-56 text-ochre opacity-30" />
        <h2 className="relative text-4xl font-bold md:text-5xl">{title}</h2>
        {text && <p className="relative mx-auto mt-4 max-w-xl text-white/80">{text}</p>}
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          {ctas.map((c) => (
            <Button key={c.label} to={c.to} variant={c.variant}>{c.label}</Button>
          ))}
        </div>
        <PatternDivider className="absolute inset-x-0 bottom-0" />
      </div>
    </section>
  )
}
