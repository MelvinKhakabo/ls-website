import { Link } from 'react-router-dom'
import type { LinkItem } from '@/config/navigation'

type Props = { item: LinkItem; className?: string; onClick?: () => void }

export default function SmartLink({ item, className, onClick }: Props) {
  if (item.external) {
    return (
      <a href={item.to} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {item.label}
      </a>
    )
  }
  return (
    <Link to={item.to} className={className} onClick={onClick}>
      {item.label}
    </Link>
  )
}
