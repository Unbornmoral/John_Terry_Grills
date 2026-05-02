# GrillBlaze BBQ MVP

Authentic Texas-style BBQ website built with Next.js 15 (App Router), Tailwind CSS 4, and Framer Motion.

## Features (Phase 1 MVP)
- [x] Static Home Page (Hero, Features, Story Preview)
- [x] Interactive Menu (Category filtering, Add to Cart)
- [x] Online Ordering Flow (Pickup selection, Cart management)
- [x] Table Reservation System (Client-side form)
- [x] Brand Identity (smoky color palette, rugged typography)
- [x] Location & Hours Page

## Tech Stack
- **Framework:** Next.js 15
- **Styling:** Tailwind CSS 4
- **Fonts:** Playfair Display, Inter, Bebas Neue
- **Database/Auth:** Supabase (Ready for integration)
- **Payments:** Stripe (Placeholder in checkout)

## Getting Started
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Open http://localhost:3000

## Environment Variables
Copy `.env.local.example` to `.env.local` and fill in:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `STRIPE_SECRET_KEY`
- `RESEND_API_KEY`
