import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 overflow-x-hidden flex flex-col">
          <Helmet>
            <title>Best plastic manufacturer in kerala</title>
            <meta name="description" content="Premium plastic manufacturing services specializing in high-quality PVC pipes, molded sheets, and industrial fittings. ISO certified and reliable." />
            <meta name="keywords" content="plastic manufacturing, PVC pipes, industrial plastic, pelmet, plastic sheets, manufacturing company" />
          </Helmet>

          <Navbar />
          
          <div className="flex-1">
            <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </div>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;