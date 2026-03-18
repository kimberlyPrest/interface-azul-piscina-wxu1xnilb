import { Link, Outlet, useLocation } from 'react-router-dom'
import { Droplets, Home, Calendar as CalendarIcon, User, Search, Bell, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { WaveBackground } from './WaveBackground'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navItems = [
  { path: '/', label: 'Início', icon: Home },
  { path: '/atividades', label: 'Atividades', icon: CalendarIcon },
  { path: '/perfil', label: 'Perfil', icon: User },
]

export default function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row font-sans relative overflow-hidden">
      <WaveBackground />

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 glass border-r border-white/40 z-20 h-screen sticky top-0">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-primary/20 p-2 rounded-xl text-primary">
            <Droplets size={28} strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-bold text-gradient-pool tracking-tight">AcquaLife</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium',
                  isActive
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'text-muted-foreground hover:bg-white/50 hover:text-primary',
                )}
              >
                <item.icon size={20} className={cn(isActive ? 'animate-pulse' : '')} />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative z-10">
        {/* Header */}
        <header className="h-20 glass border-b border-white/40 flex items-center justify-between px-4 md:px-8 shrink-0">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 glass p-0 border-none">
                <div className="p-6 flex items-center gap-3 border-b border-white/20">
                  <Droplets className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold text-gradient-pool">AcquaLife</span>
                </div>
                <nav className="p-4 space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={cn(
                        'flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium',
                        location.pathname === item.path
                          ? 'bg-primary text-white'
                          : 'text-muted-foreground hover:bg-white/50',
                      )}
                    >
                      <item.icon size={20} />
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            <div className="relative hidden sm:block w-64 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4 transition-colors group-focus-within:text-primary" />
              <Input
                placeholder="Buscar atividades..."
                className="pl-10 bg-white/50 border-white/60 focus-visible:ring-primary/50 transition-all rounded-full shadow-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="relative text-muted-foreground hover:text-primary rounded-full hover:bg-white/50"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2.5 w-2.5 bg-destructive rounded-full border-2 border-background animate-pulse"></span>
            </Button>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-sm font-medium leading-none">João Silva</span>
                <span className="text-xs text-muted-foreground">Plano Gold</span>
              </div>
              <Avatar className="border-2 border-primary/20 shadow-md">
                <AvatarImage src="https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 pb-24 md:pb-8">
          <div className="max-w-6xl mx-auto animate-fade-in-up">
            <Outlet />
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full glass border-t border-white/40 z-30 pb-safe">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors',
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary/70',
                )}
              >
                <item.icon size={22} className={cn(isActive && 'animate-bounce-slight')} />
                <span className="text-[10px] font-medium">{item.label}</span>
                {isActive && (
                  <div className="absolute bottom-0 w-12 h-1 bg-primary rounded-t-full shadow-[0_-2px_10px_rgba(0,206,209,0.5)]" />
                )}
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
