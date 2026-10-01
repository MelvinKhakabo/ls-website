import { motion } from 'motion/react'

export type Person = { name: string; role: string; credential?: string; bio?: string; photo?: string }

const colsClass = { 2: 'sm:grid-cols-2 max-w-3xl', 3: 'sm:grid-cols-2 lg:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }

const initials = (name: string) => name.split(' ').map((w) => w[0]).slice(0, 2).join('')

export default function CredGrid({ people, cols = 4 }: { people: Person[]; cols?: 2 | 3 | 4 }) {
  return (
    <div className={`grid gap-6 ${colsClass[cols]}`}>
      {people.map((p, i) => (
        <motion.div
          key={`${p.name}-${i}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="group overflow-hidden rounded-card border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            {p.photo ? (
              <img src={p.photo} alt={p.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            ) : (
              <div className="flex h-full items-center justify-center bg-linear-to-br from-ivory to-ochre/40">
                <span className="font-display text-5xl font-bold text-terracotta/60">{initials(p.name)}</span>
              </div>
            )}
            {p.bio && (
              <div className="absolute inset-0 flex items-end bg-ink/85 p-6 text-sm leading-relaxed text-white opacity-0 transition duration-300 group-hover:opacity-100">
                {p.bio}
              </div>
            )}
          </div>
          <div className="p-5">
            <h3 className="font-bold">{p.name}</h3>
            <p className="text-sm text-muted">{p.role}</p>
            {p.credential && (
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-terracotta">{p.credential}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
