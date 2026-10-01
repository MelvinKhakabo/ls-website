import { motion } from 'motion/react'
import { CalendarDays, Check } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import FlowSteps from '@/components/sections/FlowSteps'
import PriceRow, { type Price } from '@/components/sections/PriceRow'
import CtaBand from '@/components/sections/CtaBand'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import { brand } from '@/config/brand'
import { usePageTitle } from '@/lib/usePageTitle'

const areas = ['Algebra', 'Number Theory', 'Geometry', 'Combinatorics']
const focus = [
  'Advanced problem-solving techniques',
  'Logical reasoning and analytical thinking',
  'Speed and accuracy under timed conditions',
  'Exposure to international competition-style questions',
]
const pathway = [{ title: 'Foundations' }, { title: 'Advanced Skills' }, { title: 'Mock Exams' }, { title: 'Competition' }]
const prices: Price[] = [
  { name: 'Training Program', value: 'KES 8,000', note: 'per month' },
  { name: 'Mock Exams', value: 'KES 1,500' },
  { name: 'Competition Fee', value: 'KES 1,800', note: 'per student' },
  { name: 'Team of 8', value: 'KES 14,000' },
]

export default function Pumac() {
  usePageTitle('PUMaC Africa')
  return (
    <>
      <PageHero
        tone="navy"
        eyebrow="In partnership with Princeton University Mathematics Club"
        title={<>Train. Compete. <span className="text-ochre">Excel.</span></>}
        subtitle="Prepare for one of the world’s most rigorous high school math competitions through a structured training program delivered by Learning Sprouts in partnership with the Princeton University Math Club."
        photoAlt="Photo — students in training session"
        ctas={[
          { label: 'Register for PUMaC (Kenya)', to: brand.links.programs },
          { label: 'Register (Outside Kenya)', to: brand.links.programs, variant: 'glass' },
        ]}
        meta={
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
            <CalendarDays size={16} className="text-ochre" /> Next competition · 30 January 2027 · Nairobi
          </span>
        }
      />

      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Curriculum"
              title="Core areas"
              intro="The program is designed as a structured pathway, guiding students from foundational understanding to advanced competition-level performance."
            />
            <div className="grid grid-cols-2 gap-4">
              {areas.map((a, i) => (
                <motion.div
                  key={a}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-card bg-navy p-6 text-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/20"
                >
                  <span className="font-display text-sm text-ochre">0{i + 1}</span>
                  <p className="mt-6 font-display text-xl font-bold">{a}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-card border border-line bg-white p-8 md:p-10 lg:self-end">
            <h3 className="text-2xl font-bold">Training focuses on</h3>
            <ul className="mt-6 space-y-4">
              {focus.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy">
                    <Check size={14} />
                  </span>
                  <span className="text-ink/80">{f}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-muted">
              Sessions are delivered through a hybrid model, combining instructor-led learning with structured independent practice.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <SectionHeader eyebrow="Training Pathway" title="From foundations to competition" />
          <FlowSteps steps={pathway} />
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <SectionHeader
            eyebrow="Pricing"
            title="Fees"
            intro="Registration and payment happen on our Programs page: M-Pesa for Kenya, card checkout for international families."
          />
          <PriceRow prices={prices} />
        </Container>
      </section>

      <CtaBand
        title="Ready to train?"
        ctas={[
          { label: 'Register for PUMaC (Kenya)', to: brand.links.programs, variant: 'light' },
          { label: 'Register (Outside Kenya)', to: brand.links.programs, variant: 'glass' },
        ]}
      />
    </>
  )
}
