"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Icons } from "../components/ui/icons";

export default function PlanSelection() {
  const [selectedPlan, setSelectedPlan] = useState<"noAds" | "lifetime" | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // Aquí iría la lógica de pago
    setTimeout(() => {
      setIsLoading(false);
      alert("Pago confirmado. ¡Gracias por tu suscripción!");
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
        Selección de Planes
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card
            className={`cursor-pointer transition-shadow hover:shadow-lg ${
              selectedPlan === "noAds" ? "border-indigo-500 border-2" : ""
            }`}
            onClick={() => setSelectedPlan("noAds")}
          >
            <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
              <CardTitle className="text-gray-800">
                Eliminación de Anuncios
              </CardTitle>
              <CardDescription className="text-gray-600">
                Disfruta de una experiencia sin interrupciones
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-2xl font-bold text-indigo-600">$9.99/mes</p>
              <ul className="list-disc list-inside mt-4 text-gray-700">
                <li>Sin anuncios en toda la plataforma</li>
                <li>Acceso a contenido exclusivo</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card
            className={`cursor-pointer transition-shadow hover:shadow-lg ${
              selectedPlan === "lifetime" ? "border-indigo-500 border-2" : ""
            }`}
            onClick={() => setSelectedPlan("lifetime")}
          >
            <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
              <CardTitle className="text-gray-800">
                Suscripción de por Vida
              </CardTitle>
              <CardDescription className="text-gray-600">
                Acceso ilimitado para siempre
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-2xl font-bold text-indigo-600">$199.99</p>
              <ul className="list-disc list-inside mt-4 text-gray-700">
                <li>Sin anuncios de por vida</li>
                <li>Acceso a todas las funciones premium</li>
                <li>Soporte prioritario</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      {selectedPlan && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="mt-8 overflow-hidden shadow-md">
            <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
              <CardTitle className="text-gray-800">
                Información de Pago
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber" className="text-gray-700">
                      Número de Tarjeta
                    </Label>
                    <Input
                      id="cardNumber"
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      required
                      className="bg-white border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate" className="text-gray-700">
                        Fecha de Expiración
                      </Label>
                      <Input
                        id="expiryDate"
                        type="text"
                        placeholder="MM/AA"
                        required
                        className="bg-white border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv" className="text-gray-700">
                        CVV
                      </Label>
                      <Input
                        id="cvv"
                        type="text"
                        placeholder="123"
                        required
                        className="bg-white border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                    disabled={isLoading}
                  >
                    {isLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Pagar Ahora
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
