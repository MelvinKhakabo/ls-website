export type Price = { name: string; value: string; note?: string }

export default function PriceRow({ prices }: { prices: Price[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {prices.map((p) => (
        <div key={p.name} className="rounded-card border border-navy/15 bg-white p-6 text-center transition hover:-translate-y-1 hover:border-navy/40 hover:shadow-xl hover:shadow-navy/5">
          <p className="text-sm font-semibold text-muted">{p.name}</p>
          <p className="mt-2 font-display text-2xl font-bold text-navy">{p.value}</p>
          {p.note && <p className="mt-1 text-xs text-muted">{p.note}</p>}
        </div>
      ))}
    </div>
  )
}
