import { BrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { Navbar, Hero, StarsCanvas, Footer } from './components';
import LoadingSpinner from './components/LoadingSpinner';
import MobileLoader from './components/MobileLoader';
import ErrorBoundary from './components/ErrorBoundary';
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
          <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
            </div>
            
            <Suspense fallback={<LoadingComponent />}>
              <About />
            </Suspense>
            
            <Suspense fallback={<LoadingComponent />}>
              <Education />
            </Suspense>
            
            <Suspense fallback={<LoadingComponent />}>
              <Experience />
            </Suspense>
            
            <Suspense fallback={<LoadingComponent />}>
              <Tech />
            </Suspense>
            
            <Suspense fallback={<LoadingComponent />}>
              <Works />
            </Suspense>
            
            <Suspense fallback={<LoadingComponent />}>
              <Research />
            </Suspense>
            
            <div className="relative z-0">
              <Suspense fallback={<LoadingComponent />}>
                <Contact />
              </Suspense>
              <StarsCanvas />
            </div>
            
            <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App
