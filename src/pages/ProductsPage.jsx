import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";

import products from "../data/products";
import categories from "../constants/categories";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // ✅ useMemo to prevent unnecessary recalculation
  const filtered = useMemo(() => {
    return activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="pt-20 bg-white min-h-screen">
      <Helmet>
        <title>Best Plastic Manufacturer in Kerala | Pelmet</title>
        <meta
          name="description"
          content="Pelmet is a leading plastic manufacturer in Kerala providing high-quality plastic products for industrial and commercial use."
        />
        <meta
          name="keywords"
          content="plastic manufacturer Kerala, plastic products Kerala, Pelmet"
        />

        {/* Open Graph (for WhatsApp / Facebook) */}
        <meta
          property="og:title"
          content="Pelmet - Plastic Manufacturer Kerala"
        />
        <meta
          property="og:description"
          content="High-quality plastic products in Kerala."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/pelmet-new.png"
        />
        <meta property="og:url" content="https://yourdomain.com" />
      </Helmet>

      {/* Header */}
      <div className="border-b border-slate-100">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-slate-800">Our Products</h1>
          <p className="text-slate-500 mt-1">
            High-quality plastic products for everyday use
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-20 bg-white border-b border-slate-100 z-10">
        <div className="container mx-auto px-6">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  activeCategory === cat
                    ? "bg-slate-800 text-white"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-6 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-500">No products found</p>
          </div>
        ) : (
          <>
            <div className="text-sm text-slate-400 mb-4">
              Showing {filtered.length} products
            </div>

            {/* ✅ Clean grid (no animation wrapper) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default ProductsPage;
