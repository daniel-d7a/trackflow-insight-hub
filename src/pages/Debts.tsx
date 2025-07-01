
import { AlertTriangle, DollarSign, Clock, TrendingDown } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const debtData = [
  { id: 1, creditor: "FuelCorp Inc", amount: 15000, category: "Fuel", status: "Overdue", dueDate: "2024-01-10", daysOverdue: 5 },
  { id: 2, creditor: "AutoParts Supply", amount: 8500, category: "Maintenance", status: "Due Soon", dueDate: "2024-01-20", daysOverdue: 0 },
  { id: 3, creditor: "Insurance Plus", amount: 12000, category: "Insurance", status: "Current", dueDate: "2024-02-15", daysOverdue: 0 },
  { id: 4, creditor: "Office Supplies Co", amount: 3200, category: "Office", status: "Overdue", dueDate: "2024-01-05", daysOverdue: 10 },
  { id: 5, creditor: "Tech Solutions", amount: 25000, category: "Technology", status: "Current", dueDate: "2024-03-01", daysOverdue: 0 },
];

const Debts = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Debt Management</h1>
          <Button className="bg-red-600 hover:bg-red-700">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Payment Alert
          </Button>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Outstanding"
            value="$486K"
            change="-$45K from last month"
            changeType="positive"
            icon={DollarSign}
            iconColor="text-red-600"
          />
          <MetricCard
            title="Overdue Payments"
            value={12}
            change="$89K total overdue"
            changeType="negative"
            icon={AlertTriangle}
            iconColor="text-orange-600"
          />
          <MetricCard
            title="Due This Week"
            value={6}
            change="$67K payment required"
            changeType="neutral"
            icon={Clock}
            iconColor="text-yellow-600"
          />
          <MetricCard
            title="Debt Reduction"
            value="18%"
            change="Year over year"
            changeType="positive"
            icon={TrendingDown}
            iconColor="text-green-600"
          />
        </div>

        {/* Debt Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Debt by Category
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { category: 'Fuel & Energy', amount: '$145K', percentage: 35, color: 'bg-red-500' },
                  { category: 'Maintenance', amount: '$98K', percentage: 24, color: 'bg-orange-500' },
                  { category: 'Insurance', amount: '$87K', percentage: 21, color: 'bg-yellow-500' },
                  { category: 'Technology', amount: '$82K', percentage: 20, color: 'bg-purple-500' },
                ].map((item) => (
                  <div key={item.category} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{item.category}</span>
                      <span className="text-sm text-gray-600">{item.amount}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${item.color} h-2 rounded-full transition-all`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Priority Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { creditor: 'FuelCorp Inc', amount: '$15K', priority: 'Critical', daysOverdue: 5 },
                  { creditor: 'Office Supplies Co', amount: '$3.2K', priority: 'High', daysOverdue: 10 },
                  { creditor: 'AutoParts Supply', amount: '$8.5K', priority: 'Medium', daysOverdue: 0 },
                  { creditor: 'Insurance Plus', amount: '$12K', priority: 'Low', daysOverdue: 0 },
                ].map((payment) => (
                  <div key={payment.creditor} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{payment.creditor}</p>
                      <p className="text-sm text-gray-600">{payment.amount}</p>
                      {payment.daysOverdue > 0 && (
                        <p className="text-xs text-red-600">{payment.daysOverdue} days overdue</p>
                      )}
                    </div>
                    <Badge 
                      variant={
                        payment.priority === 'Critical' ? 'destructive' : 
                        payment.priority === 'High' ? 'destructive' : 
                        payment.priority === 'Medium' ? 'secondary' : 'outline'
                      }
                    >
                      {payment.priority}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Debt Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Outstanding Debts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-3 font-semibold text-gray-600">Creditor</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Amount</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Category</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Status</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Due Date</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {debtData.map((debt) => (
                    <tr key={debt.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{debt.creditor}</td>
                      <td className="p-3 text-gray-600">${debt.amount.toLocaleString()}</td>
                      <td className="p-3 text-gray-600">{debt.category}</td>
                      <td className="p-3">
                        <Badge 
                          variant={
                            debt.status === 'Overdue' ? 'destructive' : 
                            debt.status === 'Due Soon' ? 'secondary' : 'outline'
                          }
                        >
                          {debt.status}
                          {debt.daysOverdue > 0 && ` (${debt.daysOverdue}d)`}
                        </Badge>
                      </td>
                      <td className="p-3 text-gray-600">{debt.dueDate}</td>
                      <td className="p-3">
                        <Button 
                          size="sm" 
                          variant={debt.status === 'Overdue' ? 'destructive' : 'outline'}
                        >
                          {debt.status === 'Overdue' ? 'Pay Now' : 'Schedule'}
                        </Button>
                      </td>
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

export default Debts;
