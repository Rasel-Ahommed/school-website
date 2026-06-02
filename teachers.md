You are building teachers.html for a Bangladesh school website project.
The design system (variables.css), shared styles (style.css), responsive styles
(responsive.css), and JavaScript (app.js) already exist. Build ONLY teachers.html
and any additional CSS/JS needed for this page.

═══════════════════════════════════════════════════════════
ESTABLISHED DESIGN SYSTEM (variables.css — already exists, just reference)
═══════════════════════════════════════════════════════════

:root {
  --hue: 214; --sat: 72%;
  --primary:        hsl(var(--hue), var(--sat), 35%);
  --primary-light:  hsl(var(--hue), var(--sat), 92%);
  --primary-dark:   hsl(var(--hue), var(--sat), 22%);
  --primary-hover:  hsl(var(--hue), var(--sat), 28%);
  --primary-subtle: hsl(var(--hue), var(--sat), 97%);
  --primary-border: hsl(var(--hue), var(--sat), 80%);
  --accent:         #c8372d;
  --accent-light:   #fdecea;
  --accent-dark:    #9e1f17;
  --white:          #ffffff;
  --gray-50:        #f8fafc;
  --gray-100:       #f1f5f9;
  --gray-200:       #e2e8f0;
  --gray-300:       #cbd5e1;
  --gray-400:       #94a3b8;
  --gray-500:       #64748b;
  --gray-600:       #475569;
  --gray-700:       #334155;
  --gray-800:       #1e293b;
  --gray-900:       #0f172a;
  --success:        #16a34a;
  --success-light:  #dcfce7;
  --warning:        #d97706;
  --warning-light:  #fef3c7;
  --danger:         #dc2626;
  --danger-light:   #fee2e2;
  --bg-body:        #ffffff;
  --bg-section:     #f8fafc;
  --bg-card:        #ffffff;
  --text-primary:   #1e293b;
  --text-secondary: #475569;
  --text-muted:     #94a3b8;
  --border-color:   #e2e8f0;
  --shadow-sm:      0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md:      0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);
  --shadow-lg:      0 10px 30px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.04);
  --radius-sm:      6px;
  --radius-md:      10px;
  --radius-lg:      16px;
  --radius-xl:      24px;
  --transition:     all 0.2s ease;
  --font-primary:   'Public Sans', 'Noto Sans Bengali', sans-serif;
  --font-bengali:   'Noto Sans Bengali', 'Public Sans', sans-serif;
}

CDN links (include in <head> of every page):
- Bootstrap 5.3.3 CSS: https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css
- Bootstrap Icons 1.11.3: https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css
- Google Fonts: https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700&family=Public+Sans:wght@300;400;500;600;700&display=swap
- Bootstrap 5.3.3 JS: https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js

Stylesheet load order in <head>:
<link rel="stylesheet" href="assets/css/variables.css">
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="assets/css/responsive.css">

Script at bottom of <body>:
<script src="assets/js/app.js"></script>

RULES — NEVER BREAK:
- NEVER use any hardcoded hex, rgb, or hsl color in CSS or inline styles.
- Every color must reference a CSS variable.
- No jQuery, no React, no Tailwind, no Vue.
- No inline styles except JS-driven dynamic values.
- BEM-inspired CSS class names (.teacher-card, .filter-tabs, etc.)
- const/let only in JS — no var. Arrow functions. Descriptive names.

═══════════════════════════════════════════════════════════
REUSABLE COMPONENTS (already built in style.css — reuse exact markup)
═══════════════════════════════════════════════════════════

──────────────────────────────────────────────
NAVBAR (copy exact structure from index.html)
──────────────────────────────────────────────
Two-layer sticky navbar:

LAYER 1 — .topbar
  Background: var(--primary-dark) | Height: 36px | Font-size: 12px
  Left: 🇧🇩 "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার" | "জাতীয় শিক্ষা সপ্তাহ ২০২৫"
  Right: bi-telephone-fill +880 2-XXXXXXXX | bi-envelope-fill info@adarshaschool.edu.bd
         Facebook icon | YouTube icon
  Hidden on mobile: d-none d-xl-flex

LAYER 2 — .main-navbar (navbar navbar-expand-xl, sticky top-0, z-index 1030)
  Background: var(--white) | Border-bottom: 1px solid var(--border-color)
  Height: 70px | JS adds .scrolled class (box-shadow: var(--shadow-md)) on scrollY > 50

  Logo: assets/images/logo.png (48px) + "আদর্শ উচ্চ বিদ্যালয় ও কলেজ" (Bengali, 17px, 700)
        + "Adarsha High School & College, Dhaka" (11px, var(--text-secondary))

  Nav links (font-size 13.5px, font-weight 500):
    1. হোম → index.html
    2. আমাদের বিদ্যালয় → dropdown: ইতিহাস (about.html#history) | লক্ষ্য ও উদ্দেশ্য (about.html#mission) | প্রতিষ্ঠান তথ্য (institute-info.html)
    3. প্রশাসন → dropdown: প্রধান শিক্ষকের বাণী (head-teacher.html) | পরিচালনা কমিটি (committee.html) | শিক্ষক-কর্মচারী (teachers.html) ← ACTIVE
    4. একাডেমিক → dropdown: একাডেমিক ক্যালেন্ডার (academic.html#calendar) | শ্রেণি রুটিন (academic.html#routine) | সিলেবাস (academic.html#syllabus) | পরীক্ষার তথ্য (academic.html#exam) | ফলাফল (results.html)
    5. ভর্তি → admission.html
    6. নোটিশ বোর্ড → notices.html
    7. গ্যালারি → gallery.html
    8. যোগাযোগ → contact.html

  Right: "ভর্তি আবেদন" button (var(--accent), bi-pencil-square) + search icon button
  Active page: "শিক্ষক-কর্মচারী" link has aria-current="page" and active style

──────────────────────────────────────────────
PAGE HERO BANNER
──────────────────────────────────────────────
Height: 180px
Background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)
Content (centered):
  - Breadcrumb: হোম / প্রশাসন / শিক্ষক ও কর্মচারী
    (white links, separator "›", current page non-link, font-size 13px, opacity 0.85)
  - H1: "শিক্ষক ও কর্মচারী" (white, font-family var(--font-bengali), font-size 28px, font-weight 700)
  - Subtitle: "Teachers & Staff" (rgba white 0.75, font-size 14px, margin-top 6px)

──────────────────────────────────────────────
SECTION HEADER COMPONENT
──────────────────────────────────────────────
.section-header (text-align: center, margin-bottom: 48px):
  - Bengali title: font-family var(--font-bengali), font-size 28px, font-weight 700,
                   color var(--text-primary), letter-spacing -0.01em
  - English subtitle: font-size 14px, color var(--text-secondary), margin-top 6px
  - Decorative underline: 48px wide, 3px tall, border-radius 2px,
    background: linear-gradient(90deg, var(--primary) 60%, var(--accent) 100%),
    centered, margin-top 12px

──────────────────────────────────────────────
FOOTER (copy exact structure from index.html)
──────────────────────────────────────────────
FOOTER TOP STRIP (.footer-top-strip)
  Background: var(--primary) | Padding: 20px 0
  Left: "🎓 ২০২৫ সালের ভর্তি কার্যক্রম চলছে" (white, font-weight 600)
  Right: "ভর্তির জন্য আবেদন করুন" button (var(--accent))

FOOTER MAIN (.footer-main)
  Background: var(--primary-dark) | Padding: 56px 0 32px | Color: rgba(255,255,255,0.80)
  4 columns (col-xl-3, col-lg-3, col-md-6):

  Col 1 — About:
    Logo (40px) + "আদর্শ উচ্চ বিদ্যালয় ও কলেজ" (white, 16px, 700)
    English name (rgba white 0.6, 12px) | HR (rgba white 0.15)
    Short Bengali description | EIIN badge "EIIN: 123456"
    Social icons: Facebook, YouTube, Twitter/X (32px circles, rgba white 0.1, hover var(--accent))

  Col 2 — দ্রুত লিঙ্ক:
    হোম | আমাদের বিদ্যালয় | শিক্ষক ও কর্মচারী | নোটিশ বোর্ড | ফলাফল | যোগাযোগ
    Each: bi-chevron-right icon + link (rgba white 0.75, hover white, padding 4px 0)

  Col 3 — একাডেমিক লিঙ্ক:
    একাডেমিক ক্যালেন্ডার | ভর্তি তথ্য | পরীক্ষার রুটিন | সিলেবাস | বৃত্তি তথ্য | ডাউনলোড
    Same link style as Col 2

  Col 4 — যোগাযোগ:
    bi-geo-alt-fill: আদর্শ রোড, মিরপুর, ঢাকা-১২১৬
    bi-telephone-fill: +880 2-XXXXXXXX
    bi-envelope-fill: info@adarshaschool.edu.bd
    bi-clock-fill: সোম–শুক্র, সকাল ৯টা – বিকেল ৫টা
    Each: icon (var(--primary-light), 14px) + text (rgba white 0.75, 13px)

FOOTER BOTTOM (.footer-bottom)
  Background: rgba(0,0,0,0.20) on top of primary-dark | Padding: 16px 0
  Border-top: 1px solid rgba(255,255,255,0.08)
  Left: "© ২০২৫ আদর্শ উচ্চ বিদ্যালয় ও কলেজ। সর্বস্বত্ব সংরক্ষিত।" (13px, rgba white 0.6)
  Right: "Developed with ❤️ for Education" (13px, rgba white 0.5)

═══════════════════════════════════════════════════════════
PAGE: teachers.html — FULL SPECIFICATION
═══════════════════════════════════════════════════════════

HTML: <!DOCTYPE html> | lang="bn" | dir="ltr"
<title>শিক্ষক ও কর্মচারী | আদর্শ উচ্চ বিদ্যালয় ও কলেজ</title>
Meta: description, keywords, og:title, og:description, og:type, canonical

Structure:
<header> topbar + main-navbar </header>
<main id="main-content">
  page hero banner
  section#teacher-list (padding: 80px 0, background: var(--bg-body))
  section#staff-list   (padding: 80px 0, background: var(--bg-section))
</main>
<footer> footer-top-strip + footer-main + footer-bottom </footer>

──────────────────────────────────────────────
SECTION 1 — TEACHER LIST  (#teacher-list)
──────────────────────────────────────────────
Background: var(--bg-body) | Padding: 80px 0

Section header:
  Bengali: "আমাদের শিক্ষকবৃন্দ"
  English: "Our Teaching Faculty"

──────────────────────────────
SEARCH + FILTER BAR
──────────────────────────────
Wrapper (.filter-bar):
  display: flex | flex-wrap: wrap | gap: 16px | align-items: center
  margin-bottom: 40px
  padding: 20px 24px
  background: var(--gray-50)
  border: 1px solid var(--border-color)
  border-radius: var(--radius-md)

Search input (.search-input):
  flex: 1 | min-width: 220px
  height: 42px
  padding: 0 16px 0 42px  ← icon inside left
  border: 1px solid var(--border-color)
  border-radius: var(--radius-sm)
  font-size: 14px
  background: var(--white)
  color: var(--text-primary)
  outline on focus: 2px solid var(--primary)
  Placeholder: "শিক্ষকের নাম বা বিষয় লিখুন..."
  Left icon: bi-search (position absolute, var(--text-muted), 14px)
  id="teacherSearch"

Department filter tabs (.filter-tabs):
  display: flex | flex-wrap: wrap | gap: 8px
  Each tab (.filter-tab):
    button element
    padding: 8px 18px
    border: 1px solid var(--border-color)
    border-radius: var(--radius-sm)
    font-size: 13px
    font-weight: 500
    background: var(--white)
    color: var(--text-secondary)
    cursor: pointer
    transition: var(--transition)
    data-department attribute for JS filtering

  Active tab (.filter-tab.active):
    background: var(--primary)
    color: var(--white)
    border-color: var(--primary)

  Tabs (8 total):
    data-department="all"       → "সকল বিভাগ"
    data-department="principal" → "প্রশাসন"
    data-department="science"   → "বিজ্ঞান"
    data-department="arts"      → "মানবিক"
    data-department="commerce"  → "বাণিজ্য"
    data-department="bangla"    → "বাংলা"
    data-department="english"   → "ইংরেজি"
    data-department="religious" → "ধর্ম ও নৈতিকতা"

Results count (.results-count):
  font-size: 13px | color: var(--text-muted) | margin-left: auto
  Text: "মোট X জন শিক্ষক পাওয়া গেছে" (updated by JS)

──────────────────────────────
TEACHER CARD GRID
──────────────────────────────
CSS Grid: grid-template-columns: repeat(auto-fill, minmax(220px, 1fr))
gap: 24px
id="teacherGrid"

Each card (.teacher-card):
  background: var(--bg-card)
  border: 1px solid var(--border-color)
  border-radius: var(--radius-md)
  padding: 28px 20px 22px
  text-align: center
  box-shadow: var(--shadow-sm)
  transition: var(--transition)
  data-department="[value]"
  data-name="[Bengali name in lowercase for search]"
  data-subject="[subject in lowercase for search]"

  hover:
    transform: translateY(-4px)
    box-shadow: var(--shadow-md)
    border-color: var(--primary-border)

  PHOTO CIRCLE:
    width: 96px | height: 96px | border-radius: 50%
    margin: 0 auto 16px
    background: var(--primary-light)
    border: 3px solid var(--primary-border)
    display: flex | align-items: center | justify-content: center
    overflow: hidden
    icon fallback: bi-person-fill (40px, var(--primary)) if no image
    For cards WITH image: <img src="assets/images/teacher-N.jpg" alt="[name]"
                               style="width:100%;height:100%;object-fit:cover">

  DEPARTMENT BADGE:
    display: inline-block | margin-bottom: 10px
    padding: 3px 12px
    background: var(--primary-subtle)
    color: var(--primary)
    border: 1px solid var(--primary-border)
    border-radius: 20px
    font-size: 11px
    font-weight: 500

  NAME:
    font-family: var(--font-bengali)
    font-size: 15px | font-weight: 600
    color: var(--text-primary)
    margin-bottom: 4px

  DESIGNATION:
    font-size: 13px | font-weight: 500
    color: var(--primary)
    margin-bottom: 8px

  DIVIDER:
    width: 32px | height: 2px
    background: var(--primary-border)
    margin: 8px auto
    border-radius: 2px

  SUBJECT:
    font-size: 12px | color: var(--text-secondary)
    margin-bottom: 4px
    icon: bi-book me-1 (var(--text-muted))

  QUALIFICATION:
    font-size: 12px | color: var(--text-muted)
    icon: bi-mortarboard me-1

  NO RESULTS STATE (#noResultsMsg, hidden by default):
    text-align: center | padding: 60px 20px | grid-column: 1/-1
    icon: bi-search (48px, var(--text-muted))
    text: "কোনো শিক্ষক পাওয়া যায়নি" (var(--text-secondary), 16px)
    subtext: "অনুসন্ধানের শব্দ পরিবর্তন করুন অথবা ভিন্ন বিভাগ বেছে নিন" (var(--text-muted), 13px)

──────────────────────────────
TEACHER DATA — 16 teachers total
──────────────────────────────
All photo circles use the icon fallback (bi-person-fill).
data-name and data-subject in lowercase Bengali (for JS search matching).

 # | Department  | Name (Bengali)                    | Designation              | Subject              | Qualification
---|-------------|-----------------------------------|--------------------------|----------------------|---------------------
 1 | principal   | জনাব মোহাম্মদ আবদুল করিম         | প্রধান শিক্ষক            | প্রশাসন              | এম.এ, বি.এড
 2 | principal   | জনাব মোহাম্মদ রফিকুল ইসলাম       | সহকারী প্রধান শিক্ষক    | প্রশাসন              | এম.এস.সি, বি.এড
 3 | science     | জনাব মোহাম্মদ কামরুল হাসান        | সিনিয়র শিক্ষক           | পদার্থবিজ্ঞান        | এম.এস.সি (পদার্থ)
 4 | science     | জনাবা নাজমা বেগম                  | সিনিয়র শিক্ষক           | রসায়নবিজ্ঞান         | এম.এস.সি (রসায়ন)
 5 | science     | জনাব মোহাম্মদ শাহজাহান             | শিক্ষক                   | জীববিজ্ঞান           | এম.এস.সি (জীববিজ্ঞান)
 6 | science     | জনাব মোহাম্মদ আনোয়ার হোসেন       | শিক্ষক                   | উচ্চতর গণিত          | এম.এস.সি (গণিত)
 7 | arts        | জনাবা সালমা খাতুন                 | সিনিয়র শিক্ষক           | ইতিহাস               | এম.এ (ইতিহাস)
 8 | arts        | জনাব মোহাম্মদ জাহাঙ্গীর আলম       | শিক্ষক                   | ভূগোল ও পরিবেশ       | এম.এ (ভূগোল)
 9 | arts        | জনাবা রহিমা বেগম                  | শিক্ষক                   | পৌরনীতি ও নাগরিকতা   | এম.এস.এস
10 | commerce    | জনাব মোহাম্মদ মোস্তফা কামাল       | সিনিয়র শিক্ষক           | হিসাববিজ্ঞান         | এম.কম
11 | commerce    | জনাবা ফাতেমা বেগম                 | শিক্ষক                   | ব্যবসায় উদ্যোগ       | এম.বি.এ
12 | bangla      | জনাব মোহাম্মদ নূরুল ইসলাম         | সিনিয়র শিক্ষক           | বাংলা ভাষা ও সাহিত্য | এম.এ (বাংলা)
13 | bangla      | জনাবা মোসাম্মৎ আমেনা বেগম        | শিক্ষক                   | বাংলা                | এম.এ (বাংলা), বি.এড
14 | english     | জনাব মোহাম্মদ সাইফুল ইসলাম        | সিনিয়র শিক্ষক           | ইংরেজি               | এম.এ (ইংরেজি), বি.এড
15 | english     | জনাবা শামীমা আক্তার               | শিক্ষক                   | ইংরেজি               | এম.এ (ইংরেজি)
16 | religious   | জনাব মোহাম্মদ আবদুস সালাম         | শিক্ষক                   | ইসলাম ধর্ম ও নৈতিকতা | এম.এ (ইসলামিক স্টাডিজ)

──────────────────────────────────────────────
SECTION 2 — STAFF LIST  (#staff-list)
──────────────────────────────────────────────
Background: var(--bg-section) | Padding: 80px 0

Section header:
  Bengali: "কর্মচারীবৃন্দ"
  English: "Administrative & Support Staff"

Responsive table (.staff-table):
  Wrapper: overflow-x: auto | border-radius: var(--radius-md)
            border: 1px solid var(--border-color) | box-shadow: var(--shadow-sm)

  <table class="table table-hover mb-0">

  THEAD:
    background: var(--primary)
    color: var(--white)
    font-size: 13px | font-weight: 600 | font-family: var(--font-bengali)
    th padding: 14px 16px
    Columns: ক্রমিক | নাম | পদবি | বিভাগ | যোগদানের তারিখ | স্ট্যাটাস

  TBODY:
    font-size: 13.5px | font-family: var(--font-bengali)
    Odd rows: background var(--white)
    Even rows: background var(--gray-50)
    Row hover: background var(--primary-subtle)
    td padding: 12px 16px

  STATUS BADGE:
    Active: background var(--success-light), color var(--success),
            border-radius var(--radius-sm), padding 3px 10px, font-size 11px
    On Leave: background var(--warning-light), color var(--warning), same style

  Staff data (8 rows):
    1 | মোহাম্মদ রহিমুল হক      | অফিস সহকারী       | প্রশাসন    | ০১/০৩/২০১০ | সক্রিয়
    2 | মোসাম্মৎ নাসরিন বেগম   | হিসাব সহকারী      | হিসাব      | ১৫/০৭/২০১২ | সক্রিয়
    3 | মোহাম্মদ আলাউদ্দিন      | লাইব্রেরিয়ান      | লাইব্রেরি  | ০১/০১/২০০৮ | সক্রিয়
    4 | মোহাম্মদ জলিল মিয়া     | কম্পিউটার অপারেটর | আইটি       | ১০/০৯/২০১৫ | সক্রিয়
    5 | মোহাম্মদ সিরাজুল ইসলাম  | নিরাপত্তা প্রহরী   | নিরাপত্তা  | ০১/০৬/২০০৫ | সক্রিয়
    6 | মোসাম্মৎ রোকেয়া বেগম   | আয়া               | পরিচ্ছন্নতা | ১২/০২/২০১৪ | সক্রিয়
    7 | মোহাম্মদ কবির হোসেন     | মালি               | রক্ষণাবেক্ষণ | ০৫/০৫/২০১১ | সক্রিয়
    8 | মোহাম্মদ শফিকুল ইসলাম   | দপ্তরি             | প্রশাসন    | ২০/১১/২০১৭ | ছুটিতে

═══════════════════════════════════════════════════════════
JAVASCRIPT — teachers.html specific (add to app.js or inline <script>)
═══════════════════════════════════════════════════════════

// ── TEACHER FILTER & SEARCH ──────────────────────────────

const teacherSearch   = document.getElementById('teacherSearch');
const filterTabs      = document.querySelectorAll('.filter-tab');
const teacherCards    = document.querySelectorAll('.teacher-card');
const noResultsMsg    = document.getElementById('noResultsMsg');
const resultsCount    = document.getElementById('resultsCount');

let activeFilter = 'all';

const applyFilters = () => {
  const query = teacherSearch.value.toLowerCase().trim();
  let visible = 0;

  teacherCards.forEach(card => {
    const name    = card.dataset.name    || '';
    const subject = card.dataset.subject || '';
    const dept    = card.dataset.department;

    const matchSearch = !query || name.includes(query) || subject.includes(query);
    const matchFilter = activeFilter === 'all' || dept === activeFilter;

    const show = matchSearch && matchFilter;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  noResultsMsg.style.display = visible === 0 ? 'block' : 'none';
  resultsCount.textContent   = `মোট ${visible} জন শিক্ষক পাওয়া গেছে`;
};

// Tab click
filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeFilter = tab.dataset.department;
    applyFilters();
  });
});

// Live search on keyup (debounced 200ms)
let searchTimeout;
teacherSearch.addEventListener('keyup', () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(applyFilters, 200);
});

// Initialize count on load
applyFilters();

// ── SCROLL ANIMATIONS ────────────────────────────────────

const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.animate-fade-up').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  animObserver.observe(el);
});

// ── NAVBAR SCROLL SHADOW ─────────────────────────────────

window.addEventListener('scroll', () => {
  document.querySelector('.main-navbar')
    ?.classList.toggle('scrolled', window.scrollY > 50);
});

// ── ACTIVE NAV LINK ──────────────────────────────────────

document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') === 'teachers.html') {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});

═══════════════════════════════════════════════════════════
ACCESSIBILITY & SEO
═══════════════════════════════════════════════════════════

- <html lang="bn" dir="ltr">
- One <h1> on the page (inside the hero banner)
- Heading hierarchy: h1 (hero) → h2 (section headers) → h3 (card names)
- All images: descriptive alt attributes
- Search input: <label for="teacherSearch"> (visually hidden if needed)
- Filter buttons: aria-pressed="true/false" toggled by JS on active state
- Table: <caption> element "শিক্ষক ও কর্মচারী তালিকা"
- Focus-visible ring: outline: 2px solid var(--primary); outline-offset: 2px on all interactive elements
- aria-current="page" on active nav link

═══════════════════════════════════════════════════════════
RESPONSIVE BEHAVIOUR
═══════════════════════════════════════════════════════════

- xs (<576px):  teacher grid 1 column | filter tabs wrap | search full width
- sm (≥576px):  teacher grid 2 columns
- md (≥768px):  teacher grid 3 columns | filter bar flex-row
- lg (≥992px):  teacher grid 4 columns
- xl (≥1200px): teacher grid 4–5 columns (auto-fill minmax 220px)
- Staff table: horizontally scrollable on mobile (overflow-x: auto wrapper)
- Top bar (.topbar): d-none d-xl-flex (hidden below xl)
- Mobile navbar: hamburger, full-width collapsed menu

═══════════════════════════════════════════════════════════
FINAL CHECKLIST
═══════════════════════════════════════════════════════════

[ ] <!DOCTYPE html>, lang="bn", proper <head> with all CDN links
[ ] Topbar + sticky main-navbar with all 8 nav items and correct dropdowns
[ ] "শিক্ষক-কর্মচারী" marked active (aria-current="page")
[ ] Page hero banner (180px, gradient, breadcrumb, h1, subtitle)
[ ] Filter bar: search input + 8 department tabs + results counter
[ ] 16 teacher cards with correct data-department, data-name, data-subject
[ ] No-results message (hidden by default)
[ ] Staff table with 8 rows, status badges, proper thead styling
[ ] Full footer (top strip + 4-column main + bottom bar)
[ ] All JS: filter, search, scroll animation, navbar scroll, active link
[ ] Zero hardcoded colors — every color via CSS variable
[ ] No inline styles except JS-driven values
[ ] All interactive elements have focus-visible ring
[ ] WCAG AA contrast on all text
[ ] Responsive at all Bootstrap breakpoints
[ ] 100% complete code — no placeholder comments, no "TODO", no "add content here"