import React, { useState } from "react";
import toast from "react-hot-toast";
import { db } from "../services/firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import fondoCard from "../assets/fondo1.png";

const RsvpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "yes",
  });
  const [loading, setLoading] = useState(false);

  const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      toast.error("Por favor, ingresá tu nombre");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "confirmaciones"), {
        nombre: formData.name.trim(),
        asistencia: formData.attendance === "yes" ? "Si" : "No",
        fecha: serverTimestamp(),
      });

      toast.success("¡Respuesta guardada!");

      const asistira =
        formData.attendance === "yes"
          ? "¡Sí, confirmo asistencia! "
          : "Lamentablemente no puedo ir :(";
      let messageText = `Hola Morena! Vengo de tu invitación digital a confirmar mi asistencia.\n\n`;
      messageText += `*Nombre:* ${formData.name}\n`;
      messageText += `*Confirmación:* ${asistira}`;

      setFormData({
        name: "",
        attendance: "yes",
      });

      const encodedMessage = encodeURIComponent(messageText);
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
        "_blank",
      );
    } catch (error) {
      console.error("Error al guardar en Firebase:", error);
      toast.error("Hubo un problema al guardar la confirmación.");
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
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif text-white font-normal italic tracking-wide mb-2 drop-shadow-[0_2px_10px_rgba(236,72,153,0.3)]">
            Confirmación
          </h2>

          <p className="text-xs font-light text-neutral-300 leading-relaxed mb-5">
            Asegurá tu lugar antes del 15 de Agosto.
          </p>

          <form onSubmit={handleSubmit} className="w-full space-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre y Apellido"
              disabled={loading}
              className="w-full px-4 py-2.5 rounded-xl border border-pink-500/30 bg-black/40 text-white placeholder-neutral-400 text-xs focus:outline-none focus:border-pink-500 backdrop-blur-sm transition-all"
            />

            <div className="grid grid-cols-2 gap-2">
              <label
                className={`flex items-center justify-center py-2.5 border rounded-xl cursor-pointer text-xs transition-all backdrop-blur-sm ${
                  formData.attendance === "yes"
                    ? "bg-pink-500/30 border-pink-400 text-white font-medium shadow-[0_0_12px_rgba(236,72,153,0.3)]"
                    : "border-pink-500/20 bg-black/30 text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={formData.attendance === "yes"}
                  onChange={handleChange}
                  className="hidden"
                />
                Sí, asisto
              </label>

              <label
                className={`flex items-center justify-center py-2.5 border rounded-xl cursor-pointer text-xs transition-all backdrop-blur-sm ${
                  formData.attendance === "no"
                    ? "bg-purple-900/50 border-purple-400 text-white font-medium"
                    : "border-pink-500/20 bg-black/30 text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  checked={formData.attendance === "no"}
                  onChange={handleChange}
                  className="hidden"
                />
                No puedo ir
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium uppercase tracking-widest text-[10px] py-3 px-4 rounded-full shadow-lg transition-all transform hover: border-pink-400/30 cursor-pointer disabled:opacity-50 mt-2"
            >
              {loading ? "Enviando..." : "Confirmar Asistencia"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RsvpForm;
