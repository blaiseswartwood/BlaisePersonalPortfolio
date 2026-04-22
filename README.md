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
| Routing | [React Router v6](https://reactrouter.com/) |
| Email | [EmailJS](https://www.emailjs.com/) |
| Card Interactions | [react-card-flip](https://github.com/AaronCCWong/react-card-flip), [react-parallax-tilt](https://github.com/mkosir/react-parallax-tilt) |
| Timeline UI | [react-vertical-timeline-component](https://github.com/stephane-monnot/react-vertical-timeline) |
| Hosting | [Firebase Hosting](https://firebase.google.com/docs/hosting) |

---

## Design & Architecture

### Component Architecture
The app uses a **section-based single-page layout** served under a single `"/"` route. All major sections (About, Experience, Skills, Education, Projects, Research, Awards, Testimonials, Volunteering, Interests, Contact) are lazy-loaded via `React.lazy` + `Suspense` to minimize initial bundle size.

Sections are wrapped with a `SectionWrapper` higher-order component (HOC) that handles scroll-based animation entry and section ID anchoring. A custom `useMediaQuery` hook swaps loading spinners for a lightweight mobile fallback on smaller viewports.

### Code Splitting & Performance
Vite's `rollupOptions.manualChunks` splits the bundle into four named chunks:
- **`vendor`** — React / ReactDOM
- **`three`** — Three.js + react-three ecosystem
- **`motion`** — Framer Motion
- **`ui`** — Tilt, card-flip, carousel libs

This keeps the critical-path JS small while 3D assets load asynchronously.

### 3D Canvas Backgrounds
- **Neural Network Background** (`NeuralNetwork.jsx`) — a custom Three.js scene rendered as a full-section background behind the About section. Features animated instanced mesh nodes, `BufferGeometry` edge lines with vertex colors, and data-pulse particles traveling along network edges. Uses an `IntersectionObserver` to mount/unmount the Canvas only when visible, saving GPU resources.
- **Floating Tech Balls** (`Ball.jsx`) — `@react-three/drei` `Float` + `Decal` components to display technology icons on 3D spheres.
- **Rotating Earth** (`Earth.jsx`) — GLTF model rendered with `OrbitControls` for the Contact section.
- **Starfield** (`Stars.jsx`) — Randomised point-cloud stars for the Contact / footer backdrop.
- **3D Computer** (`Computers.jsx`) — GLTF desktop PC model in the Hero section, responsive to viewport size.

### Section Backgrounds
`SectionBackground.jsx` provides five named variants (`dots`, `grid`, `lines`, `pulse`, `mesh`) using Framer Motion `useScroll` / `useTransform` for parallax orb animations. This allows each section to have a distinct ambient look without re-building patterns from scratch.

### Flip Cards (Education)
Education cards use `react-card-flip` with a custom front/back design. The front shows the school logo, degree, and minor badges. The back reveals GPA, date range, highlights (e.g., AP scores, ACT), and relevant coursework pills, all with school-branded accent gradients (Rose-Hulman crimson/silver, Mililani gold).

### Contact Form
Handled via **EmailJS** with a `useForm` custom hook that manages field state, validation, and submission status without any backend.

### Scroll UX
- `ScrollProgress.jsx` — thin progress bar at the top of the viewport driven by `window.scrollY`.
- `BackToTop.jsx` — FAB that appears after scrolling past the fold.
- `StatCounters.jsx` — animated count-up numbers (GPA, languages, projects, internships) triggered on scroll into view.

---

## Project Structure

```
src/
├── App.jsx                   # Root — BrowserRouter, ErrorBoundary, lazy section routing
├── main.jsx                  # Entry point + performance tracking init
├── styles.js                 # Shared Tailwind class constants
├── assets/                   # Images, logos, icons
├── components/
│   ├── canvas/               # Three.js / R3F scenes
│   ├── common/               # Shared UI primitives (retired)
│   ├── About.jsx             # Bio, company highlights, stat counters, focus areas
│   ├── Awards.jsx
│   ├── Contact.jsx           # EmailJS form + Earth canvas
│   ├── Education.jsx         # Flip cards (Rose-Hulman, Mililani HS)
│   ├── Experience.jsx        # Vertical timeline (Microsoft, Google, Indiana 211, etc.)
│   ├── Hero.jsx              # Animated intro + 3D computer
│   ├── Interests.jsx         # Life Outside Career hobby grid
│   ├── Navbar.jsx            # Responsive nav with mobile drawer
│   ├── Research.jsx
│   ├── SkillsMatrix.jsx      # Categorised skills table
│   ├── StatCounters.jsx
│   ├── Tech.jsx              # 3D ball grid of technologies
│   ├── Testimonials.jsx
│   ├── Volunteering.jsx
│   └── Works.jsx             # Filterable project cards
├── constants/
│   ├── index.js              # All section data (experiences, projects, education, etc.)
│   └── data.js               # Navigation links, resume URLs, contact info
├── hoc/
│   └── SectionWrapper.jsx    # Scroll-in animation + anchor HOC
├── hooks/
│   ├── useForm.js            # Form state + EmailJS submission
│   └── useMediaQuery.js      # Responsive breakpoint hook
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
