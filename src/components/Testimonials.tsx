
import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Vertex Trading has completely transformed my trading experience. The tools and analytics are best-in-class.",
      author: "Michael Chen",
      role: "Professional Day Trader"
    },
    {
      quote: "The platform's ease of use and powerful features have helped me grow my portfolio consistently.",
      author: "Sarah Johnson",
      role: "Retail Investor"
    },
    {
      quote: "Incredible market insights and customer support. I've never experienced such a comprehensive trading platform.",
      author: "James Wilson",
      role: "Hedge Fund Manager"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          What Our Traders Say
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto">
          Join thousands of successful traders who have elevated their trading with our platform
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover-lift glass-effect">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/80 mb-4 italic">{testimonial.quote}</p>
              <div className="text-white font-semibold">{testimonial.author}</div>
              <div className="text-white/60 text-sm">{testimonial.role}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
