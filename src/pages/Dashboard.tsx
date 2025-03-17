
import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import MarketOverview from "@/components/dashboard/MarketOverview";
import PortfolioSummary from "@/components/dashboard/PortfolioSummary";
import RecentActivity from "@/components/dashboard/RecentActivity";
import WatchlistCard from "@/components/dashboard/WatchlistCard";
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <div className="pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-sm border-b border-white/10 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center bg-white/5 rounded-lg px-3 py-2 w-64">
              <Search className="w-5 h-5 text-white/50 mr-2" />
              <Input
                type="text"
                placeholder="Search markets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none text-white focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-white/50"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="w-5 h-5 text-white/70" />
              </Button>
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </header>
        
        {/* Main content */}
        <main className="p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Welcome back, Alex</h1>
            <p className="text-white/60">Here's what's happening with your portfolio today.</p>
          </div>
          
          {/* Market overview section */}
          <section className="mb-8">
            <h2 className="text-lg font-medium text-white/70 mb-4">Market Overview</h2>
            <MarketOverview />
          </section>
          
          {/* Portfolio and activity section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <PortfolioSummary />
            </div>
            <div>
              <WatchlistCard />
            </div>
          </div>
          
          {/* Recent activity */}
          <section>
            <h2 className="text-lg font-medium text-white/70 mb-4">Recent Activity</h2>
            <RecentActivity />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
