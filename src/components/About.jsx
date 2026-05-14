import React, { useEffect, useRef, useState } from "react";
import { siteData } from "../data/siteData";

/* ✅ Lightweight Counter */
const AnimatedCounter = ({ value, suffix }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 1200;
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
    <div
      ref={ref}
      className="text-4xl font-extrabold text-primary-600 mb-1 flex items-baseline justify-center sm:justify-start"
    >
      <span>{count}</span>
      <span>{suffix}</span>
    </div>
  );
};

const About = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden relative">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT */}
          <div className="flex-1 transition-all duration-500">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {siteData.about.title}
            </h2>

            <p className="text-base text-slate-600 mb-10 leading-relaxed text-justify">
              {siteData.about.description}
            </p>

            <div className="grid grid-cols-3 gap-4 divide-x divide-slate-200">
              {siteData.about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center sm:items-start px-4 first:px-0"
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-slate-500 font-medium text-xs sm:text-sm text-center sm:text-left">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 relative w-full">
            <div className="relative z-10 w-full rounded-3xl overflow-hidden shadow-lg border border-white/20 bg-white">
              <img
                src={siteData.about.image}
                alt="About Pelmet"
                loading="lazy"
                width="600"
                height="500"
                className="w-full h-auto object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-200/30 rounded-2xl -z-10" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-indigo-200/30 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
