
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PortfolioSummary = () => {
  return (
    <Card className="glass-effect">
      <CardHeader>
        <CardTitle className="text-lg text-white">Portfolio Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="text-white/60">Total Balance</div>
            <div className="text-3xl font-bold text-white">$124,532.48</div>
            <div className="text-green-400 text-sm flex items-center mt-1">
              +$3,246.12 (2.68%) today
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-white/60 text-sm">Stocks</div>
              <div className="text-white font-semibold">$86,245.32</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-white/60 text-sm">Crypto</div>
              <div className="text-white font-semibold">$32,187.91</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-white/60 text-sm">Cash</div>
              <div className="text-white font-semibold">$6,099.25</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioSummary;
