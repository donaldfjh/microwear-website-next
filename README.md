# MicroWear Next.js Migration

This is the Next.js version of the MicroWear e-commerce website, migrated from Vite + React.

## Getting Started

### Prerequisites

Before running the project, you need to install dependencies. If you encounter npm cache permission issues, run:

```bash
sudo chown -R $(whoami) ~/.npm
```

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
- `lib/` - Utility functions and data fetching
- `types/` - TypeScript type definitions
- `data/` - Static data files (products.json)
- `public/` - Static assets (images, etc.)
- `contexts/` - React Context providers

## Migration Status

This project is currently being migrated from Vite to Next.js. See `.kiro/specs/nextjs-migration/tasks.md` for the implementation plan.
