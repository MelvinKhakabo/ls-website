import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export type ButtonVariant = 'primary' | 'ghost' | 'light' | 'glass'

const styles: Record<ButtonVariant, string> = {
  primary: 'bg-terracotta text-white hover:bg-terracotta-dark',
  ghost: 'border border-ink/20 text-ink hover:border-ink',
  light: 'bg-white text-ink hover:bg-ivory',
  glass: 'border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20',
}

type Props = { to: string; variant?: ButtonVariant; children: ReactNode; className?: string }

export default function Button({ to, variant = 'primary', children, className = '' }: Props) {
  const cls = `inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`
  return to.startsWith('http') ? (
    <a href={to} className={cls}>{children}</a>
  ) : (
    <Link to={to} className={cls}>{children}</Link>
  )
}
