Build `notices.html` for the Adarsha High School & College Bangladesh school website project.

## CONTEXT

This page is part of a multi-page school website. The following files already exist and must be referenced (not rebuilt):
- `assets/css/variables.css` — all CSS custom properties (colors, fonts, spacing)
- `assets/css/style.css` — shared component styles (navbar, footer, buttons, cards)
- `assets/css/responsive.css` — media queries
- `assets/js/app.js` — shared JS (navbar scroll, active link, scroll animations)

Only build: `notices.html` and any notices-specific CSS additions (append to `style.css` under a `/* === NOTICES PAGE === */` comment block).

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




```

---

## HTML STRUCTURE

```html



  
  
  নোটিশ বোর্ড | আদর্শ উচ্চ বিদ্যালয় ও কলেজ
  
  
  
  
  


  
    
  

  
    
    
    
    
  

  
    
  

  
  


```

---

## SECTION 1 — PAGE HERO BANNER

Height: 180px
Background: linear-gradient from var(--primary-dark) to var(--primary)
Layout: flex, center both axes

Content:
- Breadcrumb (top): Home → নোটিশ বোর্ড
  - Style: font-size 13px, color rgba(255,255,255,0.7)
  - Separator: ` / `
  - Last item: white, font-weight 500
- Page title: "নোটিশ বোর্ড" (h1, white, font-bengali, 32px, font-weight 700)
- Subtitle: "Notice Board" (English, rgba white 0.75, 14px, margin-top 4px)

CSS:
```css
.page-hero {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary));
  min-height: 180px;
  display: flex;
  align-items: center;
  padding: 40px 0;
}
.page-hero h1 {
  color: var(--white);
  font-family: var(--font-bengali);
  font-size: clamp(24px, 4vw, 32px);
  font-weight: 700;
  margin-bottom: 4px;
}
.breadcrumb-item a { color: rgba(255,255,255,0.7); text-decoration: none; }
.breadcrumb-item.active { color: var(--white); }
.breadcrumb-divider { color: rgba(255,255,255,0.4); }
```

---

## SECTION 2 — FILTER BAR

Background: var(--white)
Border-bottom: 1px solid var(--border-color)
Position: sticky; top: 70px; z-index: 100 (sticks below navbar)
Padding: 14px 0

Layout: two rows on mobile, single row on desktop (flex, space-between, gap: 12px)

**LEFT — Search Input:**
```html

  
  

```
- Width: 320px (full width on mobile)
- Height: 40px
- Border: 1px solid var(--border-color)
- Border-radius: var(--radius-sm)
- Padding-left: 36px (space for search icon)
- Search icon: position absolute, left 10px, color var(--text-muted)
- Focus: border-color var(--primary), box-shadow 0 0 0 3px var(--primary-light)

**RIGHT — Category Filter Tabs:**
```html

  সকল
  ভর্তি
  পরীক্ষা
  ফলাফল
  ছুটি
  অনুষ্ঠান
  সাধারণ

```
Tab styles:
- Default: background var(--gray-100), color var(--text-secondary), border: none, border-radius var(--radius-sm), padding 6px 14px, font-size 13px, font-weight 500, cursor pointer
- Active / hover: background var(--primary), color var(--white)
- transition: var(--transition)
- Gap between tabs: 6px

**RIGHT — Sort Dropdown:**
```html

  সর্বশেষ
  পুরনো
  গুরুত্বপূর্ণ

```
- Height: 40px
- Border: 1px solid var(--border-color)
- Border-radius: var(--radius-sm)
- Padding: 0 12px
- Font-size: 13px
- Color: var(--text-primary)

---

## SECTION 3 — NOTICE LIST

Background: var(--gray-50)
Padding: 48px 0

Layout: Two-column Bootstrap grid
- Left col: `col-lg-8` — notice cards list
- Right col: `col-lg-4` — sidebar

### LEFT — NOTICE CARDS

**Notice Card Component (.notice-card):**
```css
.notice-card {
  background: var(--white);
  border: 1px solid var(--border-color);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius-md);
  padding: 20px 24px;
  margin-bottom: 16px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}
.notice-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
  border-left-color: var(--primary);
}
.notice-card.is-new { border-left-color: var(--accent); }
.notice-card.is-important { border-left-color: var(--warning, #d97706); }
```

**Card internal layout:**

LEFT — Date Box (.notice-date-box):
```css
.notice-date-box {
  flex-shrink: 0;
  width: 56px;
  text-align: center;
  background: var(--primary-subtle);
  border: 1px solid var(--primary-border);
  border-radius: var(--radius-sm);
  padding: 8px 4px;
}
.notice-date-box .day {
  font-size: 22px;
  font-weight: 700;
  color: var(--primary);
  line-height: 1;
}
.notice-date-box .month {
  font-size: 11px;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-top: 2px;
}
```

RIGHT — Notice Content (.notice-content):
- Top row: Category badge + "নতুন" badge (if new) + timestamp
  - Category badge: background var(--primary-light), color var(--primary), border-radius 4px, padding 2px 10px, font-size 11px, font-weight 600
  - "নতুন" badge: background var(--accent-light), color var(--accent), same sizing
  - Timestamp: margin-left auto, font-size 11px, color var(--text-muted), `<i class="bi bi-clock"></i>`
- Title: font-family var(--font-bengali), font-size 15px, font-weight 600, color var(--text-primary), margin: 6px 0 4px
- Description: font-size 13px, color var(--text-secondary), line-height 1.7, max 2 lines
- Bottom row: action links
  - "বিস্তারিত পড়ুন" link: color var(--primary), font-size 13px, font-weight 500
  - PDF download button (if has attachment):
    `<a class="btn-notice-download"><i class="bi bi-file-earmark-pdf-fill"></i> ডাউনলোড</a>`
    background var(--accent-light), color var(--accent), border-radius var(--radius-sm), padding 4px 12px, font-size 12px, font-weight 500

**20 notice cards — full Bengali content, varied categories:**

1.  category: admission | important | new
    title: "২০২৫-২০২৬ শিক্ষাবর্ষে ভর্তি বিজ্ঞপ্তি"
    desc: "ষষ্ঠ থেকে নবম শ্রেণিতে ভর্তির জন্য আবেদন গ্রহণ শুরু হয়েছে। আগ্রহী শিক্ষার্থীরা নির্ধারিত ফরম পূরণ করে জমা দিন।"
    date: 01 Jun | has PDF

2.  category: exam | new
    title: "অর্ধ-বার্ষিক পরীক্ষার সময়সূচি ২০২৫"
    desc: "আসন্ন অর্ধ-বার্ষিক পরীক্ষার বিস্তারিত সময়সূচি প্রকাশিত হয়েছে।"
    date: 28 May | has PDF

3.  category: result | new
    title: "JSC পরীক্ষার ফলাফল প্রকাশ ২০২৫"
    desc: "এ বছর JSC পরীক্ষায় আমাদের বিদ্যালয়ের ১০০% পাস এবং ৪৫ জন A+ অর্জন করেছে।"
    date: 25 May | no PDF

4.  category: event | new
    title: "বার্ষিক পুরস্কার বিতরণী অনুষ্ঠান ২০২৫"
    desc: "আগামী ১৫ জুন বার্ষিক পুরস্কার বিতরণী অনুষ্ঠান অনুষ্ঠিত হবে। সকল অভিভাবক ও শিক্ষার্থীদের উপস্থিত থাকার অনুরোধ।"
    date: 20 May | no PDF

5.  category: holiday
    title: "ঈদুল আযহা উপলক্ষে বিদ্যালয় বন্ধের নোটিশ"
    desc: "ঈদুল আযহা উপলক্ষে ৫ জুন থেকে ১২ জুন পর্যন্ত বিদ্যালয় বন্ধ থাকবে।"
    date: 18 May | no PDF

6.  category: exam
    title: "SSC পরীক্ষার্থীদের বিশেষ নির্দেশনা"
    desc: "SSC পরীক্ষায় অংশগ্রহণকারী শিক্ষার্থীদের প্রবেশপত্র বিতরণ এবং আসন বিন্যাস সংক্রান্ত নির্দেশনা।"
    date: 15 May | has PDF

7.  category: general
    title: "বিদ্যালয়ের নতুন ডিজিটাল লাইব্রেরি উদ্বোধন"
    desc: "শিক্ষার্থীদের সুবিধার্থে বিদ্যালয়ে একটি আধুনিক ডিজিটাল লাইব্রেরি স্থাপন করা হয়েছে।"
    date: 12 May | no PDF

8.  category: admission
    title: "একাদশ শ্রেণিতে ভর্তির বিজ্ঞপ্তি"
    desc: "বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা বিভাগে একাদশ শ্রেণিতে ভর্তির আবেদন চলছে।"
    date: 10 May | has PDF

9.  category: event
    title: "জাতীয় শোক দিবস পালন সংক্রান্ত নোটিশ"
    desc: "১৫ আগস্ট জাতীয় শোক দিবস উপলক্ষে বিদ্যালয়ে বিশেষ অনুষ্ঠানের আয়োজন করা হবে।"
    date: 08 May | no PDF

10. category: result
    title: "প্রথম সাময়িক পরীক্ষার ফলাফল প্রকাশ"
    desc: "প্রথম সাময়িক পরীক্ষার ফলাফল প্রকাশিত হয়েছে। শিক্ষার্থীরা স্ব স্ব শ্রেণি শিক্ষকের কাছ থেকে নম্বরপত্র সংগ্রহ করুন।"
    date: 05 May | no PDF

11. category: general
    title: "অভিভাবক সমাবেশ ২০২৫"
    desc: "আগামী ২০ মে বিদ্যালয়ে অভিভাবক সমাবেশ অনুষ্ঠিত হবে। সকল অভিভাবকদের উপস্থিত থাকার বিশেষ অনুরোধ করা হচ্ছে।"
    date: 02 May | no PDF

12. category: exam
    title: "বার্ষিক পরীক্ষার রুটিন ২০২৫"
    desc: "২০২৫ সালের বার্ষিক পরীক্ষার বিস্তারিত রুটিন প্রকাশিত হয়েছে।"
    date: 28 Apr | has PDF

13. category: holiday
    title: "গ্রীষ্মকালীন ছুটির বিজ্ঞপ্তি"
    desc: "গ্রীষ্মকালীন ছুটি ২০ মে থেকে ৩০ মে পর্যন্ত নির্ধারিত হয়েছে।"
    date: 25 Apr | no PDF

14. category: general
    title: "বৃত্তি পরীক্ষার ফলাফল ও পুরস্কার বিতরণ"
    desc: "২০২৪ সালের বৃত্তি পরীক্ষায় উত্তীর্ণ শিক্ষার্থীদের পুরস্কার বিতরণ অনুষ্ঠান অনুষ্ঠিত হবে।"
    date: 20 Apr | no PDF

15. category: admission
    title: "সপ্তম শ্রেণিতে বিশেষ ভর্তির সুযোগ"
    desc: "কিছু আসন শূন্য থাকায় সপ্তম শ্রেণিতে বিশেষ ভর্তির সুযোগ দেওয়া হচ্ছে।"
    date: 15 Apr | has PDF

16. category: event
    title: "বিজ্ঞান মেলা ২০২৫ আয়োজন সংক্রান্ত নোটিশ"
    desc: "আগামী মাসে বিদ্যালয়ে বার্ষিক বিজ্ঞান মেলা আয়োজন করা হবে। আগ্রহী শিক্ষার্থীরা নাম নথিভুক্ত করুন।"
    date: 10 Apr | no PDF

17. category: general
    title: "নতুন শিক্ষাবর্ষে বই বিতরণ সূচি"
    desc: "২০২৫ শিক্ষাবর্ষের পাঠ্যপুস্তক বিতরণের সময়সূচি এবং নির্দেশনা প্রকাশিত হয়েছে।"
    date: 05 Apr | no PDF

18. category: exam
    title: "মডেল টেস্ট পরীক্ষার নির্দেশিকা"
    desc: "আসন্ন SSC মডেল টেস্ট পরীক্ষায় অংশগ্রহণের জন্য সকল নির্দেশনা মনোযোগ দিয়ে পড়ুন।"
    date: 01 Apr | has PDF

19. category: result
    title: "বৃত্তি পরীক্ষার ফলাফল ২০২৪"
    desc: "পঞ্চম ও অষ্টম শ্রেণির বৃত্তি পরীক্ষার ফলাফল প্রকাশিত হয়েছে।"
    date: 25 Mar | no PDF

20. category: holiday
    title: "পহেলা বৈশাখ উপলক্ষে বিদ্যালয় বন্ধ"
    desc: "বাংলা নববর্ষ ১৪৩২ উপলক্ষে ১৪ এপ্রিল বিদ্যালয় বন্ধ থাকবে।"
    date: 10 Mar | no PDF

### RIGHT SIDEBAR (col-lg-4)

**Sticky sidebar** (position: sticky; top: 130px)

**Widget 1 — সাম্প্রতিক নোটিশ (Recent Notices):**
- White card, border-radius var(--radius-md), border 1px solid var(--border-color), padding 20px, shadow-sm
- Header: font-size 14px, font-weight 600, color var(--text-primary), border-bottom 1px solid var(--border-color), padding-bottom 10px, margin-bottom 14px
  Icon: `<i class="bi bi-bell-fill me-2"></i>` color var(--primary)
- 5 recent list items (.sidebar-notice-item):
  - border-bottom 1px solid var(--gray-100), padding 10px 0
  - Date: font-size 11px, color var(--text-muted)
  - Title: font-size 13px, font-weight 500, font-family var(--font-bengali), color var(--text-primary), hover: color var(--primary)
  - Last item: no border-bottom

**Widget 2 — বিভাগ অনুযায়ী (By Category):**
- Same card style
- Header: `<i class="bi bi-funnel-fill me-2"></i>` "বিভাগসমূহ"
- List of categories with count badges:
```
  সকল নোটিশ        (20)
  ভর্তি             (4)
  পরীক্ষা           (4)
  ফলাফল             (3)
  ছুটি              (3)
  অনুষ্ঠান          (3)
  সাধারণ            (3)
```
  Each item: flex, space-between, padding 8px 0, border-bottom 1px solid var(--gray-100), font-size 13px, font-family var(--font-bengali)
  Count badge: background var(--primary-light), color var(--primary), border-radius 20px, padding 2px 10px, font-size 11px, font-weight 600

**Widget 3 — গুরুত্বপূর্ণ লিঙ্ক (Important Links):**
- Same card style
- Header: `<i class="bi bi-link-45deg me-2"></i>` "গুরুত্বপূর্ণ লিঙ্ক"
- 5 links:
  - ভর্তি আবেদন ফরম → admission.html
  - একাডেমিক ক্যালেন্ডার → academic.html#calendar
  - পরীক্ষার রুটিন → academic.html#routine
  - ফলাফল → results.html
  - ডাউনলোড সেন্টার → downloads.html
  Each: `<i class="bi bi-arrow-right-circle me-2"></i>` color var(--primary), font-size 13px

---

## SECTION 4 — PAGINATION

Background: var(--gray-50)
Padding-top: 8px, padding-bottom: 48px
Centered Bootstrap pagination:

```html

  
    ‹
    ১
    ২
    ৩
    ›
  

```

Custom pagination CSS:
```css
.pagination .page-link {
  color: var(--primary);
  border-color: var(--border-color);
  border-radius: var(--radius-sm) !important;
  margin: 0 3px;
  font-weight: 500;
}
.pagination .page-item.active .page-link {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--white);
}
.pagination .page-link:hover {
  background: var(--primary-subtle);
  color: var(--primary);
}
```

---

## NAVBAR & FOOTER

Replicate the full navbar and footer **exactly** as defined in index.html:
- Topbar (hidden on mobile)
- Two-layer sticky navbar with all 8 nav items + dropdowns
- Active state: "নোটিশ বোর্ড" nav link gets `class="nav-link active"` and `aria-current="page"`
- Full 4-column footer with footer-top-strip, footer-main, footer-bottom

---

## JAVASCRIPT (notices-specific, inline at bottom of notices.html)

Write inside `<script>` tag at the bottom of the file.

### 1. Notice Filter by Category
```javascript
// Filter notices by category tab
const tabs = document.querySelectorAll('.notice-tab');
const cards = document.querySelectorAll('.notice-card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const cat = tab.dataset.category;
    cards.forEach(card => {
      card.style.display = (cat === 'all' || card.dataset.category === cat) ? '' : 'none';
    });
    updateResultCount();
  });
});
```

### 2. Live Search Filter
```javascript
// Live search on notice titles and descriptions
const searchInput = document.getElementById('noticeSearch');
searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.notice-title')?.textContent.toLowerCase() ?? '';
    const desc  = card.querySelector('.notice-desc')?.textContent.toLowerCase() ?? '';
    card.style.display = (title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
  updateResultCount();
});
```

### 3. Result Count Update
```javascript
// Show how many notices are visible
function updateResultCount() {
  const visible = [...cards].filter(c => c.style.display !== 'none').length;
  const counter = document.getElementById('noticeCount');
  if (counter) counter.textContent = `${visible}টি নোটিশ পাওয়া গেছে`;
}
```

### 4. Sort Notices
```javascript
// Sort notices by date
const sortSelect = document.getElementById('noticeSort');
const noticeList = document.getElementById('noticeList');
sortSelect.addEventListener('change', () => {
  const cardArray = [...cards];
  if (sortSelect.value === 'newest') {
    cardArray.sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date));
  } else if (sortSelect.value === 'oldest') {
    cardArray.sort((a, b) => new Date(a.dataset.date) - new Date(b.dataset.date));
  } else if (sortSelect.value === 'important') {
    cardArray.sort((a, b) => (b.classList.contains('is-important') ? 1 : 0) - (a.classList.contains('is-important') ? 1 : 0));
  }
  cardArray.forEach(card => noticeList.appendChild(card));
});
```

Add `data-category="..."` and `data-date="YYYY-MM-DD"` attributes to each `.notice-card`.
Add `id="noticeList"` to the notice cards container div.
Add result count display:
```html
২০টি নোটিশ পাওয়া গেছে
```
(font-size 13px, color var(--text-muted), margin-bottom 16px)

---

## SCROLL ANIMATIONS

Apply `.animate-fade-up` to:
- Page hero content
- Filter bar
- Each `.notice-card` (staggered: nth-child × 0.05s delay)
- Sidebar widgets

The IntersectionObserver for `.animate-fade-up` is already in `app.js` — do not duplicate it.

---

## CODING RULES

1. Zero hardcoded colors — every color via CSS variable
2. Zero inline styles except JS-driven `display` toggles
3. Semantic HTML: `<main>`, `<section>`, `<article>`, `<nav>`, `<aside>`
4. All images: `alt` attributes
5. All inputs: associated `<label>` or `aria-label`
6. Focus-visible ring: `outline: 2px solid var(--primary); outline-offset: 2px`
7. No jQuery, no external JS libraries
8. `const`/`let` only — no `var`
9. Bengali numerals in pagination (১ ২ ৩)
10. Build 100% complete — no placeholder comments, no "TODO"s

Output: single complete `notices.html` file, fully production-ready.

This prompt is self-contained and gives Claude Code everything it needs — design tokens, full component specs, 20 real notice entries, JS logic, and strict rules — without requiring it to read any other file.You said: now give prompt fornow give prompt for results.html page11:00 AMClaude responded: Here's the complete prompt for building results.Here's the complete prompt for building results.html:

markdownBuild `results.html` for the Adarsha High School & College Bangladesh school website project.

## CONTEXT

This page is part of a multi-page school website. The following files already exist and must be referenced (not rebuilt):
- `assets/css/variables.css` — all CSS custom properties
- `assets/css/style.css` — shared component styles (navbar, footer, buttons, cards)
- `assets/css/responsive.css` — media queries
- `assets/js/app.js` — shared JS (navbar scroll, active link, scroll animations)

Only build: `results.html` and any results-specific CSS additions (append to `style.css` under a `/* === RESULTS PAGE === */` comment block).

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




```

---

## HTML STRUCTURE

```html



  
  
  পরীক্ষার ফলাফল | আদর্শ উচ্চ বিদ্যালয় ও কলেজ
  
  
  
  
  


  
  
    
    
    
    
    
    
  
  
  
  


```

---

## SECTION 1 — PAGE HERO BANNER

Same `.page-hero` pattern as other inner pages:
- Background: `linear-gradient(135deg, var(--primary-dark), var(--primary))`
- Min-height: 180px, padding: 40px 0
- Breadcrumb: হোম / পরীক্ষার ফলাফল
- `<h1>` Bengali: "পরীক্ষার ফলাফল"
- Subtitle English: "Examination Results"
- Decorative right-side icon: `<i class="bi bi-award-fill"></i>` (80px, rgba white 0.08, absolute right)

---

## SECTION 2 — SUMMARY STATS STRIP

Background: var(--white)
Border-bottom: 1px solid var(--border-color)
Padding: 28px 0

4 stat items in a row (col-6 col-md-3 each), centered, no card border:

```
Icon                   Icon                   Icon                   Icon
bi-patch-check-fill    bi-trophy-fill         bi-people-fill         bi-star-fill
color: --success       color: --warning       color: --primary       color: --accent

"৯৮%"                 "১৫৬ জন"               "১,২০০+"               "২০ বছর+"
পাসের হার              A+ প্রাপ্ত               মোট শিক্ষার্থী           ধারাবাহিক সাফল্য
Pass Rate             A+ Achievers           Total Students         Years of Excellence
```

Each stat item:
- Icon circle: 48px, background var(--primary-subtle), border-radius 50%, margin: 0 auto 12px
- Number: font-size 28px, font-weight 700, color var(--text-primary)
- Bengali label: font-size 13px, font-family var(--font-bengali), color var(--text-secondary)
- English sublabel: font-size 11px, color var(--text-muted)
- Divider between items: 1px solid var(--border-color) (vertical, d-none d-md-block)

---

## SECTION 3 — FILTER BAR

Background: var(--gray-50)
Border-bottom: 1px solid var(--border-color)
Padding: 16px 0
Position: sticky; top: 70px; z-index: 100

Layout: flex row, flex-wrap, gap 12px, align-items center

**Exam Type Tabs (.result-exam-tab):**
```html
সকল পরীক্ষা
SSC / দাখিল
HSC / আলিম
JSC / JDC
PSC / EBT
```
Tab style: same as notices.html filter tabs (gray bg → primary active)

**Year Dropdown:**
```html

  সকল বছর
  ২০২৫
  ২০২৪
  ২০২৩
  ২০২২
  ২০২১

```
Style: height 40px, border 1px solid var(--border-color), border-radius var(--radius-sm), padding 0 12px, font-size 13px, background var(--white), color var(--text-primary)

**Result Count:**
```html
১২টি ফলাফল পাওয়া গেছে
```
font-size: 13px, color: var(--text-muted), margin-left: auto

---

## SECTION 4 — RESULTS GRID

Background: var(--gray-50)
Padding: 48px 0

Two-column layout: `col-lg-8` (result cards) + `col-lg-4` (sidebar)

---

### LEFT — RESULT CARDS

**Result Card Component (.result-card):**
```css
.result-card {
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  margin-bottom: 24px;
}
.result-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-3px);
}
```

**Card Header (.result-card-header):**
```css
.result-card-header {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary));
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```
- Left: exam type badge + year badge
  - Exam badge: background rgba(white,0.2), color white, border-radius var(--radius-sm), padding 4px 12px, font-size 12px, font-weight 700
  - Year badge: background var(--accent), same style
- Center: exam name in Bengali (white, font-bengali, font-size 18px, font-weight 700)
- Right: pass rate donut (CSS only, no canvas):
```html
  
    ৯৮%
    পাস
  
```
  Circle: 72px × 72px, background: conic-gradient from var(--success) to var(--white), border-radius 50%
  Inner white circle (60px): centered, flex, column, align+justify center
  Number: font-size 16px, font-weight 700, color var(--text-primary)
  Label: font-size 10px, color var(--text-muted)

**Card Body (.result-card-body):**
Padding: 24px
3-column stat row inside card:

```
মোট পরীক্ষার্থী    উত্তীর্ণ          A+
    ২৮০               ২৭৪             ৪৫
Total Appeared    Passed          A+ Grade
```
Each stat: border-right 1px solid var(--border-color) (last: no border), text-align center, padding 0 20px
- Number: font-size 22px, font-weight 700, color var(--primary)
- Bengali label: font-size 12px, font-family var(--font-bengali), color var(--text-secondary)
- English sublabel: font-size 10px, color var(--text-muted)

**Grade Distribution Bar (.grade-bar-row):**
Below the 3-col stats, margin-top: 20px, border-top: 1px solid var(--border-color), padding-top: 16px

Label: "গ্রেড বিতরণ" (font-size 12px, color var(--text-muted), text-transform uppercase, letter-spacing 0.06em, margin-bottom 10px)

Stacked horizontal bar (height 10px, border-radius 99px, overflow hidden, background var(--gray-100)):
```html

  
  
  
  
  
  

```
Grade segment colors (CSS variables only — define these under `/* === RESULTS PAGE === */`):
```css
--grade-a-plus:  var(--success);
--grade-a:       hsl(var(--hue), var(--sat), 45%);
--grade-a-minus: hsl(var(--hue), var(--sat), 58%);
--grade-b:       var(--warning);
--grade-c:       hsl(35, 80%, 55%);
--grade-d:       var(--danger);
```

Grade legend below bar: inline flex, gap 12px, margin-top 8px
Each: colored dot (8px circle) + label text (font-size 11px, color var(--text-muted))
```
● A+: ৪৫   ● A: ৭৮   ● A-: ৬২   ● B: ৫১   ● C: ২৮   ● D: ১০
```

**Card Footer (.result-card-footer):**
```css
.result-card-footer {
  padding: 14px 24px;
  background: var(--gray-50);
  border-top: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```
- Left: `<i class="bi bi-calendar3 me-2"></i>` + "ফলাফল প্রকাশ: ১০ মে ২০২৫" (font-size 12px, color var(--text-muted))
- Right: two buttons side by side
  - "বিস্তারিত দেখুন": outline button, color var(--primary), border var(--primary), font-size 12px, padding 5px 14px, border-radius var(--radius-sm)
  - "PDF ডাউনলোড": filled, background var(--accent), color white, same sizing, icon `<i class="bi bi-file-earmark-pdf me-1"></i>`

---

**12 RESULT CARDS — full data:**

CARD 1:
- exam: ssc | year: 2025
- Title: "মাধ্যমিক স্কুল সার্টিফিকেট (SSC) পরীক্ষা ২০২৫"
- Appeared: ২৮০ | Passed: ২৭৪ | A+: ৪৫ | Pass Rate: ৯৮%
- Grade dist: A+16% A28% A-22% B18% C10% D4% F2%
- Published: ১০ মে ২০২৫

CARD 2:
- exam: hsc | year: 2025
- Title: "উচ্চ মাধ্যমিক সার্টিফিকেট (HSC) পরীক্ষা ২০২৫"
- Appeared: ১৯৫ | Passed: ১৯০ | A+: ৩২ | Pass Rate: ৯৭%
- Grade dist: A+16% A25% A-20% B20% C12% D5% F3%
- Published: ১৮ জুলাই ২০২৫

CARD 3:
- exam: jsc | year: 2025
- Title: "জুনিয়র স্কুল সার্টিফিকেট (JSC) পরীক্ষা ২০২৫"
- Appeared: ৩১০ | Passed: ৩১০ | A+: ৬৮ | Pass Rate: ১০০%
- Grade dist: A+22% A30% A-24% B14% C8% D2% F0%
- Published: ২৪ ডিসেম্বর ২০২৪

CARD 4:
- exam: psc | year: 2025
- Title: "প্রাথমিক শিক্ষা সমাপনী (PSC) পরীক্ষা ২০২৫"
- Appeared: ১৪০ | Passed: ১৪০ | A+: ৪২ | Pass Rate: ১০০%
- Grade dist: A+30% A28% A-20% B14% C6% D2% F0%
- Published: ৩০ ডিসেম্বর ২০২৪

CARD 5:
- exam: ssc | year: 2024
- Title: "মাধ্যমিক স্কুল সার্টিফিকেট (SSC) পরীক্ষা ২০২৪"
- Appeared: ২৬৫ | Passed: ২৫৮ | A+: ৩৮ | Pass Rate: ৯৭%
- Grade dist: A+14% A27% A-23% B20% C10% D4% F3%
- Published: ১২ মে ২০২৪

CARD 6:
- exam: hsc | year: 2024
- Title: "উচ্চ মাধ্যমিক সার্টিফিকেট (HSC) পরীক্ষা ২০২৪"
- Appeared: ১৮০ | Passed: ১৭৫ | A+: ২৮ | Pass Rate: ৯৭%
- Grade dist: A+16% A24% A-22% B20% C12% D4% F3%
- Published: ১৭ জুলাই ২০২৪

CARD 7:
- exam: jsc | year: 2024
- Title: "জুনিয়র স্কুল সার্টিফিকেট (JSC) পরীক্ষা ২০২৪"
- Appeared: ২৯৫ | Passed: ২৯২ | A+: ৫৮ | Pass Rate: ৯৯%
- Grade dist: A+20% A28% A-24% B16% C8% D2% F1%
- Published: ২৬ ডিসেম্বর ২০২৩

CARD 8:
- exam: psc | year: 2024
- Title: "প্রাথমিক শিক্ষা সমাপনী (PSC) পরীক্ষা ২০২৪"
- Appeared: ১৩৫ | Passed: ১৩৫ | A+: ৩৮ | Pass Rate: ১০০%
- Grade dist: A+28% A30% A-20% B14% C6% D2% F0%
- Published: ২৮ ডিসেম্বর ২০২৩

CARD 9:
- exam: ssc | year: 2023
- Title: "মাধ্যমিক স্কুল সার্টিফিকেট (SSC) পরীক্ষা ২০২৩"
- Appeared: ২৫২ | Passed: ২৪৫ | A+: ৩৫ | Pass Rate: ৯৭%
- Grade dist: A+14% A26% A-22% B20% C12% D4% F3%
- Published: ১৫ মে ২০২৩

CARD 10:
- exam: hsc | year: 2023
- Title: "উচ্চ মাধ্যমিক সার্টিফিকেট (HSC) পরীক্ষা ২০২৩"
- Appeared: ১৭২ | Passed: ১৬৬ | A+: ২৪ | Pass Rate: ৯৭%
- Grade dist: A+14% A23% A-22% B22% C12% D5% F3%
- Published: ১৮ জুলাই ২০২৩

CARD 11:
- exam: jsc | year: 2023
- Title: "জুনিয়র স্কুল সার্টিফিকেট (JSC) পরীক্ষা ২০২৩"
- Appeared: ২৮৮ | Passed: ২৮৫ | A+: ৫২ | Pass Rate: ৯৯%
- Grade dist: A+18% A28% A-24% B18% C8% D2% F1%
- Published: ২৭ ডিসেম্বর ২০২২

CARD 12:
- exam: psc | year: 2023
- Title: "প্রাথমিক শিক্ষা সমাপনী (PSC) পরীক্ষা ২০২৩"
- Appeared: ১২৮ | Passed: ১২৮ | A+: ৩৪ | Pass Rate: ১০০%
- Grade dist: A+26% A30% A-22% B14% C6% D2% F0%
- Published: ৩০ ডিসেম্বর ২০২২

---

### RIGHT SIDEBAR (col-lg-4)

Sticky: `position: sticky; top: 130px`

**Widget 1 — বছরভিত্তিক পাসের হার (Pass Rate Trend):**
Card: white, border-radius var(--radius-md), border 1px solid var(--border-color), padding 20px, shadow-sm
Header: `<i class="bi bi-graph-up-arrow me-2"></i>` "পাসের হার (বার্ষিক)" — font-size 14px, font-weight 600

Bar chart (CSS only, no canvas):
```
২০২৫  ████████████████████  ৯৮%
২০২৪  ███████████████████   ৯৭%
২০২৩  ███████████████████   ৯৭%
২০২২  ██████████████████    ৯৬%
২০২১  ██████████████████    ৯৫%
```
Each row: flex, align-items center, gap 8px, margin-bottom 10px
- Year label: 36px, font-size 12px, color var(--text-muted), font-weight 500
- Bar track: flex-1, height 10px, background var(--gray-100), border-radius 99px, overflow hidden
- Bar fill: height 100%, background linear-gradient(90deg, var(--primary), var(--info)), border-radius 99px
- Percentage: 36px, font-size 12px, font-weight 700, color var(--primary), text-align right

**Widget 2 — পরীক্ষা অনুযায়ী সারসংক্ষেপ (Exam Summary):**
Same card style
Header: `<i class="bi bi-table me-2"></i>` "পরীক্ষার সারসংক্ষেপ"

Mini table (no external border, inner borders only):
```
পরীক্ষা    মোট    পাস    A+
SSC ২০২৫  ২৮০   ২৭৪    ৪৫
HSC ২০২৫  ১৯৫   ১৯০    ৩২
JSC ২০২৫  ৩১০   ৩১০    ৬৮
PSC ২০২৫  ১৪০   ১৪০    ৪২
```
Table: width 100%, font-size 13px, font-family var(--font-bengali)
Thead: background var(--primary-subtle), color var(--primary), font-weight 600
Tbody tr: border-bottom 1px solid var(--gray-100)
Tbody tr:hover: background var(--gray-50)
td, th: padding 8px 10px

**Widget 3 — দ্রুত লিঙ্ক (Quick Links):**
Same card style
Header: `<i class="bi bi-link-45deg me-2"></i>` "দ্রুত লিঙ্ক"
Links:
- নোটিশ বোর্ড → notices.html
- ভর্তি তথ্য → admission.html
- একাডেমিক ক্যালেন্ডার → academic.html
- ডাউনলোড সেন্টার → downloads.html
- যোগাযোগ → contact.html
Each: `<i class="bi bi-arrow-right-circle me-2"></i>` color var(--primary), font-size 13px, padding 8px 0, border-bottom 1px solid var(--gray-100)

---

## SECTION 5 — BOARD RESULTS COMPARISON TABLE

Background: var(--white)
Padding: 64px 0
Border-top: 1px solid var(--border-color)

Section header (centered):
- Bengali title: "বোর্ড ফলাফল তুলনামূলক বিশ্লেষণ"
- English subtitle: "Board Result Comparative Analysis"
- Decorative underline: 40px, 3px, var(--primary) + var(--accent) split

Responsive Bootstrap table (`.table-responsive`):
```css
.result-comparison-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  overflow: hidden;
  font-size: 14px;
}
.result-comparison-table thead tr {
  background: var(--primary-dark);
  color: var(--white);
}
.result-comparison-table thead th {
  padding: 14px 16px;
  font-weight: 600;
  font-family: var(--font-bengali);
  border: none;
  white-space: nowrap;
}
.result-comparison-table tbody tr:nth-child(even) {
  background: var(--gray-50);
}
.result-comparison-table tbody tr:hover {
  background: var(--primary-subtle);
}
.result-comparison-table tbody td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color);
  font-family: var(--font-bengali);
  vertical-align: middle;
}
```

Table columns:
`বছর | পরীক্ষা | মোট পরীক্ষার্থী | উত্তীর্ণ | পাসের হার | A+ | বোর্ড অবস্থান`

10 rows of data (SSC results 2016–2025):
```
২০২৫ | SSC | ২৮০ | ২৭৪ | ৯৮% | ৪৫ | ৩য়
২০২৪ | SSC | ২৬৫ | ২৫৮ | ৯৭% | ৩৮ | ৪র্থ
২০২৩ | SSC | ২৫২ | ২৪৫ | ৯৭% | ৩৫ | ৫ম
২০২২ | SSC | ২৪০ | ২৩০ | ৯৬% | ৩০ | ৫ম
২০২১ | SSC | ২৩৫ | ২২৪ | ৯৫% | ২৮ | ৬ষ্ঠ
২০২০ | SSC | ২২৮ | ২১৫ | ৯৪% | ২৪ | ৭ম
২০১৯ | SSC | ২২০ | ২০৫ | ৯৩% | ২০ | ৮ম
২০১৮ | SSC | ২১০ | ১৯৫ | ৯৩% | ১৮ | ৮ম
২০১৭ | SSC | ২০২ | ১৮৮ | ৯৩% | ১৫ | ৯ম
২০১৬ | SSC | ১৯৫ | ১৮০ | ৯২% | ১২ | ১০ম
```

Pass rate column: colored badge
- ≥98%: background var(--success-light), color var(--success)
- 95–97%: background var(--warning-light), color var(--warning)
- <95%: background var(--danger-light), color var(--danger)

Board position column: badge (background var(--primary-light), color var(--primary))

Below table: centered "সম্পূর্ণ ইতিহাস ডাউনলোড করুন" button
- background var(--primary), color var(--white), icon `<i class="bi bi-download me-2"></i>`
- padding 10px 28px, border-radius var(--radius-sm)

---

## SECTION 6 — RESULT ARCHIVE ACCORDION

Background: var(--gray-50)
Padding: 64px 0

Section header (centered):
- Bengali: "ফলাফল আর্কাইভ"
- English: "Result Archive"

Bootstrap accordion (`.accordion`, `accordion-flush` style overridden):
```css
.result-archive-accordion .accordion-button {
  background: var(--white);
  color: var(--text-primary);
  font-family: var(--font-bengali);
  font-weight: 600;
  font-size: 15px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md) !important;
}
.result-archive-accordion .accordion-button:not(.collapsed) {
  background: var(--primary-subtle);
  color: var(--primary);
  box-shadow: none;
  border-color: var(--primary-border);
}
.result-archive-accordion .accordion-body {
  background: var(--white);
  border: 1px solid var(--border-color);
  border-top: none;
  border-radius: 0 0 var(--radius-md) var(--radius-md);
}
```

5 accordion items (years 2021–2025):

Each accordion item header: "২০২৫ সালের পরীক্ষার ফলাফল" with badge showing exam count: `<span class="badge">৪টি পরীক্ষা</span>`

Each accordion body: mini grid of 4 result summary cards (col-sm-6, col-md-3)
Each mini card:
- border: 1px solid var(--border-color), border-radius var(--radius-sm), padding 14px, text-align center
- Exam name badge (top): SSC / HSC / JSC / PSC, background var(--primary), color white, border-radius 4px, font-size 11px
- Pass rate: font-size 24px, font-weight 700, color var(--success)
- "পাসের হার" label: font-size 11px, color var(--text-muted)
- Appeared / Passed: font-size 12px, color var(--text-secondary)
- Download link: `<i class="bi bi-download"></i>` font-size 12px, color var(--primary)

---

## NAVBAR & FOOTER

Replicate the full navbar and footer exactly as in index.html:
- Topbar: hidden on mobile (d-none d-xl-flex)
- All 8 nav items with dropdowns
- Active state: "ফলাফল" link inside "একাডেমিক" dropdown gets `class="dropdown-item active"` and `aria-current="page"`
- Full footer: footer-top-strip + 4-column footer-main + footer-bottom

---

## JAVASCRIPT (results-specific, inline `<script>` at bottom)

### 1. Filter by Exam Type
```javascript
const examTabs = document.querySelectorAll('.result-exam-tab');
const resultCards = document.querySelectorAll('.result-card');

examTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    examTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const exam = tab.dataset.exam;
    filterResults();
  });
});
```

### 2. Filter by Year
```javascript
const yearSelect = document.getElementById('resultYear');
yearSelect.addEventListener('change', filterResults);
```

### 3. Combined Filter Function
```javascript
function filterResults() {
  const exam = document.querySelector('.result-exam-tab.active')?.dataset.exam ?? 'all';
  const year = document.getElementById('resultYear').value;
  let visible = 0;

  resultCards.forEach(card => {
    const examMatch = exam === 'all' || card.dataset.exam === exam;
    const yearMatch = year === 'all' || card.dataset.year === year;
    const show = examMatch && yearMatch;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  const counter = document.getElementById('resultCount');
  if (counter) counter.textContent = `${toBengaliNum(visible)}টি ফলাফল পাওয়া গেছে`;
}
```

### 4. Bengali Number Converter
```javascript
function toBengaliNum(n) {
  return String(n).replace(/[0-9]/g, d => '০১২৩৪৫৬৭৮৯'[d]);
}
```

### 5. Grade Bar Animation (on scroll)
```javascript
// Animate grade bars width from 0 to target on first viewport entry
const gradeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.grade-segment').forEach(seg => {
        const targetWidth = seg.style.width;
        seg.style.width = '0';
        requestAnimationFrame(() => {
          seg.style.transition = 'width 0.8s ease';
          seg.style.width = targetWidth;
        });
      });
      gradeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.grade-bar').forEach(bar => gradeObserver.observe(bar));
```

### 6. Pass Rate Trend Bar Animation
```javascript
// Animate trend bars on scroll
const trendObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.trend-bar-fill').forEach(fill => {
        const w = fill.dataset.width;
        fill.style.width = '0';
        requestAnimationFrame(() => {
          fill.style.transition = 'width 1s ease';
          fill.style.width = w + '%';
        });
      });
      trendObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.trend-chart').forEach(el => trendObserver.observe(el));
```

Add `data-exam="ssc"` and `data-year="2025"` attributes to each `.result-card`.
Add `id="resultCardsContainer"` to the cards wrapper div.

---

## SCROLL ANIMATIONS

Apply `.animate-fade-up` to:
- Page hero content
- Summary stat items (staggered delay: nth-child × 0.08s)
- Each `.result-card` (staggered: nth-child × 0.1s)
- Sidebar widgets
- Section headers
- Table wrapper
- Accordion items

IntersectionObserver for `.animate-fade-up` already lives in `app.js` — do not duplicate.

---

## CODING RULES

1. Zero hardcoded colors — every color via CSS variable
2. No inline styles except JS-driven `display`, `width`, and `transition` values
3. Semantic HTML: `<main>`, `<section>`, `<article>`, `<nav>`, `<aside>`, `<table>`
4. Proper `<caption>` on tables: "আদর্শ উচ্চ বিদ্যালয় ও কলেজ — বোর্ড ফলাফল বিশ্লেষণ"
5. All interactive elements: keyboard-accessible, focus-visible ring
6. `aria-label` on icon-only buttons
7. `scope="col"` on all `<th>` elements
8. No jQuery, no canvas, no chart libraries — CSS-only charts
9. `const`/`let` only, arrow functions, descriptive names
10. Bengali numerals throughout UI (use toBengaliNum() helper)
11. Build 100% complete — no placeholder comments, no TODOs

Output: single complete `results.html` file, fully production-ready.