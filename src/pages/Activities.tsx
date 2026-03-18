import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Clock, MapPin, User, CheckCircle2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const activities = [
  {
    id: 1,
    title: 'Hidroginástica Avançada',
    instructor: 'Prof. Marina',
    time: '07:00 - 08:00',
    intensity: 'Intenso',
    category: 'Hidroginástica',
    location: 'Piscina Principal',
    image: 'https://img.usecurling.com/p/600/400?q=water%20aerobics',
    spots: 3,
  },
  {
    id: 2,
    title: 'Natação Livre (Raia 2)',
    instructor: 'Sem instrutor',
    time: '08:00 - 09:30',
    intensity: 'Moderado',
    category: 'Natação Livre',
    location: 'Raia 2',
    image: 'https://img.usecurling.com/p/600/400?q=swimming%20pool',
    spots: 1,
  },
  {
    id: 3,
    title: 'Treinamento Triathlon',
    instructor: 'Prof. Carlos',
    time: '18:00 - 19:30',
    intensity: 'Intenso',
    category: 'Treinamento',
    location: 'Raia Olímpica',
    image: 'https://img.usecurling.com/p/600/400?q=swimmer',
    spots: 5,
  },
  {
    id: 4,
    title: 'Hidro Relax',
    instructor: 'Prof. Ana',
    time: '19:30 - 20:30',
    intensity: 'Leve',
    category: 'Hidroginástica',
    location: 'Piscina Térmica',
    image: 'https://img.usecurling.com/p/600/400?q=spa%20pool',
    spots: 8,
  },
]

export default function Activities() {
  const [filter, setFilter] = useState('Todas')
  const { toast } = useToast()
  const [bookingState, setBookingState] = useState<Record<number, boolean>>({})

  const filteredActivities =
    filter === 'Todas' ? activities : activities.filter((a) => a.category === filter)

  const handleBook = (id: number, title: string) => {
    setBookingState((prev) => ({ ...prev, [id]: true }))

    toast({
      title: 'Reserva Confirmada! 💦',
      description: `Sua vaga para ${title} foi garantida.`,
      className: 'glass border-primary text-primary-foreground',
    })
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2 text-gradient-pool">Atividades Aquáticas</h1>
          <p className="text-muted-foreground">Encontre a aula perfeita para o seu dia.</p>
        </div>

        <Tabs defaultValue="Todas" onValueChange={setFilter} className="w-full md:w-auto">
          <TabsList className="glass border-white/50 w-full md:w-auto h-12 p-1">
            <TabsTrigger
              value="Todas"
              className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Todas
            </TabsTrigger>
            <TabsTrigger
              value="Hidroginástica"
              className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Hidro
            </TabsTrigger>
            <TabsTrigger
              value="Natação Livre"
              className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Livre
            </TabsTrigger>
            <TabsTrigger
              value="Treinamento"
              className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Treino
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredActivities.map((activity) => (
          <Card
            key={activity.id}
            className="glass overflow-hidden border-white/60 hover:shadow-[0_15px_40px_rgba(0,206,209,0.15)] transition-all duration-500 group flex flex-col"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 z-20">
                <Badge
                  variant="secondary"
                  className="bg-white/90 backdrop-blur text-primary font-semibold shadow-sm"
                >
                  {activity.intensity}
                </Badge>
              </div>
              <div className="absolute top-4 right-4 z-20">
                <Badge
                  variant="outline"
                  className="bg-black/50 text-white border-none backdrop-blur"
                >
                  {activity.spots} vagas
                </Badge>
              </div>
            </div>

            <CardContent className="p-6 flex-1 flex flex-col">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg leading-tight line-clamp-2">{activity.title}</h3>
                </div>

                <div className="space-y-2 mt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock size={16} className="text-primary" />
                    <span>{activity.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User size={16} className="text-primary" />
                    <span>{activity.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={16} className="text-primary" />
                    <span>{activity.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50">
                <Button
                  className={cn(
                    'w-full transition-all duration-300 relative overflow-hidden',
                    bookingState[activity.id]
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                      : 'shadow-md shadow-primary/20 hover:shadow-primary/40',
                  )}
                  onClick={() => handleBook(activity.id, activity.title)}
                  disabled={bookingState[activity.id]}
                >
                  {bookingState[activity.id] ? (
                    <span className="flex items-center gap-2 animate-fade-in">
                      <CheckCircle2 size={18} /> Reservado
                    </span>
                  ) : (
                    'Reservar Agora'
                  )}

                  {/* Ripple effect placeholder */}
                  {!bookingState[activity.id] && (
                    <span className="absolute inset-0 w-full h-full bg-white/20 rounded-full opacity-0 group-active:animate-ripple"></span>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
