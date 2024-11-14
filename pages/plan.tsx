'use client'

import React, { useState } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Icons } from "../components/ui/icons"

export default function PlanSelection() {
  const [selectedPlan, setSelectedPlan] = useState<'noAds' | 'lifetime' | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    // Aquí iría la lógica de pago
    setTimeout(() => {
      setIsLoading(false)
      alert('Pago confirmado. ¡Gracias por tu suscripción!')
    }, 2000)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Selección de Planes</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className={`cursor-pointer ${selectedPlan === 'noAds' ? 'border-blue-500 border-2' : ''}`} onClick={() => setSelectedPlan('noAds')}>
          <CardHeader>
            <CardTitle>Eliminación de Anuncios</CardTitle>
            <CardDescription>Disfruta de una experiencia sin interrupciones</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$9.99/mes</p>
            <ul className="list-disc list-inside mt-4">
              <li>Sin anuncios en toda la plataforma</li>
              <li>Acceso a contenido exclusivo</li>
            </ul>
          </CardContent>
        </Card>
        <Card className={`cursor-pointer ${selectedPlan === 'lifetime' ? 'border-blue-500 border-2' : ''}`} onClick={() => setSelectedPlan('lifetime')}>
          <CardHeader>
            <CardTitle>Suscripción de por Vida</CardTitle>
            <CardDescription>Acceso ilimitado para siempre</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$199.99</p>
            <ul className="list-disc list-inside mt-4">
              <li>Sin anuncios de por vida</li>
              <li>Acceso a todas las funciones premium</li>
              <li>Soporte prioritario</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      {selectedPlan && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Información de Pago</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Número de Tarjeta</Label>
                  <Input id="cardNumber" type="text" placeholder="1234 5678 9012 3456" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Fecha de Expiración</Label>
                    <Input id="expiryDate" type="text" placeholder="MM/AA" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" type="text" placeholder="123" required />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                  {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                  Pagar Ahora
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}