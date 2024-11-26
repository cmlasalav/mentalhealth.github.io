import React, { useState } from "react";
import { useRouter } from "next/router";
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Icons } from "../components/ui/icons";

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [registerType, setRegisterType] = useState<"patient" | "expert" | null>(
    null
  );

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // Aquí iría la lógica de autenticación
    setTimeout(() => {
      setIsLoading(false), router.push("/dashboard");
    }, 2000); // Simulación de carga
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-blue-600">
            CESM
          </CardTitle>
          <CardDescription className="text-center">
            Plataforma de apoyo en salud mental
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={(value) =>
              setActiveTab(value as "login" | "register")
            }
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
              <TabsTrigger value="register">Registrarse</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="correo@ejemplo.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input id="password" type="password" required />
                  </div>
                  <Button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700"
                    disabled={isLoading}
                  >
                    {isLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Iniciar Sesión
                  </Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="register">
              {!registerType ? (
                <div className="space-y-4">
                  <Button
                    onClick={() => setRegisterType("patient")}
                    className="w-full text-white bg-green-600 hover:bg-green-700"
                  >
                    Registrarse como Paciente
                  </Button>
                  <Button
                    onClick={() => setRegisterType("expert")}
                    className="w-full text-white bg-purple-600 hover:bg-purple-700"
                  >
                    Registrarse como Experto en Salud
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Nombre completo</Label>
                      <Input id="fullName" type="text" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="correo@ejemplo.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Contraseña</Label>
                      <Input id="password" type="password" required />
                    </div>
                    {registerType === "patient" && (
                      <div className="space-y-2">
                        <Label htmlFor="insurance">
                          Seguro médico (opcional)
                        </Label>
                        <Input id="insurance" type="text" />
                      </div>
                    )}
                    {registerType === "expert" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="specialty">Especialidad</Label>
                          <Input id="specialty" type="text" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="certification">
                            Documentos de certificación
                          </Label>
                          <Input id="certification" type="file" required />
                        </div>
                      </>
                    )}
                    <Button
                      type="submit"
                      className="w-full text-white bg-blue-600 hover:bg-blue-700"
                      disabled={isLoading}
                    >
                      {isLoading && (
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      Registrarse
                    </Button>
                  </div>
                </form>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button variant="link" className="text-sm text-blue-600">
            ¿Olvidaste tu contraseña?
          </Button>
          {activeTab === "register" && registerType && (
            <Button
              variant="outline"
              onClick={() => setRegisterType(null)}
              className="w-full"
            >
              Volver a opciones de registro
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
