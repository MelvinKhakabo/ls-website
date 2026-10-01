import type { FormEvent } from 'react'
import PageHero from '@/components/sections/PageHero'
import Pillars, { type Pillar } from '@/components/sections/Pillars'
import EventList, { type EventItem } from '@/components/sections/EventList'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import { FormStatus, Honeypot, Input, SubmitButton, Textarea } from '@/components/ui/Field'
import { field, useSubmit } from '@/lib/useSubmit'
import { usePageTitle } from '@/lib/usePageTitle'

const why: Pillar[] = [
  { title: 'Impact', text: 'Work that matters' },
  { title: 'Growth', text: 'Training included' },
  { title: 'Culture', text: 'Collaborative' },
]

// Replace with real roles
const roles: EventItem[] = [{ date: '[Type]', title: '[Open role title]', location: '[Location]' }]

export default function Careers() {
  usePageTitle('Join Our Team')
  const { status, submit } = useSubmit('job_applications')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    if (fd.get('website')) return
    const ok = await submit({
      name: field(fd, 'name'),
      email: field(fd, 'email')?.toLowerCase() ?? null,
      phone: field(fd, 'phone'),
      role: field(fd, 'role'),
      cv_link: field(fd, 'cv_link'),
      message: field(fd, 'message'),
    })
    if (ok) form.reset()
  }

  return (
    <>
      <PageHero eyebrow="Careers" title={<>Join our <span className="text-ochre">team.</span></>} photoAlt="Photo — team at work" />

      <section className="py-24">
        <Container>
          <SectionHeader eyebrow="Why Learning Sprouts" title="Teach with us" />
          <Pillars items={why} cols={3} />
        </Container>
      </section>

      <section className="pb-24">
        <Container className="max-w-4xl">
          <SectionHeader eyebrow="Open Roles" title="Current openings" />
          <EventList items={roles} />
        </Container>
      </section>

      <section className="pb-24">
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="Apply" title="Send us your application" />
          <form onSubmit={onSubmit} className="space-y-5 rounded-card border border-line bg-white p-8 md:p-10">
            <Honeypot />
            <div className="grid gap-5 sm:grid-cols-2">
              <Input label="Full name" id="name" autoComplete="name" />
              <Input label="Email" id="email" type="email" autoComplete="email" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Input label="Phone" id="phone" type="tel" autoComplete="tel" optional />
              <Input label="Role interested in" id="role" />
            </div>
            <Input label="Link to CV (Google Drive, Dropbox…)" id="cv_link" type="url" placeholder="https://" optional />
            <Textarea label="Message" id="message" optional />
            <FormStatus status={status} success="Thank you for applying! We’ll review your application and be in touch." />
            <SubmitButton status={status} label="Submit Application" />
          </form>
        </Container>
      </section>
    </>
  )
}
