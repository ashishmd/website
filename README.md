# Portfolio Website - Ashish Muralidharan

A modern, responsive portfolio website built with Next.js, React, TypeScript, and TailwindCSS.

## Features

- 🎨 Modern, clean design with gradient accents
- 🌓 Dark mode support with theme toggle
- 📱 Fully responsive layout
- ⚡ Fast performance with Next.js 14
- 🎭 Smooth animations with Framer Motion
- ♿ Accessible components
- 🎯 SEO optimized

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Icons:** Lucide React
- **Animations:** Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx       # Root layout with theme provider
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Sticky navigation with mobile menu
│   ├── Hero.tsx         # Hero section with CTA
│   ├── Experience.tsx   # Timeline of professional experience
│   ├── Approach.tsx     # Work approach breakdown
│   ├── Skills.tsx       # Technical skills grid
│   ├── Contact.tsx      # Contact information
│   └── ThemeProvider.tsx # Dark mode context provider
├── public/              # Static assets
└── package.json
```

## Customization

### Content
Edit the component files in the `components/` directory to update:
- Personal information in `Hero.tsx`
- Work experience in `Experience.tsx`
- Skills in `Skills.tsx`
- Contact details in `Contact.tsx`

### Styling
- Modify `tailwind.config.ts` for theme colors and design tokens
- Update `app/globals.css` for global styles

### Resume
Place your resume PDF as `public/Ashish_Muralidharan_Resume.pdf`

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform

## License

MIT
