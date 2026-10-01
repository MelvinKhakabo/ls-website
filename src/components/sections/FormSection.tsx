import { useState, type FormEvent } from 'react'
import DiamondMotif from '@/components/ui/DiamondMotif'
import { useSubmit } from '@/lib/useSubmit'

export default function NewsletterSignup({ title = 'Stay in the loop.', text }: { title?: string; text?: string }) {
  const [email, setEmail] = useState('')
  const { status, submit } = useSubmit('newsletter_subscribers')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (new FormData(e.currentTarget).get('website')) return
    if (await submit({ email: email.trim().toLowerCase() })) setEmail('')
  }

  return (
    <section className="px-3 pb-24 sm:px-4">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-8 py-14 md:px-14">
        <DiamondMotif className="absolute -right-10 -top-10 h-52 w-52 text-ochre opacity-10" />
        <div className="relative grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ochre">Subscribe</p>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">{title}</h2>
            {text && <p className="mt-3 text-white/70">{text}</p>}
          </div>
          <div>
            <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white outline-none placeholder:text-white/50 focus:border-ochre"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white transition hover:bg-terracotta-dark disabled:opacity-60"
              >
                {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
            {status === 'success' && <p className="mt-3 text-sm text-ochre">You’re subscribed. Thank you!</p>}
            {status === 'error' && <p className="mt-3 text-sm text-white/80">Something went wrong. Please try again.</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
