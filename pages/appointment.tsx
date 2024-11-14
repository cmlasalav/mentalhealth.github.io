"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
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
  image: string;
}

const experts: Expert[] = [
  {
    id: 1,
    name: "Dra. Ana García",
    specialty: "Psicóloga Clínica",
    image: "/images/specialist.jpg",
  },
  {
    id: 2,
    name: "Dr. Carlos Rodríguez",
    specialty: "Psiquiatra",
    image: "/images/specialist.jpg",
  },
  {
    id: 3,
    name: "Lic. María López",
    specialty: "Terapeuta Familiar",
    image: "/images/specialist.jpg",
  },
];

export default function AppointmentRequest() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const filteredExperts = experts.filter(
    (expert) =>
      expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // Aquí iría la lógica de solicitud de cita
    setTimeout(() => {
      setIsLoading(false);
      alert(
        "Cita solicitada con éxito. El experto se pondrá en contacto contigo pronto."
      );
      router.push("/dashboard");
    }, 2000);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Solicitar Cita con Expertos
      </h1>
      <Input
        type="text"
        placeholder="Buscar expertos por nombre o especialidad"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-8"
      />
      <div className="grid md:grid-cols-3 gap-8">
        {filteredExperts.map((expert) => (
          <Card
            key={expert.id}
            className="cursor-pointer"
            onClick={() => setSelectedExpert(expert)}
          >
            <CardHeader>
              <img
                src={expert.image}
                alt={expert.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <CardTitle>{expert.name}</CardTitle>
              <CardDescription>{expert.specialty}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full">Solicitar Cita</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {selectedExpert && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Solicitar Cita con {selectedExpert.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Fecha Preferida</Label>
                  <Input id="date" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Hora Preferida</Label>
                  <Input id="time" type="time" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Notas (opcional)</Label>
                  <textarea
                    id="notes"
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
                  Confirmar Cita
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
