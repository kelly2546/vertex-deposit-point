
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white">Vertex Trading</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors">Markets</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Trading</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">About Us</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Pricing</a>
          <a href="/dashboard" className="text-white/80 hover:text-white transition-colors">Dashboard</a>
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
            Open trading account
          </Button>
          <Button className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
            Sign in
            <LogIn className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
