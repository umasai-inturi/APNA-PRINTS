import { type SchemaTypeDefinition } from 'sanity'

import { serviceType } from '../schemas/service'
import { workType } from '../schemas/work'
import { testimonialType } from '../schemas/testimonial'
import { contactType } from '../schemas/contact'
import { heroType } from '../schemas/hero'
import { aboutType } from '../schemas/about'
import { siteSettingsType } from '../schemas/siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    serviceType,
    workType,
    testimonialType,
    contactType,
    heroType,
    aboutType,
    siteSettingsType,
  ],
}
