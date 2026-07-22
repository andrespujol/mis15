import React, { useState } from "react";
import toast from "react-hot-toast";
import { db } from "../services/firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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
      // 1. Guardar la respuesta en Firestore
      await addDoc(collection(db, "confirmaciones"), {
        nombre: formData.name.trim(),
        asistencia: formData.attendance === "yes" ? "Si" : "No",
        fecha: serverTimestamp(),
      });

      toast.success("¡Respuesta guardada!");

      // 2. Preparar el mensaje de WhatsApp
      const asistira =
        formData.attendance === "yes"
          ? "¡Sí, confirmo asistencia! "
          : "Lamentablemente no puedo ir :(";
      let messageText = `Hola Morena! Vengo de tu invitación digital a confirmar mi asistencia.\n\n`;
      messageText += `*Nombre:* ${formData.name}\n`;
      messageText += `*Confirmación:* ${asistira}`;

      // 3. LIMPIAR EL FORMULARIO
      setFormData({
        name: "",
        attendance: "yes",
      });

      // 4. Redirigir a WhatsApp
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
    <div className="bg-neutral-50 text-neutral-800 min-h-screen w-full flex items-center justify-center px-4 text-center border-t border-neutral-200">
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
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>
        </div>

        <h2 className="text-4xl font-serif font-bold tracking-wide text-center mb-2">
          Confirmación
        </h2>
        <p className="text-center text-neutral-400 mb-8 italic text-sm">
          Asegurá tu lugar antes del 15 de Agosto.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 md:p-8 rounded-3xl border border-neutral-200/60 shadow-[0_15px_40px_rgba(0,0,0,0.05)] space-y-6"
        >
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 mb-2">
              Nombre y Apellido
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ej: Juan Pérez"
              disabled={loading}
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:border-pink-500 bg-neutral-50 text-neutral-800 text-sm disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 mb-2">
              ¿Asistirás?
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label
                className={`flex items-center justify-center py-3.5 border rounded-xl cursor-pointer font-medium text-sm transition-all ${
                  formData.attendance === "yes"
                    ? "bg-pink-50 border-pink-400 text-pink-700 font-semibold"
                    : "border-neutral-200 bg-neutral-50 text-neutral-400"
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
                className={`flex items-center justify-center py-3.5 border rounded-xl cursor-pointer font-medium text-sm transition-all ${
                  formData.attendance === "no"
                    ? "bg-neutral-800 border-neutral-800 text-white font-semibold"
                    : "border-neutral-200 bg-neutral-50 text-neutral-400"
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
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold uppercase tracking-wider text-[11px] py-4 rounded-xl shadow-md cursor-pointer block disabled:opacity-50 transition-all"
          >
            {loading ? "Guardando..." : "Confirmar Asistencia"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RsvpForm;
