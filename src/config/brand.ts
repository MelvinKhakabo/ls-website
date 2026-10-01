// The ONE place brand identity lives. Rebrand = edit this file + tokens.css.
export const brand = {
  name: 'Learning Sprouts',
  logo: { first: 'Learning', second: 'Sprouts' },
  tagline: "Nairobi's future-skills hub. Founded by Harvard grads.",
  email: 'ask@learningsprouts.school',
  phone: '+254 719 218 992',
  address: 'Loresho Shopping Centre, Loresho Ridge, next to Wasp & Sprout Cafe',
  cities: ['Nairobi', 'Lagos'],
  links: {
    programs: 'https://programs.learningsprouts.school',
    holidayCamps: 'https://summercamp-lagos.learningsprouts.school',
    maps: 'https://www.google.com/maps/search/?api=1&query=Loresho+Shopping+Centre+Nairobi',
    mapEmbed: 'https://www.google.com/maps?q=Loresho+Shopping+Centre,+Nairobi&output=embed',
  },
} as const
