import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import ProofMarquee from '@/components/sections/ProofMarquee'
import CredGrid from '@/components/sections/CredGrid'
import LogoRow from '@/components/sections/LogoRow'
import QuoteGrid from '@/components/sections/QuoteGrid'
import CtaBand from '@/components/sections/CtaBand'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import { partners, resultsStats, testimonials } from '@/data/placeholder'
import { leadership } from '@/data/team'
import { usePageTitle } from '@/lib/usePageTitle'

const team = leadership.map((l) => ({ name: l.name, role: l.role, credential: l.institution, photo: l.photo }))

export default function Results() {
  usePageTitle('Results & Credibility')
  return (
    <>
      <PageHero
        eyebrow="Results & Credibility"
        title={<>Future skills. <span className="text-ochre">Real results.</span></>}
        photoAlt="Photo — competition / awards"
      />

      <ProofMarquee stats={resultsStats} />

      <section className="py-24">
        <Container>
          <SectionHeader eyebrow="Our Team" title="Who teaches your kids" />
          <CredGrid people={team} cols={3} />
          <Link to="/team" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-terracotta transition-all hover:gap-3">
            Meet the full team <ArrowRight size={16} />
          </Link>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <SectionHeader eyebrow="Partners" title="Backed by" />
          <LogoRow partners={partners} />
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <SectionHeader eyebrow="Parents" title="In their words" />
          <QuoteGrid items={testimonials} />
        </Container>
      </section>

      <CtaBand
        title="See our programs"
        ctas={[
          { label: 'Explore Programs', to: '/programs', variant: 'light' },
          { label: 'Book a Free Consultation', to: '/contact', variant: 'glass' },
        ]}
      />
    </>
  )
}
