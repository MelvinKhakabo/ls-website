import { motion } from 'motion/react'
import { GraduationCap } from 'lucide-react'

export type Leader = { name: string; role: string; institution: string; bio: string; photo?: string }

const initial = (name: string) => name.replace(/^(Ms|Mr|Mrs|Dr)\.?\s+/i, '').slice(0, 1)

export default function TeamList({ people }: { people: Leader[] }) {
  return (
    <div className="space-y-6">
      {people.map((p, i) => (
        <motion.article
          key={p.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className={`group grid items-center gap-8 rounded-card p-8 md:grid-cols-[200px_1fr] md:p-10 ${
            i % 2 === 0 ? 'border border-line bg-white' : 'bg-ochre/15'
          }`}
        >
          <div className="mx-auto h-44 w-44 overflow-hidden rounded-full border-2 border-ochre/50 bg-ivory ring-8 ring-white md:h-48 md:w-48">
            {p.photo ? (
              <img src={p.photo} alt={p.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            ) : (
              <div className="flex h-full items-center justify-center font-display text-6xl font-bold text-terracotta/50">{initial(p.name)}</div>
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              <span className="text-terracotta">{p.name}</span> <span className="font-normal text-ink/30">|</span> {p.role}
            </h3>
            <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-ink/80">
              <GraduationCap size={18} className="text-ochre" />
              {p.institution}
            </p>
            <p className="mt-4 leading-relaxed text-ink/75">{p.bio}</p>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
