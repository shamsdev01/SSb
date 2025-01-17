"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

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
      <div className="text-center space-y-2">
        <div className="relative inline-block">
           <span className="absolute -left-2 top-1/2 -translate-y-1/2 text-sm bg-red-500 text-white px-2 py-1 font-extrabold rounded-l-md rounded-r-sm">
            THE
          </span> 
          <h1 className="text-5xl font-extrabold text-white tracking-tight ml-8">
            BRIDGE
          </h1>
        </div>
        <p className="text-sm font-semibold text-white">
           PATHWAY TO A GREATER BADAGRY
        </p>
      </div>

      {/* Bottom Content */}
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-white">
          HON. SETONJI SUNDAY
        </h2>
        <h3 className="text-lg font-bold text-white">
          BALOGUN
        </h3>
        <div className="flex items-center justify-center gap-2">
          <div 
            className="bg-red-500 w-12 h-8 flex items-center justify-center text-white text-xs font-bold" 
            style={{ clipPath: "polygon(30% 0, 70% 0, 100% 50%, 70% 100%, 30% 100%, 0 50%)" }}
          >
            AS
          </div>
          <div className="inline-block bg-[#0b4619] text-white px-4 py-2 rounded-md text-sm">
            EXECUTIVE CHAIRMAN
          </div>
        </div>
      </div>
    </>
  );

  return (
    <section className="relative min-h-screen overflow-hidden">
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
      <div className="block md:hidden relative h-screen">
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
        <div className="absolute top-4 right-4 z-30 bg-black rounded-full w-12 h-12 flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/dbloat0jr/image/upload/v1736381956/SSB_jbuudq.jpg"
            alt="logo"
            width={44}
            height={44}
            className="rounded-full"
            priority
          />
        </div>
      </div>

      {/* Desktop Design */}
      <div className="hidden md:block">
        <div className="relative z-10 container mx-auto px-4 py-16 min-h-screen flex items-center justify-center gap-8">
          {/* Left Column - Carousel */}
          <div className="w-1/2 flex justify-end">
            <Swiper
              {...swiperConfig}
              className="w-[400px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
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
          <div className="w-1/2 text-right space-y-8">
            <div className="space-y-2">
              <div className="relative inline-block">
                 <span className="absolute -left-2 top-1/2 -translate-y-1/2 text-sm bg-red-500 text-white px-2 py-1 font-extrabold rounded-l-md rounded-r-sm">
                  THE
                </span> 
                <h1 className="text-6xl font-extrabold text-[#1a1a1a] tracking-tight ml-8">
                  BRIDGE
                </h1>
              </div>
              <p className="text-lg font-semibold text-[#0b4619]">
                 PATHWAY TO A GREATER BADAGRY
              </p>
              <div className="flex justify-end">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dbloat0jr/image/upload/v1736381956/SSB_jbuudq.jpg"
                    alt="logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#1a1a1a]">
                HON. SETONJI SUNDAY
              </h2>
              <h3 className="text-lg font-bold text-[#0b4619]">
                BALOGUN
              </h3>
              <div className="flex items-center justify-center gap-2">
                <div 
                  className="bg-red-500 w-12 h-8 flex items-center justify-center text-white text-xs font-bold" 
                  style={{ clipPath: "polygon(30% 0, 70% 0, 100% 50%, 70% 100%, 30% 100%, 0 50%)" }}
                >
                  AS
                </div>
                <div className="inline-block bg-[#0b4619] text-white px-4 py-2 rounded-md text-sm">
                  EXECUTIVE CHAIRMAN
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}