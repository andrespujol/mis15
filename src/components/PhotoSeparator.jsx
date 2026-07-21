import React from "react";
import ParallaxContainer from "./ParallaxContainer";

const PhotoSeparator = ({ image, nameBanner = false }) => {
  return (
    <ParallaxContainer bgImage={image} className="w-full min-h-screen">
      <div
        className="w-full min-h-screen flex items-center justify-center px-4 md:px-8 py-16 text-center relative select-none"
        style={{
          backgroundColor: "rgba(12, 5, 20, 0.75)",
          backgroundImage: `radial-gradient(circle at 25% 30%, rgba(168, 85, 247, 0.2) 0%, transparent 50%), 
                            radial-gradient(circle at 75% 70%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)`,
        }}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950/40 via-transparent to-transparent" />

        <div className="relative max-w-sm md:max-w-md w-full aspect-[3/4] rounded-3xl border border-purple-500/25 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden bg-transparent group z-10">
          <div className="absolute inset-0 bg-[#0c0514]/10 pointer-events-none" />

          <div className="absolute inset-3 rounded-2xl border border-pink-400/20 pointer-events-none" />
          <img
            src={image}
            alt="Morena Book"
            className="w-full h-full object-cover transform scale-110 transition-transform duration-300 group-hover:scale-105"
            style={{ transformStyle: "preserve-3d", willChange: "transform" }}
          />
          {/* banner */}
          {nameBanner && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[85%] max-w-[280px]">
              <div className="relative bg-[#1b0f2b]/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.6)] border border-pink-500/20">
                <span className="block text-[9px] uppercase font-light text-pink-300 tracking-[0.25em] mb-1">
                  Mis 15 Años
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-white font-normal tracking-wide select-none drop-shadow-sm italic">
                  Morena
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </ParallaxContainer>
  );
};

export default PhotoSeparator;
