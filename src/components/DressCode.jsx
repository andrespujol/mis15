import React from "react";
import ParallaxContainer from "./ParallaxContainer";
import fondoCard from "../assets/fondo1.png";

const Dresscode = () => {
  return (
    <ParallaxContainer bgImage="" className="min-h-screen" overlay={true}>
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
        <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950/40 via-transparent to-transparent" />

        {/* Recuadro central */}
        <div
          className="relative max-w-sm w-full aspect-[9/16] rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center border border-purple-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${fondoCard})`,
          }}
        >
          {/* Overlay de oscuridad sobre la imagen de fondo */}
          {/* <div className="absolute inset-0 bg-[#1b0f2b]/85 backdrop-blur-[2px] z-0" /> */}

          {/* Borde interno decorativo */}
          <div className="absolute inset-3 rounded-2xl border border-pink-400/20 pointer-events-none z-10" />

          <div className="relative z-20 flex flex-col items-center w-full max-w-[280px]">
            {/* Íconos */}
            <div className="flex items-center justify-center gap-3 text-pink-400 mb-4 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
              {/* Traje */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="w-10 h-10"
              >
                <path
                  fill="currentColor"
                  d="M214.7 209.7a2 2 0 0 0-.11-.25l-45.48-96.86l20.5-32.18a2 2 0 0 0 .11-.18a16 16 0 0 0 0-16.46c-.09-.16-.2-.32-.3-.47L168 32.7V8a8 8 0 0 0-16 0v24.42L146.74 39a24 24 0 0 1-37.48 0L104 32.42V8a8 8 0 0 0-16 0v24.7L66.58 63.3c-.1.15-.21.31-.3.47a16 16 0 0 0 0 16.46a2 2 0 0 0 .11.18l20.5 32.18l-45.48 96.86a2 2 0 0 0-.11.25A16 16 0 0 0 56 232h144a16 16 0 0 0 14.71-22.3ZM80 72l16.43-23.43l.33.42a40 40 0 0 0 62.48 0l.33-.42L176 72l-20.38 32h-55.23ZM56 216l45.07-96h53.84L200 216Z"
                />
              </svg>

              {/* Vestido */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-10 h-10"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                >
                  <path d="M37 21v16m-26 0v7h26v-7m-26 0H4V10l14-6h12l14 6v27h-7m-26 0V21M30 4l-6 14m0 0L18 4m6 14v26m6-40l-6 14m0 0L18 4" />
                  <path d="m18 4l-4 8l4 5.5l-2 5.5l8 14m6-33l5 8l-5 5.5l2 5.5l-8 14" />
                </g>
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif text-white font-normal italic tracking-wide mb-2 drop-shadow-[0_2px_10px_rgba(236,72,153,0.3)]">
              Dress Code
            </h2>

            <p className="text-pink-300 font-light tracking-[0.25em] text-xs uppercase mb-6">
              Elegante / Formal
            </p>

            <p className="text-xs md:text-sm font-light text-neutral-300 leading-relaxed mb-6">
              Te pedimos asistir con vestimenta formal para compartir esta noche
              especial juntos.
            </p>
            <div className="mt-2 px-4 py-2.5 rounded-2xl bg-[#1c0a15]/80 border border-amber-500/30 backdrop-blur-sm">
              <p className="text-[11px] font-light text-amber-200 tracking-wide leading-tight">
                <span className="font-semibold text-pink-400">Nota:</span> Se
                reserva el color{" "}
                <span className="underline decoration-pink-500 underline-offset-2 font-medium">
                  rosa
                </span>{" "}
                exclusivamente para la cumpleañera.
              </p>
            </div>
            {/* <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-light uppercase tracking-widest text-xs py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105 border border-pink-400/30 cursor-pointer">
              Ver Sugerencias
            </button> */}
          </div>
        </div>
      </div>
    </ParallaxContainer>
  );
};

export default Dresscode;
