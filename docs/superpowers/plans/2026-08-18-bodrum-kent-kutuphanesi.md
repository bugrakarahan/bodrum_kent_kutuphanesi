# Bodrum Kent Kütüphanesi Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete, bilingual (TR / EN) Bodrum Kent Kütüphanesi digital platform with Astro, Tailwind CSS, Content Collections, and rich client-side micro-interactions based on the Stitch "Aegean Heritage" editorial design system.

**Architecture:** Static site generation with Astro for high performance, SEO, and zero JS overhead by default; typed Content Collections for structured content (events, books, talks, board members); lightweight client-side scripts for instant search, live event/video filtering, interactive forms, and video modals.

**Tech Stack:** Astro, Tailwind CSS, TypeScript, Google Fonts (EB Garamond & Hanken Grotesk / Libre Franklin), Google Material Symbols.

---

### Task 1: Project Scaffolding & Design System Setup

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `tailwind.config.mjs`
- Create: `src/styles/global.css`

- [ ] **Step 1: Initialize package.json and install Astro with Tailwind**

```json
{
  "name": "bodrum-kent-kutuphanesi",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/check": "^0.9.4",
    "@astrojs/tailwind": "^5.1.5",
    "astro": "^5.0.0",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.3"
  }
}
```

- [ ] **Step 2: Run npm install**

Run: `npm install`
Expected: Node modules installed successfully.

- [ ] **Step 3: Create Astro configuration (`astro.config.mjs`) and TypeScript config (`tsconfig.json`)**

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
```

```json
// tsconfig.json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

- [ ] **Step 4: Create Tailwind Configuration (`tailwind.config.mjs`) with Aegean Heritage tokens**

```javascript
// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        parchment: '#F9F7F2',
        ink: '#1A2B3C',
        olive: '#556B2F',
        sand: '#E5DFD3',
        'stone-gray': '#7D7D7D',
        primary: '#041627',
        'primary-container': '#1a2b3c',
        'on-primary': '#ffffff',
        'on-primary-container': '#8192a7',
        secondary: '#625e55',
        'secondary-container': '#e5dfd3',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#666259',
        tertiary: '#0e1900',
        'tertiary-container': '#1e2f00',
        'surface-bright': '#fbf9f4',
        'surface-dim': '#dbdad5',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f5f3ee',
        'surface-container': '#f0eee9',
        'surface-container-high': '#eae8e3',
        'surface-container-highest': '#e4e2dd',
        'on-surface': '#1b1c19',
        'on-surface-variant': '#44474c',
        outline: '#74777d',
        'outline-variant': '#c4c6cd'
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.375rem',
        xl: '0.5rem',
        full: '9999px'
      },
      spacing: {
        'margin-desktop': '64px',
        'margin-mobile': '20px',
        gutter: '24px',
        'container-max': '1280px',
        base: '8px'
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['"Hanken Grotesk"', '"Libre Franklin"', 'system-ui', 'sans-serif'],
        'headline-lg': ['"EB Garamond"', 'serif'],
        'headline-md': ['"EB Garamond"', 'serif'],
        'display-lg': ['"EB Garamond"', 'serif'],
        'body-lg': ['"Hanken Grotesk"', 'sans-serif'],
        'body-md': ['"Hanken Grotesk"', 'sans-serif'],
        'label-md': ['"Hanken Grotesk"', 'sans-serif'],
        caption: ['"Hanken Grotesk"', 'sans-serif']
      }
    }
  },
  plugins: []
};
```

- [ ] **Step 5: Create `src/styles/global.css` with Google Fonts and reset styles**

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Libre+Franklin:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

.ex-libris-watermark {
  opacity: 0.04;
  pointer-events: none;
  user-select: none;
}

.text-balance {
  text-wrap: balance;
}

body {
  background-color: #F9F7F2;
  color: #1A2B3C;
  font-family: 'Hanken Grotesk', system-ui, sans-serif;
  overflow-x: hidden;
}

::selection {
  background-color: #556B2F;
  color: #FFFFFF;
}

/* Editorial line decorations */
.editorial-divider {
  height: 1px;
  background-color: #E5DFD3;
  width: 100%;
}
```

- [ ] **Step 6: Commit Project Foundation**

```bash
git add package.json astro.config.mjs tsconfig.json tailwind.config.mjs src/styles/global.css
git commit -m "chore: scaffold Astro project and configure Aegean Heritage design system"
```

---

### Task 2: Content Collections, Mock Datasets & i18n Helpers

**Files:**
- Create: `src/content/config.ts`
- Create: `src/content/events/events.json`
- Create: `src/content/books/books.json`
- Create: `src/content/talks/talks.json`
- Create: `src/content/board/board.json`
- Create: `src/utils/i18n.ts`

- [ ] **Step 1: Create `src/content/config.ts` schema definitions**

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const eventsCollection = defineCollection({
  type: 'data',
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
    featured: z.boolean().default(false),
    isPast: z.boolean().default(false),
    actionUrl: z.string().optional()
  })
});

const booksCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    originalYear: z.number().optional(),
    coverImage: z.string(),
    summaryTr: z.string(),
    summaryEn: z.string(),
    isRare: z.boolean().default(false),
    order: z.number()
  })
});

const talksCollection = defineCollection({
  type: 'data',
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
    featured: z.boolean().default(false)
  })
});

const boardCollection = defineCollection({
  type: 'data',
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
```

- [ ] **Step 2: Create `src/content/events/events.json` with Stitch dataset**

```json
[
  {
    "id": "event-1",
    "title": "Bodrum’da Edebiyat ve Kent Belleği",
    "titleEn": "Literature and Urban Memory in Bodrum",
    "date": "2024-10-24",
    "displayDateTr": "24 EKİM 2024",
    "displayDateEn": "24 OCT 2024",
    "category": "talk",
    "categoryLabelTr": "Söyleşi",
    "categoryLabelEn": "Talk",
    "locationTr": "Ana Salon",
    "locationEn": "Main Hall",
    "summaryTr": "Mavi Sürgün'ün izinde, Bodrum'un ruhunu şekillendiren Cevat Şakir Kabaağaçlı'nın edebiyatını ve kente kattığı değerleri akademisyenler eşliğinde derinlemesine inceliyoruz.",
    "summaryEn": "In the footsteps of the Blue Exile, we explore the literary legacy of Cevat Şakir Kabaağaçlı and his contributions to Bodrum with esteemed scholars.",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBtamE2wb97G4UEjVppyIa8xyaz9ESuP7aGYOlM4umN3pryekAUYBwn8XZKo45ZH7aqW73vU6dZsZMnwJgHghenoLISwtjdMxzizGhJdT-zogTKwukWr8_mcLz_GzaVctJXJRHJp7NTLN-FpTqgLCSpt_ul3-9IG-wgO12fv2VihhT8grjHZSbIrejBTST3Qk4OkAZzS9DaaMmyQAUTQACoPiS-Px-FESLfSfYs8RcKnv1j1wlDAq9KyjedqU32oOYQb0Hdoct4hQA",
    "featured": true,
    "isPast": false
  },
  {
    "id": "event-2",
    "title": "Mavi Sürgün’ün İzinde: Halikarnas Atölyesi",
    "titleEn": "Following the Blue Exile: Halicarnassus Workshop",
    "date": "2024-11-12",
    "displayDateTr": "12 KASIM 2024",
    "displayDateEn": "12 NOV 2024",
    "category": "workshop",
    "categoryLabelTr": "Atölye",
    "categoryLabelEn": "Workshop",
    "locationTr": "Açık Hava Alanı",
    "locationEn": "Open Air Area",
    "summaryTr": "Kendi hikayenizi Bodrum'un ilham verici manzarası eşliğinde kaleme alın.",
    "summaryEn": "Craft your own literary pieces inspired by the scenic beauty and cultural history of Bodrum.",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDo35JyuEFZrMsjL5xi_1dU9v2jPrsB_hzzzt2tPbGSFtajzdhr-r3e4KS4pGbTi89TTqGfK9TuZeYi-PbsY9oVvDhBOX5nD2e-ESThfSWIbYsTYI5qFJkuyBbCxCGlexlEfaAHW_NjFohRyAk1138THYgA0x7UrqdCGP5M1gFZRNbGs6V5pUhNmWNB8r6DuWjyBR06qgZQu9VDKyj-ACJxTH6dKM5WsbjuSIQsUaxMI0fQgibKAz9v0gMo9AhuFAKHy4xZt45VcLI",
    "featured": false,
    "isPast": false
  },
  {
    "id": "event-3",
    "title": "Antik Halikarnassos'un Mimari Sırları",
    "titleEn": "Architectural Secrets of Ancient Halicarnassus",
    "date": "2024-11-18",
    "displayDateTr": "18 KASIM 2024",
    "displayDateEn": "18 NOV 2024",
    "category": "conference",
    "categoryLabelTr": "Konferans",
    "categoryLabelEn": "Conference",
    "locationTr": "Konferans Salonu",
    "locationEn": "Conference Hall",
    "summaryTr": "Dünyanın yedi harikasından biri olan Mausoleum ve kentin antik dokusu üzerine bir keşif yolculuğu.",
    "summaryEn": "An insightful exploration of the Mausoleum at Halicarnassus and the ancient urban fabric of Bodrum.",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ_kg3bbgJ4ynOz1o7DQcY3YaIdeG_zUESiNKW-81FsNfEZqrXlPi-ZAYWzb2FYdKriB4ESdIgn04zGCTSrnOaQAobk2tEQSDMKK4TlQhdPdjUJk74KLsSusQUSR9nHe1QycFJgHdfJUQSr8eFa2k0wQHdX3j1D5aQBbxg9mUEAGpQs_UGA_l1geAuKfbBil5Wy-_VugN7cjAepbQ_HoOugyaLOfsfF-vsYSCOhY75Ao3sAvwHFdv3nGJYn9whKvXn8vnrP8j4yEE",
    "featured": false,
    "isPast": false
  },
  {
    "id": "event-past-1",
    "title": "Bodrum Deniz Müzesi Arşiv Çalışmaları",
    "titleEn": "Bodrum Maritime Museum Archive Digitization",
    "date": "2024-09-15",
    "displayDateTr": "EYLÜL 2024",
    "displayDateEn": "SEPTEMBER 2024",
    "category": "talk",
    "categoryLabelTr": "Panel",
    "categoryLabelEn": "Panel",
    "locationTr": "Kütüphane Galerisi",
    "locationEn": "Library Gallery",
    "summaryTr": "Bodrum'un denizcilik tarihine ışık tutan arşivlerin dijitalleşme süreci üzerine panel.",
    "summaryEn": "Panel on the digitization process of historical archives documenting Bodrum's maritime past.",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBqk-953tTBJADQi0Azj1ZN5PyU4pI3s0EiItIcU9XtL_iFZfwIIsvFzj0siWx83vor3qW0O9ocXKr4f0iKG1H3UCTA5a_tFIa4w_pGtaKQg6B_jY-3YJRk6nNIzYj5EMQWvVJ4Rf3rFn4BUx9ddLwudT5uuEdtD7KQX3UY2O_RJ7ga7BliM_lke-E6yZyFvFBYKNg_1v4TUwQgK6yr2WSZgev5SeA--Ikm4tJfAiHk361JiPiBfNxpySm__kBC5uYU1myQGM_uLZ0",
    "featured": false,
    "isPast": true
  },
  {
    "id": "event-past-2",
    "title": "Akdeniz Şiirleri Akşamı",
    "titleEn": "Mediterranean Poetry Evening",
    "date": "2024-08-20",
    "displayDateTr": "AĞUSTOS 2024",
    "displayDateEn": "AUGUST 2024",
    "category": "talk",
    "categoryLabelTr": "Dinleti",
    "categoryLabelEn": "Recital",
    "locationTr": "Kütüphane Bahçesi",
    "locationEn": "Library Courtyard",
    "summaryTr": "Dolunay altında, kütüphane bahçesinde gerçekleşen şiir ve müzik dinletisi.",
    "summaryEn": "An atmospheric evening of Mediterranean poetry and acoustic melodies under the full moon.",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBx861GaOAEWXMcPLQYy54y2rbKTuRi04sJw3_gGfpzRn9xCNqwqBfNxv4Xph8DONWdSf4ldN5KXpkfsuXtrSnFA_f5VHmpPA3-cJFPN4xoh6A_zvthvYWOYArJMH-Rt8xOBxtxJEqEKZB9Cq-92PD9LyxiHdlVUQmtW3BDZIZmuXhoCPrcUOBmWigV1mGPF1CoeypnPAlUP554cbgKSkamsiRlO9kzkPIszrTs-uRbh0IvzUJAAVVL419MqpN-q-4MggoVwg663xc",
    "featured": false,
    "isPast": true
  },
  {
    "id": "event-past-3",
    "title": "Çocuklar İçin Mitoloji Atölyesi",
    "titleEn": "Mythology Workshop for Children",
    "date": "2024-07-10",
    "displayDateTr": "TEMMUZ 2024",
    "displayDateEn": "JULY 2024",
    "category": "kids",
    "categoryLabelTr": "Çocuk Atölyesi",
    "categoryLabelEn": "Kids Workshop",
    "locationTr": "Çocuk Bölümü",
    "locationEn": "Children's Wing",
    "summaryTr": "Ege mitolojisinin kahramanlarını masallar ve resimlerle tanıdığımız interaktif gün.",
    "summaryEn": "An interactive storytelling and illustration workshop introducing young readers to Aegean legends.",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuD8WkXzGmfENDt811-e5EbSzFBxrGpW7UF4_uCB7gFfr7ujsyC6eDnLLphZEMMWR0p0evPtmY3nrp76fi7PGzYRNejKydZweE2MkRR26cMgXRCiwuuofB7R039mVmTBe6XUamD1lHnRnWYXCJgHSDcgFEQbn-bimo04HOxOhBXa-A9xqAxJFBuxHbFLvjBqjsqqgNnpHRGZZRJyGa0YPWDCBrMvjJbITQwTRHitxRc6ffnjN4s4Ghk1RTE_acQAd39l8a0bcZ9-Pw8",
    "featured": false,
    "isPast": true
  }
]
```

- [ ] **Step 3: Create `src/content/books/books.json` (11 key works + rare manuscripts)**

```json
[
  {
    "id": "book-1",
    "title": "Aganta Burina Burinata",
    "originalYear": 1946,
    "coverImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuCgQzLxuCXFYeiqO8grc0zr_0Pf1ihkOs0hxyFkjDFjEr98GT2pA1iI2azelxClhyPYCHuKIb2bH75zBV6kYaeNAzDMsRziJ8Z9B-Tf9UmZd7-zpYA7WXSmshAfwfQRSKtXOOMUtFNLORtmLOvK6fAaZccXos3jt8HOuIJ1aJQZlVoliWouikqEEq8uZzwp6KrW0Aa_kMQM6lv36sh1AVUFIEx91y5fVQUXQhwpTSQQAvUFHwb5wI4ZOd1cgjoLkSQ68q33aAMrvY0",
    "summaryTr": "Ege denizcilerinin ve sünger avcılarının deniz tutkusunu anlatan başyapıt roman.",
    "summaryEn": "The masterpiece novel depicting the maritime passion of Aegean fishermen and sponge divers.",
    "isRare": false,
    "order": 1
  },
  {
    "id": "book-2",
    "title": "Mavi Sürgün",
    "originalYear": 1961,
    "coverImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuDVttDrg33J7nK7Pu3LP7QarRgOoHZ_9prcOS8MDxYd_s8d7iY0FZQTxxzIAsWznVjskXzFJC44SQk7_LMdof5LFC6GZ7unKJ_YNSfl25oM_ktMZoiXbr91uUdsuMmv6lkjtld1VFKsKaQDISisKeqfWTC9VqL89kwmqSYa6R35uT9y0WaDpnOfajEA-JPgQ5fUvptXsRlTxCJqRfwMyrGwTS_7sDLBGJ53c993sUj29-bj2NOEZymDTGLPkr--ACh2IZmUz1iDnxY",
    "summaryTr": "Cevat Şakir'in Bodrum'a sürgün edilişini ve kente olan aşkını anlattığı otobiyografik anı eseri.",
    "summaryEn": "The iconic autobiographical memoir capturing the author's exile to Bodrum and his deep love for the town.",
    "isRare": true,
    "order": 2
  },
  {
    "id": "book-3",
    "title": "Uluç Reis",
    "originalYear": 1962,
    "coverImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuAXBkFWopuKLSZhWxAXFGY1G9hfX2iRCCWTZEzfwO9PMGlShHYR-cS5usmHqsvPuKdJohlfhmTxGcINHp8wy8XGHWdGCwCjMzlyIoVkuKxsROOPs2JYUvyIqMK1OeDH6P_yV6hs9U2K18_R6j1cQn8g6F6YGnZtsuiA07nu2my9JGTPTf1DJfHHb_BeuC2XcctPtkpR8uqGzdXzJOMgWdT9g4yrWLRjcZvyNOsTbBr6Z5K86JFtI-SLBbwT8T2m0rtoMhADEc2CI4o",
    "summaryTr": "Akdeniz'de hüküm süren efsanevi Türk denizcisi Uluç Ali Reis'in destansı yaşamı.",
    "summaryEn": "The epic chronicle of legendary Ottoman Mediterranean admiral Uluç Ali Reis.",
    "isRare": false,
    "order": 3
  },
  {
    "id": "book-4",
    "title": "Deniz Gurbetçileri",
    "originalYear": 1969,
    "coverImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBMCWkgky_PMT3yLHplVl7x_FJErNB1kwwRm5hO0j1ycSuHOrNOrmoaHTI2Bq9v5p3MPkFIYjnFnPpIn0JbHMKMD-YUzLrS_212pQBO_f2TKZ46ttMS2_MpH7tSxR7I9UIykFkUzpiL8zhCnPugNqEYB1mT8Mcnq52J6Z6Vc7WMTE65-e2WvXX2fzd9wGhv8PXvAyAAYPGdh1zbGAXew5xfqHG7h2GcRMz75pK1nZ3w1W57osXQYwiPlfq9VzpWwGgVknKuW79-MJg",
    "summaryTr": "Ekmeklerini deniz diplerinden çıkaran süngercilerin çetin hayat mücadelesi.",
    "summaryEn": "The perilous livelihood and solidarity of traditional Mediterranean sponge divers.",
    "isRare": false,
    "order": 4
  },
  {
    "id": "book-5",
    "title": "Turgut Reis",
    "originalYear": 1958,
    "coverImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuCgQzLxuCXFYeiqO8grc0zr_0Pf1ihkOs0hxyFkjDFjEr98GT2pA1iI2azelxClhyPYCHuKIb2bH75zBV6kYaeNAzDMsRziJ8Z9B-Tf9UmZd7-zpYA7WXSmshAfwfQRSKtXOOMUtFNLORtmLOvK6fAaZccXos3jt8HOuIJ1aJQZlVoliWouikqEEq8uZzwp6KrW0Aa_kMQM6lv36sh1AVUFIEx91y5fVQUXQhwpTSQQAvUFHwb5wI4ZOd1cgjoLkSQ68q33aAMrvY0",
    "summaryTr": "Bodrum Karatoprak doğumlu büyük Türk amirali Turgut Reis'in biyografik romanı.",
    "summaryEn": "The historical novel on the life of Bodrum-born grand admiral Turgut Reis.",
    "isRare": false,
    "order": 5
  },
  {
    "id": "book-6",
    "title": "Anadolu Efsaneleri",
    "originalYear": 1954,
    "coverImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuAa2lpFiOMtq1G5QMTMcrhGf-eAIwJpqrkKWYMZ7k575vAUYtotBBBn3sGqyxyBQ_Dcrha5WOCYY2a4gwNRq0JR1LMstQugEHNTXE029TQK2X0tmg6OBpqXzxBhJuI54UCLkMHC3ttba7xIMF29OLWhvw8SWX2wxv2znaMKy9IC4mc0VKjsv3fA-glDw11kAcCi6ry5mnRGxep7FazMew97p5cp1y2aRXN3Klzx5Jp22iIhFHLrpfUrwICjzhWdM-r0zKuP6THba_s",
    "summaryTr": "Anadolu mitolojisinin ve kadim Ege uygarlıklarının köklerini aydınlatan başvuru eseri.",
    "summaryEn": "An authoritative collection illuminating the deep mythological heritage of Anatolia and the Aegean.",
    "isRare": true,
    "order": 6
  },
  {
    "id": "book-7",
    "title": "Merhaba Akdeniz",
    "originalYear": 1947,
    "coverImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuDyV23I4j_XKCl20T9R_CWzgeEve_0fFjFj7t8HpIh1_1Z10v2r8z33l_43RKL68XuMg5LL2dmFlmgSVIFOySLJb6TFlzsVTqvnTO8TLreJGpzcqTVySae9geDc5ntH5tMuCR4vvgEm16rPSEp8ghDluCotT11YdtrvQ8YMKuskCGifrzk-XxF1HV62dz4oJueRQKQZ8bgAujXt-OvqBwyEd1ZvYZ6wrI7xd6qCRwWwPT2C3TluJLekvWuGvIIqyF4rSKEn1_V4eao",
    "summaryTr": "Deniz hikayeleri ve Bodrum insanının sıcak anlatımıyla yoğrulmuş ilk öykü derlemesi.",
    "summaryEn": "The inaugural short story collection portraying maritime folklore and the people of Bodrum.",
    "isRare": false,
    "order": 7
  },
  {
    "id": "book-8",
    "title": "Hey Koca Yurt",
    "originalYear": 1972,
    "coverImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuCqA2WM6mgUDlTqu77svWfadlFiAS_DtA_1wA5fyVCBN4Dqo9dQe7_2uGjBT31QBtYWv8NSLeEE2fhCKxfjCaAc831PRgP97J5QZW4nwZ5k6Z4VwfQOX0wPp2s5zeWBfbHXlN4jMh3agFCcONR1zWO5IhNbXBEanvfsOB9Zn0mvlUTONYH5LHraNv4ynE0RxLlj5D2fal4r0Hy4bxaIEhFd7CLKnvyvuCT0SDKTc43SdSnu7aDkTggITYnev4OiG5eN76YwRH7LFc4",
    "summaryTr": "Anadolu hümanizmasını ve Akdeniz uygarlıklarının kardeşliğini anlatan denemeler.",
    "summaryEn": "Philosophical essays celebrating Anatolian humanism and the shared heritage of Mediterranean civilizations.",
    "isRare": false,
    "order": 8
  },
  {
    "id": "book-9",
    "title": "Ege Kıyılarından",
    "originalYear": 1939,
    "coverImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuDVttDrg33J7nK7Pu3LP7QarRgOoHZ_9prcOS8MDxYd_s8d7iY0FZQTxxzIAsWznVjskXzFJC44SQk7_LMdof5LFC6GZ7unKJ_YNSfl25oM_ktMZoiXbr91uUdsuMmv6lkjtld1VFKsKaQDISisKeqfWTC9VqL89kwmqSYa6R35uT9y0WaDpnOfajEA-JPgQ5fUvptXsRlTxCJqRfwMyrGwTS_7sDLBGJ53c993sUj29-bj2NOEZymDTGLPkr--ACh2IZmUz1iDnxY",
    "summaryTr": "Ege denizcilerinin hayatından kesitler sunan unutulmaz öyküler.",
    "summaryEn": "Memorable tales portraying the maritime way of life along the Aegean shores.",
    "isRare": false,
    "order": 9
  },
  {
    "id": "book-10",
    "title": "Parmak Damgası",
    "originalYear": 1971,
    "coverImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuAXBkFWopuKLSZhWxAXFGY1G9hfX2iRCCWTZEzfwO9PMGlShHYR-cS5usmHqsvPuKdJohlfhmTxGcINHp8wy8XGHWdGCwCjMzlyIoVkuKxsROOPs2JYUvyIqMK1OeDH6P_yV6hs9U2K18_R6j1cQn8g6F6YGnZtsuiA07nu2my9JGTPTf1DJfHHb_BeuC2XcctPtkpR8uqGzdXzJOMgWdT9g4yrWLRjcZvyNOsTbBr6Z5K86JFtI-SLBbwT8T2m0rtoMhADEc2CI4o",
    "summaryTr": "Ege kıyılarında geçen insan ve adalet temalı derinlikli öyküler.",
    "summaryEn": "Profound stories revolving around human conscience and justice on the Aegean coast.",
    "isRare": false,
    "order": 10
  },
  {
    "id": "book-11",
    "title": "Çiçeklerin Düğünü",
    "originalYear": 1971,
    "coverImage": "https://lh3.googleusercontent.com/aida-public/AB6AXuBMCWkgky_PMT3yLHplVl7x_FJErNB1kwwRm5hO0j1ycSuHOrNOrmoaHTI2Bq9v5p3MPkFIYjnFnPpIn0JbHMKMD-YUzLrS_212pQBO_f2TKZ46ttMS2_MpH7tSxR7I9UIykFkUzpiL8zhCnPugNqEYB1mT8Mcnq52J6Z6Vc7WMTE65-e2WvXX2fzd9wGhv8PXvAyAAYPGdh1zbGAXew5xfqHG7h2GcRMz75pK1nZ3w1W57osXQYwiPlfq9VzpWwGgVknKuW79-MJg",
    "summaryTr": "Cevat Şakir'in Bodrum'a diktiği yüzlerce bitki ve ağaç türünün hikayesini içeren doğa sevgisi yazıları.",
    "summaryEn": "Writings on botanical passion and the hundreds of exotic plant species Cevat Şakir planted across Bodrum.",
    "isRare": false,
    "order": 11
  }
]
```

- [ ] **Step 4: Create `src/content/talks/talks.json` and `src/content/board/board.json`**

```json
// src/content/talks/talks.json
[
  {
    "id": "talk-1",
    "titleTr": "Bodrum'un Antik Limanları ve Deniz Ticareti Tarihi",
    "titleEn": "Ancient Harbors and Maritime Trade History of Bodrum",
    "guestTr": "Prof. Dr. Ahmet Yılmaz",
    "guestEn": "Prof. Dr. Ahmet Yilmaz",
    "roleTr": "Araştırmacı & Tarihçi",
    "roleEn": "Researcher & Historian",
    "category": "historian",
    "duration": "45:00",
    "date": "2024-05-12",
    "youtubeId": "dQw4w9WgXcQ",
    "thumbnail": "https://lh3.googleusercontent.com/aida-public/AB6AXuAOlA5DV8-ECZIaar4ymQ3aQ-Z1S2JVDOfLXZr80GvJTUIr6Rj0uy5iNyzAZHd9ged1EtHBe6bRS7OHr5QSDu9GSRUW7lClWtEfPfp4UzfUHh7bW5FZeKKvbFdKgUot5YPWm4kYvrM5z_YDhi0c8MyvLwlc-ILZuBcPNckeoGYhE3l1iJVT-jnCKz8kcOd-dve4YidF4GtUfqBVRM-Qqwc-tR_6PcTr6LALyjlqxeWt43hMrGpPfz90CknyFgJU7PNsT2IKGvmw9Wg",
    "summaryTr": "Mavi Sürgün'den günümüze, Bodrum kıyılarının tarihsel gelişimi ve antik ticaret rotaları üzerine derinlemesine bir inceleme.",
    "summaryEn": "An in-depth analysis of Bodrum's coastline evolution and ancient trading routes from antiquity to the present.",
    "featured": true
  },
  {
    "id": "talk-2",
    "titleTr": "Halikarnas Balıkçısı’nın Bilinmeyen Mektupları",
    "titleEn": "Unpublished Letters of the Fisherman of Halicarnassus",
    "guestTr": "Sema Sagat & Doç. Dr. Yalçın İ. Gürkan",
    "guestEn": "Sema Sagat & Assoc. Prof. Yalcin I. Gurkan",
    "roleTr": "Edebiyat Araştırmacıları",
    "roleEn": "Literary Scholars",
    "category": "author",
    "duration": "52:20",
    "date": "2024-04-18",
    "youtubeId": "dQw4w9WgXcQ",
    "thumbnail": "https://lh3.googleusercontent.com/aida-public/AB6AXuBcfOyEoeoZvXAQNBokOiLNrKcRZAS2b2BWJe6F4jsH0xoh9fdUrdxucHKM4oIzWWbJglkVm1yd8flr2R8xShUrjUWXHCgYjS-m3rs6WHbu_H2YVY9j3B7iXqGbkeW8oC8u0amheKnUZ4PeUXmfw_mRKzlARgV_yN9a_RQD9udom8AM2D5P94Vl7ogTijxc9OuI-DZZnDYglIrSmkfktdYhTIXsddWECrc0ajJtxGazT79EA9kmXEZ1Q_8swDt9qJTSuIjohuhOHSE",
    "summaryTr": "Cevat Şakir'in dostlarına yazdığı, Bodrum'un entelektüel atmosferini yansıtan mektupların analizi.",
    "summaryEn": "Scholarly evaluation of Cevat Şakir's personal correspondences reflecting the intellectual atmosphere of Bodrum.",
    "featured": false
  },
  {
    "id": "talk-3",
    "titleTr": "Eski Bodrum: Sünger Avcılarının Hikayeleri",
    "titleEn": "Old Bodrum: Stories of the Sponge Divers",
    "guestTr": "Mehmet Kaptan",
    "guestEn": "Captain Mehmet",
    "roleTr": "Kaptan & Sözlü Tarihçi",
    "roleEn": "Captain & Oral Historian",
    "category": "historian",
    "duration": "38:40",
    "date": "2024-03-02",
    "youtubeId": "dQw4w9WgXcQ",
    "thumbnail": "https://lh3.googleusercontent.com/aida-public/AB6AXuAr0BESTFavlhctpfryzrU453G5GuaISliiGvonJ7MgmQNv6JVXiRsGqReOhxuR7qjpLr9xenuEVdG_yvQdUVWgbjfHXIxDkA4QRp4ILc92D0X-XbvmSkefYhco2lI4vu5M2JZs2ajt9tCxHsww6YfKzWXZg5iGl8mmtuSWb9sGpOwKNX75sWS0opTcCFS_YoAJruzNV1c60BTgcFvTW-LgczOI6eN9moiP0chssFoQbcOfPVSnMoG39cyd-n7gcwpZsWoUMsAjzfY",
    "summaryTr": "Bodrum'un kadim süngercilik geleneği ve Akdeniz açıklarında yaşanan unutulmaz anılar.",
    "summaryEn": "Living memories and oral history accounts from Bodrum's traditional sponge diving expeditions.",
    "featured": false
  },
  {
    "id": "talk-4",
    "titleTr": "Halikarnas Mozolesi: Yeni Keşifler",
    "titleEn": "Mausoleum at Halicarnassus: Recent Discoveries",
    "guestTr": "Dr. Zeynep Erdem",
    "guestEn": "Dr. Zeynep Erdem",
    "roleTr": "Arkeolog",
    "roleEn": "Archaeologist",
    "category": "archaeologist",
    "duration": "32:15",
    "date": "2024-01-20",
    "youtubeId": "dQw4w9WgXcQ",
    "thumbnail": "https://lh3.googleusercontent.com/aida-public/AB6AXuByLxztZReV1uUW9sVr4Ur-aKeYJ8DuB9CKDKM9NsLYK_6SSQtx9hi7tv5oXLbn5N7-SXsg8hPybn9xnYFaDUMjKNOITc34n6A1bxJCzcAPCQi3aUtwY61PvrHegs1RdNiiPu-aypqWmM_h4h0Dvhsh-KcinJPHsTDwUnUOmBT8t3iI4LT-OsqQoKyXA5DTrTUg3Sz_h-6nGwK_L5VTCs0nPMX24bg63UYWYPZKRHePH527OwxR5StNr7KOX8MstbgQadI9BDcbkqE",
    "summaryTr": "Antik dünyanın yedi harikasından biri olan Halikarnas Mozolesi'ndeki son arkeolojik bulgular.",
    "summaryEn": "Recent archaeological findings and architectural surveys on the Mausoleum at Halicarnassus.",
    "featured": false
  }
]
```

```json
// src/content/board/board.json
[
  { "id": "board-1", "name": "Birol K. Yiğitcan", "roleTr": "Girişim Kurulu Üyesi", "roleEn": "Founding Committee Member", "order": 1 },
  { "id": "board-2", "name": "Canan Küçükeren", "roleTr": "Girişim Kurulu Üyesi", "roleEn": "Founding Committee Member", "order": 2 },
  { "id": "board-3", "name": "Deniz Öztürk", "roleTr": "Girişim Kurulu Üyesi", "roleEn": "Founding Committee Member", "order": 3 },
  { "id": "board-4", "name": "Fikret Nesip Üçan", "roleTr": "Girişim Kurulu Üyesi", "roleEn": "Founding Committee Member", "order": 4 },
  { "id": "board-5", "name": "Güldal Altuner", "roleTr": "Girişim Kurulu Üyesi", "roleEn": "Founding Committee Member", "order": 5 },
  { "id": "board-6", "name": "Metin Ataç", "roleTr": "Girişim Kurulu Üyesi", "roleEn": "Founding Committee Member", "order": 6 },
  { "id": "board-7", "name": "Nevra Sezer Tüfekçi", "roleTr": "Girişim Kurulu Üyesi", "roleEn": "Founding Committee Member", "order": 7 },
  { "id": "board-8", "name": "Sema Sagat", "roleTr": "Girişim Kurulu Üyesi", "roleEn": "Founding Committee Member", "order": 8 },
  { "id": "board-9", "name": "Sönmez Taner", "roleTr": "Girişim Kurulu Üyesi", "roleEn": "Founding Committee Member", "order": 9 },
  { "id": "board-10", "name": "Ümran Yüksel", "roleTr": "Girişim Kurulu Üyesi", "roleEn": "Founding Committee Member", "order": 10 },
  { "id": "board-11", "name": "Doç. Dr. Yalçın İ. Gürkan", "roleTr": "Girişim Kurulu Üyesi", "roleEn": "Founding Committee Member", "order": 11 }
]
```

- [ ] **Step 5: Create `src/utils/i18n.ts` helper**

```typescript
// src/utils/i18n.ts
export const translations = {
  tr: {
    siteTitle: "Bodrum Kent Kütüphanesi",
    siteTagline: "Bodrum’un kültürel hafızası için yaşayan bir kütüphane.",
    home: "Ana Sayfa",
    about: "Hakkımızda",
    events: "Etkinlikler",
    talks: "Söyleşiler",
    fisherman: "Halikarnas Balıkçısı",
    contact: "İletişim",
    allEvents: "Tüm Etkinlikler",
    upcomingEvents: "Yaklaşan Etkinlikler",
    pastEvents: "Geçmiş Etkinlikler",
    searchPlaceholder: "Kütüphane, etkinlik veya eser ara...",
    exploreEvents: "Etkinlikleri İncele",
    exploreProject: "Projeyi Keşfet",
    watchOnYoutube: "YouTube'da İzle",
    viewAll: "Tümünü Gör",
    subscribeNewsletter: "Etkinliklerden Haberdar Olun",
    subscribeButton: "ABONE OL",
    newsletterDesc: "Yeni programlarımız, atölye duyurularımız ve özel davetler için e-bültenimize kayıt olun.",
    rightsReserved: "Tüm hakları saklıdır.",
    foundersTitle: "Girişim Kurulumuz",
    foundersDesc: "Kütüphanemizin kuruluşuna harç koyan, Bodrum'un entelektüel hayatına değer katan kıymetli kurucu üyelerimiz.",
    historyTitle: "Kütüphane Tarihçesi",
    historyP1: "Bodrum Kent Kütüphanesi ismi ve fikri, ilk olarak 16.09.2019 tarihinde Dibeklihan Kültür ve Sanat Köyü’nde dile getirilmiştir.",
    historyP2: "Bodrum Kent Kütüphanesi ismi, Sayın Sönmez Taner tarafından Zeytin Taneleri Kütüphanesi ekibine emanet edilmiştir: 07.09.2019.",
    historyP3: "Halikarnas Balıkçısı'nın mirasıyla beslenen kütüphanemiz, denizin mavisini bilimin berraklığıyla birleştirerek araştırmacılar, yazarlar ve her yaştan okuyucu için sessiz bir liman vazifesi görmektedir.",
    missionTitle: "Misyonumuz",
    missionText: "Bilgiye erişimde fırsat eşitliği sağlayarak, Bodrum halkının ve ziyaretçilerinin kültürel gelişimini desteklemek; yerel tarihi belgeleri koruma altına alarak gelecek nesillere güvenle aktarmak.",
    visionTitle: "Vizyonumuz",
    visionText: "Dijital ve fiziksel kütüphanecilikte Akdeniz'in öncü kurumlarından biri haline gelerek, uluslararası ölçekte bir araştırma ve kültür merkezi olarak tanınmak.",
    contactStayInTouch: "Bağlantıda Kalalım.",
    contactDesc: "Etkinlikler, söyleşiler, iş birlikleri ve genel bilgi talepleriniz için bize ulaşabilirsiniz.",
    nameLabel: "Ad Soyad",
    emailLabel: "E-Posta",
    subjectLabel: "Konu",
    messageLabel: "Mesajınız",
    sendButton: "Gönder",
    location: "Kızılağaç, Bodrum / Muğla"
  },
  en: {
    siteTitle: "Bodrum City Library",
    siteTagline: "A living library dedicated to Bodrum's cultural and maritime memory.",
    home: "Home",
    about: "About Us",
    events: "Events",
    talks: "Talks & Recordings",
    fisherman: "The Fisherman of Halicarnassus",
    contact: "Contact",
    allEvents: "All Events",
    upcomingEvents: "Upcoming Events",
    pastEvents: "Past Events",
    searchPlaceholder: "Search events, archives, books...",
    exploreEvents: "Explore Events",
    exploreProject: "Discover the Project",
    watchOnYoutube: "Watch on YouTube",
    viewAll: "View All",
    subscribeNewsletter: "Stay Informed with Our Newsletter",
    subscribeButton: "SUBSCRIBE",
    newsletterDesc: "Subscribe to receive updates on cultural programs, workshops, and archival releases.",
    rightsReserved: "All rights reserved.",
    foundersTitle: "Founding Committee",
    foundersDesc: "Esteemed members and cultural figures who laid the foundation for the Bodrum City Library initiative.",
    historyTitle: "Library History",
    historyP1: "The name and founding concept of Bodrum City Library were first articulated on 16.09.2019 at Dibeklihan Culture & Art Village.",
    historyP2: "The name Bodrum City Library was entrusted to the Olive Seeds Library team by Mr. Sönmez Taner on 07.09.2019.",
    historyP3: "Nourished by the legacy of the Fisherman of Halicarnassus, our library serves as a tranquil harbor where maritime heritage meets modern intellectual discovery.",
    missionTitle: "Our Mission",
    missionText: "To guarantee equal access to knowledge, foster the intellectual and cultural growth of Bodrum residents and visitors, and safeguard regional historical archives.",
    visionTitle: "Our Vision",
    visionText: "To stand out as a pioneering Mediterranean institution in digital and physical librarianship, recognized globally as a center of cultural research.",
    contactStayInTouch: "Stay in Touch.",
    contactDesc: "Reach out to us for cultural programs, panel proposals, donations, and general inquiries.",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    subjectLabel: "Subject",
    messageLabel: "Your Message",
    sendButton: "Submit",
    location: "Kizilagac, Bodrum / Mugla, Turkiye"
  }
};

export function getT(lang: 'tr' | 'en') {
  return translations[lang] || translations.tr;
}

export function getRelativeLocaleUrl(lang: 'tr' | 'en', path: string) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'tr') {
    return cleanPath;
  }
  return `/en${cleanPath === '/' ? '' : cleanPath}`;
}
```

- [ ] **Step 6: Commit Content Collections and i18n Data**

```bash
git add src/content/ src/utils/i18n.ts
git commit -m "feat: add content collections, datasets and i18n translation system"
```

---

### Task 3: Core Layout & Navigation Components

**Files:**
- Create: `src/layouts/Layout.astro`
- Create: `src/components/Header.astro`
- Create: `src/components/Footer.astro`
- Create: `src/components/SearchModal.astro`
- Create: `src/components/VideoModal.astro`

- [ ] **Step 1: Create `src/components/Header.astro` with language switch & mobile menu**
- [ ] **Step 2: Create `src/components/Footer.astro`**
- [ ] **Step 3: Create `src/components/SearchModal.astro` with live client search**
- [ ] **Step 4: Create `src/components/VideoModal.astro` for YouTube video playback**
- [ ] **Step 5: Create `src/layouts/Layout.astro` wrapping all components with SEO tags**
- [ ] **Step 6: Commit Layout & Navigation**

```bash
git add src/layouts/ src/components/
git commit -m "feat: add global Layout, Header with i18n, Footer, SearchModal and VideoModal"
```

---

### Task 4: Ana Sayfa / Home Page (`/` & `/en`)

**Files:**
- Create: `src/pages/index.astro`
- Create: `src/pages/en/index.astro`

- [ ] **Step 1: Create Turkish Home Page (`src/pages/index.astro`) with Hero, Misyon, Yaklaşan Etkinlikler, Dijital Yayınlar**
- [ ] **Step 2: Create English Home Page (`src/pages/en/index.astro`)**
- [ ] **Step 3: Test rendering and navigation**

Run: `npm run build`
Expected: Build succeeds with index and /en pages.

- [ ] **Step 4: Commit Home Page**

```bash
git add src/pages/index.astro src/pages/en/index.astro
git commit -m "feat: create bilingual Home Page with hero, upcoming events and digital talks"
```

---

### Task 5: Hakkımızda / About Us Page (`/hakkimizda` & `/en/about`)

**Files:**
- Create: `src/pages/hakkimizda.astro`
- Create: `src/pages/en/about.astro`

- [ ] **Step 1: Create Turkish About Page (`src/pages/hakkimizda.astro`) with History, 11-member Committee grid, Mission/Vision, and Hedeflenen Çalışmalar Bento Grid**
- [ ] **Step 2: Create English About Page (`src/pages/en/about.astro`)**
- [ ] **Step 3: Test build**

Run: `npm run build`
Expected: Build passes with `/hakkimizda` and `/en/about`.

- [ ] **Step 4: Commit About Pages**

```bash
git add src/pages/hakkimizda.astro src/pages/en/about.astro
git commit -m "feat: create bilingual About Us page with founding committee and history"
```

---

### Task 6: Halikarnas Balıkçısı Special Archive (`/halikarnas-balikcisi` & `/en/fisherman-of-halicarnassus`)

**Files:**
- Create: `src/pages/halikarnas-balikcisi.astro`
- Create: `src/pages/en/fisherman-of-halicarnassus.astro`

- [ ] **Step 1: Create Turkish Balıkçı Page with Bento overview, 11-book catalog, rare manuscripts, and Yokuş Başı quote**
- [ ] **Step 2: Create English Balıkçı Page (`src/pages/en/fisherman-of-halicarnassus.astro`)**
- [ ] **Step 3: Test build**

Run: `npm run build`
Expected: Build passes.

- [ ] **Step 4: Commit Halikarnas Balıkçısı Pages**

```bash
git add src/pages/halikarnas-balikcisi.astro src/pages/en/fisherman-of-halicarnassus.astro
git commit -m "feat: create bilingual Halikarnas Balikcisi special archive and book catalog"
```

---

### Task 7: Etkinlikler & Söyleşiler Pages (`/etkinlikler`, `/en/events`, `/soylesiler`, `/en/talks`)

**Files:**
- Create: `src/pages/etkinlikler.astro`
- Create: `src/pages/en/events.astro`
- Create: `src/pages/soylesiler.astro`
- Create: `src/pages/en/talks.astro`

- [ ] **Step 1: Create Turkish Events Page (`src/pages/etkinlikler.astro`) with interactive category filtering, featured event, past events, and newsletter form**
- [ ] **Step 2: Create English Events Page (`src/pages/en/events.astro`)**
- [ ] **Step 3: Create Turkish Talks Page (`src/pages/soylesiler.astro`) with video grid, YouTube modals, and category filters**
- [ ] **Step 4: Create English Talks Page (`src/pages/en/talks.astro`)**
- [ ] **Step 5: Test build and filter interactions**

Run: `npm run build`
Expected: Build passes.

- [ ] **Step 6: Commit Events & Talks Pages**

```bash
git add src/pages/etkinlikler.astro src/pages/en/events.astro src/pages/soylesiler.astro src/pages/en/talks.astro
git commit -m "feat: create bilingual Events and Talks pages with dynamic client filtering"
```

---

### Task 8: İletişim & Katılım Pages (`/iletisim` & `/en/contact`)

**Files:**
- Create: `src/pages/iletisim.astro`
- Create: `src/pages/en/contact.astro`

- [ ] **Step 1: Create Turkish Contact Page (`src/pages/iletisim.astro`) with institutional contact cards, interactive form validation, toast feedback, and location visual**
- [ ] **Step 2: Create English Contact Page (`src/pages/en/contact.astro`)**
- [ ] **Step 3: Test build and form submission behavior**

Run: `npm run build`
Expected: Build passes.

- [ ] **Step 4: Commit Contact Pages**

```bash
git add src/pages/iletisim.astro src/pages/en/contact.astro
git commit -m "feat: create bilingual Contact and Participation pages with form handling"
```

---

### Task 9: Final Verification, SEO & Build Check

**Files:**
- Modify: `README.md`
- Verify all pages and interactive components

- [ ] **Step 1: Run full production build (`npm run build`)**
- [ ] **Step 2: Validate all routes (Home, About, Balıkçı, Events, Talks, Contact for both TR & EN)**
- [ ] **Step 3: Verify Search Modal, Video Modal, Filter tabs, Mobile Menu, and Language Switcher**
- [ ] **Step 4: Create comprehensive `README.md` documentation**
- [ ] **Step 5: Final commit**

```bash
git add README.md
git commit -m "docs: finalize project documentation and complete platform verification"
```
