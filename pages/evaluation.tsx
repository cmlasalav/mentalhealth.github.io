"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useRouter } from "next/navigation";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Icons } from "../components/ui/icons";

interface Expert {
  id: number;
  name: string;
  specialty: string;
  lastAppointment: string;
}

const experts: Expert[] = [
  {
    id: 1,
    name: "Dra. Ana García",
    specialty: "Psicóloga Clínica",
    lastAppointment: "2023-06-15",
  },
  {
    id: 2,
    name: "Dr. Carlos Rodríguez",
    specialty: "Psiquiatra",
    lastAppointment: "2023-06-22",
  },
  {
    id: 3,
    name: "Lic. María López",
    specialty: "Terapeuta Familiar",
    lastAppointment: "2023-06-29",
  },
];

export default function ExpertEvaluation() {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // Aquí iría la lógica de envío de evaluación
    setTimeout(() => {
      setIsLoading(false);
      alert("Evaluación enviada con éxito. ¡Gracias por tu feedback!");
      setSelectedExpert(null);
      setRating(0);
      setComment("");

      router.push("/dashboard");
    }, 2000);
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
        Evaluación de Expertos en Salud
      </motion.h1>
      <div className="grid md:grid-cols-3 gap-6">
        {experts.map((expert, index) => (
          <motion.div
            key={expert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              className="cursor-pointer transition-shadow hover:shadow-lg"
              onClick={() => setSelectedExpert(expert)}
            >
              <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
                <CardTitle className="text-gray-800">{expert.name}</CardTitle>
                <CardDescription>{expert.specialty}</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-gray-600">Última cita: {expert.lastAppointment}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">Evaluar</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      {selectedExpert && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="mt-8 overflow-hidden shadow-md">
            <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
              <CardTitle className="text-gray-800">Evaluar a {selectedExpert.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="rating" className="text-gray-700">Calificación (1-5 estrellas)</Label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className={`text-2xl ${
                            rating >= star ? "text-yellow-400" : "text-gray-300"
                          }`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          ★
                        </motion.button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="comment" className="text-gray-700">Comentarios</Label>
                    <textarea
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      rows={4}
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                    disabled={isLoading}
                  >
                    {isLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Enviar Evaluación
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-500">
                Nota: Tus comentarios son anónimos y ayudan a mejorar nuestros
                servicios.
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );
}
