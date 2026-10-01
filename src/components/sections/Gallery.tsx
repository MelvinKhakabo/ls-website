import { motion } from 'motion/react'

export type GalleryItem = { caption: string; photo?: string }

export default function Gallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((g, i) => (
        <motion.figure
          key={g.caption}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group relative aspect-[4/3] overflow-hidden rounded-card bg-ink"
        >
          {g.photo ? (
            <img src={g.photo} alt={g.caption} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          ) : (
            <div className="flex h-full items-center justify-center bg-linear-to-br from-ochre/60 to-terracotta/70 transition duration-700 group-hover:scale-105">
              <span className="text-xs uppercase tracking-widest text-white/70">Photo</span>
            </div>
          )}
          <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/85 to-transparent p-5 pt-12 font-display font-semibold text-white">
            {g.caption}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  )
}
