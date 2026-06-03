Build a complete, production-ready events.html page for a Bangladesh school website.

═══════════════════════════════════════════════════════════
CONTEXT & CONSTRAINTS
═══════════════════════════════════════════════════════════

School: আদর্শ উচ্চ বিদ্যালয় ও কলেজ / Adarsha High School & College, Dhaka
EIIN: 123456 | Established: 1965 | Motto: শিক্ষাই জাতির মেরুদণ্ড

Tech stack: HTML5 (semantic) + CSS3 (CSS variables only — NO hardcoded colors)
+ Bootstrap 5.3.3 + Vanilla JS ES6+ + Bootstrap Icons 1.11.3
NO jQuery, NO React, NO Tailwind, NO Vue.

CSS variables already defined in assets/css/variables.css — reference only:
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
  <title>ইভেন্ট ও সংবাদ | আদর্শ উচ্চ বিদ্যালয় ও কলেজ</title>
  <meta name="description" content="আদর্শ উচ্চ বিদ্যালয় ও কলেজের আসন্ন অনুষ্ঠান, সাম্প্রতিক সংবাদ এবং বিদ্যালয়ের কার্যক্রমের বিস্তারিত তথ্য।">
  <meta property="og:title" content="ইভেন্ট ও সংবাদ | আদর্শ উচ্চ বিদ্যালয় ও কলেজ">
  <meta property="og:type" content="website">
  <link rel="canonical" href="events.html">
  [CDN links]
  [stylesheet links]
</head>
<body>
  <header><!-- Navbar --></header>
  <main id="main-content">
    <!-- Page Hero Banner -->
    <!-- Event Stats Strip -->
    <!-- Upcoming Events Section -->
    <!-- Category Filter + News Archive -->
    <!-- Event Calendar Widget -->
    <!-- Featured Coverage -->
    <!-- CTA Strip -->
  </main>
  <footer><!-- Footer --></footer>
  [Bootstrap JS CDN]
  [inline <script>]
</body>
</html>

═══════════════════════════════════════════════════════════
COMPONENT: NAVBAR (two-layer sticky)
═══════════════════════════════════════════════════════════

LAYER 1 — .topbar:
  height: 36px | background: var(--primary-dark) | font-size: 12px
  color: rgba(255,255,255,0.85)
  Left: 🇧🇩 "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার" | " | " | "জাতীয় শিক্ষা সপ্তাহ ২০২৫"
  Right (gap 16px):
    bi-telephone-fill +880 2-XXXXXXXX
    bi-envelope-fill info@adarshaschool.edu.bd
    bi-facebook (14px, white, hover var(--accent))
    bi-youtube
  d-none d-xl-flex on mobile

  CSS:
  .topbar { background:var(--primary-dark); color:rgba(255,255,255,0.85);
            font-size:12px; height:36px; display:flex; align-items:center; }
  .topbar a { color:rgba(255,255,255,0.75); text-decoration:none; transition:var(--transition); }
  .topbar a:hover { color:var(--white); }

LAYER 2 — .main-navbar:
  height: 70px | background: var(--white)
  border-bottom: 1px solid var(--border-color)
  position: sticky; top: 0; z-index: 1030
  .scrolled (JS) → box-shadow: var(--shadow-md)

  Logo: assets/images/logo.png (48×48, object-fit: contain)
    Line 1: "আদর্শ উচ্চ বিদ্যালয় ও কলেজ"
            var(--font-bengali), 17px, 700, var(--primary-dark)
    Line 2: "Adarsha High School & College, Dhaka"
            11px, 400, var(--text-secondary)

  Nav links (navbar-expand-xl, 13.5px, font-weight 500, var(--text-primary)):
    হোম → index.html
    আমাদের বিদ্যালয় → dropdown:
      ইতিহাস → about.html#history
      লক্ষ্য ও উদ্দেশ্য → about.html#mission
      প্রতিষ্ঠান তথ্য → institute-info.html
    প্রশাসন → dropdown:
      প্রধান শিক্ষকের বাণী → head-teacher.html
      পরিচালনা কমিটি → committee.html
      শিক্ষক-কর্মচারী → teachers.html
    একাডেমিক → dropdown:
      একাডেমিক ক্যালেন্ডার → academic.html#calendar
      শ্রেণি রুটিন → academic.html#routine
      সিলেবাস → academic.html#syllabus
      পরীক্ষার তথ্য → academic.html#exam
      ফলাফল → results.html
    ভর্তি → admission.html
    নোটিশ বোর্ড → notices.html
    ইভেন্ট ও সংবাদ → events.html   ← ACTIVE (aria-current="page")
    যোগাযোগ → contact.html

  Active link: color var(--primary), border-bottom: 2px solid var(--primary)

  Dropdown styles:
    bg var(--white) | border 1px solid var(--border-color)
    border-radius var(--radius-md) | box-shadow var(--shadow-lg) | min-width 220px
    item: 13px, padding 8px 16px
    item hover: bg var(--primary-subtle), color var(--primary),
                border-left: 3px solid var(--primary)

  Right buttons:
    "ভর্তি আবেদন": bg var(--accent), white, border-radius var(--radius-sm),
                    13px, 600, padding 8px 18px, bi-pencil-square me-1,
                    href="admission.html", hover bg var(--accent-dark)
    "অনুসন্ধান": transparent, border 1px solid var(--border-color),
                  36×36px, bi-search, hover bg var(--primary-subtle)

  Mobile: hamburger toggle, full-width white collapsed menu,
          accordion dropdowns, action buttons stacked below nav links

  JS:
  window.addEventListener('scroll', () => {
    document.querySelector('.main-navbar')
      .classList.toggle('scrolled', window.scrollY > 50);
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

═══════════════════════════════════════════════════════════
SECTION 1 — PAGE HERO BANNER
═══════════════════════════════════════════════════════════

min-height: 180px
background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)
position: relative; overflow: hidden; display: flex; align-items: center

::before overlay (diagonal pattern):
  background: repeating-linear-gradient(
    45deg,
    rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px,
    transparent 1px, transparent 20px
  )
  position: absolute; inset: 0

::after decorative circle (bottom-right):
  width: 280px; height: 280px; border-radius: 50%
  background: rgba(255,255,255,0.04)
  position: absolute; bottom: -90px; right: -50px

Content (container, centered, white):
  Breadcrumb (13px, rgba white 0.75, mb-3):
    <i class="bi bi-house-fill" aria-hidden="true"></i> হোম
    › ইভেন্ট ও সংবাদ

  <h1>: "ইভেন্ট ও সংবাদ"
    var(--font-bengali), 2rem, 700, white, letter-spacing -0.01em

  English subtitle: "Events, News & Announcements"
    14px, rgba white 0.75, mt-2

  Decorative title flanking:
    flex row, justify-content center, align-items center, gap 16px, mt-3
    Left line: 60px × 2px, bg rgba white 0.25
    Center: bi-calendar-event-fill, 18px, rgba white 0.6
    Right line: 60px × 2px, bg rgba white 0.25

CSS:
.page-hero {
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
  min-height: 180px; display: flex; align-items: center;
  position: relative; overflow: hidden;
}
.page-hero::before {
  content:''; position:absolute; inset:0;
  background: repeating-linear-gradient(45deg,
    rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px,
    transparent 1px, transparent 20px);
}
.breadcrumb-item+.breadcrumb-item::before {
  content:'›'; color:rgba(255,255,255,0.4);
}

═══════════════════════════════════════════════════════════
SECTION 2 — EVENT STATS STRIP
═══════════════════════════════════════════════════════════

Background: var(--white)
Border-bottom: 1px solid var(--border-color)
Padding: 40px 0

4 stat cards in a row (col-lg-3, col-sm-6):

Each .event-stat-card:
  text-align: center
  padding: 24px 16px
  border-right: 1px solid var(--border-color) (last: none)
  class: animate-fade-up

  Icon circle:
    width/height: 56px, border-radius: 50%
    bg: var(--primary-subtle), margin: 0 auto 12px
    icon: 22px, color: var(--primary)

  .stat-count:
    font-size: 2.2rem, font-weight: 700
    color: var(--primary), font-family: var(--font-primary)
    data-target="[n]" for JS counter

  Label: var(--font-bengali), 14px, var(--text-secondary), mt-1

Data:
  1. bi-calendar-check-fill | 48    | "বার্ষিক অনুষ্ঠান"
  2. bi-newspaper           | 120   | "সংবাদ প্রকাশিত"
  3. bi-people-fill         | 5000  | "অংশগ্রহণকারী"
  4. bi-trophy-fill         | 25    | "পুরস্কার অর্জন"

JS counter (IntersectionObserver, count-up 0 → target, 1800ms):
  const countUp = (el) => {
    const target = parseInt(el.dataset.target.replace(/,/g,''));
    const step = target / (1800 / 16);
    let cur = 0;
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(t); }
      el.textContent = Math.floor(cur).toLocaleString('bn-BD');
    }, 16);
  };
  const so = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ countUp(e.target); so.unobserve(e.target); }});
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-count').forEach(el => so.observe(el));

═══════════════════════════════════════════════════════════
SECTION 3 — UPCOMING EVENTS
═══════════════════════════════════════════════════════════

Background: var(--gray-50)
Padding: 80px 0

Section header (.section-header, animate-fade-up, text-center):
  h2: "আসন্ন অনুষ্ঠান"
      var(--font-bengali), font-weight 700, var(--text-primary)
  English subtitle: "Upcoming Events"
      14px, var(--text-secondary), mt-1
  Decorative underline (centered flex):
    40px line (2px, var(--primary)) + 10px circle (var(--accent)) + 40px line
    gap 8px, margin 12px auto 0

3 FEATURED UPCOMING EVENT CARDS (col-lg-4):

Each .upcoming-event-card:
  background: var(--white)
  border: 1px solid var(--border-color)
  border-radius: var(--radius-lg)
  overflow: hidden
  box-shadow: var(--shadow-sm)
  transition: var(--transition)
  hover: translateY(-4px), box-shadow var(--shadow-lg)
  animate-fade-up
  position: relative

  TOP COLOR BAR (height: 5px):
    Event 1 → var(--primary)
    Event 2 → var(--accent)
    Event 3 → var(--success)

  CARD BODY (padding: 28px 24px):

    Header row (flex, space-between, align-items flex-start, mb-16px):
      Left — DATE BOX (.event-date-box):
        width: 60px, height: 60px
        background: var(--primary-subtle)
        border: 2px solid var(--primary-border)
        border-radius: var(--radius-md)
        display: flex; flex-direction: column; align-items: center; justify-content: center
        Day: font-size 22px, font-weight 700, color var(--primary), line-height 1
        Month: font-size 11px, font-weight 600, color var(--text-secondary),
               text-transform uppercase, margin-top 2px
        (Event 2 date box: bg var(--accent-light), border var(--accent), day+month color var(--accent))
        (Event 3 date box: bg var(--success-light), border var(--success), colors var(--success))

      Right — CATEGORY BADGE:
        font-size 11px, font-weight 600, border-radius var(--radius-sm), padding 4px 12px
        Event 1: bg var(--primary-subtle), color var(--primary)
        Event 2: bg var(--accent-light),   color var(--accent)
        Event 3: bg var(--success-light),  color var(--success)

    "UPCOMING" ribbon tag (top-right corner of card, position absolute):
      top: 16px, right: 0
      background: var(--warning), color white
      font-size: 10px, font-weight: 700
      padding: 3px 10px 3px 8px
      border-radius: var(--radius-sm) 0 0 var(--radius-sm)
      text-transform: uppercase, letter-spacing: 0.05em

    Title (h3): var(--font-bengali), 17px, 700, var(--text-primary), mb-8px, line-height 1.4
    English title: 12px, var(--text-muted), mb-12px

    Description: 13.5px, var(--text-secondary), line-height 1.8, mb-16px

    Meta info list (list-style none, p-0, m-0, flex-column, gap 6px):
      Each .event-meta-item (flex, align-items center, gap 8px):
        icon: 14px, var(--primary), aria-hidden="true"
        text: 13px, var(--text-secondary)
      Items per card: time | venue | organizer

    Footer (flex, space-between, align-items center,
            mt-20px, pt-16px, border-top 1px solid var(--border-color)):
      Left: countdown badge
        bg var(--warning-light), color var(--warning)
        border: 1px solid var(--warning), border-radius var(--radius-sm)
        padding 4px 12px, font-size 12px, font-weight 600
        bi-clock me-1
        text: "X দিন বাকি"
      Right: "বিস্তারিত" button
        bg var(--primary-subtle), color var(--primary)
        border: 1px solid var(--primary-border)
        border-radius var(--radius-sm), padding 6px 16px, font-size 13px
        bi-arrow-right ms-1
        hover: bg var(--primary), color white

UPCOMING EVENTS DATA:

Event 1:
  Date: ১৫ জুন | Jun
  Category: বার্ষিক অনুষ্ঠান
  Title: "বার্ষিক পুরস্কার বিতরণী অনুষ্ঠান ২০২৫"
  English: "Annual Prize Distribution Ceremony 2025"
  Desc: "বিদ্যালয়ের মেধাবী শিক্ষার্থীদের পুরস্কার প্রদান ও সাংস্কৃতিক অনুষ্ঠানের মাধ্যমে বার্ষিক পুরস্কার বিতরণী অনুষ্ঠান পালিত হবে।"
  Time: bi-clock → সকাল ১০:০০টা
  Venue: bi-geo-alt → বিদ্যালয় অডিটোরিয়াম
  Organizer: bi-person-fill → বিদ্যালয় কর্তৃপক্ষ
  Countdown: ১২ দিন বাকি

Event 2:
  Date: ২২ জুন | Jun
  Category: ক্রীড়া প্রতিযোগিতা
  Title: "আন্তঃশ্রেণি ক্রিকেট টুর্নামেন্ট ২০২৫"
  English: "Inter-Class Cricket Tournament 2025"
  Desc: "সকল শ্রেণির শিক্ষার্থীদের অংশগ্রহণে বার্ষিক আন্তঃশ্রেণি ক্রিকেট টুর্নামেন্ট অনুষ্ঠিত হবে। বিজয়ী দল জেলা পর্যায়ে অংশগ্রহণ করবে।"
  Time: bi-clock → সকাল ৯:০০টা
  Venue: bi-geo-alt → বিদ্যালয় মাঠ
  Organizer: bi-person-fill → ক্রীড়া পরিষদ
  Countdown: ১৯ দিন বাকি

Event 3:
  Date: ০৫ জুলাই | Jul
  Category: সাংস্কৃতিক
  Title: "বাংলা সাহিত্য ও সংস্কৃতি উৎসব ২০২৫"
  English: "Bangla Literature & Culture Festival 2025"
  Desc: "বাংলা সাহিত্য, কবিতা, নাটক ও লোকসংগীতের মাধ্যমে বাংলা সংস্কৃতির উদযাপনে একটি বিশেষ সাংস্কৃতিক উৎসবের আয়োজন করা হয়েছে।"
  Time: bi-clock → বিকেল ৩:০০টা
  Venue: bi-geo-alt → বিদ্যালয় মঞ্চ
  Organizer: bi-person-fill → সাংস্কৃতিক পরিষদ
  Countdown: ৩২ দিন বাকি

Below cards: centered "সকল আসন্ন অনুষ্ঠান দেখুন" button
  bg transparent, color var(--primary), border: 2px solid var(--primary)
  border-radius var(--radius-sm), padding 10px 28px, 14px, 500
  bi-calendar3 me-2
  hover: bg var(--primary), color white

═══════════════════════════════════════════════════════════
SECTION 4 — CATEGORY FILTER + NEWS ARCHIVE
═══════════════════════════════════════════════════════════

Background: var(--white)
Padding: 80px 0

Section header:
  h2: "সংবাদ ও কার্যক্রম আর্কাইভ"
  English: "News & Activities Archive"

TWO-COLUMN LAYOUT (col-lg-8 main | col-lg-4 sidebar):

─────────────────────────────
LEFT — MAIN NEWS FEED (col-lg-8)
─────────────────────────────

FILTER TAB BAR (.news-filter-tabs):
  display: flex; flex-wrap: wrap; gap: 8px; mb-32px

  Each .filter-btn:
    background: var(--gray-100)
    color: var(--text-secondary)
    border: 1px solid var(--border-color)
    border-radius: var(--radius-xl)
    padding: 7px 18px
    font-size: 13px, font-weight: 500
    cursor: pointer; transition: var(--transition)
    font-family: var(--font-bengali)

    Active / hover:
      background: var(--primary)
      color: var(--white)
      border-color: var(--primary)

  Filter buttons (data-filter attribute):
    data-filter="all"       | সকল
    data-filter="academic"  | একাডেমিক
    data-filter="sports"    | ক্রীড়া
    data-filter="cultural"  | সাংস্কৃতিক
    data-filter="national"  | জাতীয় দিবস
    data-filter="award"     | পুরস্কার

NEWS CARDS LIST (#news-list):
  display: flex; flex-direction: column; gap: 20px

  Each .news-card (data-category="[category]"):
    background: var(--white)
    border: 1px solid var(--border-color)
    border-left: 4px solid [category color]
    border-radius: var(--radius-md)
    padding: 20px 24px
    box-shadow: var(--shadow-sm)
    transition: var(--transition)
    hover: translateY(-2px), box-shadow var(--shadow-md)
    display: flex; gap: 20px; align-items: flex-start
    animate-fade-up

    Category border-left colors:
      academic  → var(--primary)
      sports    → var(--success)
      cultural  → var(--warning)
      national  → var(--accent)
      award     → hsl(var(--hue), var(--sat), 55%)  ← use var(--info) if defined, else var(--primary)

    LEFT — DATE BOX (.news-date-box):
      flex-shrink: 0
      width: 56px, height: 64px
      background: var(--primary-subtle)
      border: 1px solid var(--primary-border)
      border-radius: var(--radius-md)
      display: flex; flex-direction: column; align-items: center; justify-content: center
      Day: 20px, 700, var(--primary)
      Month: 10px, 600, var(--text-secondary), text-transform uppercase
      Year: 10px, var(--text-muted)
      (Match date box color to category border-left color)

    RIGHT — CONTENT:
      flex: 1

      Top row (flex, space-between, align-items center, mb-8px):
        Left: Category badge
          font-size 11px, font-weight 600, border-radius var(--radius-sm), padding 3px 10px
        Right: Read time
          bi-clock me-1, font-size 12px, var(--text-muted)
          "X মিনিট পাঠ"

      Title (h3):
        var(--font-bengali), 16px, 700, var(--text-primary), mb-6px, line-height 1.4
        hover: color var(--primary) (on the anchor wrapping title)

      Excerpt: 13.5px, var(--text-secondary), line-height 1.7, mb-12px

      Footer row (flex, space-between, align-items center):
        Left: author + source
          bi-person-circle me-1 + name, 12px, var(--text-muted)
          " · " separator
          bi-geo-alt me-1 + location, 12px, var(--text-muted)
        Right: "আরও পড়ুন →"
          color var(--primary), font-size 13px, font-weight 500
          text-decoration none; hover: text-decoration underline

12 NEWS CARDS DATA:

1. date: ২৮/মে/২০২৫ | category: award | border: var(--primary)
   Title: "বার্ষিক পুরস্কার বিতরণী অনুষ্ঠান ২০২৫ সম্পন্ন"
   Badge: পুরস্কার (primary)
   Read: ৩ মিনিট পাঠ
   Excerpt: "গত ২৮ মে বিদ্যালয়ের অডিটোরিয়ামে জাঁকজমকপূর্ণ বার্ষিক পুরস্কার বিতরণী অনুষ্ঠান সম্পন্ন হয়েছে। অনুষ্ঠানে ১৫০ জন মেধাবী শিক্ষার্থী পুরস্কার পেয়েছে।"
   Author: বিদ্যালয় প্রশাসন | Location: ঢাকা

2. date: ২০/মে/২০২৫ | category: academic | border: var(--primary)
   Title: "জাতীয় বিজ্ঞান অলিম্পিয়াডে বিদ্যালয়ের প্রথম স্থান অর্জন"
   Badge: একাডেমিক (primary)
   Read: ২ মিনিট পাঠ
   Excerpt: "ঢাকা বিভাগীয় পর্যায়ে অনুষ্ঠিত জাতীয় বিজ্ঞান অলিম্পিয়াডে আমাদের বিদ্যালয়ের শিক্ষার্থী তানভীর হোসেন প্রথম স্থান অর্জন করেছে।"
   Author: বিজ্ঞান বিভাগ | Location: ঢাকা বিভাগ

3. date: ১৫/মে/২০২৫ | category: sports | border: var(--success)
   Title: "আন্তঃবিদ্যালয় ফুটবল টুর্নামেন্টে রানার্স-আপ"
   Badge: ক্রীড়া (success)
   Read: ২ মিনিট পাঠ
   Excerpt: "ঢাকা বিভাগীয় আন্তঃবিদ্যালয় ফুটবল টুর্নামেন্টে আমাদের দল রানার্স-আপ হয়েছে। ফাইনালে মতিঝিল সরকারি হাই স্কুলের সাথে রোমাঞ্চকর ম্যাচে ১-২ গোলে পরাজিত হয়।"
   Author: ক্রীড়া পরিষদ | Location: মতিঝিল, ঢাকা

4. date: ১০/মে/২০২৫ | category: national | border: var(--accent)
   Title: "মহান মে দিবস যথাযোগ্য মর্যাদায় পালিত"
   Badge: জাতীয় দিবস (accent)
   Read: ২ মিনিট পাঠ
   Excerpt: "বিদ্যালয়ে যথাযোগ্য মর্যাদায় মহান মে দিবস পালিত হয়েছে। শিক্ষক-শিক্ষার্থীরা শ্রমিকদের অধিকার ও মর্যাদার বিষয়ে আলোচনা সভায় অংশ নেন।"
   Author: বিদ্যালয় প্রশাসন | Location: ঢাকা

5. date: ০৫/মে/২০২৫ | category: cultural | border: var(--warning)
   Title: "রবীন্দ্র জন্মজয়ন্তী উদযাপন অনুষ্ঠান"
   Badge: সাংস্কৃতিক (warning)
   Read: ৩ মিনিট পাঠ
   Excerpt: "বিশ্বকবি রবীন্দ্রনাথ ঠাকুরের ১৬৪তম জন্মজয়ন্তী উপলক্ষে বিদ্যালয়ে আলোচনা সভা, কবিতা আবৃত্তি ও সংগীতানুষ্ঠানের আয়োজন করা হয়।"
   Author: সাংস্কৃতিক পরিষদ | Location: বিদ্যালয় মঞ্চ

6. date: ২৮/এপ্রি/২০২৫ | category: academic | border: var(--primary)
   Title: "SSC পরীক্ষার ফলাফলে বিদ্যালয়ের ঐতিহাসিক সাফল্য"
   Badge: একাডেমিক (primary)
   Read: ৪ মিনিট পাঠ
   Excerpt: "২০২৫ সালের SSC পরীক্ষায় বিদ্যালয়ের পাসের হার ৯৮.৫% এবং ১৫ জন শিক্ষার্থী GPA-5.00 অর্জন করেছে। এটি বিদ্যালয়ের ইতিহাসে সর্বোচ্চ ফলাফল।"
   Author: একাডেমিক শাখা | Location: ঢাকা

7. date: ২০/এপ্রি/২০২৫ | category: national | border: var(--accent)
   Title: "পহেলা বৈশাখ ১৪৩২ উদযাপন"
   Badge: জাতীয় দিবস (accent)
   Read: ২ মিনিট পাঠ
   Excerpt: "বাংলা নববর্ষ ১৪৩২ উপলক্ষে বিদ্যালয়ে বর্ণাঢ্য অনুষ্ঠানের আয়োজন করা হয়। মঙ্গল শোভাযাত্রা, লোকসংগীত ও মেলার মাধ্যমে নববর্ষকে বরণ করা হয়।"
   Author: বিদ্যালয় প্রশাসন | Location: বিদ্যালয় প্রাঙ্গণ

8. date: ১৫/এপ্রি/২০২৫ | category: sports | border: var(--success)
   Title: "বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৫ সম্পন্ন"
   Badge: ক্রীড়া (success)
   Read: ৩ মিনিট পাঠ
   Excerpt: "তিন দিনব্যাপী বার্ষিক ক্রীড়া প্রতিযোগিতায় ৫০০ জনেরও বেশি শিক্ষার্থী অংশ নেয়। অ্যাথলেটিক্স, ফুটবল, ক্রিকেট ও ব্যাডমিন্টনসহ ১২টি ইভেন্টে প্রতিযোগিতা হয়।"
   Author: ক্রীড়া পরিষদ | Location: বিদ্যালয় মাঠ

9. date: ২৬/মার্চ/২০২৫ | category: national | border: var(--accent)
   Title: "মহান স্বাধীনতা ও জাতীয় দিবস পালিত"
   Badge: জাতীয় দিবস (accent)
   Read: ২ মিনিট পাঠ
   Excerpt: "মহান স্বাধীনতা ও জাতীয় দিবস উপলক্ষে বিদ্যালয়ে জাতীয় পতাকা উত্তোলন, আলোচনা সভা ও মুক্তিযুদ্ধভিত্তিক নাটক পরিবেশন করা হয়।"
   Author: বিদ্যালয় প্রশাসন | Location: বিদ্যালয় প্রাঙ্গণ

10. date: ২০/মার্চ/২০২৫ | category: award | border: var(--primary)
    Title: "গণিত অলিম্পিয়াডে স্বর্ণপদক অর্জন"
    Badge: পুরস্কার (primary)
    Read: ২ মিনিট পাঠ
    Excerpt: "জাতীয় গণিত অলিম্পিয়াডে বিদ্যালয়ের ১০ম শ্রেণির শিক্ষার্থী সুমাইয়া বেগম স্বর্ণপদক অর্জন করে দেশের সেরা ২০ জন গণিতবিদের মধ্যে স্থান পেয়েছে।"
    Author: গণিত বিভাগ | Location: ঢাকা

11. date: ০৮/মার্চ/২০২৫ | category: cultural | border: var(--warning)
    Title: "আন্তর্জাতিক নারী দিবস উদযাপন"
    Badge: সাংস্কৃতিক (warning)
    Read: ২ মিনিট পাঠ
    Excerpt: "আন্তর্জাতিক নারী দিবস উপলক্ষে নারী শিক্ষার গুরুত্ব ও নারীর ক্ষমতায়ন বিষয়ে আলোচনা সভা ও সাংস্কৃতিক অনুষ্ঠানের আয়োজন করা হয়।"
    Author: সাংস্কৃতিক পরিষদ | Location: বিদ্যালয় হল

12. date: ২৮/ফেব্রু/২০২৫ | category: national | border: var(--accent)
    Title: "মহান শহীদ দিবস ও আন্তর্জাতিক মাতৃভাষা দিবস"
    Badge: জাতীয় দিবস (accent)
    Read: ৩ মিনিট পাঠ
    Excerpt: "একুশে ফেব্রুয়ারি ভাষা শহীদদের স্মরণে বিদ্যালয়ে শহীদ বেদিতে পুষ্পস্তবক অর্পণ, প্রভাতফেরি ও আলোচনা সভার আয়োজন করা হয়।"
    Author: বিদ্যালয় প্রশাসন | Location: বিদ্যালয় প্রাঙ্গণ

LOAD MORE BUTTON (below news list):
  id="load-more-btn"
  bg var(--primary-subtle), color var(--primary)
  border: 1px solid var(--primary-border), border-radius var(--radius-sm)
  padding 10px 32px, 14px, 500
  bi-arrow-down-circle me-2
  centered (d-block mx-auto mt-4)
  hover: bg var(--primary), color white
  JS: shows first 6, clicking reveals remaining 6 with fade-in

JS filter + load-more:
  // Category filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const newsCards = document.querySelectorAll('.news-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      newsCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? 'flex' : 'none';
      });
    });
  });
  // Load more
  const allCards = Array.from(newsCards);
  allCards.slice(6).forEach(c => c.style.display = 'none');
  let expanded = false;
  document.getElementById('load-more-btn')?.addEventListener('click', () => {
    if (!expanded) {
      allCards.slice(6).forEach(c => { c.style.display = 'flex'; });
      document.getElementById('load-more-btn').textContent = 'কম দেখুন';
      expanded = true;
    } else {
      allCards.slice(6).forEach(c => { c.style.display = 'none'; });
      document.getElementById('load-more-btn').innerHTML =
        '<i class="bi bi-arrow-down-circle me-2"></i>আরও সংবাদ দেখুন';
      expanded = false;
    }
  });

─────────────────────────────
RIGHT — SIDEBAR (col-lg-4)
─────────────────────────────

WIDGET 1 — SEARCH BOX (.sidebar-widget):
  background: var(--white)
  border: 1px solid var(--border-color)
  border-radius: var(--radius-md)
  padding: 20px
  box-shadow: var(--shadow-sm)
  mb-24px

  Title: "সংবাদ খুঁজুন" (var(--font-bengali), 15px, 600, var(--text-primary), mb-12px)

  Input group:
    <input type="text" placeholder="শিরোনাম লিখুন..."
           class="form-control" style="font-family: var(--font-bengali); font-size: 13.5px">
    <button class="btn" style="background: var(--primary); color: var(--white)">
      <i class="bi bi-search"></i>
    </button>

  JS live search:
    document.querySelector('#news-search')?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('.news-card').forEach(card => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        card.style.display = title.includes(q) ? 'flex' : 'none';
      });
    });

WIDGET 2 — CATEGORIES (.sidebar-widget):
  Same widget box style, mb-24px
  Title: "বিভাগ অনুযায়ী"
  List (list-style none, p-0):
    Each .category-link-item (flex, space-between, align-items center,
         padding 10px 0, border-bottom 1px solid var(--border-color), last: no border):
      Left: bi-chevron-right (10px, var(--primary)) + category name
            (var(--font-bengali), 14px, var(--text-primary))
      Right: count badge
             (bg var(--primary-subtle), color var(--primary),
              font-size 11px, border-radius 20px, padding 2px 10px)
    hover: bg var(--gray-50), cursor pointer

  Data:
    সকল সংবাদ → 12 | একাডেমিক → 3 | ক্রীড়া → 2
    সাংস্কৃতিক → 2 | জাতীয় দিবস → 4 | পুরস্কার → 2 (use Bengali numerals: ১২, ৩, ২...)

WIDGET 3 — UPCOMING MINI LIST (.sidebar-widget):
  Same widget box style, mb-24px
  Title: "আসন্ন অনুষ্ঠান"
  3 mini event items (.mini-event-item, flex, gap 12px, pb-12px, border-bottom):
    Date box: 44×44px, bg var(--primary-subtle), border-radius var(--radius-sm), centered
              day (16px, 700, var(--primary)) + month (9px, var(--text-muted))
    Content:
      Title: var(--font-bengali), 13px, 600, var(--text-primary)
      Time: bi-clock (11px, var(--text-muted)) + time text (11px, var(--text-muted))

  Data:
    ১৫ জুন | "পুরস্কার বিতরণী অনুষ্ঠান" | সকাল ১০:০০টা
    ২২ জুন | "ক্রিকেট টুর্নামেন্ট" | সকাল ৯:০০টা
    ০৫ জুলাই | "সাহিত্য ও সংস্কৃতি উৎসব" | বিকেল ৩:০০টা

WIDGET 4 — SOCIAL SHARE (.sidebar-widget):
  Same widget box style
  Title: "শেয়ার করুন"
  4 social buttons (flex, flex-column, gap 8px):
    Each (display flex, align-items center, gap 10px,
          padding 10px 16px, border-radius var(--radius-sm),
          font-size 13px, font-weight 500, cursor pointer,
          text-decoration none):
      Facebook:  bg #1877f2 (→ use inline style only since no var) ... 
                 NOTE: must use CSS variable. Use:
                 .social-btn-fb { background: var(--primary); } for generic styling
                 (Acceptable: use var(--primary) for fb, var(--accent) for others
                  since no hardcoded colors allowed in CSS)
      Actually: style all 4 with same base, differentiate by icon only:
        bi-facebook | "Facebook-এ শেয়ার করুন" | bg var(--primary), white
        bi-twitter-x | "Twitter/X-এ শেয়ার করুন" | bg var(--gray-800), white
        bi-whatsapp | "WhatsApp-এ শেয়ার করুন" | bg var(--success), white
        bi-link-45deg | "লিংক কপি করুন" | bg var(--gray-100), color var(--text-primary)

═══════════════════════════════════════════════════════════
SECTION 5 — MINI CALENDAR WIDGET
═══════════════════════════════════════════════════════════

Background: var(--gray-50)
Padding: 80px 0

Section header:
  h2: "ইভেন্ট ক্যালেন্ডার"
  English: "Event Calendar — June 2025"

Two-column layout (col-lg-7 calendar | col-lg-5 event list):

LEFT — CUSTOM MINI CALENDAR (.event-calendar):
  background: var(--white)
  border: 1px solid var(--border-color)
  border-radius: var(--radius-lg)
  overflow: hidden
  box-shadow: var(--shadow-sm)

  CALENDAR HEADER (bg var(--primary), white, padding 16px 20px):
    flex, space-between, align-items center
    Prev button (◀): 32×32px, bg rgba white 0.15, border-radius 50%,
                      border none, white, hover bg rgba white 0.25
    Month+Year: "জুন ২০২৫", var(--font-bengali), 16px, 600, white
    Next button (▶): same as prev

  WEEKDAY ROW (bg var(--primary-subtle), padding 10px 0):
    7 columns, each: text-center, font-size 12px, font-weight 600, var(--primary)
    রবি | সোম | মঙ্গল | বুধ | বৃহঃ | শুক্র | শনি

  DATE GRID (CSS Grid, 7 columns, padding 12px):
    Each .cal-day:
      aspect-ratio: 1
      display: flex; align-items: center; justify-content: center
      border-radius: 50%
      font-size: 13px
      cursor: pointer
      transition: var(--transition)
      font-family: var(--font-bengali)

      States:
        Normal: color var(--text-primary), hover bg var(--primary-subtle)
        Other month: color var(--text-muted), opacity 0.5
        Today: bg var(--primary), color white, font-weight 700
        Has event: position relative
          ::after dot: 4px circle, bg var(--accent), bottom 2px, centered
        Selected: bg var(--primary-dark), color white

    June 2025 calendar (starts Wednesday):
      Empty cells for Sun–Tue (days before June 1)
      Fill dates 1–30
      Mark event days: 15 (পুরস্কার বিতরণী), 22 (ক্রিকেট), 30 (month end)
      Today: highlight June 3 (or whichever is current — use JS Date)

    JS for calendar:
      const today = new Date();
      // Render calendar for current month
      // Mark event dates with data-has-event="true"
      // Click date → show event in right panel if exists
      // Prev/Next buttons change month

RIGHT — SELECTED DATE EVENTS (.calendar-event-list):
  background: var(--white)
  border: 1px solid var(--border-color)
  border-radius: var(--radius-lg)
  padding: 24px
  box-shadow: var(--shadow-sm)
  height: 100%

  Title: "জুনের অনুষ্ঠানসমূহ" (var(--font-bengali), 16px, 600, var(--text-primary), mb-20px)
  Subtitle: "সকল নির্ধারিত অনুষ্ঠান" (13px, var(--text-muted))

  Each .cal-event-item (flex, gap 12px, pb-16px, border-bottom 1px solid var(--border-color)):
    Date badge (flex-shrink 0):
      width 48px, height 48px, border-radius var(--radius-sm)
      bg var(--primary-subtle), border 1px solid var(--primary-border)
      Day: 18px, 700, var(--primary)
      Month: 10px, var(--text-muted)
    Content:
      Title: var(--font-bengali), 14px, 600, var(--text-primary), mb-2px
      Time + venue: 12px, var(--text-muted), flex, gap 12px
        bi-clock + time | bi-geo-alt + venue

  Events listed:
    ১৫ জুন | "বার্ষিক পুরস্কার বিতরণী" | সকাল ১০টা | অডিটোরিয়াম
    ২২ জুন | "ক্রিকেট টুর্নামেন্ট"    | সকাল ৯টা  | খেলার মাঠ
    ০৫ জুলাই | "সাহিত্য উৎসব"         | বিকেল ৩টা | বিদ্যালয় মঞ্চ

  "ইভেন্ট যোগ করুন" note (mt-20px, text-center):
    bi-info-circle + "নতুন অনুষ্ঠানের জন্য যোগাযোগ করুন"
    font-size 12px, var(--text-muted)

═══════════════════════════════════════════════════════════
SECTION 6 — FEATURED MEDIA COVERAGE
═══════════════════════════════════════════════════════════

Background: var(--white)
Padding: 80px 0

Section header:
  h2: "মিডিয়া কভারেজ"
  English: "Media Coverage & Press"

3 media cards (col-lg-4) — .media-card:
  background: var(--white)
  border: 1px solid var(--border-color)
  border-radius: var(--radius-md)
  overflow: hidden
  box-shadow: var(--shadow-sm)
  transition: var(--transition)
  hover: translateY(-3px), box-shadow var(--shadow-md)
  animate-fade-up

  TOP IMAGE PLACEHOLDER (.media-card-img):
    height: 180px
    background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-subtle) 100%)
    display: flex; align-items: center; justify-content: center
    position: relative

    Center icon: bi-newspaper, 3rem, var(--primary), opacity 0.3

    Source badge (bottom-left, position absolute):
      bottom: 12px, left: 12px
      bg var(--white), color var(--text-primary)
      border-radius var(--radius-sm), padding 4px 10px
      font-size 11px, font-weight 700
      box-shadow var(--shadow-sm)

    Date badge (top-right):
      bg rgba primary-dark 0.8, color white
      font-size 11px, border-radius var(--radius-sm)
      padding 4px 8px

  CARD BODY (padding: 20px):
    Category tag (mb-8px):
      font-size 11px, font-weight 600, color var(--accent)
      text-transform uppercase, letter-spacing 0.05em

    Title (h3): var(--font-bengali), 15px, 700, var(--text-primary), mb-8px, line-height 1.4
    Excerpt: 13px, var(--text-secondary), line-height 1.7, mb-16px

    Footer (flex, space-between, align-items center):
      Left: source name + bi-box-arrow-up-right (12px)
             13px, var(--primary), font-weight 500
      Right: bi-eye + view count, 12px, var(--text-muted)

Data:
  1. Source: প্রথম আলো | Date: ২৮ মে ২০২৫
     Tag: জাতীয় সংবাদ
     Title: "আদর্শ বিদ্যালয়ের ঐতিহাসিক SSC ফলাফল"
     Excerpt: "এ বছর SSC পরীক্ষায় ৯৮.৫% পাসের হার অর্জন করে আদর্শ উচ্চ বিদ্যালয় ঢাকা বিভাগে শীর্ষস্থানীয় বিদ্যালয়ের তালিকায় স্থান পেয়েছে।"
     Views: ২,৩৪৫ বার দেখা হয়েছে

  2. Source: দৈনিক ইত্তেফাক | Date: ২০ মে ২০২৫
     Tag: শিক্ষা সংবাদ
     Title: "বিজ্ঞান অলিম্পিয়াডে আদর্শের জয়"
     Excerpt: "জাতীয় বিজ্ঞান অলিম্পিয়াডে ঢাকার আদর্শ উচ্চ বিদ্যালয়ের শিক্ষার্থী তানভীর প্রথম স্থান অর্জন করে জাতীয় পর্যায়ে বিদ্যালয়ের সুনাম অক্ষুণ্ণ রেখেছে।"
     Views: ১,৮৯০ বার দেখা হয়েছে

  3. Source: বাংলাদেশ টেলিভিশন | Date: ১৫ মে ২০২৫
     Tag: টেলিভিশন সংবাদ
     Title: "ক্রীড়া প্রতিভায় আদর্শ বিদ্যালয়"
     Excerpt: "বাংলাদেশ টেলিভিশনের শিক্ষা ও তারুণ্য অনুষ্ঠানে আদর্শ উচ্চ বিদ্যালয়ের ক্রীড়া সাফল্য ও সুযোগ-সুবিধা নিয়ে বিশেষ প্রতিবেদন প্রচারিত হয়।"
     Views: ৩,১২০ বার দেখা হয়েছে

═══════════════════════════════════════════════════════════
SECTION 7 — CTA STRIP
═══════════════════════════════════════════════════════════

Background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)
Padding: 56px 0
Position: relative; overflow: hidden

::before diagonal pattern overlay (same as hero)

Content (centered, white, text-align center):
  Icon: bi-bell-fill (48px, var(--warning), mb-16px)
  h2: "অনুষ্ঠানের আপডেট পেতে যুক্ত থাকুন"
      var(--font-bengali), 1.6rem, 700, white
  Subtext: "বিদ্যালয়ের সকল অনুষ্ঠান ও সংবাদের সর্বশেষ আপডেট পেতে আমাদের সাথে যোগাযোগ রাখুন"
           15px, rgba white 0.80, mt-8px, mb-28px

  Two buttons (gap 12px, flex-wrap: wrap, justify-content center):
    "নোটিশ বোর্ড দেখুন" | href="notices.html"
      bg var(--white), color var(--primary)
      border-radius var(--radius-sm), padding 12px 28px, 14px, 600
      bi-bell me-2
      hover: bg var(--primary-subtle)

    "যোগাযোগ করুন" | href="contact.html"
      bg transparent, color white
      border: 2px solid rgba(255,255,255,0.6)
      border-radius var(--radius-sm), padding 12px 28px, 14px, 500
      bi-telephone me-2
      hover: bg rgba(255,255,255,0.1), border-color white

═══════════════════════════════════════════════════════════
COMPONENT: FOOTER
═══════════════════════════════════════════════════════════

FOOTER TOP STRIP (.footer-top-strip):
  bg var(--primary) | padding 20px 0 | flex, space-between, align-items center
  Left: "🎓 ২০২৫ সালের ভর্তি কার্যক্রম চলছে" (white, 600, var(--font-bengali))
  Right: "ভর্তির জন্য আবেদন করুন"
         bg var(--accent), white, border-radius var(--radius-sm),
         padding 8px 20px, 13px, 600, href="admission.html"

FOOTER MAIN (.footer-main):
  bg var(--primary-dark) | color rgba(255,255,255,0.80)
  padding 56px 0 32px | font-size 13.5px | line-height 1.9

  4-column grid (col-xl-3, col-lg-3, col-md-6):

  Col 1 — About:
    Logo img (40px) + "আদর্শ উচ্চ বিদ্যালয় ও কলেজ" (white, 16px, 700, var(--font-bengali))
    "Adarsha High School & College" (rgba white 0.6, 12px)
    <hr style="border-color: rgba(255,255,255,0.15)">
    Desc: "১৯৬৫ সাল থেকে মানসম্পন্ন শিক্ষা প্রদান করে আসছে আদর্শ উচ্চ বিদ্যালয়।
           আমাদের লক্ষ্য জ্ঞান, নৈতিকতা ও দেশপ্রেমে সমৃদ্ধ নাগরিক গড়ে তোলা।"
           (rgba white 0.75, var(--font-bengali))
    EIIN badge: "EIIN: 123456"
      bg rgba white 0.1, border-radius 4px, padding 4px 10px, 12px, d-inline-block
    Social icons row (mt-16px, gap 8px):
      Each: 32px circle, bg rgba white 0.1, border-radius 50%,
            display flex, align-items center, justify-content center
            icon 14px, white; hover bg var(--accent)
      bi-facebook | bi-youtube | bi-twitter-x

  Col 2 — দ্রুত লিঙ্ক:
    Heading: "দ্রুত লিঙ্ক" (white, 14px, 600, mb-16px)
    List (list-style none, p-0, flex-column, gap 6px):
      Each link (rgba white 0.75, hover white, text-decoration none, 13.5px):
        bi-chevron-right (10px, var(--primary-border)) me-2
        হোম → index.html
        আমাদের বিদ্যালয় → about.html
        প্রধান শিক্ষকের বাণী → head-teacher.html
        শিক্ষক-কর্মচারী → teachers.html
        পরিচালনা কমিটি → committee.html
        ভর্তি তথ্য → admission.html
        নোটিশ বোর্ড → notices.html

  Col 3 — একাডেমিক লিঙ্ক:
    Heading: "একাডেমিক" (white, 14px, 600, mb-16px)
    Links (same style):
      একাডেমিক ক্যালেন্ডার → academic.html#calendar
      শ্রেণি রুটিন → academic.html#routine
      পরীক্ষার তথ্য → academic.html#exam
      ফলাফল → results.html
      ডাউনলোড সেন্টার → downloads.html
      গ্যালারি → gallery.html
      যোগাযোগ → contact.html

  Col 4 — যোগাযোগ:
    Heading: "যোগাযোগ" (white, 14px, 600, mb-16px)
    Items (flex, align-items flex-start, gap 10px, mb-10px, rgba white 0.75):
      bi-geo-alt-fill (14px, var(--primary-border)): "আদর্শ রোড, মিরপুর, ঢাকা-১২১৬"
      bi-telephone-fill: "+880 2-XXXXXXXX"
      bi-envelope-fill: "info@adarshaschool.edu.bd"
      bi-clock-fill: "সোম–শুক্র: সকাল ৯টা – বিকেল ৫টা"
    Map link (mt-8px):
      bi-map me-2 + "গুগল ম্যাপে দেখুন"
      color var(--accent), hover text-decoration underline

FOOTER BOTTOM (.footer-bottom):
  bg var(--gray-900) | padding 16px 0
  color rgba white 0.5 | font-size 12.5px
  flex, space-between, align-items center, flex-wrap wrap, gap 8px
  Left: "© ২০২৫ আদর্শ উচ্চ বিদ্যালয় ও কলেজ। সর্বস্বত্ব সংরক্ষিত।"
  Right (flex, gap 16px):
    "গোপনীয়তা নীতি" → privacy.html (hover white)
    "সাইটম্যাপ" → sitemap.html (hover white)
    "GRS" → grs.html (hover white)

═══════════════════════════════════════════════════════════
SCROLL ANIMATIONS
═══════════════════════════════════════════════════════════

CSS (in <style> block inside <head>):
.animate-fade-up {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.animate-fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

JS (in <script> before </body>):
const fadeObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.animate-fade-up').forEach(el => fadeObs.observe(el));

// Staggered delay for card grids
document.querySelectorAll('.upcoming-event-card, .event-stat-card, .media-card')
  .forEach((el, i) => { el.style.transitionDelay = `${(i % 3) * 0.1}s`; });

document.querySelectorAll('.news-card')
  .forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 0.08}s`; });

═══════════════════════════════════════════════════════════
ACCESSIBILITY
═══════════════════════════════════════════════════════════

- Single <h1> on page hero only
- Heading hierarchy: h1 → h2 (sections) → h3 (card titles)
- aria-current="page" on "ইভেন্ট ও সংবাদ" nav link
- aria-label on icon-only buttons (search, social, calendar nav)
- aria-hidden="true" on all decorative icons
- All interactive elements: focus-visible ring
  outline: 2px solid var(--primary); outline-offset: 2px
- Filter buttons: role="button", keyboard accessible
- Calendar days: role="button", aria-label="[date] [month]"
- News cards: proper link wrapping with descriptive text

═══════════════════════════════════════════════════════════
OUTPUT RULES
═══════════════════════════════════════════════════════════

- Deliver 100% complete events.html — zero placeholder comments
- Every section fully coded with real Bengali + English content as specified
- All page-specific CSS in a <style> block inside <head>
- All JS in a single <script> block just before </body>
- NO hardcoded hex/rgb/hsl colors anywhere — only CSS variables
- NO jQuery, React, Tailwind, or Vue
- File must render standalone in any browser
- Bengali text: always font-family: var(--font-bengali)
- Section background pattern: gray-50 → white → gray-50 → white → gray-50 → primary-gradient
- Sidebar sticks on desktop (position: sticky; top: 90px) inside col-lg-4