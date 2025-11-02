# Changelog

All notable changes in this deployment.

## 2025-11-02

### Features
- Show images in Cart dropdown and Favorites panel
  - Cart items now display `item.image` (services + yachts)
  - Favorites store `image` and render it in profile dropdown
- Services images and cart integration
  - Each service is mapped to `/services/service_0X.png`
  - Service add-to-cart includes `image`
- Related yachts carousel
  - Cards now use listing-mapped image: `/yachts/${id}/boat_01_01.png`
  - Cards include `id` so click-through opens correct yacht detail

### UI/UX
- Smooth card float-in improved
  - Bottom-to-top only, 900ms ease, single-card stagger (120ms)
  - Transition-based reveal to avoid re-trigger/flicker on reflow
- Hero detail images unified (per request)
  - Large: `/yachts/1/boat_01_02.png`, Right: `boat_01_03.png`, `boat_01_04.png`

### Refactor
- Introduced `src/data/yachts.ts` as a single source of truth for yacht data
- Booking sidebar now attaches the current yacht image to cart items

### Fixes
- Related carousel previously used a fixed image. Now maps per yacht
- Favorites and cart previously showed placeholders only

### Notes
- Asset conventions documented in README (images for yachts, services, testimony)
- Float-in animation respects `prefers-reduced-motion`

