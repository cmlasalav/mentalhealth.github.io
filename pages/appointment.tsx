"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
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
    image: "https://cmlasalav.github.io/mentalhealth.github.io/images/specialist.jpg",
  },
  {
    id: 2,
    name: "Dr. Carlos Rodríguez",
    specialty: "Psiquiatra",
    image: "https://cmlasalav.github.io/mentalhealth.github.io/images/specialist.jpg",
  },
  {
    id: 3,
    name: "Lic. María López",
    specialty: "Terapeuta Familiar",
    image: "https://cmlasalav.github.io/mentalhealth.github.io/images/specialist.jpg",
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
    setTimeout(() => {
      setIsLoading(false);
      alert(
        "Cita solicitada con éxito. El experto se pondrá en contacto contigo pronto."
      );
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
        Solicitar Cita con Expertos
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Input
          type="text"
          placeholder="Buscar expertos por nombre o especialidad"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-8 bg-white border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {filteredExperts.map((expert, index) => (
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
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-md"
                />
                <CardTitle className="text-gray-800">{expert.name}</CardTitle>
                <CardDescription className="text-gray-600">{expert.specialty}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">Solicitar Cita</Button>
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
              <CardTitle className="text-gray-800">Solicitar Cita con {selectedExpert.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-gray-700">Fecha Preferida</Label>
                    <Input id="date" type="date" required className="bg-white border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-gray-700">Hora Preferida</Label>
                    <Input id="time" type="time" required className="bg-white border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-gray-700">Notas (opcional)</Label>
                    <textarea
                      id="notes"
                      className="w-full p-2 bg-white border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      rows={4}
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
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
        </motion.div>
      )}
    </motion.div>
  );
}
