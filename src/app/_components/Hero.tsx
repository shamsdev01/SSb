"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Elements - Visible on both mobile and desktop */}
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

      {/* Mobile Design (Full Screen) */}
      <div className="block md:hidden relative h-screen">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="h-full w-full"
        >
          <SwiperSlide className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10" /> {/* Gradient Overlay */}
            <Image
              src="/images/chairman.png"
              alt="Hon. Setonji Sunday Balogun"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
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
                  THE PATHWAY TO A GREATER BADAGRY
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
                <div className="inline-block bg-[#0b4619] text-white px-4 py-2 rounded-md text-sm">
                  EXECUTIVE CHAIRMAN
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10" />
            <Image
              src="https://res.cloudinary.com/dbloat0jr/image/upload/v1736457975/photo_2025-01-09_22-06-40_qgjvfg.jpg"
              alt="Example Image 2"
              fill
              className="object-cover"
            />
            {/* Duplicate overlay content for second slide */}
            <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
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
                  THE PATHWAY TO A GREATER BADAGRY
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
                <div className="inline-block bg-[#0b4619] text-white px-4 py-2 rounded-md text-sm">
                  EXECUTIVE CHAIRMAN
                </div>
              </div>
            </div>
          </SwiperSlide>
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

      {/* Desktop Design (Original Layout) */}
      <div className="hidden md:block">
        <div className="relative z-10 container mx-auto px-4 py-16 min-h-screen flex items-center justify-center gap-8">
          {/* Left Column - Carousel */}
          <div className="w-1/2 flex justify-end">
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="w-[400px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
            >
              <SwiperSlide className="relative">
                <Image
                  src="/images/chairman.png"
                  alt="Hon. Setonji Sunday Balogun"
                  fill
                  className="object-cover"
                  priority
                />
              </SwiperSlide>
              <SwiperSlide className="relative">
                <Image
                  src="https://res.cloudinary.com/dbloat0jr/image/upload/v1736457975/photo_2025-01-09_22-06-40_qgjvfg.jpg"
                  alt="Example Image 2"
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="relative">
                <Image
                  src="https://res.cloudinary.com/dbloat0jr/image/upload/v1736457975/photo_2025-01-09_22-06-40_qgjvfg.jpg"
                  alt="Example Image 2"
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
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
                THE PATHWAY TO A GREATER BADAGRY
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
              <div className="inline-block bg-[#0b4619] text-white px-4 py-2 rounded-md">
                EXECUTIVE CHAIRMAN
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}