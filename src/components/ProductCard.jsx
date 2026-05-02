import React from "react";
import { ChevronRight, ShoppingCart, Shield, Zap } from "lucide-react";

const ProductCard = React.memo(({ product }) => {
  const phoneNumber = "917510511113";

  const productLink = `https://pelmet.net/products/${product.slug}`;
  const message = `Hello, I'm interested in your product: ${product.name}.
Product Link: ${productLink}`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 hover:border-red-200 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image Section */}
      <div className="relative bg-gradient-to-br from-red-50/80 to-red-100/40 flex items-center justify-center h-56 px-6 pt-6 overflow-hidden">
        {/* Decorative Background (STATIC - no animation) */}
        <div className="absolute w-32 h-32 rounded-full border border-red-200/20" />
        <div className="absolute w-24 h-24 rounded-full bg-red-100/30" />

        {/* Tag */}
        {product.tag && (
          <span
            className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-1 rounded-full z-10 ${
              product.tag === "New"
                ? "bg-green-100 text-green-700 border border-green-200"
                : product.tag === "Bestseller"
                  ? "bg-amber-100 text-amber-700 border border-amber-200"
                  : "bg-red-100 text-red-600 border border-red-200"
            }`}
          >
            {product.tag}
          </span>
        )}

        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          width="200"
          height="200"
          className="h-44 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105 relative z-10"
          loading="lazy"
          onError={(e) => {
            e.target.src = "/fallback.webp"; // 👉 use local fallback image
          }}
        />
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category */}
        <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 mb-2">
          {product.category || "Premium Product"}
        </span>

        {/* Name */}
        <h3 className="text-sm font-bold text-slate-800 mb-2 leading-snug min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* Description */}
        {product.shortDesc && (
          <p className="text-xs text-slate-500 mb-3 line-clamp-2">
            {product.shortDesc}
          </p>
        )}

        {/* Badges */}
        <div className="flex gap-2 mb-4">
          <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-full">
            <Shield className="w-3 h-3 text-red-500" />
            <span className="text-[9px] text-slate-600 font-medium">
              Virgin
            </span>
          </div>
          <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-full">
            <Zap className="w-3 h-3 text-red-500" />
            <span className="text-[9px] text-slate-600 font-medium">
              Durable
            </span>
          </div>
        </div>

        {/* CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 w-full 
             px-4 py-3 sm:py-2.5 
             rounded-full bg-red-600 hover:bg-red-700 
             text-white text-sm sm:text-xs font-semibold 
             transition-all duration-200 
             whitespace-nowrap overflow-hidden"
        >
          <ShoppingCart className="w-4 h-4 flex-shrink-0" />

          <span className="truncate">Order on WhatsApp</span>

          <ChevronRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
});

export default ProductCard;
