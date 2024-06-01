import { BrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";

// Dynamic imports
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const Tech = lazy(() => import("./components/Tech"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const HowWeDo = lazy(() => import("./components/HowWeDo"));
const Services = lazy(() => import("./components/Services"));
const Pricing = lazy(() => import("./components/Pricing"));
const FAQ = lazy(() => import("./components/FAQ"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Tech />
          <HowWeDo />
          <Services />
          <Pricing />
          <FAQ />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
