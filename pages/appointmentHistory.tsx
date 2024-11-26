"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Appointment {
  id: number;
  date: string;
  expert: string;
  summary: string;
}

const appointments: Appointment[] = [
  {
    id: 1,
    date: "2023-06-15",
    expert: "Dra. Ana García",
    summary: "Sesión inicial, establecimiento de objetivos",
  },
  {
    id: 2,
    date: "2023-06-22",
    expert: "Dra. Ana García",
    summary: "Discusión sobre técnicas de manejo del estrés",
  },
  {
    id: 3,
    date: "2023-06-29",
    expert: "Dr. Carlos Rodríguez",
    summary: "Evaluación de medicación y ajustes",
  },
];

const emotionalData = [
  { date: "2023-06-15", level: 5 },
  { date: "2023-06-16", level: 6 },
  { date: "2023-06-17", level: 4 },
  { date: "2023-06-18", level: 7 },
  { date: "2023-06-19", level: 6 },
  { date: "2023-06-20", level: 8 },
  { date: "2023-06-21", level: 7 },
];

export default function AppointmentHistory() {
  const [emotionalLevel, setEmotionalLevel] = useState<string>("5");
  const [notes, setNotes] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Estado emocional registrado: ${emotionalLevel}/10. Notas: ${notes}`);
    setNotes("");
  };

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
        Historial de Citas y Seguimiento Emocional
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="overflow-hidden shadow-md">
            <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
              <CardTitle className="text-gray-800">
                Historial de Citas
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {appointments.map((appointment, index) => (
                <motion.div
                  key={appointment.id}
                  className="mb-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="font-bold text-gray-800">{appointment.date}</p>
                  <p className="text-gray-600">{appointment.expert}</p>
                  <p className="text-sm text-gray-500">{appointment.summary}</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="overflow-hidden shadow-md">
            <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
              <CardTitle className="text-gray-800">
                Seguimiento de Estado Emocional
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="emotionalLevel" className="text-gray-700">
                    Estado Emocional (1-10)
                  </Label>
                  <Select
                    value={emotionalLevel}
                    onValueChange={setEmotionalLevel}
                  >
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
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-gray-700">
                    Notas
                  </Label>
                  <textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-2 bg-white border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    rows={4}
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                >
                  Registrar Estado Emocional
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="mt-8 overflow-hidden shadow-md">
          <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
            <CardTitle className="text-gray-800">
              Gráfico de Progreso Emocional
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={emotionalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="date" stroke="#6b7280" />
                <YAxis domain={[0, 10]} stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e0e0e0",
                    borderRadius: "4px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="level"
                  stroke="#4f46e5"
                  strokeWidth={2}
                  dot={{ fill: "#4f46e5", strokeWidth: 2 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
