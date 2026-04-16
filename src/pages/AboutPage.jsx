import React from 'react';
import About from '../components/About';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
  return (
    <main className="pt-20">
      <Helmet>
        <title>About Us | Best plastic manufacturer in kerala</title>
        <meta name="description" content="Learn more about the best plastic manufacturer in kerala, with over 10 years of experience and top-tier quality standards." />
      </Helmet>
      <div className="bg-slate-900 py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Company</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">Discover our history, values, and commitment to quality plastic manufacturing.</p>
      </div>
      <About />
    </main>
  );
};

export default AboutPage;
