"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-[#ffefef] via-white to-[#efffef] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b4619] mb-2">
            Campaign Video
          </h2>
          <p className="text-gray-600 text-base">
            Watch our campaign message and vision for a Greater Badagry
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
        >
          <div
            className="relative"
            style={{
              paddingBottom: "56.25%",
              position: "relative",
              height: 0,
            }}
          >
            {!isPlaying ? (
              // Thumbnail with play button
              <div
                className="absolute inset-0 cursor-pointer"
                onClick={() => setIsPlaying(true)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') setIsPlaying(true);
                }}
              >
                <img
                  src="/api/placeholder/800/450"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                  <div className="transform transition-transform duration-200 hover:scale-110">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-[#0b4619] border-b-[12px] border-b-transparent ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // YouTube iframe
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/qLPJ-8Q_bQU?autoplay=1&playsinline=1"
                title="Campaign Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
               //playsInline
              />
            )}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#e41e26] rounded-full filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0b4619] rounded-full filter blur-3xl opacity-10" />
    </section>
  );
}