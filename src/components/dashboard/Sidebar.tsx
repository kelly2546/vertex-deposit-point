
import { Home, LineChart, BarChart2, Users, Settings, HelpCircle, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Overview", active: true },
  { icon: LineChart, label: "Markets", active: false },
  { icon: BarChart2, label: "Portfolio", active: false },
  { icon: Users, label: "Social Trading", active: false },
  { icon: Settings, label: "Settings", active: false },
  { icon: HelpCircle, label: "Support", active: false },
];

const Sidebar = () => {
  return (
    <div className="h-screen bg-background/95 border-r border-white/10 w-64 p-4 fixed left-0 top-0">
      <div className="flex items-center px-2 py-4">
        <div className="text-2xl font-bold text-white">Vertex Trading</div>
      </div>
      
      <div className="mt-8 space-y-1">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className={cn(
                "flex items-center w-full px-4 py-3 rounded-lg text-white/70 hover:bg-white/10 transition-colors",
                item.active && "bg-white/10 text-white"
              )}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
      
      <div className="absolute bottom-8 w-full left-0 px-4">
        <button className="flex items-center w-full px-4 py-3 rounded-lg text-white/70 hover:bg-white/10 transition-colors">
          <LogOut className="w-5 h-5 mr-3" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
