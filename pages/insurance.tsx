"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

interface Insurance {
  id: number;
  name: string;
  type: string;
  coverage: string[];
  price: string;
}

const insurances: Insurance[] = [
  {
    id: 1,
    name: "HealthPlus",
    type: "Completo",
    coverage: ["Terapia individual", "Terapia grupal", "Medicamentos"],
    price: "$100/mes",
  },
  {
    id: 2,
    name: "MindCare",
    type: "Básico",
    coverage: ["Terapia individual", "Medicamentos"],
    price: "$50/mes",
  },
  {
    id: 3,
    name: "WellnessPro",
    type: "Premium",
    coverage: [
      "Terapia individual",
      "Terapia grupal",
      "Medicamentos",
      "Hospitalización",
    ],
    price: "$200/mes",
  },
];

export default function InsuranceList() {
  const [selectedInsurance, setSelectedInsurance] = useState<Insurance | null>(
    null
  );
  const [filter, setFilter] = useState("");

  const filteredInsurances = insurances.filter(
    (insurance) =>
      filter === "Todos" ||
      insurance.name.toLowerCase().includes(filter.toLowerCase()) ||
      insurance.type.toLowerCase().includes(filter.toLowerCase()) ||
      insurance.coverage.some((c) =>
        c.toLowerCase().includes(filter.toLowerCase())
      )
  );

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
        Seguros Médicos Disponibles
      </motion.h1>
      <motion.div 
        className="mb-8 flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Input
          type="text"
          placeholder="Buscar seguros"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="flex-grow bg-white border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
        <Select onValueChange={(value) => setFilter(value)}>
          <SelectTrigger className="w-full sm:w-[180px] bg-white border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
            <SelectValue placeholder="Filtrar por tipo" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="Todos">Todos</SelectItem>
            <SelectItem value="Completo">Completo</SelectItem>
            <SelectItem value="Básico">Básico</SelectItem>
            <SelectItem value="Premium">Premium</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {filteredInsurances.map((insurance, index) => (
          <motion.div
            key={insurance.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              className="cursor-pointer transition-shadow hover:shadow-lg"
              onClick={() => setSelectedInsurance(insurance)}
            >
              <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
                <CardTitle className="text-gray-800">{insurance.name}</CardTitle>
                <CardDescription className="text-gray-600">{insurance.type}</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <p className="font-bold text-indigo-600">{insurance.price}</p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {insurance.coverage.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">Ver Detalles</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      {selectedInsurance && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="mt-8 overflow-hidden shadow-md">
            <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
              <CardTitle className="text-gray-800">{selectedInsurance.name}</CardTitle>
              <CardDescription className="text-gray-600">{selectedInsurance.type}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <p className="font-bold mb-2 text-indigo-600">Precio: {selectedInsurance.price}</p>
              <p className="font-semibold mb-2 text-gray-700">Cobertura:</p>
              <ul className="list-disc list-inside text-gray-600">
                {selectedInsurance.coverage.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-gray-700">
                Este seguro ofrece una excelente cobertura para tus necesidades de
                salud mental. Incluye acceso a una amplia red de profesionales y
                servicios de alta calidad.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
                Vincular Seguro
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );
}
