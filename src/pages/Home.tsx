import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '@/components/sections/Hero'
import ProofMarquee from '@/components/sections/ProofMarquee'
import ProgramCards from '@/components/sections/ProgramCards'
import CalendarList from '@/components/sections/CalendarList'
import Pillars from '@/components/sections/Pillars'
import { TestimonialCard } from '@/components/sections/QuoteGrid'
import LocationCards from '@/components/sections/LocationCards'
import CtaBand from '@/components/sections/CtaBand'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import { calendar, heroSlides, homeTestimonial, pedagogy, places, programs, stats } from '@/data/placeholder'

const linkCls = 'inline-flex items-center gap-2 text-sm font-semibold text-terracotta transition-all hover:gap-3'

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="We are Nairobi's First Future Ready Skills Hub"
        title={<>Building real world skills <span className="text-ochre">for a changing world.</span></>}
        subtitle="Founded by graduates from Harvard University, we are committed to empowering learners and helping them reach their fullest potential."
        slides={heroSlides}
        ctas={[
          { label: 'Explore Programs', to: '/programs' },
          { label: 'Book a Free Consultation', to: '/contact', variant: 'glass' },
        ]}
        trustLine="In partnership with Princeton University Mathematics Club · Nairobi · Lagos"
      />

      <ProofMarquee stats={stats} />

      {/* What We Do */}
      <section className="py-24">
        <Container>
          <SectionHeader
            eyebrow="What We Do"
            title="Two tracks. One goal."
            intro="At Learning Sprouts, we grow both the hard skills that power learning and the soft skills that shape character. Through playful, gamified programs and caring guidance, children build real abilities, confidence, and habits that stay with them long after class."
          />
          <ProgramCards programs={programs} />
        </Container>
      </section>

      {/* 2026 Calendar */}
      <section className="pb-24">
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="2026 Calendar" title="A year of building." center />
          <CalendarList items={calendar} note="Placeholder dates. Swap in once the confirmed 2026 term calendar is locked." />
          <div className="mt-6 text-center">
            <Link to="/events" className={linkCls}>See full calendar on Events <ArrowRight size={16} /></Link>
          </div>
        </Container>
      </section>

      {/* How We Teach + testimonial */}
      <section className="pb-24">
        <Container className="grid items-stretch gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeader eyebrow="How We Teach" title="Practice. Repeat. Believe." />
            <Pillars items={pedagogy} />
            <Link to="/pedagogy" className={`mt-8 ${linkCls}`}>See how we teach <ArrowRight size={16} /></Link>
          </div>
          <TestimonialCard t={homeTestimonial} />
        </Container>
      </section>

      {/* Where We Teach */}
      <section className="pb-24">
        <Container>
          <SectionHeader eyebrow="Where We Teach" title="Nairobi · Lagos" />
          <LocationCards places={places} />
        </Container>
      </section>

      <CtaBand
        title="Ready to start?"
        text="Talk to us about the right track for your child."
        ctas={[
          { label: 'Book a Free Consultation', to: '/contact', variant: 'light' },
          { label: 'Explore Programs', to: '/programs', variant: 'glass' },
        ]}
      />
    </>
  )
}
