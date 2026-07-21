import React from "react";
import ParallaxContainer from "./ParallaxContainer";
import fondoCard from "../assets/fondo.png";
const Hero = () => {
  return (
    <ParallaxContainer bgImage="" className="min-h-screen" overlay={true}>
      <div
        className="w-full min-h-screen flex items-center justify-center px-6 py-16 text-center relative overflow-hidden select-none"
        style={{
          backgroundColor: "#0c0514",
          backgroundImage: `
          radial-gradient(circle at 50% 10%, rgba(168, 85, 247, 0.25) 0%, transparent 60%), 
          radial-gradient(circle at 50% 90%, rgba(236, 72, 153, 0.2) 0%, transparent 60%),
          radial-gradient(ellipse at center, rgba(27, 15, 43, 0.8) 0%, #0c0514 100%)
        `,
        }}
      >
        <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950/40 via-transparent to-transparent" />

        {/* Recuadro central */}
        <div
          className="relative max-w-sm w-full aspect-[9/16] rounded-3xl p-8 flex flex-col items-center justify-center border border-purple-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${fondoCard})`,
          }}
        >
          <div className="absolute inset-3 rounded-2xl border border-pink-400/20 pointer-events-none" />

          <span className="text-xs md:text-sm font-light tracking-[0.35em] uppercase block mb-6 text-pink-300">
            Mis 15 Años
          </span>

          <h1 className="text-5xl md:text-6xl font-serif text-white font-normal italic tracking-wide mb-6 drop-shadow-[0_2px_10px_rgba(236,72,153,0.3)]">
            Morena
          </h1>

          <p className="text-sm md:text-base font-light text-neutral-300 leading-relaxed max-w-[280px]">
            Te espero para compartir una noche mágica e inolvidable.
          </p>
        </div>
      </div>
    </ParallaxContainer>
  );
};

export default Hero;
