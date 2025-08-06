import { 
  TrendingUp, 
  TrendingDown, 
  People, 
  ShoppingCart, 
  AttachMoney,
  Visibility
} from '@mui/icons-material';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import Layout from '../Layout/Layout';

export function Dashboard() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up",
      icon: AttachMoney,
      description: "from last month"
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+180.1%",
      trend: "up", 
      icon: People,
      description: "from last month"
    },
    {
      title: "Orders",
      value: "1,234",
      change: "+19%",
      trend: "up",
      icon: ShoppingCart,
      description: "from last month"
    },
    {
      title: "Page Views",
      value: "573,829",
      change: "-4.3%",
      trend: "down",
      icon: Visibility,
      description: "from last month"
    }
  ];

  const recentOrders = [
    { id: "#3210", customer: "Alice Johnson", amount: "$250.00", status: "completed" },
    { id: "#3209", customer: "Bob Smith", amount: "$150.00", status: "pending" },
    { id: "#3208", customer: "Carol Williams", amount: "$350.00", status: "processing" },
    { id: "#3207", customer: "David Brown", amount: "$125.00", status: "completed" },
    { id: "#3206", customer: "Eva Davis", amount: "$200.00", status: "cancelled" },
  ];

  return (
   <Layout>
     <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-medium mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <IconComponent className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500" />
                  )}
                  <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>
                    {stat.change}
                  </span>
                  <span>{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              Latest customer orders from your store
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {order.customer}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Order {order.id}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{order.amount}</span>
                    <Badge 
                      variant={
                        order.status === "completed" ? "default" :
                        order.status === "pending" ? "secondary" :
                        order.status === "processing" ? "outline" : "destructive"
                      }
                      className="text-xs"
                    >
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center gap-2 p-4 border border-border rounded-lg hover:bg-accent transition-colors">
                <People className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Add User</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 border border-border rounded-lg hover:bg-accent transition-colors">
                <ShoppingCart className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">New Order</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 border border-border rounded-lg hover:bg-accent transition-colors">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">View Analytics</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 border border-border rounded-lg hover:bg-accent transition-colors">
                <AttachMoney className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Generate Report</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
   </Layout>
  );
}