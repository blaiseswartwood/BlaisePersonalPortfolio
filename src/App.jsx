import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Education, Experience, Research, Hero, Navbar, Tech, Works,
StarsCanvas, Footer} from './components';

const App = () => {
  return (
    <BrowserRouter>
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
            </div>
            <About />
            <Education />
            <Experience />
            <Tech />
            <Works />
            <Research />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App
