TASK
Build institute-info.html — the Institute Information page for আদর্শ উচ্চ বিদ্যালয় ও কলেজ.
This is a standalone HTML file. Reuse the exact navbar, footer, and CSS variable system already established in the project.

FILE REFERENCES
institute-info.html         ← the file you are building
assets/css/variables.css    ← already exists, just link it
assets/css/style.css        ← already exists, just link it
assets/css/responsive.css   ← already exists, just link it
assets/js/app.js            ← already exists, just link it

HEAD & META
html<!DOCTYPE html>
<html lang="bn" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>প্রতিষ্ঠান তথ্য | আদর্শ উচ্চ বিদ্যালয় ও কলেজ</title>
  <meta name="description" content="আদর্শ উচ্চ বিদ্যালয় ও কলেজের সম্পূর্ণ প্রতিষ্ঠান তথ্য — EIIN, স্কুল কোড, স্থাপনকাল, অনুমোদন তথ্য।">
  <meta property="og:title" content="প্রতিষ্ঠান তথ্য | আদর্শ উচ্চ বিদ্যালয় ও কলেজ">
  <meta property="og:type" content="website">
  <link rel="canonical" href="institute-info.html">
  <!-- Bootstrap 5.3.3 CSS -->
  <!-- Bootstrap Icons 1.11.3 -->
  <!-- Google Fonts: Noto Sans Bengali + Public Sans -->
  <link rel="stylesheet" href="assets/css/variables.css">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/css/responsive.css">
</head>

COMPONENT 1 — NAVBAR
Copy the exact navbar from index.html:

.topbar (top bar, hidden on mobile)
.main-navbar with logo, all nav links, dropdowns, action buttons
Active link: প্রতিষ্ঠান তথ্য item (under আমাদের বিদ্যালয় dropdown) gets aria-current="page" and active styling
JS scroll shadow behavior applies


COMPONENT 2 — PAGE HERO BANNER
Class: .page-hero
Background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)
Height: 180px
Display: flex, align-items: center

Content (container, text white):
  Breadcrumb (top):
    <nav aria-label="breadcrumb">
      হোম  ›  আমাদের বিদ্যালয়  ›  প্রতিষ্ঠান তথ্য
    Each crumb: font-size 13px, color rgba(255,255,255,0.70)
    Separator " › ": color rgba(255,255,255,0.40)
    Last crumb (current): color white, aria-current="page"

  Page Title (below breadcrumb):
    <h1>প্রতিষ্ঠান তথ্য</h1>
    font-family: var(--font-bengali)
    font-size: 28px
    font-weight: 700
    color: white
    margin-top: 8px

  Subtitle:
    "Institute Information"
    font-size: 14px
    color: rgba(255,255,255,0.75)
    font-weight: 400

COMPONENT 3 — INSTITUTE INFO TABLE SECTION
Background: var(--white)
Padding: 64px 0
3A — Section Header
Centered:
  Bengali title:  "প্রতিষ্ঠান সম্পর্কিত তথ্য"
  font-family: var(--font-bengali), font-size: 26px, font-weight: 700, color: var(--text-primary)

  English subtitle: "Complete Institute Details"
  font-size: 14px, color: var(--text-secondary), margin-top: 6px

  Decorative underline (div, margin: 12px auto 0):
    width: 48px, height: 3px, background: var(--primary), border-radius: 2px
    + second div: width: 24px, height: 3px, background: var(--accent),
                  border-radius: 2px, margin: 4px auto 0
3B — Print Button
Placed top-right of the section (text-end, margin-bottom: 24px):
  <button onclick="window.print()">
    icon: <i class="bi bi-printer-fill me-2"></i>
    Label: "প্রিন্ট করুন"
    background: var(--primary)
    color: white
    border: none
    border-radius: var(--radius-sm)
    padding: 9px 20px
    font-size: 13px
    font-weight: 600
    transition: var(--transition)
    hover: background var(--primary-hover)
3C — Main Info Table
Wrapper: .institute-table-wrapper
  background: var(--white)
  border: 1px solid var(--border-color)
  border-radius: var(--radius-lg)
  overflow: hidden
  box-shadow: var(--shadow-md)

Table: full width, no Bootstrap table classes — custom styled

Table Header Row (thead > tr):
  background: var(--primary)
  color: white
  font-family: var(--font-bengali)
  font-size: 14px
  font-weight: 600
  padding: 14px 20px
  Columns: "তথ্যের বিবরণ" | "বিস্তারিত"

Table Body (tbody):
  Alternating rows:
    Odd rows:  background var(--white)
    Even rows: background var(--gray-50)

  Each row (tr):
    border-bottom: 1px solid var(--border-color)
    transition: var(--transition)
    hover: background var(--primary-subtle)

  TD (left — label):
    width: 40%
    padding: 14px 20px
    font-family: var(--font-bengali)
    font-size: 14px
    font-weight: 600
    color: var(--text-primary)
    vertical-align: middle
    border-right: 1px solid var(--border-color)

  TD (right — value):
    padding: 14px 20px
    font-family: var(--font-bengali)
    font-size: 14px
    color: var(--text-secondary)
    vertical-align: middle
3D — Table Data (30 rows minimum)
তথ্যের বিবরণবিস্তারিতপ্রতিষ্ঠানের নাম (বাংলা)আদর্শ উচ্চ বিদ্যালয় ও কলেজপ্রতিষ্ঠানের নাম (ইংরেজি)Adarsha High School & CollegeEIIN নম্বর১২৩৪৫৬স্কুল কোড৪৫০১প্রতিষ্ঠাকাল১৯৬৫ সালপ্রতিষ্ঠানের ধরনবেসরকারি মাধ্যমিক বিদ্যালয় ও কলেজশিফটদুই শিফট (সকাল ও দুপুর)বিভাগঢাকা বিভাগজেলাঢাকাউপজেলা/থানামিরপুরঠিকানাআদর্শ রোড, মিরপুর, ঢাকা-১২১৬MPO অন্তর্ভুক্তিহ্যাঁ (MPO ভুক্ত)MPO কোড৭৮৯০১২স্বীকৃতি তারিখ১ জানুয়ারি ১৯৬৮জাতীয়করণ অবস্থাবেসরকারিপরিচালনা পর্ষদআছেমাধ্যমিক বোর্ডঢাকা মাধ্যমিক ও উচ্চমাধ্যমিক শিক্ষা বোর্ডশিক্ষার মাধ্যমবাংলাশ্রেণি সমূহষষ্ঠ থেকে দ্বাদশ শ্রেণিশাখা সমূহবিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষামোট শিক্ষার্থী১,২০০ জনমোট শিক্ষক৪৫ জনমোট কর্মচারী১৫ জনশ্রেণিকক্ষ সংখ্যা৩০টিমোট জমি২.৫ একরনিজস্ব ভবনআছে (৪ তলা)কম্পিউটার ল্যাবআছেবিজ্ঞান ল্যাবআছে (পদার্থ, রসায়ন, জীববিজ্ঞান)লাইব্রেরিআছে (৫,০০০+ বই)খেলার মাঠআছেপ্রধান শিক্ষকজনাব মোহাম্মদ আবদুল করিমফোন নম্বর+৮৮০ ২-XXXXXXXXইমেইলinfo@adarshaschool.edu.bdওয়েবসাইটwww.adarshaschool.edu.bd
Special styling for specific value cells:

EIIN, School Code, MPO Code: wrap value in <span> with background: var(--primary-light); color: var(--primary); font-weight: 700; padding: 3px 10px; border-radius: var(--radius-sm); font-size: 13px;
MPO অন্তর্ভুক্তি "হ্যাঁ": wrap in <span> with background: var(--success-light); color: var(--success); font-weight: 600; padding: 3px 10px; border-radius: var(--radius-sm);
প্রতিষ্ঠাকাল: wrap in <span> with color: var(--accent); font-weight: 700;


COMPONENT 4 — QUICK FACTS STRIP
Background: var(--primary-subtle)
Border-top + border-bottom: 1px solid var(--primary-border)
Padding: 48px 0
Margin-top: 64px

4 stat cards in a row (col-lg-3, col-sm-6):
Each .stat-card:
  background: var(--white)
  border-top: 4px solid var(--primary)
  border-radius: var(--radius-md)
  padding: 28px 20px
  text-align: center
  box-shadow: var(--shadow-sm)
  transition: var(--transition)
  hover: box-shadow var(--shadow-md), translateY(-2px)

  Icon (Bootstrap Icon):
    font-size: 2rem
    color: var(--primary)
    margin-bottom: 12px

  Number:
    font-size: 2.4rem
    font-weight: 700
    color: var(--primary)
    line-height: 1
    data-target="[number]"   ← for JS counter animation

  Label:
    font-family: var(--font-bengali)
    font-size: 14px
    color: var(--text-secondary)
    margin-top: 8px

Cards:
  1. bi-people-fill      | 1200 | "মোট শিক্ষার্থী"
  2. bi-person-workspace | 45   | "মোট শিক্ষক"
  3. bi-trophy-fill      | 98   | "পাশের হার (%)"
  4. bi-calendar3        | 1965 | "প্রতিষ্ঠাকাল"

COMPONENT 5 — RECOGNITION & AFFILIATION CARDS
Background: var(--white)
Padding: 64px 0

Section header:
  Bengali: "স্বীকৃতি ও অধিভুক্তি"
  English: "Recognition & Affiliation"

3 cards (col-lg-4) — each .info-highlight-card:
  border: 1px solid var(--border-color)
  border-radius: var(--radius-md)
  padding: 28px 24px
  border-left: 4px solid var(--primary)
  box-shadow: var(--shadow-sm)
  background: var(--white)
  transition: var(--transition)
  hover: border-left-color var(--accent), shadow-md, translateY(-2px)

  Card 1:
    Icon: bi-patch-check-fill (var(--primary), 28px)
    Title: "মাধ্যমিক শিক্ষা বোর্ড"
    Body:  "ঢাকা মাধ্যমিক ও উচ্চমাধ্যমিক শিক্ষা বোর্ড কর্তৃক স্বীকৃত ও অনুমোদিত।
            স্বীকৃতি প্রদানের তারিখ: ১ জানুয়ারি ১৯৬৮।"

  Card 2:
    Icon: bi-bank (var(--primary), 28px)
    Title: "সরকারি অনুমোদন"
    Body:  "বাংলাদেশ সরকারের শিক্ষা মন্ত্রণালয় কর্তৃক অনুমোদিত এবং MPO ভুক্ত প্রতিষ্ঠান।
            MPO কোড: ৭৮৯০১২।"

  Card 3:
    Icon: bi-award-fill (var(--primary), 28px)
    Title: "জাতীয় পুরস্কারপ্রাপ্ত"
    Body:  "শিক্ষার গুণগত মান উন্নয়নে জাতীয় পর্যায়ে একাধিক পুরস্কার ও স্বীকৃতি অর্জিত।"

COMPONENT 6 — FOOTER
Copy the exact footer from index.html:

.footer-top-strip
.footer-main (4 columns)
.footer-bottom


JAVASCRIPT (inline at bottom or via app.js)
javascript// 1. Navbar scroll shadow
window.addEventListener('scroll', () => {
  document.querySelector('.main-navbar')
    .classList.toggle('scrolled', window.scrollY > 50);
});

// 2. Active nav link detection
document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
  if (link.getAttribute('href') === 'institute-info.html') {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});

// 3. Counter animation on stat cards
const counters = document.querySelectorAll('[data-target]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = +entry.target.dataset.target;
      let current = 0;
      const increment = target / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) { current = target; clearInterval(timer); }
        entry.target.textContent = Math.floor(current).toLocaleString('bn-BD');
      }, 20);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

// 4. Scroll fade-up animations
const fadeEls = document.querySelectorAll('.animate-fade-up');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
fadeEls.forEach(el => fadeObserver.observe(el));

// 5. Staggered card delay
document.querySelectorAll('.row > [class*="col"]').forEach((col, i) => {
  const card = col.querySelector('.animate-fade-up');
  if (card) card.style.transitionDelay = `${(i % 4) * 0.1}s`;
});

PRINT STYLES
css@media print {
  .topbar, .main-navbar, .footer-top-strip,
  .footer-main, .footer-bottom, .stat-strip,
  .recognition-section, .print-btn { display: none !important; }

  .page-hero { background: none !important; color: var(--text-primary) !important; }
  .page-hero h1 { color: var(--text-primary) !important; }
  .page-hero .breadcrumb-item { color: var(--text-secondary) !important; }

  .institute-table-wrapper { box-shadow: none !important; border: 1px solid var(--gray-300) !important; }
  body { font-size: 12px; }
}

ANIMATE-FADE-UP — APPLY TO

.section-header (all three section headers)
Each .stat-card
Each .info-highlight-card
The .institute-table-wrapper


CODING RULES (from context.md)

lang="bn" on <html>, lang="en" on English text spans
One <h1> only (the page hero title)
Section titles use <h2>, card titles <h3>
All Bengali text: font-family: var(--font-bengali)
Zero hardcoded hex/rgb colors anywhere — CSS variables only
No inline styles except JS-driven transitionDelay
Semantic HTML: <header>, <main>, <section>, <footer>
All Bootstrap CDN links present in <head>
Focus ring on all interactive elements: outline: 2px solid var(--primary); outline-offset: 2px;