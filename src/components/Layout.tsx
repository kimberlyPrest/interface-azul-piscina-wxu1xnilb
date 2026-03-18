import { Outlet } from "react-router-dom";
import { Droplets } from "lucide-react";

export function Layout() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center gap-2 font-semibold text-primary">
            <Droplets className="h-6 w-6" />
            <span className="text-lg">Pool UI</span>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
