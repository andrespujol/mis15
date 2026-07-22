import React from "react";
import ParallaxContainer from "./ParallaxContainer";

const PhotoSeparator = ({ image, nameBanner = false, inverted = false }) => {
  // Gradiente estándar (rosa arriba -> dorado abajo)
  const defaultGradient = `
    radial-gradient(ellipse at 50% -10%, rgba(225, 29, 114, 0.4) 0%, transparent 55%),
    radial-gradient(ellipse at 50% 110%, rgba(212, 160, 60, 0.45) 0%, transparent 55%),
    radial-gradient(circle at center, #1c0a15 0%, #090306 100%)
  `;

  // Gradiente invertido (dorado arriba -> rosa abajo)
  const invertedGradient = `
    radial-gradient(ellipse at 50% -10%, rgba(212, 160, 60, 0.45) 0%, transparent 55%),
    radial-gradient(ellipse at 50% 110%, rgba(225, 29, 114, 0.4) 0%, transparent 55%),
    radial-gradient(circle at center, #1c0a15 0%, #090306 100%)
  `;

  return (
    <ParallaxContainer
      bgImage={image}
      // 👇 Con esto encuadramos la foto de FONDO desde arriba para que se vea la cara
      bgImageStyle={{
        objectFit: "cover",
        objectPosition: "top center",
      }}
      className="w-full min-h-screen overflow-hidden"
    >
      <div
        className="w-full min-h-screen flex items-center justify-center px-4 md:px-8 py-16 text-center relative select-none"
        style={{
          backgroundColor: "#090306",
          // 👇 Acá aplicamos el fondo dinámico según la prop `inverted`
          backgroundImage: inverted ? invertedGradient : defaultGradient,
        }}
      >
        <div className="relative max-w-sm md:max-w-md w-full aspect-[3/4] rounded-3xl border border-purple-500/25 shadow-[0_15px_35px_rgba(0,0,0,0.7)] overflow-hidden bg-transparent group z-10">
          <div className="absolute inset-0 bg-[#0c0514]/10 pointer-events-none" />
          <div className="absolute inset-3 rounded-2xl border border-pink-400/20 pointer-events-none z-10" />

          <img
            src={image}
            alt="Morena Book"
            className="w-full h-full object-cover transform scale-110 transition-transform duration-300 group-hover:scale-105"
            style={{ transformStyle: "preserve-3d", willChange: "transform" }}
          />

          {/* Banner */}
          {nameBanner && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[85%] max-w-[280px] z-20">
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
