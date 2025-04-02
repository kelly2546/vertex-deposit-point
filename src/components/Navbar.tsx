
import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-white relative">
            <span className="relative z-10">Vertex</span>
            <span className="text-[#F2FF44]"> Trading</span>
            <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-[#F2FF44] to-transparent"></div>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 relative">
          <div className="flex items-center space-x-6 mr-4">
            {["Markets", "Trading", "About Us", "Pricing"].map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="text-white/80 hover:text-white transition-colors relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F2FF44] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4 pl-4 border-l border-white/10">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 rounded-lg">
              Open account
            </Button>
            <Button className="bg-[#F2FF44] text-black hover:bg-[#E2EF34] flex items-center gap-2 rounded-lg relative overflow-hidden group">
              <span className="relative z-10">Sign in</span>
              <LogIn className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
            </Button>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 flex flex-col space-y-4">
          <a href="#" className="text-white/80 hover:text-white transition-colors py-2">Markets</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors py-2">Trading</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors py-2">About Us</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors py-2">Pricing</a>
          <div className="flex flex-col space-y-3 pt-3 border-t border-white/10">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 w-full justify-center">
              Open trading account
            </Button>
            <Button className="bg-[#F2FF44] text-black hover:bg-[#E2EF34] w-full justify-center">
              Sign in
              <LogIn className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
