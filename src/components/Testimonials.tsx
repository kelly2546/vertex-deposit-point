
import { Card } from "@/components/ui/card";
import { MessageSquare, ArrowRight, Quote } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Vertex Trading has completely transformed my trading experience. The tools and analytics are best-in-class.",
      author: "Michael Chen",
      role: "Professional Day Trader",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop"
    },
    {
      quote: "The platform's ease of use and powerful features have helped me grow my portfolio consistently over the past year.",
      author: "Sarah Johnson",
      role: "Retail Investor",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=964&auto=format&fit=crop"
    },
    {
      quote: "Incredible market insights and customer support. I've never experienced such a comprehensive trading platform.",
      author: "James Wilson",
      role: "Hedge Fund Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=987&auto=format&fit=crop"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-white/5 text-white/80 border border-white/10 mb-2">
            Trusted by Traders
          </div>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 inline-block">
            What Our Traders Say
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Join thousands of successful traders who have elevated their trading with our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="p-8 hover-lift glass-effect relative overflow-hidden border-white/5 h-full flex flex-col">
                <div className="absolute top-0 right-0 p-6 opacity-20">
                  <Quote className="w-12 h-12 text-[#F2FF44]" />
                </div>
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <p className="text-white/80 mb-6 text-lg italic relative z-10 leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center mt-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-white/20">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.author}</div>
                      <div className="text-white/60 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F2FF44] group-hover:w-full transition-all duration-300"></div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 group">
            View more testimonials
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
