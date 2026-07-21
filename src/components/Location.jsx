import React from "react";

const Location = () => {
  const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/2WRmc6HoK92GM2nS8";

  return (
    <div className="bg-neutral-50 text-neutral-800 min-h-screen w-full flex items-center justify-center px-4 text-center">
      <div className="max-w-xl mx-auto py-12">
        <div className="text-pink-600 w-14 h-14 mx-auto mb-6">
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

        <h2 className="text-4xl font-serif font-bold tracking-wide mb-3">
          ¿Dónde festejamos?
        </h2>
        <p className="text-2xl font-medium text-neutral-600 mb-1">
          Jano's eventos
        </p>
        <p className="text-lg text-neutral-500 italic">
          Bartolome Mitre 1265, Capital Federal
        </p>
        <p className="text-lg text-neutral-500 italic mb-10">de 14 a 22 hs.</p>

        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium uppercase tracking-wider text-sm py-4 px-10 rounded-full shadow-md transition-all transform hover:scale-105"
        >
          Cómo llegar
        </a>
      </div>
    </div>
  );
};

export default Location;
