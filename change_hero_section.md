Redesign ONLY the hero section (#hero) of index.html.
Keep all other sections untouched.

═══════════════════════════════════════════
HERO SECTION — FULL BACKGROUND IMAGE SLIDER
═══════════════════════════════════════════

Replace the current two-column white hero with a
full-width, full-height background image slider.

──────────────────────────────────────────
STRUCTURE
──────────────────────────────────────────

<section id="hero">
  <div class="hero-slider">
    <div class="hero-slide active" style="background-image: url('assets/images/hero-1.jpg')">...</div>
    <div class="hero-slide" style="background-image: url('assets/images/hero-2.jpg')">...</div>
    <div class="hero-slide" style="background-image: url('assets/images/hero-3.jpg')">...</div>
  </div>
  <div class="hero-overlay"></div>
  <div class="hero-content container">...</div>
  <div class="hero-controls">...</div>
  <div class="hero-dots">...</div>
</section>

──────────────────────────────────────────
DIMENSIONS
──────────────────────────────────────────

height: 92vh
min-height: 580px
position: relative
overflow: hidden

──────────────────────────────────────────
SLIDES (3 slides)
──────────────────────────────────────────

Each slide (.hero-slide):
  position: absolute
  inset: 0
  background-size: cover
  background-position: center center
  background-repeat: no-repeat
  opacity: 0
  transition: opacity 1.2s ease-in-out
  transform: scale(1)
  animation: none

  Active slide (.hero-slide.active):
    opacity: 1
    Ken Burns effect:
      animation: kenburns 8s ease-in-out forwards
      @keyframes kenburns {
        from { transform: scale(1.08); }
        to   { transform: scale(1.00); }
      }

Slide image placeholders (use real school photo if available,
otherwise use these descriptive placeholders):
  Slide 1: assets/images/hero-1.jpg  ← school building exterior
  Slide 2: assets/images/hero-2.jpg  ← students in classroom
  Slide 3: assets/images/hero-3.jpg  ← school event / annual day

──────────────────────────────────────────
DARK OVERLAY (.hero-overlay)
──────────────────────────────────────────

position: absolute
inset: 0
z-index: 1

Use a directional gradient overlay (NOT flat black):
background: linear-gradient(
  105deg,
  rgba(10, 30, 60, 0.82) 0%,
  rgba(10, 30, 60, 0.65) 45%,
  rgba(10, 30, 60, 0.25) 100%
);

This makes text on the left readable while the right
side shows more of the photo — similar to the
Bangladesh 2.0 banner style in the reference image.

──────────────────────────────────────────
HERO CONTENT (.hero-content)
──────────────────────────────────────────

position: relative
z-index: 2
height: 100%
display: flex
align-items: center
padding-top: 40px

Content block: max-width 620px (left-aligned, NOT centered)

1. TOP BADGE:
   display: inline-flex
   align-items: center
   gap: 8px
   background: rgba(255,255,255,0.12)
   border: 1px solid rgba(255,255,255,0.30)
   backdrop-filter: blur(4px)
   border-radius: 50px
   padding: 6px 16px
   font-size: 12px
   font-weight: 500
   color: rgba(255,255,255,0.90)
   margin-bottom: 20px
   icon: <i class="bi bi-patch-check-fill"></i> (color: #fbbf24)
   text: "সরকার অনুমোদিত শিক্ষা প্রতিষ্ঠান"

2. SCHOOL NAME (h1):
   font-family: var(--font-bengali)
   font-size: clamp(2rem, 5vw, 3.2rem)
   font-weight: 700
   color: #ffffff
   line-height: 1.2
   text-shadow: 0 2px 12px rgba(0,0,0,0.3)
   margin-bottom: 8px
   text: "আদর্শ উচ্চ বিদ্যালয় ও কলেজ"

3. ENGLISH NAME:
   font-size: clamp(0.95rem, 2vw, 1.1rem)
   font-weight: 400
   color: rgba(255,255,255,0.80)
   margin-bottom: 16px
   text: "Adarsha High School & College, Dhaka"

4. MOTTO:
   font-family: var(--font-bengali)
   font-size: 15px
   font-style: italic
   color: #fbbf24  ← warm gold, visible on dark bg
   border-left: 3px solid #fbbf24
   padding-left: 12px
   margin-bottom: 24px
   text: "শিক্ষাই জাতির মেরুদণ্ড"

5. INFO PILLS ROW (flex, gap: 8px, flex-wrap: wrap, margin-bottom: 32px):
   Each pill:
     background: rgba(255,255,255,0.12)
     border: 1px solid rgba(255,255,255,0.20)
     border-radius: 50px
     padding: 5px 14px
     font-size: 12px
     color: rgba(255,255,255,0.85)
   Pills:
     "📅 প্রতিষ্ঠা: ১৯৬৫"
     "🏫 EIIN: ১২৩৪৫৬"
     "📍 ঢাকা, বাংলাদেশ"

6. CTA BUTTONS (flex, gap: 12px, flex-wrap: wrap):
   Button 1 — Primary:
     background: var(--primary)
     color: white
     border: none
     padding: 13px 30px
     border-radius: var(--radius-sm)
     font-size: 15px
     font-weight: 600
     font-family: var(--font-bengali)
     icon: <i class="bi bi-pencil-square me-2"></i>
     text: "ভর্তি আবেদন করুন"
     hover: background var(--primary-hover), translateY(-2px)

   Button 2 — Ghost (white outline):
     background: rgba(255,255,255,0.10)
     color: white
     border: 2px solid rgba(255,255,255,0.60)
     padding: 11px 28px
     border-radius: var(--radius-sm)
     font-size: 15px
     font-weight: 600
     font-family: var(--font-bengali)
     icon: <i class="bi bi-telephone me-2"></i>
     text: "যোগাযোগ করুন"
     hover: background rgba(255,255,255,0.20), border-color white

7. TRUST STATS ROW (margin-top: 40px):
   Flex row, gap: 28px, align-items: center
   Dividers: 1px solid rgba(255,255,255,0.20), height: 36px

   Stat 1: "৯৮%" (font-size: 22px, font-weight: 700, color: #fbbf24)
            "পাসের হার" (font-size: 11px, color: rgba white 0.70)

   Stat 2: "১,২০০+" (same gold number style)
            "শিক্ষার্থী"

   Stat 3: "৫৮ বছর" (same)
            "অভিজ্ঞতা"

──────────────────────────────────────────
SLIDER CONTROLS
──────────────────────────────────────────

PREV / NEXT ARROWS (.hero-controls):
  position: absolute
  top: 50%
  transform: translateY(-50%)
  z-index: 3

  Each button:
    width: 44px, height: 44px
    background: rgba(255,255,255,0.12)
    border: 1px solid rgba(255,255,255,0.25)
    border-radius: 50%
    color: white
    font-size: 18px
    cursor: pointer
    transition: all 0.2s ease
    hover: background rgba(255,255,255,0.25)
    backdrop-filter: blur(4px)

  Prev: left: 20px  | icon: bi-chevron-left
  Next: right: 20px | icon: bi-chevron-right

  Hide on mobile (xs): d-none d-md-flex

DOT INDICATORS (.hero-dots):
  position: absolute
  bottom: 28px
  left: 50%
  transform: translateX(-50%)
  z-index: 3
  display: flex
  gap: 8px

  Each dot:
    width: 8px, height: 8px
    border-radius: 50%
    background: rgba(255,255,255,0.40)
    cursor: pointer
    transition: all 0.3s ease

  Active dot:
    width: 24px  ← elongated pill
    border-radius: 4px
    background: #ffffff

SLIDE COUNTER (optional, top-right of hero):
  position: absolute
  top: 24px, right: 24px
  z-index: 3
  font-size: 13px
  color: rgba(255,255,255,0.70)
  font-weight: 500
  format: "01 / 03"

──────────────────────────────────────────
PROGRESS BAR
──────────────────────────────────────────

Thin 3px bar at very bottom of hero:
  position: absolute
  bottom: 0, left: 0
  height: 3px
  z-index: 3
  background: var(--primary)
  animation: slideProgress 5s linear infinite
  reset on each slide change

@keyframes slideProgress {
  from { width: 0%; }
  to   { width: 100%; }
}

──────────────────────────────────────────
JAVASCRIPT (add to app.js)
──────────────────────────────────────────

const heroSlider = {
  slides: document.querySelectorAll('.hero-slide'),
  dots: document.querySelectorAll('.hero-dot'),
  counter: document.querySelector('.hero-counter'),
  progress: document.querySelector('.hero-progress'),
  current: 0,
  total: 0,
  timer: null,
  interval: 5000,

  init() {
    this.total = this.slides.length;
    this.bindControls();
    this.startAuto();
  },

  goTo(index) {
    this.slides[this.current].classList.remove('active');
    this.dots[this.current]?.classList.remove('active');
    this.current = (index + this.total) % this.total;
    this.slides[this.current].classList.add('active');
    this.dots[this.current]?.classList.add('active');
    if (this.counter) {
      const n = String(this.current + 1).padStart(2, '0');
      const t = String(this.total).padStart(2, '0');
      this.counter.textContent = `${n} / ${t}`;
    }
    if (this.progress) {
      this.progress.style.animation = 'none';
      this.progress.offsetHeight; // reflow
      this.progress.style.animation = '';
    }
  },

  next() { this.goTo(this.current + 1); },
  prev() { this.goTo(this.current - 1); },

  startAuto() {
    this.timer = setInterval(() => this.next(), this.interval);
  },

  pauseAuto() { clearInterval(this.timer); },

  bindControls() {
    document.querySelector('.hero-next')
      ?.addEventListener('click', () => { this.pauseAuto(); this.next(); this.startAuto(); });
    document.querySelector('.hero-prev')
      ?.addEventListener('click', () => { this.pauseAuto(); this.prev(); this.startAuto(); });
    this.dots.forEach((dot, i) =>
      dot.addEventListener('click', () => { this.pauseAuto(); this.goTo(i); this.startAuto(); })
    );
    // Pause on hover
    document.querySelector('#hero')
      ?.addEventListener('mouseenter', () => this.pauseAuto());
    document.querySelector('#hero')
      ?.addEventListener('mouseleave', () => this.startAuto());
  }
};

if (document.querySelector('.hero-slider')) heroSlider.init();

──────────────────────────────────────────
RESPONSIVE
──────────────────────────────────────────

Mobile (< 768px):
  height: 100svh (or 100vh fallback)
  min-height: 520px
  .hero-content: padding-top: 20px
  h1 font-size: 1.8rem
  Trust stats row: wrap, gap: 16px, smaller font
  Overlay: slightly darker (left side 0.88 opacity)
    so text is always readable on any photo

──────────────────────────────────────────
IMPORTANT NOTES
──────────────────────────────────────────

1. Do NOT touch any section below #hero.
2. Do NOT change navbar or footer.
3. Only modify: the #hero HTML, its CSS block in style.css,
   and add heroSlider to app.js.
4. The 3 slide images are placeholders —
   use background-color fallbacks if images missing:
   Slide 1 fallback: hsl(214, 72%, 25%)
   Slide 2 fallback: hsl(214, 72%, 20%)
   Slide 3 fallback: hsl(214, 72%, 28%)
5. Ensure Ken Burns animation only plays on the ACTIVE
   slide (re-trigger by toggling the .active class).