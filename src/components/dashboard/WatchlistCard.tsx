
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown, Star } from "lucide-react";

const watchlistItems = [
  { symbol: "AAPL", name: "Apple Inc.", price: "$182.63", change: "+1.2%", isUp: true },
  { symbol: "MSFT", name: "Microsoft Corp.", price: "$326.88", change: "+0.8%", isUp: true },
  { symbol: "TSLA", name: "Tesla Inc.", price: "$248.48", change: "-2.3%", isUp: false },
  { symbol: "AMZN", name: "Amazon.com", price: "$178.12", change: "+1.5%", isUp: true },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: "$142.36", change: "-0.6%", isUp: false },
];

const WatchlistCard = () => {
  return (
    <Card className="glass-effect">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg text-white">Watchlist</CardTitle>
        <Star className="w-5 h-5 text-yellow-400" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {watchlistItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex flex-col">
                <div className="text-white font-medium">{item.symbol}</div>
                <div className="text-white/60 text-xs">{item.name}</div>
              </div>
              <div className="text-right">
                <div className="text-white">{item.price}</div>
                <div className={`text-xs ${item.isUp ? "text-green-400" : "text-red-400"} flex items-center justify-end`}>
                  {item.isUp ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                  {item.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WatchlistCard;
