# Raytheon Drone Club (RDC) Website

[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-blue?logo=github)](https://rdc-gmu.github.io)
[![SvelteKit](https://img.shields.io/badge/SvelteKit-5-ff3e00?logo=svelte)](https://kit.svelte.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-black?logo=tailwindcss)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-latest-black?logo=bun)](https://bun.sh/)

## Overview
This platform serves as the public website for the RDC Team, currently focused on developing collaborative autonomous systems for the **2025-2026 Raytheon Autonomous Vehicle Competition (AVC)**.

The website provides a centralized overview of:
- Our mission statement and technical capabilities.
- Live system statuses and events.
- The official Drone and Ground Team directory.
- Curated access to all active tracking/software repositories.
- Community Discord connections and organizational meeting schedules.

## Tech Stack
This project is built using modern edge technologies optimized for static workflows:
- **Framework**: [Svelte 5](https://svelte.dev/) & [SvelteKit](https://kit.svelte.dev/) utilizing runes and snippet design patterns. 
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) implementing inline utilities mapped via `@theme`.
- **Icons**: [@iconify/svelte](https://iconify.design/) providing scalable vector illustrations without heavy payload sizes.
- **Runtime**: [Bun](https://bun.sh/) for ultra-fast dependency management and compilation speeds.

## Development Setup

To run the project locally, you will need to have [Bun](https://bun.sh/) installed on your machine.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RDC-GMU/website.git
   cd website
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start the development server:**
   ```bash
   bun run dev
   ```

You can now preview the application concurrently by navigating to `http://localhost:5173`.

## Deployment Architecture

This website runs identically to a definitively statically generated site (SSG). 

It utilizes the `@sveltejs/adapter-static` adapter. The internal configuration natively generates HTML directly into a pristine `build/` directory without requiring heavy NodeJS middleware logic holding up API requests. 

### GitHub Actions CI/CD
The project securely relies on an integrated **GitHub Actions automation workflow** (`.github/workflows/deploy.yml`) to completely govern its deployment lifecycle.

Whenever code changes are committed and pushed safely to the `main` branch, the workflow:
1. Provisions an isolated Ubuntu Linux container.
2. Bootstraps the latest `Bun` toolkit runtime context.
3. Automatically evaluates dependencies executing `bun run build`.
4. Seamlessly transfers the compiled `/build` artifact pipeline directly into the `github-pages` environment overriding natively at `rdc-gmu.github.io`.
