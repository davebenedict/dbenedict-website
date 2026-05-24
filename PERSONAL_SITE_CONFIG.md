# Personal Site Configuration & Features

## Project Overview
- **Repository**: dbenedict-website (Next.js 14+ with App Router)
- **Two separate sites** with subdomain routing:
  - **www.dbenedict.com** - Personal site (routes in `/personal`)
  - **biz.dbenedict.com** - Business site (routes in `/business`)
- **Deployment**: Vercel
- **Local dev**: http://localhost:3000

## Current Personal Site Features

### Theme & Design
- **Matrix-themed cyberpunk aesthetic** with cyan/purple color scheme
- **MatrixBackground component** (`src/components/MatrixBackground.tsx`) with 3D effects:
  - Dramatic wave/curve effects with multiple frequencies
  - Cyan-to-purple animated gradient across characters
  - 40-50% opacity for visibility
  - 3D perspective with depth, rotation, and dynamic scaling
- **Fonts**: Roboto (main) and Roboto Mono (monospace/code)
- **GlowCard components** for content cards with colored glows (cyan, purple, blue)

### Voice Features
- **ReadAloud component** (`src/components/ReadAloud.tsx`) - Text-to-speech on hover
- **Voice settings**: 80s British male computer assistant
  - Rate: 0.85 (slower, deliberate)
  - Pitch: 0.7 (lower, robotic)
  - Prefers UK male voices (Google UK English Male, Microsoft George/Ryan, Daniel, Oliver)
- **VoiceToggle** (`src/components/VoiceToggle.tsx`) - Global toggle in navigation (default off)
- **VoiceProvider context** (`src/contexts/VoiceContext.tsx`) - Manages voice state across pages

### Pages Structure
Navigation order: **Home → About → Portfolio → Blog → Interests → Contact**

#### Interests Page (`/personal/interests`)
1. **Chess** - Knight icon (cyan)
   - Platform: Chess.com
   - Username: geckoseverywhere
   - Link: https://www.chess.com/member/geckoseverywhere

2. **Retro Gaming** - Game controller icon (purple)
   - Platform: Intellivision (1979-1990)
   - Link: https://www.intellivision.us/intvgames/nostalgia/nostalgia.php

3. **CrossFit** - Barbell icon (blue)
   - Gym: CrossFit Kapaa (linked to https://www.crossfitkapaa.com)
   - Athlete: Bethanie Werner (Masters Competitor)
   - Instagram: @bethaniewerner (https://www.instagram.com/bethaniewerner)

### Technical Details

#### Component Architecture
- All personal pages use: MatrixBackground, GlowCard, VoiceProvider, VoiceToggle
- Blog uses server/client component split to avoid fs module issues:
  - `src/app/personal/blog/page.tsx` - Server component
  - `src/app/personal/blog/BlogListClient.tsx` - Client wrapper
  - `src/app/personal/blog/[slug]/page.tsx` - Server component
  - `src/app/personal/blog/[slug]/BlogPostClient.tsx` - Client wrapper
- Contact form uses Resend API with placeholder fallback for builds
- ReadAloud implemented on page headers across site

#### Key Files
- **Layout**: `src/app/layout.tsx` - Root layout with Roboto fonts
- **Global styles**: `src/app/globals.css` - Matrix animations and effects
- **Matrix background**: `src/components/MatrixBackground.tsx`
- **Voice components**: 
  - `src/components/ReadAloud.tsx`
  - `src/components/VoiceToggle.tsx`
  - `src/contexts/VoiceContext.tsx`
- **Interests page**: `src/app/personal/interests/page.tsx`

## Important Notes
- **Business site** (biz.dbenedict.com) is separate and unchanged
- Matrix background has cyan-to-purple gradient that animates slowly
- All changes deployed to **www.dbenedict.com** (personal site only)
- Voice toggle persists across pages within the same session
- Blog markdown files in `content/blog/` (files starting with `_` are excluded as templates)

## Development Commands
```bash
npm run dev          # Start development server
vercel --prod        # Deploy to production
```

## Personal Information
- **Owner**: David Benedict
- **Partner**: Bethanie Werner (CrossFit athlete)
- **Business**: CrossFit Kapaa
- **Chess username**: geckoseverywhere
