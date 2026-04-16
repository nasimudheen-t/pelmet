import React from "react";
import { ShieldCheck, HardHat, Scale, Truck, ChevronRight } from "lucide-react";
import { siteData } from "../data/siteData";
import { Link } from "react-router-dom";

//  Map icon names manually (VERY IMPORTANT)
const iconMap = {
  ShieldCheck,
  HardHat,
  Scale,
  Truck,
};

const Features = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Light Background */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-red-50 rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-50 rounded-full opacity-50 translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
            Why Choose Pelmet
          </span>

          <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Why Industry Leaders <span className="text-red-600">Choose Us</span>
          </h2>

          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            We combine decades of experience with modern technology to deliver
            durable plastic solutions.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.features.map((feature, idx) => {
            const Icon = iconMap[feature.icon];

            return (
              <div
                key={feature.title}
                className="relative p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-200 hover:shadow-md transition-all duration-300 group"
              >
                {/* Top line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm border border-slate-100 group-hover:bg-red-600 transition-colors duration-300">
                  {Icon && (
                    <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                  )}
                </div>

                {/* Index */}
                <span className="absolute top-5 right-5 text-3xl font-black text-slate-100 group-hover:text-red-100 transition-colors duration-300">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-red-600 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg mb-1">
              Ready to experience Pelmet quality?
            </p>
            <p className="text-red-200 text-sm">
              100% Virgin Plastic — Trusted across Kerala.
            </p>
          </div>

          <Link
            to="/products"
            className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-red-50 text-red-600 font-bold text-sm rounded-full transition group"
          >
            Explore Products
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
