import { motion } from 'motion/react'
import PageHero from '@/components/sections/PageHero'
import NewsletterSignup from '@/components/sections/FormSection'
import Container from '@/components/ui/Container'
import { usePageTitle } from '@/lib/usePageTitle'

// Sample titles from the wireframe — replace with real posts
const posts = [
  { title: 'How gamified learning builds confidence', tag: 'Parenting' },
  { title: 'Preparing for your first math competition', tag: 'PUMaC' },
  { title: 'What kids learn in AI Hackathon', tag: 'AI Hackathon' },
  { title: 'Raising confident public speakers', tag: 'Soft Skills' },
  { title: 'Learning Sprouts expands to Lagos', tag: 'News' },
  { title: 'Screen time vs. skill time', tag: 'Parenting' },
]

export default function Blog() {
  usePageTitle('Resources')
  return (
    <>
      <PageHero eyebrow="Resources" title={<>Ideas for <span className="text-ochre">parents.</span></>} />

      <section className="py-24">
        <Container>
          <p className="mb-8 text-center text-xs italic text-muted">[Sample titles. Articles coming soon]</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group overflow-hidden rounded-card border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
              >
                <div className="aspect-[16/10] bg-linear-to-br from-ivory to-ochre/40 transition duration-700 group-hover:scale-[1.03]" />
                <div className="p-6">
                  <span className="rounded-full bg-ivory px-3 py-1 text-xs font-semibold text-terracotta">{p.tag}</span>
                  <h3 className="mt-4 text-xl font-bold leading-snug">{p.title}</h3>
                  <p className="mt-4 text-sm font-semibold text-muted">Coming soon</p>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <NewsletterSignup text="Get new articles, camp dates and competition news." />
    </>
  )
}
