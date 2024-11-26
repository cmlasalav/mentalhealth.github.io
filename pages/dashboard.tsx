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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import Link from "next/link";

export default function UserDashboard() {
  const [emotionalState, setEmotionalState] = useState<string>("7");
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

  const paymentPlans = [
    {
      id: 1,
      name: "Plan Básico",
      price: "$9.99/mes",
      features: ["Sin anuncios en toda la plataforma", "Acceso a contenido exclusivo"],
    },
    {
      id: 2,
      name: "Plan Estándar",
      price: "$199.99/lifetime",
      features: [
        "Sin anuncios de por vida",
        "Acceso a todas las funciones premium",
        "Soporte prioritario",
      ],
    },
  ];

  const insurancePlans = [
    { id: 1, name: "HealthPlus", coverage: "80% de cobertura en consultas" },
    {
      id: 2,
      name: "MindCare",
      coverage: "Cobertura completa con copago de $20",
    },
    {
      id: 3,
      name: "WellnessPro",
      coverage: "70% de cobertura en medicamentos",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-8 px-4 bg-gray-50 min-h-screen"
    >
      <motion.h1
        className="text-3xl font-semibold text-center mb-8 text-gray-800"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        Bienvenido a tu Espacio de Bienestar Mental
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-6">
        <AnimatedCard title="Estado Emocional">
          <CardContent>
            <motion.div
              className="flex items-center justify-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            >
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="#e0e7ff" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#4f46e5"
                    strokeWidth="10"
                    strokeDasharray={`${Number(emotionalState) * 28.27} 282.7`}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-indigo-700">
                    {emotionalState}
                  </span>
                </div>
              </div>
            </motion.div>
            <p className="text-center mt-4 text-gray-600">
              Tu estado emocional actual
            </p>
            <Select value={emotionalState} onValueChange={setEmotionalState}>
              <SelectTrigger className="bg-white border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                <SelectValue placeholder="Selecciona tu nivel emocional" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
          <CardFooter></CardFooter>
        </AnimatedCard>
        <AnimatedCard title="Próximas Citas">
          <CardContent>
            {upcomingAppointments.map((appointment, index) => (
              <motion.div
                key={appointment.id}
                className="mb-4 p-3 bg-white rounded-lg shadow-sm border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="font-medium text-gray-800">
                  {appointment.date} - {appointment.time}
                </p>
                <p className="text-sm text-gray-600">{appointment.expert}</p>
              </motion.div>
            ))}
          </CardContent>
          <CardFooter>
            <Link href="/appointment" className="w-full">
              <Button className="w-full text-white  bg-green-600 hover:bg-green-700 transition-colors duration-200">
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
                className="mb-4 p-3 bg-white rounded-lg shadow-sm border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="font-medium text-gray-800">{appointment.date}</p>
                <p className="text-sm text-gray-600">{appointment.expert}</p>
              </motion.div>
            ))}
          </CardContent>
          <CardFooter>
            <Link href="/appointmentHistory" className="w-full">
              <Button className="w-full text-white  bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                Ver Historial Completo
              </Button>
            </Link>
          </CardFooter>
        </AnimatedCard>
        <AnimatedCard title="Evaluación de Expertos">
          <CardContent>
            <p className="text-center text-gray-700">
              Tienes 3 expertos pendientes de evaluar.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/evaluation" className="w-full">
              <Button className="w-full text-white  bg-purple-600 hover:bg-purple-700 transition-colors duration-200">
                Evaluar Expertos
              </Button>
            </Link>
          </CardFooter>
        </AnimatedCard>
        <AnimatedCard title="Planes de Pago">
          <CardContent>
            <div className="space-y-4">
              {paymentPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  className="p-4 bg-white rounded-lg shadow-sm border border-gray-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="font-semibold text-lg text-gray-800">
                    {plan.name}
                  </h3>
                  <p className="text-indigo-600 font-bold">{plan.price}</p>
                  <ul className="mt-2 space-y-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/plan" className="w-full">
              <Button className="w-full text-white  bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
                Cambiar Plan
              </Button>
            </Link>
          </CardFooter>
        </AnimatedCard>
        <AnimatedCard title="Seguros Médicos Disponibles">
          <CardContent>
            <div className="space-y-4">
              {insurancePlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  className="p-4 bg-white rounded-lg shadow-sm border border-gray-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="font-semibold text-gray-800">{plan.name}</h3>
                  <p className="text-sm text-gray-600">{plan.coverage}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/insurance" className="w-full">
              <Button className="w-full text-white  bg-teal-600 hover:bg-teal-700 transition-colors duration-200">
                Más Información
              </Button>
            </Link>
          </CardFooter>
        </AnimatedCard>
      </div>

      <AnimatedCard title="Notificaciones Importantes" className="mt-8">
        <CardContent>
          <ul className="space-y-2">
            <motion.li
              className="text-gray-700 bg-blue-50 p-3 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Recuerda tu próxima cita el 5 de julio a las 14:00 con la Dra. Ana
              García.
            </motion.li>
            <motion.li
              className="text-gray-700 bg-green-50 p-3 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
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
          <Link href="/expertDashboard">
            <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">
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
      <Card className={`overflow-hidden shadow-md ${className}`}>
        <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
          <CardTitle className="text-gray-800">{title}</CardTitle>
        </CardHeader>
        {children}
      </Card>
    </motion.div>
  );
}
