import React, { useState, useRef } from "react";
import ParallaxContainer from "./ParallaxContainer";
import fondoCard from "../assets/fondo1.png";
import songFile from "../assets/photograph.mp3"; // Importás el audio acá

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <ParallaxContainer bgImage="" className="min-h-screen" overlay={true}>
      {/* Elemento de Audio Oculto */}
      <audio ref={audioRef} src={songFile} loop />

      <div
        className="w-full min-h-screen flex items-center justify-center px-6 py-16 text-center relative overflow-hidden select-none"
        style={{
          backgroundColor: "#090306",
          backgroundImage: `
            radial-gradient(ellipse at 50% -10%, rgba(212, 160, 60, 0.45) 0%, transparent 55%),
            radial-gradient(ellipse at 50% 110%, rgba(225, 29, 114, 0.4) 0%, transparent 55%),
            radial-gradient(circle at center, #1c0a15 0%, #090306 100%)
          `,
        }}
      >
        <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-950/40 via-transparent to-transparent" />

        {/* Recuadro central */}
        <div
          className="relative max-w-sm w-full aspect-[9/16] rounded-3xl p-8 flex flex-col items-center justify-center border border-amber-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${fondoCard})`,
          }}
        >
          <div className="absolute inset-3 rounded-2xl border border-pink-400/20 pointer-events-none" />

          <span className="text-xs md:text-sm font-light tracking-[0.35em] uppercase block mb-4 text-amber-200/90">
            Mis 15 Años
          </span>

          <h1 className="text-5xl md:text-6xl font-serif text-white font-normal italic tracking-wide mb-4 drop-shadow-[0_2px_10px_rgba(236,72,153,0.3)]">
            Morena
          </h1>

          <p className="text-sm md:text-base font-light text-neutral-300 leading-relaxed max-w-[280px] mb-8">
            Te espero para compartir una noche mágica e inolvidable.
          </p>

          {/* Botón de Reproductor de Música */}
          <div className="relative z-20 flex flex-col items-center">
            <button
              onClick={togglePlay}
              className={`flex items-center gap-3 px-5 py-2.5 rounded-full border transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md shadow-lg ${
                isPlaying
                  ? "bg-pink-600/30 border-pink-400/50 text-pink-200 shadow-pink-500/20"
                  : "bg-[#1c0a15]/80 border-amber-500/40 text-amber-200 shadow-black/50"
              }`}
            >
              {isPlaying ? (
                // Ícono Pause
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current animate-pulse text-pink-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                // Ícono Play
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current text-amber-300 ml-0.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </ParallaxContainer>
  );
};

export default Hero;
