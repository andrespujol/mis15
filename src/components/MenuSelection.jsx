import React, { useState } from "react";
import toast from "react-hot-toast";
import ParallaxContainer from "./ParallaxContainer";
import fondoCard from "../assets/fondo1.png";
import { db } from "../services/firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const MenuSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    preference: "",
  });
  const [loading, setLoading] = useState(false);

  const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMenuSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.preference.trim()) {
      toast.error("Por favor completá tu nombre y restricción");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "menues_especiales"), {
        nombre: formData.name.trim(),
        restriccion: formData.preference.trim(),
        fecha: serverTimestamp(),
      });

      toast.success("¡Preferencia guardada!");

      const text = encodeURIComponent(
        `Hola More! Soy ${formData.name.trim()} y te quería avisar que tengo una preferencia/restricción alimentaria: ${formData.preference.trim()}`,
      );

      setFormData({ name: "", preference: "" });

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    } catch (error) {
      console.error("Error al guardar menú especial:", error);
      toast.error("Hubo un error al guardar tu respuesta");
    } finally {
      setLoading(false);
    }
  };

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
          className="relative max-w-sm w-full rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center border border-purple-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${fondoCard})`,
          }}
        >
          {/* Borde interno decorativo */}
          <div className="absolute inset-3 rounded-2xl border border-pink-400/20 pointer-events-none z-10" />

          {/* Contenido principal */}
          <div className="relative z-20 flex flex-col items-center w-full max-w-[280px]">
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
                  d="M21 7.5h-1.875a6 6 0 0 0-5.861 4.717 3 3 0 0 1-5.516 0A6 6 0 0 0 1.875 7.5H0M12 7.5V21M3.75 3.75h16.5M4.5 7.5v6.75a3.75 3.75 0 0 0 3.75 3.75h7.5a3.75 3.75 0 0 0 3.75-3.75V7.5"
                />
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif text-white font-normal italic tracking-wide mb-2 drop-shadow-[0_2px_10px_rgba(236,72,153,0.3)]">
              Menú Especial
            </h2>

            <p className="text-xs font-light text-neutral-300 leading-relaxed mb-5">
              Si tenés alguna restricción (celíaco, vegetariano, vegano,
              alergia), avisamos para prepararlo.
            </p>

            <form onSubmit={handleMenuSubmit} className="w-full space-y-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                disabled={loading}
                className="w-full px-4 py-2.5 rounded-xl border border-pink-500/30 bg-black/40 text-white placeholder-neutral-400 text-xs focus:outline-none focus:border-pink-500 backdrop-blur-sm"
              />

              <input
                type="text"
                name="preference"
                value={formData.preference}
                onChange={handleChange}
                placeholder="Ej: Celíaco / Vegetariano"
                disabled={loading}
                className="w-full px-4 py-2.5 rounded-xl border border-pink-500/30 bg-black/40 text-white placeholder-neutral-400 text-xs focus:outline-none focus:border-pink-500 backdrop-blur-sm"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium uppercase tracking-widest text-[10px] py-3 px-4 rounded-full shadow-lg transition-all transform active:scale-95 hover:scale-105 border border-pink-400/30 cursor-pointer disabled:opacity-50 mt-2"
              >
                {loading ? "Guardando..." : "Enviar mensaje"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </ParallaxContainer>
  );
};

export default MenuSection;
