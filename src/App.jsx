import { Suspense, lazy } from 'react';

import { Navbar, Hero, Footer } from './components';
import LoadingSpinner from './components/LoadingSpinner';
import MobileLoader from './components/MobileLoader';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import SectionAtmosphere from './components/SectionAtmosphere';
import DeferredSection from './components/DeferredSection';
import useMediaQuery from './hooks/useMediaQuery';

// Lazy load heavy components
const NeuralNetworkBg = lazy(() => 
  import('./components/canvas/NeuralNetwork').then(mod => ({
    default: mod.NeuralNetworkBackground
  }))
);

// Lazy load page components
const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/EducationLedger'));
const Experience = lazy(() => import('./components/Experience'));
const Works = lazy(() => import('./components/Works'));
const Research = lazy(() => import('./components/ResearchGallery'));
const Awards = lazy(() => import('./components/Awards'));
const SkillsMatrix = lazy(() => import('./components/SkillsMatrix'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Interests = lazy(() => import('./components/Interests'));
const Volunteering = lazy(() => import('./components/Volunteering'));

const DeferredPortfolioSection = ({
  id,
  variant,
  component: Component,
  loadingComponent: LoadingComponent,
  minHeight,
}) => (
  <DeferredSection id={id} minHeight={minHeight}>
    <SectionAtmosphere variant={variant}>
      <Suspense fallback={<LoadingComponent />}>
        <Component />
      </Suspense>
    </SectionAtmosphere>
  </DeferredSection>
);

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

        <DeferredSection id="about" minHeight="90vh" rootMargin="1200px 0px">
          <Suspense fallback={<div className="min-h-[90vh]" />}>
            <NeuralNetworkBg>
              <Suspense fallback={<LoadingComponent />}>
                <About />
              </Suspense>
            </NeuralNetworkBg>
          </Suspense>
        </DeferredSection>

        <DeferredPortfolioSection id="work" variant="dots" component={Experience} loadingComponent={LoadingComponent} minHeight="110vh" />
        <DeferredPortfolioSection id="skills" variant="lines" component={SkillsMatrix} loadingComponent={LoadingComponent} />
        <DeferredPortfolioSection id="education" variant="grid" component={Education} loadingComponent={LoadingComponent} />
        <DeferredPortfolioSection id="projects" variant="mesh" component={Works} loadingComponent={LoadingComponent} minHeight="110vh" />
        <DeferredPortfolioSection id="research" variant="dots" component={Research} loadingComponent={LoadingComponent} />
        <DeferredPortfolioSection id="awards" variant="grid" component={Awards} loadingComponent={LoadingComponent} />
        <DeferredPortfolioSection id="testimonials" variant="lines" component={Testimonials} loadingComponent={LoadingComponent} />
        <DeferredPortfolioSection id="volunteering" variant="pulse" component={Volunteering} loadingComponent={LoadingComponent} />
        <DeferredPortfolioSection id="interests" variant="grid" component={Interests} loadingComponent={LoadingComponent} />

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <HomePage />
    </ErrorBoundary>
  );
}

export default App
