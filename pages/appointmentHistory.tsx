'use client'

import React, { useState } from 'react'
import { Button } from "../components/ui/button"
//import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface Appointment {
  id: number;
  date: string;
  expert: string;
  summary: string;
}

const appointments: Appointment[] = [
  { id: 1, date: "2023-06-15", expert: "Dra. Ana García", summary: "Sesión inicial, establecimiento de objetivos" },
  { id: 2, date: "2023-06-22", expert: "Dra. Ana García", summary: "Discusión sobre técnicas de manejo del estrés" },
  { id: 3, date: "2023-06-29", expert: "Dr. Carlos Rodríguez", summary: "Evaluación de medicación y ajustes" },
]

const emotionalData = [
  { date: '2023-06-15', level: 5 },
  { date: '2023-06-16', level: 6 },
  { date: '2023-06-17', level: 4 },
  { date: '2023-06-18', level: 7 },
  { date: '2023-06-19', level: 6 },
  { date: '2023-06-20', level: 8 },
  { date: '2023-06-21', level: 7 },
]

export default function AppointmentHistory() {
  const [emotionalLevel, setEmotionalLevel] = useState<string>('5')
  const [notes, setNotes] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert(`Estado emocional registrado: ${emotionalLevel}/10. Notas: ${notes}`)
    setNotes('')
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Historial de Citas y Seguimiento Emocional</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Historial de Citas</CardTitle>
          </CardHeader>
          <CardContent>
            {appointments.map(appointment => (
              <div key={appointment.id} className="mb-4 p-4 border rounded">
                <p className="font-bold">{appointment.date}</p>
                <p>{appointment.expert}</p>
                <p className="text-sm text-gray-600">{appointment.summary}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Seguimiento de Estado Emocional</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="emotionalLevel">Estado Emocional (1-10)</Label>
                <Select value={emotionalLevel} onValueChange={setEmotionalLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu nivel emocional" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notas</Label>
                <textarea 
                  id="notes" 
                  value={notes} 
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-2 border rounded" 
                  rows={4}
                ></textarea>
              </div>
              <Button type="submit" className="w-full">Registrar Estado Emocional</Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Gráfico de Progreso Emocional</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={emotionalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 10]} />
              <Tooltip />
              <Line type="monotone" dataKey="level" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}