import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  DollarSign, 
  Users, 
  Target, 
  TrendingUp,
  Activity,
  Eye,
  MousePointer,
  Clock
} from "lucide-react"
import jsPDF from "jspdf"
import { CSVLink } from "react-csv"
import { toast } from "@/hooks/use-toast"
import { AnalyticsCard } from "./analytics-card"
import { InteractiveCharts } from "./interactive-charts"
import { DataTable } from "./data-table"
import { DashboardFilters } from "./dashboard-filters"
import { DashboardSkeleton } from "./loading-skeletons"

interface Metric {
  title: string
  value: string
  change: string
  changeType: "positive" | "negative" | "neutral"
  icon: typeof DollarSign
  rawValue: number
}

export function OverviewDashboard() {
  const [loading, setLoading] = useState(true)
  const [metrics, setMetrics] = useState<Metric[]>([])
  const [lastUpdate, setLastUpdate] = useState(new Date())

  // Sample metrics data with real-time simulation
  const generateMetrics = (): Metric[] => [
    {
      title: "Total Revenue",
      value: `$${(Math.random() * 100000 + 500000).toLocaleString('en-US', { maximumFractionDigits: 0 })}`,
      change: `+${(Math.random() * 10 + 5).toFixed(1)}%`,
      changeType: "positive",
      icon: DollarSign,
      rawValue: Math.random() * 100000 + 500000
    },
    {
      title: "Active Users",
      value: `${(Math.random() * 10000 + 45000).toLocaleString('en-US', { maximumFractionDigits: 0 })}`,
      change: `+${(Math.random() * 5 + 2).toFixed(1)}%`,
      changeType: "positive",
      icon: Users,
      rawValue: Math.random() * 10000 + 45000
    },
    {
      title: "Conversion Rate",
      value: `${(Math.random() * 2 + 3).toFixed(2)}%`,
      change: Math.random() > 0.7 ? `-${(Math.random() * 0.5).toFixed(1)}%` : `+${(Math.random() * 0.8).toFixed(1)}%`,
      changeType: Math.random() > 0.7 ? "negative" : "positive",
      icon: Target,
      rawValue: Math.random() * 2 + 3
    },
    {
      title: "Growth Rate",
      value: `${(Math.random() * 15 + 15).toFixed(1)}%`,
      change: `+${(Math.random() * 3 + 1).toFixed(1)}%`,
      changeType: "positive",
      icon: TrendingUp,
      rawValue: Math.random() * 15 + 15
    },
    {
      title: "Session Duration",
      value: `${(Math.random() * 2 + 4).toFixed(1)}m`,
      change: `+${(Math.random() * 10 + 5).toFixed(0)}s`,
      changeType: "positive",
      icon: Clock,
      rawValue: Math.random() * 2 + 4
    },
    {
      title: "Page Views",
      value: `${(Math.random() * 100000 + 250000).toLocaleString('en-US', { maximumFractionDigits: 0 })}`,
      change: `+${(Math.random() * 8 + 3).toFixed(1)}%`,
      changeType: "positive",
      icon: Eye,
      rawValue: Math.random() * 100000 + 250000
    },
    {
      title: "Click Rate",
      value: `${(Math.random() * 5 + 8).toFixed(2)}%`,
      change: `+${(Math.random() * 1 + 0.5).toFixed(1)}%`,
      changeType: "positive",
      icon: MousePointer,
      rawValue: Math.random() * 5 + 8
    },
    {
      title: "Active Sessions",
      value: `${(Math.random() * 5000 + 8000).toLocaleString('en-US', { maximumFractionDigits: 0 })}`,
      change: `+${(Math.random() * 12 + 3).toFixed(1)}%`,
      changeType: "positive",
      icon: Activity,
      rawValue: Math.random() * 5000 + 8000
    }
  ]

  // Initialize data
  useEffect(() => {
    const initializeData = () => {
      setMetrics(generateMetrics())
      setLoading(false)
    }

    setTimeout(initializeData, 1500)
  }, [])

  // Real-time updates simulation
  useEffect(() => {
    if (loading) return

    const interval = setInterval(() => {
      setMetrics(generateMetrics())
      setLastUpdate(new Date())
      
      toast({
        title: "Dashboard Updated",
        description: "Real-time data has been refreshed",
        duration: 2000,
      })
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [loading])

  // Export functions
  const exportToPDF = () => {
    const doc = new jsPDF()
    
    doc.setFontSize(20)
    doc.text('Analytics Dashboard Report', 20, 30)
    
    doc.setFontSize(12)
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 20, 50)
    
    let yPosition = 70
    metrics.slice(0, 4).forEach((metric) => {
      doc.text(`${metric.title}: ${metric.value} (${metric.change})`, 20, yPosition)
      yPosition += 10
    })
    
    doc.save('analytics-dashboard.pdf')
    
    toast({
      title: "PDF Exported",
      description: "Dashboard report has been downloaded",
    })
  }

  const csvData = metrics.map(metric => ({
    Metric: metric.title,
    Value: metric.value,
    Change: metric.change,
    'Last Updated': lastUpdate.toLocaleString()
  }))

  const handleDateRangeChange = (range: any) => {
    toast({
      title: "Date Range Updated",
      description: `Filtering data from ${range.from?.toLocaleDateString()} to ${range.to?.toLocaleDateString()}`,
    })
  }

  const handleMetricChange = (metric: string) => {
    toast({
      title: "Metric Filter Applied",
      description: `Showing data for: ${metric}`,
    })
  }

  const handleExport = (type: 'pdf' | 'csv') => {
    if (type === 'pdf') {
      exportToPDF()
    } else {
      toast({
        title: "CSV Export Ready",
        description: "Click the CSV button to download",
      })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <DashboardSkeleton />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold gradient-text mb-2">
                Analytics Overview
              </h1>
              <p className="text-muted-foreground">
                Real-time insights and performance metrics
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Last updated: {lastUpdate.toLocaleTimeString()}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-500 font-medium">Live</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <DashboardFilters
          onDateRangeChange={handleDateRangeChange}
          onMetricChange={handleMetricChange}
          onExport={handleExport}
        />

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.slice(0, 4).map((metric, index) => (
            <AnalyticsCard
              key={metric.title}
              {...metric}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.slice(4, 8).map((metric, index) => (
            <AnalyticsCard
              key={metric.title}
              {...metric}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Interactive Charts */}
        <div className="mb-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold mb-6"
          >
            Performance Analytics
          </motion.h2>
          <InteractiveCharts />
        </div>

        {/* Data Table */}
        <div className="mb-8">
          <DataTable />
        </div>

        {/* CSV Export (Hidden) */}
        <div className="hidden">
          <CSVLink
            data={csvData}
            filename="analytics-dashboard.csv"
            className="hidden"
            id="csv-download"
          >
            Download CSV
          </CSVLink>
        </div>
      </div>
    </div>
  )
}