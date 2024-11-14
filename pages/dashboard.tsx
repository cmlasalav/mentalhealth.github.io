'use client'

import React, { useState } from 'react'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
//import { Icons } from "../components/ui/icons"
import Link from 'next/link'

export default function UserDashboard() {
  const [emotionalState, setEmotionalState] = useState<number>(7)

  const upcomingAppointments = [
    { id: 1, date: "2023-07-05", time: "14:00", expert: "Dra. Ana García" },
    { id: 2, date: "2023-07-12", time: "10:30", expert: "Dr. Carlos Rodríguez" },
  ]

  const recentAppointments = [
    { id: 1, date: "2023-06-28", expert: "Lic. María López" },
    { id: 2, date: "2023-06-21", expert: "Dra. Ana García" },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Bienvenido a tu Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Estado Emocional</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-center">{emotionalState}/10</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Actualizar Mi Estado</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Próximas Citas</CardTitle>
          </CardHeader>
          <CardContent>
            {upcomingAppointments.map(appointment => (
              <div key={appointment.id} className="mb-2">
                <p>{appointment.date} - {appointment.time}</p>
                <p className="text-sm text-gray-600">{appointment.expert}</p>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Link href="/appointment" className="w-full">
              <Button className="w-full">Solicitar Nueva Cita</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Historial de Citas</CardTitle>
          </CardHeader>
          <CardContent>
            {recentAppointments.map(appointment => (
              <div key={appointment.id} className="mb-2">
                <p>{appointment.date}</p>
                <p className="text-sm text-gray-600">{appointment.expert}</p>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Link href="/appointmentHistory" className="w-full">
              <Button className="w-full">Ver Historial Completo</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Evaluación de Expertos</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Tienes 2 expertos pendientes de evaluar.</p>
          </CardContent>
          <CardFooter>
            <Link href="/evaluation" className="w-full">
              <Button className="w-full">Evaluar Expertos</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Notificaciones Importantes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>Recuerda tu próxima cita el 5 de julio a las 14:00 con la Dra. Ana García.</li>
            <li>Nuevo artículo disponible: "Técnicas de relajación para el manejo del estrés".</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Planes de Pago</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>Acá puedes ver los planes disponibles</li>
            <Link href="/plan" className="w-full">
              <Button className="w-full">Ver planes</Button>
            </Link>
          </ul>
        </CardContent>
      </Card>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Seguros disponibles</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>Acá puedes ver los segiros médicos disponibles</li>
            <Link href="/insurance" className="w-full">
              <Button className="w-full">Ver seguros médicos</Button>
            </Link>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}