import React, { useState } from "react";
import toast from "react-hot-toast";

const MessageForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER_SECONDARY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameEmpty = !formData.name.trim();
    const isMessageEmpty = !formData.message.trim();

    // Validaciones específicas
    if (isNameEmpty && isMessageEmpty) {
      toast.error("Por favor, ingresá tu nombre y el mensaje");
      return;
    }

    if (isNameEmpty) {
      toast.error("Por favor, ingresá tu nombre");
      return;
    }

    if (isMessageEmpty) {
      toast.error("Por favor, escribí un mensaje para la dedicatoria", {
        icon: "⚠️",
      });
      return;
    }

    // Si pasa todas las validaciones, arma el mensaje y abre WhatsApp
    let messageText = `Hola Morena! Quería dejarte un mensajito especial:\n\n`;
    messageText += `"${formData.message.trim()}"\n\n`;
    messageText += `De: ${formData.name.trim()}`;

    const encodedMessage = encodeURIComponent(messageText);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank",
    );
  };
  return (
    <div className="bg-neutral-100 text-neutral-800 min-h-screen w-full flex items-center justify-center px-4 text-center border-t border-neutral-200">
      <div className="w-full max-w-md mx-auto py-12 text-left">
        <div className="text-pink-600 w-14 h-14 mx-auto mb-6 text-center">
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

        <h2 className="text-4xl font-serif font-bold tracking-wide text-center mb-2">
          Mensaje Especial
        </h2>
        <p className="text-center text-neutral-400 mb-8 italic text-sm">
          Dejale tus mejores deseos a la cumpleañera.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-200/60 shadow-[0_15px_40px_rgba(0,0,0,0.05)] space-y-6"
        >
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 mb-2">
              Tu Nombre
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ej: Sofía"
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-pink-500 bg-neutral-50 text-neutral-800 text-sm transition-all"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 mb-2">
              Dedicatoria
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Escribí tu saludo acá..."
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-pink-500 bg-neutral-50 text-neutral-800 resize-none text-sm transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold uppercase tracking-wider text-[11px] py-4 rounded-xl shadow-md cursor-pointer transition-all transform hover:scale-[1.02] active:scale-95 block"
          >
            Enviar Mensaje por WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageForm;
