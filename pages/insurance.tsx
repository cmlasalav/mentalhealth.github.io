"use client";

import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
//import { Label } from "../components/ui/label"
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
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Seguros Médicos Disponibles
      </h1>
      <div className="mb-8 flex gap-4">
        <Input
          type="text"
          placeholder="Buscar seguros"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="flex-grow"
        />
        <Select onValueChange={(value) => setFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrar por tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Todos">Todos</SelectItem>
            <SelectItem value="Completo">Completo</SelectItem>
            <SelectItem value="Básico">Básico</SelectItem>
            <SelectItem value="Premium">Premium</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {filteredInsurances.map((insurance) => (
          <Card
            key={insurance.id}
            className="cursor-pointer"
            onClick={() => setSelectedInsurance(insurance)}
          >
            <CardHeader>
              <CardTitle>{insurance.name}</CardTitle>
              <CardDescription>{insurance.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-bold">{insurance.price}</p>
              <ul className="list-disc list-inside mt-2">
                {insurance.coverage.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Ver Detalles</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {selectedInsurance && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>{selectedInsurance.name}</CardTitle>
            <CardDescription>{selectedInsurance.type}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-bold mb-2">Precio: {selectedInsurance.price}</p>
            <p className="font-semibold mb-2">Cobertura:</p>
            <ul className="list-disc list-inside">
              {selectedInsurance.coverage.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="mt-4">
              Este seguro ofrece una excelente cobertura para tus necesidades de
              salud mental. Incluye acceso a una amplia red de profesionales y
              servicios de alta calidad.
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Vincular Seguro
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
