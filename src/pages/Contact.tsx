import type { FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import Container from '@/components/ui/Container'
import { FormStatus, Honeypot, Input, SubmitButton, Textarea } from '@/components/ui/Field'
import { brand } from '@/config/brand'
import { field, useSubmit } from '@/lib/useSubmit'
import { usePageTitle } from '@/lib/usePageTitle'

export default function Contact() {
  usePageTitle('Contact')
  const { status, submit } = useSubmit('contact_messages')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    if (fd.get('website')) return
    const ok = await submit({
      name: field(fd, 'name'),
      email: field(fd, 'email')?.toLowerCase() ?? null,
      phone: field(fd, 'phone'),
      message: field(fd, 'message'),
    })
    if (ok) form.reset()
  }

  return (
    <>
      <PageHero eyebrow="Contact" title={<>Let’s <span className="text-ochre">talk.</span></>} />

      <section className="py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <form onSubmit={onSubmit} className="space-y-5 rounded-card border border-line bg-white p-8 md:p-10">
            <Honeypot />
            <div className="grid gap-5 sm:grid-cols-2">
              <Input label="Name" id="name" autoComplete="name" />
              <Input label="Email" id="email" type="email" autoComplete="email" />
            </div>
            <Input label="Phone" id="phone" type="tel" autoComplete="tel" optional />
            <Textarea label="Message" id="message" />
            <FormStatus status={status} success="Thank you! We’ve received your message and will be in touch soon." />
            <SubmitButton status={status} label="Send Message" />
          </form>

          <div className="flex flex-col gap-6">
            <div className="space-y-5 rounded-card bg-ink p-8 text-white md:p-10">
              <a href={`mailto:${brand.email}`} className="flex items-center gap-3 hover:text-ochre">
                <Mail size={20} className="text-ochre" /> {brand.email}
              </a>
              <a href={`tel:${brand.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-ochre">
                <Phone size={20} className="text-ochre" /> {brand.phone}
              </a>
              <a href={brand.links.maps} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-ochre">
                <MapPin size={20} className="mt-0.5 shrink-0 text-ochre" /> {brand.address}
              </a>
            </div>
            <iframe
              title="Map — Loresho Shopping Centre"
              src={brand.links.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[300px] w-full flex-1 rounded-card border-0"
            />
          </div>
        </Container>
      </section>
    </>
  )
}
