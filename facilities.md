Build a complete, production-ready facilities.html page for a Bangladesh school website.

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
  <title>সুযোগ-সুবিধা | আদর্শ উচ্চ বিদ্যালয় ও কলেজ</title>
  <meta name="description" content="আদর্শ উচ্চ বিদ্যালয় ও কলেজের শ্রেণিকক্ষ, গ্রন্থাগার, বিজ্ঞানাগার, কম্পিউটার ল্যাব, খেলার মাঠসহ সকল সুযোগ-সুবিধার বিস্তারিত।">
  <meta property="og:title" content="সুযোগ-সুবিধা | আদর্শ উচ্চ বিদ্যালয় ও কলেজ">
  <meta property="og:type" content="website">
  <link rel="canonical" href="facilities.html">
  [CDN links]
  [stylesheet links]
</head>
<body>
  <header><!-- Navbar --></header>
  <main id="main-content">
    <!-- Page Hero Banner -->
    <!-- Facility Stats Strip -->
    <!-- Main Facilities Grid -->
    <!-- Virtual Tour CTA -->
    <!-- Infrastructure Details -->
    <!-- Safety & Welfare -->
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
  height: 36px | background: var(--primary-dark) | font-size: 12px | color rgba(255,255,255,0.85)
  Left: 🇧🇩 "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার" | separator " | " | "জাতীয় শিক্ষা সপ্তাহ ২০২৫"
  Right (gap 16px): bi-telephone-fill +880 2-XXXXXXXX | bi-envelope-fill info@adarshaschool.edu.bd
                    | bi-facebook (14px, white, hover var(--accent)) | bi-youtube
  Hide on mobile: d-none d-xl-flex

  CSS:
  .topbar { background: var(--primary-dark); color: rgba(255,255,255,0.85);
            font-size: 12px; height: 36px; display: flex; align-items: center; }
  .topbar a { color: rgba(255,255,255,0.75); text-decoration: none; transition: var(--transition); }
  .topbar a:hover { color: var(--white); }

LAYER 2 — .main-navbar:
  height: 70px | background: var(--white) | border-bottom: 1px solid var(--border-color)
  position: sticky; top: 0; z-index: 1030
  JS adds .scrolled → box-shadow: var(--shadow-md)

  Logo: assets/images/logo.png (48×48, object-fit: contain)
        Line 1: "আদর্শ উচ্চ বিদ্যালয় ও কলেজ" — var(--font-bengali), 17px, 700, var(--primary-dark)
        Line 2: "Adarsha High School & College, Dhaka" — 11px, 400, var(--text-secondary)

  Nav links (navbar-expand-xl, 13.5px, font-weight 500, color var(--text-primary)):
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
    সুযোগ-সুবিধা → facilities.html   ← ACTIVE (aria-current="page")
    যোগাযোগ → contact.html

  Active link style: color var(--primary), border-bottom: 2px solid var(--primary)

  Dropdown styles:
    background var(--white) | border 1px solid var(--border-color) | border-radius var(--radius-md)
    box-shadow var(--shadow-lg) | min-width 220px | font-size 13px | item padding 8px 16px
    item hover: bg var(--primary-subtle), color var(--primary), border-left: 3px solid var(--primary)

  Right buttons:
    "ভর্তি আবেদন": bg var(--accent), white, border-radius var(--radius-sm),
                    13px, 600, padding 8px 18px, icon bi-pencil-square, href="admission.html"
                    hover: bg var(--accent-dark)
    "অনুসন্ধান": transparent, border 1px solid var(--border-color), 36×36px,
                  icon bi-search, hover bg var(--primary-subtle)

  Mobile: hamburger, full-width white collapsed menu, accordion dropdowns,
          topbar d-none d-xl-flex, action buttons stacked below nav links

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
position: relative; overflow: hidden

Diagonal pattern overlay (::before):
  background: repeating-linear-gradient(
    45deg,
    rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px,
    transparent 1px, transparent 20px
  )

Decorative circle (::after, bottom-right):
  width: 300px, height: 300px
  border-radius: 50%
  background: rgba(255,255,255,0.04)
  position: absolute, bottom: -100px, right: -60px

Content (centered, white):
  Breadcrumb (13px, rgba white 0.75, mb-3):
    <i class="bi bi-house-fill"></i> হোম
    › সুযোগ-সুবিধা
    (separator color rgba white 0.4)

  <h1>: "সুযোগ-সুবিধা" — var(--font-bengali), 2rem, 700, white, letter-spacing -0.01em
  English subtitle: "Facilities & Infrastructure" — 14px, rgba white 0.75, mt-2

  Decorative lines: two 60px horizontal rules (rgba white 0.2), flanking the title block
                    display flex, align-items center, gap 16px, justify-content center

CSS:
.page-hero { background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
             min-height: 180px; display: flex; align-items: center; position: relative; overflow: hidden; }
.page-hero::before { content:''; position:absolute; inset:0;
  background: repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px,
  rgba(255,255,255,0.03) 1px, transparent 1px, transparent 20px); }
.breadcrumb-item+.breadcrumb-item::before { content:'›'; color:rgba(255,255,255,0.4); }

═══════════════════════════════════════════════════════════
SECTION 2 — FACILITY STATS STRIP
═══════════════════════════════════════════════════════════

Background: var(--white)
Border-bottom: 1px solid var(--border-color)
Padding: 40px 0

4 stat cards in a row (col-lg-3, col-sm-6):

Each .facility-stat-card:
  text-align: center
  padding: 24px 16px
  border-right: 1px solid var(--border-color)  (last: no border)
  animate-fade-up class

  Icon circle (56px, bg var(--primary-subtle), border-radius 50%, margin 0 auto 12px):
    icon 22px, color var(--primary)

  Count (.stat-count):
    font-size: 2.2rem, font-weight: 700, color: var(--primary)
    data-target="[number]" for JS counter animation
    font-family: var(--font-primary)

  Label: var(--font-bengali), 14px, color var(--text-secondary), mt-1

Data:
  1. bi-building        | 3     | "একাডেমিক ভবন"
  2. bi-door-open-fill  | 45    | "শ্রেণিকক্ষ"
  3. bi-pc-display      | 80    | "কম্পিউটার"
  4. bi-book-half       | 8,000 | "গ্রন্থাগার বই"

JS counter: IntersectionObserver triggers count-up 0 → data-target on first viewport entry.
  const countUp = (el) => {
    const target = parseInt(el.dataset.target.replace(/,/g,''));
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current).toLocaleString('bn-BD');
    }, 16);
  };
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ countUp(e.target); statObserver.unobserve(e.target); }});
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-count').forEach(el => statObserver.observe(el));

═══════════════════════════════════════════════════════════
SECTION 3 — MAIN FACILITIES GRID
═══════════════════════════════════════════════════════════

Background: var(--gray-50)
Padding: 80px 0

Section header (.section-header, animate-fade-up, text-center):
  Bengali h2: "আমাদের সুযোগ-সুবিধা"
  English subtitle: "Our Facilities & Infrastructure"
  Decorative underline: centered flex row —
    40px line (2px, var(--primary)) + 10px circle (var(--accent)) + 40px line (2px, var(--primary))
    gap: 8px, margin: 12px auto 0

10 LARGE FACILITY CARDS in 2-column grid (col-lg-6) with alternating layout:

Each .facility-card:
  background: var(--white)
  border: 1px solid var(--border-color)
  border-radius: var(--radius-lg)
  overflow: hidden
  box-shadow: var(--shadow-sm)
  transition: var(--transition)
  hover: translateY(-3px), box-shadow var(--shadow-lg)
  animate-fade-up

  Layout: 2-column inside card (col-md-5 image | col-md-7 content)
  On mobile: stack vertically (image top, content bottom)

  IMAGE COLUMN (.facility-card-img):
    height: 240px (mobile: 200px)
    background: var(--primary-light)   ← placeholder color since no real images
    position: relative; overflow: hidden
    display: flex; align-items: center; justify-content: center

    Large icon (centered, placeholder):
      font-size: 4rem
      color: var(--primary)
      opacity: 0.35

    Category ribbon (top-left):
      position absolute, top 12px, left 0
      background: var(--primary), color white
      font-size 11px, font-weight 600
      padding: 4px 14px 4px 10px
      border-radius: 0 var(--radius-sm) var(--radius-sm) 0
      font-family: var(--font-bengali)

    Availability badge (top-right):
      position absolute, top 12px, right 12px
      background: var(--success), color white (if available)
      font-size 10px, font-weight 600, border-radius var(--radius-sm), padding 3px 8px
      icon bi-check-circle-fill me-1

  CONTENT COLUMN (.facility-card-body):
    padding: 28px 24px
    display: flex; flex-direction: column; justify-content: space-between

    Title (h3): font-family var(--font-bengali), font-size 18px, font-weight 700,
                color var(--text-primary), margin-bottom 8px

    English title: font-size 12px, color var(--text-muted), margin-bottom 12px,
                   text-transform uppercase, letter-spacing 0.05em

    Description: font-size 13.5px, color var(--text-secondary), line-height 1.8, margin-bottom 16px

    Feature list (.facility-features):
      list-style: none, padding 0, margin 0
      display: flex; flex-wrap: wrap; gap: 8px

      Each feature tag:
        background: var(--primary-subtle)
        border: 1px solid var(--primary-border)
        border-radius: var(--radius-sm)
        padding: 4px 12px
        font-size: 12px
        color: var(--primary)
        font-family: var(--font-bengali)
        icon: bi-check2 me-1 (12px)

    Footer row (flex, space-between, margin-top 20px, padding-top 16px,
                border-top 1px solid var(--border-color)):
      Left: capacity info — bi-people-fill icon + text (13px, var(--text-muted))
      Right: "বিস্তারিত" link → anchor to detail section
             color var(--primary), font-size 13px, font-weight 500
             icon bi-arrow-right ms-1
             hover: color var(--primary-dark), text-decoration underline

FACILITY DATA (10 cards):

1. "ডিজিটাল শ্রেণিকক্ষ" | "Digital Classrooms" | শিক্ষা
   icon: bi-easel2-fill
   Description: "আমাদের ৪৫টি শ্রেণিকক্ষ সম্পূর্ণ ডিজিটাল পদ্ধতিতে সজ্জিত। প্রতিটি কক্ষে মাল্টিমিডিয়া প্রজেক্টর, ইন্টারেক্টিভ হোয়াইটবোর্ড এবং উচ্চগতির ইন্টারনেট সংযোগ রয়েছে।"
   Features: ইন্টারেক্টিভ বোর্ড | মাল্টিমিডিয়া প্রজেক্টর | এসি সুবিধা | উচ্চগতির ইন্টারনেট | CCTV
   Capacity: "প্রতি কক্ষে ৪০ জন শিক্ষার্থী"
   Available ✓

2. "কেন্দ্রীয় গ্রন্থাগার" | "Central Library" | গ্রন্থাগার
   icon: bi-book-half
   Description: "৮,০০০ এরও বেশি বই সমৃদ্ধ আমাদের কেন্দ্রীয় গ্রন্থাগার। পাঠ্যবইয়ের পাশাপাশি রয়েছে বিশ্বসাহিত্য, বিজ্ঞান, ইতিহাস ও রেফারেন্স বইয়ের বিশাল সংগ্রহ।"
   Features: ৮,০০০+ বই | ডিজিটাল ক্যাটালগ | রিডিং জোন | পত্রিকা কর্নার | গবেষণা সহায়তা
   Capacity: "একসাথে ৬০ জন পাঠক"
   Available ✓

3. "বিজ্ঞান গবেষণাগার" | "Science Laboratory" | বিজ্ঞান
   icon: bi-eyedropper
   Description: "পদার্থবিজ্ঞান, রসায়ন ও জীববিজ্ঞানের জন্য আলাদা তিনটি সুসজ্জিত গবেষণাগার রয়েছে। আধুনিক যন্ত্রপাতি ও রাসায়নিক সরঞ্জামে পরিপূর্ণ প্রতিটি ল্যাব।"
   Features: পদার্থ ল্যাব | রসায়ন ল্যাব | জীববিজ্ঞান ল্যাব | আধুনিক যন্ত্রপাতি | নিরাপত্তা সরঞ্জাম
   Capacity: "প্রতি সেশনে ৩০ জন"
   Available ✓

4. "কম্পিউটার ল্যাবরেটরি" | "Computer Laboratory" | প্রযুক্তি
   icon: bi-pc-display
   Description: "দুটি আধুনিক কম্পিউটার ল্যাবে মোট ৮০টি উচ্চ-কার্যক্ষমতার কম্পিউটার রয়েছে। দ্রুতগতির ইন্টারনেট ও প্রয়োজনীয় সফটওয়্যার সহ প্রতিটি কম্পিউটার সজ্জিত।"
   Features: ৮০টি কম্পিউটার | ১০০ Mbps ইন্টারনেট | প্রিন্টার ও স্ক্যানার | সফটওয়্যার লাইসেন্স | প্রোগ্রামিং শিক্ষা
   Capacity: "প্রতি ল্যাবে ৪০ জন"
   Available ✓

5. "বহুমুখী খেলার মাঠ" | "Multi-purpose Playground" | ক্রীড়া
   icon: bi-dribbble
   Description: "বিশাল খেলার মাঠে ফুটবল, ক্রিকেট, ব্যাডমিন্টন ও অ্যাথলেটিক্সের সুব্যবস্থা রয়েছে। বার্ষিক ক্রীড়া প্রতিযোগিতাসহ নিয়মিত শারীরিক শিক্ষা কার্যক্রম পরিচালিত হয়।"
   Features: ফুটবল মাঠ | ক্রিকেট পিচ | ব্যাডমিন্টন কোর্ট | অ্যাথলেটিক্স ট্র্যাক | দর্শক গ্যালারি
   Capacity: "৫০০+ শিক্ষার্থী একসাথে"
   Available ✓

6. "অডিটোরিয়াম" | "Auditorium" | সংস্কৃতি
   icon: bi-camera-video-fill
   Description: "৩০০ আসনবিশিষ্ট আধুনিক অডিটোরিয়ামে বার্ষিক পুরস্কার বিতরণী, সাংস্কৃতিক অনুষ্ঠান ও জাতীয় দিবস উদযাপন হয়। উন্নত সাউন্ড সিস্টেম ও স্টেজ আলোকসজ্জায় সজ্জিত।"
   Features: ৩০০ আসন | এসি সুবিধা | প্রজেকশন সিস্টেম | সাউন্ড সিস্টেম | গ্রিনরুম
   Capacity: "৩০০ দর্শক ধারণক্ষমতা"
   Available ✓

7. "শিক্ষার্থী ক্যান্টিন" | "Student Canteen" | কল্যাণ
   icon: bi-cup-hot-fill
   Description: "পরিষ্কার ও স্বাস্থ্যসম্মত ক্যান্টিনে সাশ্রয়ী মূল্যে পুষ্টিকর খাবার পরিবেশন করা হয়। সরকারি স্বাস্থ্যবিধি মেনে পরিচালিত এবং নিয়মিত মান নিয়ন্ত্রণ করা হয়।"
   Features: স্বাস্থ্যসম্মত রান্নাঘর | পুষ্টিকর মেনু | সাশ্রয়ী মূল্য | বিশুদ্ধ পানীয় জল | পরিষ্কার বসার ব্যবস্থা
   Capacity: "একসাথে ১০০ জন শিক্ষার্থী"
   Available ✓

8. "প্রার্থনা কক্ষ" | "Prayer Room" | কল্যাণ
   icon: bi-stars
   Description: "ছাত্র ও ছাত্রীদের জন্য আলাদা প্রার্থনা কক্ষের ব্যবস্থা রয়েছে। নামাজের সময় অনুযায়ী বিশেষ বিরতির ব্যবস্থাও রাখা হয়।"
   Features: ছাত্র প্রার্থনা কক্ষ | ছাত্রী প্রার্থনা কক্ষ | অজুর ব্যবস্থা | জায়নামাজ সরবরাহ | নির্মল পরিবেশ
   Capacity: "প্রতিটিতে ৫০ জন"
   Available ✓

9. "মিডিয়া ও ক্লাব রুম" | "Media & Club Room" | কার্যক্রম
   icon: bi-camera2
   Description: "ফটোগ্রাফি ক্লাব, বিতর্ক সমিতি, বিজ্ঞান ক্লাব ও সাহিত্য সংসদের জন্য নিজস্ব কক্ষ রয়েছে। শিক্ষার্থীরা এখানে তাদের পাঠ্যবহির্ভূত কার্যক্রম পরিচালনা করে।"
   Features: বিতর্ক ক্লাব | বিজ্ঞান ক্লাব | ফটোগ্রাফি ক্লাব | সাহিত্য সংসদ | আইটি ক্লাব
   Capacity: "প্রতিটি ক্লাবে ৩০ জন সদস্য"
   Available ✓

10. "প্রাথমিক চিকিৎসা কেন্দ্র" | "First Aid & Health Center" | স্বাস্থ্য
    icon: bi-heart-pulse-fill
    Description: "অভিজ্ঞ নার্স ও প্রশিক্ষিত কর্মী দ্বারা পরিচালিত স্বাস্থ্যসেবা কেন্দ্রে প্রাথমিক চিকিৎসার সম্পূর্ণ ব্যবস্থা রয়েছে। জরুরি প্রয়োজনে নিকটস্থ হাসপাতালে রেফার করার ব্যবস্থা আছে।"
    Features: প্রশিক্ষিত নার্স | প্রাথমিক ওষুধ | বিশ্রাম কক্ষ | অ্যাম্বুলেন্স যোগাযোগ | নিয়মিত স্বাস্থ্য পরীক্ষা
    Capacity: "সকল শিক্ষার্থীর জন্য উন্মুক্ত"
    Available ✓

═══════════════════════════════════════════════════════════
SECTION 4 — VIRTUAL TOUR CTA BANNER
═══════════════════════════════════════════════════════════

Background: var(--primary)
Padding: 56px 0
Position: relative; overflow: hidden

Decorative background pattern (::before):
  repeating-linear-gradient as in hero

Content (centered, white, text-center):
  Icon row: three icons spaced with arrows between them
    bi-building (40px) → bi-arrow-right (20px, rgba white 0.5) →
    bi-camera-video (40px) → bi-arrow-right → bi-mortarboard (40px)
    All white, margin-bottom 20px

  h2: "আমাদের বিদ্যালয় ঘুরে দেখুন"
      var(--font-bengali), 1.6rem, 700, white

  Subtext: "আমাদের সুযোগ-সুবিধা সরেজমিনে পরিদর্শন করতে আজই যোগাযোগ করুন"
           15px, rgba white 0.80, mt-2, mb-28px

  Two buttons (gap 12px):
    "পরিদর্শনের আবেদন করুন" | href="contact.html"
      bg var(--white), color var(--primary), border-radius var(--radius-sm)
      padding 12px 28px, 14px, 600, icon bi-calendar-check me-2
      hover: bg var(--primary-subtle)

    "ভর্তি তথ্য দেখুন" | href="admission.html"
      bg transparent, color white
      border: 2px solid rgba(255,255,255,0.6)
      border-radius var(--radius-sm), padding 12px 28px, 14px, 500
      icon bi-info-circle me-2
      hover: bg rgba(255,255,255,0.1), border-color white

═══════════════════════════════════════════════════════════
SECTION 5 — INFRASTRUCTURE DETAILS
═══════════════════════════════════════════════════════════

Background: var(--white)
Padding: 80px 0

Section header:
  Bengali h2: "অবকাঠামো তথ্য"
  English: "Infrastructure Details"

Two-column layout (col-lg-6 each):

LEFT — Infrastructure Table (.infra-table):
  Styled table (no Bootstrap table class — custom):
  width: 100%
  border-collapse: separate; border-spacing: 0

  Each row (.infra-row):
    display: flex; align-items: center
    padding: 14px 0
    border-bottom: 1px solid var(--border-color)
    (last-child: no border)

    Left cell (label):
      flex: 0 0 200px
      font-family: var(--font-bengali)
      font-size: 14px
      font-weight: 600
      color: var(--text-primary)
      display: flex; align-items: center; gap: 10px
      icon: 16px, color var(--primary)

    Right cell (value):
      flex: 1
      font-size: 14px
      color: var(--text-secondary)
      text-align: right

  Data rows:
    bi-buildings      | "মোট ভবন সংখ্যা"         | ৩টি একাডেমিক ভবন
    bi-door-open      | "মোট কক্ষ সংখ্যা"          | ৬৫টি (শ্রেণিকক্ষ + অফিস)
    bi-people         | "মোট ধারণক্ষমতা"           | ১,৫০০ শিক্ষার্থী
    bi-lightning      | "বিদ্যুৎ ব্যাকআপ"          | সম্পূর্ণ জেনারেটর সুবিধা
    bi-wifi           | "ইন্টারনেট সংযোগ"          | ১০০ Mbps ফাইবার অপটিক
    bi-droplet        | "বিশুদ্ধ পানি সরবরাহ"      | ফিল্টার + আর্সেনিকমুক্ত
    bi-camera         | "নিরাপত্তা ক্যামেরা"        | ৩২টি CCTV ক্যামেরা
    bi-ev-station     | "যানবাহন পার্কিং"           | শিক্ষক ও অভিভাবকদের জন্য

RIGHT — Building Map Diagram (.building-diagram):
  background: var(--gray-50)
  border: 1px solid var(--border-color)
  border-radius: var(--radius-lg)
  padding: 28px
  height: 100%
  min-height: 360px

  Title: "বিদ্যালয় ভবন বিন্যাস" (var(--font-bengali), 15px, 600, var(--text-primary), mb-16px)

  Floor plan legend boxes (CSS grid, 2×4):
    Each .floor-box:
      background: var(--primary-subtle)
      border: 2px solid var(--primary-border)
      border-radius: var(--radius-md)
      padding: 12px
      text-align: center
      font-family: var(--font-bengali)
      font-size: 12px
      font-weight: 600
      color: var(--primary)

      Icon above text (18px, var(--primary))

    8 floor boxes:
      bi-door-closed  | "ভবন-১ (প্রাথমিক)"
      bi-door-closed  | "ভবন-২ (মাধ্যমিক)"
      bi-door-closed  | "ভবন-৩ (প্রশাসন)"
      bi-book         | "গ্রন্থাগার ভবন"
      bi-eyedropper   | "বিজ্ঞানাগার ব্লক"
      bi-pc-display   | "কম্পিউটার ব্লক"
      bi-dribbble     | "খেলার মাঠ"
      bi-camera-video | "অডিটোরিয়াম"

═══════════════════════════════════════════════════════════
SECTION 6 — SAFETY & WELFARE
═══════════════════════════════════════════════════════════

Background: var(--gray-50)
Padding: 80px 0

Section header:
  Bengali h2: "নিরাপত্তা ও কল্যাণ"
  English: "Safety & Student Welfare"

4 cards (col-lg-3, col-sm-6) — .welfare-card:
  background: var(--white)
  border: 1px solid var(--border-color)
  border-top: 4px solid [category color]
  border-radius: var(--radius-md)
  padding: 28px 24px
  box-shadow: var(--shadow-sm)
  transition: var(--transition)
  hover: translateY(-3px), box-shadow var(--shadow-md)
  animate-fade-up

  Icon box (52px, bg [category-light], border-radius var(--radius-sm), mb-16px):
    icon 22px, [category color]

  Title (h3): var(--font-bengali), 16px, 700, var(--text-primary), mb-10px
  Description: 13.5px, var(--text-secondary), line-height 1.8

  Feature list (mt-16px, list-style none, p-0):
    Each item: bi-check-circle-fill (12px, var(--success)) me-2 + text
    font-size 13px, var(--text-secondary), mb-6px

Data (4 cards):

Card 1 — border-top var(--accent):
  Icon bg var(--accent-light), icon bi-shield-check-fill, color var(--accent)
  Title: "নিরাপত্তা ব্যবস্থা"
  Desc: "শিক্ষার্থীদের সর্বোচ্চ নিরাপত্তা নিশ্চিত করতে ২৪/৭ নিরাপত্তা প্রহরা ও আধুনিক নজরদারি ব্যবস্থা চালু রয়েছে।"
  Features: ৩২টি CCTV ক্যামেরা | ২৪ ঘণ্টা নিরাপত্তা প্রহরী | বায়োমেট্রিক প্রবেশ নিয়ন্ত্রণ | অগ্নিনির্বাপক যন্ত্র

Card 2 — border-top var(--success):
  Icon bg var(--success-light), icon bi-heart-pulse-fill, color var(--success)
  Title: "স্বাস্থ্যসেবা"
  Desc: "বিদ্যালয় চলাকালীন যেকোনো স্বাস্থ্য সমস্যায় তাৎক্ষণিক চিকিৎসাসেবা প্রদানের জন্য প্রশিক্ষিত মেডিকেল টিম সর্বদা প্রস্তুত।"
  Features: প্রশিক্ষিত নার্স | প্রাথমিক ওষুধ সরবরাহ | নিয়মিত স্বাস্থ্য পরীক্ষা | হাসপাতাল রেফারেল সেবা

Card 3 — border-top var(--primary):
  Icon bg var(--primary-subtle), icon bi-gender-ambiguous, color var(--primary)
  Title: "লিঙ্গ সমতা"
  Desc: "ছাত্র-ছাত্রী উভয়ের জন্য সমান সুযোগ ও পৃথক সুবিধা নিশ্চিত করা হয়েছে। মেয়েদের নিরাপত্তা ও সুরক্ষায় বিশেষ মনোযোগ দেওয়া হয়।"
  Features: পৃথক ওয়াশরুম | মেয়েদের আলাদা কমনরুম | মহিলা নিরাপত্তাকর্মী | অ্যান্টি-বুলিং নীতি

Card 4 — border-top var(--warning):
  Icon bg var(--warning-light), icon bi-people-fill, color var(--warning)
  Title: "কাউন্সেলিং সেবা"
  Desc: "শিক্ষার্থীদের মানসিক স্বাস্থ্য ও পড়াশোনার চাপ মোকাবেলায় অভিজ্ঞ কাউন্সেলর দ্বারা নিয়মিত পরামর্শ সেবা প্রদান করা হয়।"
  Features: মানসিক স্বাস্থ্য পরামর্শ | ক্যারিয়ার গাইডেন্স | অভিভাবক সমন্বয় | গোপনীয়তা নিশ্চিত

═══════════════════════════════════════════════════════════
SECTION 7 — CTA STRIP
═══════════════════════════════════════════════════════════

Background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)
Padding: 56px 0

Content (centered, white, text-align center):
  Icon: bi-building-fill-check (48px, var(--warning), mb-16px)
  h2: "আমাদের বিদ্যালয়ে আপনার সন্তানকে ভর্তি করুন"
      var(--font-bengali), 1.6rem, 700, white
  Subtext: "উন্নত শিক্ষা পরিবেশ ও আধুনিক সুযোগ-সুবিধায় গড়ে উঠুক আগামীর প্রজন্ম"
           15px, rgba white 0.80, mt-8px, mb-28px

  Two buttons (gap 12px):
    "ভর্তির আবেদন করুন" | href="admission.html"
      bg var(--accent), white, border-radius var(--radius-sm)
      padding 12px 28px, 14px, 600, icon bi-pencil-square me-2
      hover: bg var(--accent-dark)

    "যোগাযোগ করুন" | href="contact.html"
      bg transparent, white
      border: 2px solid rgba(255,255,255,0.6), border-radius var(--radius-sm)
      padding 12px 28px, 14px, 500, icon bi-telephone me-2
      hover: bg rgba(255,255,255,0.1), border-color white

═══════════════════════════════════════════════════════════
COMPONENT: FOOTER
═══════════════════════════════════════════════════════════

FOOTER TOP STRIP (.footer-top-strip):
  bg var(--primary) | padding 20px 0
  Left: "🎓 ২০২৫ সালের ভর্তি কার্যক্রম চলছে" (white, 600)
  Right: "ভর্তির জন্য আবেদন করুন" button (bg var(--accent), white, href="admission.html")

FOOTER MAIN (.footer-main):
  bg var(--primary-dark) | color rgba(255,255,255,0.80) | padding 56px 0 32px
  font-size 13.5px | line-height 1.9

  4-column grid (col-xl-3, col-lg-3, col-md-6):

  Col 1 — About:
    Logo (40px) + "আদর্শ উচ্চ বিদ্যালয় ও কলেজ" (white, 16px, 700)
    "Adarsha High School & College" (rgba white 0.6, 12px)
    <hr> rgba white 0.15
    Short desc (2-3 lines, rgba white 0.75): "১৯৬৫ সাল থেকে মানসম্পন্ন শিক্ষা প্রদান করে আসছে আদর্শ উচ্চ বিদ্যালয়। আমাদের লক্ষ্য জ্ঞান, নৈতিকতা ও দেশপ্রেমে সমৃদ্ধ নাগরিক গড়ে তোলা।"
    EIIN badge: "EIIN: 123456" (rgba white 0.1 bg, 12px, border-radius 4px, padding 4px 10px)
    Social icons (32px circles, rgba white 0.1 bg, hover var(--accent)):
      bi-facebook | bi-youtube | bi-twitter-x

  Col 2 — দ্রুত লিঙ্ক:
    "দ্রুত লিঙ্ক" heading (white, 14px, 600, mb-16px)
    Links (rgba white 0.75, hover white, bi-chevron-right prefix 10px):
      হোম → index.html | আমাদের বিদ্যালয় → about.html
      প্রধান শিক্ষকের বাণী → head-teacher.html
      শিক্ষক-কর্মচারী → teachers.html | পরিচালনা কমিটি → committee.html
      ভর্তি তথ্য → admission.html | নোটিশ বোর্ড → notices.html

  Col 3 — একাডেমিক লিঙ্ক:
    "একাডেমিক" heading (white, 14px, 600, mb-16px)
    Links:
      একাডেমিক ক্যালেন্ডার → academic.html#calendar
      শ্রেণি রুটিন → academic.html#routine
      পরীক্ষার তথ্য → academic.html#exam
      ফলাফল → results.html | ডাউনলোড সেন্টার → downloads.html
      গ্যালারি → gallery.html | যোগাযোগ → contact.html

  Col 4 — যোগাযোগ:
    "যোগাযোগ" heading (white, 14px, 600, mb-16px)
    Items (icon + text, rgba white 0.75, gap 10px each row):
      bi-geo-alt-fill: "আদর্শ রোড, মিরপুর, ঢাকা-১২১৬"
      bi-telephone-fill: "+880 2-XXXXXXXX"
      bi-envelope-fill: "info@adarshaschool.edu.bd"
      bi-clock-fill: "সোম–শুক্র: সকাল ৯টা – বিকেল ৫টা"
    bi-map + "গুগল ম্যাপে দেখুন" → (var(--accent), hover underline)

FOOTER BOTTOM (.footer-bottom):
  bg var(--gray-900) | padding 16px 0 | color rgba white 0.5 | font-size 12.5px
  Left: "© ২০২৫ আদর্শ উচ্চ বিদ্যালয় ও কলেজ। সর্বস্বত্ব সংরক্ষিত।"
  Right: "গোপনীয়তা নীতি" | "সাইটম্যাপ" | "GRS" (hover white)

═══════════════════════════════════════════════════════════
SCROLL ANIMATIONS
═══════════════════════════════════════════════════════════

CSS (in <style> block):
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
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.animate-fade-up').forEach(el => fadeObserver.observe(el));

// Staggered delay for card grids
document.querySelectorAll('.welfare-card, .facility-stat-card')
  .forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 0.1}s`; });

// Facility cards stagger (pairs of 2)
document.querySelectorAll('.facility-card')
  .forEach((el, i) => { el.style.transitionDelay = `${(i % 2) * 0.12}s`; });

═══════════════════════════════════════════════════════════
ACCESSIBILITY
═══════════════════════════════════════════════════════════

- Single <h1> on page hero only
- Heading hierarchy: h1 → h2 (sections) → h3 (card titles)
- aria-label on icon-only buttons (search, social icons)
- aria-current="page" on "সুযোগ-সুবিধা" nav link
- All decorative icons: aria-hidden="true"
- Focus-visible ring: outline: 2px solid var(--primary); outline-offset: 2px
- img alt attributes: descriptive Bengali text
- Sufficient color contrast on all text vs background combinations

═══════════════════════════════════════════════════════════
OUTPUT RULES
═══════════════════════════════════════════════════════════

- Deliver 100% complete facilities.html — zero placeholder comments
- Every section fully coded with real Bengali + English content as specified above
- All page-specific CSS in a <style> block inside <head>
- All JS in a <script> block just before </body>
- NO hardcoded hex/rgb/hsl colors — only CSS variables
- NO jQuery, React, Tailwind, or Vue
- File must render standalone in any browser without external dependencies
  other than the listed CDNs
- Bengali text: always font-family: var(--font-bengali)
- Section background alternation: gray-50 → white → primary → white → gray-50 → primary-gradient