import PageHero from '@/components/sections/PageHero'
import Faq from '@/components/sections/Faq'
import Container from '@/components/ui/Container'
import { brand } from '@/config/brand'
import { usePageTitle } from '@/lib/usePageTitle'

const policies = [
  { q: 'Enrollment terms', a: '[Add enrollment terms]' },
  { q: 'Conduct expectations', a: '[Add student conduct policy]' },
  { q: 'Refunds & rescheduling', a: '[Add refunds & rescheduling policy]' },
  { q: 'Privacy', a: '[Add privacy policy]' },
]

export default function Policies() {
  usePageTitle('Policies & Student Conduct')
  return (
    <>
      <PageHero eyebrow="Policies" title="Policies & Student Conduct" />
      <section className="py-24">
        <Container className="max-w-3xl">
          <Faq items={policies} />
          <p className="mt-10 text-sm text-muted">
            Questions about our policies? Email{' '}
            <a href={`mailto:${brand.email}`} className="font-semibold text-terracotta">{brand.email}</a>.
          </p>
        </Container>
      </section>
    </>
  )
}
