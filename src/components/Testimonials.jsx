import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';
import { siteData } from '../data/siteData';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            What Our Partners Say
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Trusted by industry leaders for over two decades. Here is what they have to
            say about our commitment to quality.
          </p>
        </div>

        {/* Slider */}
        <div className="relative px-4">
          <Swiper
            spaceBetween={20}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay, Pagination]}
            className="pb-12"
          >
            {siteData.testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
                  
                  {/* Content */}
                  <div>
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <div className="relative">
                      <Quote className="absolute -top-3 -left-3 w-8 h-8 text-slate-100" />
                      <p className="text-slate-700 italic text-sm leading-relaxed mb-6">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </div>

                  {/* User */}
                  <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      width="48"
                      height="48"
                      className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition duration-300"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Pagination Style */}
      <style>{`
        .swiper-pagination-bullet-active {
          background: #0284c7 !important;
          width: 20px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;