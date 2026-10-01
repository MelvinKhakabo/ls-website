import type { ReactNode } from 'react'

export default function DataTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-card border border-line bg-white">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-ivory">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-6 py-4 font-display text-xs font-bold uppercase tracking-widest text-terracotta">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-line transition hover:bg-ivory/60">
              {r.map((c, j) => (
                <td key={j} className={`px-6 py-5 align-top ${j === 0 ? 'font-display text-base font-bold' : 'text-ink/80'}`}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
