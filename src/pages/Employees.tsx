
import { Users, UserPlus, Clock, Award } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const employeeData = [
  { id: 1, name: "John Doe", position: "Senior Driver", status: "Active", department: "Delivery", performance: 95 },
  { id: 2, name: "Sarah Johnson", position: "Logistics Coordinator", status: "Active", department: "Operations", performance: 88 },
  { id: 3, name: "Mike Chen", position: "Warehouse Manager", status: "On Leave", department: "Warehouse", performance: 92 },
  { id: 4, name: "Emma Wilson", position: "Fleet Supervisor", status: "Active", department: "Fleet", performance: 89 },
  { id: 5, name: "David Brown", position: "Delivery Driver", status: "Active", department: "Delivery", performance: 91 },
];

const Employees = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Employee Management</h1>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Employee
          </Button>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Employees"
            value={147}
            change="+12 this month"
            changeType="positive"
            icon={Users}
            iconColor="text-blue-600"
          />
          <MetricCard
            title="Active Today"
            value={134}
            change="91% attendance"
            changeType="positive"
            icon={Clock}
            iconColor="text-green-600"
          />
          <MetricCard
            title="On Leave"
            value={8}
            change="-2 from last week"
            changeType="positive"
            icon={UserPlus}
            iconColor="text-orange-600"
          />
          <MetricCard
            title="Top Performers"
            value={23}
            change="Above 90% rating"
            changeType="positive"
            icon={Award}
            iconColor="text-purple-600"
          />
        </div>

        {/* Employee List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Employee Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-3 font-semibold text-gray-600">Name</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Position</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Department</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Status</th>
                    <th className="text-left p-3 font-semibold text-gray-600">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeData.map((employee) => (
                    <tr key={employee.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{employee.name}</td>
                      <td className="p-3 text-gray-600">{employee.position}</td>
                      <td className="p-3 text-gray-600">{employee.department}</td>
                      <td className="p-3">
                        <Badge variant={employee.status === 'Active' ? 'default' : 'secondary'}>
                          {employee.status}
                        </Badge>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${employee.performance}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{employee.performance}%</span>
                        </div>
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

export default Employees;
