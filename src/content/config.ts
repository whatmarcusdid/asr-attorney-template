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

export const collections = {
  'practice-areas': practiceAreasCollection,
};
