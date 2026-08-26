import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const eventsCollection = defineCollection({
  loader: file("src/content/events/events.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    titleEn: z.string(),
    date: z.string(),
    displayDateTr: z.string(),
    displayDateEn: z.string(),
    category: z.enum(['workshop', 'conference', 'kids', 'talk', 'exhibition']),
    categoryLabelTr: z.string(),
    categoryLabelEn: z.string(),
    locationTr: z.string(),
    locationEn: z.string(),
    summaryTr: z.string(),
    summaryEn: z.string(),
    image: z.string(),
    photos: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    isPast: z.boolean().default(false),
    actionUrl: z.string().optional()
  })
});

const booksCollection = defineCollection({
  loader: file("src/content/books/books.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    originalYear: z.number().optional(),
    coverImage: z.string(),
    summaryTr: z.string(),
    summaryEn: z.string(),
    isRare: z.boolean().default(false),
    order: z.number(),
    publisher: z.string().optional(),
    genreTr: z.string().optional(),
    genreEn: z.string().optional(),
    quoteTr: z.string().optional(),
    quoteEn: z.string().optional()
  })
});

const talksCollection = defineCollection({
  loader: file("src/content/talks/talks.json"),
  schema: z.object({
    id: z.string(),
    titleTr: z.string(),
    titleEn: z.string(),
    guestTr: z.string(),
    guestEn: z.string(),
    roleTr: z.string(),
    roleEn: z.string(),
    category: z.enum(['author', 'historian', 'artist', 'archaeologist']),
    duration: z.string(),
    date: z.string(),
    youtubeId: z.string(),
    thumbnail: z.string(),
    summaryTr: z.string(),
    summaryEn: z.string(),
    featured: z.boolean().default(false),
    chapters: z.array(z.object({
      time: z.string(),
      seconds: z.number(),
      titleTr: z.string(),
      titleEn: z.string()
    })).optional()
  })
});

const boardCollection = defineCollection({
  loader: file("src/content/board/board.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    roleTr: z.string().optional(),
    roleEn: z.string().optional(),
    order: z.number()
  })
});

export const collections = {
  events: eventsCollection,
  books: booksCollection,
  talks: talksCollection,
  board: boardCollection
};
