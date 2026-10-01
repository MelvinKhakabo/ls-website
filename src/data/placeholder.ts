import { brand } from '@/config/brand'
import type { HeroSlide } from '@/components/sections/Hero'
import type { Program } from '@/components/sections/ProgramCards'
import type { Stat } from '@/components/sections/ProofMarquee'
import type { Pillar } from '@/components/sections/Pillars'
import type { Testimonial } from '@/components/sections/QuoteGrid'
import type { CalendarItem } from '@/components/sections/CalendarList'
import type { Place } from '@/components/sections/LocationCards'

// Add src: '/images/hero/hero-1.jpg' etc. once photos are in public/images/hero/
export const heroSlides: HeroSlide[] = [
  { alt: 'Photo — students in a PUMaC session' },
  { alt: 'Photo — AI Hackathon team at work' },
  { alt: 'Photo — Public Speaking on stage' },
  { alt: 'Photo — Holiday Camp group shot' },
]

// PLACEHOLDER numbers — confirm before launch
export const stats: Stat[] = [
  { value: '500+', label: 'Students Trained' },
  { value: '12', label: 'Competitions' },
  { value: 'Princeton', label: 'PUMaC Partner' },
  { value: 'Harvard', label: 'Founding Team' },
  { value: '2', label: 'Cities' },
]

export const programs: Program[] = [
  {
    number: '01',
    title: 'Hard Skills',
    tagline: 'Building strong brains for a changing world',
    tone: 'navy',
    description:
      'At Learning Sprouts, hard skills build confidence. Through Mathematics, Academic Research and Writing, Fun Sciences and our School of AI, learners tackle real problems and develop deep understanding through a gamified curriculum.',
    items: ['PUMaC Africa', 'AI Hackathon'],
    ages: '7–18',
    cta: { label: 'Explore Hard Skills', to: brand.links.programs },
  },
  {
    number: '02',
    title: 'Soft Skills',
    tagline: 'Growing confident, compassionate communicators',
    tone: 'terracotta',
    description:
      'Soft skills shape how children show up in class and in life. Through communication, leadership and confidence building programs, learners develop the courage to speak up, manage emotions and work well with others.',
    items: ['Public Speaking & Leadership'],
    ages: '7–18',
    cta: { label: 'Explore Soft Skills', to: brand.links.programs },
  },
  {
    number: '03',
    title: 'Holiday Camps',
    tagline: 'A term of curiosity in a few weeks', // PLACEHOLDER — needs your wording
    tone: 'ochre',
    description: 'Seasonal camps that pack a term of curiosity into a few unforgettable weeks.', // PLACEHOLDER
    items: ['Seasonal', 'Nairobi & Lagos'],
    ages: '7–18',
    cta: { label: 'Explore Holiday Camps', to: brand.links.holidayCamps },
  },
]

export const calendar: CalendarItem[] = [
  { when: 'January', title: 'PUMaC Training — Algebra', tag: 'PUMaC' },
  { when: 'January', title: 'STEM Hackathon', tag: 'STEM Hackathon' },
  { when: 'February', title: 'PUMaC Training — Geometry', tag: 'PUMaC' },
  { when: 'March', title: 'PUMaC Training — Number Theory', tag: 'PUMaC' },
  { when: 'March', title: 'STEM Hackathon', tag: 'STEM Hackathon' },
  { when: 'April', title: 'PUMaC Training — Combinatorics', tag: 'PUMaC' },
  { when: 'May', title: 'PUMaC Training — Algebra', tag: 'PUMaC' },
  { when: 'May', title: 'STEM Hackathon', tag: 'STEM Hackathon' },
  { when: 'May', title: 'AI Hackathon', tag: 'AI Hackathon' },
  { when: 'June', title: 'PUMaC Training — Geometry', tag: 'PUMaC' },
  { when: 'Jul – Aug', title: 'Holiday Camps', tag: 'Holiday Camps' },
  { when: 'July', title: 'PUMaC Training — Number Theory', tag: 'PUMaC' },
  { when: 'July', title: 'STEM Hackathon', tag: 'STEM Hackathon' },
  { when: 'August', title: 'PUMaC Training — Combinatorics', tag: 'PUMaC' },
  { when: 'September', title: 'PUMaC Training — Algebra', tag: 'PUMaC' },
  { when: 'September', title: 'STEM Hackathon', tag: 'STEM Hackathon' },
  { when: 'September', title: 'Public Speaking Championship', tag: 'Public Speaking' },
  { when: 'October', title: 'PUMaC Training — Geometry', tag: 'PUMaC' },
  { when: 'November', title: 'PUMaC Training — Number Theory', tag: 'PUMaC' },
  { when: 'November', title: 'STEM Hackathon', tag: 'STEM Hackathon' },
  { when: 'December', title: 'Quiet month — no major events', tag: 'Break' },
]

export const pedagogy: Pillar[] = [
  { title: 'Repetition', result: 'Mastery' },
  { title: 'Fun', result: 'Engagement' },
  { title: 'Positive Affirmation', result: 'Motivation' },
  { title: 'Parent–Teacher Partnership' },
]

// PLACEHOLDER testimonial
export const homeTestimonial: Testimonial = {
  quote: 'My son actually asks to go.',
  name: 'Parent, Nairobi',
  photoAlt: 'Photo — student in session',
}

export const places: Place[] = [
  {
    code: 'NBO',
    title: 'Nairobi',
    address: 'Loresho Shopping Centre, Loresho Ridge, next to Wasp & Sprout Cafe',
    cta: { label: 'Get Directions', to: 'https://www.google.com/maps/search/?api=1&query=Loresho+Shopping+Centre+Nairobi' },
  },
  {
    code: 'LAG',
    title: 'Lagos',
    address: 'Camps are hosted at different venues around the city each season',
    chip: 'Venues vary each season',
    cta: { label: 'See Details', to: '/locations' },
  },
]

/* ---------- Results & Credibility (PLACEHOLDERS — confirm before launch) ---------- */
import type { Person } from '@/components/sections/CredGrid'
import type { Partner } from '@/components/sections/LogoRow'

export const resultsStats: Stat[] = [
  { value: '500+', label: 'Students Trained' },
  { value: '12', label: 'Competitions' },
  { value: '98%', label: 'Parent Satisfaction' },
  { value: 'Princeton', label: 'PUMaC Partner' },
]

export const instructors: Person[] = [
  { name: 'Instructor A', role: 'Mathematics', credential: 'Harvard' },
  { name: 'Instructor B', role: 'PUMaC Lead', credential: 'Competition Maths' },
  { name: 'Instructor C', role: 'Public Speaking', credential: 'Soft Skills' },
  { name: 'Instructor D', role: 'AI Hackathon', credential: 'AI' },
]

export const partners: Partner[] = [
  { name: 'Princeton University Mathematics Club', note: 'PUMaC Africa partner' },
  { name: 'Rosslyn Academy', note: 'After-school partner' },
  { name: 'Partner Logo', note: 'Placeholder' },
]

export const testimonials: Testimonial[] = [
  { quote: 'Best decision we made.', name: 'Parent, Nairobi' },
  { quote: 'She found her voice here.', name: 'Parent, Lagos' },
  { quote: 'Qualified for PUMaC in year one.', name: 'Parent, Nairobi' },
]
