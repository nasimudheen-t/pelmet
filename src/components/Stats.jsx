import React, { useEffect, useRef, useState } from 'react';
import { siteData } from '../data/siteData';

/* ✅ Lightweight Counter (no framer-motion) */
const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  // 👇 Detect when element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // 👇 Smooth counter animation
  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < value) {
        setCount(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [started, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl lg:text-6xl font-extrabold text-white mb-2 flex justify-center items-baseline">
        <span>{count}</span>
        <span className="text-primary-400 ml-1">{suffix}</span>
      </div>
    </div>
  );
};

/* ✅ Stats Section (clean, no motion) */
const Stats = () => {
  return (
    <section className="py-20 bg-slate-900 overflow-hidden relative">

      {/* Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {siteData.stats.map((stat) => (
            <div key={stat.label} className="group">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-slate-400 font-medium text-center group-hover:text-primary-400 transition-colors uppercase tracking-widest text-xs lg:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Stats;