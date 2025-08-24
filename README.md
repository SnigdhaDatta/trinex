# Trinex

Trinex is a modern web application built with Next.js and TypeScript, featuring advanced website scanning for Domain Verification, Analyzing scripts, Credential Leak, and SEO scores , scan history management, and authentication using Clerk. It leverages Puppeteer and Chromium for browser automation and Prisma for database management.

## Features

- Scan websites for Domain Verification, Analyzing scripts, Credential Leak, and SEO scores
- Generate a Report of the Above Ankysis mentioned for Industry Level Practices
- View and manage scan history
- User authentication with Clerk
- Fast and secure browser automation using Puppeteer and @sparticuz/chromium
- Database operations powered by Prisma ORM

## Tech Stack

- Next.js
- TypeScript
- Clerk (Authentication)
- Prisma ORM
- Puppeteer & @sparticuz/chromium
- Tailwind CSS
- date-fns

## Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SnigdhaDatta/trinex.git
   cd trinex
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env` and fill in required values (database URL, Clerk keys, etc.)
4. Set up Prisma:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```

### Usage

- Access the app at `http://localhost:3000`
- Sign up or log in using Clerk authentication
- Start scanning websites and view your scan history

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npx prisma migrate dev` — Run Prisma migrations

## Folder Structure

```
components.json
eslint.config.mjs
next-env.d.ts
next.config.ts
package.json
postcss.config.mjs
README.md
tsconfig.json
public/
src/
  middleware.ts
  app/
	 favicon.ico
	 globals.css
	 layout.tsx
	 page.tsx
	 components/
		TrinexLanding.tsx
		ui/
		  alert.tsx
	 lib/
		utils.ts
		scanner/
		verification/
		db.ts
```

## License

MIT

## Author

-Snigdha Datta
-Ankita Chakraborty
-Shemanti Paul
