import { Camera, Settings, Shield, Bell, Droplet } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'

export default function Profile() {
  const { toast } = useToast()

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: 'Perfil Atualizado',
      description: 'Suas preferências foram salvas com sucesso.',
    })
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2 text-gradient-pool">Meu Perfil</h1>
        <p className="text-muted-foreground">Gerencie suas informações e preferências.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - User Info Card */}
        <Card className="glass border-white/60 md:col-span-1 flex flex-col items-center p-6 text-center">
          <div className="relative mb-6">
            <Avatar className="h-32 w-32 border-4 border-white shadow-xl">
              <AvatarImage src="https://img.usecurling.com/ppl/large?gender=male&seed=1" />
              <AvatarFallback className="text-4xl bg-primary/10 text-primary">JS</AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              className="absolute bottom-0 right-0 rounded-full shadow-lg bg-primary hover:bg-primary/90 border-2 border-white"
            >
              <Camera size={16} />
            </Button>
          </div>
          <h2 className="text-2xl font-bold">João Silva</h2>
          <p className="text-muted-foreground mb-4">joao.silva@exemplo.com</p>
          <Badge className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white border-none px-4 py-1 text-sm font-semibold shadow-md">
            Plano Gold
          </Badge>

          <div className="w-full mt-8 pt-6 border-t border-border/50 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Membro desde</p>
              <p className="font-medium">Jan, 2023</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Aulas Realizadas</p>
              <p className="font-medium">142</p>
            </div>
          </div>
        </Card>

        {/* Right Column - Forms & Settings */}
        <div className="md:col-span-2 space-y-6">
          <Card className="glass border-white/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="text-primary" size={20} />
                Informações Pessoais
              </CardTitle>
              <CardDescription>Atualize seus dados de contato.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nome</Label>
                    <Input
                      id="firstName"
                      defaultValue="João"
                      className="bg-white/50 border-white/60"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Sobrenome</Label>
                    <Input
                      id="lastName"
                      defaultValue="Silva"
                      className="bg-white/50 border-white/60"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="joao.silva@exemplo.com"
                    className="bg-white/50 border-white/60"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    defaultValue="(11) 98765-4321"
                    className="bg-white/50 border-white/60"
                  />
                </div>
                <div className="pt-4 flex justify-end">
                  <Button type="submit" className="shadow-lg shadow-primary/20">
                    Salvar Alterações
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="glass border-white/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="text-primary" size={20} />
                Preferências do App
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/40 transition-colors">
                <div className="flex gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Bell size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Notificações Push</p>
                    <p className="text-sm text-muted-foreground">Avisos sobre aulas e reservas.</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/40 transition-colors">
                <div className="flex gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Droplet size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Tema Visual</p>
                    <p className="text-sm text-muted-foreground">
                      Alternar entre Azul Cristalino / Azul Profundo.
                    </p>
                  </div>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
