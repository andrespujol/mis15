import React, { useState } from "react";
import ParallaxContainer from "./ParallaxContainer";
import fondoCard from "../assets/fondo1.png";

const GiftSuggestion = () => {
  const [copiedType, setCopiedType] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  // Datos bancarios
  const ALIAS = import.meta.env.VITE_BANK_ALIAS;
  const CVU = import.meta.env.VITE_BANK_CVU;
  const TITULAR = import.meta.env.VITE_BANK_TITULAR;
  const BANCO = import.meta.env.VITE_BANK;

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <ParallaxContainer bgImage="" className="min-h-screen" overlay={true}>
      <div
        className="w-full min-h-screen flex items-center justify-center px-6 py-16 text-center relative overflow-hidden select-none"
        style={{
          backgroundColor: "#090306",
          backgroundImage: `
            radial-gradient(ellipse at 50% -10%, rgba(225, 29, 114, 0.4) 0%, transparent 55%),
            radial-gradient(ellipse at 50% 110%, rgba(212, 160, 60, 0.45) 0%, transparent 55%),
            radial-gradient(circle at center, #1c0a15 0%, #090306 100%)
          `,
        }}
      >
        <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-950/40 via-transparent to-transparent" />

        {/* Recuadro Central */}
        <div
          className="relative max-w-sm w-full aspect-[9/16] rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center border border-purple-500/30 shadow-[0_15px_35px_rgba(0,0,0,0.5)] overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${fondoCard})` }}
        >
          {/* Capas de fondo */}
          {/* <div className="absolute inset-0 bg-[#1b0f2b]/85 backdrop-blur-[2px] z-0" /> */}
          <div className="absolute inset-3 rounded-2xl border border-pink-400/20 pointer-events-none z-10" />

          {/* Bloque centrado */}
          <div className="relative z-20 flex flex-col items-center w-full max-w-[290px]">
            {/* Ícono */}
            <div className="text-pink-400 w-12 h-12 mb-2 drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0-2.625V7.5m0-4.5V21m-7.5-13.5h15"
                />
              </svg>
            </div>

            {/* Título y Subtítulo */}
            <h2 className="text-3xl md:text-4xl font-serif text-white font-normal italic tracking-wide mb-2 drop-shadow-[0_2px_10px_rgba(236,72,153,0.3)]">
              Regalos
            </h2>

            <p className="text-xs md:text-sm font-light text-neutral-300 leading-relaxed mb-5">
              Tu presencia es mi mejor regalo. Si deseas realizar un presente,
              podés hacerlo aquí.
            </p>

            {/* Botón Principal */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-light uppercase tracking-widest text-[11px] py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform active:scale-95 border border-pink-400/30 cursor-pointer"
            >
              {showDetails ? "Ocultar datos" : "Ver datos bancarios"}
            </button>

            {/* Desplegable pegado al botón con animación Grid */}
            <div
              className={`w-full grid transition-all duration-500 ease-in-out ${
                showDetails
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0 mt-0"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`bg-[#0c0514]/90 p-4 rounded-xl border border-pink-500/30 backdrop-blur-md text-left text-xs space-y-2.5 text-neutral-300 shadow-inner transition-transform duration-500 ${
                    showDetails ? "translate-y-0" : "-translate-y-2"
                  }`}
                >
                  <p className="border-b border-white/10 pb-1.5">
                    <strong className="text-pink-300">TITULAR:</strong>{" "}
                    {TITULAR}
                  </p>
                  <p className="border-b border-white/10 pb-1.5">
                    <strong className="text-pink-300">BANCO:</strong> {BANCO}
                  </p>
                  <div className="flex items-center justify-between bg-white/5 p-2 rounded-lg border border-white/10">
                    <div className="overflow-hidden pr-1">
                      <span className="text-[9px] block text-neutral-400 font-semibold">
                        CVU
                      </span>
                      <span className="font-mono text-pink-300 font-bold text-[10px] break-all block leading-tight">
                        {CVU}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopy(CBU, "cbu")}
                      className={`ml-2 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md transition-all cursor-pointer shrink-0 ${
                        copiedType === "cbu"
                          ? "bg-green-600 text-white"
                          : "bg-pink-500/20 text-pink-300 hover:bg-pink-500/30 border border-pink-500/40"
                      }`}
                    >
                      {copiedType === "cbu" ? "¡Copiado!" : "Copiar"}
                    </button>
                  </div>

                  <div className="flex items-center justify-between bg-white/5 p-2 rounded-lg border border-white/10">
                    <div className="overflow-hidden pr-1">
                      <span className="text-[9px] block text-neutral-400 font-semibold">
                        ALIAS
                      </span>
                      <span className="font-mono text-pink-300 font-bold text-xs truncate block">
                        {ALIAS}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopy(ALIAS, "alias")}
                      className={`ml-2 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md transition-all cursor-pointer shrink-0 ${
                        copiedType === "alias"
                          ? "bg-green-600 text-white"
                          : "bg-pink-500/20 text-pink-300 hover:bg-pink-500/30 border border-pink-500/40"
                      }`}
                    >
                      {copiedType === "alias" ? "¡Copiado!" : "Copiar"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxContainer>
  );
};

export default GiftSuggestion;
