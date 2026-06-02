You are building a complete, production-ready, responsive school website for a Bangladesh Primary/High School. Follow every instruction precisely.

---

## TECH STACK

- HTML5 (semantic)
- CSS3 (custom properties only — no hardcoded colors)
- Bootstrap 5.3+
- Vanilla JavaScript (ES6+)
- Bootstrap Icons 1.11+
- Google Fonts (via CDN)
- NO jQuery, NO React, NO Tailwind, NO Vue

---

## COLOR SYSTEM — MANDATORY

The entire site uses a dynamic HSL-based color system via CSS variables.

:root {
  /* === THEME CONTROL — change only these two to retheme the entire site === */
  --hue: 214;
  --sat: 72%;

  /* Primary scale */
  --primary:        hsl(var(--hue), var(--sat), 35%);
  --primary-light:  hsl(var(--hue), var(--sat), 92%);
  --primary-dark:   hsl(var(--hue), var(--sat), 22%);
  --primary-hover:  hsl(var(--hue), var(--sat), 28%);
  --primary-subtle: hsl(var(--hue), var(--sat), 97%);
  --primary-border: hsl(var(--hue), var(--sat), 80%);

  /* Accent (complementary warm tone) */
  --accent:         #c8372d;
  --accent-light:   #fdecea;
  --accent-dark:    #9e1f17;

  /* Neutrals */
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

  /* Semantic */
  --success:        #16a34a;
  --success-light:  #dcfce7;
  --warning:        #d97706;
  --warning-light:  #fef3c7;
  --danger:         #dc2626;
  --danger-light:   #fee2e2;
  --info:           hsl(var(--hue), var(--sat), 45%);
  --info-light:     hsl(var(--hue), var(--sat), 94%);

  /* Surface */
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
}

RULES:
- NEVER use any hardcoded hex or rgb color anywhere in CSS or inline styles.
- Every color reference must use a CSS variable.
- Changing --hue and --sat must retheme the entire site automatically.

---

## TYPOGRAPHY

Google Fonts import:
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;500;600;700&family=Public+Sans:wght@300;400;500;600;700&display=swap');

Font stack:
--font-primary: 'Public Sans', 'Noto Sans Bengali', sans-serif;
--font-bengali: 'Noto Sans Bengali', 'Public Sans', sans-serif;

font-family: var(--font-primary);

Rules:
- Body text: 16px / line-height 1.7
- Bengali text: always use var(--font-bengali)
- Headings: font-weight 700
- Section titles: font-weight 600
- All UI labels, buttons, nav: font-weight 500
- Letter spacing on headings: -0.01em

---

## DESIGN STYLE

- Background: predominantly white (#ffffff) and off-white (#f8fafc)
- NO dark backgrounds except navbar and footer
- Clean, spacious, professional government-educational aesthetic
- Soft card shadows (var(--shadow-sm), var(--shadow-md))
- Rounded corners everywhere (var(--radius-md) for cards, var(--radius-sm) for buttons/badges)
- Sticky navbar with shadow on scroll
- Smooth CSS transitions on all interactive elements
- Section alternates: white → gray-50 → white
- Thin colored left-border accent on notice/info cards
- Subtle hover lift on cards: translateY(-2px) + shadow increase
- Active nav links underlined with var(--primary)

---

## FILE STRUCTURE

project/
│
├── index.html              ← Homepage
├── about.html              ← About School
├── institute-info.html     ← Institute Information
├── head-teacher.html       ← Head Teacher Message
├── teachers.html           ← Teachers & Staff
├── committee.html          ← Managing Committee
├── academic.html           ← Academic Information
├── admission.html          ← Admission
├── notices.html            ← Notice Board
├── results.html            ← Results
├── gallery.html            ← Gallery
├── downloads.html          ← Downloads
├── achievements.html       ← Achievements
├── facilities.html         ← Facilities
├── events.html             ← Events & News
├── grs.html                ← Complaint & GRS
├── contact.html            ← Contact
├── privacy.html            ← Privacy Policy
├── sitemap.html            ← Sitemap
│
├── assets/
│   ├── css/
│   │   ├── variables.css   ← ALL CSS custom properties (colors, fonts, spacing)
│   │   ├── style.css       ← Main styles + components
│   │   └── responsive.css  ← Media queries only
│   │
│   ├── js/
│   │   └── app.js          ← All JS: navbar, search, filter, lightbox, forms
│   │
│   ├── images/             ← Placeholder images referenced by name
│   └── docs/               ← PDF placeholders

---

## REUSABLE COMPONENTS (build once, use everywhere)

### 1. Navbar
- Sticky top, white background, shadow on scroll
- Logo: school crest image + Bengali name + English name
- Top bar above navbar: date | helpline number | social icons
- Mega dropdown menu (see navigation structure below)
- Active page highlight
- Mobile hamburger with smooth slide-down menu
- Bootstrap navbar-expand-lg

### 2. Footer
- Dark background: var(--primary-dark)
- 4 columns: About | Quick Links | Academic Links | Contact
- Bottom bar: copyright + "Developed by" + social icons
- Bengali + English mixed text

### 3. Page Hero Banner
- Breadcrumb navigation
- Page title (Bengali + English)
- Background: var(--primary) gradient or subtle pattern
- Height: 180px

### 4. Section Header Component
- Centered title in Bengali
- Subtitle in English below (smaller, var(--text-secondary))
- Decorative underline using var(--primary) + var(--accent)
- Used at the top of every homepage section

### 5. Stat Card
- White card, border-top: 4px solid var(--primary)
- Large number (var(--primary), font-size: 2.5rem, font-weight: 700)
- Label below (var(--text-secondary))
- Bootstrap Icon above number
- Hover: shadow increase

### 6. Notice Card
- White card, left border: 4px solid var(--accent)
- Date badge (var(--primary-light) background)
- Title, short description, PDF download link
- Category badge

### 7. Teacher Card
- White card, centered layout
- Circular photo placeholder (96px, var(--primary-light) background)
- Name (font-weight: 600)
- Designation (var(--primary))
- Subject + Qualification (var(--text-secondary))

### 8. Committee Card
- Similar to Teacher Card
- Position badge (var(--primary) background, white text)

### 9. News/Event Card
- Horizontal layout on desktop, vertical on mobile
- Date box (var(--primary) background, white text)
- Title, excerpt, Read More link

### 10. Facility Card
- Large Bootstrap Icon (2rem, var(--primary))
- Title, description
- Hover: icon turns var(--accent)

### 11. Download Card
- PDF icon (var(--danger))
- File title + description
- File size badge
- Download button (var(--primary) outline style)

### 12. Gallery Card
- Square image with overlay on hover
- Overlay: title + zoom icon (var(--primary) tinted)

---

## NAVIGATION MENU STRUCTURE

Top Level → Dropdown Items

Home →  (no dropdown)

About School →
  - History
  - Mission & Vision
  - Institute Information

Administration →
  - Head Teacher Message
  - Managing Committee
  - Teachers & Staff

Academic →
  - Academic Calendar
  - Class Routine
  - Syllabus & Curriculum
  - Examination Information
  - Results

Admission →  (no dropdown)

Notice Board →  (no dropdown)

Achievements →  (no dropdown)

Facilities →  (no dropdown)

Gallery →  (no dropdown)

Downloads →  (no dropdown)

Events & News →  (no dropdown)

Complaint & GRS →  (no dropdown)

Contact →  (no dropdown)

---

## PAGE-BY-PAGE SPECIFICATIONS

---

### index.html — HOMEPAGE

Section 1: HERO
- Full-width, min-height: 85vh
- Background: white with a subtle geometric pattern overlay using var(--primary-subtle)
- Left side: text content (60%)
  - Top badge: "সরকার অনুমোদিত শিক্ষা প্রতিষ্ঠান" (pill badge, var(--primary-light))
  - School name in Bengali (h1, 2.8rem, var(--primary-dark))
  - School name in English (h2, 1.2rem, var(--text-secondary))
  - Motto in Bengali (italic, var(--accent))
  - EIIN + Establishment Year info line
  - Two CTA buttons: "ভর্তি তথ্য" (primary filled) | "যোগাযোগ করুন" (outline)
- Right side: school building image placeholder (40%)
  - Rounded corners, subtle shadow

Section 2: QUICK STATISTICS (4 cards)
- Background: var(--bg-section)
- Cards: Total Students | Total Teachers | Pass Rate | Years of Excellence
- Use animated counter on scroll (IntersectionObserver)

Section 3: HEAD TEACHER MESSAGE
- Two-column: photo left, message right
- Circular framed photo (200px)
- Name, designation below photo
- Quote icon before message
- Short message (3–4 lines) + "Read More" button

Section 4: IMPORTANT NOTICES
- Background: var(--bg-section)
- Left: Notice list (latest 5, each with date badge + title + PDF icon)
- Right: Scrolling marquee or stacked quick links panel

Section 5: ACADEMIC INFORMATION (4 cards)
- Grid of 4 cards: Routine | Calendar | Syllabus | Results
- Each: Bootstrap icon + title + short description + link button

Section 6: FEATURED TEACHERS (6 teacher cards)
- Background: var(--bg-section)
- Horizontal scroll on mobile

Section 7: SCHOOL FACILITIES (6 facility cards)
- Library | ICT Lab | Science Lab | Playground | Smart Classroom | Auditorium

Section 8: ACHIEVEMENTS TIMELINE
- Alternating left-right timeline layout
- Year badge (var(--primary))
- Title + description

Section 9: EVENTS & NEWS (3 news cards)
- Horizontal card layout
- Date + category badge + title + excerpt

Section 10: GALLERY PREVIEW
- 6-image masonry-style grid
- "View Full Gallery" button

Section 11: DOWNLOAD CENTER (6 download cards)
- Grid layout
- PDF icon + title + download button

Section 12: CONTACT INFORMATION
- 3 columns: Address | Phone/Email | Office Hours
- Below: embedded Google Map iframe (placeholder)

Section 13: FOOTER (full footer component)

---

### about.html
- Page hero banner
- School History (prose with timeline sidebar)
- Vision, Mission, Objectives (3 cards)
- EIIN, Establishment Year, Recognition info box
- School at a Glance (stats table)

### institute-info.html
- Page hero banner
- Responsive table with all institute details:
  School Name | EIIN | School Code | Establishment Year
  Institution Type | Shift | Location | MPO Status | Approval Info
- Print button

### head-teacher.html
- Page hero banner
- Large photo (left) + full message (right)
- Signature image placeholder
- Name, designation, qualifications

### teachers.html
- Page hero banner
- Search input (live filter by name/subject)
- Department filter tabs (All | Science | Arts | Commerce | etc.)
- Responsive card grid (Teacher Card component)
- Data: minimum 12 placeholder teachers

### committee.html
- Page hero banner
- Committee Card grid
- Data: President, Secretary, Treasurer, and 6+ members
- Term of office badge

### academic.html
- Page hero banner
- Tabs: Calendar | Routine | Syllabus | Curriculum | Examination | Promotion Rules
- Each tab: relevant table or card content

### admission.html
- Page hero banner
- Admission Circular notice box (var(--warning-light) background)
- Requirements list (checklist style)
- Fee Structure table
- Online Form Design (all fields, no form tag — use div+input)
- Download Form button

### notices.html
- Page hero banner
- Search input + Category filter dropdown
- Notice list (Notice Card component)
- Pagination

### results.html
- Page hero banner
- Year filter + Exam type filter
- Result cards with download PDF button
- Pass rate statistics

### gallery.html
- Page hero banner
- Album filter tabs
- Lightbox gallery (vanilla JS, no library)
- Grid of Gallery Cards

### downloads.html
- Page hero banner
- Category tabs: Forms | Circulars | Routines | Results | Others
- Download Card grid

### achievements.html
- Page hero banner
- Achievement tabs: Academic | Sports | National | Cultural
- Timeline layout for each

### facilities.html
- Page hero banner
- Large Facility Cards (image placeholder + icon + description)
- 6 facilities minimum

### events.html
- Page hero banner
- Upcoming Events section (3 cards)
- Past News archive list
- Category filter

### grs.html
- Page hero banner
- Complaint Form:
  Name | Mobile | Email | Subject | Complaint Details | Submit
- Information Officer card
- GRS Officer card
- GRS Process steps (numbered)

### contact.html
- Page hero banner
- Left: Address, Phone, Email, Office Hours
- Right: Contact Form
- Full-width Google Map iframe (placeholder src)

### privacy.html
- Page hero banner
- Legal prose sections

### sitemap.html
- Page hero banner
- Hierarchical sitemap list with all links

---

## JAVASCRIPT (assets/js/app.js)

Write clean, commented vanilla JS for:

1. Navbar:
   - Add class 'scrolled' (shadow) when window.scrollY > 50
   - Mobile menu toggle
   - Active link detection by current page URL

2. Animated Counters:
   - IntersectionObserver on stat cards
   - Count up from 0 to target value on first viewport entry
   - Easing function

3. Teacher/Notice Filter:
   - Live search: filter cards by name/title on keyup
   - Tab filter: show/hide by data-department or data-category attribute

4. Lightbox Gallery:
   - Click image → full-screen overlay with close + prev/next
   - Keyboard support: Escape to close, arrow keys to navigate

5. Scroll Animations:
   - IntersectionObserver: add 'animate-in' class when element enters viewport
   - CSS handles the animation (opacity 0→1, translateY 20px→0)

6. Form Handling:
   - Validate all forms (required fields, email format, phone format)
   - Show inline error messages
   - Show success toast notification on submit

7. Marquee/Ticker:
   - Auto-scroll notice ticker in homepage hero area
   - Pause on hover

---

## SEO & META (add to every page)

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[School Name] — Official website. Admission, notices, results, teachers, and academic information.">
<meta name="keywords" content="school bangladesh, admission, ssc, jsc, primary school, high school, eiin">
<meta property="og:title" content="[School Name]">
<meta property="og:description" content="Official school website">
<meta property="og:type" content="website">
<link rel="canonical" href="[URL]">

---

## ACCESSIBILITY

- All images: descriptive alt attributes
- All form inputs: associated <label> elements
- Semantic HTML: <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>
- Heading hierarchy: one <h1> per page, logical h2→h3→h4
- ARIA labels on icon-only buttons
- aria-current="page" on active nav link
- Focus-visible ring on all interactive elements: outline: 2px solid var(--primary); outline-offset: 2px;
- Color contrast: all text must meet WCAG AA (4.5:1 minimum)

---

## RESPONSIVE BREAKPOINTS (Bootstrap standard)

- xs: <576px  → single column, stacked layout
- sm: ≥576px  → 2 columns where applicable
- md: ≥768px  → tablets, 2–3 columns
- lg: ≥992px  → desktop, full layout
- xl: ≥1200px → wide desktop
- xxl: ≥1400px → max-width: 1320px centered container

---

## PLACEHOLDER DATA (use consistently)

School Name (Bengali): আদর্শ উচ্চ বিদ্যালয় ও কলেজ
School Name (English): Adarsha High School & College
Location: Dhaka, Bangladesh
EIIN: 123456
School Code: 4501
Established: 1965
Motto: শিক্ষাই জাতির মেরুদণ্ড
Headteacher: জনাব মোহাম্মদ আবদুল করিম
Phone: +880 2-XXXXXXXX
Email: info@adarshaschool.edu.bd
Total Students: 1,200
Total Teachers: 45
Pass Rate: 98%

---

## CODING STANDARDS

- Every HTML file: proper <!DOCTYPE html>, lang="bn" (with lang="en" on English sections)
- CSS: BEM-inspired naming (.section-header, .card-notice, .btn-primary-outline)
- JS: const/let only, no var; arrow functions; descriptive variable names
- Comments in CSS: /* === SECTION NAME === */
- Comments in JS: // describe what the block does
- No inline styles except dynamic JS-driven values
- All external resources via CDN (Bootstrap, Bootstrap Icons, Google Fonts)
- Bootstrap CDN: https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css
- Bootstrap JS CDN: https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js
- Bootstrap Icons CDN: https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css

---

## BUILD ORDER

Build files in this exact order:
1. assets/css/variables.css  ← color system, typography, spacing tokens
2. assets/css/style.css      ← all component styles
3. assets/css/responsive.css ← media queries
4. assets/js/app.js          ← all JavaScript
5. index.html                ← homepage (longest file)
6. about.html
7. institute-info.html
8. head-teacher.html
9. teachers.html
10. committee.html
11. academic.html
12. admission.html
13. notices.html
14. results.html
15. gallery.html
16. downloads.html
17. achievements.html
18. facilities.html
19. events.html
20. grs.html
21. contact.html
22. privacy.html
23. sitemap.html

---

Build the complete project. Every page must be fully coded — no placeholders, no "add content here" comments. Use the placeholder data consistently across all pages.