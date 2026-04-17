// // src/pages/BlogDetail.jsx

// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// const BlogDetail = () => {
//   const [commentData, setCommentData] = useState({
//     name: "",
//     email: "",
//     website: "",
//     comment: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   // Structured data for SEO
//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "BlogPosting",
//     headline: "What Makes Pelmet the Best Plastic Manufacturer In Kerala?",
//     description:
//       "Discover why Pelmet is Kerala's leading plastic manufacturer with 250+ products, eco-friendly manufacturing, and pan-India reach.",
//     author: {
//       "@type": "Organization",
//       name: "Pelmet",
//     },
//     datePublished: "2024-03-15",
//     image: "https://pelmet.com/images/plastic-manufacturing-kerala.jpg",
//     publisher: {
//       "@type": "Organization",
//       name: "Pelmet",
//       logo: {
//         "@type": "ImageObject",
//         url: "https://pelmet.com/logo.png",
//       },
//     },
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate API call - Replace with actual endpoint
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       console.log("Comment submitted:", commentData);
//       setSubmitStatus({
//         type: "success",
//         message: "Comment posted successfully!",
//       });
//       setCommentData({ name: "", email: "", website: "", comment: "" });

//       // Clear success message after 3 seconds
//       setTimeout(() => setSubmitStatus(null), 3000);
//     } catch (error) {
//       setSubmitStatus({
//         type: "error",
//         message: "Failed to post comment. Please try again.",
//       });
//       setTimeout(() => setSubmitStatus(null), 3000);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e) => {
//     setCommentData({
//       ...commentData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Smooth scroll to top on mount
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <title>
//           Pelmet - Best Plastic Manufacturer in Kerala | Quality Plastic
//           Products
//         </title>
//         <meta
//           name="description"
//           content="Discover why Pelmet is Kerala's leading plastic manufacturer with 250+ products, 100% virgin plastic, eco-friendly manufacturing, and pan-India reach. ISO certified quality."
//         />
//         <meta
//           name="keywords"
//           content="plastic manufacturer Kerala, plastic products India, Pelmet, best plastic company, virgin plastic products, eco-friendly plastic manufacturing"
//         />
//         <meta name="author" content="Pelmet" />
//         <meta name="robots" content="index, follow" />
//         <meta
//           property="og:title"
//           content="What Makes Pelmet the Best Plastic Manufacturer In Kerala?"
//         />
//         <meta
//           property="og:description"
//           content="Discover why Pelmet is Kerala's leading plastic manufacturer with 250+ products and ISO certified quality."
//         />
//         <meta property="og:type" content="article" />
//         <meta
//           property="og:url"
//           content="https://pelmet.com/blog/best-plastic-manufacturer-kerala"
//         />
//         <meta
//           property="og:image"
//           content="https://pelmet.com/images/plastic-manufacturing-og.jpg"
//         />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content="Pelmet - Best Plastic Manufacturer in Kerala"
//         />
//         <meta
//           name="twitter:description"
//           content="Leading plastic manufacturer with 250+ products and eco-friendly manufacturing."
//         />
//         <link
//           rel="canonical"
//           href="https://pelmet.com/blog/best-plastic-manufacturer-kerala"
//         />
//         <script type="application/ld+json">
//           {JSON.stringify(structuredData)}
//         </script>
//       </Helmet>

//       <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//         {/* Breadcrumb for SEO */}
//         <nav
//           className="bg-white border-b border-gray-100"
//           aria-label="Breadcrumb"
//         >
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//             <ol className="flex items-center space-x-2 text-sm text-gray-600">
//               <li>
//                 <Link to="/" className="hover:text-red-600 transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li className="text-gray-400">/</li>
//               <li>
//                 <Link
//                   to="/blog"
//                   className="hover:text-red-600 transition-colors"
//                 >
//                   Blog
//                 </Link>
//               </li>
//               <li className="text-gray-400">/</li>
//               <li className="text-gray-900 font-medium">
//                 Best Plastic Manufacturer in Kerala
//               </li>
//             </ol>
//           </div>
//         </nav>

//         {/* Hero Section with Lazy Loading */}
//         <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
//           {/* Header */}
//           <header className="mb-8 lg:mb-12">
//             <div className="flex flex-wrap items-center gap-3 mb-4">
//               <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
//                 <svg
//                   className="w-3.5 h-3.5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
//                   />
//                 </svg>
//                 Manufacturing Excellence
//               </span>
//               <span className="text-sm text-gray-500">Updated: March 2024</span>
//             </div>

//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//               What Makes Pelmet the Best Plastic Manufacturer In Kerala?
//             </h1>

//             {/* Author and Meta Info */}
//             <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 border-t border-b border-gray-100 py-4">
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-white text-sm font-bold">
//                   P
//                 </div>
//                 <div>
//                   <div className="font-medium text-gray-900">Pelmet Team</div>
//                   <div className="text-xs text-gray-500">
//                     Manufacturing Experts
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3 ml-auto">
//                 <div className="flex items-center gap-1">
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                     />
//                   </svg>
//                   <span>March 15, 2024</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>8 min read</span>
//                 </div>
//               </div>
//             </div>
//           </header>

//           {/* Table of Contents - Improved SEO and UX */}
//           <nav
//             className="bg-gray-50 rounded-xl p-6 mb-8"
//             aria-label="Table of contents"
//           >
//             <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
//               <svg
//                 className="w-5 h-5 text-red-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//               Table of Contents
//             </h2>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a
//                   href="#legacy"
//                   className="text-gray-700 hover:text-red-600 transition-colors"
//                 >
//                   ✅ A Legacy of Trust and Quality
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#raw-materials"
//                   className="text-gray-700 hover:text-red-600 transition-colors"
//                 >
//                   ✅ Top-Grade Raw Materials
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#facility"
//                   className="text-gray-700 hover:text-red-600 transition-colors"
//                 >
//                   ✅ Advanced Manufacturing Facility
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#products"
//                   className="text-gray-700 hover:text-red-600 transition-colors"
//                 >
//                   ✅ Wide Range of Products
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#eco-friendly"
//                   className="text-gray-700 hover:text-red-600 transition-colors"
//                 >
//                   ✅ Eco-Friendly Manufacturing
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#reach"
//                   className="text-gray-700 hover:text-red-600 transition-colors"
//                 >
//                   ✅ Pan-India Reach
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#export"
//                   className="text-gray-700 hover:text-red-600 transition-colors"
//                 >
//                   ✅ Exporting Service
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#pricing"
//                   className="text-gray-700 hover:text-red-600 transition-colors"
//                 >
//                   ✅ Affordable Price Range
//                 </a>
//               </li>
//             </ul>
//           </nav>

//           {/* Main Content */}
//           <div className="prose prose-lg prose-red max-w-none">
//             <p className="text-lg text-gray-700 leading-relaxed mb-6">
//               Pelmet is the leading plastic manufacturer in Kerala, India. Being
//               the best one in such a highly competitive industry is not a simple
//               task. It is the result of years of consistent efforts, building
//               trust and providing high-quality products. In this blog we discuss
//               what makes Pelmet the number 1 Indian plastic manufacturing
//               company.
//             </p>

//             <h2
//               className="text-2xl font-bold text-gray-900 mt-8 mb-4"
//               id="overview"
//             >
//               What Makes Pelmet the Best Plastic Manufacturer In Kerala?
//             </h2>

//             <section id="legacy">
//               <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
//                 ✅ A Legacy of Trust and Quality
//               </h3>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 Pelmet has built a strong legacy and trust through years of
//                 industry experience and satisfied customers. We use 100% virgin
//                 plastic to create our products. We use high quality granules and
//                 imported machines to ensure quality in production. We provide a
//                 wide range of products for commercial and household use. We also
//                 export plastic products to different countries.
//               </p>
//             </section>

//             <section id="raw-materials">
//               <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
//                 ✅ Top-Grade Raw Materials
//               </h3>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 Pelmet uses only the finest raw materials. We use plastic
//                 granules collected from trusted vendors. To ensure our products
//                 are safe, non-toxic, and built to last, we use 100% virgin
//                 plastic. Each product goes through individual quality checking.
//                 Pelmet is also ISO certified.
//               </p>
//             </section>

//             <section id="facility">
//               <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
//                 ✅ Advanced Manufacturing Facility
//               </h3>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 Pelmet is equipped with modern machinery and a highly skilled
//                 workforce. We use both imported and indigenous machines.
//                 Machines like Windsor convert granules into smooth paste using
//                 high heat, which is then moulded into products.
//               </p>
//             </section>

//             <section id="products">
//               <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
//                 ✅ Wide Range of Products
//               </h3>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 Pelmet offers around 250 products for both household and
//                 commercial use. Each product requires different moulds. We also
//                 provide branding facilities for other businesses under their
//                 brand name.
//               </p>
//             </section>

//             <section id="eco-friendly">
//               <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
//                 ✅ Eco-Friendly Manufacturing
//               </h3>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 Sustainability is a key commitment. All products are 100%
//                 recyclable, and industrial waste is properly managed.
//               </p>
//             </section>

//             <section id="reach">
//               <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
//                 ✅ Pan-India Reach
//               </h3>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 Pelmet's distribution network extends throughout India with
//                 timely delivery and strong customer support.
//               </p>
//             </section>

//             <section id="export">
//               <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
//                 ✅ Exporting Service
//               </h3>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 Pelmet exports products to various countries, meeting
//                 international quality standards.
//               </p>
//             </section>

//             <section id="pricing">
//               <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
//                 ✅ Affordable Price Range
//               </h3>
//               <p className="text-gray-700 leading-relaxed mb-4">
//                 Pelmet offers high-quality products at reasonable and
//                 competitive prices.
//               </p>
//             </section>

//             <section id="conclusion">
//               <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
//                 Conclusion
//               </h2>
//               <p className="text-gray-700 leading-relaxed mb-6">
//                 High-quality products and satisfied customers helped Pelmet gain
//                 a strong position in the plastic manufacturing industry. If
//                 you're looking for a reliable plastic manufacturer, Pelmet is
//                 the best choice.
//               </p>
//             </section>
//           </div>

//           {/* Share Section - Social Proof */}
//           <div className="border-t border-b border-gray-100 py-6 my-8">
//             <div className="flex flex-wrap items-center justify-between gap-4">
//               <span className="text-sm font-medium text-gray-700">
//                 Share this article:
//               </span>
//               <div className="flex gap-2">
//                 <button
//                   className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
//                   aria-label="Share on Twitter"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
//                   </svg>
//                 </button>
//                 <button
//                   className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
//                   aria-label="Share on LinkedIn"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//                     <rect x="2" y="9" width="4" height="12" />
//                     <circle cx="4" cy="4" r="2" />
//                   </svg>
//                 </button>
//                 <button
//                   className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
//                   aria-label="Share on Facebook"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Comments Section - Improved UX */}
//           <section className="mt-12" aria-label="Comments">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">
//               Leave a Reply
//             </h2>
//             <p className="text-sm text-gray-600 mb-6">
//               Your email address will not be published. Required fields are
//               marked <span className="text-red-600">*</span>
//             </p>

//             {submitStatus && (
//               <div
//                 className={`mb-6 p-4 rounded-lg ${submitStatus.type === "success" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"}`}
//               >
//                 {submitStatus.message}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="comment"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Comment <span className="text-red-600">*</span>
//                 </label>
//                 <textarea
//                   id="comment"
//                   name="comment"
//                   rows="5"
//                   required
//                   value={commentData.comment}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
//                   placeholder="Share your thoughts..."
//                 />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Name <span className="text-red-600">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     required
//                     value={commentData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700 mb-2"
//                   >
//                     Email <span className="text-red-600">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     value={commentData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="website"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Website
//                 </label>
//                 <input
//                   type="text"
//                   id="website"
//                   name="website"
//                   value={commentData.website}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
//                   placeholder="https://example.com"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <svg
//                       className="w-5 h-5 animate-spin"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                     Posting...
//                   </>
//                 ) : (
//                   <>
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//                       />
//                     </svg>
//                     Post Comment
//                   </>
//                 )}
//               </button>
//             </form>
//           </section>

//           {/* Footer Note */}
//           <footer className="text-center mt-16 pt-8 border-t border-gray-100">
//             <p className="text-sm text-gray-500">
//               Pelmet is a trusted plastic brand focused on making reliable
//               products for everyday and business needs.
//             </p>
//             <p className="text-xs text-gray-400 mt-2">
//               © 2024 Pelmet. All rights reserved.
//             </p>
//           </footer>
//         </article>
//       </div>
//     </>
//   );
// };

// export default BlogDetail;
import React from 'react'

const BlogDetail = () => {
  return (
    <div>BlogDetail</div>
  )
}

export default BlogDetail