# We Gotcha Served LLC - Process Serving Website

A professional website for We Gotcha Served LLC, a process serving company based in Cortez, Colorado.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui
- **Language:** TypeScript
- **Forms:** FormSubmit.co

## Features

- Professional service pages
- Document upload functionality
- Contact forms
- Service area information
- Responsive design
- SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build the project for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Production

The site is configured for static export. After building, the static files will be in the `out` directory.

## Project Structure

```
src/
├── app/              # Next.js app router pages
│   ├── areas/        # Service area page
│   ├── contact/      # Contact page
│   ├── pricing/      # Pricing page
│   ├── privacy/      # Privacy policy
│   ├── services/     # Services page
│   ├── terms/        # Terms of service
│   └── upload/       # Document upload page
├── components/       # React components
│   ├── layout/       # Layout components (header, footer)
│   └── ui/           # UI components (buttons, cards, etc.)
└── lib/             # Utility functions
```

## Deployment

This site is configured for static hosting and can be deployed to any static hosting service like Netlify, Vercel, or traditional web hosting via FTP.

## License

Private repository - All rights reserved
