export default function DiamondMotif({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 120 120" className={`pointer-events-none ${className}`}>
      <g fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M60 6 L114 60 L60 114 L6 60Z" />
        <path d="M60 26 L94 60 L60 94 L26 60Z" />
      </g>
      <path d="M60 46 L74 60 L60 74 L46 60Z" fill="currentColor" />
    </svg>
  )
}
