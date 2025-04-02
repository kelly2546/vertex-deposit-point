import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/deposit" className="text-2xl font-bold text-white relative">
            <span className="relative z-10">Vertex</span>
            <span className="text-[#F2FF44]"> Trading</span>
            <div className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-[#F2FF44] to-transparent"></div>
          </Link>
        </div>
        
        {/* Desktop navigation has been removed */}
        
        {/* Mobile menu button */}
        
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 flex flex-col space-y-4">
          <Link to="/deposit" className="text-white/80 hover:text-white transition-colors py-2">Deposit</Link>
          <div className="flex flex-col space-y-3 pt-3 border-t border-white/10">
            <Button className="bg-[#F2FF44] text-black hover:bg-[#E2EF34] w-full justify-center">
              Sign in
              <LogIn className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>}
    </nav>;
};
export default Navbar;