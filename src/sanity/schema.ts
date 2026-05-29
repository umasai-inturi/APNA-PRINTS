import { type SchemaTypeDefinition } from 'sanity';

import { serviceType } from './schemas/service';
import { workType } from './schemas/work';
import { testimonialType } from './schemas/testimonial';
import { contactType } from './schemas/contact';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [serviceType, workType, testimonialType, contactType],
};
