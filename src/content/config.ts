import { defineCollection, z } from 'astro:content';

const practiceAreasCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    hero: z.object({
      heading: z.string(),
      subheading: z.string(),
      cta: z.object({
        text: z.string(),
        link: z.string(),
      }),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
    }),
    overview: z.object({
      heading: z.string(),
      headingAccent: z.string(),
      description: z.string(),
    }),
    whatWeHelpWith: z.object({
      heading: z.string(),
      headingAccent: z.string(),
      description: z.string(),
      items: z.array(z.string()),
    }),
    keyBenefits: z.object({
      heading: z.string(),
      headingAccent: z.string(),
      description: z.string(),
      benefits: z.array(z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })),
      cta: z.object({
        text: z.string(),
        link: z.string(),
      }),
    }),
    process: z.object({
      heading: z.string(),
      headingAccent: z.string(),
      description: z.string(),
      steps: z.array(z.object({
        number: z.string(),
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })),
    }),
    faq: z.object({
      heading: z.string(),
      headingAccent: z.string(),
      description: z.string(),
      items: z.array(z.object({
        question: z.string(),
        answer: z.string(),
      })),
    }),
    finalCta: z.object({
      heading: z.string(),
      headingAccent: z.string(),
      description: z.string(),
      cta: z.object({
        text: z.string(),
        link: z.string(),
      }),
    }),
  }),
});

const resourcesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    category: z.enum(['Wills', 'Trusts', 'Probate', 'Powers of Attorney', 'Guardianship']),
    summary: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    date: z.string(),
    link: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  'practice-areas': practiceAreasCollection,
  'resources': resourcesCollection,
};
