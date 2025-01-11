"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Services from "./Services";
import Image from "next/image";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000, // Slide change every 3 seconds
        disableOnInteraction: false, // Continue auto-slide even if the user interacts
      }}
      loop={true}
      modules={[Autoplay]} // Include the Autoplay module
    >
      <SwiperSlide>
        <div>
          <Image
            src="https://res.cloudinary.com/dbloat0jr/image/upload/v1736381956/slide-1_mg6z23.jpg"
            alt="Slide 1"
            className="w-full h-auto"
            width={800}
            height={600}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <Image
            src="https://res.cloudinary.com/dbloat0jr/image/upload/v1736381955/slide_2_xzyykk.jpg"
            alt="Slide 2"
            className="w-full h-auto"
            width={800}
            height={600}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <Image
            src="https://res.cloudinary.com/dbloat0jr/image/upload/v1736381955/slide_3_ulzsaz.jpg"
            alt="Slide 3"
            className="w-full h-auto"
            width={800}
            height={600}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <Image
            src="https://res.cloudinary.com/dbloat0jr/image/upload/v1736381955/slide_4_hrfxej.jpg"
            alt="Slide 4"
            className="w-full h-auto"
            width={800}
            height={600}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <Image
            src="https://res.cloudinary.com/dbloat0jr/image/upload/v1736381955/slide_5_vyffa0.jpg"
            alt="Slide 5"
            className="w-full h-auto"
            width={800}
            height={600}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <Image
            src="https://res.cloudinary.com/dbloat0jr/image/upload/v1736381955/slide_6_to25vt.jpg"
            alt="Slide 6"
            className="w-full h-auto"
            width={800}
            height={600}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <Image
            src="https://res.cloudinary.com/dbloat0jr/image/upload/v1736381955/slide_7_mftz4m.jpg"
            alt="Slide 7"
            className="w-full h-auto"
            width={800}
            height={600}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <Image
            src="https://res.cloudinary.com/dbloat0jr/image/upload/v1736381956/slide_8_omwj8c.jpg"
            alt="Slide 8"
            className="w-full h-auto"
            width={800}
            height={600}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
