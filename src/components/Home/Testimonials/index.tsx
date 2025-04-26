"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";
import testimonialsData from "./testimonialsData";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";
import SingleItem from "./SingleItem";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";

const Testimonials = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="max-w-[1500px] w-full mx-auto mb-[50px] px-[20px]">
      <div className="swiper testimonial-carousel common-carousel p-5">
        {/* <!-- section title --> */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <span className="flex items-center gap-2.5 font-medium text-app_text mb-1.5">
              <Users width={16} height={16} className="text-app_blue" />
              Testimonials
            </span>
            <h2 className="font-medium text-xl xl:text-heading-5 text-app_text">
              User Feedbacks
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center h-9 w-9 rounded-lg bg-white text-app_text border border-gray-3 ease-out duration-200 hover:bg-app_blue hover:border-app_blue"
            >
              <ChevronLeft className="text-app_text hover:text-white" />
            </button>

            <button
              onClick={handleNext}
              className="flex items-center justify-center h-9 w-9 rounded-lg bg-white text-app_text border border-gray-3 ease-out duration-200 hover:bg-app_blue hover:border-app_blue"
            >
              <ChevronRight className="text-app_text hover:text-white" />
            </button>
          </div>
        </div>

        <div className="w-full h-[2px] bg-app_border my-[20px]">
          <div className="w-[150px] h-full bg-orange"></div>
        </div>

        <Swiper
          ref={sliderRef}
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 1,
            },
            1000: {
              slidesPerView: 2,
              // spaceBetween: 4,
            },
            // when window width is >= 768px
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonialsData.map((item, key) => (
            <SwiperSlide key={key}>
              <SingleItem testimonial={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
