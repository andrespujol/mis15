import React, { useState, useEffect } from "react";
import ParallaxContainer from "./ParallaxContainer";

const TARGET_DATE = "2026-09-06T14:00:00";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(TARGET_DATE) - +new Date();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isOver: true,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isOver: false,
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <ParallaxContainer overlay={false}>
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
        <div className="text-center text-white px-4 max-w-2xl mx-auto w-full z-10">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 tracking-wide drop-shadow-md">
            {timeLeft.isOver ? "¡Llegó el gran día!" : "Falta muy poco..."}
          </h2>

          {!timeLeft.isOver && (
            <div className="grid grid-cols-4 gap-3 md:gap-6 bg-black/30 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* DÍAS */}
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-5xl font-mono font-bold tracking-tight text-white">
                  {formatNumber(timeLeft.days)}
                </span>
                <span className="text-[10px] md:text-xs uppercase font-light tracking-widest mt-2 opacity-70">
                  Días
                </span>
              </div>

              {/* HORAS */}
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-5xl font-mono font-bold tracking-tight text-white">
                  {formatNumber(timeLeft.hours)}
                </span>
                <span className="text-[10px] md:text-xs uppercase font-light tracking-widest mt-2 opacity-70">
                  Horas
                </span>
              </div>

              {/* MINUTOS */}
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-5xl font-mono font-bold tracking-tight text-white">
                  {formatNumber(timeLeft.minutes)}
                </span>
                <span className="text-[10px] md:text-xs uppercase font-light tracking-widest mt-2 opacity-70">
                  Minutos
                </span>
              </div>

              {/* SEGUNDOS */}
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-5xl font-mono font-bold tracking-tight text-pink-400 drop-shadow-[0_0_10px_rgba(244,114,182,0.3)]">
                  {formatNumber(timeLeft.seconds)}
                </span>
                <span className="text-[10px] md:text-xs uppercase font-light tracking-widest mt-2 opacity-80 text-pink-300">
                  Segundos
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </ParallaxContainer>
  );
};

export default Countdown;
