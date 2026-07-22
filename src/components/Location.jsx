import React from "react";
import ParallaxContainer from "./ParallaxContainer";

const Location = () => {
  const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/2WRmc6HoK92GM2nS8";

  return (
    <ParallaxContainer overlay={false}>
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
        <div className="text-center text-white px-4 max-w-xl mx-auto w-full z-10">
          <div className="text-pink-400 w-14 h-14 mx-auto mb-6 drop-shadow-[0_0_10px_rgba(244,114,182,0.3)]">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
              />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-wide mb-3 text-white drop-shadow-md">
            ¿Dónde festejamos?
          </h2>
          <p className="text-2xl font-medium text-amber-200 mb-1">
            Jano's eventos
          </p>
          <p className="text-lg text-neutral-300 italic">
            Bartolome Mitre 1265, Capital Federal
          </p>
          <p className="text-lg text-neutral-400 italic mb-10">
            de 14 a 22 hs.
          </p>

          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium uppercase tracking-widest text-[11px] py-3.5 px-8 rounded-full shadow-lg transition-all duration-300 transform active:scale-95 border border-pink-400/30 cursor-pointer"
          >
            Cómo llegar
          </a>
        </div>
      </div>
    </ParallaxContainer>
  );
};

export default Location;
