"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { ArrowLeft } from 'lucide-react';

export default function ArticlePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-8 px-4 bg-gray-50 min-h-screen"
    >
      <Link href="/dashboard">
        <Button
          variant="ghost"
          className="mb-4 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Dashboard
        </Button>
      </Link>
      <Card className="overflow-hidden shadow-lg">
        <CardHeader className="bg-gradient-to-r from-green-100 to-green-200">
          <CardTitle className="text-2xl font-bold text-gray-800">
            Técnicas de relajación para el manejo del estrés
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-4 text-sm text-gray-600">
            <p>Autor: Bastian Toledo</p>
            <p>Fecha: 29 de junio, 2023</p>
          </div>
          <div className="prose max-w-none">
            <p>
              El estrés es una respuesta natural del cuerpo ante situaciones desafiantes, pero cuando se vuelve crónico, puede afectar significativamente nuestra salud mental y física. Afortunadamente, existen técnicas de relajación efectivas que pueden ayudarnos a manejar el estrés y mejorar nuestro bienestar general.
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">1. Respiración profunda</h2>
            <p>
              La respiración profunda es una técnica simple pero poderosa para reducir el estrés. Inhala lentamente por la nariz durante 4 segundos, mantén la respiración por 4 segundos, y luego exhala por la boca durante 4 segundos. Repite este proceso varias veces.
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">2. Meditación mindfulness</h2>
            <p>
              La meditación mindfulness implica prestar atención al momento presente sin juzgar. Siéntate cómodamente, cierra los ojos y enfócate en tu respiración. Cuando tu mente divague, gentilmente trae tu atención de vuelta a la respiración.
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">3. Relajación muscular progresiva</h2>
            <p>
              Esta técnica implica tensar y luego relajar diferentes grupos musculares en tu cuerpo. Comienza con los pies y trabaja hacia arriba, tensando cada grupo muscular por 5 segundos y luego relajándolo por 10 segundos.
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">4. Visualización guiada</h2>
            <p>
              Cierra los ojos e imagina un lugar tranquilo y relajante, como una playa o un bosque. Utiliza todos tus sentidos para hacer la experiencia más vívida: imagina los sonidos, olores y sensaciones de ese lugar.
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">Conclusión</h2>
            <p>
              Practicar estas técnicas de relajación regularmente puede ayudarte a manejar mejor el estrés y mejorar tu calidad de vida. Recuerda que la consistencia es clave: incluso unos pocos minutos al día pueden marcar una gran diferencia en tu bienestar mental.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}