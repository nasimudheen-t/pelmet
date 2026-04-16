// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Send, MapPin, Phone, Mail, CheckCircle, Loader2 } from 'lucide-react';
// import { siteData } from '../data/siteData';

// const Contact = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     setIsSubmitting(true);
//     console.log('Form Submitted:', data);

//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSuccess(true);
//       reset();

//       setTimeout(() => setIsSuccess(false), 5000);
//     }, 2000);
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-6 lg:px-16">
//         <div className="grid lg:grid-cols-2 gap-12 items-start">

//           {/* LEFT */}
//           <div className="transition-all duration-500">
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider mb-6">
//               <Mail className="w-3.5 h-3.5" />
//               Get in Touch
//             </div>

//             <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
//               Let's Build Something <span className="text-red-600">Together</span>
//             </h2>

//             <p className="text-slate-600 mb-8 text-base leading-relaxed">
//               Have a specific manufacturing requirement or need a custom quote?
//               Our experts are ready to assist you.
//             </p>

//             {/* Contact Cards */}
//             <div className="space-y-4">
//               {[
//                 {
//                   icon: MapPin,
//                   title: 'Headquarters',
//                   content: siteData.footer.contact.address,
//                 },
//                 {
//                   icon: Phone,
//                   title: 'Phone Support',
//                   content: siteData.footer.contact.phone,
//                   sub: 'Mon-Sat: 9AM - 6PM',
//                 },
//                 {
//                   icon: Mail,
//                   title: 'Email Us',
//                   content: siteData.footer.contact.email,
//                   sub: 'Response within 24 hours',
//                 },
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-100 hover:border-red-200 hover:shadow-md transition-all duration-300"
//                 >
//                   <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
//                     <item.icon className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
//                     <p className="text-slate-600 text-sm">{item.content}</p>
//                     {item.sub && (
//                       <p className="text-slate-400 text-xs mt-1">{item.sub}</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Trust */}
//             <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-100">
//               <div className="flex -space-x-2">
//                 {[1, 2, 3, 4].map((i) => (
//                   <div key={i} className="w-8 h-8 rounded-full bg-red-100 border-2 border-white flex items-center justify-center text-xs font-bold text-red-600">
//                     ✓
//                   </div>
//                 ))}
//               </div>
//               <p className="text-sm text-slate-500">
//                 <span className="font-semibold text-slate-700">
//                   Trusted by 500+ clients
//                 </span>
//               </p>
//             </div>
//           </div>

//           {/* RIGHT FORM */}
//           <div className="relative">
//             <div className="bg-white rounded-3xl border border-slate-100 shadow-lg overflow-hidden">

//               {/* Header */}
//               <div className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-5">
//                 <h3 className="text-lg font-bold text-white">Send us a Message</h3>
//               </div>

//               <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">

//                 {/* Name */}
//                 <div>
//                   <label className="text-sm font-semibold text-slate-700">
//                     Full Name *
//                   </label>
//                   <input
//                     {...register('name', { required: 'Name is required' })}
//                     className="w-full mt-1 border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-red-500/20"
//                   />
//                   {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="text-sm font-semibold text-slate-700">
//                     Email *
//                   </label>
//                   <input
//                     {...register('email', { required: 'Email required' })}
//                     className="w-full mt-1 border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-red-500/20"
//                   />
//                   {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label className="text-sm font-semibold text-slate-700">
//                     Message *
//                   </label>
//                   <textarea
//                     rows="4"
//                     {...register('message', { required: 'Message required' })}
//                     className="w-full mt-1 border border-slate-200 rounded-xl px-4 py-2.5"
//                   />
//                   {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
//                 </div>

//                 {/* Button */}
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl flex items-center justify-center gap-2"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <Loader2 className="w-4 h-4 animate-spin" />
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       Send Message
//                       <Send className="w-4 h-4" />
//                     </>
//                   )}
//                 </button>
//               </form>
//             </div>

//             {/* Success Toast */}
//             {isSuccess && (
//               <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50">
//                 <CheckCircle className="w-5 h-5" />
//                 Message sent successfully!
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;