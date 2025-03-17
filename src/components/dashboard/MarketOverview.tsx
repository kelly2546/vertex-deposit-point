
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

const marketData = [
  { name: "S&P 500", value: "4,587.64", change: "+1.23%", isUp: true },
  { name: "NASDAQ", value: "14,356.02", change: "+1.73%", isUp: true },
  { name: "Dow Jones", value: "34,912.56", change: "-0.45%", isUp: false },
  { name: "Bitcoin", value: "$57,834.21", change: "+2.67%", isUp: true },
];

const MarketOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {marketData.map((item, index) => (
        <Card key={index} className="glass-effect hover-lift">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-white/70">{item.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{item.value}</div>
            <div className={`flex items-center mt-1 ${item.isUp ? "text-green-400" : "text-red-400"}`}>
              {item.isUp ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
              {item.change}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MarketOverview;
