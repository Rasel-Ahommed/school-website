Build the complete homepage (index.html) for a Bangladesh school website.
Use the established design system below. Build ONLY index.html, style.css
additions, and relevant app.js sections for this page.

═══════════════════════════════════════════════════════════
DESIGN SYSTEM (already in variables.css — just reference these)
═══════════════════════════════════════════════════════════

:root {
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
  --white:          #ffffff;
  --gray-50:        #f8fafc;
  --gray-100:       #f1f5f9;
  --gray-200:       #e2e8f0;
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

Google Fonts import (in <head>):
https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700&family=Public+Sans:wght@300;400;500;600;700&display=swap

CDN links needed in every page:
- Bootstrap 5.3.3 CSS + JS bundle
- Bootstrap Icons 1.11.3
- Google Fonts (above)

═══════════════════════════════════════════════════════════
COMPONENT 1: NAVBAR
═══════════════════════════════════════════════════════════

Build a two-layer sticky navbar.

──────────────────────────────────────────────
LAYER 1 — TOP BAR  (.topbar)
──────────────────────────────────────────────
Height: 36px
Background: var(--primary-dark)
Text color: rgba(255,255,255,0.85)
Font size: 12px

Left side:
  - Small Bangladesh flag emoji + "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার"
  - Separator " | "
  - "জাতীয় শিক্ষা সপ্তাহ ২০২৫" (small marquee or static text)

Right side (flex, gap: 16px):
  - <i class="bi bi-telephone-fill"></i> +880 2-XXXXXXXX
  - <i class="bi bi-envelope-fill"></i> info@adarshaschool.edu.bd
  - Social icons: Facebook | YouTube | (each 14px, white, hover: var(--accent))

CSS:
.topbar {
  background: var(--primary-dark);
  color: rgba(255,255,255,0.85);
  font-size: 12px;
  height: 36px;
  display: flex;
  align-items: center;
}
.topbar a {
  color: rgba(255,255,255,0.75);
  text-decoration: none;
  transition: var(--transition);
}
.topbar a:hover { color: #fff; }

──────────────────────────────────────────────
LAYER 2 — MAIN NAVBAR  (.main-navbar)
──────────────────────────────────────────────
Background: var(--white)
Border-bottom: 1px solid var(--border-color)
Height: 70px
Sticky: position: sticky; top: 0; z-index: 1030;
On scroll (JS adds .scrolled): box-shadow: var(--shadow-md);

LEFT — LOGO BLOCK (.navbar-brand):
  - Image: assets/images/logo.png (48px × 48px, object-fit: contain)
  - Right of image, two lines:
      Line 1: "আদর্শ উচ্চ বিদ্যালয় ও কলেজ"
              font-family: var(--font-bengali)
              font-size: 17px
              font-weight: 700
              color: var(--primary-dark)
      Line 2: "Adarsha High School & College, Dhaka"
              font-size: 11px
              font-weight: 400
              color: var(--text-secondary)

CENTER — NAV LINKS (Bootstrap navbar-nav, navbar-expand-xl):
  Font size: 13.5px
  Font weight: 500
  Color: var(--text-primary)
  Padding: 0 14px
  Hover color: var(--primary)
  Active color: var(--primary)
  Active indicator: 2px bottom border, color var(--primary)

  Nav items:
  1. হোম                    → index.html        (no dropdown)
  2. আমাদের বিদ্যালয়       → dropdown:
       - ইতিহাস              about.html#history
       - লক্ষ্য ও উদ্দেশ্য   about.html#mission
       - প্রতিষ্ঠান তথ্য     institute-info.html
  3. প্রশাসন                → dropdown:
       - প্রধান শিক্ষকের বাণী  head-teacher.html
       - পরিচালনা কমিটি        committee.html
       - শিক্ষক-কর্মচারী       teachers.html
  4. একাডেমিক              → dropdown:
       - একাডেমিক ক্যালেন্ডার  academic.html#calendar
       - শ্রেণি রুটিন           academic.html#routine
       - সিলেবাস               academic.html#syllabus
       - পরীক্ষার তথ্য         academic.html#exam
       - ফলাফল                 results.html
  5. ভর্তি                 → admission.html    (no dropdown)
  6. নোটিশ বোর্ড           → notices.html      (no dropdown)
  7. গ্যালারি              → gallery.html      (no dropdown)
  8. যোগাযোগ              → contact.html      (no dropdown)

  Dropdown styles:
  - background: var(--white)
  - border: 1px solid var(--border-color)
  - border-radius: var(--radius-md)
  - box-shadow: var(--shadow-lg)
  - min-width: 220px
  - Dropdown items: font-size 13px, padding 8px 16px
  - Dropdown item hover: background var(--primary-subtle), color var(--primary)
  - Left accent bar on hover: border-left: 3px solid var(--primary)

RIGHT — ACTION BUTTONS:
  - "ভর্তি আবেদন" button:
      background: var(--accent)
      color: white
      border-radius: var(--radius-sm)
      font-size: 13px
      font-weight: 600
      padding: 8px 18px
      hover: background var(--accent-dark)
      icon: <i class="bi bi-pencil-square me-1"></i>
  - "অনুসন্ধান" icon button:
      background: transparent
      border: 1px solid var(--border-color)
      border-radius: var(--radius-sm)
      width: 36px, height: 36px
      icon: <i class="bi bi-search"></i>
      hover: background var(--primary-subtle)

MOBILE (below xl breakpoint):
  - Hamburger button: Bootstrap navbar-toggler, custom styled
  - Collapsed menu: full-width, white background
  - Each nav item full width, border-bottom: 1px solid var(--gray-100)
  - Dropdowns become accordion-style (Bootstrap collapse)
  - Action buttons stack below nav links
  - Top bar HIDDEN on mobile (d-none d-xl-flex)

JAVASCRIPT for navbar:
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.main-navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Active link detection
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});

═══════════════════════════════════════════════════════════
COMPONENT 2: FOOTER
═══════════════════════════════════════════════════════════

──────────────────────────────────────────────
FOOTER TOP STRIP  (.footer-top-strip)
──────────────────────────────────────────────
Background: var(--primary)
Padding: 20px 0
Content: flex row, space-between
  Left:  "🎓 ২০২৫ সালের ভর্তি কার্যক্রম চলছে" (white, font-weight: 600)
  Right: "ভর্তির জন্য আবেদন করুন" button
         (background: var(--accent), color: white, border-radius: var(--radius-sm))

──────────────────────────────────────────────
FOOTER MAIN  (.footer-main)
──────────────────────────────────────────────
Background: var(--primary-dark)
Color: rgba(255,255,255,0.80)
Padding: 56px 0 32px
Font-size: 13.5px
Line-height: 1.9

4-column Bootstrap grid (col-xl-3, col-lg-3, col-md-6):

COLUMN 1 — About:
  - Logo (40px) + school name (white, Bengali, font-size 16px, font-weight 700)
  - English name (rgba white 0.6, 12px)
  - Horizontal rule (rgba white 0.15)
  - Short Bengali description (2–3 lines, rgba white 0.75)
  - EIIN badge: "EIIN: 123456"
    (background: rgba white 0.1, border-radius: 4px, padding: 4px 10px, font-size: 12px)
  - Social icons row (Facebook, YouTube, Twitter/X):
    Each icon: 32px circle, background rgba white 0.1,
    hover: background var(--accent),
    transition: var(--transition)

COLUMN 2 — দ্রুত লিঙ্ক (Quick Links):
  Heading: "দ্রুত লিঙ্ক" (white, font-weight: 600, font-size: 15px)
  Heading underline: 30px wide, 2px, color var(--accent), margin-bottom: 20px
  Links list (no bullets):
    - হোম
    - আমাদের সম্পর্কে
    - প্রধান শিক্ষকের বাণী
    - শিক্ষক-কর্মচারী
    - পরিচালনা কমিটি
    - নোটিশ বোর্ড
    - গ্যালারি
    - যোগাযোগ
  Each link:
    color: rgba(255,255,255,0.75)
    hover color: white
    display: flex; align-items: center; gap: 8px
    icon before: <i class="bi bi-chevron-right"></i> (10px, var(--accent))
    padding: 4px 0
    border-bottom: 1px solid rgba(255,255,255,0.06)

COLUMN 3 — একাডেমিক লিঙ্ক (Academic Links):
  Same heading style as column 2
  Heading: "একাডেমিক"
  Links:
    - একাডেমিক ক্যালেন্ডার
    - শ্রেণি রুটিন
    - সিলেবাস
    - পরীক্ষার তথ্য
    - ফলাফল
    - ভর্তি তথ্য
    - ডাউনলোড সেন্টার
    - অভিযোগ ও GRS
  Same link style as column 2

COLUMN 4 — যোগাযোগ (Contact):
  Heading: "যোগাযোগ করুন"
  Same heading style
  Contact items (each item: flex row, gap: 12px, padding: 8px 0,
                 border-bottom: 1px solid rgba white 0.06):
    1. Icon: <i class="bi bi-geo-alt-fill"></i> (var(--accent), 16px)
       Text: "ঢাকা, বাংলাদেশ\nআদর্শ রোড, মিরপুর"
    2. Icon: <i class="bi bi-telephone-fill"></i>
       Text: "+880 2-XXXXXXXX\n+880 1X-XXXXXXXX"
    3. Icon: <i class="bi bi-envelope-fill"></i>
       Text: "info@adarshaschool.edu.bd"
    4. Icon: <i class="bi bi-clock-fill"></i>
       Text: "শনি–বৃহস্পতি: সকাল ৮টা – বিকেল ৪টা"
    5. Icon: <i class="bi bi-globe"></i>
       Text: "www.adarshaschool.edu.bd"

  Icons: color var(--accent), min-width: 18px
  Text: color rgba(255,255,255,0.75), font-size: 13px

──────────────────────────────────────────────
FOOTER BOTTOM BAR  (.footer-bottom)
──────────────────────────────────────────────
Background: rgba(0,0,0,0.25) on top of primary-dark
  (use: background: hsl(var(--hue), var(--sat), 14%))
Padding: 14px 0
Border-top: 1px solid rgba(255,255,255,0.10)
Font-size: 12px

Left: "© ২০২৫ আদর্শ উচ্চ বিদ্যালয় ও কলেজ। সর্বস্বত্ব সংরক্ষিত।"
       color: rgba(255,255,255,0.60)

Right: flex row, gap: 16px
  - "গোপনীয়তা নীতি" → privacy.html
  - "সাইটম্যাপ" → sitemap.html
  - "অভিযোগ ও GRS" → grs.html
  All links: color rgba white 0.60, hover: white

Mobile: both sides stack center-aligned

═══════════════════════════════════════════════════════════
HOMEPAGE SECTIONS (index.html body content)
Between navbar and footer, build these 13 sections in order:
═══════════════════════════════════════════════════════════

──────────────────────────────────────────────
SECTION 1 — HERO  (#hero)
──────────────────────────────────────────────
Background: var(--white)
Min-height: 88vh
Display: flex; align-items: center
Padding: 60px 0

Decorative background elements (CSS only, no images):
  - Large circle: position absolute, top: -100px, right: -100px
    width: 500px, height: 500px
    background: var(--primary-subtle)
    border-radius: 50%
    z-index: 0
  - Small circle: bottom: 80px, left: -60px
    width: 200px, height: 200px
    background: hsl(var(--hue), var(--sat), 94%)
    border-radius: 50%
  - Dot grid pattern: use CSS background-image radial-gradient dots
    subtle, var(--primary-border) dots, 20px spacing

LEFT COLUMN (col-xl-6, col-lg-7):
  z-index: 1 (above decorative circles)

  1. TOP BADGE:
     Inline-flex pill
     background: var(--primary-subtle)
     border: 1px solid var(--primary-border)
     border-radius: 50px
     padding: 6px 16px
     font-size: 12px
     font-weight: 500
     color: var(--primary)
     icon: <i class="bi bi-patch-check-fill me-2"></i>
     text: "সরকার অনুমোদিত শিক্ষা প্রতিষ্ঠান"
     margin-bottom: 24px

  2. SCHOOL NAME (h1):
     font-family: var(--font-bengali)
     font-size: clamp(1.8rem, 4vw, 2.8rem)
     font-weight: 700
     color: var(--primary-dark)
     line-height: 1.25
     margin-bottom: 6px
     text: "আদর্শ উচ্চ বিদ্যালয় ও কলেজ"

  3. ENGLISH NAME (h2):
     font-size: clamp(1rem, 2vw, 1.2rem)
     font-weight: 400
     color: var(--text-secondary)
     margin-bottom: 16px
     text: "Adarsha High School & College, Dhaka"

  4. MOTTO LINE:
     font-family: var(--font-bengali)
     font-size: 15px
     font-style: italic
     color: var(--accent)
     border-left: 3px solid var(--accent)
     padding-left: 12px
     margin-bottom: 20px
     text: "শিক্ষাই জাতির মেরুদণ্ড"

  5. INFO PILLS ROW (flex, gap: 10px, flex-wrap: wrap):
     Each pill:
       background: var(--gray-100)
       border-radius: 50px
       padding: 5px 14px
       font-size: 12px
       color: var(--text-secondary)
     Pill 1: <i class="bi bi-building me-1"></i> "প্রতিষ্ঠা: ১৯৬৫"
     Pill 2: <i class="bi bi-card-text me-1"></i> "EIIN: ১২৩৪৫৬"
     Pill 3: <i class="bi bi-geo-alt me-1"></i> "ঢাকা, বাংলাদেশ"
     Pill 4: <i class="bi bi-clock me-1"></i> "শনি–বৃহস্পতি"
     margin-bottom: 32px

  6. CTA BUTTONS (flex, gap: 12px, flex-wrap: wrap):
     Button 1 — Primary filled:
       background: var(--primary)
       color: white
       border: none
       border-radius: var(--radius-sm)
       padding: 13px 28px
       font-size: 15px
       font-weight: 600
       font-family: var(--font-bengali)
       icon: <i class="bi bi-pencil-square me-2"></i>
       text: "ভর্তি আবেদন করুন"
       hover: background var(--primary-hover), translateY(-1px), shadow-md
       transition: var(--transition)

     Button 2 — Outline:
       background: transparent
       color: var(--primary)
       border: 2px solid var(--primary)
       border-radius: var(--radius-sm)
       padding: 11px 28px
       font-size: 15px
       font-weight: 600
       font-family: var(--font-bengali)
       icon: <i class="bi bi-telephone me-2"></i>
       text: "যোগাযোগ করুন"
       hover: background var(--primary-subtle), translateY(-1px)

  7. TRUST INDICATORS ROW (margin-top: 36px):
     Flex row, gap: 24px, align-items: center
     Separator: 1px solid var(--border-color)

     Item 1: 
       Number: "৯৮%" (font-size: 22px, font-weight: 700, color: var(--primary))
       Label: "পাসের হার" (font-size: 12px, color: var(--text-muted))

     Vertical divider: 1px solid var(--border-color), height: 36px

     Item 2:
       Number: "১,২০০+" (same style)
       Label: "শিক্ষার্থী"

     Vertical divider

     Item 3:
       Number: "৫৮ বছর" (same style)
       Label: "অভিজ্ঞতা"

RIGHT COLUMN (col-xl-6, col-lg-5):
  Position: relative
  Display: flex; justify-content: center; align-items: center

  MAIN IMAGE FRAME:
    Container: position relative, display inline-block
    Image: assets/images/school-building.jpg
      width: 100%
      max-width: 520px
      height: 420px
      object-fit: cover
      border-radius: var(--radius-lg)
      box-shadow: var(--shadow-lg)
      display: block

  FLOATING BADGE 1 (position absolute, bottom: -20px, left: -20px):
    background: var(--white)
    border-radius: var(--radius-md)
    box-shadow: var(--shadow-md)
    padding: 14px 18px
    display: flex; align-items: center; gap: 12px
    Icon container: 44px circle, background var(--primary-subtle)
      icon: <i class="bi bi-award-fill"></i> (var(--primary), 20px)
    Text:
      "শ্রেষ্ঠ বিদ্যালয়" (font-size: 13px, font-weight: 600, color: var(--text-primary))
      "জাতীয় পুরস্কার ২০২৪" (font-size: 11px, color: var(--text-muted))

  FLOATING BADGE 2 (position absolute, top: 20px, right: -20px):
    Same card style
    Icon: <i class="bi bi-people-fill"></i>
    Text: "৪৫ জন" (font-weight: 700, color: var(--primary))
          "অভিজ্ঞ শিক্ষক"

MOBILE HERO:
  - Right column image: comes FIRST on mobile (order: -1)
  - Image height: 260px
  - Floating badges: hidden on xs (d-none d-sm-flex)
  - Text centered on xs
  - CTA buttons: full width, stacked

──────────────────────────────────────────────
SECTION 2 — STATISTICS  (#statistics)
──────────────────────────────────────────────
Background: var(--primary)
Padding: 56px 0
Color: white

4 stat cards in a row (col-lg-3, col-sm-6):
  Each card:
    text-align: center
    padding: 32px 20px
    border-right: 1px solid rgba(255,255,255,0.15)
    last child: no border

    Icon circle (60px, background: rgba white 0.15, border-radius: 50%, margin: 0 auto 16px):
      icon: 26px, white

    Number (data-target attribute for JS counter):
      font-size: 2.4rem
      font-weight: 700
      font-family: var(--font-bengali)
      color: white
      display: block

    Label:
      font-size: 14px
      color: rgba(255,255,255,0.80)
      font-family: var(--font-bengali)

    Sublabel (small note):
      font-size: 11px
      color: rgba(255,255,255,0.55)
      margin-top: 4px

  Card 1: icon bi-people-fill    | "১,২০০+" | "মোট শিক্ষার্থী"  | "২০২৫ সেশন"
  Card 2: icon bi-person-badge   | "৪৫"     | "শিক্ষক-কর্মচারী" | "অভিজ্ঞ ও প্রশিক্ষিত"
  Card 3: icon bi-graph-up-arrow | "৯৮%"    | "পাসের হার"        | "গত ৫ বছরের গড়"
  Card 4: icon bi-calendar3      | "৫৮"     | "বছরের অভিজ্ঞতা"  | "প্রতিষ্ঠা ১৯৬৫ সাল"

JS Counter animation:
  Trigger: IntersectionObserver (threshold: 0.3)
  On enter: animate from 0 to data-target over 2000ms
  Easing: easeOutQuart
  Once only (disconnect after trigger)

──────────────────────────────────────────────
SECTION 3 — HEAD TEACHER MESSAGE  (#headteacher)
──────────────────────────────────────────────
Background: var(--white)
Padding: 80px 0

Section header component (centered):
  Bengali title: "প্রধান শিক্ষকের বাণী"
  English subtitle: "Message from the Head Teacher"
  Decorative underline: 50px wide, 3px, gradient from var(--primary) to var(--accent)

Two-column layout (col-lg-4 left, col-lg-8 right):

LEFT — PHOTO COLUMN:
  Centered content
  Photo frame:
    width: 200px, height: 200px
    border-radius: 50%
    overflow: hidden
    border: 5px solid var(--primary-light)
    outline: 3px solid var(--primary)
    outline-offset: 4px
    image: assets/images/headteacher.jpg (object-fit: cover)
    box-shadow: var(--shadow-lg)
    margin: 0 auto 20px

  Name: "জনাব মোহাম্মদ আবদুল করিম"
    font-family: var(--font-bengali)
    font-size: 18px
    font-weight: 700
    color: var(--text-primary)
    text-align: center

  Designation: "প্রধান শিক্ষক"
    font-size: 14px
    color: var(--primary)
    font-weight: 500
    text-align: center
    margin-bottom: 4px

  School name: "আদর্শ উচ্চ বিদ্যালয় ও কলেজ"
    font-size: 12px
    color: var(--text-muted)
    text-align: center

  Qualifications pills (flex, justify: center, flex-wrap: wrap, gap: 6px, margin-top: 16px):
    "M.A. (Bengali)" | "B.Ed" | "M.Ed"
    Each: background var(--gray-100), border-radius 50px,
          padding: 4px 12px, font-size: 11px, color: var(--text-secondary)

RIGHT — MESSAGE COLUMN:
  Quote icon:
    <i class="bi bi-quote"></i>
    font-size: 72px
    color: var(--primary-light)
    line-height: 1
    margin-bottom: -20px (overlap with text)
    display: block

  Message text:
    font-family: var(--font-bengali)
    font-size: 15.5px
    line-height: 1.9
    color: var(--text-secondary)
    (4–5 lines of Bengali text about school excellence)
    "আমাদের বিদ্যালয়ে আপনাকে স্বাগতম। শিক্ষার আলো ছড়িয়ে দেওয়াই আমাদের লক্ষ্য।
     প্রতিটি শিক্ষার্থীর মেধা ও মননের বিকাশে আমরা প্রতিশ্রুতিবদ্ধ। আমাদের
     অভিজ্ঞ শিক্ষকমণ্ডলী সর্বদা শিক্ষার্থীদের সাফল্যের জন্য নিবেদিত।
     একটি উন্নত, আলোকিত ভবিষ্যৎ গড়ে তুলতে আমরা একসাথে কাজ করে যাচ্ছি।"

  Divider: 1px solid var(--border-color), margin: 20px 0

  Signature row (flex, align-items: center, justify: space-between):
    Left: signature image placeholder (120px wide, grayscale filter)
    Right: "Read More" link button:
      color: var(--primary)
      font-weight: 600
      font-size: 14px
      icon: <i class="bi bi-arrow-right-circle ms-2"></i>
      hover: color var(--primary-dark), icon translateX(3px)

──────────────────────────────────────────────
SECTION 4 — NOTICE BOARD  (#notices)
──────────────────────────────────────────────
Background: var(--gray-50)
Padding: 80px 0

Section header:
  Bengali title: "নোটিশ বোর্ড"
  English subtitle: "Important Notices & Announcements"

Two-column layout (col-lg-8 left, col-lg-4 right):

LEFT — NOTICE LIST:
  5 notice items, each structured as:

  Notice Item (.notice-item):
    display: flex
    gap: 16px
    padding: 16px
    background: var(--white)
    border-radius: var(--radius-md)
    border-left: 4px solid [color varies by type]
    box-shadow: var(--shadow-sm)
    margin-bottom: 12px
    transition: var(--transition)
    hover: box-shadow var(--shadow-md), translateX(3px)

    DATE BOX (flex-shrink: 0):
      width: 52px, height: 52px
      background: var(--primary-subtle)
      border-radius: var(--radius-sm)
      display: flex; flex-direction: column; align-items: center; justify-content: center
      Day: font-size: 18px, font-weight: 700, color: var(--primary)
      Month: font-size: 10px, color: var(--text-muted), text-transform: uppercase

    CONTENT (flex: 1):
      Category badge (top):
        font-size: 10px, font-weight: 600
        border-radius: 4px, padding: 2px 8px
        Types and colors:
          "ভর্তি" → background var(--primary-subtle), color var(--primary)
          "পরীক্ষা" → background #fff3cd, color #856404
          "ছুটি" → background #d1e7dd, color #0a3622
          "অনুষ্ঠান" → background var(--accent-light), color var(--accent)
          "সাধারণ" → background var(--gray-100), color var(--gray-700)

      Title: font-size: 14px, font-weight: 600, color: var(--text-primary)
             font-family: var(--font-bengali), margin: 4px 0 2px

      Short description: font-size: 12px, color: var(--text-muted), 1 line

    ACTIONS (flex-shrink: 0, display: flex, flex-direction: column, gap: 4px):
      PDF icon link (if attachment):
        <i class="bi bi-file-earmark-pdf-fill"></i>
        color: var(--accent), font-size: 18px
        hover: scale(1.1)
      Arrow link:
        <i class="bi bi-arrow-right"></i>
        color: var(--text-muted), font-size: 14px

  Notice items data (5 items):
    1. Date: 15 May | "ভর্তি" | "২০২৫-২৬ শিক্ষাবর্ষে ভর্তি বিজ্ঞপ্তি" | border: var(--primary)
    2. Date: 12 May | "পরীক্ষা" | "JSC পরীক্ষার সময়সূচি প্রকাশিত" | border: #f59e0b
    3. Date: 10 May | "অনুষ্ঠান" | "বার্ষিক ক্রীড়া প্রতিযোগিতা ২০ জুন" | border: var(--accent)
    4. Date: 08 May | "ছুটি" | "ঈদুল আযহা উপলক্ষে বিদ্যালয় বন্ধ থাকবে" | border: #16a34a
    5. Date: 05 May | "সাধারণ" | "নতুন শ্রেণি রুটিন প্রকাশিত হয়েছে" | border: var(--gray-400)

  Below list: "সকল নোটিশ দেখুন" button
    Full width, outline style, var(--primary)

RIGHT — QUICK PANEL:
  Stacked 3 cards:

  Card 1 — Academic Calendar snippet:
    background: var(--white), shadow-sm, border-radius: var(--radius-md)
    padding: 16px
    Header: <i class="bi bi-calendar-event me-2"></i> "একাডেমিক ক্যালেন্ডার"
    3 upcoming events list (date + event name)
    "বিস্তারিত দেখুন" link

  Card 2 — Running Ticker / Marquee:
    background: var(--primary)
    color: white
    border-radius: var(--radius-md)
    padding: 14px 16px
    Heading: "🔔 জরুরি বিজ্ঞপ্তি"
    Scrolling text (CSS marquee animation or JS):
      "ভর্তি পরীক্ষা ২৫ মে ২০২৫ • ফলাফল প্রকাশ ১ জুন ২০২৫ • অভিভাবক সভা ১০ জুন"

  Card 3 — Results Quick Access:
    background: var(--white), shadow-sm, border-radius: var(--radius-md)
    padding: 16px
    Header: <i class="bi bi-bar-chart-fill me-2"></i> "সর্বশেষ ফলাফল"
    SSC 2024: pass rate pill (98%, green)
    JSC 2024: pass rate pill (96%, green)
    "ফলাফল দেখুন" button (small, primary)

──────────────────────────────────────────────
SECTION 5 — ACADEMIC INFORMATION  (#academic)
──────────────────────────────────────────────
Background: var(--white)
Padding: 80px 0

Section header:
  "একাডেমিক তথ্য" / "Academic Information"

4 cards grid (col-lg-3, col-sm-6):
  Each card (.academic-card):
    background: var(--white)
    border: 1px solid var(--border-color)
    border-radius: var(--radius-lg)
    padding: 32px 24px
    text-align: center
    box-shadow: var(--shadow-sm)
    transition: var(--transition)
    hover: box-shadow var(--shadow-lg), translateY(-4px),
           border-color: var(--primary-border)

    TOP COLOR BAR: 4px, border-radius top, color varies per card
    Icon circle (64px, background: varies, border-radius: 50%, margin: 0 auto 20px):
      icon: 28px

    Title: font-size 17px, font-weight 700, font-family: var(--font-bengali), color: var(--text-primary)
    Description: font-size 13px, color: var(--text-muted), margin: 8px 0 20px
    Link button: small, outline, color: varies

  Card 1: color var(--primary)   | bi-calendar2-week    | "শ্রেণি রুটিন"   | "সাপ্তাহিক শ্রেণি সময়সূচি"
  Card 2: color var(--accent)    | bi-calendar-event    | "একাডেমিক ক্যালেন্ডার" | "বার্ষিক শিক্ষা কার্যক্রম"
  Card 3: color #16a34a          | bi-book-half         | "সিলেবাস"        | "শ্রেণিভিত্তিক পাঠ্যক্রম"
  Card 4: color #d97706          | bi-trophy-fill       | "পরীক্ষার ফলাফল" | "সর্বশেষ পরীক্ষার ফলাফল"

──────────────────────────────────────────────
SECTION 6 — FEATURED TEACHERS  (#teachers)
──────────────────────────────────────────────
Background: var(--gray-50)
Padding: 80px 0

Section header:
  "আমাদের শিক্ষকমণ্ডলী" / "Our Dedicated Teachers"

6 teacher cards in a row (col-xl-2, col-lg-4, col-sm-6):
  Each card (.teacher-card):
    background: var(--white)
    border-radius: var(--radius-lg)
    padding: 28px 20px
    text-align: center
    box-shadow: var(--shadow-sm)
    border: 1px solid var(--border-color)
    transition: var(--transition)
    hover: shadow-md, translateY(-3px)
    hover .teacher-photo border-color: var(--primary)

    PHOTO (.teacher-photo):
      width: 88px, height: 88px
      border-radius: 50%
      object-fit: cover
      border: 3px solid var(--primary-light)
      margin: 0 auto 16px
      display: block
      background: var(--primary-subtle) (placeholder)
      Placeholder initials: centered 2-letter, var(--primary), font-weight 700

    Name: font-size 14px, font-weight 700, color: var(--text-primary), font-family: var(--font-bengali)
    Designation: font-size 12px, color: var(--primary), font-weight 500, margin-bottom 4px
    Subject badge:
      background: var(--primary-subtle)
      color: var(--primary)
      font-size: 11px
      border-radius: 4px
      padding: 2px 10px
      margin-bottom: 10px
    Qualification: font-size: 11px, color: var(--text-muted)

  Teacher data:
    1. রাহেলা বেগম       | সিনিয়র শিক্ষিকা | বাংলা        | M.A., B.Ed
    2. মো. কামাল হোসেন   | সিনিয়র শিক্ষক  | গণিত         | M.Sc., B.Ed
    3. নাজমা আক্তার      | শিক্ষিকা        | ইংরেজি       | M.A. (English)
    4. আব্দুর রহিম       | শিক্ষক          | বিজ্ঞান      | M.Sc. (Physics)
    5. মোসাম্মৎ রুবি     | শিক্ষিকা        | সমাজ বিজ্ঞান | M.S.S., B.Ed
    6. তানভীর আহমেদ      | শিক্ষক          | তথ্য প্রযুক্তি | B.Sc. (CSE)

Below grid: centered "সকল শিক্ষক দেখুন" button (primary filled)

──────────────────────────────────────────────
SECTION 7 — FACILITIES  (#facilities)
──────────────────────────────────────────────
Background: var(--white)
Padding: 80px 0

Section header:
  "আমাদের সুযোগ-সুবিধা" / "School Facilities"

6 facility cards (col-lg-4, col-sm-6):
  Each card (.facility-card):
    background: var(--white)
    border: 1px solid var(--border-color)
    border-radius: var(--radius-lg)
    padding: 32px 24px
    box-shadow: var(--shadow-sm)
    transition: var(--transition)
    hover: shadow-md, translateY(-3px), border-color var(--primary-border)
    hover .facility-icon: color var(--accent), transform rotate(5deg) scale(1.1)

    ICON (.facility-icon):
      font-size: 2.5rem
      color: var(--primary)
      margin-bottom: 16px
      transition: var(--transition)

    Title: font-size 17px, font-weight 700, color: var(--text-primary), font-family: var(--font-bengali)
    Divider: 30px wide, 2px, var(--primary-border), margin: 12px 0
    Description: font-size 13px, color: var(--text-secondary), line-height 1.7

  Facilities:
    1. bi-book-fill        | "লাইব্রেরি"           | "৫,০০০+ বই সম্বলিত সমৃদ্ধ পাঠাগার"
    2. bi-pc-display       | "আইসিটি ল্যাব"         | "৪০টি কম্পিউটার সহ আধুনিক কম্পিউটার ল্যাব"
    3. bi-eyedropper       | "বিজ্ঞান ল্যাব"         | "সম্পূর্ণ সজ্জিত পদার্থ ও রসায়ন ল্যাবরেটরি"
    4. bi-trophy           | "খেলার মাঠ"             | "বিশাল খোলা মাঠ ও ইনডোর গেমস সুবিধা"
    5. bi-display          | "স্মার্ট ক্লাসরুম"      | "মাল্টিমিডিয়া প্রজেক্টর সহ ডিজিটাল শ্রেণিকক্ষ"
    6. bi-building         | "অডিটোরিয়াম"           | "৫০০ আসন বিশিষ্ট শীতাতপ নিয়ন্ত্রিত মিলনায়তন"

──────────────────────────────────────────────
SECTION 8 — ACHIEVEMENTS TIMELINE  (#achievements)
──────────────────────────────────────────────
Background: var(--gray-50)
Padding: 80px 0

Section header:
  "আমাদের অর্জন" / "Our Achievements"

Timeline layout (.timeline):
  Central vertical line: 2px solid var(--primary-border), centered
  Alternating left-right items

  Each timeline item (.timeline-item, .timeline-left / .timeline-right):
    Content card:
      background: var(--white)
      border-radius: var(--radius-md)
      padding: 20px 24px
      box-shadow: var(--shadow-sm)
      border-top: 3px solid var(--primary)
      width: 45%

    Center dot:
      width: 16px, height: 16px
      background: var(--primary)
      border: 3px solid var(--white)
      box-shadow: 0 0 0 3px var(--primary-border)
      border-radius: 50%
      position: absolute, centered on the line

    Year badge: var(--primary) background, white text, border-radius 50px, font-size 12px
    Title: font-weight 700, font-family: var(--font-bengali), font-size 15px
    Description: font-size 13px, color: var(--text-secondary)

  4 timeline items:
    2024 | "জাতীয় শিক্ষা পদক"       | "মাধ্যমিক বিভাগে শ্রেষ্ঠ বিদ্যালয় পুরস্কার"
    2023 | "SSC পাসের হার ৯৮%"        | "ঢাকা বোর্ডে সর্বোচ্চ পাসের হার অর্জন"
    2022 | "জাতীয় বিজ্ঞান অলিম্পিয়াড" | "দলগত বিভাগে প্রথম স্থান অর্জন"
    2021 | "আইসিটি অবকাঠামো উন্নয়ন"  | "ডিজিটাল বাংলাদেশ পুরস্কার প্রাপ্তি"

  Mobile: single column, all left-aligned

──────────────────────────────────────────────
SECTION 9 — EVENTS & NEWS  (#events)
──────────────────────────────────────────────
Background: var(--white)
Padding: 80px 0

Section header:
  "সংবাদ ও অনুষ্ঠান" / "Events & Latest News"

3 news cards (col-lg-4):
  Each card (.news-card):
    background: var(--white)
    border: 1px solid var(--border-color)
    border-radius: var(--radius-lg)
    overflow: hidden
    box-shadow: var(--shadow-sm)
    transition: var(--transition)
    hover: shadow-md, translateY(-3px)
    hover .news-image: scale(1.05)

    IMAGE (.news-image-wrap, height: 200px, overflow: hidden):
      img: width 100%, height 100%, object-fit cover
      transition: transform 0.4s ease
      Overlay on hover: rgba primary 0.15

    BODY (padding: 20px):
      Top row (flex, justify: space-between):
        Category badge:
          font-size: 11px, font-weight: 600
          border-radius: 4px, padding: 3px 10px
          Types: "অনুষ্ঠান" (primary), "পুরস্কার" (success), "পরীক্ষা" (warning)

        Date: font-size 12px, color: var(--text-muted)
              <i class="bi bi-calendar3 me-1"></i>

      Title: font-size 15px, font-weight 700, color: var(--text-primary),
             font-family: var(--font-bengali), margin: 10px 0 8px, line-height 1.4
             Clamp to 2 lines: display -webkit-box, -webkit-line-clamp: 2

      Excerpt: font-size 13px, color: var(--text-secondary), line-height 1.6
               Clamp to 2 lines

      Divider: 1px solid var(--border-color), margin: 14px 0

      Footer row (flex, align-items: center, justify: space-between):
        Author: <i class="bi bi-person-circle me-1"></i> name (font-size 12px)
        "আরো পড়ুন" link: font-size 13px, font-weight 600, color: var(--primary)
                          icon: <i class="bi bi-arrow-right ms-1"></i>
                          hover: icon translateX(3px)

  News items:
    1. "বার্ষিক পুরস্কার বিতরণী অনুষ্ঠান ২০২৫" | "অনুষ্ঠান" | 20 May 2025
    2. "জাতীয় বিজ্ঞান অলিম্পিয়াডে প্রথম স্থান" | "পুরস্কার" | 15 May 2025
    3. "JSC পরীক্ষার সময়সূচি ঘোষণা"             | "পরীক্ষা"  | 10 May 2025

Below: centered "সকল সংবাদ দেখুন" button (outline, var(--primary))

──────────────────────────────────────────────
SECTION 10 — GALLERY PREVIEW  (#gallery)
──────────────────────────────────────────────
Background: var(--gray-50)
Padding: 80px 0

Section header:
  "ফটো গ্যালারি" / "Photo Gallery"

6-image grid (CSS Grid):
  grid-template-columns: repeat(3, 1fr) on desktop
  grid-template-rows: auto auto
  gap: 12px
  First image: grid-column span 2 (wider)

  Each gallery item (.gallery-item):
    position: relative
    overflow: hidden
    border-radius: var(--radius-md)
    height: 220px (first: 240px)

    img: width 100%, height 100%, object-fit cover
         transition: transform 0.4s ease

    Overlay (.gallery-overlay):
      position absolute, inset 0
      background: rgba primary-dark 0.65
      opacity: 0
      transition: opacity 0.3s ease
      display: flex; align-items: center; justify-content: center

    Overlay content (visible on hover):
      Icon: <i class="bi bi-zoom-in"></i> (white, 32px)
      Title: white, font-size 13px, margin-top 8px

    hover img: scale(1.08)
    hover .gallery-overlay: opacity 1

Below grid: centered "সম্পূর্ণ গ্যালারি দেখুন" button (primary filled)
  icon: <i class="bi bi-images me-2"></i>

──────────────────────────────────────────────
SECTION 11 — DOWNLOAD CENTER  (#downloads)
──────────────────────────────────────────────
Background: var(--white)
Padding: 80px 0

Section header:
  "ডাউনলোড সেন্টার" / "Download Center"

6 download cards (col-lg-4, col-sm-6):
  Each card (.download-card):
    background: var(--white)
    border: 1px solid var(--border-color)
    border-radius: var(--radius-md)
    padding: 20px
    display: flex
    align-items: center
    gap: 16px
    box-shadow: var(--shadow-sm)
    transition: var(--transition)
    hover: shadow-md, border-color var(--primary-border), translateY(-2px)

    PDF ICON BOX (flex-shrink: 0):
      width: 52px, height: 52px
      background: var(--accent-light)
      border-radius: var(--radius-sm)
      display: flex; align-items: center; justify-content: center
      icon: <i class="bi bi-file-earmark-pdf-fill"></i>
      icon size: 24px, color: var(--accent)

    CONTENT (flex: 1):
      Title: font-size 14px, font-weight 600, color: var(--text-primary),
             font-family: var(--font-bengali)
      Meta: font-size 11px, color: var(--text-muted)
            File size badge: background var(--gray-100), border-radius 4px,
                             padding 2px 8px, margin-left 6px

    DOWNLOAD BUTTON:
      <i class="bi bi-download"></i>
      width: 36px, height: 36px
      background: var(--primary-subtle)
      border: 1px solid var(--primary-border)
      border-radius: 50%
      color: var(--primary)
      hover: background var(--primary), color white

  Downloads:
    1. "ভর্তি আবেদন ফরম ২০২৫"      | PDF | 245 KB
    2. "বার্ষিক পরীক্ষার রুটিন"     | PDF | 180 KB
    3. "একাডেমিক ক্যালেন্ডার ২০২৫"  | PDF | 320 KB
    4. "ছাড়পত্র আবেদন ফরম"          | PDF | 120 KB
    5. "অভিভাবক সম্মতিপত্র"         | PDF | 95 KB
    6. "বৃত্তির আবেদন ফরম"           | PDF | 210 KB

──────────────────────────────────────────────
SECTION 12 — CONTACT STRIP  (#contact-strip)
──────────────────────────────────────────────
Background: var(--primary-subtle)
Border-top: 1px solid var(--primary-border)
Border-bottom: 1px solid var(--primary-border)
Padding: 56px 0

3 contact info cards (col-lg-4) + map below:

Cards (equal columns, each centered, no box shadow):
  Each card (.contact-info-card):
    text-align: center
    padding: 20px

    Icon circle (56px, background: var(--primary), border-radius: 50%, margin: 0 auto 16px):
      icon: 22px, white

    Label: font-size 12px, color: var(--text-muted), text-transform uppercase,
           letter-spacing 0.08em, margin-bottom 6px

    Value: font-family: var(--font-bengali), font-size 15px, font-weight 600,
           color: var(--text-primary)

    Sub-value: font-size 13px, color: var(--text-secondary)

  Card 1: bi-geo-alt-fill | "ঠিকানা" | "আদর্শ রোড, মিরপুর" | "ঢাকা-১২১৬, বাংলাদেশ"
  Card 2: bi-telephone-fill | "ফোন"  | "+880 2-XXXXXXXX" | "+880 1X-XXXXXXXX"
  Card 3: bi-envelope-fill | "ইমেইল" | "info@adarshaschool.edu.bd" | "সোম–শুক্র, সকাল ৯টা – বিকেল ৫টা"

MAP (below cards, margin-top: 32px):
  iframe placeholder:
    width: 100%, height: 300px
    border-radius: var(--radius-lg)
    border: 1px solid var(--border-color)
    src="https://www.google.com/maps/embed?pb=!1m18!..."
    loading="lazy"

═══════════════════════════════════════════════════════════
SCROLL ANIMATIONS (app.js)
═══════════════════════════════════════════════════════════

CSS classes to add on scroll:
.animate-fade-up {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.animate-fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

Apply .animate-fade-up to:
- All section headers
- All cards (with staggered delay via nth-child * 0.1s)
- Timeline items
- Contact info cards

JS:
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.animate-fade-up').forEach(el => observer.observe(el));

// Staggered delay for card grids
document.querySelectorAll('.row > [class*="col"] .animate-fade-up').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.1}s`;
});

═══════════════════════════════════════════════════════════
HTML STRUCTURE RULES
═══════════════════════════════════════════════════════════

<!DOCTYPE html>
<html lang="bn" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>আদর্শ উচ্চ বিদ্যালয় ও কলেজ | Adarsha High School & College</title>
  [meta description, og tags, canonical]
  [Bootstrap CSS CDN]
  [Bootstrap Icons CDN]
  [Google Fonts CDN]
  <link rel="stylesheet" href="assets/css/variables.css">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/css/responsive.css">
</head>
<body>
  <header>
    <div class="topbar">...</div>
    <nav class="main-navbar navbar navbar-expand-xl">...</nav>
  </header>

  <main id="main-content">
    <section id="hero">...</section>
    <section id="statistics">...</section>
    <section id="headteacher">...</section>
    <section id="notices">...</section>
    <section id="academic">...</section>
    <section id="teachers">...</section>
    <section id="facilities">...</section>
    <section id="achievements">...</section>
    <section id="events">...</section>
    <section id="gallery">...</section>
    <section id="downloads">...</section>
    <section id="contact-strip">...</section>
  </main>

  <footer>
    <div class="footer-top-strip">...</div>
    <div class="footer-main">...</div>
    <div class="footer-bottom">...</div>
  </footer>

  [Bootstrap JS CDN]
  <script src="assets/js/app.js"></script>
</body>
</html>

Build 100% complete code. No placeholder comments.
Every section fully coded with real Bengali + English content.