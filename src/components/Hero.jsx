import React from "react";
import { ShieldCheck, Zap, RefreshCw, Star } from "lucide-react";
import { Link } from "react-router-dom";
import products from "../data/products";
import { useEffect, useState } from "react";

const trustPoints = [
  { icon: ShieldCheck, label: "Advanced Manufacturing Standards" },
  { icon: Zap, label: "Strict Quality Control Process" },
  { icon: RefreshCw, label: "Reliable & Consistent Performance" },
  { icon: Star, label: "Trusted by Homes & Businesses" },
];

const stats = [
  { value: "5+", label: "Country's Clients" },
  { value: "10+", label: "Years of Experience" },
  { value: "99%", label: "Positive Feedback" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 2500); // change every 2.5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[100vh] sm:min-h-[90vh] flex items-center pt-20 sm:pt-16 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[100%] sm:w-[70%] md:w-[55%] h-[50%] sm:h-full bg-red-50 rounded-b-[40px] sm:rounded-bl-[60px] md:rounded-bl-[80px]" />
        <div className="hidden md:block absolute top-[20%] right-[10%] w-72 h-72 bg-red-100/60 rounded-full blur-3xl" />
        <div className="hidden md:block absolute bottom-[15%] left-[5%] w-48 h-48 bg-slate-100 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div className="flex flex-col justify-center text-left lg:text-left px-4 sm:px-0 max-w-md mx-auto lg:mx-0">
            {/* TAG */}
            <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 w-fit">
              100% Virgin Plastic Products
            </span>

            {/* HEADING */}
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-slate-900 leading-snug sm:leading-tight mb-3">
              Best Plastic <span className="text-red-600">Manufacturer</span> in
              Kerala
            </h1>

            {/* SUBTITLE */}
            <p className="text-sm sm:text-base text-slate-500 font-medium mb-2">
              Your Trusted Brand
            </p>

            {/* DESCRIPTION */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 border-l-2 border-red-200 pl-3">
              Pelmet is a best plastic manufacture in Kerala brand focused on
              making reliable and easy-to-use products.
            </p>

            {/* TRUST POINTS */}
            <ul className="space-y-3 mb-6">
              {trustPoints.map(({ icon: Icon, label }, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium"
                >
                  <span className="w-6 h-6 mt-[2px] rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <Icon className="w-3 h-3 text-red-600" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            {/* BUTTONS */}
            <div className="flex flex-col gap-3 w-full max-w-xs mx-auto lg:mx-0 sm:flex-row sm:max-w-none mb-8">
              <a
                href="https://wa.me/917510511113?text=Hello%2C%20I%20came%20across%20your%20website%20https%3A%2F%2Fpelmet.vercel.app%2F%20and%20I%27m%20interested%20in%20your%20products.%20Could%20you%20please%20share%20more%20details%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold rounded-full shadow-md"
              >
                Order Now
              </a>

              <Link
                to="/products"
                className="flex justify-center items-center px-5 py-2.5 border border-slate-300 text-slate-700 text-xs sm:text-sm font-bold rounded-full"
              >
                Shop All Products
              </Link>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:gap-6 justify-center lg:justify-start">
              {stats.map(({ value, label }, i) => (
                <div key={i} className="text-center">
                  <p className="text-xl sm:text-2xl font-extrabold text-red-600">
                    {value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT */}
          <div className="relative flex items-center justify-center mt-12 sm:mt-10 lg:mt-0">
            {/* Circles (centered properly) */}
            <div className="absolute w-[200px] sm:w-[300px] md:w-[380px] h-[200px] sm:h-[300px] md:h-[380px] rounded-full border border-dashed border-red-200 animate-spin" />
            <div className="absolute w-[160px] sm:w-[240px] md:w-[300px] h-[160px] sm:h-[240px] md:h-[300px] rounded-full bg-red-100/50" />

            {/* SLIDER WRAPPER (KEY FIX) */}
            <div className="relative z-10 flex items-center justify-center w-[200px] sm:w-[300px] md:w-[420px] h-[200px] sm:h-[300px] md:h-[420px] overflow-hidden">
              {/* INNER TRACK */}
              <div className="flex items-center gap-6 animate-scroll">
                {[...products, ...products].map((item, i) => (
                  <img
                    key={i}
                    src={item.image}
                    alt={item.name}
                    className="w-[110px] sm:w-[160px] md:w-[200px] object-contain drop-shadow-xl shrink-0"
                  />
                ))}
              </div>

              {/* Soft fade edges */}
              <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
            </div>

            {/* BADGES */}
            <div className="hidden sm:flex absolute top-4 left-0 bg-white rounded-xl shadow px-3 py-2 text-[10px] items-center gap-2">
              Best in Kerala
            </div>

            <div className="hidden sm:block absolute bottom-6 right-0 bg-red-600 rounded-xl px-3 py-2 text-[10px] text-white">
              100% Pure Plastic
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
