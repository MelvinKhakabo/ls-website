import PageHero from '@/components/sections/PageHero'
import LocationCards from '@/components/sections/LocationCards'
import CtaBand from '@/components/sections/CtaBand'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import { brand } from '@/config/brand'
import { places } from '@/data/placeholder'
import { usePageTitle } from '@/lib/usePageTitle'

export default function Locations() {
  usePageTitle('Locations')
  return (
    <>
      <PageHero eyebrow="Locations" title={<>Where we <span className="text-ochre">teach.</span></>} photoAlt="Photo — Loresho centre" />

      <section className="py-24">
        <Container>
          <LocationCards places={places} />
        </Container>
      </section>

      <section className="pb-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeader eyebrow="Nairobi" title="Loresho Shopping Centre" intro={brand.address} />
          </div>
          <iframe
            title="Map — Loresho Shopping Centre"
            src={brand.links.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[380px] w-full rounded-card border-0"
          />
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <SectionHeader
            eyebrow="Lagos"
            title="Camp venues"
            intro="Camps are hosted at different venues around the city each season."
          />
          <p className="rounded-card border border-dashed border-line bg-white p-8 text-muted">[Add past and upcoming Lagos venues]</p>
        </Container>
      </section>

      <CtaBand
        title="Questions about a location?"
        ctas={[{ label: 'Contact Us', to: '/contact', variant: 'light' }]}
      />
    </>
  )
}
