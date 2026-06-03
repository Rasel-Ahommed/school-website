Build the complete contact.html page for the Adarsha High School & College Bangladesh school website.
Use the established design system. Build ONLY contact.html — do not rebuild variables.css, style.css, or app.js unless adding new styles/JS specific to this page.

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
  --accent:         #c8372d;
  --accent-light:   #fdecea;
  --accent-dark:    #9e1f17;
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

CDN links in <head>:
- Bootstrap 5.3.3 CSS: https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css
- Bootstrap Icons 1.11.3: https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css
- Google Fonts: https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700&family=Public+Sans:wght@300;400;500;600;700&display=swap
- Bootstrap JS bundle: https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js

Linked CSS/JS (at bottom, local):
<link rel="stylesheet" href="assets/css/variables.css">
<link rel="stylesheet" href="assets/css/style.css">
<script src="assets/js/app.js"></script>

═══════════════════════════════════════════════════════════
HTML DOCUMENT SETUP
═══════════════════════════════════════════════════════════

<!DOCTYPE html>
<html lang="bn" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>যোগাযোগ | আদর্শ উচ্চ বিদ্যালয় ও কলেজ</title>
  <meta name="description" content="আদর্শ উচ্চ বিদ্যালয় ও কলেজ-এর সাথে যোগাযোগ করুন। ঠিকানা, ফোন, ইমেইল এবং যোগাযোগ ফর্ম।">
  <meta property="og:title" content="যোগাযোগ | আদর্শ উচ্চ বিদ্যালয় ও কলেজ">
  <meta property="og:type" content="website">
  <link rel="canonical" href="contact.html">
  [CDN links]
  [Local CSS links]
</head>
<body>
  <header>...</header>
  <main id="main-content">
    <section id="page-hero">...</section>
    <section id="contact-info">...</section>
    <section id="contact-form-map">...</section>
    <section id="office-hours">...</section>
  </main>
  <footer>...</footer>
  [Bootstrap JS CDN]
  [app.js]
</body>
</html>

═══════════════════════════════════════════════════════════
COMPONENT: NAVBAR (identical across all pages)
═══════════════════════════════════════════════════════════

Two-layer sticky navbar. "যোগাযোগ" nav link must have class="nav-link active" and aria-current="page".

LAYER 1 — TOPBAR (.topbar):
  Height: 36px | Background: var(--primary-dark) | Font-size: 12px
  Left: 🇧🇩 "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার" | " | " | "জাতীয় শিক্ষা সপ্তাহ ২০২৫"
  Right: <i class="bi bi-telephone-fill"></i> +880 2-XXXXXXXX
         <i class="bi bi-envelope-fill"></i> info@adarshaschool.edu.bd
         Facebook icon | YouTube icon (14px, white, hover: var(--accent))
  Hidden on mobile: d-none d-xl-flex

LAYER 2 — MAIN NAVBAR (.main-navbar):
  Background: var(--white) | Border-bottom: 1px solid var(--border-color)
  Height: 70px | position: sticky; top: 0; z-index: 1030
  JS adds .scrolled on scroll > 50px → box-shadow: var(--shadow-md)

  Logo (.navbar-brand):
    assets/images/logo.png (48×48px) + Bengali name line 1 (17px, 700, var(--primary-dark))
    + English name line 2 (11px, 400, var(--text-secondary))

  Nav items (navbar-expand-xl, font-size: 13.5px, font-weight: 500):
    1. হোম → index.html
    2. আমাদের বিদ্যালয় → dropdown: ইতিহাস | লক্ষ্য ও উদ্দেশ্য | প্রতিষ্ঠান তথ্য
    3. প্রশাসন → dropdown: প্রধান শিক্ষকের বাণী | পরিচালনা কমিটি | শিক্ষক-কর্মচারী
    4. একাডেমিক → dropdown: একাডেমিক ক্যালেন্ডার | শ্রেণি রুটিন | সিলেবাস | পরীক্ষার তথ্য | ফলাফল
    5. ভর্তি → admission.html
    6. নোটিশ বোর্ড → notices.html
    7. গ্যালারি → gallery.html
    8. যোগাযোগ → contact.html  ← ACTIVE

  Right buttons:
    "ভর্তি আবেদন" (var(--accent), white, bi-pencil-square icon)
    Search icon button (bi-search, 36×36px, border: 1px solid var(--border-color))

  Dropdown styles:
    background: var(--white) | border: 1px solid var(--border-color)
    border-radius: var(--radius-md) | box-shadow: var(--shadow-lg) | min-width: 220px
    Item hover: background var(--primary-subtle), border-left: 3px solid var(--primary)

═══════════════════════════════════════════════════════════
SECTION 1 — PAGE HERO BANNER  (#page-hero)
═══════════════════════════════════════════════════════════

Background:
  linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)
  with a subtle radial dot pattern overlay (CSS only, no image):
  background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)
  background-size: 24px 24px

Height: 200px
display: flex; align-items: center

Left side:
  Breadcrumb (small, rgba white 0.7):
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="index.html">হোম</a></li>
        <li class="breadcrumb-item active" aria-current="page">যোগাযোগ</li>
      </ol>
    </nav>

  Page title (h1):
    Bengali: "যোগাযোগ করুন" (font-size: 2rem, font-weight: 700, white, font-family: var(--font-bengali))
    English subtitle: "Get In Touch" (font-size: 14px, rgba white 0.75, margin-top: 4px)

Right side (d-none d-md-flex, gap: 8px):
  Three quick-contact badges (pill shape):
    background: rgba(255,255,255,0.12) | border: 1px solid rgba(255,255,255,0.25)
    border-radius: 50px | padding: 8px 16px | color: white | font-size: 13px

    Badge 1: <i class="bi bi-telephone-fill me-2"></i> +880 2-XXXXXXXX
    Badge 2: <i class="bi bi-envelope-fill me-2"></i> info@adarshaschool.edu.bd
    Badge 3: <i class="bi bi-clock-fill me-2"></i> সোম–শুক্র, সকাল ৯টা–৫টা

═══════════════════════════════════════════════════════════
SECTION 2 — CONTACT INFO CARDS  (#contact-info)
═══════════════════════════════════════════════════════════

Background: var(--gray-50)
Padding: 70px 0

Section header (centered, .section-header):
  Bengali h2: "আমাদের সাথে যোগাযোগ করুন"
  English subtitle: "Contact Information"
  Decorative underline: 3px solid var(--primary) (40px) + 3px solid var(--accent) (12px), side by side, centered

4 info cards (col-lg-3, col-md-6), each .contact-card:
  background: var(--white)
  border: 1px solid var(--border-color)
  border-radius: var(--radius-lg)
  padding: 32px 24px
  text-align: center
  box-shadow: var(--shadow-sm)
  transition: var(--transition)
  hover: translateY(-4px), box-shadow: var(--shadow-md), border-color: var(--primary-border)
  class="animate-fade-up"

  Icon circle (72px, margin: 0 auto 20px):
    background: var(--primary-subtle)
    border: 2px solid var(--primary-border)
    border-radius: 50%
    display: flex; align-items: center; justify-content: center
    icon: 28px, color: var(--primary)

  Label (font-size: 11px, color: var(--text-muted), text-transform: uppercase, letter-spacing: 0.1em, margin-bottom: 8px)
  Value (font-family: var(--font-bengali), font-size: 16px, font-weight: 600, color: var(--text-primary))
  Sub-value (font-size: 13px, color: var(--text-secondary), margin-top: 4px)
  Clickable anchor wrapping value where applicable

  Card 1 — ঠিকানা:
    icon: bi-geo-alt-fill
    Label: "ঠিকানা"
    Value: "আদর্শ রোড, মিরপুর-১০"
    Sub-value: "ঢাকা-১২১৬, বাংলাদেশ"
    Link: Google Maps href (placeholder #)

  Card 2 — ফোন:
    icon: bi-telephone-fill
    Label: "ফোন নম্বর"
    Value: "+880 2-XXXXXXXX"
    Sub-value: "+880 1X-XXXXXXXX (মোবাইল)"
    Link: tel:+880 2XXXXXXXX

  Card 3 — ইমেইল:
    icon: bi-envelope-fill
    Label: "ইমেইল"
    Value: "info@adarshaschool.edu.bd"
    Sub-value: "admission@adarshaschool.edu.bd"
    Link: mailto:info@adarshaschool.edu.bd

  Card 4 — অফিস সময়:
    icon: bi-clock-fill
    Label: "অফিস সময়"
    Value: "সোম – শুক্রবার"
    Sub-value: "সকাল ৯:০০টা – বিকেল ৫:০০টা"
    (no link; icon color: var(--warning) for visual variety)

═══════════════════════════════════════════════════════════
SECTION 3 — CONTACT FORM + MAP  (#contact-form-map)
═══════════════════════════════════════════════════════════

Background: var(--white)
Padding: 80px 0

Two-column Bootstrap grid (col-lg-6 each), gap: 32px

────────────────────────────────────
LEFT COLUMN — CONTACT FORM
────────────────────────────────────

Heading (h2, font-family: var(--font-bengali), font-size: 1.5rem, font-weight: 700):
  "বার্তা পাঠান"
  Subtitle (font-size: 14px, color: var(--text-secondary)): "আমরা ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করব।"
  Accent underline: 3px solid var(--accent), width: 40px, margin-top: 8px

Form wrapper div (no <form> tag — use <div class="contact-form-wrapper">):
  background: var(--white)
  border: 1px solid var(--border-color)
  border-radius: var(--radius-lg)
  padding: 36px

  Fields (all with Bootstrap form-control, custom focus: outline var(--primary)):

  Row 1 (two cols: col-md-6 each):
    Field 1 — নাম:
      <label> "আপনার নাম *" (font-family: var(--font-bengali), font-size: 14px, font-weight: 500)
      <input type="text" id="contactName" placeholder="আপনার পূর্ণ নাম লিখুন" required>
      Error: <div class="invalid-feedback">নাম আবশ্যক।</div>

    Field 2 — মোবাইল:
      <label> "মোবাইল নম্বর *"
      <input type="tel" id="contactPhone" placeholder="01XXXXXXXXX" required>
      Error: <div class="invalid-feedback">সঠিক মোবাইল নম্বর লিখুন।</div>

  Row 2 (full width):
    Field 3 — ইমেইল:
      <label> "ইমেইল ঠিকানা"
      <input type="email" id="contactEmail" placeholder="example@email.com">
      Error: <div class="invalid-feedback">সঠিক ইমেইল ঠিকানা লিখুন।</div>

  Row 3 (full width):
    Field 4 — বিষয়:
      <label> "বিষয় *"
      <select id="contactSubject" required>
        <option value="">— বিষয় নির্বাচন করুন —</option>
        <option>ভর্তি সংক্রান্ত</option>
        <option>ফলাফল সংক্রান্ত</option>
        <option>শিক্ষক সংক্রান্ত</option>
        <option>ফি সংক্রান্ত</option>
        <option>অন্যান্য</option>
      </select>
      Error: <div class="invalid-feedback">বিষয় নির্বাচন করুন।</div>

  Row 4 (full width):
    Field 5 — বার্তা:
      <label> "বার্তা *"
      <textarea id="contactMessage" rows="5" placeholder="আপনার বার্তা এখানে লিখুন..." required></textarea>
      Character counter below (id="charCounter", font-size: 12px, color: var(--text-muted)):
        "০ / ৫০০ অক্ষর"
      Error: <div class="invalid-feedback">বার্তা আবশ্যক।</div>

  Submit button (full width):
    background: var(--primary) | color: white
    border-radius: var(--radius-sm) | font-size: 15px | font-weight: 600
    padding: 12px | font-family: var(--font-bengali)
    icon: <i class="bi bi-send-fill me-2"></i>
    text: "বার্তা পাঠান"
    hover: background: var(--primary-hover)
    Loading state: spinner + "পাঠানো হচ্ছে..."

  Success toast (hidden by default, shown after submit):
    id="contactSuccessToast"
    position: fixed; bottom: 24px; right: 24px; z-index: 9999
    background: var(--primary-dark) | color: white
    border-radius: var(--radius-md) | padding: 16px 24px
    icon: <i class="bi bi-check-circle-fill me-2" style="color: #4ade80"></i>
    text: "আপনার বার্তা সফলভাবে পাঠানো হয়েছে!"
    Auto-dismiss after 4 seconds

────────────────────────────────────
RIGHT COLUMN — MAP + DIRECTIONS
────────────────────────────────────

Heading (h2, same style as left):
  "আমাদের অবস্থান"
  Subtitle: "আমাদের বিদ্যালয়ে আসার পথ নির্দেশনা"
  Accent underline: 3px solid var(--primary), width: 40px

Map iframe wrapper:
  border-radius: var(--radius-lg)
  overflow: hidden
  border: 1px solid var(--border-color)
  box-shadow: var(--shadow-md)

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5!2d90.3690!3d23.8041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ4JzE0LjgiTiA5MMKwMjInMDguNCJF!5e0!3m2!1sen!2sbd!4v1234567890"
    width="100%" height="340px"
    style="border:0;" allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    title="আদর্শ উচ্চ বিদ্যালয় ও কলেজ অবস্থান">
  </iframe>

Directions card (below map, margin-top: 20px):
  background: var(--primary-subtle)
  border: 1px solid var(--primary-border)
  border-radius: var(--radius-md)
  padding: 20px

  Heading (font-size: 14px, font-weight: 600, color: var(--primary), font-family: var(--font-bengali)):
    <i class="bi bi-signpost-2-fill me-2"></i> "কিভাবে আসবেন"

  3 transport items (flex, gap: 12px each, border-bottom: 1px solid var(--primary-border), padding: 10px 0):
    Icon circle (36px, background: var(--primary-light), border-radius: 50%):
      icon: 16px, color: var(--primary)

    Text block:
      Title (font-size: 13px, font-weight: 600, font-family: var(--font-bengali))
      Detail (font-size: 12px, color: var(--text-secondary))

    Item 1: bi-bus-front-fill | "বাসে আসতে" | "মিরপুর-১০ গোলচত্বর থেকে ৫ মিনিট হাঁটা দূরত্বে"
    Item 2: bi-train-front-fill | "মেট্রোরেলে" | "মিরপুর-১০ স্টেশন থেকে ৩ মিনিট হাঁটা"
    Item 3: bi-car-front-fill | "গাড়িতে আসতে" | "আদর্শ রোড ধরে এসে প্রধান গেটে প্রবেশ করুন"

  "Google Maps-এ দেখুন" link button (below items):
    href="#" target="_blank"
    color: var(--primary) | font-size: 13px | font-weight: 600
    icon: <i class="bi bi-box-arrow-up-right ms-1"></i>

═══════════════════════════════════════════════════════════
SECTION 4 — OFFICE HOURS & DEPARTMENTS  (#office-hours)
═══════════════════════════════════════════════════════════

Background: var(--gray-50)
Padding: 70px 0

Section header (centered):
  Bengali h2: "বিভাগীয় যোগাযোগ"
  English subtitle: "Department Contacts"
  Decorative underline (same style)

6 department cards (col-lg-4, col-md-6), each .dept-card:
  background: var(--white)
  border: 1px solid var(--border-color)
  border-left: 4px solid var(--primary)
  border-radius: var(--radius-md)
  padding: 24px
  box-shadow: var(--shadow-sm)
  transition: var(--transition)
  hover: translateY(-2px), border-left-color: var(--accent), shadow-md
  class="animate-fade-up"

  Top row (flex, space-between, align-items: center):
    Left: Department name (font-family: var(--font-bengali), font-size: 16px, font-weight: 700, color: var(--text-primary))
    Right: Icon circle (40px, background: var(--primary-subtle), border-radius: 50%):
           icon: 18px, color: var(--primary)

  Divider: margin: 12px 0; height: 1px; background: var(--border-color)

  Contact rows (font-size: 13px, color: var(--text-secondary), gap: 8px):
    <i class="bi bi-person-fill me-2" style="color: var(--primary)"></i> Contact name
    <i class="bi bi-telephone me-2" style="color: var(--primary)"></i> Phone
    <i class="bi bi-clock me-2" style="color: var(--primary)"></i> Hours

  Department 1:
    icon: bi-mortarboard-fill | "একাডেমিক বিভাগ"
    Person: "জনাব মোহাম্মদ আবদুল করিম (প্রধান শিক্ষক)"
    Phone: "+880 2-XXXXXXXX ext. 101"
    Hours: "সোম–শুক্র, সকাল ৯টা–বিকেল ৫টা"

  Department 2:
    icon: bi-clipboard-check-fill | "ভর্তি বিভাগ"
    Person: "জনাব রফিকুল ইসলাম"
    Phone: "+880 1X-XXXXXXXX"
    Hours: "সোম–বৃহস্পতি, সকাল ১০টা–বিকেল ৪টা"

  Department 3:
    icon: bi-cash-coin | "হিসাব বিভাগ"
    Person: "জনাব সিরাজুল হক"
    Phone: "+880 2-XXXXXXXX ext. 102"
    Hours: "সোম–শুক্র, সকাল ১০টা–বিকেল ৩টা"

  Department 4:
    icon: bi-journal-text | "পরীক্ষা বিভাগ"
    Person: "জনাবা নাসরিন আক্তার"
    Phone: "+880 2-XXXXXXXX ext. 103"
    Hours: "সোম–শুক্র, সকাল ৯টা–বিকেল ৪টা"

  Department 5:
    icon: bi-house-fill | "প্রশাসন বিভাগ"
    Person: "জনাব আবু সাইদ"
    Phone: "+880 2-XXXXXXXX ext. 104"
    Hours: "সোম–শুক্র, সকাল ৯টা–বিকেল ৫টা"

  Department 6:
    icon: bi-people-fill | "অভিভাবক সেবা"
    Person: "জনাবা তাহমিনা বেগম"
    Phone: "+880 1X-XXXXXXXX"
    Hours: "শনি–বৃহস্পতি, সকাল ১০টা–দুপুর ২টা"

═══════════════════════════════════════════════════════════
COMPONENT: FOOTER (identical across all pages)
═══════════════════════════════════════════════════════════

FOOTER TOP STRIP (.footer-top-strip):
  Background: var(--primary) | Padding: 20px 0
  Left: "🎓 ২০২৫ সালের ভর্তি কার্যক্রম চলছে" (white, font-weight: 600)
  Right: "ভর্তির জন্য আবেদন করুন" button (var(--accent), white, var(--radius-sm))

FOOTER MAIN (.footer-main):
  Background: var(--primary-dark) | Color: rgba(255,255,255,0.80) | Padding: 56px 0 32px
  4 columns (col-xl-3, col-lg-3, col-md-6):

  Column 1 — About:
    Logo (40px) + "আদর্শ উচ্চ বিদ্যালয় ও কলেজ" (white, 16px, 700)
    "Adarsha High School & College" (rgba white 0.6, 12px)
    HR (rgba white 0.15)
    Short Bengali description
    EIIN badge: "EIIN: 123456" (background rgba white 0.1, border-radius 4px)
    Social icons (Facebook, YouTube, Twitter): 32px circle, rgba white 0.1, hover: var(--accent)

  Column 2 — দ্রুত লিঙ্ক:
    Heading: "দ্রুত লিঙ্ক" (white, 14px, 600)
    Links (font-size: 13.5px, color: rgba white 0.75, hover white):
      হোম | আমাদের বিদ্যালয় | প্রশাসন | একাডেমিক | ভর্তি | নোটিশ বোর্ড | গ্যালারি | যোগাযোগ
    Each link: <i class="bi bi-chevron-right me-1"></i> prefix, no bullets

  Column 3 — একাডেমিক:
    Heading: "একাডেমিক"
    Links: একাডেমিক ক্যালেন্ডার | শ্রেণি রুটিন | সিলেবাস | পরীক্ষার তথ্য | ফলাফল | ডাউনলোড সেন্টার

  Column 4 — যোগাযোগ:
    Heading: "যোগাযোগ"
    Items (icon + text, font-size: 13.5px, rgba white 0.75):
      bi-geo-alt-fill: "আদর্শ রোড, মিরপুর-১০, ঢাকা-১২১৬"
      bi-telephone-fill: "+880 2-XXXXXXXX"
      bi-envelope-fill: "info@adarshaschool.edu.bd"
      bi-clock-fill: "সোম–শুক্র: সকাল ৯টা – বিকেল ৫টা"
    Newsletter mini-form (input + button, no <form> tag):
      placeholder: "আপনার ইমেইল লিখুন"
      button: "সাবস্ক্রাইব" (background: var(--accent))

FOOTER BOTTOM (.footer-bottom):
  Background: rgba(0,0,0,0.2) | Padding: 16px 0 | Font-size: 13px
  Left: "© ২০২৫ আদর্শ উচ্চ বিদ্যালয় ও কলেজ। সর্বস্বত্ব সংরক্ষিত।"
  Right: Privacy Policy | Sitemap | Developed by: Digital Team
  Border-top: 1px solid rgba(255,255,255,0.1)

═══════════════════════════════════════════════════════════
JAVASCRIPT (inline <script> at bottom OR additions to app.js)
═══════════════════════════════════════════════════════════

1. NAVBAR SCROLL:
window.addEventListener('scroll', () => {
  document.querySelector('.main-navbar').classList.toggle('scrolled', window.scrollY > 50);
});

2. ACTIVE LINK DETECTION:
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});

3. CONTACT FORM VALIDATION:
const contactName    = document.getElementById('contactName');
const contactPhone   = document.getElementById('contactPhone');
const contactEmail   = document.getElementById('contactEmail');
const contactSubject = document.getElementById('contactSubject');
const contactMessage = document.getElementById('contactMessage');
const submitBtn      = document.getElementById('contactSubmitBtn');
const successToast   = document.getElementById('contactSuccessToast');

// Phone: must match /^01[3-9]\d{8}$/
// Email: must match standard email regex (optional field)
// Message: minimum 10 characters

// On submit click:
//   1. Validate all required fields
//   2. Show .is-invalid on failed fields
//   3. Show spinner on button, disable button
//   4. Simulate async (setTimeout 1500ms)
//   5. Show success toast, reset form, hide spinner
//   6. Auto-dismiss toast after 4000ms

4. CHARACTER COUNTER:
contactMessage.addEventListener('input', () => {
  document.getElementById('charCounter').textContent =
    `${contactMessage.value.length} / ৫০০ অক্ষর`;
});

5. SCROLL ANIMATIONS:
.animate-fade-up { opacity: 0; transform: translateY(24px); transition: opacity 0.5s ease, transform 0.5s ease; }
.animate-fade-up.visible { opacity: 1; transform: translateY(0); }

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.animate-fade-up').forEach(el => observer.observe(el));

// Staggered delay on card grids
document.querySelectorAll('.row > [class*="col"] .animate-fade-up').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.1}s`;
});

═══════════════════════════════════════════════════════════
CODING RULES
═══════════════════════════════════════════════════════════

- NEVER use hardcoded hex or rgb colors — always CSS variables
- NO <form> tags — use <div class="contact-form-wrapper"> instead
- All Bengali text: font-family: var(--font-bengali)
- All inputs/selects/textareas: Bootstrap form-control class + custom focus ring
- Focus ring: outline: 2px solid var(--primary); outline-offset: 2px
- All images: descriptive alt attributes
- All icon-only buttons: aria-label attribute
- Semantic HTML only: <header>, <nav>, <main>, <section>, <footer>
- One <h1> per page (in page hero)
- Heading hierarchy: h1 → h2 → h3 only
- const/let only (no var); arrow functions; descriptive names
- All sections have scroll animation class .animate-fade-up on cards and headers
- Section background alternates: gray-50 → white → gray-50 → white

Build 100% complete code. No placeholder comments. No "TODO" markers.
Every section fully coded with real Bengali + English content as specified above.