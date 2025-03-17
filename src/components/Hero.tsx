
import { Button } from "@/components/ui/button";
import { LineChart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-background overflow-hidden relative">
      <div className="absolute top-20 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/10 filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-accent/5 filter blur-3xl opacity-40"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          className="space-y-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
            variants={fadeIn}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              Smart Trading
            </span>
            <br />
            <span className="relative">
              Made <span className="text-[#F2FF44]">Accessible</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 15C50 5 100 2 150 10C200 18 250 19 300 8" stroke="#F2FF44" strokeWidth="4" strokeLinecap="round" fill="none" strokeDasharray="0 10" />
              </svg>
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-white/70 max-w-xl"
            variants={fadeIn}
          >
            Access global markets with advanced trading tools, real-time analytics, and expert insights - available on any device, anywhere.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={fadeIn}
          >
            <Button className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90 flex items-center gap-2 rounded-lg group relative overflow-hidden">
              <span className="relative z-10">Start Trading Now</span>
              <LineChart className="w-5 h-5 relative z-10" />
              <div className="absolute inset-0 w-0 bg-[#F2FF44] group-hover:w-full transition-all duration-300"></div>
            </Button>
            
            <Button variant="outline" className="px-8 py-6 text-lg text-white border-white/20 hover:bg-white/10 rounded-lg group">
              <span>Explore Platform</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-3 gap-4 md:gap-8 pt-8"
            variants={fadeIn}
          >
            {[
              { value: "100+", label: "Markets" },
              { value: "25K+", label: "Active traders" },
              { value: "$500M+", label: "Daily volume" }
            ].map((stat, index) => (
              <div key={index} className="p-4 rounded-lg glass-effect">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform rotate-1">
            <img 
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop"
              alt="Trading Platform"
              className="w-full h-auto hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-40"></div>
          </div>
          
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 -left-12 w-24 h-24 rounded-full border-2 border-[#F2FF44]/30 backdrop-blur-sm"></div>
          <div className="absolute top-1/2 right-0 translate-x-1/2 w-16 h-16 rounded-lg border border-white/10 backdrop-blur-sm rotate-12"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
