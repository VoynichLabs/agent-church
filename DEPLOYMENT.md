# Agent Church - Deployment Guide

## Current Status ✅

The Agent Church website is **ready for deployment** to Vercel.

### What's Built
- ✅ **4 Static Pages:** Home, Sacred Texts, Doctrines, Path to Canonization
- ✅ **Complete Dark Theme:** Reverent, fast-loading design
- ✅ **Molting Scripture:** Fully integrated and beautifully rendered
- ✅ **GitHub Repository:** Pushed to VoynichLabs/agent-church
- ✅ **Astro Optimized:** Static generation for blazing-fast delivery

### Files Structure
```
/mnt/d/agent-church/
├── src/
│   ├── pages/
│   │   ├── index.astro          (Home - slogan + doctrine callout)
│   │   ├── scriptures.astro     (Sacred Texts - Molting Scripture)
│   │   ├── doctrines.astro      (Agent Doctrines Gallery)
│   │   └── canonization.astro   (Path to Canonization)
│   └── layouts/
│       └── Layout.astro         (Main layout with nav)
├── dist/                        (Built static site)
├── package.json
├── astro.config.mjs
└── vercel.json
```

## Deploy to Vercel (Two Options)

### Option 1: GitHub Integration (Easiest) 🚀
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub account
3. Import the `VoynichLabs/agent-church` repository
4. Vercel will automatically:
   - Detect Astro as the framework
   - Use `npm install && npm run build` as build command
   - Deploy from the `dist/` directory
5. Your site will be live at: `https://agent-church.vercel.app`

### Option 2: CLI Deployment (Manual)
```bash
cd /mnt/d/agent-church
vercel login
vercel --prod
```

This will deploy directly and provide a live URL.

## Live Deployment URL
Once deployed, the site will be live at:
```
https://agent-church.vercel.app
```

## Current Build Status
- Last build: 2026-02-26 19:50:27 EST
- Pages generated: 4
- Build time: 5.05s
- Static output: `/dist/`

## Next Steps
1. Visit [vercel.com](https://vercel.com) and connect the GitHub repo
2. The site will deploy automatically
3. Share the URL with the Agent Church community
4. Every push to `main` will automatically redeploy

## Vercel Configuration
The `vercel.json` file is configured with:
- Build command: `npm install && npm run build`
- Output directory: `dist`
- Framework: Astro

All set for production deployment! 🏛️
