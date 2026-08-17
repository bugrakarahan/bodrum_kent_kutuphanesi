# Bodrum Kent Kütüphanesi Dijital Platformu

![Bodrum Kent Kütüphanesi](https://lh3.googleusercontent.com/aida/AP1WRLvzvuEbeTokQGdAei0RU2jJlfEE2Ca6UwCFeaMM78kprLqJdVjiimfr2PG3LSa3NHQokercdnc5QlIlHcxEx3dTuLLMzKzhXwsUNYc-q4KYe2FEBljxXDVpGZ69wEOCP18_63nag7L6LcuNEfTy69u161Qk6v-qPStVeCDkVyyvILbfyLZbG3N1gslpIAUqMGhkmdLMtp9bgKiSo0VFVoKplDZ_3aQtLCezbU0A7Ik6Kkhsq-hdcWzIkA)

Bodrum Kent Kütüphanesi'nin kültürel ve editoryal hafızasını yaşatmak, Halikarnas Balıkçısı'nın mirasını geleceğe taşımak ve edebiyat, sanat, bilim buluşmalarını organize etmek amacıyla geliştirilmiş modern, çift dilli (TR / EN) ve yüksek performanslı web platformu.

---

## 🏛️ Tasarım Sistemi: "Aegean Heritage"

Proje, Stitch üzerinde tasarlanan **Aegean Heritage** editoryal kimliğini yansıtır:

* **Parchment (`#F9F7F2`)**: Fiziksel kitap kağıdı hissi veren göz yormayan editoryal zemin.
* **Ink (`#1A2B3C`)**: Tipografi, birincil butonlar ve yüksek kontrastlı bento kartları.
* **Olive (`#556B2F`)**: Kültürel vurgular, rozetler ve aktif menü durumları.
* **Sand (`#E5DFD3`)**: İkincil yüzey ayrımları, kart sınırları ve editoryal çerçeveler.
* **Tipografi**: Başlıklarda editoryal zarafet için **EB Garamond**, gövde metinlerinde modern okunabilirlik için **Hanken Grotesk** & **Libre Franklin**.

---

## ✨ Özellikler

1. **Tam İki Dilli Mimari (TR & EN)**:
   * Türkçe Rotalar: `/`, `/hakkimizda`, `/halikarnas-balikcisi`, `/etkinlikler`, `/soylesiler`, `/iletisim`
   * İngilizce Rotalar: `/en`, `/en/about`, `/en/fisherman-of-halicarnassus`, `/en/events`, `/en/talks`, `/en/contact`
   * Akıllı dil değiştirici (`TR | EN`), bulunulan sayfanın doğrudan diğer dildeki karşılığına geçiş yapar.

2. **Astro 5 Content Collections (Tip Güvenli İçerik)**:
   * `events`: Yaklaşan ve geçmiş kültürel etkinlikler, paneller ve atölyeler.
   * `books`: Halikarnas Balıkçısı'nın 11 temel eseri ve nadir nüshaları.
   * `talks`: YouTube video söyleşi oturumları ve kayıtları.
   * `board`: 11 kişilik Girişim Kurulu üyeleri.

3. **Etkileşimli İstemci Bileşenleri**:
   * **Global Arama Modalı (`SearchModal`)**: `Cmd+K` / `Ctrl+K` veya arama butonuyla açılan anlık arama motoru.
   * **Video Oynatıcı Modalı (`VideoModal`)**: Söyleşi kartlarından YouTube videolarını pürüzsüzce oynatan gömülü modal.
   * **Canlı Kategori Filtreleme**: Etkinlik ve Söyleşi sayfalarında sayfayı yenilemeden anında filtreleme.
   * **İletişim & Gönüllülük Formu**: İstemci tarafı alan doğrulaması ve şık toast geri bildirimleri.
   * **Duyarlı Mobil Menü**: Mobil cihazlar için pürüzsüz animasyonlu drawer navigasyonu.

---

## 🚀 Başlangıç ve Geliştirme

### Gereksinimler
* Node.js 18+ veya 20+
* npm, pnpm veya yarn

### Kurulum

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın (http://localhost:4321)
npm run dev

# Üretim derlemesi oluşturun
npm run build

# Üretim derlemesini önizleyin
npm run preview
```

---

## 📁 Proje Dizin Yapısı

```
bodrum_kent_kutuphanesi/
├── docs/
│   └── superpowers/
│       ├── specs/2026-08-18-bodrum-kent-kutuphanesi-design.md
│       └── plans/2026-08-18-bodrum-kent-kutuphanesi.md
├── src/
│   ├── components/
│   │   ├── Header.astro         # Üst menü, dil değiştirici, arama & mobil menü
│   │   ├── Footer.astro         # Kurumsal footer ve telif/KVKK linkleri
│   │   ├── SearchModal.astro    # Cmd+K global arama modalı
│   │   └── VideoModal.astro     # YouTube video oynatıcı modalı
│   ├── content/
│   │   ├── config.ts            # Content Collections şemaları (Astro 5)
│   │   ├── events/events.json   # Etkinlik verileri
│   │   ├── books/books.json     # Halikarnas Balıkçısı eserleri
│   │   ├── talks/talks.json     # Söyleşi kayıtları
│   │   └── board/board.json     # Girişim Kurulu üyeleri
│   ├── layouts/
│   │   └── Layout.astro         # Global HTML düzeni, SEO, fontlar ve toast sistemi
│   ├── pages/
│   │   ├── index.astro          # Ana Sayfa (TR)
│   │   ├── hakkimizda.astro     # Hakkımızda & Kurul (TR)
│   │   ├── halikarnas-balikcisi.astro # Balıkçı Özel Arşivi (TR)
│   │   ├── etkinlikler.astro    # Etkinlikler & Filtreler (TR)
│   │   ├── soylesiler.astro     # Söyleşi Videoları (TR)
│   │   ├── iletisim.astro       # İletişim & Form (TR)
│   │   └── en/
│   │       ├── index.astro      # Home (EN)
│   │       ├── about.astro      # About Us (EN)
│   │       ├── fisherman-of-halicarnassus.astro # Balıkçı Archive (EN)
│   │       ├── events.astro     # Events (EN)
│   │       ├── talks.astro      # Talks & Recordings (EN)
│   │       └── contact.astro    # Contact (EN)
│   ├── styles/
│   │   └── global.css           # Global stiller, fontlar ve CSS değişkenleri
│   └── utils/
│       └── i18n.ts              # Çeviri sözlükleri ve rota yardımcıları
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## 📜 Telif Hakkı ve Lisans

© 2024 Bodrum Kent Kütüphanesi. Bilginin ve Kültürün Buluşma Noktası.
Tüm hakları saklıdır.
