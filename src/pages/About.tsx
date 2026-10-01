import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import PageHero from '@/components/sections/PageHero'
import Pillars, { type Pillar } from '@/components/sections/Pillars'
import FlowSteps from '@/components/sections/FlowSteps'
import CtaBand from '@/components/sections/CtaBand'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import DiamondMotif from '@/components/ui/DiamondMotif'
import { usePageTitle } from '@/lib/usePageTitle'

const values: Pillar[] = [
  { title: 'Real-World Skills', text: 'Not just theory' },
  { title: 'Confidence', text: 'Through play' },
  { title: 'Partnership', text: 'Parents included' },
]

const hardSkills = ['Mathematics', 'Competitive Mathematics (International Math Olympiad)', 'Fun Sciences', 'Artificial Intelligence', 'Coding']
const softSkills = ['Public Speaking', 'Emotional Intelligence', 'Personal Responsibility', 'Negotiations', 'Effective Communication']

const milestones = [
  { title: 'Founded in Nairobi' },
  { title: 'Launched AI Hackathon & PUMaC Africa' },
  { title: 'Expanded to Lagos' },
]

function SkillCard({ title, items, className }: { title: string; items: string[]; className: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden rounded-card p-10 ${className}`}
    >
      <DiamondMotif className="absolute -right-8 -top-8 h-40 w-40 opacity-15" />
      <h3 className="text-3xl font-bold">{title}</h3>
      <ul className="mt-6 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-current opacity-60" />
            {i}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function About() {
  usePageTitle('About Us')
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Growing Confident Learners, <span className="text-ochre">One Skill at a Time.</span></>}
        subtitle="At Learning Sprouts, we believe every child has the potential to thrive when learning feels meaningful, empowering, and achievable. We exist to help learners grow not just academically, but personally, building the skills and confidence they need to succeed in school and beyond."
        photoAlt="Photo — founders / classroom"
        ctas={[{ label: 'Meet the Team', to: '/team' }]}
      />

      <section className="py-24">
        <Container>
          <SectionHeader eyebrow="Mission & Values" title="What we build" />
          <Pillars items={values} cols={3} />
        </Container>
      </section>

      {/* Story */}
      <section className="pb-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeader eyebrow="Our Story" title="Why We Do What We Do" />
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-ink/80">
            <p>
              In 2020, schools worldwide were shut down at the onset of the COVID-19 pandemic. Primary, secondary and
              tertiary students alike experienced severe disruptions to their learning and emotional wellbeing. Our
              founder, Ms. H, was a Teaching Fellow and graduate student at Harvard University during the epidemic.
            </p>
            <p>
              The teaching team was challenged to make learning constructive (and fun) in the new era of online
              education, and redesigned a graduate course to include more practical and hands-on applications of the
              concepts taught. During this redesigning and research process, Ms. H found a pressing question that
              applies to learners of all ages.
            </p>
          </div>
        </Container>
      </section>

      {/* Pull quote */}
      <section className="px-3 pb-24 sm:px-4">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-8 py-20 text-center md:py-28">
          <DiamondMotif className="absolute -left-12 -top-12 h-56 w-56 text-ochre opacity-10" />
          <DiamondMotif className="absolute -bottom-16 -right-10 h-64 w-64 text-terracotta opacity-20" />
          <motion.p
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-3xl font-display text-3xl font-bold leading-tight text-ochre md:text-5xl"
          >
            “What makes a student succeed in their learning journey…?”
          </motion.p>
        </div>
      </section>

      {/* The finding */}
      <section className="pb-24">
        <Container className="max-w-3xl space-y-6 text-lg leading-relaxed text-ink/80">
          <p>
            Through her experiences in implementing World Bank-funded education solutions, teaching at afterschool
            camps, and academic research, Ms. H found that a student’s ability to excel in their learning is{' '}
            <strong className="text-ink">highly associated with their confidence level in overcoming learning challenges</strong>.
            In short, <strong className="text-ink">self-confidence = higher likelihood of a student’s success</strong>{' '}
            <span className="text-sm text-muted">
              (Bandura, 1994; Bois, Sarrazin, Brustad, Chanal &amp; Trouilloud, 2005; Bouffard, Roy &amp; Vezeau, 2006;
              Bandura, 1986; Bouffard &amp; Vezeau, 1998; Philipps &amp; Zimmerman, 1990)
            </span>.
          </p>
          <p>
            Self-confidence can be cultivated in a student through skills mastery. At Learning Sprouts, Ms. H and her
            strong team of educators strive to provide a holistic approach to build a student’s hard skills (academics
            and tech) and soft skills (emotional intelligence and social aptitude).
          </p>
        </Container>
      </section>

      {/* Hard & Soft */}
      <section className="pb-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <SkillCard title="Hard Skills" items={hardSkills} className="bg-ink text-white" />
            <SkillCard title="Soft Skills" items={softSkills} className="bg-ochre text-ink" />
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-ink/80">
            We believe that by nurturing both facets of a student’s learning potential, they are positioned to excel in
            any learning environment and academic endeavor. All of our curriculums are designed in-house and gamified to
            our best ability. We are also proud afterschool service providers for international schools in Kenya, like
            Rosslyn Academy (and a few others!). As we continue to grow our reach and impact, we remain committed to
            providing holistic and innovative education that empowers our students to excel.
          </p>
        </Container>
      </section>

      {/* Milestones */}
      <section className="pb-24">
        <Container>
          <SectionHeader eyebrow="Milestones" title="How we got here" />
          <FlowSteps steps={milestones} />
        </Container>
      </section>

      {/* Team teaser */}
      <section className="pb-24">
        <Container>
          <Link
            to="/team"
            className="group flex flex-col items-start justify-between gap-6 rounded-card border border-line bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5 md:flex-row md:items-center md:p-12"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-terracotta">Our Team</p>
              <h3 className="mt-2 text-3xl font-bold">Meet the people behind Learning Sprouts.</h3>
            </div>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-terracotta text-white transition group-hover:translate-x-1">
              <ArrowRight />
            </span>
          </Link>
        </Container>
      </section>

      <CtaBand
        title="Come be a part of our learning community at Learning Sprouts!"
        ctas={[
          { label: 'Explore Our Programs', to: '/programs', variant: 'light' },
          { label: 'Book a Free Consultation', to: '/contact', variant: 'glass' },
        ]}
      />
    </>
  )
}
