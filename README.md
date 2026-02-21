# Kicks – Premium Footwear Ecommerce Platform

A modern, high-performance ecommerce platform for premium footwear built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. Features responsive design, advanced carousel components, API integration with error handling, and performance optimizations.

---

## 🎯 Overview

**Kicks** is a full-featured ecommerce storefront showcasing:

- Responsive hero section with image selector
- Dynamic categories carousel (Embla-based)
- Product listings with filtering
- Customer reviews section
- Professional footer with newsletter signup
- Mobile-first responsive design

The platform prioritizes performance with ISR (Incremental Static Regeneration), on-demand revalidation, and robust error handling with fallback states.

---

## ✨ Features

### Core Features

- **Heroes Banner** – Full-width hero with thumbnail image selector (responsive breakpoints)
- **Categories Carousel** – Embla-powered slider showing 2 cards per view (mobile stacked, desktop side-by-side)
- **Product Section** – Curated product listings
- **Reviews** – Customer testimonial carousel
- **Newsletter Signup** – Email capture section in footer
- **Responsive Navbar** – Mobile menu with hamburger, logo (clickable, routes to home), search, and cart icon
- **Professional Footer** – Links grid, social icons, background logo with full-width layout

### Technical Excellence

- ✅ **Error/Empty/Loading States** – Graceful fallbacks, empty state messages, error indicators
- ✅ **API Error Handling** – Fallback to cached/fake data if API fails
- ✅ **ISR & Caching** – Automatic revalidation every hour + on-demand revalidation API
- ✅ **TypeScript** – Strict typing throughout
- ✅ **Accessible Components** – shadcn/ui components with ARIA labels
- ✅ **SEO Optimized** – Next.js metadata, image optimization, semantic HTML

---

## 🛠 Tech Stack

| Layer                  | Technology                                             |
| ---------------------- | ------------------------------------------------------ |
| **Framework**          | Next.js 16 (App Router, Server Components, API Routes) |
| **Language**           | TypeScript 5+                                          |
| **Styling**            | Tailwind CSS 3 + PostCSS                               |
| **UI Components**      | shadcn/ui (Button, Input, Accordion, etc.)             |
| **Carousels**          | Embla Carousel (embed-carousel-react)                  |
| **Icons**              | Lucide React                                           |
| **Image Optimization** | Next.js Image component                                |
| **Data Fetching**      | Native fetch with ISR tags & revalidation              |
| **Package Manager**    | pnpm                                                   |
| **Runtime**            | Node.js 18+                                            |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and **pnpm** (or npm/yarn)
- **API_URL** environment variable pointing to your backend API

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repo-url>
   cd zavisoft-task
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   Create `.env.local`:

   ```bash
   API_URL=https://api.example.com
   REVALIDATE_SECRET=your-secret-key-here
   ```

4. **Start the development server:**

   ```bash
   pnpm dev
   ```

5. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📦 Project Structure

```
src/
├── app/                           # Next.js App Router
│   ├── page.tsx                   # Home page
│   ├── layout.tsx                 # Root layout
│
├── components/
│   ├── Layout/                    # Global layout components
│   │   ├── navbar1.tsx            # Navigation bar
│   │   └── Footer.tsx             # Footer section
│   ├── bannar/                    # Banner sections
│   │   ├── DoItRight.tsx          # Call-to-action banner
│   │   └── HeroImageSelector.tsx  # Hero with image selector
│   ├── categories/                # Category components
│   │   ├── Categories.tsx         # Category carousel wrapper
│   │   ├── CategoriesCard.tsx     # Individual category card
│   │   └── EmblaWrapper.tsx       # Embla carousel implementation
│   ├── products/                  # Product components
│   │   ├── ProductSection.tsx     # Product listing section
│   │   └── ProductCard.tsx        # Individual product card
│   ├── review/                    # Review components
│   │   └── Review.tsx             # Reviews carousel
│   └── ui/                        # shadcn/ui components
├── services/                      # API service layer
│   ├── categories.service.ts      # Categories API
│   └── product.service.ts         # Products API
├── Action/                        # Server actions
│   ├── categories.action.ts       # Categories data fetching
│   └── products.action.ts         # Products data fetching
├── lib/
│   └── utils.ts                   # Utility functions
└── public/                        # Static assets
    ├── images/
    └── categories/
```

---

## 🔄 API Integration & Revalidation

### Fetch with ISR

All API calls use Next.js `fetch` with automatic revalidation:

```typescript
fetch(url, {
  next: {
    tags: ["categories"],
    revalidate: 3600, // revalidate every hour
  },
});
```

### Error Handling

- API failures → fallback to cached/fake data
- Empty responses → display "No categories available" message
- Network errors → show error badge and maintain fallback UI

---

## 📱 Responsive Design

| Device  | Breakpoint     | Layout                                    |
| ------- | -------------- | ----------------------------------------- |
| Mobile  | < 640px        | Full-width, single column, hamburger menu |
| Tablet  | 640px – 1024px | 2-column grids, optimized spacing         |
| Desktop | > 1024px       | Multi-column, full-featured layouts       |

**Key Features:**

- Mobile-first approach with Tailwind breakpoints (`sm`, `md`, `lg`)
- Sticky navbar with mobile menu
- Touch-friendly buttons and interactive elements
- Optimized images for all device sizes

---

## ⚡ Performance Optimizations

- **Next.js Image Component** – Automatic optimization, lazy loading
- **ISR (Incremental Static Regeneration)** – Pages cached for 1 hour, revalidated in background
- **On-Demand Revalidation** – Manual cache bust via API endpoint
- **Code Splitting** – Server components reduce client JS bundle
- **Tailwind CSS** – Purges unused styles in production

---

## 📋 Environment Variables

Create `.env.local`:

````bash
# Required
API_URL=https://api.escuelajs.co/api/v1



---

## 🚢 Build & Deployment

### Build for production:

```bash
pnpm build
````

### Start production server:

```bash
pnpm start
```

---

## 📝 Notes

- **API Response Normalization:** Service layer handles various API response shapes (`.data`, `.results`, `.items`, `.categories`)
- **Fallback Categories:** If API fails, built-in fallback displays cached categories
- **Image Optimization:** All images use Next.js `<Image>` component for automatic optimization
- **TypeScript Strict Mode:** Full type safety across the project
- **No GraphQL:** Uses REST API with native `fetch` for simplicity
- **Server-Side Rendering:** Home page rendered server-side for SEO; client components handle interactivity
- **Carousel Library:** Embla chosen for lightweight, headless carousel control with custom UI

---

## 🔗 Live URL

**Coming Soon** – Pending deployment to Vercel or your hosting platform.

_(Example structure once deployed: `https://zavisoft-task-eight.vercel.app/`)_

---

## 📄 License

MIT License – Free to use and modify.

---

---

**Built with ❤️ by Zavisoft**
