# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single-page personal portfolio website built with vanilla HTML, CSS, and JavaScript. The design is dark-themed and minimalist, inspired by the f.inc/offseason aesthetic.

## Architecture

### File Structure
- `index.html` - Main HTML structure with 6 sections: intro screen, hero, journey, focus, writing, and footer
- `styles.css` - All styling using CSS custom properties for theming, responsive design, and animations
- `script.js` - Handles intro screen transitions, smooth scrolling, and intersection observer animations
- `*.gif` - Visual assets for intro screen and hero section

### Key Design Patterns
1. **CSS Custom Properties**: All colors, spacing, and typography defined as CSS variables for easy theming
2. **Mobile-First Responsive**: Breakpoints at 768px and 480px
3. **Progressive Enhancement**: Site works without JavaScript; JS adds smooth transitions
4. **GPU-Accelerated Animations**: Uses transform and opacity for performance
5. **Intersection Observer**: Reveals content as users scroll

## Development Commands

This is a static website with no build process:
- **Run locally**: Open `index.html` directly in browser or use any local server (e.g., `python -m http.server`)
- **Deploy**: Upload files to any static hosting service (GitHub Pages, Netlify, Vercel, etc.)

## Customization Points

When modifying this site:
1. **Colors**: Update CSS custom properties in `:root` selector in styles.css
2. **Content**: Edit sections in index.html while maintaining the existing structure
3. **Animations**: Adjust timing and easing in CSS transitions and keyframes
4. **Typography**: Modify font families in the Google Fonts link and CSS variables
5. **Breakpoints**: Adjust media queries for different responsive behavior

## Important Notes

- The intro screen GIF auto-advances after 4 seconds or on user scroll
- All external links should include proper `aria-label` attributes
- Maintain high contrast ratios (current: 10.5:1) for accessibility
- Keep JavaScript minimal and performance-focused
- Test on mobile devices as the design is mobile-first