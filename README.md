# dbenedict.com Website

A Next.js-based website with subdomain routing for personal and business content.

## Project Overview

This project serves two distinct sites using subdomain routing:
- **www.dbenedict.com** - Personal site (portfolio, blog, about)
- **biz.dbenedict.com** - Business site (services, products, booking)

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** TailwindCSS
- **Language:** TypeScript
- **Deployment:** Vercel
- **CMS:** Sanity (planned)
- **Payments:** Stripe (planned)

## Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the personal site.

### Testing Subdomains Locally

To test subdomain routing locally, you'll need to modify your hosts file:

**Windows:** `C:\Windows\System32\drivers\etc\hosts`
**Mac/Linux:** `/etc/hosts`

Add these lines:
```
127.0.0.1 localhost
127.0.0.1 biz.localhost
```

Then access:
- Personal site: `http://localhost:3000`
- Business site: `http://biz.localhost:3000`

## Project Structure

```
src/
├── app/
│   ├── personal/          # Personal site pages
│   │   ├── page.tsx       # Personal homepage
│   │   ├── layout.tsx     # Personal layout
│   │   ├── about/         # About page
│   │   ├── blog/          # Blog pages
│   │   └── contact/       # Contact page
│   ├── business/          # Business site pages
│   │   ├── page.tsx       # Business homepage
│   │   ├── layout.tsx     # Business layout
│   │   ├── services/      # Services page
│   │   ├── products/      # Products/e-commerce
│   │   ├── booking/       # Booking system
│   │   └── contact/       # Contact page
│   └── layout.tsx         # Root layout
├── middleware.ts          # Subdomain routing logic
└── components/            # Shared components
```

## Deployment

### Vercel Deployment

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Add custom domains in Vercel:
   - `www.dbenedict.com`
   - `biz.dbenedict.com`
4. Update GoDaddy DNS:
   - CNAME `www` → `cname.vercel-dns.com`
   - CNAME `biz` → `cname.vercel-dns.com`

### Environment Variables

Create `.env.local` for local development:
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add other environment variables as needed
```

## Roadmap

- [x] Phase 1: Project setup with subdomain routing
- [ ] Phase 2: Complete personal site pages
- [ ] Phase 3: Complete business site pages
- [ ] Phase 4: Integrate Sanity CMS for blog
- [ ] Phase 5: Add e-commerce with Stripe
- [ ] Phase 6: Implement booking system
- [ ] Phase 7: Add authentication
- [ ] Phase 8: Deploy to Vercel

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Platform](https://vercel.com)
- [TailwindCSS](https://tailwindcss.com)
