
import { Card } from "@/components/ui/card";
import { LineChart, Shield, BarChart3, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: <LineChart className="w-6 h-6 text-white" />,
      title: "Advanced Trading Tools",
      description: "Access powerful charts, indicators, and automated trading systems"
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Secure Trading",
      description: "Enterprise-grade security for your assets and personal information"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Real-time Analytics",
      description: "Make informed decisions with real-time market data and insights"
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Global Markets",
      description: "Trade across multiple global markets from a single platform"
    }
  ];

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-white/5 text-white/80 border border-white/10 mb-4">
              Platform Features
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70">
              Everything you need to trade with confidence
            </h2>
            <div className="w-16 h-1 bg-[#F2FF44]"></div>
            <p className="text-xl text-white/60">
              Our comprehensive trading platform provides all the tools, resources, and support you need to succeed in today's dynamic markets
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={featureVariants}
              >
                <Card 
                  className="p-6 hover-lift glass-effect flex flex-col items-start gap-4 group transition-all duration-300 border-white/5 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors relative z-10">
                    {feature.icon}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#F2FF44] transition-colors">{feature.title}</h3>
                    <p className="text-white/60">{feature.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F2FF44] group-hover:w-full transition-all duration-300"></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
