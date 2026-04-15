# IBV Technologies – Next.js Website

A fully structured, SEO-optimised Next.js 14 website for IBV Technologies built with:

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (8px grid system matching the design system)
- **Framer Motion** (scroll animations, parallax, page transitions)

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

---

## 📁 Project Structure

```
ibv-technologies/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (Navbar + Footer)
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles + design tokens
│   ├── about/
│   ├── careers/
│   ├── contact/
│   ├── insights/
│   │   ├── blogs/
│   │   └── case-studies/
│   ├── services/
│   │   ├── consulting-strategy/  ← Hub page (fully built)
│   │   │   ├── page.tsx
│   │   │   ├── ConsultingHubClient.tsx
│   │   │   └── business-consultation/  ← Individual page (fully built)
│   │   │       ├── page.tsx
│   │   │       └── BusinessConsultationClient.tsx
│   │   ├── digital-solutions/
│   │   ├── research-analysis/
│   │   └── content-growth/
│   └── industry/                 # 10 industry pages (stub)
│       ├── retail-ecommerce/
│       ├── healthcare-wellness/
│       └── ...
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky nav with mega-dropdowns + mobile menu
│   │   └── Footer.tsx            # Full footer with all link columns
│   ├── sections/                 # Homepage sections
│   │   ├── HeroSection.tsx       # Parallax hero with rotating headline
│   │   ├── AboutSection.tsx      # About / services list
│   │   ├── ServicesSection.tsx   # Marquee + parallax scroller + why-choose-us
│   │   ├── BlogSection.tsx       # Blog cards
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx        # Accordion FAQ
│   │   └── ContactSection.tsx    # Full contact form
│   └── ui/
│       ├── Button.tsx            # Button component (all variants)
│       ├── AnimateOnScroll.tsx   # Framer Motion scroll reveal + stagger
│       └── PageShell.tsx         # Reusable page hero shell
│
├── lib/                          # Utilities (add as needed)
├── public/                       # Static assets
├── tailwind.config.js            # Design token configuration
├── next.config.js
└── tsconfig.json
```

---

## 🎨 Design System

### Colours

| Token | Hex | Usage |
|---|---|---|
| `rainbow-red` | `#E30A13` | Primary brand, CTAs |
| `blush-rose` | `#E54C73` | Accent |
| `ruby-red` | `#981727` | Secondary accent |
| `coral-wine` | `#680717` | Dark accent |
| `refresh-black` | `#111112` | Dark backgrounds |
| `graphite` | `#222234` | Carbon |
| `anchor-gray` | `#555556` | Body text |

### Typography

| Font | Usage |
|---|---|
| **Hanken Grotesk** | Headings, primary UI |
| **Instrument Sans** | Body, secondary |
| **DM Mono** | Code, technical |

### Grid System (8px base)

| Screen | Columns | Gutter | Margins |
|---|---|---|---|
| 1920px | 12 | 16px | 120px |
| 1440px | 12 | 16px | 48px |
| 720px | 8 | 8px | 32px |
| 375px | 4 | 8px | 16px |

---

## 🧩 Button Variants

```tsx
// Primary – Red filled (main CTAs)
<Button variant="primary">Contact Us</Button>

// Secondary – Red outline
<Button variant="secondary">Get In Touch</Button>

// Black filled
<Button variant="black">Read All Blogs</Button>

// Black outline
<Button variant="outline-black">Explore Service</Button>

// Text / Ghost
<Button variant="text">Get Started Now</Button>
```

---

## ✨ Animations

Animations use **Framer Motion** via the `AnimateOnScroll` and `StaggerContainer` wrappers:

```tsx
import { AnimateOnScroll, StaggerContainer, staggerItem } from '@/components/ui/AnimateOnScroll';

// Single element reveal
<AnimateOnScroll delay={0.1} direction="up">
  <h2>Your content</h2>
</AnimateOnScroll>

// Staggered children
<StaggerContainer staggerDelay={0.1}>
  {items.map(item => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.content}
    </motion.div>
  ))}
</StaggerContainer>
```

---

## 📄 Pages Status

| Page | Status |
|---|---|
| Homepage | ✅ Fully built |
| Consulting & Strategy (Hub) | ✅ Fully built |
| Business Consultation (Individual) | ✅ Fully built |
| All other pages | 🔲 Stub (ready to fill) |

---

## 🔧 Next Steps

1. **Add real images** – Replace placeholder divs in hero and card sections with `next/image`
2. **CMS integration** – Connect blogs and case studies to a headless CMS (Sanity, Contentful, etc.)
3. **Complete remaining pages** – Duplicate the hub/individual pattern for all services
4. **Add metadata** – Per-page SEO metadata is scaffolded, fill in descriptions
5. **Analytics** – Add Google Analytics or Plausible
6. **Form backend** – Connect the contact form to a backend (EmailJS, Resend, etc.)

---

## 🛠 Tech Stack Versions

- next: 14.2.3
- react: 18
- framer-motion: 11.1.9
- tailwindcss: 3.4.1
- typescript: 5
- lucide-react: 0.383.0
