import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
// import Stats from '../components/Stats';
import Contact from '../components/Contact';

const Testimonials = lazy(() => import('../components/Testimonials'));

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      {/* <Stats /> */}
      <Contact />
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading Testimonials...</div>}>
        <Testimonials />
      </Suspense>
    </main>
  );
};

export default Home;
