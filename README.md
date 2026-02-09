# VECTRIX - UX/UI Studio Portfolio

A high-end, visually striking portfolio website for a UX/UI studio specializing in critical systems, defense, infrastructure, and enterprise platforms.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Content**: MDX for case studies
- **Email**: Resend
- **Forms**: React Hook Form + Zod

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Add your Resend API key to .env.local
# RESEND_API_KEY=re_xxxxxxxxxx
# CONTACT_EMAIL=hello@yourdomain.com

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes (contact form)
│   ├── contact/           # Contact page
│   ├── studio/            # Studio page
│   ├── work/              # Work index and case studies
│   └── page.tsx           # Homepage
├── components/
│   ├── case-study/        # Case study components
│   ├── layout/            # Header, Footer, Container
│   ├── sections/          # Hero, CTA, etc.
│   └── ui/                # Button, Badge, etc.
├── content/
│   └── cases/             # MDX case study files
├── lib/                   # Utilities and configuration
├── public/                # Static assets
└── styles/                # Global CSS
```

## Design System

### Colors

- **Background**: `#0B0E11`
- **Surface**: `#12161B`
- **Primary**: `#EA3E3E` (red)
- **Text**: `#FFFFFF`
- **Muted**: `#8B9AAB`
- **Accent**: `#3B82F6` (blue)

### Typography

- **Display**: Bebas Neue (headlines)
- **Body**: Inter (text)
- **Mono**: JetBrains Mono (technical details)

## Adding Case Studies

Create a new MDX file in `content/cases/`:

```mdx
---
title: "Project Title"
slug: "project-slug"
client: "Client Name"
industry: "Industry"
year: 2024
duration: "12 months"
role:
  - "UX Design"
  - "UI Design"
thumbnail: "/images/case-thumb.jpg"
featured: true
summary: "Brief project summary."
impact:
  - "Key metric 1"
  - "Key metric 2"
---

## Context

Project context and background...

## Challenge

The problem to solve...
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | API key from Resend for sending emails |
| `CONTACT_EMAIL` | Email address to receive contact form submissions |

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Performance

Optimized for Lighthouse scores >90:

- Next.js Image optimization
- Font subsetting
- Component-level code splitting
- Edge-optimized OG images

## License

Private - All rights reserved
