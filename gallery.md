Build `gallery.html` for the Adarsha High School & College Bangladesh school website project.

## CONTEXT

This page is part of a multi-page school website. The following files already exist and must be referenced (not rebuilt):
- `assets/css/variables.css` — all CSS custom properties
- `assets/css/style.css` — shared component styles (navbar, footer, buttons, cards)
- `assets/css/responsive.css` — media queries
- `assets/js/app.js` — shared JS (navbar scroll, active link, scroll animations)

Only build: `gallery.html` and any gallery-specific CSS additions (append to `style.css` under a `/* === GALLERY PAGE === */` comment block).

---

## DESIGN SYSTEM (already in variables.css — reference only)

```css
:root {
  --hue: 214; --sat: 72%;
  --primary:        hsl(var(--hue), var(--sat), 35%);
  --primary-light:  hsl(var(--hue), var(--sat), 92%);
  --primary-dark:   hsl(var(--hue), var(--sat), 22%);
  --primary-hover:  hsl(var(--hue), var(--sat), 28%);
  --primary-subtle: hsl(var(--hue), var(--sat), 97%);
  --primary-border: hsl(var(--hue), var(--sat), 80%);
  --accent: #c8372d; --accent-light: #fdecea; --accent-dark: #9e1f17;
  --white: #ffffff; --gray-50: #f8fafc; --gray-100: #f1f5f9;
  --gray-200: #e2e8f0; --gray-500: #64748b; --gray-700: #334155;
  --text-primary: #1e293b; --text-secondary: #475569; --text-muted: #94a3b8;
  --border-color: #e2e8f0;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
  --shadow-lg: 0 10px 30px rgba(0,0,0,0.10);
  --radius-sm: 6px; --radius-md: 10px; --radius-lg: 16px;
  --font-primary: 'Public Sans', 'Noto Sans Bengali', sans-serif;
  --font-bengali: 'Noto Sans Bengali', 'Public Sans', sans-serif;
  --transition: all 0.2s ease;
}
```

**RULE: Zero hardcoded colors. Every color must use a CSS variable.**

---

## CDN LINKS (include in `<head>`)

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700&family=Public+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" defer></script>
```

---

## HTML STRUCTURE

```html
<!DOCTYPE html>
<html lang="bn" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ফটো গ্যালারি | আদর্শ উচ্চ বিদ্যালয় ও কলেজ</title>
  <meta name="description" content="আদর্শ উচ্চ বিদ্যালয় ও কলেজের ছবির গ্যালারি — অনুষ্ঠান, শ্রেণিকক্ষ, খেলাধুলা ও বিভিন্ন কার্যক্রমের ছবি।">
  <!-- CDN links -->
  <link rel="stylesheet" href="assets/css/variables.css">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/css/responsive.css">
</head>
<body>
  <header><!-- topbar + main-navbar --></header>
  <main id="main-content">
    <!-- SECTION 1: Page Hero Banner -->
    <!-- SECTION 2: Album Stats Strip -->
    <!-- SECTION 3: Album Filter Bar -->
    <!-- SECTION 4: Gallery Grid -->
    <!-- SECTION 5: Video Gallery -->
    <!-- SECTION 6: Pagination -->
  </main>
  <footer><!-- footer-top-strip + footer-main + footer-bottom --></footer>

  <div id="lightbox" class="gallery-lightbox" role="dialog" aria-modal="true" aria-label="ছবি দেখুন">
    <!-- Lightbox markup here — outside main, before closing body -->
  </div>

  <script src="assets/js/app.js"></script>
  <!-- gallery-specific inline script -->
</body>
</html>
```

---

## SECTION 1 — PAGE HERO BANNER

Same `.page-hero` pattern used on all inner pages:
- Background: `linear-gradient(135deg, var(--primary-dark), var(--primary))`
- Min-height: 180px, padding: 40px 0
- Breadcrumb: হোম / ফটো গ্যালারি
- `<h1>` Bengali: "ফটো গ্যালারি"
- Subtitle English: "Photo Gallery"
- Decorative right icon: `<i class="bi bi-images"></i>` (88px, rgba white 0.07, position absolute right 10%)

---

## SECTION 2 — ALBUM STATS STRIP

Background: var(--white)
Border-bottom: 1px solid var(--border-color)
Padding: 24px 0

4 stat items in a row (col-6 col-md-3 each), centered, no card border:

```
bi-images           bi-camera-fill       bi-collection-fill    bi-calendar3
color: --primary    color: --accent      color: --success      color: --warning

"৮টি"              "১৮০+"               "৮"                   "২০২৫"
অ্যালবাম            মোট ছবি              ইভেন্ট                 সর্বশেষ আপডেট
Albums             Total Photos         Events                Last Updated
```

Each stat item:
- Icon circle: 48px, background var(--primary-subtle), border-radius 50%, margin: 0 auto 12px, display flex, align+justify center
- Icon: 20px, color as noted above
- Number: font-size 26px, font-weight 700, color var(--text-primary), font-family var(--font-bengali)
- Bengali label: font-size 13px, color var(--text-secondary), font-family var(--font-bengali)
- English sublabel: font-size 11px, color var(--text-muted)

---

## SECTION 3 — ALBUM FILTER BAR

Background: var(--gray-50)
Border-bottom: 1px solid var(--border-color)
Padding: 14px 0
Position: sticky; top: 70px; z-index: 100

Layout: flex row, flex-wrap, gap 10px, align-items center

**Album Filter Tabs (.gallery-tab):**
```html
<button class="gallery-tab active" data-album="all">
  <i class="bi bi-grid-3x3-gap-fill me-1"></i> সকল ছবি
</button>
<button class="gallery-tab" data-album="annual-sports">
  <i class="bi bi-trophy me-1"></i> বার্ষিক ক্রীড়া
</button>
<button class="gallery-tab" data-album="prize-giving">
  <i class="bi bi-award me-1"></i> পুরস্কার বিতরণী
</button>
<button class="gallery-tab" data-album="science-fair">
  <i class="bi bi-lightbulb me-1"></i> বিজ্ঞান মেলা
</button>
<button class="gallery-tab" data-album="classroom">
  <i class="bi bi-book me-1"></i> শ্রেণিকক্ষ
</button>
<button class="gallery-tab" data-album="cultural">
  <i class="bi bi-music-note-beamed me-1"></i> সাংস্কৃতিক
</button>
<button class="gallery-tab" data-album="campus">
  <i class="bi bi-building me-1"></i> ক্যাম্পাস
</button>
<button class="gallery-tab" data-album="graduation">
  <i class="bi bi-mortarboard me-1"></i> সমাপনী অনুষ্ঠান
</button>
```

Tab styles:
- Default: background var(--white), color var(--text-secondary), border: 1px solid var(--border-color), border-radius var(--radius-sm), padding 7px 16px, font-size 13px, font-weight 500, cursor pointer, transition var(--transition)
- Active / hover: background var(--primary), color var(--white), border-color var(--primary)

**Right side — View Toggle + Photo Count:**
```html
<div class="gallery-toolbar ms-auto d-flex align-items-center gap-2">
  <span class="gallery-count-label" id="galleryCount">১৮০টি ছবি</span>
  <button class="view-toggle-btn active" id="gridView" aria-label="গ্রিড ভিউ">
    <i class="bi bi-grid-3x3-gap-fill"></i>
  </button>
  <button class="view-toggle-btn" id="masonryView" aria-label="ম্যাসনরি ভিউ">
    <i class="bi bi-columns-gap"></i>
  </button>
</div>
```
Toggle buttons: 36px × 36px, border 1px solid var(--border-color), border-radius var(--radius-sm), background var(--white), color var(--text-secondary)
Active: background var(--primary), color var(--white), border-color var(--primary)

---

## SECTION 4 — GALLERY GRID

Background: var(--gray-50)
Padding: 48px 0

### ALBUM HEADER CARDS (shown above the grid when an album tab is selected)

When any tab other than "all" is active, show a `.album-header-card`:
```css
.album-header-card {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary));
  border-radius: var(--radius-lg);
  padding: 28px 32px;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  gap: 24px;
  color: var(--white);
}
```
- Left: large album icon (48px, rgba white 0.15 circle background, 72px circle)
- Center: album Bengali title (font-size 20px, font-weight 700, font-bengali) + English subtitle (rgba white 0.75, 13px) + photo count badge (rgba white 0.2 background, border-radius 20px, padding 4px 14px, font-size 12px)
- Right: "সকল অ্যালবাম দেখুন" button (rgba white 0.15 bg, white text, border: 1px solid rgba white 0.3, border-radius var(--radius-sm))

Hide this card when "all" tab is active — use JS to toggle `d-none`.

---

### GRID LAYOUT (.gallery-grid)

Default grid view:
```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
@media (max-width: 991px) { .gallery-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 767px) { .gallery-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 479px) { .gallery-grid { grid-template-columns: 1fr; } }
```

Masonry view (toggled by JS adding `.masonry-view` to `.gallery-grid`):
```css
.gallery-grid.masonry-view {
  columns: 4;
  column-gap: 12px;
  display: block;
}
@media (max-width: 991px) { .gallery-grid.masonry-view { columns: 3; } }
@media (max-width: 767px) { .gallery-grid.masonry-view { columns: 2; } }
.gallery-grid.masonry-view .gallery-item {
  break-inside: avoid;
  margin-bottom: 12px;
  display: block;
}
```

---

### GALLERY ITEM COMPONENT (.gallery-item)

```css
.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-md);
  cursor: pointer;
  background: var(--gray-200);
}
.gallery-item img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.gallery-grid.masonry-view .gallery-item img {
  height: auto;
  min-height: 160px;
}
.gallery-item:hover img {
  transform: scale(1.08);
}
.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top,
    rgba(15, 23, 42, 0.85) 0%,
    rgba(15, 23, 42, 0.3) 50%,
    transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
}
.gallery-item:hover .gallery-overlay { opacity: 1; }
```

Overlay top: album badge
```html
<span class="gallery-album-badge">বার্ষিক ক্রীড়া</span>
```
background: rgba var(--primary) 0.85, color white, border-radius 4px, padding 3px 10px, font-size 11px, font-weight 600, width fit-content

Overlay bottom: flex, space-between, align-items flex-end
- Left: photo title (font-size 13px, font-weight 600, color white, font-family var(--font-bengali), max 2 lines)
  + date (font-size 11px, rgba white 0.7)
- Right: zoom button circle (36px, rgba white 0.2, border: 1px solid rgba white 0.3, border-radius 50%, color white, font-size 16px, hover: background rgba white 0.35)

Add attributes to each gallery item:
`data-album="annual-sports"` `data-src="assets/images/gallery/sports-01.jpg"` `data-title="বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৫"` `data-index="0"`

---

### 36 GALLERY ITEMS — full data (9 per top 4 albums, remainder split):

**বার্ষিক ক্রীড়া (annual-sports) — 9 items:**
1.  title: "১০০ মিটার দৌড় প্রতিযোগিতা"         | date: "১৫ মার্চ ২০২৫" | src: gallery/sports-01.jpg
2.  title: "দলগত ক্রিকেট টুর্নামেন্ট"            | date: "১৫ মার্চ ২০২৫" | src: gallery/sports-02.jpg
3.  title: "ব্যাডমিন্টন চ্যাম্পিয়নশিপ"           | date: "১৬ মার্চ ২০২৫" | src: gallery/sports-03.jpg
4.  title: "ফুটবল ফাইনাল ম্যাচ"                  | date: "১৬ মার্চ ২০২৫" | src: gallery/sports-04.jpg
5.  title: "পুরস্কার বিতরণী — ক্রীড়া বিভাগ"      | date: "১৬ মার্চ ২০২৫" | src: gallery/sports-05.jpg
6.  title: "হাই জাম্প প্রতিযোগিতা"               | date: "১৭ মার্চ ২০২৫" | src: gallery/sports-06.jpg
7.  title: "কাবাডি টুর্নামেন্ট"                   | date: "১৭ মার্চ ২০২৫" | src: gallery/sports-07.jpg
8.  title: "সাঁতার প্রতিযোগিতা"                  | date: "১৮ মার্চ ২০২৫" | src: gallery/sports-08.jpg
9.  title: "বার্ষিক ক্রীড়া সমাপনী অনুষ্ঠান"      | date: "১৮ মার্চ ২০২৫" | src: gallery/sports-09.jpg

**পুরস্কার বিতরণী (prize-giving) — 9 items:**
10. title: "প্রধান অতিথির ভাষণ"                  | date: "২০ মে ২০২৫"   | src: gallery/prize-01.jpg
11. title: "শ্রেষ্ঠ শিক্ষার্থী পুরস্কার প্রদান"   | date: "২০ মে ২০২৫"   | src: gallery/prize-02.jpg
12. title: "বৃত্তি প্রাপ্ত শিক্ষার্থীবৃন্দ"        | date: "২০ মে ২০২৫"   | src: gallery/prize-03.jpg
13. title: "সাংস্কৃতিক পরিবেশনা"                  | date: "২০ মে ২০২৫"   | src: gallery/prize-04.jpg
14. title: "A+ প্রাপ্ত শিক্ষার্থীদের সংবর্ধনা"    | date: "২১ মে ২০২৫"   | src: gallery/prize-05.jpg
15. title: "শিক্ষক সম্মাননা প্রদান"               | date: "২১ মে ২০২৫"   | src: gallery/prize-06.jpg
16. title: "প্রধান শিক্ষকের বক্তব্য"              | date: "২১ মে ২০২৫"   | src: gallery/prize-07.jpg
17. title: "স্মারক ক্রেস্ট বিতরণ"                 | date: "২১ মে ২০২৫"   | src: gallery/prize-08.jpg
18. title: "সমাপনী গান ও জাতীয় সঙ্গীত"           | date: "২১ মে ২০২৫"   | src: gallery/prize-09.jpg

**বিজ্ঞান মেলা (science-fair) — 9 items:**
19. title: "সোলার এনার্জি প্রজেক্ট প্রদর্শনী"     | date: "০৫ এপ্রিল ২০২৫" | src: gallery/science-01.jpg
20. title: "রোবোটিক্স প্রজেক্ট উপস্থাপনা"         | date: "০৫ এপ্রিল ২০২৫" | src: gallery/science-02.jpg
21. title: "রসায়ন পরীক্ষা-নিরীক্ষা"              | date: "০৫ এপ্রিল ২০২৫" | src: gallery/science-03.jpg
22. title: "পরিবেশ বিজ্ঞান মডেল"                  | date: "০৬ এপ্রিল ২০২৫" | src: gallery/science-04.jpg
23. title: "গণিত অলিম্পিয়াড প্রজেক্ট"            | date: "০৬ এপ্রিল ২০২৫" | src: gallery/science-05.jpg
24. title: "বিজ্ঞান মেলায় বিচারকমণ্ডলী"          | date: "০৬ এপ্রিল ২০২৫" | src: gallery/science-06.jpg
25. title: "সেরা প্রজেক্ট পুরস্কার প্রদান"         | date: "০৬ এপ্রিল ২০২৫" | src: gallery/science-07.jpg
26. title: "ডিজিটাল উদ্ভাবন প্রদর্শনী"            | date: "০৭ এপ্রিল ২০২৫" | src: gallery/science-08.jpg
27. title: "বিজ্ঞান মেলার সমাপনী পর্ব"            | date: "০৭ এপ্রিল ২০২৫" | src: gallery/science-09.jpg

**শ্রেণিকক্ষ (classroom) — 5 items:**
28. title: "বিজ্ঞান ল্যাবরেটরিতে শিক্ষার্থীরা"    | date: "১০ ফেব্রুয়ারি ২০২৫" | src: gallery/class-01.jpg
29. title: "কম্পিউটার ক্লাসে হাতে-কলমে শিক্ষা"    | date: "১২ ফেব্রুয়ারি ২০২৫" | src: gallery/class-02.jpg
30. title: "গ্রুপ স্টাডি সেশন"                    | date: "১৪ ফেব্রুয়ারি ২০২৫" | src: gallery/class-03.jpg
31. title: "লাইব্রেরিতে পাঠ কার্যক্রম"             | date: "১৫ ফেব্রুয়ারি ২০২৫" | src: gallery/class-04.jpg
32. title: "স্মার্ট ক্লাসরুমে ইন্টারেক্টিভ পাঠ"   | date: "১৮ ফেব্রুয়ারি ২০২৫" | src: gallery/class-05.jpg

**সাংস্কৃতিক (cultural) — 4 items:**
33. title: "বার্ষিক সাংস্কৃতিক সন্ধ্যা ২০২৫"     | date: "২৫ ফেব্রুয়ারি ২০২৫" | src: gallery/cultural-01.jpg
34. title: "একুশে ফেব্রুয়ারি উদযাপন"              | date: "২১ ফেব্রুয়ারি ২০২৫" | src: gallery/cultural-02.jpg
35. title: "নাটক ও আবৃত্তি প্রতিযোগিতা"           | date: "২৬ ফেব্রুয়ারি ২০২৫" | src: gallery/cultural-03.jpg
36. title: "লোকসংগীত পরিবেশনা"                    | date: "২৬ ফেব্রুয়ারি ২০২৫" | src: gallery/cultural-04.jpg

For all 36 images, use this placeholder pattern:
```html
<img src="https://picsum.photos/seed/[unique-seed]/600/450"
     alt="[Bengali title]"
     loading="lazy">
```
Use the item's Bengali title slug as the seed (e.g., seed/sports01, seed/prize01, etc.)

---

## SECTION 5 — VIDEO GALLERY

Background: var(--white)
Padding: 64px 0
Border-top: 1px solid var(--border-color)

Section header (centered):
- Bengali title: "ভিডিও গ্যালারি"
- English subtitle: "Video Gallery"
- Decorative underline: 40px, 3px, split var(--primary) + var(--accent)

6 video thumbnail cards (col-lg-4 col-md-6), Bootstrap grid:

**Video Card (.video-card):**
```css
.video-card {
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  cursor: pointer;
}
.video-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
}
```

Thumbnail wrapper (.video-thumb):
- Position relative, overflow hidden
- img: width 100%, height 200px, object-fit cover, transition transform 0.4s
- hover img: scale(1.05)
- Play button overlay (centered):
```css
  .video-play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 52px;
    height: 52px;
    background: rgba(255,255,255,0.92);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    font-size: 20px;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
  }
  .video-card:hover .video-play-btn {
    background: var(--primary);
    color: var(--white);
    transform: translate(-50%, -50%) scale(1.1);
  }
```
- Duration badge (bottom-right of thumb):
  background rgba(0,0,0,0.72), color white, border-radius 4px, padding 2px 8px, font-size 11px, position absolute, bottom 8px, right 8px

Card body (padding 16px):
- Title: font-size 14px, font-weight 600, font-family var(--font-bengali), color var(--text-primary), margin-bottom 6px, 2-line clamp
- Meta row: date + view count (bi-eye), font-size 11px, color var(--text-muted), gap 12px
- Category badge: background var(--primary-light), color var(--primary), border-radius 4px, padding 2px 10px, font-size 11px, margin-top 8px

6 video entries:
1. "বার্ষিক পুরস্কার বিতরণী ২০২৫ হাইলাইটস" | ৫:৩২ | ১,২৪৫ views | অনুষ্ঠান | thumb: picsum/seed/vid01/640/360
2. "বিজ্ঞান মেলায় শিক্ষার্থীদের উদ্ভাবন"    | ৪:১৮ | ৮৯৮ views  | বিজ্ঞান  | thumb: picsum/seed/vid02/640/360
3. "SSC ২০২৫ ফলাফল উদযাপন"                 | ৩:৪৫ | ২,১০২ views | ফলাফল   | thumb: picsum/seed/vid03/640/360
4. "বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৫"       | ৬:২০ | ৭৫৬ views  | ক্রীড়া   | thumb: picsum/seed/vid04/640/360
5. "একুশে ফেব্রুয়ারি উদযাপন ২০২৫"           | ৩:১০ | ১,৫৩৩ views | সাংস্কৃতিক | thumb: picsum/seed/vid05/640/360
6. "নতুন কম্পিউটার ল্যাব উদ্বোধন"            | ২:৫৫ | ৬৪৫ views  | সুবিধাদি  | thumb: picsum/seed/vid06/640/360

Video cards are not connected to a real video player — clicking shows the lightbox with a note: "ভিডিওটি YouTube-এ দেখুন" + a placeholder YouTube link button. Build this interaction using the same lightbox system.

---

## SECTION 6 — PAGINATION

Background: var(--gray-50) → var(--white) transition
Padding: 8px 0 56px

Centered Bootstrap pagination (same style as notices.html):
- Bengali numerals: ১ ২ ৩ ৪ ৫
- Active page: background var(--primary), color var(--white)
- With "মোট ৩৬টি ছবি" count label above (centered, font-size 13px, color var(--text-muted), margin-bottom 16px)

---

## LIGHTBOX (Vanilla JS — no external library)

### Markup (place before `</body>`, outside `<main>`):

```html
<div id="lightbox" class="gallery-lightbox" role="dialog" aria-modal="true" aria-label="ছবি দেখুন" tabindex="-1">
  <div class="lightbox-backdrop"></div>
  <div class="lightbox-container">

    <!-- Close button -->
    <button class="lightbox-close" id="lightboxClose" aria-label="বন্ধ করুন">
      <i class="bi bi-x-lg"></i>
    </button>

    <!-- Prev button -->
    <button class="lightbox-prev" id="lightboxPrev" aria-label="আগের ছবি">
      <i class="bi bi-chevron-left"></i>
    </button>

    <!-- Image wrapper -->
    <div class="lightbox-media-wrap">
      <img id="lightboxImg" src="" alt="" class="lightbox-img">
      <div class="lightbox-spinner" id="lightboxSpinner">
        <div class="spinner-border" role="status"></div>
      </div>
    </div>

    <!-- Next button -->
    <button class="lightbox-next" id="lightboxNext" aria-label="পরের ছবি">
      <i class="bi bi-chevron-right"></i>
    </button>

    <!-- Caption -->
    <div class="lightbox-caption">
      <div class="lightbox-caption-text">
        <span class="lightbox-title" id="lightboxTitle"></span>
        <span class="lightbox-date" id="lightboxDate"></span>
      </div>
      <div class="lightbox-counter" id="lightboxCounter">১ / ৩৬</div>
    </div>

  </div>
</div>
```

### Lightbox CSS:
```css
.gallery-lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.gallery-lightbox.active {
  opacity: 1;
  pointer-events: all;
}
.lightbox-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(10, 15, 28, 0.95);
}
.lightbox-container {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 90vw;
  width: 100%;
  padding: 0 16px;
}
.lightbox-media-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  position: relative;
}
.lightbox-img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  transition: opacity 0.2s ease;
}
.lightbox-img.loading { opacity: 0; }
.lightbox-spinner {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  color: var(--white);
}
.lightbox-spinner.visible { display: block; }
.lightbox-close {
  position: absolute;
  top: -48px;
  right: 0;
  width: 40px; height: 40px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 50%;
  color: var(--white);
  font-size: 16px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: var(--transition);
}
.lightbox-close:hover { background: var(--accent); border-color: var(--accent); }
.lightbox-prev,
.lightbox-next {
  flex-shrink: 0;
  width: 48px; height: 48px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 50%;
  color: var(--white);
  font-size: 20px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: var(--transition);
}
.lightbox-prev:hover,
.lightbox-next:hover {
  background: var(--primary);
  border-color: var(--primary);
}
.lightbox-caption {
  position: absolute;
  bottom: -52px;
  left: 0; right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
}
.lightbox-title {
  color: var(--white);
  font-family: var(--font-bengali);
  font-size: 14px;
  font-weight: 600;
  display: block;
}
.lightbox-date {
  color: rgba(255,255,255,0.6);
  font-size: 12px;
}
.lightbox-counter {
  color: rgba(255,255,255,0.6);
  font-size: 13px;
  white-space: nowrap;
}
@media (max-width: 767px) {
  .lightbox-prev, .lightbox-next { width: 36px; height: 36px; font-size: 16px; }
  .lightbox-container { gap: 8px; padding: 0 8px; }
}
```

---

## JAVASCRIPT (gallery-specific, inline `<script>` at bottom)

### 1. Gallery Data Array
Build a JS array from all 36 items:
```javascript
const galleryData = [
  { index: 0, album: 'annual-sports', src: 'https://picsum.photos/seed/sports01/600/450', title: '১০০ মিটার দৌড় প্রতিযোগিতা', date: '১৫ মার্চ ২০২৫' },
  // ... all 36 items
];
```

### 2. Album Filter
```javascript
const galleryTabs = document.querySelectorAll('.gallery-tab');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    galleryTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const album = tab.dataset.album;
    let visible = 0;
    galleryItems.forEach(item => {
      const show = album === 'all' || item.dataset.album === album;
      item.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    document.getElementById('galleryCount').textContent =
      toBengaliNum(visible) + 'টি ছবি';
    toggleAlbumHeader(album);
  });
});

function toggleAlbumHeader(album) {
  const header = document.getElementById('albumHeader');
  if (!header) return;
  header.classList.toggle('d-none', album === 'all');
}
```

### 3. View Toggle (Grid ↔ Masonry)
```javascript
const grid = document.querySelector('.gallery-grid');
document.getElementById('gridView').addEventListener('click', () => {
  grid.classList.remove('masonry-view');
  document.getElementById('gridView').classList.add('active');
  document.getElementById('masonryView').classList.remove('active');
});
document.getElementById('masonryView').addEventListener('click', () => {
  grid.classList.add('masonry-view');
  document.getElementById('masonryView').classList.add('active');
  document.getElementById('gridView').classList.remove('active');
});
```

### 4. Lightbox Open
```javascript
let currentIndex = 0;
let activeItems = [];

function openLightbox(index) {
  activeItems = galleryData.filter(item => {
    const el = document.querySelector(`[data-index="${item.index}"]`);
    return el && el.style.display !== 'none';
  });
  currentIndex = activeItems.findIndex(item => item.index === index);
  showLightboxItem(currentIndex);
  document.getElementById('lightbox').classList.add('active');
  document.getElementById('lightbox').focus();
  document.body.style.overflow = 'hidden';
}

function showLightboxItem(i) {
  const item = activeItems[i];
  if (!item) return;
  const img = document.getElementById('lightboxImg');
  const spinner = document.getElementById('lightboxSpinner');
  img.classList.add('loading');
  spinner.classList.add('visible');
  img.onload = () => {
    img.classList.remove('loading');
    spinner.classList.remove('visible');
  };
  img.src = item.src;
  img.alt = item.title;
  document.getElementById('lightboxTitle').textContent = item.title;
  document.getElementById('lightboxDate').textContent = item.date;
  document.getElementById('lightboxCounter').textContent =
    toBengaliNum(i + 1) + ' / ' + toBengaliNum(activeItems.length);
}
```

### 5. Lightbox Navigation
```javascript
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);

document.getElementById('lightboxNext').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % activeItems.length;
  showLightboxItem(currentIndex);
});

document.getElementById('lightboxPrev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + activeItems.length) % activeItems.length;
  showLightboxItem(currentIndex);
});
```

### 6. Keyboard Navigation
```javascript
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % activeItems.length;
    showLightboxItem(currentIndex);
  }
  if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + activeItems.length) % activeItems.length;
    showLightboxItem(currentIndex);
  }
});
```

### 7. Touch / Swipe Support
```javascript
let touchStartX = 0;
document.getElementById('lightbox').addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].clientX;
}, { passive: true });
document.getElementById('lightbox').addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      currentIndex = (currentIndex + 1) % activeItems.length;
    } else {
      currentIndex = (currentIndex - 1 + activeItems.length) % activeItems.length;
    }
    showLightboxItem(currentIndex);
  }
}, { passive: true });
```

### 8. Click handler on gallery items
```javascript
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    openLightbox(parseInt(item.dataset.index));
  });
  // keyboard accessibility
  item.setAttribute('tabindex', '0');
  item.setAttribute('role', 'button');
  item.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(parseInt(item.dataset.index));
    }
  });
});
```

### 9. Bengali Number Converter
```javascript
function toBengaliNum(n) {
  return String(n).replace(/[0-9]/g, d => '০১২৩৪৫৬৭৮৯'[d]);
}
```

---

## NAVBAR & FOOTER

Replicate the full navbar and footer exactly as in index.html:
- Topbar: hidden on mobile (d-none d-xl-flex)
- All 8 nav items with dropdowns
- Active state: "গ্যালারি" nav link gets `class="nav-link active"` and `aria-current="page"`
- Full footer: footer-top-strip + 4-column footer-main + footer-bottom

---

## SCROLL ANIMATIONS

Apply `.animate-fade-up` to:
- Page hero content
- Album stat items (staggered: nth-child × 0.08s)
- Each `.gallery-item` (staggered: nth-child × 0.04s — keep fast for grid)
- Each `.video-card` (staggered: nth-child × 0.1s)
- Section headers

IntersectionObserver for `.animate-fade-up` already lives in `app.js` — do not duplicate.

---

## CODING RULES

1. Zero hardcoded colors — every color via CSS variable
2. No inline styles except JS-driven `display`, `width`, `opacity`, `transform` values
3. Semantic HTML: `<main>`, `<section>`, `<figure>`, `<figcaption>` on gallery items where appropriate
4. All `<img>` tags: descriptive Bengali `alt` attributes + `loading="lazy"`
5. Lightbox: full keyboard trap (Tab stays within lightbox while open), focus returns to trigger element on close
6. `aria-label` on all icon-only buttons
7. `role="button"` + `tabindex="0"` on `.gallery-item` elements
8. No jQuery, no external lightbox libraries — pure vanilla JS
9. `const`/`let` only, arrow functions, descriptive variable names
10. Bengali numerals throughout UI (toBengaliNum helper)
11. No placeholder comments, no TODOs — 100% complete production code

Output: single complete `gallery.html` file, fully production-ready.