
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bell, 
  Settings, 
  User, 
  ChevronDown,
  Sparkles
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Aura
              </h1>
              <p className="text-xs text-slate-500 -mt-1">AI Call Assistant</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="/" 
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Dashboard
            </a>
            <a 
              href="/calls" 
              className={`font-medium transition-colors ${
                isActive('/calls') 
                  ? 'text-blue-600' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Calls
            </a>
            <a 
              href="/analytics" 
              className={`font-medium transition-colors ${
                isActive('/analytics') 
                  ? 'text-blue-600' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Analytics
            </a>
            <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Settings
            </a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
              ✨ Pro Plan
            </Badge>
            
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="hidden md:block font-medium">John Doe</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};
