"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

// pictures

export default function Hero() {
  const images = [
    "/images/chairman.png",
    "https://res.cloudinary.com/dbloat0jr/image/upload/v1736457974/photo_2025-01-08_20-55-18_bfpw4r.jpg",
    "https://res.cloudinary.com/dbloat0jr/image/upload/v1736457974/photo_2025-01-08_20-55-14_nsjzwc.jpg",
    "https://res.cloudinary.com/dbloat0jr/image/upload/v1736457974/photo_2025-01-08_20-55-21_pbqmm3.jpg",
    "https://res.cloudinary.com/dbloat0jr/image/upload/v1736457974/photo_2025-01-09_22-06-43_knjapq.jpg",
    "https://res.cloudinary.com/dbloat0jr/image/upload/v1736457974/photo_2025-01-08_20-55-29_aozzvu.jpg"
  ];

  const swiperConfig = {
    modules: [Pagination, Autoplay],
    pagination: { clickable: true },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    loop: true
  };

  const OverlayContent = () => (
    <>
      {/* Top Content */}
      <div className="text-center space-y-1 sm:space-y-2">
        <div className="relative inline-block">
           <span className="absolute -left-2 top-1/2 -translate-y-1/2 text-xs sm:text-sm bg-red-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 font-extrabold rounded-l-md rounded-r-sm">
            THE
          </span> 
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight ml-6 sm:ml-8">
            BRIDGE
          </h1>
        </div>
        <p className="text-xs sm:text-sm font-semibold text-white">
           PATHWAY TO A GREATER BADAGRY
        </p>
      </div>

      {/* Bottom Content for Mobile */}
      <div className="text-center space-y-1 sm:space-y-2">
        <h2 className="text-lg sm:text-xl font-bold text-white">
          HON. SETONJI SUNDAY
        </h2>
        <h3 className="text-base sm:text-lg font-bold text-white">
          BALOGUN
        </h3>
        <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
          <div className="flex items-center justify-center gap-1 sm:gap-2">
            <div 
              className="bg-red-500 w-10 sm:w-12 h-6 sm:h-8 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold" 
              style={{ clipPath: "polygon(30% 0, 70% 0, 100% 50%, 70% 100%, 30% 100%, 0 50%)" }}
            >
              AS
            </div>
            <div className="inline-block bg-[#0b4619] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm">
              EXECUTIVE CHAIRMAN
            </div>
          </div>
          <div className="text-[#0b4619] text-xs sm:text-sm font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-md">
            BADAGRY LOCAL GOVERNMENT
          </div>
        </div>
      </div>
    </>
  );

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#ffefef] via-white to-[#efffef]"
        style={{
          backgroundImage: "linear-gradient(to top, white, transparent), url('https://res.cloudinary.com/dbloat0jr/image/upload/v1736377885/Bg_ue70uq.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Blur Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-24 h-24 md:w-48 md:h-48 bg-[#e41e26] rounded-full filter blur-3xl opacity-10 transform translate-x-1/4 -translate-y-1/4" />
        <div className="absolute left-0 bottom-0 w-24 h-24 md:w-48 md:h-48 bg-[#0b4619] rounded-full filter blur-3xl opacity-10 transform -translate-x-1/4 translate-y-1/4" />
      </div>

      {/* Mobile Design */}
      <div className="block md:hidden relative h-[100svh]">
        <Swiper {...swiperConfig} className="h-full w-full">
          {images.map((image, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10" />
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
                <OverlayContent />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Logo in top right */}
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-30 bg-black rounded-full w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dbloat0jr/image/upload/v1736381956/SSB_jbuudq.jpg"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
        </div>
      </div>

      {/* Desktop Design */}
      <div className="hidden md:block">
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12 xl:py-16 min-h-[100svh] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column - Carousel */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Swiper
              {...swiperConfig}
              className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[500px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} className="relative">
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Column - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-right space-y-6 lg:space-y-8 xl:space-y-10">
            <div className="space-y-3 md:space-y-4">
              <div className="relative inline-block">
                <span className="absolute -left-2 top-1/2 -translate-y-1/2 text-sm md:text-base lg:text-lg bg-red-500 text-white px-2 py-1 font-extrabold rounded-l-md rounded-r-sm">
                  THE
                </span> 
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#1a1a1a] tracking-tight ml-8 md:ml-10">
                  BRIDGE
                </h1>
              </div>
              <p className="text-base md:text-lg lg:text-xl font-semibold text-[#0b4619]">
                PATHWAY TO A GREATER BADAGRY
              </p>
              <div className="flex justify-center lg:justify-end">
                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dbloat0jr/image/upload/v1736381956/SSB_jbuudq.jpg"
                    alt="logo"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3 md:space-y-4 lg:space-y-5">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#1a1a1a]">
                HON. SETONJI SUNDAY
              </h2>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#0b4619]">
                BALOGUN
              </h3>
              <div className="flex items-center justify-center lg:justify-end gap-3 md:gap-4 flex-col">
                <div className="flex items-center justify-center lg:justify-end gap-2 md:gap-3">
                  <div 
                    className="bg-red-500 w-12 md:w-14 lg:w-16 h-8 md:h-10 lg:h-12 flex items-center justify-center text-white text-sm md:text-base lg:text-lg font-bold" 
                    style={{ clipPath: "polygon(30% 0, 70% 0, 100% 50%, 70% 100%, 30% 100%, 0 50%)" }}
                  >
                    AS
                  </div>
                  <div className="inline-block bg-[#0b4619] text-white px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-md text-sm md:text-base lg:text-lg">
                    EXECUTIVE CHAIRMAN
                  </div>
                </div>
                <div className="text-[#0b4619] text-sm md:text-base lg:text-lg font-semibold bg-white/90 px-4 md:px-5 lg:px-6 py-1.5 md:py-2 lg:py-2.5 rounded-md shadow-sm">
                  BADAGRY LOCAL GOVERNMENT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}