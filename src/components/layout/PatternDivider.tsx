import { useId } from 'react'

export default function PatternDivider({ className = '' }: { className?: string }) {
  const id = `ls-band-${useId().replace(/[^a-zA-Z0-9]/g, '')}`
  return (
    <svg aria-hidden className={`block h-4 w-full ${className}`}>
      <defs>
        <pattern id={id} width="48" height="16" patternUnits="userSpaceOnUse">
          <path d="M0 16 L8 0 L16 16Z" className="fill-terracotta" />
          <path d="M16 0 L24 16 L32 0Z" className="fill-ochre" />
          <path d="M32 16 L40 0 L48 16Z" className="fill-ink" />
          <circle cx="24" cy="4" r="1.6" className="fill-ivory" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
