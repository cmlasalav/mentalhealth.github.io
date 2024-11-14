"use client";

import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { useRouter } from "next/router";
//import { Input } from "../components/ui/input"
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
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Evaluación de Expertos en Salud
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {experts.map((expert) => (
          <Card
            key={expert.id}
            className="cursor-pointer"
            onClick={() => setSelectedExpert(expert)}
          >
            <CardHeader>
              <CardTitle>{expert.name}</CardTitle>
              <CardDescription>{expert.specialty}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Última cita: {expert.lastAppointment}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Evaluar</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {selectedExpert && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Evaluar a {selectedExpert.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="rating">Calificación (1-5 estrellas)</Label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`text-2xl ${
                          rating >= star ? "text-yellow-400" : "text-gray-300"
                        }`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comment">Comentarios</Label>
                  <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full p-2 border rounded"
                    rows={4}
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
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
      )}
    </div>
  );
}
