"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../components/ui/card";
import { Icons } from "../components/ui/icons";
import Link from "next/link";

export default function UserDashboard() {
  const [emotionalState, setEmotionalState] = useState<number>(7);

  const upcomingAppointments = [
    { id: 1, date: "2023-07-05", time: "14:00", expert: "Dra. Ana García" },
    {
      id: 2,
      date: "2023-07-12",
      time: "10:30",
      expert: "Dr. Carlos Rodríguez",
    },
  ];

  const recentAppointments = [
    { id: 1, date: "2023-06-28", expert: "Lic. María López" },
    { id: 2, date: "2023-06-21", expert: "Dra. Ana García" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-8 px-4 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen"
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-blue-800"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Bienvenido a tu Dashboard
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-8">
        <AnimatedCard title="Estado Emocional">
          <CardContent>
            <motion.p
              className="text-6xl font-bold text-center text-blue-600"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              {emotionalState}/10
            </motion.p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-200">
              Actualizar Mi Estado
            </Button>
          </CardFooter>
        </AnimatedCard>
        <AnimatedCard title="Próximas Citas">
          <CardContent>
            {upcomingAppointments.map((appointment, index) => (
              <motion.div
                key={appointment.id}
                className="mb-4 p-3 bg-white rounded-lg shadow"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="font-semibold text-blue-700">
                  {appointment.date} - {appointment.time}
                </p>
                <p className="text-sm text-gray-600">{appointment.expert}</p>
              </motion.div>
            ))}
          </CardContent>
          <CardFooter>
            <Link href="/appointment-request" className="w-full">
              <Button className="w-full bg-green-500 hover:bg-green-600 transition-colors duration-200">
                Solicitar Nueva Cita
              </Button>
            </Link>
          </CardFooter>
        </AnimatedCard>
        <AnimatedCard title="Historial de Citas">
          <CardContent>
            {recentAppointments.map((appointment, index) => (
              <motion.div
                key={appointment.id}
                className="mb-4 p-3 bg-white rounded-lg shadow"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="font-semibold text-purple-700">
                  {appointment.date}
                </p>
                <p className="text-sm text-gray-600">{appointment.expert}</p>
              </motion.div>
            ))}
          </CardContent>
          <CardFooter>
            <Link href="/appointment-history" className="w-full">
              <Button className="w-full bg-purple-500 hover:bg-purple-600 transition-colors duration-200">
                Ver Historial Completo
              </Button>
            </Link>
          </CardFooter>
        </AnimatedCard>
        <AnimatedCard title="Evaluación de Expertos">
          <CardContent>
            <p className="text-lg text-center text-indigo-700">
              Tienes 2 expertos pendientes de evaluar.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/expert-evaluation" className="w-full">
              <Button className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors duration-200">
                Evaluar Expertos
              </Button>
            </Link>
          </CardFooter>
        </AnimatedCard>
      </div>
      <AnimatedCard  title="Planes de Pago">
        <CardContent>
          <ul className="list-disc list-inside">
            <li>Acá puedes ver los planes disponibles</li>
            <Link href="/plan" className="w-full">
              <Button className="w-full">Ver planes</Button>
            </Link>
          </ul>
        </CardContent>
      </AnimatedCard>
      <AnimatedCard  title="Seguros disponibles">
        <CardContent>
          <ul className="list-disc list-inside">
            <li>Acá puedes ver los seguros médicos disponibles</li>
            <Link href="/insurance" className="w-full">
              <Button className="w-full">Ver seguros médicos</Button>
            </Link>
          </ul>
        </CardContent>
      </AnimatedCard>
      <AnimatedCard title="Notificaciones Importantes" className="mt-8">
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <motion.li
              className="text-blue-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Recuerda tu próxima cita el 5 de julio a las 14:00 con la Dra. Ana
              García.
            </motion.li>
            <motion.li
              className="text-green-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Nuevo artículo disponible: "Técnicas de relajación para el manejo
              del estrés".
            </motion.li>
          </ul>
        </CardContent>
      </AnimatedCard>
      <AnimatedCard title="Acceso para Expertos en Salud" className="mt-8">
        <CardContent>
          <Link href="/expert-dashboard">
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
              Vista de Experto en Salud
            </Button>
          </Link>
        </CardContent>
      </AnimatedCard>
    </motion.div>
  );
}

function AnimatedCard({ title, children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className={`overflow-hidden shadow-lg ${className}`}>
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        {children}
      </Card>
    </motion.div>
  );
}
