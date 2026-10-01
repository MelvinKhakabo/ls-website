import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import type { SubmitStatus } from '@/lib/useSubmit'
import { brand } from '@/config/brand'

const base =
  'w-full rounded-2xl border border-line bg-white px-4 py-3 text-ink outline-none transition placeholder:text-muted/60 focus:border-terracotta focus:ring-4 focus:ring-terracotta/10'

type Common = { label: string; id: string; optional?: boolean }

function Label({ label, id, optional }: Common) {
  return (
    <label htmlFor={id} className="mb-2 block text-sm font-semibold">
      {label}
      {optional && <span className="ml-1 font-normal text-muted">(optional)</span>}
    </label>
  )
}

export function Input({ label, id, optional, ...rest }: Common & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label label={label} id={id} optional={optional} />
      <input id={id} name={id} required={!optional} className={base} {...rest} />
    </div>
  )
}

export function Textarea({ label, id, optional, ...rest }: Common & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div>
      <Label label={label} id={id} optional={optional} />
      <textarea id={id} name={id} rows={5} required={!optional} className={base} {...rest} />
    </div>
  )
}

/** Hidden field bots fill in and humans never see */
export function Honeypot() {
  return <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
}

export function SubmitButton({ status, label }: { status: SubmitStatus; label: string }) {
  return (
    <button
      type="submit"
      disabled={status === 'loading'}
      className="rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-white transition hover:bg-terracotta-dark disabled:opacity-60"
    >
      {status === 'loading' ? 'Sending…' : label}
    </button>
  )
}

export function FormStatus({ status, success }: { status: SubmitStatus; success: string }) {
  if (status === 'success')
    return <p className="rounded-2xl bg-ochre/20 px-4 py-3 text-sm font-medium">{success}</p>
  if (status === 'error')
    return (
      <p className="rounded-2xl bg-terracotta/10 px-4 py-3 text-sm font-medium text-terracotta">
        Something went wrong. Please try again or email us at {brand.email}.
      </p>
    )
  return null
}
