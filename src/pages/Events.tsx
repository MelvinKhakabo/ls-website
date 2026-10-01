import PageHero from '@/components/sections/PageHero'
import EventList, { type EventItem } from '@/components/sections/EventList'
import CalendarList from '@/components/sections/CalendarList'
import Gallery from '@/components/sections/Gallery'
import NewsletterSignup from '@/components/sections/FormSection'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import { brand } from '@/config/brand'
import { calendar } from '@/data/placeholder'
import { usePageTitle } from '@/lib/usePageTitle'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const short = (w: string) => (w.includes('–') ? w.replace(/\s/g, '') : w.slice(0, 3))

const pinned: EventItem = {
  date: '30 Jan',
  sub: '2027',
  title: 'PUMaC Africa Competition',
  location: 'Nairobi',
  tag: 'PUMaC',
  cta: { label: 'Learn more', to: '/pumac-africa' },
}

const upcoming: EventItem[] = calendar
  .filter((c) => c.tag !== 'Break' && MONTHS.indexOf(c.when.slice(0, 3)) >= new Date().getMonth())
  .slice(0, 4)
  .map((c) => ({
    date: short(c.when),
    sub: '2026',
    title: c.title,
    tag: c.tag,
    cta: { label: 'Register', to: c.tag === 'Holiday Camps' ? brand.links.holidayCamps : brand.links.programs },
  }))

const past = [{ caption: 'STEM Hackathon 2025' }, { caption: 'Holiday Camps 2025' }, { caption: 'PUMaC 2025' }]

export default function Events() {
  usePageTitle('Events')
  return (
    <>
      <PageHero eyebrow="Events" title={<>What’s <span className="text-ochre">next.</span></>} photoAlt="Photo — event highlights" />

      <section className="py-24">
        <Container className="max-w-4xl">
          <SectionHeader eyebrow="Up Next" title="Coming up" />
          <EventList items={[pinned, ...upcoming]} />
        </Container>
      </section>

      <section className="pb-24">
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="2026 Calendar" title="A year of building." center />
          <CalendarList items={calendar} note="Placeholder dates. Swap in once the confirmed 2026 term calendar is locked." />
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <SectionHeader eyebrow="Past Events" title="Highlights" />
          <Gallery items={past} />
        </Container>
      </section>

      <NewsletterSignup />
    </>
  )
}
