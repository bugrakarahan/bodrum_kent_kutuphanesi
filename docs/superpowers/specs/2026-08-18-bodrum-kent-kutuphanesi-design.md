# Tasarım ve Mimari Spesifikasyonu: Bodrum Kent Kütüphanesi Dijital Platformu

**Tarih**: 2026-08-18  
**Proje**: Bodrum Kent Kütüphanesi Web Platformu  
**Tasarım Kaynağı**: Stitch Project 1052975454891590878 ("Aegean Heritage")  
**Teknoloji Yığını**: Astro 5.x / 4.x, Tailwind CSS, Vanilla JS mikro-etkileşimleri, Content Collections  

---

## 1. Genel Bakış ve Amaç

Bodrum Kent Kütüphanesi, Bodrum'un kültürel ve editoryal hafızasını yaşatmayı, Halikarnas Balıkçısı'nın mirasını geleceğe taşımayı ve edebiyat, sanat ile bilim etrafında topluluk buluşmalarını organize etmeyi hedefleyen bir kültür girişimidir.

Bu proje; Stitch üzerinde tasarlanan **Aegean Heritage** editoryal kimliğini birebir yansıtan, ultra hızlı, tam iki dilli (Türkçe & İngilizce), yüksek erişilebilirlikli ve SEO uyumlu modern bir Astro web platformu oluşturur.

---

## 2. Tasarım Sistemi & Görsel Kimlik (Aegean Heritage)

### 2.1 Renk Paleti (Tokens)
* **Parchment (`#F9F7F2`)**: Ana arka plan rengi. Gözü yormayan, fiziksel kitap kağıdı hissi veren editoryal tuval.
* **Ink (`#1A2B3C`)**: Birincil tipografi rengi, ana butonlar ve derin kontrast bento blokları.
* **Olive (`#556B2F`)**: Kültürel vurgular, aktif menü durumları, etiketler ve rozetler.
* **Sand (`#E5DFD3`)**: İkincil yüzey ayrımları, editoryal kart sınırları ve görsel çerçeveleri.
* **Stone Gray (`#7D7D7D`)**: İkincil açıklamalar ve editoryal üst başlıklar.
* **Surface Shades (`#FBF9F4`, `#F5F3EE`, `#F0EEE9`, `#EAE8E3`)**: Tonal katmanlama için yüzey tonları.

### 2.2 Tipografi
* **Serif Başlıklar**: `EB Garamond` (Geniş satır aralıkları, editoryal eda, italik vurgular).
* **Sans-Serif Gövde & Etiketler**: `Hanken Grotesk` & `Libre Franklin` (Net, modern ve yüksek okunabilirlik).
* **Tipografi Hiyerarşisi**:
  * `display-lg`: 72px / 80px (veya mobilde 44px)
  * `headline-lg`: 48px / 56px
  * `headline-md`: 32px / 40px
  * `headline-sm`: 24px / 32px
  * `body-lg`: 18px / 28px
  * `body-md`: 16px / 24px
  * `label-md`: 14px / 20px (letter-spacing 0.05em, font-weight 600)
  * `caption`: 12px / 16px

### 2.3 Form & Derinlik Dili
* **Soft-Square Hatlar**: Keskin dijital köşeler yerine 2px - 8px yumuşatılmış radyanlar.
* **Tonal Katmanlama**: Ağır gölgeler yerine Sand/Parchment ton geçişleri ve 1px editoryal sınır çizgileri.
* **Ex Libris Filigranları**: Sayfa derinliğini zenginleştiren, kitap ve deniz motifli zarif saydam grafikler.

---

## 3. Sayfa Yapısı ve Rotalar (i18n TR / EN)

### 3.1 Türkçe Rotalar (Varsayılan)
1. **`/` (Ana Sayfa)**:
   - Hero: *"Bodrum’un kültürel hafızası için yaşayan bir kütüphane."* + Harekete Geçirici Butonlar (CTA).
   - Kurumsal Misyon Özeti & Hedeflenen Çalışmalar / Gönüllü Katılım vitrini.
   - Gündem: Yaklaşan Etkinlikler 3'lü editoryal grid.
   - Dijital Yayınlar: En son söyleşi video kartları (YouTube entegrasyonlu).
2. **`/hakkimizda` (Hakkımızda)**:
   - Fikrin Doğuşu & Kütüphane Tarihçesi (16.09.2019 Dibeklihan, Sönmez Taner, Zeytin Taneleri Kütüphanesi).
   - Girişim Kurulu: 11 Kurucu Üye profilleri (Birol K. Yiğitcan, Canan Küçükeren, Deniz Öztürk, Fikret Nesip Üçan, Güldal Altuner, Metin Ataç, Nevra Sezer Tüfekçi, Sema Sagat, Sönmez Taner, Ümran Yüksel, Doç. Dr. Yalçın İ. Gürkan).
   - Misyon ve Vizyon editoryal anlatımı.
   - Hedeflenen Çalışmalar Bento Grid (Dijital Arşivleme, Eğitim Programları, Kültürel Etkinlikler, Planlanan Koleksiyon, Gönüllülük Esası).
3. **`/halikarnas-balikcisi` (Halikarnas Balıkçısı Özel Arşivi)**:
   - Cevat Şakir Kabaağaçlı biyografik anlatımı ve Bodrum kültürel mirası.
   - Tematik Bento Grid: Hayatı, Kronoloji, Fotoğraf Arşivi, Alıntılar, Bodrum Yılları.
   - Eserler Kataloğu: 11 temel eser (Aganta Burina Burinata, Mavi Sürgün, Uluç Reis, Deniz Gurbetçileri, Turgut Reis, Anadolu Efsaneleri, Merhaba Akdeniz, Hey Koca Yurt, Ege Kıyılarından, Parmak Damgası, Çiçeklerin Düğünü).
   - Nadir Koleksiyon: İmzalı ilk baskılar ve elyazması taslakları.
   - Yokuş Başı alıntısı blok alıntı alanı.
4. **`/etkinlikler` (Etkinlikler & Atölyeler)**:
   - Kategori filtreleme çubuğu: Tümü, Atölyeler, Konferanslar, Çocuk Programları, Söyleşiler.
   - Arama kutusu (anlık filtreleme).
   - Öne çıkan etkinlik vitrini (Featured Card) ve yan etkinlikler.
   - Geçmiş etkinlikler arşivi (Panel kayıtları, fotoğraf galerisi, özet bültenler).
   - E-Bülten abonelik alanı.
5. **`/soylesiler` (Söyleşiler & Dijital Arşiv)**:
   - Kültür ve Sanat Söyleşileri arşivi.
   - Konuk filtresi: Tümü, Yazarlar, Tarihçiler, Sanatçılar, Arkeologlar.
   - Öne çıkan büyük video kartı + yan video kartları + geçmiş oturumlar gridi.
   - Tıklanınca açılan zengin YouTube video modalı.
6. **`/iletisim` (İletişim & Katılım)**:
   - Kızılağaç / Bodrum yerleşkesi bilgileri, e-posta, sosyal medya bağlantıları.
   - İnteraktif İletişim & Gönüllülük formu (Ad Soyad, E-posta, Konu, Mesaj, doğrulama ve toast geri bildirimi).
   - Bodrum haritası / görsel konum alanı.

### 3.2 İngilizce Rotalar (`/en/...`)
* `/en` -> Home
* `/en/about` -> About Us & Founding Committee
* `/en/fisherman-of-halicarnassus` -> The Fisherman of Halicarnassus Special Archive
* `/en/events` -> Events & Cultural Programs
* `/en/talks` -> Talks & Digital Recordings
* `/en/contact` -> Contact & Location

---

## 4. Veri Mimarisi ve İçerik Yönetimi (`src/content/`)

Astro Content Collections kullanılarak tip güvenli içerik şemaları tanımlanır:

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    displayDate: z.string(),
    category: z.enum(['workshop', 'conference', 'kids', 'talk', 'exhibition']),
    location: z.string(),
    summary: z.string(),
    image: z.string(),
    featured: z.boolean().default(false),
    isPast: z.boolean().default(false),
    lang: z.enum(['tr', 'en']).default('tr'),
  }),
});

const booksCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    year: z.number().optional(),
    coverImage: z.string(),
    summary: z.string(),
    isRare: z.boolean().default(false),
    order: z.number(),
  }),
});

const talksCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    guest: z.string(),
    role: z.string(),
    category: z.enum(['author', 'historian', 'artist', 'archaeologist']),
    duration: z.string(),
    date: z.string(),
    youtubeId: z.string(),
    thumbnail: z.string(),
    featured: z.boolean().default(false),
    lang: z.enum(['tr', 'en']).default('tr'),
  }),
});

const boardCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    order: z.number(),
  }),
});
```

---

## 5. İstemci Tarafı Etkileşimler ve Bileşenler

1. **Global Arama Modalı (`SearchModal.astro`)**:
   - `Cmd+K` / `Ctrl+K` veya arama ikonuyla açılır.
   - Etkinlikler, Balıkçı eserleri, söyleşiler ve kurumsal sayfalar arasında anlık istemci tarafı arama yapar.
2. **Video Oynatıcı Modalı (`VideoModal.astro`)**:
   - Söyleşilerdeki kartlara tıklandığında hafif bir backdrop overlay üzerinde gömülü YouTube videosunu pürüzsüzce oynatır.
3. **Etkinlik & Söyleşi Canlı Filtreleme**:
   - Kategori butonlarına tıklandığında sayfayı yeniden yüklemeden DOM üzerindeki kartları akıcı animasyonla filtreler.
4. **İletişim & Gönüllülük Formu**:
   - İstemci tarafı doğrulama, gönderim durumu ve editoryal stile uygun başarı toast bildirimi sunar.
5. **Duyarlı Gezinme & Dil Değiştirici (`Header.astro`)**:
   - Scroll algılayıcı blur/shadow geçişi, mobil drawer menü ve bulunulan sayfanın doğrudan TR <-> EN karşılığına geçiş yapan akıllı dil anahtarı.

---

## 6. Doğrulama ve Kalite Kriterleri

- **Astro Build Testi**: `npm run build` komutunun sıfır hata ve sıfır kırık bağlantıyla tamamlanması.
- **Tasarım Birebir Uyumu**: Stitch üzerindeki renkler, tipografi boyutları, padding/margin hiyerarşisi ve fotoğrafların eksiksiz yerleştirilmesi.
- **Duyarlılık (Responsiveness)**: Mobil (375px+), Tablet (768px+) ve Masaüstü (1280px - 1440px+) ekran boyutlarında kusursuz görünüm.
- **Erişilebilirlik & SEO**: Anl смыslı HTML5 etiketleri (`<main>`, `<nav>`, `<header>`, `<section>`, `<footer>`), ARIA etiketleri ve meta başlık/açıklamaları.
