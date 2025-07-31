import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function MetricCardSkeleton() {
  return (
    <Card className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 rounded-2xl bg-muted/50 animate-pulse">
          <div className="h-6 w-6 bg-muted rounded" />
        </div>
        <div className="h-4 w-12 bg-muted rounded animate-pulse" />
      </div>
      <div className="space-y-2">
        <div className="h-4 w-20 bg-muted rounded animate-pulse" />
        <div className="h-8 w-24 bg-muted rounded animate-pulse" />
      </div>
    </Card>
  )
}

export function ChartSkeleton() {
  return (
    <Card className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-2">
          <div className="h-6 w-32 bg-muted rounded animate-pulse" />
          <div className="h-4 w-24 bg-muted rounded animate-pulse" />
        </div>
        <div className="h-4 w-8 bg-muted rounded animate-pulse" />
      </div>
      <div className="h-64 bg-muted/30 rounded-2xl animate-pulse" />
    </Card>
  )
}

export function TableSkeleton() {
  return (
    <Card className="glass-card p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="h-6 w-32 bg-muted rounded animate-pulse" />
          <div className="h-10 w-24 bg-muted rounded animate-pulse" />
        </div>
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex space-x-4">
              {[...Array(4)].map((_, j) => (
                <div 
                  key={j} 
                  className="h-4 bg-muted rounded animate-pulse flex-1"
                  style={{ animationDelay: `${(i + j) * 100}ms` }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      {/* Metrics Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <MetricCardSkeleton />
          </motion.div>
        ))}
      </div>

      {/* Charts Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
          >
            <ChartSkeleton />
          </motion.div>
        ))}
      </div>

      {/* Table Skeleton */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <TableSkeleton />
      </motion.div>
    </div>
  )
}