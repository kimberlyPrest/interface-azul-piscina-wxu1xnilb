import { Waves, CalendarClock, Flame, ThermometerSun, ShieldCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart'
import { useState } from 'react'

const chartData = [
  { dia: 'Seg', horas: 1.5 },
  { dia: 'Ter', horas: 0 },
  { dia: 'Qua', horas: 2.0 },
  { dia: 'Qui', horas: 1.0 },
  { dia: 'Sex', horas: 2.5 },
  { dia: 'Sáb', horas: 3.0 },
  { dia: 'Dom', horas: 1.5 },
]

export default function Index() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="space-y-8">
      {/* Hero Greeting */}
      <section className="relative overflow-hidden rounded-3xl glass p-8 shadow-lg border border-white/50">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 text-primary/10">
          <Waves size={200} className="animate-float-slow" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Olá, <span className="text-gradient-pool">João!</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Pronto para o seu mergulho diário? A água está perfeita.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-white/60 p-4 rounded-2xl shadow-sm backdrop-blur-md border border-white">
            <ThermometerSun className="text-orange-500 w-8 h-8" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Piscina Principal</p>
              <p className="text-2xl font-bold text-foreground">27.5°C</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: 'Próxima Atividade',
            value: 'Natação Livre',
            sub: 'Hoje, 18:30',
            icon: CalendarClock,
            color: 'text-blue-500',
          },
          {
            title: 'Horas na Água',
            value: '11.5h',
            sub: 'Nesta semana',
            icon: Waves,
            color: 'text-primary',
          },
          {
            title: 'Calorias Queimadas',
            value: '3,240',
            sub: 'Nesta semana',
            icon: Flame,
            color: 'text-orange-500',
          },
          {
            title: 'Status da Piscina',
            value: 'Aberta & Limpa',
            sub: 'Qualidade 100%',
            icon: ShieldCheck,
            color: 'text-emerald-500',
          },
        ].map((stat, i) => (
          <Card
            key={i}
            className="glass hover:-translate-y-1 transition-transform duration-300 border-white/60 group"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-xl bg-white/80 shadow-sm ${stat.color} group-hover:scale-110 transition-transform`}
                >
                  <stat.icon size={24} />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
                <p className="text-xs text-muted-foreground">{stat.sub}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <Card className="lg:col-span-2 glass border-white/60">
          <CardHeader>
            <CardTitle>Engajamento Semanal</CardTitle>
            <CardDescription>Horas dedicadas a atividades aquáticas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ChartContainer
                config={{
                  horas: {
                    label: 'Horas',
                    color: 'hsl(var(--primary))',
                  },
                }}
                className="h-full w-full"
              >
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="fillHoras" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="hsl(var(--border))"
                  />
                  <XAxis dataKey="dia" axisLine={false} tickLine={false} tickMargin={10} />
                  <YAxis axisLine={false} tickLine={false} tickMargin={10} />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="horas"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#fillHoras)"
                    activeDot={{ r: 6, fill: 'hsl(var(--primary))', strokeWidth: 0 }}
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Quick Booking */}
        <Card className="glass border-white/60 flex flex-col">
          <CardHeader>
            <CardTitle>Reserva Rápida</CardTitle>
            <CardDescription>Selecione um dia para reservar uma raia.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col items-center justify-center pb-6">
            <div className="bg-white/50 rounded-2xl p-2 mb-4">
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md" />
            </div>
            <Button className="w-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
              Ver Horários Disponíveis
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
