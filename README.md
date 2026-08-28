# Nitish — Premium Portfolio

An Awwwards-inspired personal portfolio built with Next.js 15, featuring premium animations, custom cursor interactions, and a focused developer narrative.

## Highlights

- **Premium UI** — Dark glassmorphism, aurora backgrounds, gradient typography
- **Advanced interactions** — Custom cursor, magnetic buttons, 3D project cards, mouse parallax
- **Smooth scrolling** — Lenis with spring-based cursor tracking
- **Animations** — Framer Motion reveals, GSAP micro-interactions, animated counters
- **Focused sections** — Hero, About, Skills, Projects, Experience, Contact only

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- GSAP
- Lenis
- Lucide React
- Resend (contact form)

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Customization

| Content | File |
|---------|------|
| Personal info & bio | `constants/site.ts` |
| Skills | `constants/skills.ts` |
| Projects | `constants/projects.ts` |
| Experience | `constants/experience.ts` |
| Profile image | `public/images/profile.svg` |
| Resume | `public/resume.pdf` |

## Contact Form

Set up Resend in `.env.local`:

```
RESEND_API_KEY=re_your_key
CONTACT_EMAIL=your@email.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) for optimal Next.js performance.
