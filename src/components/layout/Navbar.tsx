import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { brand } from '@/config/brand'
import { mainNav } from '@/config/navigation'
import SmartLink from '@/components/ui/SmartLink'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/50 px-5 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? 'bg-white/75 py-2 shadow-lg shadow-navy/10' : 'bg-white/55 py-3'
        }`}
      >
        <Link to="/" onClick={close} className="font-display text-lg font-bold tracking-tight">
          {brand.logo.first}
          <span className="text-terracotta">{brand.logo.second}</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 text-sm font-medium text-muted lg:flex">
          {mainNav.map((item) =>
            'children' in item ? (
              <li key={item.label} className="group relative">
                <button className="flex items-center gap-1 transition hover:text-navy">
                  {item.label}
                  <ChevronDown size={14} className="transition group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="min-w-56 rounded-2xl border border-line bg-white/90 p-2 shadow-xl shadow-navy/10 backdrop-blur-xl">
                    {item.children.map((c) => (
                      <SmartLink
                        key={c.label}
                        item={c}
                        className="block rounded-xl px-4 py-2.5 text-navy transition hover:bg-ivory hover:text-terracotta"
                      />
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              <li key={item.label}>
                <SmartLink item={item} className="transition hover:text-navy" />
              </li>
            ),
          )}
        </ul>

        <a
          href={brand.links.programs}
          className="hidden rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-terracotta-dark lg:inline-block"
        >
          Enroll Now
        </a>

        <button className="lg:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/50 bg-white/85 p-4 shadow-xl shadow-navy/10 backdrop-blur-xl lg:hidden">
          {mainNav.map((item) =>
            'children' in item ? (
              <div key={item.label} className="py-2">
                <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-widest text-muted">{item.label}</p>
                {item.children.map((c) => (
                  <SmartLink key={c.label} item={c} onClick={close} className="block rounded-xl px-3 py-2 hover:bg-ivory" />
                ))}
              </div>
            ) : (
              <SmartLink key={item.label} item={item} onClick={close} className="block rounded-xl px-3 py-2 font-medium hover:bg-ivory" />
            ),
          )}
          <a href={brand.links.programs} className="mt-3 block rounded-full bg-terracotta px-5 py-3 text-center font-semibold text-white">
            Enroll Now
          </a>
        </div>
      )}
    </header>
  )
}
