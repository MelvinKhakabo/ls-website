import PageHero from '@/components/sections/PageHero'
import TeamList from '@/components/sections/TeamList'
import CtaBand from '@/components/sections/CtaBand'
import Container from '@/components/ui/Container'
import { leadership } from '@/data/team'
import { usePageTitle } from '@/lib/usePageTitle'

export default function Team() {
  usePageTitle('Our Team')
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title={<>Our Leadership &amp; <span className="text-ochre">Teaching Team.</span></>}
        photoAlt="Photo — team"
        ctas={[{ label: 'Join Our Team', to: '/careers', variant: 'glass' }]}
      />

      <section className="py-24">
        <Container>
          <TeamList people={leadership} />
        </Container>
      </section>

      <CtaBand title="Want to teach with us?" ctas={[{ label: 'See Open Roles', to: '/careers', variant: 'light' }]} />
    </>
  )
}
