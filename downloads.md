Build `downloads.html` for the Adarsha High School & College Bangladesh school website project.

## CONTEXT

This page is part of a multi-page school website. The following files already exist and must be referenced (not rebuilt):
- `assets/css/variables.css` — all CSS custom properties
- `assets/css/style.css` — shared component styles (navbar, footer, buttons, cards)
- `assets/css/responsive.css` — media queries
- `assets/js/app.js` — shared JS (navbar scroll, active link, scroll animations)

Only build: `downloads.html` and any downloads-specific CSS additions (append to `style.css` under a `/* === DOWNLOADS PAGE === */` comment block).

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
  --success: #16a34a; --success-light: #dcfce7;
  --warning: #d97706; --warning-light: #fef3c7;
  --danger: #dc2626; --danger-light: #fee2e2;
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
  <title>ডাউনলোড সেন্টার | আদর্শ উচ্চ বিদ্যালয় ও কলেজ</title>
  <meta name="description" content="আদর্শ উচ্চ বিদ্যালয় ও কলেজের সকল ফরম, সার্কুলার, রুটিন ও ফলাফল ডাউনলোড করুন।">
  <!-- CDN links -->
  <link rel="stylesheet" href="assets/css/variables.css">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/css/responsive.css">
</head>
<body>
  <header><!-- topbar + main-navbar --></header>
  <main id="main-content">
    <!-- SECTION 1: Page Hero Banner -->
    <!-- SECTION 2: Stats Strip -->
    <!-- SECTION 3: Filter Bar -->
    <!-- SECTION 4: Downloads Grid (main + sidebar) -->
    <!-- SECTION 5: Recently Added Strip -->
    <!-- SECTION 6: Help CTA Banner -->
  </main>
  <footer><!-- footer-top-strip + footer-main + footer-bottom --></footer>
  <script src="assets/js/app.js"></script>
  <!-- downloads-specific inline script -->
</body>
</html>
```

---

## SECTION 1 — PAGE HERO BANNER

Same `.page-hero` pattern used on all inner pages:
- Background: `linear-gradient(135deg, var(--primary-dark), var(--primary))`
- Min-height: 180px, padding: 40px 0
- Breadcrumb: হোম / ডাউনলোড সেন্টার
- `<h1>` Bengali: "ডাউনলোড সেন্টার"
- Subtitle English: "Download Center"
- Decorative right icon: `<i class="bi bi-cloud-arrow-down-fill"></i>` (88px, rgba white 0.07, position absolute right 10%)

---

## SECTION 2 — STATS STRIP

Background: var(--white)
Border-bottom: 1px solid var(--border-color)
Padding: 24px 0

4 stat items in a row (col-6 col-md-3), centered:

```
bi-file-earmark-fill     bi-download             bi-folder2-open         bi-clock-history
color: --accent          color: --success         color: --primary        color: --warning

"৩২টি"                  "৫,০০০+"                 "৫টি"                   "সর্বশেষ আপডেট"
মোট ফাইল                মোট ডাউনলোড             বিভাগ                   ০১ জুন ২০২৫
Total Files              Total Downloads          Categories              Last Updated
```

Each stat item:
- Icon circle: 48px, background var(--primary-subtle), border-radius 50%, margin: 0 auto 12px
- Icon: 20px, color as noted
- Number/Value: font-size 26px, font-weight 700, font-family var(--font-bengali), color var(--text-primary)
- Bengali label: font-size 13px, color var(--text-secondary), font-family var(--font-bengali)
- English sublabel: font-size 11px, color var(--text-muted)

---

## SECTION 3 — FILTER BAR

Background: var(--gray-50)
Border-bottom: 1px solid var(--border-color)
Padding: 14px 0
Position: sticky; top: 70px; z-index: 100

Layout: flex row, flex-wrap, gap 10px, align-items center

**Category Filter Tabs (.download-tab):**
```html
<button class="download-tab active" data-category="all">
  <i class="bi bi-grid-fill me-1"></i> সকল ফাইল
</button>
<button class="download-tab" data-category="forms">
  <i class="bi bi-file-earmark-text me-1"></i> ফরমসমূহ
</button>
<button class="download-tab" data-category="circulars">
  <i class="bi bi-megaphone me-1"></i> সার্কুলার
</button>
<button class="download-tab" data-category="routines">
  <i class="bi bi-calendar2-week me-1"></i> রুটিন
</button>
<button class="download-tab" data-category="results">
  <i class="bi bi-award me-1"></i> ফলাফল
</button>
<button class="download-tab" data-category="others">
  <i class="bi bi-folder me-1"></i> অন্যান্য
</button>
```
Tab styles:
- Default: background var(--white), color var(--text-secondary), border 1px solid var(--border-color), border-radius var(--radius-sm), padding 7px 16px, font-size 13px, font-weight 500, cursor pointer, transition var(--transition)
- Active / hover: background var(--primary), color var(--white), border-color var(--primary)

**Right side — Search + File Count:**
```html
<div class="download-toolbar ms-auto d-flex align-items-center gap-2">
  <div class="download-search-wrap position-relative">
    <i class="bi bi-search position-absolute" style="left:10px; top:50%; transform:translateY(-50%); color:var(--text-muted); font-size:13px;"></i>
    <input type="search" id="downloadSearch" placeholder="ফাইল খুঁজুন..."
           class="download-search-input" aria-label="ফাইল অনুসন্ধান">
  </div>
  <span class="download-count-label" id="downloadCount">৩২টি ফাইল</span>
</div>
```
Search input: height 38px, border 1px solid var(--border-color), border-radius var(--radius-sm), padding-left 32px, font-size 13px, width 220px
Focus: border-color var(--primary), box-shadow 0 0 0 3px var(--primary-light)
Count label: font-size 13px, color var(--text-muted), white-space nowrap

---

## SECTION 4 — DOWNLOADS GRID

Background: var(--gray-50)
Padding: 48px 0

Two-column Bootstrap layout: `col-lg-8` (download cards) + `col-lg-4` (sidebar)

---

### LEFT — DOWNLOAD CARDS

**Download Card Component (.download-card):**
```css
.download-card {
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 18px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  margin-bottom: 12px;
  cursor: pointer;
}
.download-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
  border-color: var(--primary-border);
}
.download-card.is-new {
  border-left: 3px solid var(--accent);
}
.download-card.is-featured {
  border-left: 3px solid var(--primary);
  background: var(--primary-subtle);
}
```

**Icon Box (.download-icon-box):**
```css
.download-icon-box {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
.download-icon-box.pdf   { background: var(--accent-light);   color: var(--accent);   }
.download-icon-box.word  { background: var(--primary-light);  color: var(--primary);  }
.download-icon-box.excel { background: var(--success-light);  color: var(--success);  }
.download-icon-box.image { background: var(--warning-light);  color: var(--warning);  }
```

Icons by type:
- PDF  → `<i class="bi bi-file-earmark-pdf-fill"></i>`
- Word → `<i class="bi bi-file-earmark-word-fill"></i>`
- Excel → `<i class="bi bi-file-earmark-excel-fill"></i>`
- Image → `<i class="bi bi-file-earmark-image-fill"></i>`

**Content (.download-content, flex: 1):**
- Top row: Title (font-family var(--font-bengali), font-size 14px, font-weight 600, color var(--text-primary)) + "নতুন" badge if new (background var(--accent-light), color var(--accent), border-radius 4px, padding 2px 8px, font-size 10px, font-weight 700, margin-left 8px)
- Middle row: Category badge + file size badge + upload date
  - Category badge: background var(--primary-light), color var(--primary), border-radius 4px, padding 2px 8px, font-size 11px, font-weight 500, font-family var(--font-bengali)
  - File size badge: background var(--gray-100), color var(--text-muted), border-radius 4px, padding 2px 8px, font-size 11px
  - Date: `<i class="bi bi-calendar3 me-1"></i>` font-size 11px, color var(--text-muted), margin-left 8px
- Bottom row (description): font-size 12px, color var(--text-secondary), line-height 1.6, margin-top 4px, max 1 line, text-overflow ellipsis

**Action Area (.download-action, flex-shrink: 0):**
Two buttons stacked vertically (gap: 6px):

Download button:
```html
<a href="#" class="btn-download-main" aria-label="ডাউনলোড করুন">
  <i class="bi bi-download"></i>
  <span>ডাউনলোড</span>
</a>
```
```css
.btn-download-main {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--primary);
  color: var(--white);
  border-radius: var(--radius-sm);
  padding: 7px 14px;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
  white-space: nowrap;
}
.btn-download-main:hover {
  background: var(--primary-hover);
  color: var(--white);
}
```

Preview button:
```html
<a href="#" class="btn-preview" aria-label="প্রিভিউ দেখুন">
  <i class="bi bi-eye me-1"></i> প্রিভিউ
</a>
```
```css
.btn-preview {
  display: flex;
  align-items: center;
  gap: 4px;
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  padding: 5px 12px;
  font-size: 11px;
  text-decoration: none;
  transition: var(--transition);
  white-space: nowrap;
}
.btn-preview:hover {
  border-color: var(--primary);
  color: var(--primary);
}
```

---

### 32 DOWNLOAD ITEMS — full data

Add `data-category="..."` `data-title="..."` to each `.download-card`.
Wrap all cards in `<div id="downloadList">`.

**ফরমসমূহ (forms) — 10 items:**

1.  title: "ভর্তি আবেদন ফরম ২০২৫-২৬"           | type: pdf  | size: 245 KB | date: ০১ জুন ২০২৫  | new: true  | featured: true  | desc: "ষষ্ঠ থেকে দ্বাদশ শ্রেণির ভর্তির জন্য আবেদন ফরম"
2.  title: "TC / ছাড়পত্র আবেদন ফরম"            | type: pdf  | size: 118 KB | date: ১৫ মে ২০২৫  | new: false | featured: false | desc: "বিদ্যালয় ছাড়পত্রের জন্য আবেদন ফরম"
3.  title: "অভিভাবক সম্মতিপত্র ফরম"             | type: pdf  | size: 95 KB  | date: ১০ মে ২০২৫  | new: false | featured: false | desc: "বিভিন্ন কার্যক্রমে অংশগ্রহণের জন্য সম্মতিপত্র"
4.  title: "বৃত্তি আবেদন ফরম ২০২৫"              | type: pdf  | size: 210 KB | date: ০৫ মে ২০২৫  | new: true  | featured: false | desc: "মেধাবী ও দরিদ্র শিক্ষার্থীদের বৃত্তির আবেদন ফরম"
5.  title: "মাসিক বেতন চালান ফরম"               | type: pdf  | size: 80 KB  | date: ০১ জানু ২০২৫ | new: false | featured: false | desc: "মাসিক বেতন পরিশোধের জন্য ব্যাংক চালান ফরম"
6.  title: "পুনর্ভর্তি আবেদন ফরম"               | type: pdf  | size: 102 KB | date: ১২ এপ্রিল ২০২৫| new: false | featured: false | desc: "বিদ্যালয়ে পুনরায় ভর্তির আবেদন ফরম"
7.  title: "শিক্ষার্থী তথ্য আপডেট ফরম"           | type: word | size: 56 KB  | date: ২০ মার্চ ২০২৫ | new: false | featured: false | desc: "শিক্ষার্থীর ব্যক্তিগত তথ্য পরিবর্তনের আবেদন"
8.  title: "বিদেশ গমনের অনুমতি ফরম"              | type: pdf  | size: 88 KB  | date: ১৫ মার্চ ২০২৫ | new: false | featured: false | desc: "অভিভাবকের সাথে বিদেশ ভ্রমণের অনুমতি ফরম"
9.  title: "অতিরিক্ত কার্যক্রম নিবন্ধন ফরম"      | type: pdf  | size: 72 KB  | date: ০১ মার্চ ২০২৫ | new: false | featured: false | desc: "সহশিক্ষা কার্যক্রমে যোগদানের নিবন্ধন ফরম"
10. title: "লাইব্রেরি সদস্যপদ ফরম"              | type: pdf  | size: 65 KB  | date: ১০ ফেব্রু ২০২৫ | new: false | featured: false | desc: "বিদ্যালয় গ্রন্থাগারের সদস্যপদ গ্রহণের ফরম"

**সার্কুলার (circulars) — 8 items:**

11. title: "ভর্তি সার্কুলার ২০২৫-২৬"            | type: pdf  | size: 320 KB | date: ০১ জুন ২০২৫  | new: true  | featured: true  | desc: "নতুন শিক্ষাবর্ষে ভর্তি সংক্রান্ত বিস্তারিত বিজ্ঞপ্তি"
12. title: "জাতীয় শিক্ষা সপ্তাহ ২০২৫ সার্কুলার" | type: pdf  | size: 185 KB | date: ২০ মে ২০২৫  | new: true  | featured: false | desc: "জাতীয় শিক্ষা সপ্তাহ পালন সংক্রান্ত নির্দেশনা"
13. title: "অর্ধ-বার্ষিক পরীক্ষা সার্কুলার"      | type: pdf  | size: 145 KB | date: ১০ মে ২০২৫  | new: false | featured: false | desc: "অর্ধ-বার্ষিক পরীক্ষা পরিচালনা সংক্রান্ত সার্কুলার"
14. title: "শিক্ষক প্রশিক্ষণ সার্কুলার ২০২৫"     | type: pdf  | size: 210 KB | date: ০৫ এপ্রিল ২০২৫| new: false | featured: false | desc: "শিক্ষকদের বার্ষিক প্রশিক্ষণ কার্যক্রম সংক্রান্ত বিজ্ঞপ্তি"
15. title: "বার্ষিক ক্রীড়া সার্কুলার ২০২৫"      | type: pdf  | size: 168 KB | date: ২৮ ফেব্রু ২০২৫| new: false | featured: false | desc: "বার্ষিক ক্রীড়া প্রতিযোগিতা আয়োজন সংক্রান্ত বিজ্ঞপ্তি"
16. title: "COVID-19 স্বাস্থ্যবিধি নির্দেশনা"     | type: pdf  | size: 290 KB | date: ১৫ জানু ২০২৫ | new: false | featured: false | desc: "বিদ্যালয়ে স্বাস্থ্যবিধি মেনে চলার নির্দেশনাপত্র"
17. title: "ডিজিটাল কন্টেন্ট ব্যবহার নীতিমালা"   | type: pdf  | size: 175 KB | date: ০৫ জানু ২০২৫ | new: false | featured: false | desc: "শিক্ষার্থীদের ডিজিটাল ডিভাইস ব্যবহার সংক্রান্ত নীতি"
18. title: "বার্ষিক সাধারণ সভার নোটিশ"           | type: pdf  | size: 130 KB | date: ২০ ডিসে ২০২৪ | new: false | featured: false | desc: "পরিচালনা কমিটির বার্ষিক সাধারণ সভার বিজ্ঞপ্তি"

**রুটিন (routines) — 7 items:**

19. title: "বার্ষিক পরীক্ষার রুটিন ২০২৫"         | type: pdf  | size: 180 KB | date: ২৮ মে ২০২৫  | new: true  | featured: true  | desc: "২০২৫ সালের বার্ষিক পরীক্ষার বিস্তারিত সময়সূচি"
20. title: "অর্ধ-বার্ষিক পরীক্ষার রুটিন ২০২৫"    | type: pdf  | size: 155 KB | date: ১৫ মে ২০২৫  | new: false | featured: false | desc: "অর্ধ-বার্ষিক পরীক্ষার শ্রেণিভিত্তিক সময়সূচি"
21. title: "ষষ্ঠ-সপ্তম শ্রেণির ক্লাস রুটিন"       | type: pdf  | size: 98 KB  | date: ০১ জানু ২০২৫ | new: false | featured: false | desc: "ষষ্ঠ ও সপ্তম শ্রেণির দৈনন্দিন পাঠ সময়সূচি"
22. title: "অষ্টম-নবম শ্রেণির ক্লাস রুটিন"        | type: pdf  | size: 98 KB  | date: ০১ জানু ২০২৫ | new: false | featured: false | desc: "অষ্টম ও নবম শ্রেণির দৈনন্দিন পাঠ সময়সূচি"
23. title: "দশম-একাদশ শ্রেণির ক্লাস রুটিন"        | type: pdf  | size: 102 KB | date: ০১ জানু ২০২৫ | new: false | featured: false | desc: "দশম ও একাদশ শ্রেণির দৈনন্দিন পাঠ সময়সূচি"
24. title: "দ্বাদশ শ্রেণির বিশেষ ক্লাস রুটিন"     | type: pdf  | size: 88 KB  | date: ১০ মার্চ ২০২৫ | new: false | featured: false | desc: "HSC পরীক্ষার প্রস্তুতির জন্য বিশেষ ক্লাস সূচি"
25. title: "বার্ষিক একাডেমিক ক্যালেন্ডার ২০২৫"    | type: pdf  | size: 320 KB | date: ০১ জানু ২০২৫ | new: false | featured: false | desc: "সম্পূর্ণ শিক্ষাবর্ষের একাডেমিক কার্যক্রমের সূচি"

**ফলাফল (results) — 4 items:**

26. title: "SSC ফলাফল বিশ্লেষণ ২০২৫"            | type: pdf  | size: 450 KB | date: ১২ মে ২০২৫  | new: true  | featured: false | desc: "SSC ২০২৫ পরীক্ষার বিস্তারিত ফলাফল বিশ্লেষণ প্রতিবেদন"
27. title: "JSC ফলাফল সারসংক্ষেপ ২০২৫"          | type: pdf  | size: 280 KB | date: ২৮ ডিসে ২০২৪ | new: false | featured: false | desc: "JSC ২০২৫ পরীক্ষার গ্রেড বিতরণ ও পরিসংখ্যান"
28. title: "প্রথম সাময়িক পরীক্ষার ফলাফল ২০২৫"   | type: excel| size: 185 KB | date: ১০ মে ২০২৫  | new: false | featured: false | desc: "প্রথম সাময়িক পরীক্ষার শ্রেণিভিত্তিক পূর্ণ ফলাফল"
29. title: "বৃত্তি পরীক্ষার ফলাফল ২০২৪"          | type: pdf  | size: 210 KB | date: ২০ ডিসে ২০২৪ | new: false | featured: false | desc: "পঞ্চম ও অষ্টম শ্রেণির বৃত্তি পরীক্ষার চূড়ান্ত ফলাফল"

**অন্যান্য (others) — 3 items:**

30. title: "বিদ্যালয়ের বার্ষিক প্রতিবেদন ২০২৪"  | type: pdf  | size: 2.4 MB | date: ০১ মার্চ ২০২৫ | new: false | featured: false | desc: "২০২৪ সালের বার্ষিক কার্যক্রম ও অর্জনের বিস্তারিত প্রতিবেদন"
31. title: "ছাত্র আচরণবিধি ও নিয়মাবলি"           | type: pdf  | size: 340 KB | date: ০১ জানু ২০২৫ | new: false | featured: false | desc: "বিদ্যালয়ের শৃঙ্খলা ও আচরণ সংক্রান্ত পূর্ণ নিয়মাবলি"
32. title: "অভিভাবক নির্দেশিকা ২০২৫"             | type: pdf  | size: 195 KB | date: ০১ জানু ২০২৫ | new: false | featured: false | desc: "অভিভাবকদের জন্য বিদ্যালয়ের নীতিমালা ও নির্দেশিকা"

---

### RIGHT SIDEBAR (col-lg-4)

Sticky: `position: sticky; top: 130px`

**Widget 1 — সর্বাধিক ডাউনলোড (Most Downloaded):**
Card: white, border-radius var(--radius-md), border 1px solid var(--border-color), padding 20px, shadow-sm
Header: `<i class="bi bi-fire me-2" style="color:var(--accent)"></i>` "সর্বাধিক ডাউনলোড" — font-size 14px, font-weight 600, color var(--text-primary)

5 ranked items (.popular-download-item):
- Each: flex, align-items center, gap 12px, padding 10px 0, border-bottom 1px solid var(--gray-100)
- Rank number: 28px circle, background var(--primary-subtle), color var(--primary), font-size 12px, font-weight 700, border-radius 50%, flex-shrink 0
  (rank 1: background var(--accent), color var(--white))
- File icon: 36px, background var(--accent-light), border-radius var(--radius-sm), color var(--accent), font-size 16px, display flex, align+justify center
- Content: title (font-size 13px, font-weight 600, font-bengali, color var(--text-primary)) + download count (font-size 11px, color var(--text-muted), `<i class="bi bi-download me-1"></i>`)
- Download button: 28px circle, background var(--primary-subtle), border none, color var(--primary), font-size 13px, hover: background var(--primary), color white, border-radius 50%

5 popular items:
1. "ভর্তি আবেদন ফরম ২০২৫-২৬"   | ২,৩৪৫ ডাউনলোড
2. "ভর্তি সার্কুলার ২০২৫-২৬"    | ১,৮৯০ ডাউনলোড
3. "বার্ষিক পরীক্ষার রুটিন ২০২৫" | ১,৪৫৬ ডাউনলোড
4. "SSC ফলাফল বিশ্লেষণ ২০২৫"   | ১,১২০ ডাউনলোড
5. "একাডেমিক ক্যালেন্ডার ২০২৫"  | ৮৯৫ ডাউনলোড

**Widget 2 — বিভাগ অনুযায়ী ফাইল (Files by Category):**
Same card style
Header: `<i class="bi bi-folder2-open me-2"></i>` "বিভাগসমূহ"

Category list with count + progress bar:
```
ফরমসমূহ      ██████████  ১০টি
সার্কুলার     ████████    ৮টি
রুটিন         ███████     ৭টি
ফলাফল        ████        ৪টি
অন্যান্য      ███         ৩টি
```
Each row: flex, gap 8px, margin-bottom 12px
- Label: font-size 13px, font-family var(--font-bengali), color var(--text-primary), width 80px, flex-shrink 0
- Bar track: flex 1, height 6px, background var(--gray-100), border-radius 99px
  Fill: height 100%, background var(--primary), border-radius 99px
  Widths: ফরম 100%, সার্কুলার 80%, রুটিন 70%, ফলাফল 40%, অন্যান্য 30%
- Count: font-size 12px, font-weight 600, color var(--primary), width 36px, text-align right, flex-shrink 0
Each row is also clickable — clicking it triggers the corresponding tab filter

**Widget 3 — সাহায্য দরকার? (Need Help?):**
Card: background var(--primary-subtle), border 1px solid var(--primary-border), border-radius var(--radius-md), padding 20px
Icon: `<i class="bi bi-question-circle-fill"></i>` 32px, color var(--primary), margin-bottom 10px
Title: "সাহায্য প্রয়োজন?" font-size 14px, font-weight 600, font-family var(--font-bengali), color var(--text-primary)
Body text: "কাঙ্ক্ষিত ফাইল না পেলে আমাদের অফিসে যোগাযোগ করুন।" font-size 13px, color var(--text-secondary), margin-bottom 14px
Two links (stacked):
- `<i class="bi bi-telephone-fill me-2"></i> +880 2-XXXXXXXX` — color var(--primary), font-size 13px
- `<i class="bi bi-envelope-fill me-2"></i> info@adarshaschool.edu.bd` — color var(--primary), font-size 13px

---

## SECTION 5 — RECENTLY ADDED STRIP

Background: var(--white)
Border-top: 1px solid var(--border-color)
Padding: 56px 0

Section header (centered):
- Bengali title: "সম্প্রতি যোগ করা হয়েছে"
- English subtitle: "Recently Added"
- Decorative underline: 40px, 3px, var(--primary) + var(--accent) split

6 recent file cards in a Bootstrap row (col-lg-4 col-md-6):

**Recent File Card (.recent-file-card):**
```css
.recent-file-card {
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 20px;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  height: 100%;
}
.recent-file-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
  border-color: var(--primary-border);
}
```

Card layout (top to bottom):
- Large file icon box: 64px × 64px, background var(--accent-light), border-radius var(--radius-md), margin: 0 auto 14px, display flex, align+justify center, font-size 28px, color var(--accent)
- "নতুন" badge (if applicable): background var(--accent), color var(--white), border-radius 20px, padding 2px 12px, font-size 10px, font-weight 700, margin-bottom 8px, display inline-block
- Category badge: background var(--primary-light), color var(--primary), border-radius 4px, padding 2px 10px, font-size 11px, font-weight 500, margin-bottom 10px
- Title: font-family var(--font-bengali), font-size 13px, font-weight 600, color var(--text-primary), line-height 1.5, margin-bottom 6px, 2-line clamp
- Meta: file size + date, font-size 11px, color var(--text-muted), margin-bottom 14px
- Download button (full width): background var(--primary), color var(--white), border none, border-radius var(--radius-sm), padding 8px 0, font-size 13px, font-weight 600, width 100%
  icon: `<i class="bi bi-download me-2"></i>`
  hover: background var(--primary-hover)

6 recent files (the 6 newest across all categories):
1. "ভর্তি আবেদন ফরম ২০২৫-২৬"           | ফরম     | 245 KB | ০১ জুন ২০২৫  | new: true
2. "ভর্তি সার্কুলার ২০২৫-২৬"            | সার্কুলার | 320 KB | ০১ জুন ২০২৫  | new: true
3. "বার্ষিক পরীক্ষার রুটিন ২০২৫"         | রুটিন    | 180 KB | ২৮ মে ২০২৫  | new: true
4. "জাতীয় শিক্ষা সপ্তাহ ২০২৫ সার্কুলার" | সার্কুলার | 185 KB | ২০ মে ২০২৫  | new: true
5. "SSC ফলাফল বিশ্লেষণ ২০২৫"           | ফলাফল   | 450 KB | ১২ মে ২০২৫  | new: false
6. "বৃত্তি আবেদন ফরম ২০২৫"              | ফরম     | 210 KB | ০৫ মে ২০২৫  | new: false

---

## SECTION 6 — HELP CTA BANNER

Background: `linear-gradient(135deg, var(--primary-dark), var(--primary))`
Border-radius: 0
Padding: 48px 0

Layout: flex row (col-lg-8 text + col-lg-4 button), centered vertically

Left content:
- Icon: `<i class="bi bi-headset"></i>` 40px, rgba white 0.8, margin-bottom 10px
- Title: "প্রয়োজনীয় ফাইল খুঁজে পাচ্ছেন না?" — white, font-bengali, font-size 22px, font-weight 700
- Subtitle: "আমাদের অফিস টিম আপনাকে সাহায্য করতে প্রস্তুত। সোম–শুক্র, সকাল ৯টা–বিকেল ৫টা।" — rgba white 0.8, font-size 14px, margin-top 6px

Right button (centered):
```html
<a href="contact.html" class="btn-cta-white">
  <i class="bi bi-telephone-fill me-2"></i>
  যোগাযোগ করুন
</a>
```
```css
.btn-cta-white {
  background: var(--white);
  color: var(--primary);
  border: none;
  border-radius: var(--radius-sm);
  padding: 12px 32px;
  font-size: 15px;
  font-weight: 700;
  font-family: var(--font-bengali);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: var(--transition);
  white-space: nowrap;
}
.btn-cta-white:hover {
  background: var(--primary-subtle);
  color: var(--primary-dark);
}
```

---

## NAVBAR & FOOTER

Replicate the full navbar and footer exactly as in index.html:
- Topbar: hidden on mobile (d-none d-xl-flex)
- All 8 nav items with dropdowns
- Active state: "ডাউনলোড সেন্টার" — since this is a standalone nav item (not in a dropdown), the `<a class="nav-link active">` approach applies directly. Set `aria-current="page"` on it.

  Note: if your navbar maps downloads to a standalone link, mark it active; if it maps to an "অন্যান্য" dropdown, mark the dropdown-item active instead. Match exactly what's in index.html.

- Full footer: footer-top-strip + 4-column footer-main + footer-bottom

---

## JAVASCRIPT (downloads-specific, inline `<script>` at bottom)

### 1. Category Tab Filter
```javascript
const downloadTabs = document.querySelectorAll('.download-tab');
const downloadCards = document.querySelectorAll('.download-card');

downloadTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    downloadTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    filterDownloads();
  });
});
```

### 2. Live Search Filter
```javascript
const searchInput = document.getElementById('downloadSearch');
searchInput.addEventListener('input', filterDownloads);
```

### 3. Combined Filter Function
```javascript
function filterDownloads() {
  const activeTab = document.querySelector('.download-tab.active');
  const category = activeTab ? activeTab.dataset.category : 'all';
  const query = searchInput.value.toLowerCase().trim();
  let visible = 0;

  downloadCards.forEach(card => {
    const catMatch = category === 'all' || card.dataset.category === category;
    const title = (card.dataset.title || '').toLowerCase();
    const searchMatch = query === '' || title.includes(query);
    const show = catMatch && searchMatch;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  const counter = document.getElementById('downloadCount');
  if (counter) counter.textContent = toBengaliNum(visible) + 'টি ফাইল';

  // Show empty state if no results
  const emptyState = document.getElementById('downloadEmptyState');
  if (emptyState) emptyState.style.display = visible === 0 ? '' : 'none';
}
```

### 4. Empty State
Add inside `#downloadList`, after the last card:
```html
<div id="downloadEmptyState" class="text-center py-5" style="display:none">
  <i class="bi bi-search" style="font-size:48px; color:var(--text-muted)"></i>
  <p class="mt-3 mb-1" style="font-family:var(--font-bengali); font-size:16px; color:var(--text-secondary); font-weight:600;">
    কোনো ফাইল পাওয়া যায়নি
  </p>
  <p style="font-size:13px; color:var(--text-muted)">
    অনুগ্রহ করে ভিন্ন অনুসন্ধান শব্দ বা বিভাগ ব্যবহার করুন।
  </p>
</div>
```

### 5. Sidebar Category Click → Triggers Tab
```javascript
document.querySelectorAll('.sidebar-category-row').forEach(row => {
  row.addEventListener('click', () => {
    const cat = row.dataset.category;
    const matchingTab = document.querySelector(`.download-tab[data-category="${cat}"]`);
    if (matchingTab) {
      matchingTab.click();
      window.scrollTo({ top: document.getElementById('downloadList').offsetTop - 120, behavior: 'smooth' });
    }
  });
});
```
Add `data-category="..."` and `class="sidebar-category-row"` + `style="cursor:pointer"` to each category row in Widget 2.

### 6. Download Click Tracking (visual feedback only)
```javascript
document.querySelectorAll('.btn-download-main').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault(); // remove in production when real files exist
    const icon = this.querySelector('i');
    icon.className = 'bi bi-check-lg';
    this.style.background = 'var(--success)';
    setTimeout(() => {
      icon.className = 'bi bi-download';
      this.style.background = '';
    }, 1500);
  });
});
```

### 7. Bengali Number Converter
```javascript
function toBengaliNum(n) {
  return String(n).replace(/[0-9]/g, d => '০১২৩৪৫৬৭৮৯'[d]);
}
```

---

## SCROLL ANIMATIONS

Apply `.animate-fade-up` to:
- Page hero content
- Stats strip items (staggered: nth-child × 0.08s)
- Each `.download-card` (staggered: nth-child × 0.04s)
- Sidebar widgets (staggered: nth-child × 0.1s)
- Each `.recent-file-card` (staggered: nth-child × 0.1s)
- CTA banner content
- Section headers

IntersectionObserver for `.animate-fade-up` is already in `app.js` — do not duplicate.

---

## CODING RULES

1. Zero hardcoded colors — every color via CSS variable only
2. No inline styles except JS-driven `display`, `background` (for download feedback), and stagger `transition-delay`
3. Semantic HTML: `<main>`, `<section>`, `<article>`, `<aside>`, `<nav>`
4. All interactive elements: keyboard-accessible, visible focus ring (`outline: 2px solid var(--primary); outline-offset: 2px`)
5. `aria-label` on all icon-only buttons
6. Download links: `download` attribute + `aria-label="[file title] ডাউনলোড করুন"`
7. No jQuery, no external libraries
8. `const`/`let` only, arrow functions, descriptive names
9. Bengali numerals throughout UI (toBengaliNum helper)
10. 100% complete — no placeholder comments, no TODOs

Output: single complete `downloads.html` file, fully production-ready.