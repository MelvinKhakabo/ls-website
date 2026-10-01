import { useEffect } from 'react'
import { brand } from '@/config/brand'

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — ${brand.name}` : `${brand.name} — Future skills. Real results.`
  }, [title])
}
