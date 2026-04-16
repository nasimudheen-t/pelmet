import React from 'react';
import Contact from '../components/Contact';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  return (
    <main className="pt-20">
      <Helmet>
        <title>Contact Us | Best Plastic Manufacturer in Kerala</title>
        <meta name="description" content="Get in touch with the best plastic manufacturer in Kerala for inquiries, quotes, and support." />
      </Helmet>
      
      {/* Hero Banner - Matching the red theme */}
      <div className="relative bg-gradient-to-br from-red-600 to-red-700 py-20 text-center text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-500/30 rounded-full blur-3xl" />
        
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-white/30 mx-auto mb-6 rounded-full" />
          <p className="text-red-100 max-w-2xl mx-auto text-lg">
            Our experts are ready to assist you with technical specifications and project planning.
          </p>
        </div>
      </div>
      
      <Contact />
    </main>
  );
};

export default ContactPage;