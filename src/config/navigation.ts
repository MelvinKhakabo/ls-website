import { brand } from './brand'

export type LinkItem = { label: string; to: string; external?: boolean }
export type NavItem = LinkItem | { label: string; children: LinkItem[] }

export const mainNav: NavItem[] = [
  {
    label: 'About',
    children: [
      { label: 'Our Story', to: '/about' },
      { label: 'Our Pedagogy', to: '/pedagogy' },
      { label: 'Results & Credibility', to: '/results' },
      { label: 'Our Team', to: '/team' },
    ],
  },
  {
    label: 'Programs',
    children: [
      { label: 'All Programs', to: '/programs' },
      { label: 'PUMaC Africa', to: '/pumac-africa' },
      { label: 'Holiday Camps', to: brand.links.holidayCamps, external: true },
      { label: 'Admissions', to: '/admissions' },
    ],
  },
  { label: 'Events', to: '/events' },
  { label: 'Blog', to: '/blog' },
  { label: 'Locations', to: '/locations' },
  { label: 'Contact', to: '/contact' },
]

export const footerNav: { title: string; links: LinkItem[] }[] = [
  {
    title: 'Explore',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Our Pedagogy', to: '/pedagogy' },
      { label: 'Results & Credibility', to: '/results' },
      { label: 'Our Team', to: '/team' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { label: 'Hard Skills', to: '/programs' },
      { label: 'Soft Skills', to: '/programs' },
      { label: 'Holiday Camps', to: brand.links.holidayCamps, external: true },
      { label: 'Admissions', to: '/admissions' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Locations', to: '/locations' },
      { label: 'Join Our Team', to: '/careers' },
      { label: 'Contact', to: '/contact' },
      { label: 'Policies', to: '/policies' },
    ],
  },
]
