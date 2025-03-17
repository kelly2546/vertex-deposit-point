
import { Github, Twitter, Linkedin, ArrowUpRight, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="space-y-6 md:col-span-2">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-white">Vertex <span className="text-[#F2FF44]">Trading</span></div>
            </div>
            <p className="text-white/60 max-w-md">
              Empowering traders with advanced tools and insights for successful trading in global markets.
            </p>
            <form className="flex gap-2 max-w-sm">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-[#F2FF44]" 
              />
              <Button type="submit" className="bg-[#F2FF44] text-black hover:bg-white">
                <Send className="w-4 h-4" />
              </Button>
            </form>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10 rounded-full w-10 h-10 p-0">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 rounded-full w-10 h-10 p-0">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10 rounded-full w-10 h-10 p-0">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white relative inline-block">
              Products
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#F2FF44]"></span>
            </h4>
            <ul className="space-y-2">
              {["Trading Platform", "Analytics Tools", "API Access", "Institutional Services"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white relative inline-block">
              Company
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#F2FF44]"></span>
            </h4>
            <ul className="space-y-2">
              {["About", "Careers", "Press", "Blog"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white relative inline-block">
              Legal
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#F2FF44]"></span>
            </h4>
            <ul className="space-y-2">
              {["Terms", "Privacy", "Risk Disclosure", "Regulations"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 mb-4 md:mb-0">
            © 2024 Vertex Trading. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Support", "Status", "Cookie Settings"].map((item, i) => (
              <a key={i} href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
