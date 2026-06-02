Build the complete `academic.html` page for the Adarsha High School & College website.
Use the established design system. Output: academic.html only (reference existing CSS/JS files).

═══════════════════════════════════════════════════════════
DESIGN SYSTEM (already in variables.css — just reference these)
═══════════════════════════════════════════════════════════

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
  --gray-200: #e2e8f0; --gray-300: #cbd5e1; --gray-400: #94a3b8;
  --gray-500: #64748b; --gray-600: #475569; --gray-700: #334155;
  --gray-800: #1e293b; --gray-900: #0f172a;
  --success: #16a34a; --success-light: #dcfce7;
  --warning: #d97706; --warning-light: #fef3c7;
  --danger: #dc2626;  --danger-light: #fee2e2;
  --text-primary: #1e293b; --text-secondary: #475569; --text-muted: #94a3b8;
  --border-color: #e2e8f0;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
  --shadow-lg: 0 10px 30px rgba(0,0,0,0.10);
  --radius-sm: 6px; --radius-md: 10px; --radius-lg: 16px; --radius-xl: 24px;
  --font-primary: 'Public Sans', 'Noto Sans Bengali', sans-serif;
  --font-bengali: 'Noto Sans Bengali', 'Public Sans', sans-serif;
  --transition: all 0.2s ease;
}

CDN links (include in <head>):
- Bootstrap 5.3.3 CSS: https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css
- Bootstrap Icons 1.11.3: https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css
- Google Fonts: https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700&family=Public+Sans:wght@300;400;500;600;700&display=swap
- Bootstrap JS: https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js

External files already built (just link, do not rewrite):
  <link rel="stylesheet" href="assets/css/variables.css">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/css/responsive.css">
  <script src="assets/js/app.js"></script>

═══════════════════════════════════════════════════════════
SCHOOL DATA
═══════════════════════════════════════════════════════════

School Name (Bengali): আদর্শ উচ্চ বিদ্যালয় ও কলেজ
School Name (English): Adarsha High School & College
Location: Dhaka, Bangladesh
EIIN: 123456 | Established: 1965
Phone: +880 2-XXXXXXXX | Email: info@adarshaschool.edu.bd

═══════════════════════════════════════════════════════════
HTML SHELL
═══════════════════════════════════════════════════════════

<!DOCTYPE html>
<html lang="bn" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="আদর্শ উচ্চ বিদ্যালয় ও কলেজ — একাডেমিক তথ্য, ক্যালেন্ডার, রুটিন, সিলেবাস, পরীক্ষা">
  <meta property="og:title" content="একাডেমিক | আদর্শ উচ্চ বিদ্যালয় ও কলেজ">
  <meta property="og:type" content="website">
  <title>একাডেমিক | আদর্শ উচ্চ বিদ্যালয় ও কলেজ</title>
  [CDN links] [CSS links]
</head>
<body>
  <header> [NAVBAR — see spec below] </header>
  <main id="main-content">
    [PAGE HERO BANNER]
    [TAB NAVIGATION]
    [TAB CONTENT PANELS]
  </main>
  <footer> [FOOTER — see spec below] </footer>
  [Bootstrap JS] [app.js]
</body>
</html>

═══════════════════════════════════════════════════════════
COMPONENT: NAVBAR (copy exactly from index.html)
═══════════════════════════════════════════════════════════

Two-layer sticky navbar:

LAYER 1 — TOPBAR (.topbar):
  background: var(--primary-dark) | height: 36px | font-size: 12px
  Left: 🇧🇩 "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার" | " | " | "জাতীয় শিক্ষা সপ্তাহ ২০২৫"
  Right: bi-telephone-fill +880 2-XXXXXXXX | bi-envelope-fill info@adarshaschool.edu.bd | Facebook | YouTube icons
  Hidden on mobile: d-none d-xl-flex

LAYER 2 — MAIN NAVBAR (.main-navbar navbar navbar-expand-xl):
  background: var(--white) | border-bottom: 1px solid var(--border-color) | height: 70px
  Sticky: position sticky; top: 0; z-index: 1030
  JS scroll → adds .scrolled → box-shadow: var(--shadow-md)

  Logo: assets/images/logo.png (48px) + Bengali name (17px, 700, --font-bengali, --primary-dark) + English name (11px, 400, --text-secondary)

  Nav items (font-size 13.5px, font-weight 500):
    হোম → index.html
    আমাদের বিদ্যালয় → dropdown: ইতিহাস (about.html#history) | লক্ষ্য ও উদ্দেশ্য (about.html#mission) | প্রতিষ্ঠান তথ্য (institute-info.html)
    প্রশাসন → dropdown: প্রধান শিক্ষকের বাণী (head-teacher.html) | পরিচালনা কমিটি (committee.html) | শিক্ষক-কর্মচারী (teachers.html)
    একাডেমিক → dropdown [ACTIVE PAGE]: একাডেমিক ক্যালেন্ডার (#calendar) | শ্রেণি রুটিন (#routine) | সিলেবাস (#syllabus) | পরীক্ষার তথ্য (#exam) | ফলাফল (results.html)
    ভর্তি → admission.html
    নোটিশ বোর্ড → notices.html
    গ্যালারি → gallery.html
    যোগাযোগ → contact.html

  Dropdown style: bg white | border var(--border-color) | radius var(--radius-md) | shadow var(--shadow-lg) | min-width 220px
  Dropdown item hover: bg var(--primary-subtle) | color var(--primary) | border-left: 3px solid var(--primary)

  Right buttons:
    "ভর্তি আবেদন" → bg var(--accent), white, radius var(--radius-sm), 13px, 600, padding 8px 18px, icon bi-pencil-square
    Search icon → transparent, border var(--border-color), 36×36px, bi-search, hover bg var(--primary-subtle)

═══════════════════════════════════════════════════════════
COMPONENT: PAGE HERO BANNER
═══════════════════════════════════════════════════════════

<section class="page-hero">
  Background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)
  Height: 180px | display flex | align-items center

  Content (container):
    Breadcrumb (top): color rgba(255,255,255,0.70), font-size 13px
      হোম <i class="bi bi-chevron-right"></i> একাডেমিক
      aria-label="breadcrumb"

    Title block:
      <h1>একাডেমিক তথ্য</h1>
        font-family: var(--font-bengali) | font-size: 28px | font-weight: 700 | color: white | margin-bottom: 4px
      <p>Academic Information</p>
        font-size: 14px | color: rgba(255,255,255,0.75)
</section>

═══════════════════════════════════════════════════════════
MAIN CONTENT: TAB SYSTEM
═══════════════════════════════════════════════════════════

Wrapper: <section class="academic-tabs-section" style="padding: 56px 0; background: var(--gray-50)">

──────────────────────────────────────────────
TAB NAV (.academic-tab-nav)
──────────────────────────────────────────────
Sticky below navbar: position sticky; top: 70px; z-index: 100; background: var(--white); border-bottom: 1px solid var(--border-color); box-shadow: var(--shadow-sm)

Use Bootstrap nav-tabs or custom tabs:
  <ul class="nav academic-tab-nav" id="academicTab" role="tablist">

6 tabs (Bengali label + Bootstrap icon):
  1. id="calendar-tab"   → <i class="bi bi-calendar3"></i> একাডেমিক ক্যালেন্ডার
  2. id="routine-tab"    → <i class="bi bi-clock"></i> শ্রেণি রুটিন
  3. id="syllabus-tab"   → <i class="bi bi-journal-text"></i> সিলেবাস
  4. id="exam-tab"       → <i class="bi bi-pencil"></i> পরীক্ষার তথ্য
  5. id="results-tab"    → <i class="bi bi-bar-chart"></i> ফলাফল
  6. id="promotion-tab"  → <i class="bi bi-arrow-up-circle"></i> প্রমোশন বিধি

Tab styles:
  Each tab: font-size 13.5px | font-weight 500 | font-family var(--font-bengali) | padding 14px 20px | color var(--text-secondary) | border: none | border-bottom: 3px solid transparent | transition var(--transition)
  Active tab: color var(--primary) | border-bottom: 3px solid var(--primary) | background transparent
  Hover: color var(--primary) | background var(--primary-subtle)
  On mobile (< 768px): horizontally scrollable, white-space: nowrap, overflow-x: auto

Tab pane wrapper: <div class="tab-content" id="academicTabContent" style="padding: 48px 0">

──────────────────────────────────────────────
TAB 1 — একাডেমিক ক্যালেন্ডার  (id="calendar")
──────────────────────────────────────────────
Active by default.
Background: var(--white)

Section header (centered):
  Bengali: "একাডেমিক ক্যালেন্ডার ২০২৫"
  English: "Academic Calendar 2025"
  Decorative underline: 40px bar — var(--primary) left half, var(--accent) right half

Layout: 2-column grid on lg+ (col-lg-8 left, col-lg-4 right)

LEFT — Month-by-month event timeline table:
  <table class="table table-hover academic-table">
    thead: background var(--primary) | color white | font-family var(--font-bengali)
    Columns: মাস | তারিখ | কার্যক্রম | ধরন (badge)

  12 rows (one per month):
  জানুয়ারি  | ১–৫ জানুয়ারি    | বার্ষিক পরীক্ষার ফলাফল প্রকাশ     | badge success  "ফলাফল"
  জানুয়ারি  | ১৫ জানুয়ারি    | ভর্তি কার্যক্রম শুরু               | badge primary  "ভর্তি"
  ফেব্রুয়ারি | ১ ফেব্রুয়ারি   | নতুন শিক্ষাবর্ষ শুরু              | badge primary  "শিক্ষাবর্ষ"
  ফেব্রুয়ারি | ২১ ফেব্রুয়ারি  | আন্তর্জাতিক মাতৃভাষা দিবস         | badge warning  "অনুষ্ঠান"
  মার্চ      | ২৬ মার্চ       | স্বাধীনতা দিবস                    | badge warning  "ছুটি"
  এপ্রিল    | ১–১৫ এপ্রিল    | অর্ধবার্ষিক পরীক্ষা               | badge danger   "পরীক্ষা"
  এপ্রিল    | ১৪ এপ্রিল      | বাংলা নববর্ষ                      | badge warning  "ছুটি"
  জুন       | ১৫–৩০ জুন      | গ্রীষ্মকালীন ছুটি                  | badge secondary "ছুটি"
  আগস্ট     | ১৫ আগস্ট       | জাতীয় শোক দিবস                   | badge warning  "ছুটি"
  অক্টোবর   | ১–১৫ অক্টোবর   | প্রাক-নির্বাচনী পরীক্ষা           | badge danger   "পরীক্ষা"
  নভেম্বর   | ১–৩০ নভেম্বর   | বার্ষিক পরীক্ষা                   | badge danger   "পরীক্ষা"
  ডিসেম্বর   | ৩১ ডিসেম্বর    | বার্ষিক পুরস্কার বিতরণী           | badge success  "অনুষ্ঠান"

  Table styles:
    .academic-table thead th: background var(--primary) | color white | font-weight 600 | font-size 13px | padding 12px 16px
    .academic-table tbody tr:hover: background var(--primary-subtle)
    .academic-table td: font-family var(--font-bengali) | font-size 14px | padding 11px 16px | vertical-align middle
    Badges: font-size 11px | font-weight 500 | border-radius var(--radius-sm) | padding 3px 10px

  Below table: "একাডেমিক ক্যালেন্ডার ডাউনলোড করুন" button
    icon: bi-download | background var(--primary) | color white | border-radius var(--radius-sm)

RIGHT — Upcoming Important Dates sidebar:
  Card: background var(--white) | border: 1px solid var(--border-color) | border-radius var(--radius-lg) | padding 24px | box-shadow var(--shadow-sm)

  Header: "গুরুত্বপূর্ণ তারিখ" | font-family var(--font-bengali) | font-size 16px | font-weight 700 | border-bottom: 2px solid var(--primary) | padding-bottom 12px | margin-bottom 16px

  List of 6 upcoming dates (.important-date-item):
    Each item: display flex | gap 14px | padding 12px 0 | border-bottom 1px solid var(--gray-100)
    Date box: width 48px | height 48px | background var(--primary-light) | border-radius var(--radius-sm) | text-align center | flex-shrink 0
      Day: font-size 18px | font-weight 700 | color var(--primary) | line-height 1
      Month: font-size 10px | color var(--text-secondary) | text-transform uppercase
    Text:
      Title: font-size 13.5px | font-weight 600 | color var(--text-primary) | font-family var(--font-bengali)
      Tag badge: font-size 10px | background var(--accent-light) | color var(--accent) | border-radius 4px | padding 2px 8px

  Data:
    01 / নভে  | বার্ষিক পরীক্ষা শুরু         | পরীক্ষা
    15 / নভে  | ব্যবহারিক পরীক্ষা            | পরীক্ষা
    31 / ডিসে | বার্ষিক পুরস্কার বিতরণী      | অনুষ্ঠান
    15 / জানু | ভর্তি আবেদন শেষ তারিখ        | ভর্তি
    01 / ফেব্ | নতুন শিক্ষাবর্ষ শুরু         | শিক্ষাবর্ষ
    21 / ফেব্ | আন্তর্জাতিক মাতৃভাষা দিবস    | অনুষ্ঠান

──────────────────────────────────────────────
TAB 2 — শ্রেণি রুটিন  (id="routine")
──────────────────────────────────────────────

Section header: "শ্রেণি রুটিন ২০২৫" / "Class Routine 2025"

Class selector row (Bootstrap btn-group, margin-bottom 32px):
  Buttons: ষষ্ঠ শ্রেণি | সপ্তম শ্রেণি | অষ্টম শ্রেণি | নবম শ্রেণি | দশম শ্রেণি
  Active: background var(--primary) | color white
  Inactive: background var(--white) | border var(--border-color) | color var(--text-primary)
  On click: JS swaps .active class, shows matching table

One responsive routine table per class (show/hide via JS):
  Columns: সময় | সোমবার | মঙ্গলবার | বুধবার | বৃহস্পতিবার | শুক্রবার

  Time slots (rows):
  ৯:০০–৯:৪৫   | ...subjects...
  ৯:৪৫–১০:৩০  | ...subjects...
  ১০:৩০–১০:৪৫ | BREAK (colspan 5, centered, background var(--warning-light), color var(--warning), font-weight 600)
  ১০:৪৫–১১:৩০ | ...subjects...
  ১১:৩০–১২:১৫ | ...subjects...
  ১২:১৫–১২:৩০ | BREAK (same style)
  ১২:৩০–১:১৫  | ...subjects...
  ১:১৫–২:০০   | ...subjects...

  Fill with subjects per class (use standard BD curriculum):
    Class 6-8 subjects: বাংলা | ইংরেজি | গণিত | বিজ্ঞান | সমাজ | ধর্ম | তথ্য ও যোগাযোগ | শারীরিক শিক্ষা | চারু ও কারুকলা
    Class 9-10 subjects: বাংলা | ইংরেজি | গণিত | পদার্থ | রসায়ন | জীববিজ্ঞান | ইতিহাস | ভূগোল | ধর্ম

  Each subject cell: font-size 12.5px | font-family var(--font-bengali) | text-align center
  Color-code by subject type:
    বাংলা/ইংরেজি: background var(--primary-light)
    গণিত: background hsl(280, 60%, 95%)
    বিজ্ঞান/পদার্থ/রসায়ন/জীববিজ্ঞান: background var(--success-light)
    সমাজ/ইতিহাস/ভূগোল: background var(--warning-light)
    ধর্ম: background hsl(40, 80%, 95%)
    Others: background var(--gray-100)

  Table header row: background var(--primary) | color white | font-weight 600

Below table: download button per class — "রুটিন ডাউনলোড করুন (PDF)" | icon bi-download

──────────────────────────────────────────────
TAB 3 — সিলেবাস  (id="syllabus")
──────────────────────────────────────────────

Section header: "সিলেবাস ও পাঠ্যক্রম" / "Syllabus & Curriculum"

3 horizontal filter tabs (Bootstrap nav-pills, margin-bottom 32px):
  নিম্ন মাধ্যমিক (৬ষ্ঠ–৮ম) | মাধ্যমিক (৯ম–১০ম) | উচ্চ মাধ্যমিক (একাদশ–দ্বাদশ)

For each level, show a subject card grid (col-lg-4, col-sm-6):

  Subject card (.syllabus-card):
    background var(--white) | border: 1px solid var(--border-color) | border-radius var(--radius-md)
    border-top: 4px solid [subject color] | padding 20px | box-shadow var(--shadow-sm)
    hover: shadow-md | translateY(-2px)

    Icon: Bootstrap icon (24px, subject color) at top
    Subject name: font-family var(--font-bengali) | font-weight 700 | font-size 15px | margin-top 10px
    Class range badge: background var(--primary-light) | color var(--primary) | font-size 11px
    Chapter list (ul, no bullets):
      Each chapter: font-size 12.5px | color var(--text-secondary) | font-family var(--font-bengali)
      padding: 4px 0 | border-bottom: 1px dashed var(--border-color)
      Prefix: chapter number in var(--primary)
    Download link: "সিলেবাস PDF" | color var(--accent) | font-size 12px | icon bi-file-earmark-pdf

  Subjects for নিম্ন মাধ্যমিক (৬ষ্ঠ–৮ম):
    1. বাংলা (bi-book, --primary) — ৫টি অধ্যায়: গদ্য | পদ্য | ব্যাকরণ | রচনা | পত্রলেখন
    2. ইংরেজি (bi-translate, var(--info))) — Grammar | Reading | Writing | Listening | Literature
    3. গণিত (bi-calculator, hsl(280,60%,45%)) — সংখ্যা | বীজগণিত | জ্যামিতি | পরিমাপ | পরিসংখ্যান
    4. বিজ্ঞান (bi-eyedropper, var(--success)) — পদার্থ | রসায়ন | জীববিজ্ঞান | পরিবেশ | স্বাস্থ্য
    5. বাংলাদেশ ও বিশ্বপরিচয় (bi-globe, var(--warning)) — ইতিহাস | ভূগোল | নাগরিকতা | অর্থনীতি | সমাজ
    6. ধর্ম ও নৈতিক শিক্ষা (bi-heart, hsl(0,60%,55%)) — আকীদা | ইবাদত | আখলাক | মুআমালাত | ইতিহাস
    7. তথ্য ও যোগাযোগ প্রযুক্তি (bi-laptop, var(--info)) — কম্পিউটার | ইন্টারনেট | MS Office | প্রোগ্রামিং | নিরাপত্তা
    8. শারীরিক শিক্ষা (bi-person-walking, var(--success)) — শরীরচর্চা | খেলাধুলা | স্বাস্থ্যবিধি | প্রাথমিক চিকিৎসা | পুষ্টি
    9. চারু ও কারুকলা (bi-palette, hsl(300,50%,50%)) — চিত্রকলা | মৃৎশিল্প | কাগজশিল্প | বুননশিল্প | নকশাকলা

  Subjects for মাধ্যমিক (৯ম–১০ম) — Science Group:
    1. বাংলা | 2. ইংরেজি | 3. গণিত (উচ্চতর) | 4. পদার্থবিজ্ঞান | 5. রসায়ন | 6. জীববিজ্ঞান | 7. তথ্য ও যোগাযোগ প্রযুক্তি | 8. ধর্ম
    Each with 5 relevant chapter names in Bengali.

  Subjects for উচ্চ মাধ্যমিক — show 6 cards with HSC subjects.

──────────────────────────────────────────────
TAB 4 — পরীক্ষার তথ্য  (id="exam")
──────────────────────────────────────────────

Section header: "পরীক্ষার তথ্য" / "Examination Information"

Layout: 2 columns on lg+ (col-lg-7 left, col-lg-5 right)

LEFT — Exam Schedule accordion:
  Bootstrap accordion (.accordion)
  4 accordion items:

  Item 1: "অর্ধবার্ষিক পরীক্ষা ২০২৫" (Half-yearly)
    Header bg: var(--warning-light) | icon bi-pencil-square
    Body: table with columns: তারিখ | শ্রেণি | বিষয় | সময় | মোট নম্বর
    5 rows of sample data (Bengali dates, subjects)

  Item 2: "বার্ষিক পরীক্ষা ২০২৫" (Annual)
    Same table structure | 6 rows

  Item 3: "JSC/JDC পরীক্ষা" (Public exam info)
    Info card with: Registration deadline | Exam start date | Center info | Fees

  Item 4: "SSC পরীক্ষা" (Board exam info)
    Same as JSC item

Accordion item styles:
  .accordion-button: font-family var(--font-bengali) | font-size 15px | font-weight 600 | color var(--text-primary)
  .accordion-button:not(.collapsed): background var(--primary-subtle) | color var(--primary) | box-shadow none
  .accordion-button::after: filter to match var(--primary)

RIGHT — Exam Rules & Grading card column:

  Card 1 — Grading System (.grading-card):
    background var(--white) | border: 1px solid var(--border-color) | border-radius var(--radius-lg) | padding 24px | box-shadow var(--shadow-sm) | margin-bottom 24px

    Header: "গ্রেডিং সিস্টেম" | bi-bar-chart-fill | font-weight 700

    Grading table (no external border, striped):
      Columns: নম্বর | গ্রেড | গ্রেড পয়েন্ট
      Rows:
        ৮০–১০০ | A+ | 5.00  → bar color var(--success)
        ৭০–৭৯  | A  | 4.00  → bar color var(--primary)
        ৬০–৬৯  | A- | 3.50  → bar color var(--info)
        ৫০–৫৯  | B  | 3.00  → bar color var(--warning)
        ৪০–৪৯  | C  | 2.00  → bar color var(--warning)
        ৩৩–৩৯  | D  | 1.00  → bar color var(--accent)
        ০–৩২   | F  | 0.00  → bar color var(--danger)

      Each row has a small colored left-border bar (4px) matching grade color.
      Grade badge: pill shape | bg matches grade color (light) | text matches grade color

  Card 2 — Exam Rules (.exam-rules-card):
    Same card style
    Header: "পরীক্ষার নিয়মাবলী" | bi-shield-check

    Numbered list (Bengali):
      1. পরীক্ষার ৩০ মিনিট আগে কেন্দ্রে উপস্থিত হতে হবে
      2. প্রবেশপত্র ছাড়া পরীক্ষায় অংশগ্রহণ করা যাবে না
      3. পরীক্ষা কক্ষে মোবাইল ফোন সম্পূর্ণ নিষিদ্ধ
      4. নকল বা অসদুপায় অবলম্বনে বহিষ্কার করা হবে
      5. পরীক্ষার্থীকে নিজস্ব কলম ও প্রয়োজনীয় সামগ্রী আনতে হবে
      6. উত্তরপত্রের বাইরে কোনো লেখা গ্রহণযোগ্য নয়
      7. পরীক্ষা শেষ না হওয়া পর্যন্ত কক্ষ ত্যাগ নিষিদ্ধ

    Each rule: flex row | bi-check-circle-fill (var(--success)) left | text font-family var(--font-bengali) | font-size 13.5px

──────────────────────────────────────────────
TAB 5 — ফলাফল  (id="results")
──────────────────────────────────────────────

Section header: "পরীক্ষার ফলাফল" / "Examination Results"

Filter row (2 selects + button, Bootstrap row):
  Select 1: পরীক্ষার ধরন → অর্ধবার্ষিক | বার্ষিক | JSC | SSC | HSC
  Select 2: শিক্ষাবর্ষ → ২০২৫ | ২০২৪ | ২০২৩ | ২০২২
  Button: "ফলাফল দেখুন" | background var(--primary) | color white

Stats row (4 stat cards, col-lg-3):
  Card 1: bi-people-fill | "মোট পরীক্ষার্থী" | 450
  Card 2: bi-check-circle-fill | "পাশের হার" | 98%
  Card 3: bi-star-fill | "A+ প্রাপ্ত" | 87
  Card 4: bi-trophy-fill | "জিপিএ ৫" | 62

  Stat card style:
    background var(--white) | border-top: 4px solid var(--primary) | border-radius var(--radius-md) | padding 20px | text-align center | box-shadow var(--shadow-sm)
    Number: font-size 2.2rem | font-weight 700 | color var(--primary)
    Label: font-size 13px | color var(--text-secondary) | font-family var(--font-bengali)
    Icon: font-size 1.5rem | color var(--primary-light... wait — use var(--primary)) | margin-bottom 8px
    Alternating border colors: primary | success | warning | accent

Results table:
  Columns: শ্রেণি | মোট শিক্ষার্থী | পরীক্ষার্থী | পাশ | ফেল | পাশের হার | A+ | GPA 5 | ডাউনলোড
  8 rows (Class 6–10 + JSC + SSC + HSC)
  Pass rate column: progress bar (Bootstrap) + percentage text
  Download column: bi-file-earmark-pdf-fill (var(--danger)) link

  Stripe: odd rows var(--white) | even rows var(--gray-50)
  Header: background var(--primary) | color white

──────────────────────────────────────────────
TAB 6 — প্রমোশন বিধি  (id="promotion")
──────────────────────────────────────────────

Section header: "প্রমোশন ও পদোন্নতি বিধি" / "Promotion Rules"

Layout: single column, max-width 860px, centered

4 Rule cards (.promotion-rule-card):
  background var(--white) | border: 1px solid var(--border-color) | border-radius var(--radius-lg)
  border-left: 5px solid [accent color] | padding 28px | box-shadow var(--shadow-sm) | margin-bottom 24px

  Card 1 — "পাশের ন্যূনতম নম্বর" | accent: var(--primary)
    icon: bi-check2-circle (var(--primary))
    Table: বিষয় | লিখিত (ন্যূনতম) | ব্যবহারিক (ন্যূনতম) | মোট নম্বর
    Rows: বাংলা | ইংরেজি | গণিত | বিজ্ঞান | সমাজ | ধর্ম
    Min marks: written 33/100, practical 20/50 where applicable

  Card 2 — "শ্রেণি উত্তীর্ণের শর্তাবলী" | accent: var(--success)
    icon: bi-list-check (var(--success))
    Numbered checklist (5 rules in Bengali):
      1. সকল বিষয়ে ন্যূনতম পাশ নম্বর অর্জন করতে হবে
      2. মোট নম্বরের কমপক্ষে ৩৩% প্রাপ্ত হতে হবে
      3. ৭৫% উপস্থিতি বাধ্যতামূলক
      4. দুইটির বেশি বিষয়ে ফেল করলে পরবর্তী শ্রেণিতে উত্তীর্ণ হওয়া যাবে না
      5. ব্যবহারিক পরীক্ষায় উপস্থিত থাকা বাধ্যতামূলক

  Card 3 — "বিশেষ পরীক্ষা ও পুনর্মূল্যায়ন" | accent: var(--warning)
    icon: bi-arrow-repeat (var(--warning))
    Prose (Bengali, 3 paragraphs) explaining:
      - একটি বিষয়ে ফেল হলে বিশেষ পরীক্ষার সুযোগ দেওয়া হয়
      - নম্বর পুনর্মূল্যায়নের আবেদন ফলাফল প্রকাশের ৭ দিনের মধ্যে করতে হবে
      - পুনর্মূল্যায়ন ফি ৫০ টাকা প্রতি বিষয়

  Card 4 — "সম্মানী রোল ও বৃত্তি" | accent: var(--accent)
    icon: bi-trophy (var(--accent))
    3 items describing merit roll criteria:
      - মেধাতালিকায় স্থান পেতে সকল বিষয়ে A পেতে হবে
      - বৃত্তির জন্য GPA 5 এবং পৃথক আবেদন প্রয়োজন
      - মেধাবৃত্তি প্রতি শ্রেণিতে প্রথম ৩ জনকে প্রদান করা হয়

═══════════════════════════════════════════════════════════
COMPONENT: FOOTER (copy exactly from index.html)
═══════════════════════════════════════════════════════════

FOOTER TOP STRIP (.footer-top-strip):
  background: var(--primary) | padding: 20px 0
  Left: "🎓 ২০২৫ সালের ভর্তি কার্যক্রম চলছে" (white, font-weight 600)
  Right: "ভর্তির জন্য আবেদন করুন" button (background var(--accent), color white)

FOOTER MAIN (.footer-main):
  background: var(--primary-dark) | color: rgba(255,255,255,0.80) | padding: 56px 0 32px
  4-column grid (col-xl-3, col-lg-3, col-md-6):

  Col 1 — About: logo + school names + short description + EIIN badge + social icons
  Col 2 — দ্রুত লিঙ্ক: হোম | আমাদের বিদ্যালয় | প্রধান শিক্ষক | শিক্ষক-কর্মচারী | কমিটি | ভর্তি
  Col 3 — একাডেমিক লিঙ্ক: একাডেমিক ক্যালেন্ডার | শ্রেণি রুটিন | সিলেবাস | পরীক্ষার তথ্য | ফলাফল | ডাউনলোড
  Col 4 — যোগাযোগ: bi-geo-alt-fill address | bi-telephone-fill phone | bi-envelope-fill email | bi-clock office hours

  Footer link styles: color rgba(255,255,255,0.70) | hover: color white | font-size 13.5px | line-height 2.2

FOOTER BOTTOM (.footer-bottom):
  background: var(--gray-900) | padding: 16px 0 | font-size: 12px | color: rgba(255,255,255,0.50)
  Left: "© ২০২৫ আদর্শ উচ্চ বিদ্যালয় ও কলেজ। সর্বস্বত্ব সংরক্ষিত।"
  Right: "উন্নয়নে: [Developer Name]" + social icons

═══════════════════════════════════════════════════════════
INLINE CSS (inside <style> in <head>)
═══════════════════════════════════════════════════════════

Write all page-specific styles in a <style> block in <head>.
NO hardcoded colors anywhere — always use CSS variables.

Required styles:
/* Page Hero */
.page-hero { background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%); min-height: 180px; display: flex; align-items: center; }
.page-hero h1 { font-family: var(--font-bengali); font-size: 28px; font-weight: 700; color: var(--white); }
.breadcrumb-item, .breadcrumb-item a { color: rgba(255,255,255,0.75); font-size: 13px; }
.breadcrumb-item.active { color: rgba(255,255,255,0.95); }
.breadcrumb-item + .breadcrumb-item::before { color: rgba(255,255,255,0.50); }

/* Tab nav */
.academic-tab-nav { position: sticky; top: 70px; z-index: 100; background: var(--white); border-bottom: 1px solid var(--border-color); box-shadow: var(--shadow-sm); padding: 0; }
.academic-tab-nav .nav-link { font-size: 13.5px; font-weight: 500; font-family: var(--font-bengali); padding: 14px 20px; color: var(--text-secondary); border: none; border-bottom: 3px solid transparent; border-radius: 0; transition: var(--transition); white-space: nowrap; }
.academic-tab-nav .nav-link:hover { color: var(--primary); background: var(--primary-subtle); }
.academic-tab-nav .nav-link.active { color: var(--primary); border-bottom: 3px solid var(--primary); background: transparent; }
.tab-nav-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; display: flex; }

/* Section header */
.section-header { text-align: center; margin-bottom: 40px; }
.section-header h2 { font-family: var(--font-bengali); font-size: 26px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px; }
.section-header p { font-size: 14px; color: var(--text-secondary); margin-bottom: 12px; }
.section-header .header-line { width: 60px; height: 4px; margin: 0 auto; border-radius: 2px; background: linear-gradient(to right, var(--primary) 50%, var(--accent) 50%); }

/* Academic table */
.academic-table thead th { background: var(--primary); color: var(--white); font-weight: 600; font-family: var(--font-bengali); font-size: 13px; padding: 12px 16px; border: none; }
.academic-table tbody td { font-family: var(--font-bengali); font-size: 14px; padding: 11px 16px; vertical-align: middle; border-color: var(--border-color); }
.academic-table tbody tr:hover { background: var(--primary-subtle); }

/* Grading table left border */
.grade-row { border-left: 4px solid transparent; }

/* Promotion rule cards */
.promotion-rule-card { border-left: 5px solid var(--primary); background: var(--white); border-radius: var(--radius-lg); padding: 28px; box-shadow: var(--shadow-sm); margin-bottom: 24px; transition: var(--transition); }
.promotion-rule-card:hover { box-shadow: var(--shadow-md); }
.promotion-rule-card h5 { font-family: var(--font-bengali); font-weight: 700; font-size: 16px; color: var(--text-primary); margin-bottom: 16px; }

/* Syllabus cards */
.syllabus-card { background: var(--white); border: 1px solid var(--border-color); border-radius: var(--radius-md); border-top: 4px solid var(--primary); padding: 20px; box-shadow: var(--shadow-sm); height: 100%; transition: var(--transition); }
.syllabus-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
.syllabus-card h5 { font-family: var(--font-bengali); font-weight: 700; font-size: 15px; color: var(--text-primary); }
.syllabus-card ul { padding: 0; list-style: none; }
.syllabus-card ul li { font-family: var(--font-bengali); font-size: 12.5px; color: var(--text-secondary); padding: 5px 0; border-bottom: 1px dashed var(--border-color); }

/* Download button */
.btn-download { background: var(--primary); color: var(--white); border: none; border-radius: var(--radius-sm); padding: 10px 24px; font-size: 14px; font-weight: 500; display: inline-flex; align-items: center; gap: 8px; transition: var(--transition); }
.btn-download:hover { background: var(--primary-hover); color: var(--white); transform: translateY(-1px); }

/* Stat cards */
.stat-card { background: var(--white); border-top: 4px solid var(--primary); border-radius: var(--radius-md); padding: 20px; text-align: center; box-shadow: var(--shadow-sm); transition: var(--transition); }
.stat-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
.stat-card .stat-number { font-size: 2.2rem; font-weight: 700; color: var(--primary); line-height: 1; }
.stat-card .stat-label { font-size: 13px; color: var(--text-secondary); font-family: var(--font-bengali); margin-top: 6px; }

/* Scroll animations */
.animate-fade-up { opacity: 0; transform: translateY(24px); transition: opacity 0.5s ease, transform 0.5s ease; }
.animate-fade-up.visible { opacity: 1; transform: translateY(0); }

═══════════════════════════════════════════════════════════
INLINE JAVASCRIPT (inside <script> before </body>)
═══════════════════════════════════════════════════════════

1. Navbar scroll shadow:
window.addEventListener('scroll', () => {
  document.querySelector('.main-navbar').classList.toggle('scrolled', window.scrollY > 50);
});

2. Active nav link:
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') && window.location.pathname.includes('academic')) {
    if (link.textContent.includes('একাডেমিক')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  }
});

3. URL hash → auto-open tab:
const hash = window.location.hash;
if (hash) {
  const tabId = hash.replace('#', '') + '-tab';
  const tabEl = document.getElementById(tabId);
  if (tabEl) { new bootstrap.Tab(tabEl).show(); }
}

4. Routine class switcher:
document.querySelectorAll('.routine-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.routine-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.routine-table').forEach(t => t.classList.add('d-none'));
    btn.classList.add('active');
    document.getElementById('routine-' + btn.dataset.class).classList.remove('d-none');
  });
});

5. Scroll animations (IntersectionObserver):
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.animate-fade-up').forEach(el => observer.observe(el));
document.querySelectorAll('.row > [class*="col"] .animate-fade-up').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.1}s`;
});

═══════════════════════════════════════════════════════════
CODING RULES
═══════════════════════════════════════════════════════════

- lang="bn" on <html>; lang="en" on English text spans
- NEVER use hardcoded hex/rgb colors — only CSS variables
- No inline styles except JS-driven dynamic values
- No jQuery, no React, no Tailwind
- Semantic HTML: <header> <nav> <main> <section> <footer>
- One <h1> per page (in hero banner only)
- All images: descriptive alt attributes
- All form inputs: associated <label>
- ARIA: aria-current="page" on active nav link, aria-label on icon-only buttons
- Focus ring: outline: 2px solid var(--primary); outline-offset: 2px on all interactive elements
- Build 100% complete code. No "TODO" or placeholder comments. Every section fully coded with real Bengali + English content.