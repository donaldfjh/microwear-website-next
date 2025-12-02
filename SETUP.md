# Setup Instructions

## Fixing npm Cache Permission Issues

If you encounter npm cache permission errors during installation, follow these steps:

### Option 1: Fix npm cache permissions (Recommended)

```bash
sudo chown -R $(whoami) ~/.npm
```

Then run:

```bash
cd nextjs-microwear
npm install
```

### Option 2: Use npm with --force flag

```bash
cd nextjs-microwear
npm install --force
```

### Option 3: Clear npm cache and reinstall

```bash
sudo rm -rf ~/.npm
cd nextjs-microwear
npm install
```

## Environment Variables

Before running the application, you need to configure environment variables:

1. Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

2. Update `.env.local` with your actual values:

```
NEXT_PUBLIC_WEB3FORMS_PUBLIC_KEY=your_actual_key_here
```

Get your free Web3Forms key at: https://web3forms.com/

## After Installation

Once dependencies are installed, you can start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Vercel Deployment

When deploying to Vercel, you need to configure environment variables in the Vercel dashboard:

1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add the following variable:
   - Key: `NEXT_PUBLIC_WEB3FORMS_PUBLIC_KEY`
   - Value: Your Web3Forms access key
   - Environment: Production, Preview, and Development (select all)

**Important:** If you're migrating from a Vite project, make sure to:

- Remove the old `VITE_WEB3FORMS_PUBLIC_KEY` variable
- Add the new `NEXT_PUBLIC_WEB3FORMS_PUBLIC_KEY` variable

## Next Steps

After successful installation, continue with the migration tasks:

1. Task 2: Migrate static assets and data
2. Task 3: Create data fetching utilities
3. Task 4: Migrate reusable components
4. And so on...

See `.kiro/specs/nextjs-migration/tasks.md` for the complete task list.
