
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  {
    type: "Buy",
    asset: "AAPL",
    amount: "10 shares",
    price: "$182.63",
    time: "10:32 AM",
    date: "Today"
  },
  {
    type: "Sell",
    asset: "TSLA",
    amount: "5 shares",
    price: "$248.48",
    time: "09:15 AM",
    date: "Today"
  },
  {
    type: "Buy",
    asset: "BTC",
    amount: "0.25",
    price: "$57,834.21",
    time: "03:45 PM",
    date: "Yesterday"
  },
  {
    type: "Deposit",
    asset: "USD",
    amount: "$5,000",
    price: "-",
    time: "11:20 AM",
    date: "Yesterday"
  },
];

const RecentActivity = () => {
  return (
    <Card className="glass-effect">
      <CardHeader>
        <CardTitle className="text-lg text-white">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span 
                    className={`inline-block w-16 rounded px-2 py-1 text-xs font-semibold ${
                      activity.type === "Buy" ? "bg-green-500/20 text-green-400" : 
                      activity.type === "Sell" ? "bg-red-500/20 text-red-400" : 
                      "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {activity.type}
                  </span>
                  <span className="ml-2 text-white font-medium">{activity.asset}</span>
                </div>
                <div className="text-white/60 text-sm mt-1">
                  {activity.amount} • {activity.price}
                </div>
              </div>
              <div className="text-right">
                <div className="text-white/80 text-sm">{activity.time}</div>
                <div className="text-white/60 text-xs">{activity.date}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
