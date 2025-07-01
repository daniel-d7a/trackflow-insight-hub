
import { TrendingUp, DollarSign, ShoppingCart, Target } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const salesData = [
  { id: 1, client: "ABC Logistics", amount: 45000, status: "Completed", date: "2024-01-15", region: "North" },
  { id: 2, client: "Global Shipping Co", amount: 78000, status: "Pending", date: "2024-01-14", region: "South" },
  { id: 3, client: "FastTrack Delivery", amount: 32000, status: "Completed", date: "2024-01-13", region: "East" },
  { id: 4, client: "Metro Transport", amount: 56000, status: "In Progress", date: "2024-01-12", region: "West" },
  { id: 5, client: "Express Cargo", amount: 41000, status: "Completed", date: "2024-01-11", region: "Central" },
];

const Sales = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Sales Dashboard</h1>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Revenue"
            value="$2.4M"
            change="+18% from last month"
            changeType="positive"
            icon={DollarSign}
            iconColor="text-green-600"
          />
          <MetricCard
            title="Active Deals"
            value={34}
            change="+7 new this week"
            changeType="positive"
            icon={ShoppingCart}
            iconColor="text-blue-600"
          />
          <MetricCard
            title="Conversion Rate"
            value="68%"
            change="+5% improvement"
            changeType="positive"
            icon={Target}
            iconColor="text-purple-600"
          />
          <MetricCard
            title="Growth Rate"
            value="23%"
            change="Year over year"
            changeType="positive"
            icon={TrendingUp}
            iconColor="text-orange-600"
          />
        </div>

        {/* Sales Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Monthly Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between space-x-2">
                {[40, 60, 45, 80, 65, 90, 75].map((height, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-full bg-blue-500 rounded-t-md transition-all hover:bg-blue-600"
                      style={{ height: `${height}%` }}
                    ></div>
                    <span className="text-xs text-gray-500 mt-2">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Regions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { region: 'North', revenue: '$890K', percentage: 85 },
                  { region: 'South', revenue: '$720K', percentage: 70 },
                  { region: 'East', revenue: '$650K', percentage: 60 },
                  { region: 'West', revenue: '$580K', percentage: 55 },
                ].map((item) => (
                  <div key={item.region} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{item.region}</p>
                      <p className="text-sm text-gray-500">{item.revenue}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{item.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Sales */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Recent Sales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-3 font-semibold text-gray-600">Client</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Amount</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Status</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Date</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Region</th>
                  </tr>
                </thead>
                <tbody>
                  {salesData.map((sale) => (
                    <tr key={sale.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{sale.client}</td>
                      <td className="p-3 text-gray-600">${sale.amount.toLocaleString()}</td>
                      <td className="p-3">
                        <Badge 
                          variant={
                            sale.status === 'Completed' ? 'default' : 
                            sale.status === 'Pending' ? 'secondary' : 'outline'
                          }
                        >
                          {sale.status}
                        </Badge>
                      </td>
                      <td className="p-3 text-gray-600">{sale.date}</td>
                      <td className="p-3 text-gray-600">{sale.region}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Sales;
