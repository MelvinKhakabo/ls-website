import { motion } from 'motion/react'
import { Puzzle, Target, Users, type LucideIcon } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import Pillars from '@/components/sections/Pillars'
import FlowSteps from '@/components/sections/FlowSteps'
import CtaBand from '@/components/sections/CtaBand'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import DiamondMotif from '@/components/ui/DiamondMotif'
import { pedagogy } from '@/data/placeholder'
import { usePageTitle } from '@/lib/usePageTitle'

const thrive: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Puzzle,
    title: 'Engaging Curriculum',
    text: 'Our curriculums are designed in-house by highly qualified curriculum designers from Harvard and other prominent institutions. We gamify our curriculum where possible to encourage students to challenge their academic skills without becoming intimidated or bored by a subject. Through these fun exercises, we aim to build our students’ confidence to overcome hard academic topics.',
  },
  {
    icon: Target,
    title: 'High-Touch Learning',
    text: 'Every student receives a personalized learning experience through tailored assignments, skill-building worksheets, and access to specialized workshops. Our educators take time to understand each learner’s strengths, challenges, and goals, ensuring support that is intentional, responsive, and designed to help them grow with confidence.',
  },
  {
    icon: Users,
    title: 'Parental Engagement',
    text: 'We believe parental involvement is a critical component of a student’s learning progress. Parents will receive a detailed message about their child’s learning milestones. During the school year, parents can also sign up for “office hours” to meet one-on-one with the instructors on a dedicated time slot every week. Finally, parents will also enjoy community platforms and social events run by Learning Sprouts.',
  },
]

const session = [{ title: 'Warm-up' }, { title: 'Core Skill' }, { title: 'Challenge' }, { title: 'Reflect' }]

export default function Pedagogy() {
  usePageTitle('Our Pedagogy')
  return (
    <>
      <PageHero
        eyebrow="How We Teach"
        title={<>Practice. Repeat. <span className="text-ochre">Believe.</span></>}
        subtitle="Our method, in three words."
        photoAlt="Photo — session in progress"
      />

      <section className="py-24">
        <Container>
          <SectionHeader eyebrow="Our Method" title="Four pillars behind every session" />
          <Pillars items={pedagogy} cols={4} />
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <SectionHeader
            eyebrow="How We Help Learners Thrive"
            title="Confidence by design"
            intro="At Learning Sprouts, we foster our students’ abilities to excel in the following ways:"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {thrive.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-card border border-line bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ivory text-terracotta transition group-hover:bg-terracotta group-hover:text-white">
                  <Icon size={26} />
                </span>
                <h3 className="mt-6 text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{text}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <SectionHeader eyebrow="Inside a Session" title="A session, in four steps" />
          <FlowSteps steps={session} />
        </Container>
      </section>

      {/* Philosophy quote */}
      <section className="px-3 pb-24 sm:px-4">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ochre px-8 py-20 text-center md:py-28">
          <DiamondMotif className="absolute -right-10 -top-10 h-56 w-56 text-ink opacity-10" />
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-3xl font-display text-3xl font-bold leading-tight text-ink md:text-5xl"
          >
            “Kids don’t remember lectures. They remember doing.”
          </motion.blockquote>
          <p className="relative mt-6 text-xs font-semibold uppercase tracking-widest text-ink/60">Our Teaching Philosophy</p>
        </div>
      </section>

      <CtaBand
        title="See it in action"
        ctas={[
          { label: 'Explore Our Programs', to: '/programs', variant: 'light' },
          { label: 'Book a Free Consultation', to: '/contact', variant: 'glass' },
        ]}
      />
    </>
  )
}
