You are building committee.html for a Bangladesh school website project.
The design system (variables.css), shared styles (style.css), responsive styles
(responsive.css), and JavaScript (app.js) already exist. Build ONLY committee.html
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

CDN links (include in <head>):
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
- BEM-inspired CSS class names (.committee-card, .term-badge, etc.)
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
    2. আমাদের বিদ্যালয় → dropdown:
         ইতিহাস (about.html#history)
         লক্ষ্য ও উদ্দেশ্য (about.html#mission)
         প্রতিষ্ঠান তথ্য (institute-info.html)
    3. প্রশাসন → dropdown:
         প্রধান শিক্ষকের বাণী (head-teacher.html)
         পরিচালনা কমিটি (committee.html)  ← ACTIVE
         শিক্ষক-কর্মচারী (teachers.html)
    4. একাডেমিক → dropdown:
         একাডেমিক ক্যালেন্ডার (academic.html#calendar)
         শ্রেণি রুটিন (academic.html#routine)
         সিলেবাস (academic.html#syllabus)
         পরীক্ষার তথ্য (academic.html#exam)
         ফলাফল (results.html)
    5. ভর্তি → admission.html
    6. নোটিশ বোর্ড → notices.html
    7. গ্যালারি → gallery.html
    8. যোগাযোগ → contact.html

  Right: "ভর্তি আবেদন" button (var(--accent), bi-pencil-square) + search icon button
  Active page: "পরিচালনা কমিটি" link has aria-current="page" and active style

──────────────────────────────────────────────
PAGE HERO BANNER
──────────────────────────────────────────────
Height: 180px
Background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)
Content (centered):
  - Breadcrumb: হোম / প্রশাসন / পরিচালনা কমিটি
    (white links, separator "›", current page non-link, font-size 13px, opacity 0.85)
  - H1: "পরিচালনা কমিটি" (white, font-family var(--font-bengali), font-size 28px, font-weight 700)
  - Subtitle: "Managing Committee" (rgba white 0.75, font-size 14px, margin-top 6px)

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
    Social icons: Facebook, YouTube, Twitter/X
    (32px circles, rgba white 0.1 bg, hover var(--accent))

  Col 2 — দ্রুত লিঙ্ক:
    হোম | আমাদের বিদ্যালয় | শিক্ষক ও কর্মচারী | নোটিশ বোর্ড | ফলাফল | যোগাযোগ
    Each: bi-chevron-right + link (rgba white 0.75, hover white, padding 4px 0)

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
  Background: rgba(0,0,0,0.20) | Padding: 16px 0
  Border-top: 1px solid rgba(255,255,255,0.08)
  Left: "© ২০২৫ আদর্শ উচ্চ বিদ্যালয় ও কলেজ। সর্বস্বত্ব সংরক্ষিত।" (13px, rgba white 0.6)
  Right: "Developed with ❤️ for Education" (13px, rgba white 0.5)

═══════════════════════════════════════════════════════════
PAGE: committee.html — FULL SPECIFICATION
═══════════════════════════════════════════════════════════

HTML: <!DOCTYPE html> | lang="bn" | dir="ltr"
<title>পরিচালনা কমিটি | আদর্শ উচ্চ বিদ্যালয় ও কলেজ</title>
Meta: description, keywords, og:title, og:description, og:type, canonical

Structure:
<header> topbar + main-navbar </header>
<main id="main-content">
  page hero banner
  section#committee-info   (padding: 56px 0, background: var(--bg-body))
  section#committee-members (padding: 80px 0, background: var(--bg-section))
  section#committee-responsibilities (padding: 80px 0, background: var(--bg-body))
</main>
<footer> footer-top-strip + footer-main + footer-bottom </footer>

──────────────────────────────────────────────
SECTION 1 — COMMITTEE INFO  (#committee-info)
──────────────────────────────────────────────
Background: var(--bg-body) | Padding: 56px 0

Layout: 2 columns (col-lg-8 + col-lg-4), gap: 32px

LEFT COLUMN — Info card (.committee-info-card):
  background: var(--primary-subtle)
  border: 1px solid var(--primary-border)
  border-left: 4px solid var(--primary)
  border-radius: var(--radius-md)
  padding: 28px 32px

  Heading (h2): "বিদ্যালয় পরিচালনা কমিটি সম্পর্কে"
    font-family: var(--font-bengali) | font-size: 20px | font-weight: 700
    color: var(--text-primary) | margin-bottom: 16px

  Body text (3 short Bengali paragraphs, font-size 14.5px, color var(--text-secondary),
             line-height 1.8, font-family var(--font-bengali)):
    Para 1: "আদর্শ উচ্চ বিদ্যালয় ও কলেজের পরিচালনা কমিটি বিদ্যালয়ের সামগ্রিক
             পরিচালনা, নীতিনির্ধারণ এবং উন্নয়নমূলক কার্যক্রম পরিচালনার দায়িত্বে
             নিয়োজিত একটি গুরুত্বপূর্ণ প্রশাসনিক সংস্থা।"
    Para 2: "কমিটি সরকারি বিধিমালা অনুযায়ী গঠিত এবং পরিচালিত হয়।
             বিদ্যালয়ের শিক্ষার মান উন্নয়ন, অবকাঠামো উন্নয়ন এবং
             শিক্ষার্থীদের কল্যাণে কমিটি নিরলসভাবে কাজ করে যাচ্ছে।"
    Para 3: "বর্তমান কমিটি ২০২৩ সালে গঠিত হয়েছে এবং ২০২৬ সাল পর্যন্ত
             মেয়াদকাল নির্ধারিত রয়েছে।"

RIGHT COLUMN — Term info card (.term-info-card):
  background: var(--bg-card)
  border: 1px solid var(--border-color)
  border-radius: var(--radius-md)
  padding: 24px
  box-shadow: var(--shadow-sm)

  Title: "কমিটির মেয়াদকাল" (font-family var(--font-bengali), font-size 16px,
          font-weight 700, color var(--text-primary), margin-bottom 20px)

  4 info rows (.term-row), each:
    display: flex | justify-content: space-between | align-items: center
    padding: 10px 0
    border-bottom: 1px solid var(--border-color)
    last child: no border

    Label: font-size 13px, color var(--text-muted), font-family var(--font-bengali)
    Value: font-size 13.5px, font-weight 600, color var(--text-primary),
           font-family var(--font-bengali)

  Rows:
    "গঠনের তারিখ"   → "১৫ জানুয়ারি ২০২৩"
    "মেয়াদ শেষ"     → "১৪ জানুয়ারি ২০২৬"
    "মোট সদস্য"     → "১১ জন"
    "সভার সংখ্যা"   → "বার্ষিক ৬টি (ন্যূনতম)"

  Below rows — STATUS BADGE (full width, centered, margin-top 20px):
    background: var(--success-light)
    color: var(--success)
    border: 1px solid var(--success)
    border-radius: var(--radius-sm)
    padding: 10px
    text-align: center
    font-family: var(--font-bengali)
    font-size: 13px
    font-weight: 600
    icon: bi-check-circle-fill me-2
    Text: "কমিটি বর্তমানে সক্রিয় ও কার্যকর"

──────────────────────────────────────────────
SECTION 2 — COMMITTEE MEMBERS  (#committee-members)
──────────────────────────────────────────────
Background: var(--bg-section) | Padding: 80px 0

Section header:
  Bengali: "কমিটির সদস্যবৃন্দ"
  English: "Committee Members"

──────────────────────────────
FEATURED ROW — Top 3 (President, Secretary, Treasurer)
──────────────────────────────
Bootstrap row, col-lg-4, gap: 24px
margin-bottom: 40px

Each featured card (.committee-card.committee-card--featured):
  background: var(--bg-card)
  border: 1px solid var(--border-color)
  border-top: 4px solid var(--primary)
  border-radius: var(--radius-md)
  padding: 32px 24px 24px
  text-align: center
  box-shadow: var(--shadow-md)
  transition: var(--transition)

  hover:
    transform: translateY(-4px)
    box-shadow: var(--shadow-lg)
    border-top-color: var(--accent)

  PHOTO CIRCLE:
    width: 100px | height: 100px | border-radius: 50%
    margin: 0 auto 16px
    background: var(--primary-light)
    border: 3px solid var(--primary-border)
    display: flex | align-items: center | justify-content: center
    icon fallback: bi-person-fill (44px, var(--primary))

  POSITION BADGE (.position-badge):
    display: inline-block | margin-bottom: 12px
    padding: 5px 16px
    background: var(--primary)
    color: var(--white)
    border-radius: 20px
    font-size: 12px
    font-weight: 600
    font-family: var(--font-bengali)

  NAME (h3):
    font-family: var(--font-bengali)
    font-size: 16px | font-weight: 700
    color: var(--text-primary) | margin-bottom: 6px

  CATEGORY:
    font-size: 12.5px | color: var(--primary) | font-weight: 500
    margin-bottom: 8px

  DIVIDER: 32px wide, 2px, var(--primary-border), margin 10px auto

  CONTACT ROW (if available):
    font-size: 12px | color: var(--text-muted)
    icon: bi-telephone me-1
    display: flex | justify-content: center | gap: 4px

  TERM BADGE:
    margin-top: 12px
    background: var(--primary-subtle)
    color: var(--text-secondary)
    border: 1px solid var(--primary-border)
    border-radius: var(--radius-sm)
    padding: 4px 12px
    font-size: 11px
    font-family: var(--font-bengali)
    icon: bi-calendar3 me-1
    Text: "মেয়াদ: ২০২৩ – ২০২৬"

Featured members data:
  1. সভাপতি (President):
     Name: জনাব মোহাম্মদ আব্দুল মান্নান
     Category: স্থানীয় গণ্যমান্য ব্যক্তি
     Phone: +880 1X-XXXXXXXX

  2. সম্পাদক (Secretary):
     Name: জনাব মোহাম্মদ আবদুল করিম (প্রধান শিক্ষক)
     Category: প্রধান শিক্ষক (পদাধিকারবলে)
     Phone: +880 2-XXXXXXXX

  3. কোষাধ্যক্ষ (Treasurer):
     Name: জনাব মোহাম্মদ শফিকুর রহমান
     Category: অভিভাবক প্রতিনিধি
     Phone: +880 1X-XXXXXXXX

──────────────────────────────
GENERAL MEMBERS GRID — 8 members
──────────────────────────────
Bootstrap row, col-lg-3 col-sm-6, gap: 20px

Each card (.committee-card):
  background: var(--bg-card)
  border: 1px solid var(--border-color)
  border-radius: var(--radius-md)
  padding: 24px 18px 20px
  text-align: center
  box-shadow: var(--shadow-sm)
  transition: var(--transition)

  hover:
    transform: translateY(-3px)
    box-shadow: var(--shadow-md)
    border-color: var(--primary-border)

  PHOTO CIRCLE:
    width: 80px | height: 80px | border-radius: 50%
    margin: 0 auto 14px
    background: var(--primary-light)
    border: 2px solid var(--primary-border)
    icon fallback: bi-person-fill (34px, var(--primary))

  POSITION BADGE:
    Same style as featured but smaller: font-size 11px, padding 3px 12px
    background: var(--primary-subtle)
    color: var(--primary)
    border: 1px solid var(--primary-border)

  NAME (h3):
    font-family: var(--font-bengali)
    font-size: 14px | font-weight: 600 | color: var(--text-primary)
    margin-bottom: 4px

  CATEGORY:
    font-size: 12px | color: var(--text-secondary)
    margin-bottom: 8px

  TERM BADGE: same compact style as featured

General members data:
  1. সদস্য | জনাব মোহাম্মদ আনিসুর রহমান      | শিক্ষক প্রতিনিধি
  2. সদস্য | জনাব মোহাম্মদ বেলাল হোসেন        | শিক্ষক প্রতিনিধি
  3. সদস্য | জনাবা মোসাম্মৎ জাহানারা বেগম     | অভিভাবক প্রতিনিধি
  4. সদস্য | জনাব মোহাম্মদ আকরামুল হক          | অভিভাবক প্রতিনিধি
  5. সদস্য | জনাব মোহাম্মদ জহিরুল ইসলাম        | দাতা সদস্য
  6. সদস্য | জনাব মোহাম্মদ রেজাউল করিম          | স্থানীয় শিক্ষানুরাগী
  7. সদস্য | জনাব মোহাম্মদ নাজমুল হুদা          | ওয়ার্ড কাউন্সিলর প্রতিনিধি
  8. সদস্য | জনাবা রাহেলা বেগম                  | মহিলা প্রতিনিধি

──────────────────────────────────────────────
SECTION 3 — RESPONSIBILITIES  (#committee-responsibilities)
──────────────────────────────────────────────
Background: var(--bg-body) | Padding: 80px 0

Section header:
  Bengali: "কমিটির দায়িত্ব ও কার্যাবলি"
  English: "Roles & Responsibilities"

Layout: 2 columns (col-lg-6 + col-lg-6), gap: 32px

Each column contains a responsibilities card (.responsibility-card):
  background: var(--bg-card)
  border: 1px solid var(--border-color)
  border-radius: var(--radius-md)
  padding: 32px
  height: 100%
  box-shadow: var(--shadow-sm)

  Card title row:
    Icon circle (44px, background var(--primary-subtle), border-radius 50%,
                 icon: 20px var(--primary)):
      Left card: bi-shield-check
      Right card: bi-bar-chart-line
    Title (h3): font-family var(--font-bengali), font-size 17px, font-weight 700,
                color var(--text-primary), margin-left 14px

  Responsibility list (.responsibility-list):
    list-style: none | padding: 0 | margin-top: 20px

    Each item (.responsibility-item):
      display: flex | align-items: flex-start | gap: 12px
      padding: 10px 0
      border-bottom: 1px solid var(--border-color)
      last-child: no border

      Bullet icon: bi-check2-circle (var(--primary), 16px, flex-shrink 0, margin-top 2px)
      Text: font-family var(--font-bengali), font-size 13.5px,
            color var(--text-secondary), line-height 1.7

LEFT CARD — "প্রশাসনিক দায়িত্ব" (Administrative):
  icon: bi-shield-check
  Items:
    1. "বিদ্যালয়ের সামগ্রিক নীতিনির্ধারণ ও পরিকল্পনা প্রণয়ন করা"
    2. "শিক্ষক ও কর্মচারী নিয়োগ, পদোন্নতি ও বদলি অনুমোদন করা"
    3. "বার্ষিক বাজেট অনুমোদন ও আর্থিক ব্যবস্থাপনা তদারকি করা"
    4. "বিদ্যালয়ের সম্পদ ও অবকাঠামো রক্ষণাবেক্ষণ নিশ্চিত করা"
    5. "সরকারি নির্দেশনা ও শিক্ষা বিভাগের আদেশ বাস্তবায়ন করা"
    6. "বার্ষিক প্রতিবেদন প্রস্তুত ও কর্তৃপক্ষের কাছে পেশ করা"

RIGHT CARD — "একাডেমিক দায়িত্ব" (Academic):
  icon: bi-bar-chart-line
  Items:
    1. "শিক্ষার মান উন্নয়নে প্রয়োজনীয় পদক্ষেপ গ্রহণ করা"
    2. "পাঠ্যক্রম ও সহশিক্ষা কার্যক্রম পর্যবেক্ষণ করা"
    3. "শিক্ষার্থীদের ভর্তি নীতিমালা নির্ধারণ ও বাস্তবায়ন করা"
    4. "বৃত্তি ও আর্থিক সহায়তা কার্যক্রম পরিচালনা করা"
    5. "পরীক্ষা পরিচালনা ও ফলাফল অনুমোদন করা"
    6. "শিক্ষার্থীদের শৃঙ্খলা ও নৈতিক উন্নয়নে ভূমিকা রাখা"

──────────────────────────────────────────────
SECTION 4 — MEETING SCHEDULE INFO BAR
──────────────────────────────────────────────
Background: var(--primary-subtle)
Border-top: 1px solid var(--primary-border)
Border-bottom: 1px solid var(--primary-border)
Padding: 40px 0

Layout: 4 equal columns (col-lg-3 col-sm-6), each centered

Each info item (.meeting-info-item):
  text-align: center | padding: 16px

  Icon circle (52px, background var(--primary), border-radius 50%, margin 0 auto 14px):
    icon: 22px white

  Label: font-size 12px, text-transform uppercase, letter-spacing 0.08em,
         color var(--text-muted), font-family var(--font-bengali), margin-bottom 6px

  Value: font-family var(--font-bengali), font-size 16px, font-weight 700,
         color var(--text-primary)

  Sub-value: font-size 12.5px, color var(--text-secondary), margin-top 4px

Items:
  1. bi-calendar-event | "সভার ধরন"    | "নিয়মিত সভা"       | "বছরে ন্যূনতম ৬ বার"
  2. bi-clock          | "সভার সময়"    | "বিকেল ৩:০০ টা"    | "প্রতি মাসের দ্বিতীয় বৃহস্পতিবার"
  3. bi-geo-alt        | "সভাস্থল"      | "বিদ্যালয় হলরুম"  | "আদর্শ রোড, মিরপুর, ঢাকা"
  4. bi-people         | "কোরাম"        | "৬ জন সদস্য"       | "সভা বৈধতার জন্য প্রয়োজনীয়"

═══════════════════════════════════════════════════════════
JAVASCRIPT — committee.html specific (add to app.js or inline <script>)
═══════════════════════════════════════════════════════════

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
  if (link.getAttribute('href') === 'committee.html') {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});

═══════════════════════════════════════════════════════════
ANIMATE-FADE-UP — apply to these elements
═══════════════════════════════════════════════════════════

Add class .animate-fade-up to:
- .committee-info-card
- .term-info-card
- Every .committee-card (featured and general)
- Every .responsibility-card
- Every .meeting-info-item
- Every .section-header

CSS for the animation (add to style.css if not already present):
.animate-fade-up {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.animate-fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

═══════════════════════════════════════════════════════════
ACCESSIBILITY & SEO
═══════════════════════════════════════════════════════════

- <html lang="bn" dir="ltr">
- One <h1> on the page (inside the hero banner only)
- Heading hierarchy: h1 (hero) → h2 (section headers) → h3 (card names/card titles)
- All photo circles: aria-label="[member name]-এর ছবি" on the wrapper div
- Table (if any): <caption> element
- All icon-only buttons: aria-label attribute
- Focus-visible ring: outline: 2px solid var(--primary); outline-offset: 2px
- aria-current="page" on "পরিচালনা কমিটি" nav link
- Meta tags:
    description: "আদর্শ উচ্চ বিদ্যালয় ও কলেজের পরিচালনা কমিটির সদস্য তালিকা,
                  দায়িত্ব ও কার্যাবলি।"
    keywords: "পরিচালনা কমিটি, managing committee, school committee, bangladesh school"
    og:title: "পরিচালনা কমিটি | আদর্শ উচ্চ বিদ্যালয় ও কলেজ"

═══════════════════════════════════════════════════════════
RESPONSIVE BEHAVIOUR
═══════════════════════════════════════════════════════════

- xs (<576px):  all cards single column | info bar 2×2 grid | section padding 48px 0
- sm (≥576px):  general member cards 2 columns | info bar 2×2
- md (≥768px):  info section 1 col stacked | featured 1 col stacked
- lg (≥992px):  info section 2 cols | featured 3 cols | general 4 cols | info bar 4 cols
- xl (≥1200px): full layout as specified
- Top bar (.topbar): d-none d-xl-flex
- Mobile navbar: hamburger, full-width collapsed menu, accordion dropdowns

═══════════════════════════════════════════════════════════
FINAL CHECKLIST
═══════════════════════════════════════════════════════════

[ ] <!DOCTYPE html>, lang="bn", all CDN links in <head>
[ ] Topbar + sticky main-navbar, all 8 nav items and correct dropdowns
[ ] "পরিচালনা কমিটি" marked active (aria-current="page")
[ ] Page hero banner (180px, gradient, breadcrumb, h1, subtitle)
[ ] Section 1: committee info card (left) + term info card with status badge (right)
[ ] Section 2: 3 featured cards (President, Secretary, Treasurer) + 8 general member cards
[ ] Section 3: 2 responsibility cards (6 items each) with icon circles and check bullets
[ ] Section 4: meeting info bar with 4 items
[ ] Full footer (top strip + 4-column main + bottom bar)
[ ] All JS: scroll animation, navbar scroll shadow, active nav link
[ ] .animate-fade-up applied to all cards, section headers, info items
[ ] Zero hardcoded colors — every color via CSS variable
[ ] No inline styles except JS-driven values
[ ] All interactive elements have focus-visible ring
[ ] WCAG AA contrast on all text
[ ] Responsive at all Bootstrap breakpoints
[ ] 100% complete code — no placeholder comments, no "TODO", no "add content here"