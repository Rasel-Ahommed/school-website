Build a complete, production-ready achievements.html page for a Bangladesh school website.

═══════════════════════════════════════════════════════════
CONTEXT & CONSTRAINTS
═══════════════════════════════════════════════════════════

School: আদর্শ উচ্চ বিদ্যালয় ও কলেজ / Adarsha High School & College, Dhaka
EIIN: 123456 | Established: 1965 | Motto: শিক্ষাই জাতির মেরুদণ্ড

Tech stack: HTML5 (semantic) + CSS3 (CSS variables only — NO hardcoded colors)
+ Bootstrap 5.3.3 + Vanilla JS ES6+ + Bootstrap Icons 1.11.3
NO jQuery, NO React, NO Tailwind, NO Vue.

CSS variables are already defined in assets/css/variables.css — reference only:
--primary, --primary-light, --primary-dark, --primary-hover, --primary-subtle,
--primary-border, --accent, --accent-light, --accent-dark,
--white, --gray-50/100/200/300/400/500/600/700/800/900,
--success, --success-light, --warning, --warning-light, --danger, --danger-light,
--text-primary, --text-secondary, --text-muted, --border-color,
--shadow-sm, --shadow-md, --shadow-lg,
--radius-sm, --radius-md, --radius-lg, --radius-xl,
--transition, --font-primary, --font-bengali

CDN links required in <head>:
- Bootstrap 5.3.3 CSS: https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css
- Bootstrap Icons 1.11.3: https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css
- Google Fonts: https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700&family=Public+Sans:wght@300;400;500;600;700&display=swap
- Bootstrap 5.3.3 JS bundle: https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js

Stylesheet links (already built, just link them):
<link rel="stylesheet" href="assets/css/variables.css">
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="assets/css/responsive.css">
<script src="assets/js/app.js" defer></script>

═══════════════════════════════════════════════════════════
HTML DOCUMENT SETUP
═══════════════════════════════════════════════════════════

<!DOCTYPE html>
<html lang="bn" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>অর্জন ও সাফল্য | আদর্শ উচ্চ বিদ্যালয় ও কলেজ</title>
  <meta name="description" content="আদর্শ উচ্চ বিদ্যালয় ও কলেজের শিক্ষার্থীদের একাডেমিক, ক্রীড়া, জাতীয় ও সাংস্কৃতিক অর্জন।">
  <meta property="og:title" content="অর্জন ও সাফল্য | আদর্শ উচ্চ বিদ্যালয় ও কলেজ">
  <meta property="og:type" content="website">
  <link rel="canonical" href="achievements.html">
  [CDN links]
  [stylesheet links]
</head>
<body>
  <header><!-- Navbar --></header>
  <main id="main-content">
    <!-- Page Hero Banner -->
    <!-- Achievement Stats Strip -->
    <!-- Filter Tabs + Achievement Timeline -->
    <!-- Hall of Fame -->
    <!-- Trophy Cabinet -->
    <!-- CTA Strip -->
  </main>
  <footer><!-- Footer --></footer>
  [Bootstrap JS CDN]
  [app.js]
</body>
</html>

═══════════════════════════════════════════════════════════
COMPONENT: NAVBAR (copy exactly from index.html)
═══════════════════════════════════════════════════════════

Two-layer sticky navbar:

LAYER 1 — .topbar:
  height: 36px | background: var(--primary-dark) | font-size: 12px
  Left: 🇧🇩 "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার" | "জাতীয় শিক্ষা সপ্তাহ ২০২৫"
  Right: bi-telephone-fill +880 2-XXXXXXXX | bi-envelope-fill info@adarshaschool.edu.bd | Facebook | YouTube icons
  Hide on mobile: d-none d-xl-flex

LAYER 2 — .main-navbar:
  height: 70px | background: var(--white) | border-bottom: 1px solid var(--border-color)
  position: sticky; top: 0; z-index: 1030
  JS adds .scrolled → box-shadow: var(--shadow-md)

  Logo: assets/images/logo.png (48×48px) + "আদর্শ উচ্চ বিদ্যালয় ও কলেজ" (Bengali, 17px, 700)
        + "Adarsha High School & College, Dhaka" (11px, var(--text-secondary))

  Nav links (navbar-expand-xl, font-size 13.5px, font-weight 500):
    হোম → index.html
    আমাদের বিদ্যালয় → dropdown: ইতিহাস (about.html#history) | লক্ষ্য ও উদ্দেশ্য (about.html#mission) | প্রতিষ্ঠান তথ্য (institute-info.html)
    প্রশাসন → dropdown: প্রধান শিক্ষকের বাণী (head-teacher.html) | পরিচালনা কমিটি (committee.html) | শিক্ষক-কর্মচারী (teachers.html)
    একাডেমিক → dropdown: একাডেমিক ক্যালেন্ডার (academic.html#calendar) | শ্রেণি রুটিন (academic.html#routine) | সিলেবাস (academic.html#syllabus) | পরীক্ষার তথ্য (academic.html#exam) | ফলাফল (results.html)
    ভর্তি → admission.html
    নোটিশ বোর্ড → notices.html
    গ্যালারি → gallery.html
    যোগাযোগ → contact.html

  Active: "গ্যালারি" nav item — NO, mark the closest parent or a dedicated Achievements link.
  (Add অর্জন → achievements.html as a nav item between নোটিশ বোর্ড and গ্যালারি)

  Right buttons:
    "ভর্তি আবেদন" → accent bg, bi-pencil-square, href="admission.html"
    "অনুসন্ধান" → icon button, bi-search, 36×36px

  Dropdown styles:
    background var(--white) | border var(--border-color) | border-radius var(--radius-md)
    box-shadow var(--shadow-lg) | min-width 220px
    Item hover: bg var(--primary-subtle), color var(--primary), border-left: 3px solid var(--primary)

═══════════════════════════════════════════════════════════
SECTION 1 — PAGE HERO BANNER
═══════════════════════════════════════════════════════════

Height: 180px
Background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)
Overlay pattern: subtle diagonal stripes using CSS (repeating-linear-gradient, rgba white 0.03)

Content (centered, white):
  Breadcrumb (font-size 13px, rgba white 0.75):
    <i class="bi bi-house-fill"></i> হোম
    <i class="bi bi-chevron-right"></i> অর্জন ও সাফল্য
    (separator color: rgba white 0.4)

  Page title:
    <h1> "অর্জন ও সাফল্য" — font-family var(--font-bengali), font-size 2rem, font-weight 700, white
    English subtitle: "Achievements & Honours" — font-size 14px, rgba white 0.75, margin-top 6px

  Decorative: two thin horizontal lines (rgba white 0.2) flanking the title block

CSS:
.page-hero {
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
  min-height: 180px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.page-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    45deg,
    rgba(255,255,255,0.03) 0px,
    rgba(255,255,255,0.03) 1px,
    transparent 1px,
    transparent 20px
  );
}
.breadcrumb-item + .breadcrumb-item::before {
  content: '›';
  color: rgba(255,255,255,0.4);
}

═══════════════════════════════════════════════════════════
SECTION 2 — ACHIEVEMENT STATS STRIP
═══════════════════════════════════════════════════════════

Background: var(--white)
Border-bottom: 1px solid var(--border-color)
Padding: 40px 0

4 stat cards in a row (col-lg-3, col-sm-6):

Each .achievement-stat-card:
  text-align: center
  padding: 24px 16px
  border-right: 1px solid var(--border-color)  (last child: no border)
  
  Icon circle (56px, background var(--primary-subtle), border-radius 50%, margin: 0 auto 12px):
    icon: 22px, color var(--primary)

  Count: font-size 2.2rem, font-weight 700, color var(--primary)
         data-target="[number]" for JS counter animation
         font-family var(--font-primary)

  Label: font-family var(--font-bengali), font-size 14px, color var(--text-secondary), margin-top 4px

Data:
  1. bi-trophy-fill      | 120+  | "জাতীয় পুরস্কার"
  2. bi-award-fill       | 85+   | "ক্রীড়া পদক"
  3. bi-mortarboard-fill | 1,200 | "মেধাবী শিক্ষার্থী"
  4. bi-star-fill        | 98%   | "পাসের হার"

JS counter animation: IntersectionObserver triggers count-up from 0 → target on viewport entry.

═══════════════════════════════════════════════════════════
SECTION 3 — FILTER TABS + ACHIEVEMENT TIMELINE
═══════════════════════════════════════════════════════════

Background: var(--gray-50)
Padding: 80px 0

Section header (.section-header, animate-fade-up):
  Bengali title: "আমাদের অর্জনসমূহ"
  English subtitle: "Our Achievements"
  Decorative underline: 40px line (var(--primary)) + 12px dot (var(--accent)), centered

Filter tab bar (.achievement-tabs):
  Bootstrap nav-pills style, centered
  Background: var(--white)
  Border: 1px solid var(--border-color)
  Border-radius: var(--radius-lg)
  Padding: 6px
  Display: inline-flex (centered via text-center wrapper)
  Gap: 4px

  Tab items:
    Default: background transparent, color var(--text-secondary), font-size 13.5px, font-weight 500
             border-radius var(--radius-md), padding 8px 20px
    Active:  background var(--primary), color var(--white), box-shadow var(--shadow-sm)
    Hover:   background var(--primary-subtle), color var(--primary)

  Tabs (with Bootstrap data-bs-toggle="pill"):
    1. data-tab="all"      | <i class="bi bi-grid-fill me-2"></i> সকল
    2. data-tab="academic" | <i class="bi bi-book-fill me-2"></i> একাডেমিক
    3. data-tab="sports"   | <i class="bi bi-dribbble me-2"></i> ক্রীড়া
    4. data-tab="national" | <i class="bi bi-flag-fill me-2"></i> জাতীয়
    5. data-tab="cultural" | <i class="bi bi-music-note-beamed me-2"></i> সাংস্কৃতিক

TIMELINE LAYOUT per tab:

Each tab panel (#tab-all, #tab-academic, etc.) contains a vertical timeline:

.achievement-timeline:
  position: relative
  padding-left: 0

  Center vertical line:
    ::before pseudo-element
    width: 2px
    background: linear-gradient(to bottom, var(--primary), var(--primary-border))
    position: absolute, left: 50%, top: 0, bottom: 0
    transform: translateX(-50%)

Each .timeline-item (alternating left/right):
  display: grid
  grid-template-columns: 1fr 60px 1fr
  gap: 0
  margin-bottom: 40px

  Even items: content on left, empty on right
  Odd items: empty on left, content on right

  Center column (.timeline-node):
    width: 48px, height: 48px
    border-radius: 50%
    background: var(--white)
    border: 3px solid var(--primary)
    display: flex; align-items: center; justify-content: center
    icon: 18px, color var(--primary)
    box-shadow: var(--shadow-sm)
    z-index: 1
    position: relative

    Year badge below node:
      font-size: 12px, font-weight: 600, color: var(--primary)
      margin-top: 6px, text-align: center

  Content card (.timeline-card):
    background: var(--white)
    border: 1px solid var(--border-color)
    border-radius: var(--radius-md)
    padding: 20px 24px
    box-shadow: var(--shadow-sm)
    transition: var(--transition)
    hover: box-shadow var(--shadow-md), translateY(-2px)

    Top ribbon: left border 4px solid [category color]
      academic → var(--primary)
      sports   → var(--success)
      national → var(--accent)
      cultural → var(--warning)

    Category badge (top-right inside card):
      font-size: 11px, font-weight: 600
      border-radius: var(--radius-sm)
      padding: 3px 10px
      academic → bg var(--primary-light), color var(--primary)
      sports   → bg var(--success-light), color var(--success)
      national → bg var(--accent-light),  color var(--accent)
      cultural → bg var(--warning-light), color var(--warning)

    Title: font-family var(--font-bengali), font-size 15px, font-weight 600,
           color var(--text-primary), margin-bottom 6px

    Description: font-size 13.5px, color var(--text-secondary), line-height 1.7

    Footer row:
      Left: bi-person-fill icon + Awardee name (font-size 13px, color var(--text-muted))
      Right: bi-calendar3 icon + year/date (font-size 12px, color var(--text-muted))

Mobile (below md):
  grid-template-columns: 48px 1fr
  All cards on right side
  Center line on far left (left: 24px)

ACHIEVEMENT DATA — populate all 4 tabs with minimum 4 items each:

ACADEMIC (data-category="academic"):
  1. "SSC পরীক্ষায় বিদ্যালয়সেরা ফলাফল" | "২০২৪ সালের SSC পরীক্ষায় আমাদের বিদ্যালয়ের ১৫ জন শিক্ষার্থী GPA-5.00 অর্জন করেছে।" | রাফি আহমেদ | 2024
  2. "জাতীয় বিজ্ঞান অলিম্পিয়াডে প্রথম স্থান" | "ঢাকা বিভাগীয় পর্যায়ে জাতীয় বিজ্ঞান অলিম্পিয়াডে প্রথম স্থান অর্জন।" | তানভীর হোসেন | 2024
  3. "গণিত অলিম্পিয়াডে স্বর্ণপদক" | "জাতীয় গণিত অলিম্পিয়াডে স্বর্ণপদক অর্জন করে বিদ্যালয়কে গৌরবান্বিত করেছে।" | সুমাইয়া বেগম | 2023
  4. "জাতীয় বিতর্ক প্রতিযোগিতায় চ্যাম্পিয়ন" | "আন্তঃবিদ্যালয় জাতীয় বিতর্ক প্রতিযোগিতায় চ্যাম্পিয়ন শিরোপা অর্জন।" | নাফিসা ইসলাম | 2023

SPORTS (data-category="sports"):
  1. "জাতীয় ফুটবল টুর্নামেন্টে রানার্স-আপ" | "আন্তঃবিদ্যালয় জাতীয় ফুটবল টুর্নামেন্টে রানার্স-আপ পুরস্কার অর্জন।" | ফুটবল দল | 2024
  2. "ক্রিকেটে জেলা চ্যাম্পিয়ন" | "ঢাকা জেলা আন্তঃবিদ্যালয় ক্রিকেট প্রতিযোগিতায় চ্যাম্পিয়ন।" | ক্রিকেট দল | 2024
  3. "অ্যাথলেটিক্সে ৫টি স্বর্ণপদক" | "বিভাগীয় ক্রীড়া প্রতিযোগিতায় অ্যাথলেটিক্সে ৫টি স্বর্ণ ও ৩টি রুপা পদক।" | অ্যাথলেটিক্স দল | 2023
  4. "কারাতেতে জাতীয় পদক" | "জাতীয় স্কুল কারাতে চ্যাম্পিয়নশিপে একাধিক পদক অর্জন।" | রিমা আক্তার | 2023

NATIONAL (data-category="national"):
  1. "জাতীয় শিশু পুরস্কার" | "শিক্ষায় বিশেষ অবদানের জন্য জাতীয় শিশু পুরস্কার ২০২৪ লাভ।" | আরিয়ান হক | 2024
  2. "শ্রেষ্ঠ বিদ্যালয় পুরস্কার (ঢাকা বিভাগ)" | "ঢাকা বিভাগীয় শ্রেষ্ঠ শিক্ষাপ্রতিষ্ঠান পুরস্কার অর্জন।" | বিদ্যালয় কর্তৃপক্ষ | 2023
  3. "জাতীয় পরিবেশ অলিম্পিয়াডে প্রথম" | "জাতীয় পরিবেশ সংরক্ষণ অলিম্পিয়াডে প্রথম স্থান অর্জন।" | সাদিয়া রহমান | 2022
  4. "ICT অলিম্পিয়াডে জাতীয় বিজয়ী" | "জাতীয় ICT অলিম্পিয়াডে বিজয়ী হয়ে আন্তর্জাতিক পর্যায়ে প্রতিনিধিত্ব।" | ইমরান হোসেন | 2022

CULTURAL (data-category="cultural"):
  1. "জাতীয় সংগীত প্রতিযোগিতায় প্রথম" | "বার্ষিক জাতীয় স্কুল সংগীত প্রতিযোগিতায় প্রথম স্থান অর্জন।" | সংগীত দল | 2024
  2. "নৃত্য প্রতিযোগিতায় বিভাগীয় চ্যাম্পিয়ন" | "বিভাগীয় আন্তঃবিদ্যালয় নৃত্য প্রতিযোগিতায় প্রথম পুরস্কার।" | নৃত্য দল | 2023
  3. "শিল্পকলা প্রদর্শনীতে শ্রেষ্ঠ পুরস্কার" | "ঢাকা বিভাগীয় শিল্পকলা প্রদর্শনীতে শ্রেষ্ঠ পুরস্কার।" | আঁখি মনি | 2023
  4. "বার্ষিক নাট্যোৎসবে সেরা নাটক" | "জাতীয় বার্ষিক নাট্যোৎসবে সেরা নাটক পুরস্কার অর্জন।" | নাট্য দল | 2022

"সকল অর্জন" tab shows all 16 items combined, sorted by year descending.

═══════════════════════════════════════════════════════════
SECTION 4 — HALL OF FAME
═══════════════════════════════════════════════════════════

Background: var(--white)
Padding: 80px 0

Section header:
  Bengali: "কৃতী শিক্ষার্থী"
  English: "Hall of Fame"

6 cards (col-xl-2, col-lg-3, col-md-4, col-sm-6) — .fame-card:
  background: var(--white)
  border: 1px solid var(--border-color)
  border-radius: var(--radius-lg)
  padding: 28px 16px
  text-align: center
  box-shadow: var(--shadow-sm)
  transition: var(--transition)
  hover: translateY(-4px), box-shadow var(--shadow-lg)

  Photo placeholder circle (80px):
    background: var(--primary-light)
    border-radius: 50%
    margin: 0 auto 16px
    border: 3px solid var(--primary-border)
    display: flex; align-items: center; justify-content: center
    icon: bi-person-fill, 32px, color var(--primary)

  Gold badge (top-right corner of card):
    width: 28px, height: 28px
    background: #f59e0b  (→ use var(--warning) since no hardcoded colors)
    border-radius: 50%
    position: absolute, top: 12px, right: 12px
    icon: bi-star-fill, 12px, white

  Name: font-family var(--font-bengali), font-size 15px, font-weight 700,
        color var(--text-primary), margin-bottom 4px

  Batch year badge: background var(--primary-subtle), color var(--primary),
                   font-size 11px, border-radius var(--radius-sm), padding 2px 10px

  Achievement tag: font-size 12px, color var(--text-secondary), margin-top 8px

  Current role: font-size 11px, color var(--text-muted), font-style italic

Data:
  1. "ড. রাহেলা বেগম"      | ব্যাচ ২০০০ | SSC গোল্ডেন GPA    | বিশ্ববিদ্যালয় অধ্যাপক
  2. "ইঞ্জি. তারেক আহমেদ"  | ব্যাচ ২০০৫ | বিজ্ঞান অলিম্পিয়াড | সফটওয়্যার ইঞ্জিনিয়ার
  3. "ব্যারিস্টার নাদিয়া"   | ব্যাচ ২০০৮ | বিতর্ক চ্যাম্পিয়ন  | আইনজীবী, সুপ্রিম কোর্ট
  4. "ডা. সাইফুল ইসলাম"    | ব্যাচ ২০১০ | বিজ্ঞান পুরস্কার   | চিকিৎসক, DMCH
  5. "মিস সাবিনা আক্তার"   | ব্যাচ ২০১৫ | ক্রীড়া পদক         | জাতীয় অ্যাথলেট
  6. "জনাব ফয়সাল রাহমান"  | ব্যাচ ২০১৮ | ICT অলিম্পিয়াড    | উদ্যোক্তা ও প্রযুক্তিবিদ

═══════════════════════════════════════════════════════════
SECTION 5 — TROPHY CABINET
═══════════════════════════════════════════════════════════

Background: var(--gray-50)
Padding: 80px 0

Section header:
  Bengali: "ট্রফি ক্যাবিনেট"
  English: "Trophy Cabinet"

3-column Bootstrap grid (col-lg-4):

Each .trophy-card:
  background: var(--white)
  border: 1px solid var(--border-color)
  border-radius: var(--radius-lg)
  overflow: hidden
  box-shadow: var(--shadow-sm)
  transition: var(--transition)
  hover: translateY(-3px), box-shadow var(--shadow-md)

  Top color strip (height: 6px):
    Gold trophy   → var(--warning)
    Silver trophy → var(--gray-400)
    Bronze trophy → #b87333 (→ use var(--accent) as closest warm variable)

  Card body (padding: 28px 24px):
    Trophy icon (centered):
      width: 72px, height: 72px
      border-radius: 50%
      margin: 0 auto 16px
      Gold:   background var(--warning-light),  icon bi-trophy-fill,  color var(--warning)
      Silver: background var(--gray-100),        icon bi-award-fill,   color var(--gray-500)
      Bronze: background var(--accent-light),    icon bi-medal-fill,   color var(--accent)
      Icon size: 28px

    Category badge (centered, margin-bottom 12px):
      same badge style as timeline cards, matching category color

    Title: font-family var(--font-bengali), font-size 16px, font-weight 700,
           color var(--text-primary), text-align center, margin-bottom 8px

    Description: font-size 13.5px, color var(--text-secondary), text-align center, line-height 1.7

    Divider: 1px solid var(--border-color), margin: 16px 0

    Footer (flex, space-between):
      Left: bi-calendar3 + year, font-size 12px, color var(--text-muted)
      Right: bi-geo-alt + "ঢাকা বিভাগ", font-size 12px, color var(--text-muted)

Data (9 cards, 3 rows):
  1. Gold   | একাডেমিক | "SSC পরীক্ষায় বিভাগীয় প্রথম"          | "২০২৪ সালে ঢাকা বিভাগে SSC পরীক্ষার ফলাফলে বিভাগীয় প্রথম স্থান।"    | 2024
  2. Silver | ক্রীড়া   | "আন্তঃবিদ্যালয় ফুটবল রানার্স-আপ"      | "ঢাকা বিভাগীয় আন্তঃবিদ্যালয় ফুটবল টুর্নামেন্টে রানার্স-আপ।"         | 2024
  3. Gold   | জাতীয়   | "শ্রেষ্ঠ বিদ্যালয় পুরস্কার"            | "শিক্ষা মন্ত্রণালয় কর্তৃক শ্রেষ্ঠ বিদ্যালয় পুরস্কার ২০২৩।"          | 2023
  4. Bronze | সাংস্কৃতিক | "জাতীয় নাট্যোৎসবে সেরা নাটক"        | "বার্ষিক জাতীয় নাট্যোৎসবে সেরা নাটক বিভাগে পুরস্কার।"              | 2023
  5. Gold   | একাডেমিক | "জাতীয় গণিত অলিম্পিয়াড স্বর্ণপদক"   | "জাতীয় গণিত অলিম্পিয়াডে স্বর্ণপদক বিজয়ী।"                         | 2023
  6. Silver | ক্রীড়া   | "জেলা ক্রিকেট চ্যাম্পিয়ন"             | "ঢাকা জেলা আন্তঃবিদ্যালয় ক্রিকেট লিগে চ্যাম্পিয়ন।"                 | 2022
  7. Bronze | একাডেমিক | "ICT অলিম্পিয়াড জাতীয় পুরস্কার"      | "জাতীয় ICT অলিম্পিয়াডে তৃতীয় স্থান ও বিশেষ পুরস্কার।"             | 2022
  8. Gold   | জাতীয়   | "জাতীয় শিশু পুরস্কার"                 | "শিক্ষায় বিশেষ অবদানের জন্য জাতীয় শিশু পুরস্কার।"                  | 2021
  9. Silver | সাংস্কৃতিক | "বিভাগীয় সংগীত প্রতিযোগিতায় প্রথম" | "ঢাকা বিভাগীয় আন্তঃবিদ্যালয় সংগীত প্রতিযোগিতায় প্রথম।"            | 2021

═══════════════════════════════════════════════════════════
SECTION 6 — CTA STRIP
═══════════════════════════════════════════════════════════

Background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)
Padding: 56px 0

Content (centered, white, text-align center):
  Icon: bi-trophy-fill (48px, var(--warning), margin-bottom 16px)
  Heading (h2): "আপনার সন্তানকে আমাদের মেধাবী পরিবারের অংশ করুন"
                font-family var(--font-bengali), font-size 1.6rem, font-weight 700, white
  Subtext: "২০২৫-২৬ শিক্ষাবর্ষে ভর্তি কার্যক্রম চলছে"
           font-size 15px, rgba white 0.80, margin-top 8px, margin-bottom 28px

  Two buttons (inline-flex, gap 12px):
    Button 1 (primary action):
      "ভর্তির আবেদন করুন" | href="admission.html"
      background var(--accent), color white, border-radius var(--radius-sm)
      padding 12px 28px, font-size 14px, font-weight 600
      icon: bi-pencil-square me-2
      hover: background var(--accent-dark)

    Button 2 (secondary):
      "যোগাযোগ করুন" | href="contact.html"
      background transparent, color white
      border: 2px solid rgba(255,255,255,0.6)
      border-radius var(--radius-sm), padding 12px 28px
      font-size 14px, font-weight 500
      icon: bi-telephone me-2
      hover: background rgba(255,255,255,0.1), border-color white

═══════════════════════════════════════════════════════════
COMPONENT: FOOTER (copy exactly from index.html)
═══════════════════════════════════════════════════════════

FOOTER TOP STRIP (.footer-top-strip):
  Background: var(--primary) | Padding: 20px 0
  Left: "🎓 ২০২৫ সালের ভর্তি কার্যক্রম চলছে" (white, font-weight 600)
  Right: "ভর্তির জন্য আবেদন করুন" button (var(--accent) bg, white, href="admission.html")

FOOTER MAIN (.footer-main):
  Background: var(--primary-dark) | color rgba(255,255,255,0.80)
  Padding: 56px 0 32px | Font-size 13.5px | Line-height 1.9

  4-column grid (col-xl-3, col-lg-3, col-md-6):

  Col 1 — About:
    Logo (40px) + "আদর্শ উচ্চ বিদ্যালয় ও কলেজ" (white, 16px, 700)
    "Adarsha High School & College" (rgba white 0.6, 12px)
    <hr> rgba white 0.15
    "১৯৬৫ সাল থেকে মানসম্পন্ন শিক্ষা প্রদান করে আসছে আদর্শ উচ্চ বিদ্যালয়। আমাদের লক্ষ্য জ্ঞান, নৈতিকতা ও দেশপ্রেমে সমৃদ্ধ নাগরিক গড়ে তোলা।"
    EIIN badge: "EIIN: 123456" (rgba white 0.1 bg, 12px, border-radius 4px)
    Social icons (32px circles, rgba white 0.1 bg, hover: var(--accent)):
      bi-facebook | bi-youtube | bi-twitter-x

  Col 2 — দ্রুত লিঙ্ক:
    Heading: "দ্রুত লিঙ্ক" (white, 14px, 600, margin-bottom 16px)
    Links (rgba white 0.75, hover white, bi-chevron-right 10px icon prefix):
      হোম → index.html
      আমাদের বিদ্যালয় → about.html
      প্রধান শিক্ষকের বাণী → head-teacher.html
      শিক্ষক-কর্মচারী → teachers.html
      পরিচালনা কমিটি → committee.html
      ভর্তি তথ্য → admission.html
      নোটিশ বোর্ড → notices.html

  Col 3 — একাডেমিক লিঙ্ক:
    Heading: "একাডেমিক" (white, 14px, 600, margin-bottom 16px)
    Links:
      একাডেমিক ক্যালেন্ডার → academic.html#calendar
      শ্রেণি রুটিন → academic.html#routine
      পরীক্ষার তথ্য → academic.html#exam
      ফলাফল → results.html
      ডাউনলোড সেন্টার → downloads.html
      গ্যালারি → gallery.html
      যোগাযোগ → contact.html

  Col 4 — যোগাযোগ:
    Heading: "যোগাযোগ" (white, 14px, 600, margin-bottom 16px)
    Items (icon + text, rgba white 0.75):
      bi-geo-alt-fill: "আদর্শ রোড, মিরপুর, ঢাকা-১২১৬"
      bi-telephone-fill: "+880 2-XXXXXXXX"
      bi-envelope-fill: "info@adarshaschool.edu.bd"
      bi-clock-fill: "সোম–শুক্র: সকাল ৯টা – বিকেল ৫টা"
    Map link: bi-map + "গুগল ম্যাপে দেখুন" (accent color, hover underline)

FOOTER BOTTOM (.footer-bottom):
  Background: var(--gray-900) | Padding: 16px 0
  Color: rgba white 0.5 | Font-size: 12.5px
  Left: "© ২০২৫ আদর্শ উচ্চ বিদ্যালয় ও কলেজ। সর্বস্বত্ব সংরক্ষিত।"
  Right: "গোপনীয়তা নীতি" | "সাইটম্যাপ" | "GRS" links (hover white)

═══════════════════════════════════════════════════════════
SCROLL ANIMATIONS
═══════════════════════════════════════════════════════════

Add class .animate-fade-up to:
- .page-hero content
- .achievement-stat-card (each)
- .section-header (each)
- .timeline-item (each, staggered)
- .fame-card (each, staggered)
- .trophy-card (each, staggered)
- .cta-strip content

CSS (embed in <style> block or style.css):
.animate-fade-up {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.animate-fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

IntersectionObserver JS (embed in <script> or app.js):
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.animate-fade-up').forEach(el => observer.observe(el));

// Staggered delay for grids
document.querySelectorAll('.fame-card, .trophy-card, .achievement-stat-card')
  .forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 0.1}s`; });

═══════════════════════════════════════════════════════════
TAB FILTER JAVASCRIPT
═══════════════════════════════════════════════════════════

// Achievement tab filtering
const tabs = document.querySelectorAll('[data-tab]');
const panels = document.querySelectorAll('[data-panel]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.tab;
    panels.forEach(panel => {
      panel.style.display = (target === 'all' || panel.dataset.panel === target) ? 'grid' : 'none';
    });
  });
});

// Or use Bootstrap data-bs-toggle="pill" with tab panes for pure Bootstrap approach

═══════════════════════════════════════════════════════════
ACCESSIBILITY
═══════════════════════════════════════════════════════════

- <h1> on page hero title only
- Heading hierarchy: h1 → h2 (section titles) → h3 (card titles)
- aria-label on icon-only buttons
- aria-current="page" on active nav link (অর্জন)
- All decorative icons: aria-hidden="true"
- Focus-visible ring: outline: 2px solid var(--primary); outline-offset: 2px
- Tab panels: role="tabpanel", aria-labelledby matching tab id
- Tab buttons: role="tab", aria-selected="true/false"

═══════════════════════════════════════════════════════════
OUTPUT RULES
═══════════════════════════════════════════════════════════

- Build 100% complete achievements.html — no placeholder comments, no "// add here"
- Every section fully coded with real Bengali + English content as specified
- All CSS embedded in a <style> block inside <head> (since style.css is external)
- All JS embedded in a <script> block before </body>
- NO hardcoded hex/rgb colors anywhere — CSS variables only
- NO jQuery, React, Tailwind, or Vue
- File is fully self-contained and renderable standalone
- Bengali text: always font-family var(--font-bengali)
- Section alternates: gray-50 → white → gray-50 → white → gray-50