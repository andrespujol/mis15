import React, { useState } from "react";
import toast from "react-hot-toast";
import { db } from "../services/firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import fondoCard from "../assets/fondo1.png";

const MessageForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isNameEmpty = !formData.name.trim();
    const isMessageEmpty = !formData.message.trim();

    if (isNameEmpty && isMessageEmpty) {
      toast.error("Por favor, ingresá tu nombre y el mensaje");
      return;
    }

    if (isNameEmpty) {
      toast.error("Por favor, ingresá tu nombre");
      return;
    }

    if (isMessageEmpty) {
      toast.error("Por favor, escribí un mensaje para la dedicatoria");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "mensajes"), {
        nombre: formData.name.trim(),
        mensaje: formData.message.trim(),
        fecha: serverTimestamp(),
      });

      toast.success("¡Mensaje guardado!");

      let messageText = `Hola More! Quería dejarte un mensajito especial:\n\n`;
      messageText += `"${formData.message.trim()}"\n\n`;
      messageText += `De: ${formData.name.trim()}`;

      setFormData({
        name: "",
        message: "",
      });

      const encodedMessage = encodeURIComponent(messageText);
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
        "_blank",
      );
    } catch (error) {
      console.error("Error al guardar mensaje en Firebase:", error);
      toast.error("Hubo un problema al guardar tu mensaje.");
    } finally {
      setLoading(false);
    }
  };

  return (
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

      {/* Recuadro central de la Card */}
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif text-white font-normal italic tracking-wide mb-2 drop-shadow-[0_2px_10px_rgba(236,72,153,0.3)]">
            Mensaje Especial
          </h2>

          <p className="text-xs font-light text-neutral-300 leading-relaxed mb-5">
            Dejale tus mejores deseos a la cumpleañera.
          </p>

          <form onSubmit={handleSubmit} className="w-full space-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              disabled={loading}
              className="w-full px-4 py-2.5 rounded-xl border border-pink-500/30 bg-black/40 text-white placeholder-neutral-400 text-xs focus:outline-none focus:border-pink-500 backdrop-blur-sm transition-all"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              placeholder="Escribí tu saludo acá..."
              disabled={loading}
              className="w-full px-4 py-2.5 rounded-xl border border-pink-500/30 bg-black/40 text-white placeholder-neutral-400 text-xs focus:outline-none focus:border-pink-500 backdrop-blur-sm resize-none transition-all"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium uppercase tracking-widest text-[10px] py-3 px-4 rounded-full shadow-lg transition-all transform active:scale-95 hover: border border-pink-400/30 cursor-pointer disabled:opacity-50 mt-2"
            >
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
