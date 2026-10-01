import { brand } from '@/config/brand'
import type { Feature } from '@/components/sections/ProgramFeature'

export const programFeatures: Feature[] = [
  {
    id: 'pumac',
    track: 'Hard Skills',
    title: 'PUMaC Africa',
    tagline: 'Princeton University Mathematics Competition',
    paragraphs: [
      'Prepare for one of the world’s most rigorous high school math competitions through a structured training program delivered by Learning Sprouts in partnership with the Princeton University Math Club.',
      'The program is designed as a structured pathway, guiding students from foundational understanding to advanced competition-level performance.',
    ],
    lists: [{ heading: 'Core areas', items: ['Algebra', 'Number Theory', 'Geometry', 'Combinatorics'] }],
    meta: ['Ages 13–18'],
    photoAlt: 'Photo — PUMaC training session',
    accent: 'navy',
    ctas: [
      { label: 'Learn about PUMaC Africa', to: '/pumac-africa' },
      { label: 'Register on Programs Page', to: brand.links.programs, variant: 'ghost' },
    ],
  },
  {
    id: 'ai-hackathon',
    track: 'Hard Skills',
    title: 'AI Hackathon',
    paragraphs: ['[Add AI Hackathon description]'],
    meta: ['Ages 7–18'],
    photoAlt: 'Photo — AI Hackathon',
    accent: 'terracotta',
    ctas: [{ label: 'Register on Programs Page', to: brand.links.programs }],
  },
  {
    id: 'public-speaking',
    track: 'Soft Skills',
    title: 'Public Speaking Lab',
    tagline: 'Helping young people find their voice, build confidence, and speak with impact.',
    paragraphs: [
      'The Learning Sprouts Public Speaking Lab is designed for students aged 7–18, helping them develop the confidence and communication skills to express their ideas clearly, think on their feet, and engage an audience.',
      'Through age-appropriate, practical sessions, students build skills in speech delivery, storytelling, impromptu speaking, argumentation, presentation, and effective communication while developing their own unique voice.',
      'Students also have the opportunity to put their skills into practice through the Learning Sprouts Public Speaking Championship.',
    ],
    lists: [{ heading: 'Age groups', items: ['Junior Lab: Ages 7–11', 'Middle Lab: Ages 12–15', 'Senior Lab: Ages 16–18'] }],
    meta: ['In-person and online options available'],
    photoAlt: 'Photo — Public Speaking Lab',
    accent: 'ochre',
    ctas: [{ label: 'Register on Programs Page', to: brand.links.programs }],
  },
]
