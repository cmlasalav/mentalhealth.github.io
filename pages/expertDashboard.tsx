'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Calendar, DollarSign, Star, UserCheck } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

// Datos de ejemplo para las gráficas
const emotionalData = [
  { date: '2023-01', score: 6 },
  { date: '2023-02', score: 7 },
  { date: '2023-03', score: 5 },
  { date: '2023-04', score: 8 },
  { date: '2023-05', score: 7 },
  { date: '2023-06', score: 9 },
]

const earningsData = [
  { month: 'Ene', earnings: 3000 },
  { month: 'Feb', earnings: 3500 },
  { month: 'Mar', earnings: 2800 },
  { month: 'Abr', earnings: 4200 },
  { month: 'May', earnings: 3800 },
  { month: 'Jun', earnings: 4500 },
]

export default function ExpertDashboard() {
  const [activeTab, setActiveTab] = useState("appointments")

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard de Experto en Salud</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="appointments"><Calendar className="mr-2 h-4 w-4" /> Citas</TabsTrigger>
          <TabsTrigger value="evaluations"><Star className="mr-2 h-4 w-4" /> Evaluaciones</TabsTrigger>
          <TabsTrigger value="patients"><UserCheck className="mr-2 h-4 w-4" /> Pacientes</TabsTrigger>
          <TabsTrigger value="earnings"><DollarSign className="mr-2 h-4 w-4" /> Ganancias</TabsTrigger>
        </TabsList>
        <TabsContent value="appointments">
          <Card>
            <CardHeader>
              <CardTitle>Citas Pendientes</CardTitle>
              <CardDescription>Gestiona tus próximas citas con pacientes</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  { id: 1, patient: "Juan Pérez", date: "2023-07-05", time: "14:00", note: "Primera consulta" },
                  { id: 2, patient: "María García", date: "2023-07-06", time: "10:30", note: "Seguimiento mensual" },
                  { id: 3, patient: "Carlos Rodríguez", date: "2023-07-07", time: "16:00", note: "Evaluación de progreso" },
                ].map((appointment) => (
                  <li key={appointment.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold">{appointment.patient}</p>
                      <p className="text-sm text-gray-600">{appointment.date} - {appointment.time}</p>
                      <p className="text-sm text-gray-500">{appointment.note}</p>
                    </div>
                    <div>
                      <Button variant="outline" className="mr-2">Confirmar</Button>
                      <Button variant="destructive">Cancelar</Button>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="evaluations">
          <Card>
            <CardHeader>
              <CardTitle>Evaluaciones de Usuarios</CardTitle>
              <CardDescription>Resumen de tus evaluaciones y comentarios de pacientes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Calificación Promedio: 4.7 ⭐</h3>
                <p className="text-gray-600">Total de evaluaciones: 128</p>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Comentarios Recientes</h4>
                <ul className="space-y-2">
                  <li className="p-2 bg-green-50 rounded">
                    <p className="text-green-800">"Excelente atención, muy profesional y empático."</p>
                  </li>
                  <li className="p-2 bg-green-50 rounded">
                    <p className="text-green-800">"Me ha ayudado mucho en mi proceso de recuperación."</p>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Evolución de Calificaciones</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={emotionalData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 10]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="score" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="patients">
          <Card>
            <CardHeader>
              <CardTitle>Evaluación Emocional de Pacientes</CardTitle>
              <CardDescription>Seguimiento del estado emocional de tus pacientes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">Nota: Esta información es confidencial y solo visible para ti como experto autorizado.</p>
              <ul className="space-y-6">
                {[
                  { id: 1, name: "Ana Martínez", lastScore: 7 },
                  { id: 2, name: "Luis Sánchez", lastScore: 5 },
                  { id: 3, name: "Elena Torres", lastScore: 8 },
                ].map((patient) => (
                  <li key={patient.id} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">{patient.name}</h4>
                    <p className="mb-2">Último estado emocional reportado: {patient.lastScore}/10</p>
                    <ResponsiveContainer width="100%" height={100}>
                      <LineChart data={emotionalData}>
                        <XAxis dataKey="date" hide />
                        <YAxis hide domain={[0, 10]} />
                        <Line type="monotone" dataKey="score" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="earnings">
          <Card>
            <CardHeader>
              <CardTitle>Ganancias por Citas</CardTitle>
              <CardDescription>Resumen de tus ingresos y transacciones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Ganancias Totales: $22,800</h3>
                <Button>Solicitar Retiro</Button>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Historial de Ingresos</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={earningsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="earnings" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Últimas Transacciones</h4>
                <ul className="space-y-2">
                  {[
                    { id: 1, patient: "Juan Pérez", date: "2023-06-30", amount: 150 },
                    { id: 2, patient: "María García", date: "2023-06-28", amount: 120 },
                    { id: 3, patient: "Carlos Rodríguez", date: "2023-06-25", amount: 180 },
                  ].map((transaction) => (
                    <li key={transaction.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span>{transaction.patient}</span>
                      <span className="text-gray-600">{transaction.date}</span>
                      <span className="font-semibold">${transaction.amount}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}