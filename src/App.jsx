import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { Navbar, Hero, StarsCanvas, Footer } from './components';
import LoadingSpinner from './components/LoadingSpinner';
import MobileLoader from './components/MobileLoader';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import SectionBackground from './components/SectionBackground';
import { NeuralNetworkBackground } from './components/canvas';
import useMediaQuery from './hooks/useMediaQuery';

// Lazy load components
const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const Experience = lazy(() => import('./components/Experience'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const Research = lazy(() => import('./components/Research'));
const Contact = lazy(() => import('./components/Contact'));
const Awards = lazy(() => import('./components/Awards'));
const SkillsMatrix = lazy(() => import('./components/SkillsMatrix'));
const Blog = lazy(() => import('./components/Blog'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Interests = lazy(() => import('./components/Interests'));
const BlogPost = lazy(() => import('./components/BlogPost'));

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
        <NeuralNetworkBackground>
          <Suspense fallback={<LoadingComponent />}>
            <About />
          </Suspense>
        </NeuralNetworkBackground>

        {/* Experience — most impactful section for SWE credibility */}
        <SectionBackground variant="dots">
          <Suspense fallback={<LoadingComponent />}>
            <Experience />
          </Suspense>
        </SectionBackground>

        {/* Skills Matrix + Tech — combined */}
        <SectionBackground variant="lines">
          <Suspense fallback={<LoadingComponent />}>
            <SkillsMatrix />
            <Tech />
          </Suspense>
        </SectionBackground>

        {/* Awards & Achievements — spotlight section */}
        <SectionBackground variant="pulse">
          <Suspense fallback={<LoadingComponent />}>
            <Awards />
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

        {/* Blog */}
        <SectionBackground variant="lines">
          <Suspense fallback={<LoadingComponent />}>
            <Blog />
          </Suspense>
        </SectionBackground>

        {/* Testimonials */}
        <SectionBackground variant="pulse">
          <Suspense fallback={<LoadingComponent />}>
            <Testimonials />
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
          <StarsCanvas />
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
          <Route
            path="/blog/:slug"
            element={
              <Suspense fallback={<LoadingComponent />}>
                <BlogPost />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App
