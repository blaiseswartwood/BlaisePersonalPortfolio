import { BrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { Navbar, Hero, StarsCanvas, Footer } from './components';
import LoadingSpinner from './components/LoadingSpinner';
import MobileLoader from './components/MobileLoader';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import SectionBackground from './components/SectionBackground';
import useMediaQuery from './hooks/useMediaQuery';

// Lazy load components
const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const Experience = lazy(() => import('./components/Experience'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const Research = lazy(() => import('./components/Research'));
const Contact = lazy(() => import('./components/Contact'));

const App = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const LoadingComponent = isMobile ? MobileLoader : LoadingSpinner;

  return (
    <ErrorBoundary>
      <BrowserRouter>
          <ScrollProgress />
          <div className="relative z-0">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
            </div>
            
            <SectionBackground variant="aurora">
              <Suspense fallback={<LoadingComponent />}>
                <About />
              </Suspense>
            </SectionBackground>
            
            <SectionBackground variant="dots">
              <Suspense fallback={<LoadingComponent />}>
                <Education />
              </Suspense>
            </SectionBackground>
            
            <SectionBackground variant="grid">
              <Suspense fallback={<LoadingComponent />}>
                <Experience />
              </Suspense>
            </SectionBackground>
            
            <SectionBackground variant="pulse">
              <Suspense fallback={<LoadingComponent />}>
                <Tech />
              </Suspense>
            </SectionBackground>
            
            <SectionBackground variant="lines">
              <Suspense fallback={<LoadingComponent />}>
                <Works />
              </Suspense>
            </SectionBackground>
            
            <SectionBackground variant="mesh">
              <Suspense fallback={<LoadingComponent />}>
                <Research />
              </Suspense>
            </SectionBackground>
            
            <div className="relative z-0">
              <Suspense fallback={<LoadingComponent />}>
                <Contact />
              </Suspense>
              <StarsCanvas />
            </div>
            
            <Footer />
            <BackToTop />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App
