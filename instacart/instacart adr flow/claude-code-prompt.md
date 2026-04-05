# Claude Code Prompt: Instacart ADR Flow Prototype

## Overview
Build a fully interactive mobile web prototype of an Instacart Autonomous Delivery Robot (ADR) order flow. The prototype should be pixel-faithful to the wireframes provided and built in Next.js with Tailwind CSS. It should be styled for mobile (375px wide), displayed centered on desktop.

The prototype covers 12 sequential screens. Navigation flows linearly — some screens auto-advance, some require user interaction. All screens should be rendered at mobile dimensions inside a phone frame (or just as full-page mobile-width views).

---

## Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React (or inline SVGs where needed)
- **Map**: Static image — use a screenshot of Jersey City, NJ from OpenStreetMap or a placeholder image. Do NOT use any map API.
- **Animation**: Tailwind + CSS transitions (no extra libraries needed)

---

## Design System

### Colors
- Primary green: `#43B02A`
- Primary green dark: `#2D8C1C`
- Background: `#FFFFFF`
- Light gray background: `#F6F7F8`
- Border gray: `#E5E7EB`
- Text primary: `#1C1C1C`
- Text secondary: `#757575`
- Text link green: `#43B02A`
- Warning yellow: `#FFA500`
- Offer badge green: `#43B02A`
- Rating screen background: `#F5A623` (warm yellow/orange)

### Typography
- Font family: `Inter` (import from Google Fonts)
- Screen titles: 20px bold
- Body: 15px regular
- Small/caption: 13px
- Buttons: 16px semibold

### Components
- **Green CTA button**: Full-width, `bg-[#43B02A]`, `text-white`, `rounded-full`, `py-4`, `text-base font-semibold`
- **Ghost/text button**: `text-[#43B02A]`, no background
- **Section dividers**: 8px gray separator blocks between sections
- **Progress bar**: 4-step horizontal stepper with icons: 🏪 Store → 🛒 Shopping → 🤖 Robot → 🏠 Home. Active step is green/filled. Completed steps have a green line connecting them.
- **Bottom sheet info rows**: Icon + label on left, value/chevron on right, `py-3 border-b border-gray-100`
- **Robot card**: Small robot illustration (use a simple SVG or emoji 🤖) + "Avride Robot • 894 / Autonomous delivery" in a white card with subtle border

---

## Screen-by-Screen Specification

### Screen 1 — Checkout (top)
**Route**: `/` or `/checkout`

**Header**:
- Back arrow (←) on left
- Instacart logo (orange circle with white "i") centered
- Bell icon on right

**Body**:
- "Deliver to" label + "Switch to pickup" green link (right-aligned)
- Address: **207 Van Vorst Street, 820, Jersey C...** (truncated)
- Subtext: "Leave at the door · Add instructions" (gray, small)
- Green toggle banner: "Get $0 delivery fee with Instacart+" | Toggle ON (green) | "$9.90/yr. Service fees apply."
- Italic gray text: "Some delivery options are affected by store operating hours."
- **Delivery options** (radio button list):
  - ⚡ **Fast** | "Tomorrow, Apr 6, 12pm–Noon" | `$1.99` (right)
  - 📅 **Schedule and save** | "As soon as 1am Tomorrow" | `$1.99` (right)
  - ⚡ **Priority** | "Unavailable" (grayed out, unselectable)
- "Fast" is selected by default (green radio)
- Section header: **"Summary"** (bold, left-aligned)

**Footer (sticky)**:
- Full-width green button: **"Place order"**

**Interaction**: Tapping "Place order" scrolls to / transitions to Screen 2. (Or, treat it as: Screen 1 shows top of checkout, Screen 2 shows scrolled-down state of same page — implement as TWO separate screens with a "scroll" transition or just next/prev navigation.)

---

### Screen 2 — Checkout (scrolled down / Summary)
**Route**: `/checkout?view=summary`

**Body** (continuation of Screen 1):
- **Summary** section:
  - "Delivery Tip" | "100% of your tip goes to the delivery person" | `$6.05`
  - Tip selector pills: `7%` | `12%` | `17%` | `22%` | `Other`
  - "19 items": ~~$77.96~~ `$83.68` (strikethrough original, new price)
  - "Delivery of": ~~$3.99~~ `$1.99`
  - "Service fee ℹ️": `$3.31`
  - **Total**: ~~$104.38~~ **$77.78** (bold)
  - Green savings badge: "You're saving $6.96" 🏷️

- **Pay with** section:
  - "Pay with" label + "Edit" green link right
  - Apple Pay logo + "Applied to tip and remaining balance"
  - Green promo card: "Free Instacart+? Get 6 free mos. of Instacart+" | "Learn more" button

- Apple Pay button + Google Pay button (side by side or stacked)

**Footer (sticky)**:
- Full-width green button: **"Place order"**

**Interaction**: Tapping "Place order" → transitions to Screen 3

---

### Screen 3 — Confirm Order
**Route**: `/confirm`

**Header**: None (full screen with map at top)

**Map area** (top ~40% of screen):
- Static image of Jersey City, NJ map (use `/public/map-jersey-city.png` — a placeholder gray/beige map image)
- Small home/location pin icon at center
- "Maps" label + "Link" in bottom-left of map (as if it's real Google Maps)

**Bottom sheet** (white, rounded top corners):
- Title: **"Confirming delivery order..."** (bold, large)
- 📍 "207 Van Vorst Street, 820, Jersey City, NJ 07302" | "Leave at the door"
- 🕐 "Delivery Tomorrow, Apr 6, 12pm–Noon"
- 🤖 **"Autonomous Delivery"** (label with robot icon — use a small robot SVG or 🤖 emoji)
- 🏪 "ALDI · 4 items"
- 💳 "Apple Pay"
- **Countdown button**: Green button **"Looks good (0:05)"** — starts a 5-second countdown (displayed as `0:05`, `0:04`... `0:00`). When it reaches 0, automatically advance to Screen 4. User can also tap it early to skip.
- Text link below: "Go back"

**Implementation note**: Use `useEffect` with `setInterval` for the countdown. Store remaining seconds in state. When 0, call router.push to Screen 4.

---

### Screen 4 — Order Confirmed
**Route**: `/order/confirmed`

**Header**: X (close) on left | **"Help"** green text on right

**Map** (top ~35%, static image same as Screen 3 but slightly different crop/zoom showing house pin)

**Body**:
- **"Your order is confirmed"** (bold, large green ✓ or just text)
- "Arriving tomorrow between 10am – 12pm" (gray)
- Divider
- Row: 📍 "207 Van Vorst Street, 820" | Chevron →
- Row: 💳 "Paid with MasterCard 3165" | (no chevron)
- Divider
- **Progress stepper** (4 steps, Step 1 active = Robot heading to store):
  - Step icons: 🏪 | 🛒 | 🚗🤖 | 🏠
  - Step 1 (🏪) is green/active
- Divider
- Row: **"Add, edit, or view items (4)"** | Chevron → (green text)
- Divider
- **Replacement preferences** card:
  - "Let your shopper know what to do if something is out of stock" + 🐕 dog sticker emoji on right
- Divider
- **"You've still got time to shop"** section:
  - 🔍 Search bar: "Search ALDI" (light gray, rounded)
- Yellow/orange banner: **"Ready to eat sooner? Add a restaurant order now"** | "🔍 Search Uber Eats" below it
- Section: **"Popular restaurants"** | "Browse all" (green right link)
- 3 restaurant placeholder cards (gray image boxes with name below)

**Auto-advance**: After 4 seconds on this screen, auto-transition to Screen 5. (Or: add a small "Next →" dev button in the corner for prototype navigation — recommended for demo purposes)

**Recommendation**: Add a floating "⏭ Skip to next" button in bottom-right corner on ALL status screens (5–9) so the demo can be advanced manually. Make it small and subtle (gray, `opacity-60`).

---

### Screen 5 — Robot Heading to Store
**Route**: `/order/robot-to-store`

**Header**: X | Robot icon (🤖 in a dark circle/badge) centered | **"Help"** right

**Status section**:
- **"Robot heading to the store"** (bold, large)
- "Arriving between 12:14pm – 1:14pm" (gray)

**Progress stepper**: Step 1 (🏪) active/green, others gray

**Info rows**:
- 📍 "207 Van Vorst Street, 820" | Chevron
- 💳 "Paid with MasterCard 3165"
- **"Add, edit, or view items (4)"** | Chevron (green)

**Robot card**:
- Small robot image/illustration (🤖 or SVG) on left
- "Avride Robot • 894" bold
- "Autonomous delivery" gray

**Replacement preferences** section (same as Screen 4)

**"You've still got time to shop"** section:
- 🔍 "Search Stop & Shop and Shop Express"

**Auto-advance**: After 5 seconds → Screen 6 (or manual skip button)

---

### Screen 6 — Order Being Prepared by Store Associate
**Route**: `/order/preparing`

**Header**: X | **"Help"** right

**Status section**:
- **"Order is being prepared by a store associate"** (bold)
- "Arriving between 11:17am – 11:47am" (gray)

**Progress stepper**: Step 2 (🛒) active/green

**Info rows**:
- 📍 "207 Van Vorst Street, 820" | Chevron
- 💳 "Paid with MasterCard 3185"
- **"View items (4)"** | Chevron (green)

**Shopper card** (white card with subtle shadow/border):
- Avatar circle (gray placeholder) on left
- **"Raymond"** bold
- "1 year · 1,478 orders" gray
- 🌟 "Platinum shopper" green badge
- "Shopped U/S Stop & Shop Express orders: 34 recent" small gray text

**Offer banner**: Green pill — "5% back + $50 credit on Instacart" | "Learn more" green button

**Receipt row**: "Receipt" | "Paid with MasterCard 3185" | Chevron →

**Invite row**: "$" icon | "Invite friends, earn money! $10 for you, $10 for a friend" | Green "Invite" button

**Popular restaurants** section (same as Screen 4)

**Auto-advance**: After 5 seconds → Screen 7

---

### Screen 7 — Shopping Complete, Robot Loaded
**Route**: `/order/shopping-complete`

**Header**: X | **"Help"** right

**Status section**:
- **"Shopping complete"** (bold, large)
- "Arriving between 11:17am – 11:47am" (gray)

**Progress stepper**: Step 3 (🚗🤖) active/green

**Info rows** (same as Screen 6):
- 📍 Address | Chevron
- 💳 MasterCard 3165

**"Your order is being delivered by:"** text (gray, small)

**Robot card** (same as Screen 5):
- 🤖 "Avride Robot • 894 | Autonomous delivery"

**Offer banner** (same as Screen 6)

**Receipt row** (same)

**Invite row** (same)

**Auto-advance**: After 5 seconds → Screen 8

---

### Screen 8 — Robot Heading to You (Map View)
**Route**: `/order/robot-to-you`

**Layout**: Full-screen map with bottom sheet overlay

**Map** (fills 55% of screen):
- Static map image (wider view of Jersey City neighborhood with streets visible)
- X button in top-left corner of map
- "Help" in top-right of map
- A small robot icon / moving dot on the map (static position, no real tracking)

**Bottom sheet** (slides up from bottom, white, rounded-top corners, ~50% of screen):
- **"Robot heading to you"** (bold, large)
- "Arriving in 7 minutes" (gray)
- Progress stepper: Step 4 (🏠) active, all previous steps green/completed
- Divider
- 📍 "207 Van Vorst Street, 820" | Chevron
- 💳 "Paid with MasterCard 3165"
- **"View items (4)"** | Chevron (green)
- Divider
- Robot card: 🤖 "Avride Robot • 894 | Autonomous delivery"
- Divider
- Offer banner: "5% back + $50 credit on Instacart" | "Learn more"
- Receipt row

**Auto-advance**: After 6 seconds → Screen 9

---

### Screen 9 — Robot Is Here, Come Outside
**Route**: `/order/robot-arrived`

**Layout**: Full-screen map + bottom sheet (same layout as Screen 8)

**Map**: Zoomed in more (showing just a few blocks around the delivery address, robot pin very close to home pin)

**Bottom sheet**:
- **"Head outside to get your order"** (bold)
- "Arriving in 2 minutes" (gray)
- Progress stepper: Step 4, robot very close to home icon (show as nearly-complete progress)
- 📍 "207 Van Vorst Street, 820" | Chevron
- Gray descriptive text: "The autonomous vehicle will park as close as it can. Meet it outside, and bring your phone."
- Robot card: 🤖 "Avride Robot • 995 | Autonomous delivery"
- **🔓 "Unlock robot"** — Full-width green button (prominent, not ghost)
- Offer banner
- Receipt row

**Interaction**: Tapping "Unlock robot" → Screen 10

---

### Screen 10 — Unlock Robot / Confirm Receipt
**Route**: `/order/unlock`

**Layout**: Map with toast + bottom modal

**Map** (full screen, same zoomed-in view as Screen 9):
- ✅ Toast notification at top: "Vehicle unlocked" (dark rounded pill, white text, ✓ icon) — appears for 2 seconds then fades
- "Meet outside" text label on map near robot position
- "1 min" label
- Robot dot on map

**Bottom modal** (bottom sheet, overlays map, white, rounded top):
- Title: **"Confirm you received your order"** (bold)
- Body text: "This action can't be undone. You can still contact support if there's any issue." (gray)
- **Slide to confirm**: A custom slider component:
  - Gray track with text "Slide to confirm →" faded in center
  - White circular handle on left with → arrow icon
  - User drags handle to the right to confirm
  - On complete (handle reaches right end): auto-advance to Screen 11
  - Implement with mouse/touch drag events. On desktop, make it draggable with mouse.
  - When confirmed: briefly show green check animation then transition
- Text link: "Go back" (gray, centered below slider)

---

### Screen 11 — Order Delivered
**Route**: `/order/delivered`

**Layout**: Large map + bottom content

**Map** (top ~50%, wider city view of Jersey City):
- X button top-left
- Header overlay on map: **"Delivery by autonomous vehicle"** (white text on semi-transparent dark bar, or as a title below the map)
- Home pin and store pin visible on map

**Below map (white section)**:
- **"Your order has been delivered by an autonomous vehicle"** (bold, large)
- Robot card: 🤖 "Avride Robot • 894 | Autonomous delivery" (with robot image)
- (Optionally: receipt row, offer banner below)

**Interaction**: After 3 seconds OR tap → Screen 12

---

### Screen 12 — Enjoy Your Order / Rating
**Route**: `/order/rating`

**Background**: Warm yellow/orange `#F5A623` fills top 60% of screen

**Header** (on yellow background):
- X button (top-left, gray/white)
- Instacart "C" logo (orange circle, centered, top)
- "Help" (top-right, white/gray)

**Illustration**: Large 3D-style food illustration — a pile of groceries/food items. Use a placeholder colored rectangle or emoji collage: 🛍️🥗🍕🥤 arranged in a fun way. Position centered in the yellow area.

**White bottom section**:
- **"Enjoy your order"** (bold, 22px, dark)
- "Thanks for using Uber Eats. Let us know how it went. Any pre-selected tips will not be charged." (gray, small — keep this text from the wireframe even if it says Uber Eats, as it's part of the design)
- Divider row: 🤖 "Delivered by Avride" | "Reach out to Uber support for help with the order" (gray small)
- Divider row: 📷 "Add photos of your dish" | "Help others discover new favorites" (camera icon on right)
- **"Rate your order"** — Full-width black button (`bg-black text-white rounded-full py-4`)

**Interaction**: "Rate your order" → shows a simple star-rating modal or just resets to Screen 1 (loop the demo)

---

## Global Navigation / Demo Controls

1. **Progress indicator**: None visible to users (the app screens don't show a progress bar).

2. **Dev skip button** (for demo purposes): Add a small `⏭` button in the bottom-right corner of screens 4–9 (status/auto-advance screens). Style: `fixed bottom-4 right-4 bg-gray-200 text-gray-600 rounded-full p-2 text-xs opacity-50 hover:opacity-100`. This lets the demo presenter manually advance without waiting for auto-timers.

3. **Back/restart**: On Screen 12, the X button or "Rate your order" completion should route back to `/` to restart the demo.

---

## File Structure

```
/app
  /page.tsx                         → Screen 1 (Checkout top)
  /checkout/page.tsx                → Screen 2 (Checkout summary)
  /confirm/page.tsx                 → Screen 3 (Confirm order)
  /order/
    /confirmed/page.tsx             → Screen 4
    /robot-to-store/page.tsx        → Screen 5
    /preparing/page.tsx             → Screen 6
    /shopping-complete/page.tsx     → Screen 7
    /robot-to-you/page.tsx          → Screen 8
    /robot-arrived/page.tsx         → Screen 9
    /unlock/page.tsx                → Screen 10
    /delivered/page.tsx             → Screen 11
    /rating/page.tsx                → Screen 12
/components
  /ProgressStepper.tsx              → Reusable 4-step progress bar
  /RobotCard.tsx                    → Avride robot info card
  /BottomSheet.tsx                  → Reusable white bottom sheet wrapper
  /SlideToConfirm.tsx               → Draggable slide-to-confirm component
  /SkipButton.tsx                   → Dev navigation skip button
  /OfferBanner.tsx                  → "5% back" offer strip
/public
  /map-jersey-city.png              → Static map image (placeholder)
  /map-jersey-city-zoomed.png       → Zoomed map for screens 8–10
```

---

## Implementation Notes

- **Mobile-first**: Wrap all screen content in `<div className="max-w-[390px] mx-auto min-h-screen bg-white relative overflow-hidden">` so it looks like a phone on desktop.
- **Transitions**: Use CSS `transition-opacity duration-300` or Next.js route transitions for screen changes.
- **Auto-advance**: Use `useEffect(() => { const t = setTimeout(() => router.push('/next-route'), 5000); return () => clearTimeout(t); }, [])` on screens that auto-advance.
- **Countdown (Screen 3)**: Start at 5, decrement every second with `setInterval`. When 0, redirect.
- **Slide to confirm (Screen 10)**: Use `onMouseDown`/`onMouseMove`/`onMouseUp` + touch equivalents. Track drag percentage. At 95%+, trigger confirmation.
- **Map images**: Use a single gray placeholder image for all maps (can be different opacity/tint for variety). A simple SVG with streets would also work — use a static embedded SVG of a simplified city grid.
- **Robot illustration**: Use this simple inline SVG robot or a 🤖 emoji at 48px for robot cards. For the Avride Robot card, use a red/white small robot image placeholder.
- **No external APIs**: No Google Maps, no Mapbox, no real data fetching.

---

## Deployment

After building locally with `npm run dev`, to deploy:
1. Push to GitHub: `git add . && git commit -m "Add ADR flow prototype" && git push`
2. Connect repo to Vercel (vercel.com) for instant deployment, OR use `npx vercel --prod`
3. Alternatively: `npm run build && npm run export` for static hosting on GitHub Pages (add `output: 'export'` to `next.config.js`)

---

## Quality Checklist
- [ ] All 12 screens render correctly on 390px width
- [ ] Screen 3 countdown auto-advances at 0:00
- [ ] Screens 4–9 auto-advance (or skip button works)
- [ ] Screen 10 slide-to-confirm works on desktop (mouse drag) and mobile (touch)
- [ ] Screen 12 X / rate button loops back to Screen 1
- [ ] Progress stepper shows correct active step on each screen
- [ ] Green color `#43B02A` used consistently for CTAs, links, active states
- [ ] No console errors
