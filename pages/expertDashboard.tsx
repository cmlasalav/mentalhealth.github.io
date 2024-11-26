'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Calendar, DollarSign, Star, UserCheck, ChevronDown } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

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
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen"
    >
      <motion.h1 
        className="text-4xl font-bold mb-6 text-blue-800 text-center"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Dashboard de Experto en Salud
      </motion.h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 rounded-xl bg-blue-100 p-1">
          <AnimatedTabTrigger value="appointments" icon={<Calendar />}>Citas</AnimatedTabTrigger>
          <AnimatedTabTrigger value="evaluations" icon={<Star />}>Evaluaciones</AnimatedTabTrigger>
          <AnimatedTabTrigger value="patients" icon={<UserCheck />}>Pacientes</AnimatedTabTrigger>
          <AnimatedTabTrigger value="earnings" icon={<DollarSign />}>Ganancias</AnimatedTabTrigger>
        </TabsList>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <TabsContent value="appointments">
              <AppointmentsCard />
            </TabsContent>
            <TabsContent value="evaluations">
              <EvaluationsCard />
            </TabsContent>
            <TabsContent value="patients">
              <PatientsCard />
            </TabsContent>
            <TabsContent value="earnings">
              <EarningsCard />
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </motion.div>
  )
}

function AnimatedTabTrigger({ value, icon, children }) {
  return (
    <TabsTrigger 
      value={value}
      className="data-[state=active]:bg-white data-[state=active]:text-blue-700 transition-all duration-200"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2"
      >
        {icon}
        <span>{children}</span>
      </motion.div>
    </TabsTrigger>
  )
}

function AppointmentsCard() {
  return (
    <Card className="w-full overflow-hidden shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <CardTitle>Citas Pendientes</CardTitle>
        <CardDescription className="text-blue-100">Gestiona tus próximas citas con pacientes</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <ul className="space-y-4">
          {[
            { id: 1, patient: "Juan Pérez", date: "2023-07-05", time: "14:00", note: "Primera consulta" },
            { id: 2, patient: "María García", date: "2023-07-06", time: "10:30", note: "Seguimiento mensual" },
            { id: 3, patient: "Carlos Rodríguez", date: "2023-07-07", time: "16:00", note: "Evaluación de progreso" },
          ].map((appointment) => (
            <motion.li 
              key={appointment.id} 
              className="flex justify-between items-center p-4 bg-white rounded-lg shadow transition-shadow hover:shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div>
                <p className="font-semibold text-blue-700">{appointment.patient}</p>
                <p className="text-sm text-gray-600">{appointment.date} - {appointment.time}</p>
                <p className="text-sm text-gray-500">{appointment.note}</p>
              </div>
              <div className="space-x-2">
                <Button variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">Confirmar</Button>
                <Button variant="outline" className="bg-red-50 text-red-700 hover:bg-red-100">Cancelar</Button>
              </div>
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function EvaluationsCard() {
  return (
    <Card className="w-full overflow-hidden shadow-lg">
      <CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
        <CardTitle>Evaluaciones de Usuarios</CardTitle>
        <CardDescription className="text-yellow-100">Resumen de tus evaluaciones y comentarios de pacientes</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <motion.div 
          className="mb-6 bg-yellow-50 p-4 rounded-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-yellow-700">Calificación Promedio: 4.7 ⭐</h3>
          <p className="text-yellow-600">Total de evaluaciones: 128</p>
        </motion.div>
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2 text-orange-700">Comentarios Recientes</h4>
          <ul className="space-y-2">
            <motion.li 
              className="p-3 bg-orange-50 rounded-lg shadow"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <p className="text-orange-800">"Excelente atención, muy profesional y empático."</p>
            </motion.li>
            <motion.li 
              className="p-3 bg-orange-50 rounded-lg shadow"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <p className="text-orange-800">"Me ha ayudado mucho en mi proceso de recuperación."</p>
            </motion.li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 text-orange-700">Evolución de Calificaciones</h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={emotionalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#fbd38d" />
              <XAxis dataKey="date" stroke="#ed8936" />
              <YAxis domain={[0, 10]} stroke="#ed8936" />
              <Tooltip contentStyle={{ backgroundColor: '#fffaf0', border: '1px solid #ed8936' }} />
              <Line type="monotone" dataKey="score" stroke="#ed8936" strokeWidth={2} dot={{ fill: '#ed8936', strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

function PatientsCard() {
  return (
    <Card className="w-full overflow-hidden shadow-lg">
      <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
        <CardTitle>Evaluación Emocional de Pacientes</CardTitle>
        <CardDescription className="text-green-100">Seguimiento del estado emocional de tus pacientes</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-sm text-teal-600 mb-4 bg-teal-50 p-2 rounded">Nota: Esta información es confidencial y solo visible para ti como experto autorizado.</p>
        <ul className="space-y-6">
          {[
            { id: 1, name: "Ana Martínez", lastScore: 7 },
            { id: 2, name: "Luis Sánchez", lastScore: 5 },
            { id: 3, name: "Elena Torres", lastScore: 8 },
          ].map((patient) => (
            <motion.li 
              key={patient.id} 
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h4 className="text-lg font-semibold mb-2 text-teal-700">{patient.name}</h4>
              <p className="mb-2 text-teal-600">Último estado emocional reportado: <span className="font-bold">{patient.lastScore}/10</span></p>
              <ResponsiveContainer width="100%" height={100}>
                <LineChart data={emotionalData}>
                  <XAxis dataKey="date" hide />
                  <YAxis hide domain={[0, 10]} />
                  <YAxis domain={[0, 10]} />
                  <Tooltip contentStyle={{ backgroundColor: '#e6fffa', border: '1px solid #2c7a7b' }} />
                  <Line type="monotone" dataKey="score" stroke="#2c7a7b" strokeWidth={2} dot={{ fill: '#2c7a7b', strokeWidth: 2 }} />
                </LineChart>
              </ResponsiveContainer>
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function EarningsCard() {
  return (
    <Card className="w-full overflow-hidden shadow-lg">
      <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <CardTitle>Ganancias por Citas</CardTitle>
        <CardDescription className="text-indigo-100">Resumen de tus ingresos y transacciones</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <motion.div 
          className="mb-6 bg-indigo-50 p-4 rounded-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-indigo-700">Ganancias Totales: $22,800</h3>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Solicitar Retiro</Button>
        </motion.div>
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2 text-purple-700">Historial de Ingresos</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#a78bfa" />
              <XAxis dataKey="month" stroke="#7c3aed" />
              <YAxis stroke="#7c3aed" />
              <Tooltip contentStyle={{ backgroundColor: '#ede9fe', border: '1px solid #7c3aed' }} />
              <Bar dataKey="earnings" fill="#7c3aed" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 text-purple-700">Últimas Transacciones</h4>
          <ul className="space-y-2">
            {[
              { id: 1, patient: "Juan Pérez", date: "2023-06-30", amount: 150 },
              { id: 2, patient: "María García", date: "2023-06-28", amount: 120 },
              { id: 3, patient: "Carlos Rodríguez", date: "2023-06-25", amount: 180 },
            ].map((transaction) => (
              <motion.li 
                key={transaction.id} 
                className="flex justify-between items-center p-3 bg-purple-50 rounded-lg shadow"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="font-medium text-purple-700">{transaction.patient}</span>
                <span className="text-purple-600">{transaction.date}</span>
                <span className="font-semibold text-green-600">${transaction.amount}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}