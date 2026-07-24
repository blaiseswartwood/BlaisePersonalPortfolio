# Blaise Swartwood — Personal Portfolio

A fully responsive personal portfolio website built to showcase my software engineering experience, academic background, projects, research, and personal interests. Designed with a focus on modern UI/UX, smooth animations, and performance.

🔗 **Live site:** [blaiseswartwood.com](https://blaiseswartwood.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 18](https://react.dev/) via [Vite 5](https://vitejs.dev/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) with custom design tokens |
| 3D Graphics | [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Hosting | [Firebase Hosting](https://firebase.google.com/docs/hosting) |

---

## Design & Architecture

### Component Architecture
The app uses a **section-based single-page layout** with native hash navigation. All major sections (About, Experience, Capabilities, Education, Projects, Research, Awards, Testimonials, Volunteering, and Interests) are lazy-loaded via `React.lazy` + `Suspense` and mounted only as they approach the viewport.

`DeferredSection` owns stable anchor targets and near-viewport activation. `SectionWrapper` handles each section's entry animation, while a custom `useMediaQuery` hook swaps loading spinners for a lightweight mobile fallback on smaller viewports.

### Code Splitting & Performance
Vite's `rollupOptions.manualChunks` separates the largest shared runtimes:
- **`vendor`** — React / ReactDOM
- **`three`** — Three.js + react-three ecosystem
- **`motion`** — Framer Motion

Section components produce their own lazy chunks, and the large hero scene waits for page load plus an idle period before it mounts.

### 3D Canvas Backgrounds
- **Neural Network Background** (`NeuralNetwork.jsx`) — a custom Three.js scene rendered as a full-section background behind the About section. Features animated instanced mesh nodes, `BufferGeometry` edge lines with vertex colors, and data-pulse particles traveling along network edges. Uses an `IntersectionObserver` to mount/unmount the Canvas only when visible, saving GPU resources.
- **Floating Tech Balls** (`Ball.jsx`) — `@react-three/drei` `Float` + `Decal` components to display technology icons on 3D spheres.
- **3D Computer** (`Computers.jsx`) — GLTF desktop PC model in the Hero section, responsive to viewport size.

### Section Backgrounds
`SectionAtmosphere.jsx` provides lightweight pattern variants (`dots`, `grid`, `lines`, `pulse`, `mesh`) using two composited CSS layers. Each section gets a distinct visual rhythm without mounting another animation runtime.

### Native Interaction Patterns
Experience uses a custom alternating timeline with a scroll-drawn progress rail, Capabilities uses an animated tabbed stack explorer, and Education uses an accessible disclosure ledger. Projects uses semantic links and native image loading hints, while Research uses a touch-friendly scroll-snap gallery. These components avoid dedicated timeline, tilt, flip-card, and carousel dependencies.

### Scroll UX
- `ScrollProgress.jsx` — spring-smoothed progress bar driven by a Framer Motion value without per-frame React state updates.
- `BackToTop.jsx` — FAB that appears after scrolling past the fold.
- `StatCounters.jsx` — animated count-up numbers (GPA, languages, projects, internships) triggered on scroll into view.

---

## Project Structure

```
src/
├── App.jsx                   # Root — ErrorBoundary and deferred section composition
├── main.jsx                  # Entry point + performance tracking init
├── styles.js                 # Shared Tailwind class constants
├── assets/                   # Images, logos, icons
├── components/
│   ├── canvas/               # Three.js / R3F scenes
│   ├── common/               # Shared UI primitives (retired)
│   ├── About.jsx             # Bio, company highlights, stat counters, focus areas
│   ├── Awards.jsx
│   ├── DeferredSection.jsx   # Near-viewport activation + stable anchor boundary
│   ├── EducationLedger.jsx   # Accessible education and coursework disclosure
│   ├── Experience.jsx        # Animated alternating career timeline
│   ├── Hero.jsx              # Animated intro + 3D computer
│   ├── Interests.jsx         # Life Outside Career hobby grid
│   ├── Navbar.jsx            # Responsive nav with mobile drawer
│   ├── ResearchGallery.jsx   # Native scroll-snap research gallery
│   ├── SectionAtmosphere.jsx # Lightweight section pattern system
│   ├── SkillsMatrix.jsx      # Interactive technical stack explorer
│   ├── StatCounters.jsx
│   ├── Tech.jsx              # 3D ball grid of technologies
│   ├── Testimonials.jsx
│   ├── Volunteering.jsx
│   └── Works.jsx             # Filterable project cards
├── constants/
│   ├── index.js              # Projects, education, research, and other section data
│   ├── about.js              # About section data
│   ├── experience.js         # Career history
│   ├── skills.js             # Technical capability groups
│   └── data.js               # Navigation links and resume URLs
├── hoc/
│   └── SectionWrapper.jsx    # Scroll-in animation + anchor HOC
├── hooks/
│   ├── useInViewport.js      # Viewport visibility observation
│   ├── useMediaQuery.js      # Responsive breakpoint hook
│   └── usePrefersReducedMotion.js
└── utils/
    ├── classNames.js         # cn() utility (clsx-style)
    ├── motion.js             # Framer Motion variant presets
    └── performance.js        # Page load + scroll depth tracking
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

### Deploy (Firebase)

```bash
npm run build
firebase deploy
```

---

## Skills Demonstrated

- **React** — Hooks, lazy loading, HOCs, error boundaries, custom hooks
- **Three.js / WebGL** — Custom BufferGeometry, instanced meshes, shader materials, Canvas lifecycle management
- **Framer Motion** — Scroll-linked animations, stagger variants, viewport entry triggers
- **Tailwind CSS** — Responsive design, custom design tokens, utility-first component styling
- **Vite** — Code splitting, manual chunk configuration, optimized builds
- **JavaScript (ES2022+)** — Array/object destructuring, optional chaining, `useMemo` / `useCallback` patterns
- **Performance Engineering** — Lazy loading, IntersectionObserver, deferred canvas mounting, bundle chunking
- **Firebase** — Hosting + SPA redirect configuration
