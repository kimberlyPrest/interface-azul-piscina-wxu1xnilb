import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Waves } from "lucide-react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
      <div className="animate-fade-in-up w-full max-w-md">
        <Card className="border-primary/20 shadow-xl shadow-primary/5">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4 w-fit">
              <Waves className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">Azul Piscina</CardTitle>
            <CardDescription className="text-muted-foreground">
              Uma interface serena e refrescante
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-4">
            <p className="text-sm text-center text-muted-foreground">
              Mergulhe nesta experiência com tons de azul piscina que trazem calma e clareza para o seu dia.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-20 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-medium shadow-sm transition-transform hover:scale-105">
                Primary
              </div>
              <div className="h-20 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground font-medium shadow-sm transition-transform hover:scale-105">
                Secondary
              </div>
              <div className="h-20 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-medium shadow-sm transition-transform hover:scale-105">
                Accent
              </div>
              <div className="h-20 rounded-lg bg-muted flex items-center justify-center text-muted-foreground font-medium shadow-sm transition-transform hover:scale-105">
                Muted
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center pt-2 pb-6">
            <Button size="lg" className="w-full sm:w-auto shadow-md shadow-primary/20 hover:shadow-primary/30 transition-all">
              Mergulhar Agora
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
