import PageHero from '@/components/sections/PageHero'
import ProgramCards from '@/components/sections/ProgramCards'
import ProgramFeature from '@/components/sections/ProgramFeature'
import DataTable from '@/components/sections/DataTable'
import CtaBand from '@/components/sections/CtaBand'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import { brand } from '@/config/brand'
import { programs } from '@/data/placeholder'
import { programFeatures } from '@/data/programs'
import { usePageTitle } from '@/lib/usePageTitle'

const overviewRows = [
  ['Hard Skills', <>PUMaC Africa<br />AI Hackathon</>, <>13–18<br />7–18</>],
  ['Soft Skills', 'Public Speaking Lab', '7–18'],
  ['Holiday Camps', 'Seasonal specialty classes', '7–18'],
]

export default function Programs() {
  usePageTitle('Programs')
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title={<>Two tracks. <span className="text-ochre">Real skills.</span></>}
        subtitle="Pick a track. We’ll guide the rest."
        photoAlt="Photo — collage of programs"
        ctas={[{ label: 'Go to Registration', to: brand.links.programs }]}
      />

      <section className="py-24">
        <Container>
          <ProgramCards programs={programs} />
        </Container>
      </section>

      {programFeatures.map((f, i) => (
        <ProgramFeature key={f.id} f={f} flip={i % 2 === 1} />
      ))}

      <section className="py-24">
        <Container>
          <SectionHeader eyebrow="At a Glance" title="All programs" />
          <DataTable headers={['Category', 'Includes', 'Ages']} rows={overviewRows} />
        </Container>
      </section>

      <CtaBand
        title="Ready to register?"
        ctas={[
          { label: 'Go to Registration', to: brand.links.programs, variant: 'light' },
          { label: 'Book a Free Consultation', to: '/contact', variant: 'glass' },
        ]}
      />
    </>
  )
}
