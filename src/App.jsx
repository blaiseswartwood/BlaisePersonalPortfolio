import { BrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { Navbar, Hero, StarsCanvas, Footer } from './components';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load components
const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const Experience = lazy(() => import('./components/Experience'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const Research = lazy(() => import('./components/Research'));
const Contact = lazy(() => import('./components/Contact'));

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
          <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
            </div>
            
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
            
            <Suspense fallback={<LoadingSpinner />}>
              <Education />
            </Suspense>
            
            <Suspense fallback={<LoadingSpinner />}>
              <Experience />
            </Suspense>
            
            <Suspense fallback={<LoadingSpinner />}>
              <Tech />
            </Suspense>
            
            <Suspense fallback={<LoadingSpinner />}>
              <Works />
            </Suspense>
            
            <Suspense fallback={<LoadingSpinner />}>
              <Research />
            </Suspense>
            
            <div className="relative z-0">
              <Suspense fallback={<LoadingSpinner />}>
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
