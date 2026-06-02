PROMPT: Build about.html — About School Page
Build the complete about.html page for the Bangladesh school website. Use the exact same design system, navbar, and footer already established in index.html. Build ONLY about.html and any new CSS additions needed in style.css.

DESIGN SYSTEM (already in variables.css — just reference these)
css:root {
  --hue: 214;
  --sat: 72%;
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
  --gray-500:       #64748b;
  --gray-700:       #334155;
  --gray-800:       #1e293b;
  --text-primary:   #1e293b;
  --text-secondary: #475569;
  --text-muted:     #94a3b8;
  --border-color:   #e2e8f0;
  --shadow-sm:      0 1px 3px rgba(0,0,0,0.08);
  --shadow-md:      0 4px 12px rgba(0,0,0,0.08);
  --shadow-lg:      0 10px 30px rgba(0,0,0,0.10);
  --radius-sm:      6px;
  --radius-md:      10px;
  --radius-lg:      16px;
  --font-primary:   'Public Sans', 'Noto Sans Bengali', sans-serif;
  --font-bengali:   'Noto Sans Bengali', 'Public Sans', sans-serif;
  --transition:     all 0.2s ease;
}
RULE: Never use hardcoded hex or rgb colors anywhere. Every color must use a CSS variable.

HEAD & META
html<!DOCTYPE html>
<html lang="bn" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>আমাদের বিদ্যালয় | আদর্শ উচ্চ বিদ্যালয় ও কলেজ</title>
  <meta name="description" content="আদর্শ উচ্চ বিদ্যালয় ও কলেজের ইতিহাস, লক্ষ্য, উদ্দেশ্য এবং বিদ্যালয় সম্পর্কিত বিস্তারিত তথ্য।">
  <meta property="og:title" content="আমাদের বিদ্যালয় | আদর্শ উচ্চ বিদ্যালয় ও কলেজ">
  <meta property="og:type" content="website">
  <link rel="canonical" href="about.html">
  <!-- Bootstrap 5.3.3 CSS -->
  <!-- Bootstrap Icons 1.11.3 -->
  <!-- Google Fonts: Noto Sans Bengali + Public Sans -->
  <link rel="stylesheet" href="assets/css/variables.css">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/css/responsive.css">
</head>

COPY NAVBAR & FOOTER EXACTLY FROM index.html

Same two-layer navbar (.topbar + .main-navbar)
Mark "আমাদের বিদ্যালয়" nav item as active (aria-current="page")
Same full footer (footer-top-strip + footer-main + footer-bottom)


PAGE STRUCTURE
html<main id="main-content">
  <section id="page-hero-banner">...</section>
  <section id="history">...</section>
  <section id="mission">...</section>
  <section id="at-a-glance">...</section>
  <section id="values">...</section>
  <section id="timeline">...</section>
  <section id="recognition">...</section>
  <section id="cta-strip">...</section>
</main>

SECTION 1 — PAGE HERO BANNER (#page-hero-banner)
Background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)
Height: 200px
Position: relative
Overflow: hidden

Decorative element (absolute, top-right):
  A large faint circle, width/height 300px
  background: rgba(255,255,255,0.04)
  border-radius: 50%
  top: -60px, right: -60px

Content (vertically centered, z-index: 1):
  Breadcrumb:
    font-size: 13px, color: rgba(255,255,255,0.70)
    Separator: <i class="bi bi-chevron-right"></i>
    Items: হোম → আমাদের বিদ্যালয়
    Link "হোম" → index.html (color: rgba white 0.70, hover: white)

  Page Title (h1):
    font-family: var(--font-bengali)
    font-size: clamp(1.6rem, 4vw, 2.4rem)
    font-weight: 700
    color: var(--white)
    margin-bottom: 4px
    text: "আমাদের বিদ্যালয় সম্পর্কে"

  Subtitle:
    font-size: 14px
    color: rgba(255,255,255,0.72)
    text: "About Adarsha High School & College"

SECTION 2 — SCHOOL HISTORY (#history)
Background: var(--white)
Padding: 80px 0

Layout: 2 columns (col-lg-6 each), gap: 48px, align-items: center

LEFT COLUMN — Image Block:
  Outer wrapper: position relative

  Main image placeholder:
    width: 100%
    aspect-ratio: 4/3
    background: var(--primary-light)
    border-radius: var(--radius-lg)
    overflow: hidden
    box-shadow: var(--shadow-lg)
    Display centered placeholder:
      <i class="bi bi-building"></i> (64px, var(--primary))
      "বিদ্যালয় ভবন" text below (Bengali, var(--text-secondary))

  Floating badge (absolute, bottom: -20px, right: -20px):
    background: var(--primary)
    color: var(--white)
    border-radius: var(--radius-md)
    padding: 16px 20px
    box-shadow: var(--shadow-lg)
    text-align: center
    Line 1: "১৯৬৫" (font-size: 28px, font-weight: 700)
    Line 2: "সালে প্রতিষ্ঠিত" (font-size: 11px, opacity: 0.85)

RIGHT COLUMN — Text Content:
  Section label (small tag above heading):
    display: inline-block
    background: var(--primary-subtle)
    color: var(--primary)
    border: 1px solid var(--primary-border)
    border-radius: 50px
    padding: 4px 14px
    font-size: 12px
    font-weight: 500
    margin-bottom: 12px
    text: "আমাদের গল্প"

  Heading (h2):
    font-family: var(--font-bengali)
    font-size: clamp(1.5rem, 3vw, 2rem)
    font-weight: 700
    color: var(--text-primary)
    line-height: 1.3
    margin-bottom: 16px
    text: "৫৮ বছরের গৌরবময় ইতিহাস"

  Decorative underline below h2:
    width: 56px, height: 4px
    background: linear-gradient(90deg, var(--primary), var(--accent))
    border-radius: 2px
    margin-bottom: 20px

  Body text (3 paragraphs, Bengali):
    font-family: var(--font-bengali)
    font-size: 15px
    line-height: 1.9
    color: var(--text-secondary)

    Para 1: "আদর্শ উচ্চ বিদ্যালয় ও কলেজ ১৯৬৫ সালে ঢাকার মিরপুরে প্রতিষ্ঠিত হয়। প্রতিষ্ঠার পর থেকেই এই বিদ্যালয় শিক্ষার মানোন্নয়নে অগ্রণী ভূমিকা পালন করে আসছে।"
    Para 2: "বিদ্যালয়টি বাংলাদেশ সরকারের শিক্ষা মন্ত্রণালয় কর্তৃক অনুমোদিত এবং মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, ঢাকার অধিভুক্ত। দীর্ঘ পাঁচ দশকেরও বেশি সময় ধরে এখানে হাজারো শিক্ষার্থী মানসম্পন্ন শিক্ষা গ্রহণ করেছে।"
    Para 3: "আজ এই প্রতিষ্ঠানে প্রায় ১,২০০ জন শিক্ষার্থী পাঠগ্রহণ করছে এবং ৪৫ জন অভিজ্ঞ শিক্ষক-কর্মচারী নিরলসভাবে শিক্ষার্থীদের সেবায় নিয়োজিত আছেন।"

  "আরও পড়ুন" expand button (optional toggle):
    color: var(--primary)
    font-weight: 500
    font-size: 14px
    cursor: pointer
    icon: <i class="bi bi-arrow-down-circle me-1"></i>

SECTION 3 — MISSION & VISION (#mission)
Background: var(--gray-50)
Padding: 80px 0

Section Header (centered):
  Bengali title: "লক্ষ্য ও উদ্দেশ্য"
  English subtitle: "Mission, Vision & Objectives"
  Decorative two-color underline (primary + accent, same as homepage pattern)

3 cards in a row (col-lg-4 each), gap: 24px, margin-top: 48px

CARD 1 — Vision (.mission-card):
  background: var(--white)
  border-radius: var(--radius-lg)
  padding: 36px 28px
  box-shadow: var(--shadow-sm)
  border-top: 4px solid var(--primary)
  transition: var(--transition)
  hover: translateY(-4px), box-shadow: var(--shadow-lg)
  class: animate-fade-up

  Icon circle (56px, background: var(--primary-light), border-radius: 50%, margin-bottom: 20px):
    icon: <i class="bi bi-eye-fill"></i> (24px, var(--primary))

  Card label badge:
    background: var(--primary-subtle)
    color: var(--primary)
    font-size: 11px
    font-weight: 600
    border-radius: 4px
    padding: 3px 10px
    text-transform: uppercase
    letter-spacing: 0.06em
    margin-bottom: 12px
    text: "Vision"

  Title (h3):
    font-family: var(--font-bengali)
    font-size: 1.2rem
    font-weight: 700
    color: var(--text-primary)
    margin-bottom: 12px
    text: "আমাদের দৃষ্টিভঙ্গি"

  Body:
    font-family: var(--font-bengali)
    font-size: 14px
    line-height: 1.85
    color: var(--text-secondary)
    text: "একটি জ্ঞান-ভিত্তিক, নৈতিক ও প্রযুক্তিমনষ্ক প্রজন্ম গড়ে তোলাই আমাদের মূল দৃষ্টিভঙ্গি — যারা দেশ ও সমাজের উন্নয়নে অবদান রাখতে সক্ষম হবে।"

CARD 2 — Mission:
  border-top color: var(--accent)
  Icon circle background: var(--accent-light)
  Icon: <i class="bi bi-bullseye"></i>, color: var(--accent)
  Badge: "Mission" (background var(--accent-light), color var(--accent))
  Title: "আমাদের লক্ষ্য"
  Body: "মানসম্পন্ন শিক্ষা, সুশৃঙ্খল পরিবেশ এবং আধুনিক শিক্ষণ পদ্ধতির মাধ্যমে প্রতিটি শিক্ষার্থীর সুপ্ত প্রতিভার বিকাশ ঘটানো এবং তাদের একজন আদর্শ নাগরিক হিসেবে গড়ে তোলা।"

CARD 3 — Objectives:
  border-top color: var(--primary)
  Icon: <i class="bi bi-check2-all"></i>, color: var(--primary)
  Badge: "Objectives"
  Title: "আমাদের উদ্দেশ্য"
  Body: bulleted checklist (4 items):
    Each item: <i class="bi bi-check-circle-fill" style (use var(--primary))></i> + Bengali text
    - "JSC ও SSC পরীক্ষায় শতভাগ পাস নিশ্চিত করা"
    - "সহশিক্ষা কার্যক্রমে শিক্ষার্থীদের সক্রিয় অংশগ্রহণ"
    - "ডিজিটাল শিক্ষা উপকরণ ব্যবহারে উৎসাহিত করা"
    - "অভিভাবক ও সমাজের সাথে সেতুবন্ধন রচনা করা"
    List style: no bullets, each item flex row gap 8px, font-size 13.5px, color var(--text-secondary), margin-bottom 10px

SECTION 4 — SCHOOL AT A GLANCE (#at-a-glance)
Background: var(--primary-dark)
Padding: 72px 0
Color: var(--white)

Section Header (centered, white text):
  Title: "এক নজরে বিদ্যালয়"
  Subtitle: "School at a Glance" (rgba white 0.65)
  Underline: white + var(--accent) two-color bar

Stats grid (Bootstrap row, col-6 col-md-3, margin-top: 48px):
  8 stat items total

  Each stat (.glance-stat):
    text-align: center
    padding: 20px 12px
    border-right: 1px solid rgba(255,255,255,0.12)
    (last of each row: border-right: none)

    Icon (32px, rgba white 0.60, margin-bottom: 12px)
    Number:
      font-size: clamp(1.8rem, 4vw, 2.6rem)
      font-weight: 700
      color: var(--white)
      data-target attribute for JS counter
    Label:
      font-family: var(--font-bengali)
      font-size: 13px
      color: rgba(255,255,255,0.65)
      margin-top: 4px

  Stats:
    1. bi-people-fill        | "১,২০০+"  | data-target="1200" | "মোট শিক্ষার্থী"
    2. bi-person-workspace   | "৪৫"      | data-target="45"   | "শিক্ষক ও কর্মচারী"
    3. bi-trophy-fill        | "৯৮%"     | data-target="98"   | "পাসের হার"
    4. bi-calendar3          | "৫৮"      | data-target="58"   | "বছরের অভিজ্ঞতা"
    5. bi-building           | "৩"       | data-target="3"    | "একাডেমিক ভবন"
    6. bi-book-fill          | "৬"       | data-target="6"    | "বিভাগ"
    7. bi-award-fill         | "১২০+"    | data-target="120"  | "জাতীয় পুরস্কার"
    8. bi-mortarboard-fill   | "৫০,০০০+" | data-target="50000"| "প্রাক্তন শিক্ষার্থী"

JS: IntersectionObserver triggers countUp() on each [data-target] element (reuse the counter from index.html app.js)

SECTION 5 — CORE VALUES (#values)
Background: var(--white)
Padding: 80px 0

Section Header (centered):
  Title: "আমাদের মূল্যবোধ"
  Subtitle: "Our Core Values"

6 value cards in a grid (col-lg-4 col-sm-6), gap: 20px, margin-top: 48px

Each card (.value-card):
  background: var(--white)
  border: 1px solid var(--border-color)
  border-radius: var(--radius-md)
  padding: 28px 24px
  display: flex
  align-items: flex-start
  gap: 16px
  transition: var(--transition)
  hover: box-shadow var(--shadow-md), border-color var(--primary-border), translateY(-2px)
  class: animate-fade-up

  Icon box (flex-shrink: 0):
    width: 48px, height: 48px
    background: var(--primary-subtle)
    border-radius: var(--radius-sm)
    display: flex; align-items: center; justify-content: center
    icon: 22px, color: var(--primary)
    hover (on parent): background var(--primary), icon color var(--white)

  Text block:
    Title (h4): font-family var(--font-bengali), font-size 1rem, font-weight 700,
                color var(--text-primary), margin-bottom 6px
    Body: font-family var(--font-bengali), font-size 13.5px, line-height 1.75,
          color var(--text-secondary)

Values:
  1. bi-heart-fill        | "সততা ও নৈতিকতা"   | "আমরা বিশ্বাস করি সততাই সর্বোত্তম পন্থা। নৈতিক মূল্যবোধ গঠনে আমরা প্রতিশ্রুতিবদ্ধ।"
  2. bi-lightbulb-fill    | "উৎকর্ষতা"          | "প্রতিটি ক্ষেত্রে শ্রেষ্ঠত্ব অর্জনে শিক্ষার্থীদের অনুপ্রাণিত করা আমাদের লক্ষ্য।"
  3. bi-people-fill       | "অন্তর্ভুক্তি"       | "ধর্ম, বর্ণ ও লিঙ্গ নির্বিশেষে সকল শিক্ষার্থীর জন্য সমান সুযোগ নিশ্চিত করি।"
  4. bi-globe2            | "দেশপ্রেম"           | "মুক্তিযুদ্ধের চেতনায় উদ্বুদ্ধ দেশপ্রেমিক নাগরিক গড়ে তোলাই আমাদের প্রতিশ্রুতি।"
  5. bi-cpu-fill          | "উদ্ভাবন"            | "আধুনিক প্রযুক্তি ও সৃজনশীল চিন্তার মাধ্যমে শিক্ষার্থীদের ভবিষ্যতের জন্য প্রস্তুত করি।"
  6. bi-hand-thumbs-up-fill | "দায়িত্ববোধ"     | "ব্যক্তিগত ও সামাজিক দায়িত্ববোধ সম্পন্ন মানুষ গঠনে আমরা নিরলস কাজ করে যাচ্ছি।"

SECTION 6 — HISTORY TIMELINE (#timeline)
Background: var(--gray-50)
Padding: 80px 0

Section Header (centered):
  Title: "আমাদের যাত্রার ইতিহাস"
  Subtitle: "Our Journey Through the Years"

Timeline layout: centered vertical line
  ::before on .timeline-wrapper:
    content: ''
    position: absolute
    left: 50%
    transform: translateX(-50%)
    width: 2px
    height: 100%
    background: var(--border-color)
    top: 0

8 timeline items (.timeline-item):
  Alternate left/right on desktop (odd: content left, even: content right)
  On mobile: all stack left with line on left edge

  Each item structure:
    .timeline-dot (circle on the center line):
      width: 40px, height: 40px
      background: var(--primary)
      border-radius: 50%
      border: 3px solid var(--white)
      box-shadow: 0 0 0 3px var(--primary-border)
      position: absolute, left: 50%, transform: translateX(-50%)
      display: flex; align-items: center; justify-content: center
      icon: 16px, white (relevant Bootstrap Icon)

    .timeline-content (card):
      background: var(--white)
      border: 1px solid var(--border-color)
      border-radius: var(--radius-md)
      padding: 20px 24px
      box-shadow: var(--shadow-sm)
      max-width: 420px
      transition: var(--transition)
      hover: box-shadow var(--shadow-md), border-color var(--primary-border)

      Year badge:
        display: inline-block
        background: var(--primary)
        color: var(--white)
        font-size: 13px
        font-weight: 700
        border-radius: var(--radius-sm)
        padding: 3px 12px
        margin-bottom: 10px

      Title (h4): font-family var(--font-bengali), font-size 1rem,
                  font-weight 700, color var(--text-primary), margin-bottom 8px

      Body: font-family var(--font-bengali), font-size 13.5px,
            line-height 1.75, color var(--text-secondary)

Timeline data:
  1965 | bi-building        | "বিদ্যালয় প্রতিষ্ঠা"           | "মাত্র ১২০ জন শিক্ষার্থী ও ৮ জন শিক্ষক নিয়ে বিদ্যালয়ের যাত্রা শুরু হয়।"
  1971 | bi-flag-fill       | "মুক্তিযুদ্ধে অবদান"            | "মুক্তিযুদ্ধকালীন বিদ্যালয়ের শিক্ষক ও ছাত্ররা সক্রিয়ভাবে মুক্তিযুদ্ধে অংশগ্রহণ করেন।"
  1980 | bi-award-fill      | "প্রথম জাতীয় পুরস্কার"          | "জাতীয় শিক্ষা সপ্তাহে সেরা বিদ্যালয় হিসেবে প্রথমবার জাতীয় পুরস্কার অর্জন।"
  1990 | bi-people-fill     | "কলেজ শাখা উদ্বোধন"             | "উচ্চ মাধ্যমিক শাখা যোগ হওয়ায় বিদ্যালয় পূর্ণাঙ্গ শিক্ষা প্রতিষ্ঠানে পরিণত হয়।"
  2000 | bi-pc-display      | "কম্পিউটার ল্যাব স্থাপন"        | "আধুনিক কম্পিউটার ল্যাব স্থাপনের মাধ্যমে ডিজিটাল শিক্ষার সূচনা হয়।"
  2010 | bi-wifi            | "ডিজিটাল ক্লাসরুম চালু"         | "মাল্টিমিডিয়া প্রজেক্টর ও ইন্টারেক্টিভ বোর্ডসহ ডিজিটাল ক্লাসরুম চালু করা হয়।"
  2018 | bi-trophy-fill     | "শ্রেষ্ঠ বিদ্যালয় পুরস্কার"    | "ঢাকা বোর্ডের অধীনে শ্রেষ্ঠ মাধ্যমিক বিদ্যালয় হিসেবে স্বীকৃতি লাভ।"
  2023 | bi-mortarboard-fill | "৫০,০০০ প্রাক্তন শিক্ষার্থী"  | "বিদ্যালয়ের গৌরবময় যাত্রায় ৫০,০০০তম প্রাক্তন শিক্ষার্থী নথিভুক্ত হন।"

animate-fade-up class on each .timeline-item

SECTION 7 — RECOGNITION & AFFILIATION (#recognition)
Background: var(--white)
Padding: 80px 0

Section Header (centered):
  Title: "স্বীকৃতি ও অধিভুক্তি"
  Subtitle: "Recognition & Affiliation"

Layout: 2 parts

PART A — Info Table (col-lg-7):
  Heading (h3, Bengali): "প্রতিষ্ঠান সংক্রান্ত তথ্য"
  font-family: var(--font-bengali), font-size: 1.1rem, font-weight: 700,
  color: var(--text-primary), margin-bottom: 20px

  Responsive table (.info-table):
    width: 100%
    border-collapse: collapse
    font-family: var(--font-bengali)
    font-size: 14px

    thead: background var(--primary), color white
    th: padding 12px 16px, text-align left, font-weight 600

    tbody tr (alternating):
      odd: background var(--white)
      even: background var(--gray-50)

    td: padding 12px 16px, color var(--text-secondary), border-bottom 1px solid var(--border-color)
    td:first-child: color var(--text-primary), font-weight 500

    Rows:
      "বিদ্যালয়ের নাম"      | "আদর্শ উচ্চ বিদ্যালয় ও কলেজ"
      "EIIN নম্বর"           | "১২৩৪৫৬"
      "বিদ্যালয় কোড"         | "৪৫০১"
      "প্রতিষ্ঠা সাল"         | "১৯৬৫"
      "প্রতিষ্ঠানের ধরন"      | "নিম্ন মাধ্যমিক, মাধ্যমিক ও উচ্চ মাধ্যমিক"
      "শিফট"                 | "দুই শিফট (সকাল ও দুপুর)"
      "MPO স্ট্যাটাস"         | "MPO ভুক্ত"
      "বোর্ড অধিভুক্তি"       | "ঢাকা মাধ্যমিক ও উচ্চমাধ্যমিক শিক্ষা বোর্ড"
      "অবস্থান"              | "মিরপুর, ঢাকা-১২১৬"
      "সরকারি স্বীকৃতি"       | "বাংলাদেশ শিক্ষা মন্ত্রণালয় কর্তৃক অনুমোদিত"

  Print button below table:
    background: var(--primary-subtle)
    border: 1px solid var(--primary-border)
    color: var(--primary)
    border-radius: var(--radius-sm)
    padding: 9px 22px
    font-size: 14px
    font-weight: 500
    icon: <i class="bi bi-printer me-2"></i>
    text: "প্রিন্ট করুন"
    onclick: window.print()

PART B — Affiliation Badges (col-lg-5):
  Heading (h3, Bengali): "অনুমোদন ও সংযুক্তি"
  font-family: var(--font-bengali), same style as above

  4 affiliation cards stacked (.affiliation-card):
    background: var(--gray-50)
    border: 1px solid var(--border-color)
    border-left: 4px solid var(--primary)
    border-radius: var(--radius-md)
    padding: 16px 20px
    display: flex
    align-items: center
    gap: 14px
    margin-bottom: 12px
    transition: var(--transition)
    hover: border-left-color var(--accent), background var(--white), shadow-sm

    Icon circle (40px, background var(--primary-light), border-radius 50%):
      icon: 18px, color var(--primary)

    Text:
      Title: font-size 14px, font-weight 600, color var(--text-primary)
      Sub:   font-size 12px, color var(--text-muted)

  Cards:
    bi-bank          | "বাংলাদেশ শিক্ষা মন্ত্রণালয়"           | "সরকারি অনুমোদনপ্রাপ্ত"
    bi-journal-check | "ঢাকা শিক্ষা বোর্ড"                    | "মাধ্যমিক ও উচ্চমাধ্যমিক বোর্ড অধিভুক্ত"
    bi-patch-check   | "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড"| "NCTB অনুমোদিত পাঠ্যক্রম"
    bi-shield-check  | "উপানুষ্ঠানিক শিক্ষা ব্যুরো"            | "DPE তালিকাভুক্ত"

SECTION 8 — CTA STRIP (#cta-strip)
Background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)
Padding: 64px 0
Text-align: center

Decorative background pattern (subtle):
  Two large circles (absolute, rgba white 0.04)

Content:
  Icon: <i class="bi bi-mortarboard-fill"></i>
  (font-size: 48px, color: rgba white 0.80, margin-bottom: 16px)

  Heading (h2):
    font-family: var(--font-bengali)
    font-size: clamp(1.5rem, 3vw, 2rem)
    font-weight: 700
    color: var(--white)
    margin-bottom: 12px
    text: "আমাদের পরিবারের অংশ হন"

  Subtext:
    font-family: var(--font-bengali)
    font-size: 15px
    color: rgba(255,255,255,0.75)
    max-width: 500px
    margin: 0 auto 32px
    text: "২০২৫-২৬ শিক্ষাবর্ষে ভর্তির আবেদন চলছে। আজই আবেদন করুন এবং একটি উজ্জ্বল ভবিষ্যতের দিকে এগিয়ে যান।"

  2 buttons (flex, justify-content center, gap: 16px, flex-wrap: wrap):
    Button 1 (Primary filled, white):
      background: var(--white)
      color: var(--primary)
      border: none
      padding: 13px 32px
      border-radius: var(--radius-sm)
      font-family: var(--font-bengali)
      font-size: 15px, font-weight: 600
      icon: <i class="bi bi-pencil-square me-2"></i>
      text: "ভর্তি আবেদন করুন"
      hover: background var(--gray-100)

    Button 2 (Ghost white outline):
      background: transparent
      color: var(--white)
      border: 2px solid rgba(255,255,255,0.60)
      padding: 11px 30px
      border-radius: var(--radius-sm)
      font-family: var(--font-bengali)
      font-size: 15px, font-weight: 600
      icon: <i class="bi bi-telephone me-2"></i>
      text: "যোগাযোগ করুন"
      hover: border-color white, background rgba(255,255,255,0.10)

SCROLL ANIMATIONS (reuse from app.js)
Apply .animate-fade-up to:
- All section headers (.section-header)
- All cards: .mission-card, .value-card, .timeline-item, .affiliation-card
- The history text block and image block
- The glance stats row
- The info table and affiliation column

Staggered delay on card grids:
document.querySelectorAll('.row > [class*="col"] .animate-fade-up').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.1}s`;
});

RESPONSIVE RULES
Mobile (< 768px):
  #history layout: single column, image on top, text below
  Floating badge on image: bottom: -12px, right: 12px (smaller)
  #mission cards: single column
  #at-a-glance stats: 2-column grid (col-6)
  #values cards: single column
  #timeline: all items left-aligned, center line moves to left: 20px
    .timeline-dot: left: 20px
    .timeline-content: margin-left: 52px, max-width: 100%
  #recognition: table becomes horizontally scrollable (overflow-x: auto)
  #recognition parts: single column (table full width, badges below)
  CTA strip buttons: stack vertically, full width

IMPORTANT RULES

Copy the exact navbar and footer HTML from index.html — do not simplify or omit any part.
Mark আমাদের বিদ্যালয় nav item as active.
Never use hardcoded colors — only CSS variables.
All Bengali text uses font-family: var(--font-bengali).
All icons are Bootstrap Icons (bi bi-*).
No jQuery, no Tailwind, no external JS libraries.
JS counter animation reuses the existing countUp logic from app.js.
All cards have animate-fade-up class for scroll reveal.
Build 100% complete code — no placeholder comments, no "add content here".
Anchor links about.html#history and about.html#mission must match the actual section IDs used.