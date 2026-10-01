import { Link } from 'react-router-dom'
import { brand } from '@/config/brand'
import { footerNav } from '@/config/navigation'
import SmartLink from '@/components/ui/SmartLink'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="font-display text-xl font-bold text-white">
            {brand.logo.first}
            <span className="text-ochre">{brand.logo.second}</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">{brand.tagline}</p>
        </div>
        {footerNav.map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">{col.title}</h4>
            <ul className="space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  <SmartLink item={l} className="transition hover:text-white" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {brand.name} · {brand.cities.join(' · ')}</span>
          <a href={`mailto:${brand.email}`} className="hover:text-white">{brand.email}</a>
        </div>
      </div>
    </footer>
  )
}
