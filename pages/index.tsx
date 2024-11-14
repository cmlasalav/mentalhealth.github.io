"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const cycleMessage = () => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // El mensaje se oculta después de 5 segundos
    };

    // Iniciar el ciclo del mensaje
    cycleMessage();

    // Usar un intervalo para repetir el ciclo cada 6 segundos (5 segundos de visibilidad + 1 segundo de espera)
    const interval = setInterval(() => {
      cycleMessage();
    }, 6000);

    // Limpiar el intervalo al desmontar el componente
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-blue-600 mb-4">
          Bienvenido a tu espacio de salud mental
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Un lugar seguro para tu bienestar emocional
        </p>
      </motion.div>

      <Link href="/login">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Iniciar Sesión
        </motion.button>
      </Link>
    </div>
  );
}
