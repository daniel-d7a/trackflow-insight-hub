
import { CreditCard, DollarSign, Calendar, CheckCircle } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const loanData = [
  { id: 1, borrower: "John Doe", amount: 25000, purpose: "Vehicle Purchase", status: "Active", dueDate: "2024-06-15", interestRate: 4.5 },
  { id: 2, borrower: "Sarah Johnson", amount: 15000, purpose: "Equipment", status: "Pending", dueDate: "2024-07-20", interestRate: 3.8 },
  { id: 3, borrower: "Mike Chen", amount: 35000, purpose: "Business Expansion", status: "Active", dueDate: "2024-08-10", interestRate: 5.2 },
  { id: 4, borrower: "Emma Wilson", amount: 12000, purpose: "Training", status: "Completed", dueDate: "2024-03-15", interestRate: 4.0 },
  { id: 5, borrower: "David Brown", amount: 28000, purpose: "Warehouse Upgrade", status: "Active", dueDate: "2024-09-05", interestRate: 4.8 },
];

const Loans = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Loan Management</h1>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <CreditCard className="h-4 w-4 mr-2" />
            New Loan
          </Button>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Loans"
            value="$2.8M"
            change="+$450K this quarter"
            changeType="positive"
            icon={DollarSign}
            iconColor="text-green-600"
          />
          <MetricCard
            title="Active Loans"
            value={42}
            change="68% of portfolio"
            changeType="neutral"
            icon={CreditCard}
            iconColor="text-blue-600"
          />
          <MetricCard
            title="Due This Month"
            value={8}
            change="$320K payment expected"
            changeType="neutral"
            icon={Calendar}
            iconColor="text-orange-600"
          />
          <MetricCard
            title="Completion Rate"
            value="92%"
            change="+3% from last year"
            changeType="positive"
            icon={CheckCircle}
            iconColor="text-purple-600"
          />
        </div>

        {/* Loan Status Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Loan Portfolio Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { category: 'Vehicle Purchase', amount: '$890K', percentage: 32, color: 'bg-blue-500' },
                  { category: 'Equipment', amount: '$720K', percentage: 26, color: 'bg-green-500' },
                  { category: 'Business Expansion', amount: '$650K', percentage: 23, color: 'bg-purple-500' },
                  { category: 'Training & Development', amount: '$540K', percentage: 19, color: 'bg-orange-500' },
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
              <CardTitle>Payment Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { month: 'January', amount: '$145K', status: 'Completed' },
                  { month: 'February', amount: '$132K', status: 'Completed' },
                  { month: 'March', amount: '$156K', status: 'Due Soon' },
                  { month: 'April', amount: '$178K', status: 'Upcoming' },
                ].map((payment) => (
                  <div key={payment.month} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{payment.month}</p>
                      <p className="text-sm text-gray-600">{payment.amount}</p>
                    </div>
                    <Badge 
                      variant={
                        payment.status === 'Completed' ? 'default' : 
                        payment.status === 'Due Soon' ? 'destructive' : 'secondary'
                      }
                    >
                      {payment.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Loan Details Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Loan Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-3 font-semibold text-gray-600">Borrower</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Amount</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Purpose</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Status</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Due Date</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Interest Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {loanData.map((loan) => (
                    <tr key={loan.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{loan.borrower}</td>
                      <td className="p-3 text-gray-600">${loan.amount.toLocaleString()}</td>
                      <td className="p-3 text-gray-600">{loan.purpose}</td>
                      <td className="p-3">
                        <Badge 
                          variant={
                            loan.status === 'Active' ? 'default' : 
                            loan.status === 'Completed' ? 'outline' : 'secondary'
                          }
                        >
                          {loan.status}
                        </Badge>
                      </td>
                      <td className="p-3 text-gray-600">{loan.dueDate}</td>
                      <td className="p-3 text-gray-600">{loan.interestRate}%</td>
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

export default Loans;
