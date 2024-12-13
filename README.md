# Everon Property Website

A modern, responsive property and mortgage services website built with Next.js 14, React 18, and Tailwind CSS.

## Overview

Everon Property is a comprehensive property services platform offering:
- Mortgage Services
- Financial Planning
- Property Services
- Professional Consultation

## Features

- Modern, responsive design
- Dark/Light theme support
- Fast page loads with Next.js
- Interactive UI components
- Testimonials section
- Contact form
- Service information pages

## Tech Stack

- **Framework:** Next.js 14
- **Frontend:** React 18
- **Styling:** Tailwind CSS
- **UI Components:** Custom components with clsx and tailwind-merge
- **Icons:** Lucide React
- **Theme Management:** next-themes
- **Type Safety:** TypeScript

## Project Structure

```
everon-property/
├── app/                    # Next.js app directory
│   ├── aboutus/           # About Us page
│   ├── contactus/         # Contact page
│   ├── financialplanning/ # Financial Planning services
│   ├── mortgage/          # Mortgage services
│   └── services/          # Other services
├── components/            # Reusable UI components
├── public/               # Static assets
└── lib/                  # Utility functions and configurations
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The website is currently live at: [https://everon-website.vercel.app/](https://everon-website.vercel.app/)

The project is deployed on Vercel, a platform optimized for Next.js applications. You can deploy your own instance using the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/everon-property)

## License

See the [LICENSE](LICENSE) file for details.
