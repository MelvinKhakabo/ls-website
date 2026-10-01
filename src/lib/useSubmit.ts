import { useState } from 'react'
import { supabase } from './supabase'

export type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'
type Table = 'contact_messages' | 'newsletter_subscribers' | 'job_applications'

export function useSubmit(table: Table) {
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const submit = async (payload: Record<string, string | null>) => {
    setStatus('loading')
    const { error } = await supabase.from(table).insert(payload)
    // 23505 = already exists (e.g. newsletter email) — treat as success
    if (error && error.code !== '23505') {
      console.error(error)
      setStatus('error')
      return false
    }
    setStatus('success')
    return true
  }

  return { status, submit }
}

export const field = (fd: FormData, key: string) => {
  const v = String(fd.get(key) ?? '').trim()
  return v.length ? v : null
}
