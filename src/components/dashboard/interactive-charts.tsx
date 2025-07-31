import { motion } from "framer-motion"
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts"
import { Card } from "@/components/ui/card"

const lineData = [
  { month: 'Jan', revenue: 65000, users: 2400 },
  { month: 'Feb', revenue: 59000, users: 1398 },
  { month: 'Mar', revenue: 80000, users: 9800 },
  { month: 'Apr', revenue: 81000, users: 3908 },
  { month: 'May', revenue: 56000, users: 4800 },
  { month: 'Jun', revenue: 55000, users: 3800 },
  { month: 'Jul', revenue: 40000, users: 4300 },
  { month: 'Aug', revenue: 95000, users: 5200 },
  { month: 'Sep', revenue: 85000, users: 4100 },
  { month: 'Oct', revenue: 75000, users: 6800 },
  { month: 'Nov', revenue: 92000, users: 7200 },
  { month: 'Dec', revenue: 98000, users: 8400 },
]

const barData = [
  { category: 'Desktop', visitors: 4000, conversions: 2400 },
  { category: 'Mobile', visitors: 3000, conversions: 1398 },
  { category: 'Tablet', visitors: 2000, conversions: 9800 },
  { category: 'Smart TV', visitors: 2780, conversions: 3908 },
  { category: 'Other', visitors: 1890, conversions: 4800 },
]

const pieData = [
  { name: 'Organic Search', value: 35, color: 'hsl(213, 97%, 87%)' },
  { name: 'Direct', value: 25, color: 'hsl(280, 89%, 79%)' },
  { name: 'Social Media', value: 20, color: 'hsl(200, 100%, 80%)' },
  { name: 'Email', value: 12, color: 'hsl(213, 97%, 70%)' },
  { name: 'Referral', value: 8, color: 'hsl(280, 89%, 60%)' },
]

export function InteractiveCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* Line Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="lg:col-span-2"
      >
        <Card className="glass-card-elevated p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Revenue & User Growth</h3>
            <p className="text-muted-foreground">Monthly trends over the year</p>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-medium)'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(213, 97%, 87%)" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(213, 97%, 87%)', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: 'hsl(213, 97%, 87%)', strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  stroke="hsl(280, 89%, 79%)" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(280, 89%, 79%)', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: 'hsl(280, 89%, 79%)', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </motion.div>

      {/* Pie Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="glass-card-elevated p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Traffic Sources</h3>
            <p className="text-muted-foreground">Visitor distribution</p>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-medium)'
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </motion.div>

      {/* Bar Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="lg:col-span-2 xl:col-span-3"
      >
        <Card className="glass-card-elevated p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Device Performance</h3>
            <p className="text-muted-foreground">Visitors vs conversions by device type</p>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="category" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    boxShadow: 'var(--shadow-medium)'
                  }}
                />
                <Legend />
                <Bar 
                  dataKey="visitors" 
                  fill="hsl(200, 100%, 80%)" 
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  dataKey="conversions" 
                  fill="hsl(213, 97%, 87%)" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}