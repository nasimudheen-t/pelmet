import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteData } from "../data/siteData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass h-16 fixed"
          : "bg-transparent h-20 fixed md:fixed relative"
      }`}
    >
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/pelmet-logo.webp"
            alt="Pelmet Logo"
            className="h-10 md:h-12 w-auto object-contain"
            width="120"
            height="50"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {siteData.navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                to={item.href}
                className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors duration-200"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu (CSS transition instead of motion) */}
      <div
  className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg transition-all duration-300 ${
    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
  }`}
>
  <div className="container-custom py-6 flex flex-col gap-4">
    {siteData.navigation.map((item) => (
      <Link
        key={item.name}
        to={item.href}
        className="text-lg font-medium text-slate-600"
        onClick={() => setIsOpen(false)}
      >
        {item.name}
      </Link>
    ))}
  </div>
</div>
    </nav>
  );
};

export default Navbar;
