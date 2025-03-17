
import { Card } from "@/components/ui/card";
import { LineChart, Shield, BarChart3, Globe } from "lucide-react";

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

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Everything you need to trade with confidence
            </h2>
            <p className="text-xl text-white/60">
              Our comprehensive trading platform provides all the tools, resources, and support you need to succeed in today's dynamic markets
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift glass-effect flex flex-col items-start gap-4 group transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
