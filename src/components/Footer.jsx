import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";
import { siteData } from "../data/siteData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/people/Pelmet-foursco/61576391092460/",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/pelmet_",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/917510511113",
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 relative">
      {/* Top subtle gradient line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      <div className="container-custom">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* BRAND */}
          <div className="space-y-5">
            <img
              src="/images/pelmet-logo.webp"
              alt="Pelmet Logo"
              loading="lazy"
              className="h-10 w-auto object-contain"
              
            />

            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              {siteData.footer.description}
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-slate-800/60 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-600 hover:border-primary-600 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-3">
              {siteData.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-primary-400 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">
              Contact
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 mt-1 text-primary-500" />
                <span className="text-slate-400 leading-relaxed">
                  {siteData.footer.contact.address}
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-primary-500" />
                <a
                  href="tel:+917510511113"
                  className="hover:text-primary-400 transition"
                >
                  +91 75105 11113
                </a>
              </li>

              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-primary-500" />
                <span>{siteData.footer.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* EXTRA (Trust / CTA optional) */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">
              About
            </h4>

            <p className="text-sm text-slate-400 leading-relaxed">
              Delivering high-quality plastic manufacturing solutions with
              modern design standards and durability.
            </p>

            <div className="mt-5">
              <button
                onClick={scrollToTop}
                
                className="inline-flex items-center gap-2 text-xs text-primary-400 hover:text-white transition"
              >
                Back to top
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Pelmet Modern Manufacturing. All rights
            reserved.
          </p>

          <div className="flex gap-5 text-xs">
            <a href="#" className="text-slate-500 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
