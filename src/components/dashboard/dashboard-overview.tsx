import { motion } from "framer-motion"
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Activity,
  BarChart3,
  PieChart,
  LineChart,
  Target
} from "lucide-react"
import { AnalyticsCard } from "./analytics-card"

const analytics = [
  {
    title: "Total Users",
    value: "54,239",
    change: "+12.3%",
    changeType: "positive" as const,
    icon: Users
  },
  {
    title: "Revenue",
    value: "$142,592",
    change: "+8.7%",
    changeType: "positive" as const,
    icon: DollarSign
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "-0.3%",
    changeType: "negative" as const,
    icon: Target
  },
  {
    title: "Active Sessions",
    value: "8,429",
    change: "+2.1%",
    changeType: "positive" as const,
    icon: Activity
  },
  {
    title: "Growth Rate",
    value: "23.5%",
    change: "+5.2%",
    changeType: "positive" as const,
    icon: TrendingUp
  },
  {
    title: "Engagement",
    value: "89.3%",
    change: "0.0%",
    changeType: "neutral" as const,
    icon: BarChart3
  }
]

const chartCards = [
  {
    title: "Revenue Analytics",
    subtitle: "Monthly revenue trends",
    icon: LineChart,
    gradient: "from-blue-500/20 to-purple-600/20"
  },
  {
    title: "User Distribution",
    subtitle: "Geographic breakdown",
    icon: PieChart,
    gradient: "from-green-500/20 to-teal-600/20"
  },
  {
    title: "Performance Metrics",
    subtitle: "Real-time insights",
    icon: BarChart3,
    gradient: "from-orange-500/20 to-red-600/20"
  }
]

export function DashboardOverview() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">
            Real-time Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor your key metrics with beautiful, interactive charts and 
            real-time data visualization powered by AI insights.
          </p>
        </motion.div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {analytics.map((item, index) => (
            <AnalyticsCard
              key={item.title}
              {...item}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Chart Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {chartCards.map((chart, index) => (
            <motion.div
              key={chart.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="glass-card-elevated p-8 rounded-3xl card-3d group cursor-pointer relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${chart.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-primary">
                    <chart.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-xs px-3 py-1 bg-glass-primary rounded-full border border-glass-border"
                  >
                    Live
                  </motion.div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">
                  {chart.title}
                </h3>
                <p className="text-muted-foreground mb-8">
                  {chart.subtitle}
                </p>
                
                {/* Simulated Chart Area */}
                <div className="h-32 bg-gradient-secondary/10 rounded-2xl flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold gradient-text"
                  >
                    📊
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}