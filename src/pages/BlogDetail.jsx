import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Comments = lazy(() => import("../components/Comments"));

const BlogDetail = () => {
  return (
    <>
      <Helmet>
        <title>Uses of Plastic Products | Pelmet Kerala</title>
        <meta
          name="description"
          content="Explore the uses of plastic products in home and industry with Pelmet, Kerala's leading plastic manufacturer."
        />
      </Helmet>

      <div className="bg-gray-50 min-h-screen">
        {/* HERO */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 mt-20">
          {" "}
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Uses of Plastic Products in Home and Industry
            </h1>
            <p className="mt-4 text-red-100 max-w-2xl">
              Durable, affordable, and versatile plastic solutions for modern
              life.
            </p>
          </div>
        </section>

        {/* BREADCRUMB */}
        <div className="max-w-5xl mx-auto px-4 py-4 text-sm text-gray-500">
          <Link to="/">Home</Link> / <Link to="/blog">Blog</Link>
        </div>

        {/* CONTENT */}
        <article className="max-w-4xl mx-auto px-4 pb-16">
          {/* INTRO */}
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Uses of Plastic Products are an essential part of modern life,
              playing a major role in both households and industries. From
              everyday storage containers and kitchenware to industrial
              packaging, pipes, and custom components, plastic products offer
              durability, affordability, and versatility.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Pelmet, a leading plastic manufacturer in Kerala, we specialize
              in high-quality products made from 100% virgin plastic, ensuring
              safety, strength, and purity for every application.
            </p>
          </div>

          {/* PARAGRAPHS */}
          <div className="space-y-6 text-gray-700 leading-relaxed mb-10">
            <p>
              The growing uses of plastic products have transformed the way we
              store, transport, and protect goods in daily life. Their
              lightweight nature, resistance to corrosion, and long-lasting
              performance make them ideal for a wide range of applications.
            </p>

            <p>
              Plastic is one of the most versatile materials used in our daily
              lives. From household essentials to industrial tools, plastic
              products offer durability, affordability, and efficiency.
            </p>
          </div>

          {/* HOME USE */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Plastic Products in Everyday Home Use
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Storage Containers",
                  desc: "Kitchen containers and storage boxes made from food-grade plastic keep items fresh and safe.",
                },
                {
                  title: "Furniture & Accessories",
                  desc: "Chairs, baskets, and racks are affordable, durable, and easy to maintain.",
                },
                {
                  title: "Kitchenware",
                  desc: "Plates, bottles, and lunch boxes are safe, heat-resistant, and convenient.",
                },
                {
                  title: "Cleaning Tools",
                  desc: "Buckets, mugs, and brushes make daily cleaning efficient.",
                },
                {
                  title: "Child-Safe Products",
                  desc: "Virgin plastic ensures safety for baby products and toys.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* INDUSTRIAL */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Industrial Uses of Plastic
            </h2>

            <div className="space-y-4">
              {[
                "Packaging solutions like containers and wraps",
                "Custom molded components for machinery",
                "Pipes and fittings for plumbing and irrigation",
                "Pallets and crates for transport",
                "Safety equipment like helmets and panels",
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* BENEFITS */}
          <section className="mb-12 bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Why Use Virgin Plastic?
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>No contamination</li>
              <li>High strength and durability</li>
              <li>Glossy, smooth finish</li>
              <li>Safe for food and medical use</li>
              <li>Better manufacturing consistency</li>
            </ul>
          </section>

          {/* CONCLUSION */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Conclusion
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Plastic products have become indispensable in modern life. Pelmet
              continues to lead in providing high-quality plastic solutions for
              both home and industrial needs.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-red-600 text-white rounded-2xl p-8 text-center mb-12">
            <h3 className="text-xl font-bold mb-2">
              Need Reliable Plastic Products?
            </h3>
            <p className="mb-4">
              Contact Pelmet today for high-quality plastic solutions.
            </p>
            <Link
              to="/contact"
              className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold"
            >
              Contact Now
            </Link>
          </div>

          {/* TAGS */}
          <div className="text-sm text-gray-500 mb-10">
            Tagged: Household Plastic Items, Plastic Products Kerala, Uses of
            Plastic Product
          </div>

          {/* COMMENTS */}
          <Suspense fallback={<p>Loading comments...</p>}>
            <Comments />
          </Suspense>
        </article>
      </div>
    </>
  );
};

export default BlogDetail;
