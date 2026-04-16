import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { Navbar, Hero, Footer } from './components';
import LoadingSpinner from './components/LoadingSpinner';
import MobileLoader from './components/MobileLoader';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import SectionBackground from './components/SectionBackground';
import useMediaQuery from './hooks/useMediaQuery';

// Lazy load heavy components
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));
const NeuralNetworkBg = lazy(() => 
  import('./components/canvas/NeuralNetwork').then(mod => ({
    default: mod.NeuralNetworkBackground
  }))
);

// Lazy load page components
const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const Experience = lazy(() => import('./components/Experience'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const Research = lazy(() => import('./components/Research'));
const Contact = lazy(() => import('./components/Contact'));
const Awards = lazy(() => import('./components/Awards'));
const SkillsMatrix = lazy(() => import('./components/SkillsMatrix'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Interests = lazy(() => import('./components/Interests'));
const Volunteering = lazy(() => import('./components/Volunteering'));

const HomePage = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const LoadingComponent = isMobile ? MobileLoader : LoadingSpinner;

  return (
    <>
      <ScrollProgress />
      <div className="relative z-0">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* About with animated stat counters */}
        <Suspense fallback={<div className="h-screen" />}>
          <NeuralNetworkBg>
            <Suspense fallback={<LoadingComponent />}>
              <About />
            </Suspense>
          </NeuralNetworkBg>
        </Suspense>

        {/* Experience — most impactful section for SWE credibility */}
        <SectionBackground variant="dots">
          <Suspense fallback={<LoadingComponent />}>
            <Experience />
          </Suspense>
        </SectionBackground>

        {/* Skills Matrix */}
        <SectionBackground variant="lines">
          <Suspense fallback={<LoadingComponent />}>
            <SkillsMatrix />
          </Suspense>
        </SectionBackground>

        {/* Technologies — 3D floating balls */}
        <SectionBackground variant="pulse">
          <Suspense fallback={<LoadingComponent />}>
            <Tech />
          </Suspense>
        </SectionBackground>

        {/* Education */}
        <SectionBackground variant="grid">
          <Suspense fallback={<LoadingComponent />}>
            <Education />
          </Suspense>
        </SectionBackground>

        {/* Projects with filtering */}
        <SectionBackground variant="mesh">
          <Suspense fallback={<LoadingComponent />}>
            <Works />
          </Suspense>
        </SectionBackground>

        {/* Research */}
        <SectionBackground variant="dots">
          <Suspense fallback={<LoadingComponent />}>
            <Research />
          </Suspense>
        </SectionBackground>

        {/* Awards & Achievements */}
        <SectionBackground variant="grid">
          <Suspense fallback={<LoadingComponent />}>
            <Awards />
          </Suspense>
        </SectionBackground>

        {/* Testimonials */}
        <SectionBackground variant="lines">
          <Suspense fallback={<LoadingComponent />}>
            <Testimonials />
          </Suspense>
        </SectionBackground>

        {/* Volunteering & Leadership */}
        <SectionBackground variant="pulse">
          <Suspense fallback={<LoadingComponent />}>
            <Volunteering />
          </Suspense>
        </SectionBackground>

        {/* Life Outside Career */}
        <SectionBackground variant="grid">
          <Suspense fallback={<LoadingComponent />}>
            <Interests />
          </Suspense>
        </SectionBackground>

        {/* Contact */}
        <div className="relative z-0">
          <Suspense fallback={<LoadingComponent />}>
            <Contact />
          </Suspense>
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </div>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

const App = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const LoadingComponent = isMobile ? MobileLoader : LoadingSpinner;

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App
