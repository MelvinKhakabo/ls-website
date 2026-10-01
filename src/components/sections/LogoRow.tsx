export type Partner = { name: string; logo?: string; note?: string }

export default function LogoRow({ partners }: { partners: Partner[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {partners.map((p) => (
        <div
          key={p.name}
          className="flex min-h-[140px] flex-col items-center justify-center rounded-card border border-line bg-white p-8 text-center grayscale transition hover:grayscale-0 hover:shadow-lg hover:shadow-ink/5"
        >
          {p.logo ? (
            <img src={p.logo} alt={p.name} className="max-h-12 w-auto" />
          ) : (
            <span className="font-display text-lg font-bold">{p.name}</span>
          )}
          {p.note && <span className="mt-2 text-xs uppercase tracking-widest text-muted">{p.note}</span>}
        </div>
      ))}
    </div>
  )
}
