# Mission Control Dashboard

A modern React dashboard for exploring NASA open-data feeds in one place.

Live demo: https://missioncontroldashboard.netlify.app/

## Overview

Mission Control Dashboard brings together three interactive NASA experiences:

- APOD: browse the Astronomy Picture of the Day with date navigation
- Mars Rover: explore rover photos with filters and infinite scrolling
- Near-Earth Objects: track asteroids and filter by size and hazard status

The app is built with React, Vite, Tailwind CSS, React Router, TanStack Query, and Axios.

## Features

- Responsive and polished UI
- Dark/light theme toggle
- Shareable filtered URLs
- Infinite scrolling and virtualized photo rendering for Mars rover images
- Error, loading, and empty states for a smoother experience

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- Axios
- react-window

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Create a local environment file

```bash
cp .env.example .env
```

3. Add your NASA API key

```env
VITE_NASA_API_KEY=your_api_key_here
```

You can get a free API key from https://api.nasa.gov/.

> The demo key works for quick testing, but it has rate limits, so using your own key is recommended for heavier usage.

## Available Scripts

```bash
npm run dev     # start the development server
npm run build   # create a production build
npm run preview # preview the production build locally
npm run lint    # run ESLint
```

## Project Structure

```text
src/
  components/  # Reusable UI components
  hooks/       # Data-fetching hooks and custom logic
  pages/       # Route-level pages
  services/    # API service modules
  utils/       # Helper functions
```

## Deployment

This project is ready to be deployed on platforms like Netlify or Vercel.

## License

This project is for educational and demo purposes.

