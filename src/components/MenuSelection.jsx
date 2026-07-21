import React from "react";
import ParallaxContainer from "./ParallaxContainer";
import fondoCard from "../assets/fondo.png";

const MenuSection = () => {
  const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;

  const handleMenuRequest = () => {
    const text = encodeURIComponent(
      "Hola More! Te quería avisar que tengo una preferencia / restricción alimentaria para el menú (celíaco, vegetariano, vegano, alergia): ",
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

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
          className="relative max-w-sm w-full aspect-[9/16] rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center border border-purple-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${fondoCard})`,
          }}
        >
          {/* Capa de oscuridad sobre la imagen para legibilidad */}
          <div className="absolute inset-0 bg-[#1b0f2b]/85 backdrop-blur-[2px] z-0" />

          {/* Borde interno decorativo */}
          <div className="absolute inset-3 rounded-2xl border border-pink-400/20 pointer-events-none z-10" />

          {/* Contenido principal */}
          <div className="relative z-20 flex flex-col items-center w-full max-w-[280px]">
            <div className="text-pink-400 w-12 h-12 mb-3 drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5h-1.875a6 6 0 0 0-5.861 4.717 3 3 0 0 1-5.516 0A6 6 0 0 0 1.875 7.5H0M12 7.5V21M3.75 3.75h16.5M4.5 7.5v6.75a3.75 3.75 0 0 0 3.75 3.75h7.5a3.75 3.75 0 0 0 3.75-3.75V7.5"
                />
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif text-white font-normal italic tracking-wide mb-3 drop-shadow-[0_2px_10px_rgba(236,72,153,0.3)]">
              Menú Especial
            </h2>

            <p className="text-xs md:text-sm font-light text-neutral-300 leading-relaxed mb-6">
              Si tenés alguna restricción alimentaria (celíaco, vegetariano,
              vegano, o alguna alergia), por favor avisanos para que te podamos
              preparar una comida especial.
            </p>

            <button
              onClick={handleMenuRequest}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-light uppercase tracking-widest text-xs py-3 px-6 rounded-full shadow-lg transition-all transform active:scale-95 hover:scale-105 border border-pink-400/30 cursor-pointer"
            >
              Enviar mensaje
            </button>
          </div>
        </div>
      </div>
    </ParallaxContainer>
  );
};

export default MenuSection;
