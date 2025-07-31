import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/card"

interface AnalyticsCardProps {
  title: string
  value: string
  change: string
  changeType: "positive" | "negative" | "neutral"
  icon: LucideIcon
  delay?: number
}

export function AnalyticsCard({ 
  title, 
  value, 
  change, 
  changeType, 
  icon: Icon, 
  delay = 0 
}: AnalyticsCardProps) {
  const changeColor = {
    positive: "text-green-500",
    negative: "text-red-500",
    neutral: "text-muted-foreground"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <Card className="glass-card p-6 card-3d group cursor-pointer">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-2xl bg-gradient-primary">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: delay + 0.2 }}
            className={`text-sm font-medium ${changeColor[changeType]}`}
          >
            {change}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: delay + 0.3 }}
        >
          <h3 className="text-sm font-medium text-muted-foreground mb-2">
            {title}
          </h3>
          <p className="text-3xl font-bold gradient-text">
            {value}
          </p>
        </motion.div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
      </Card>
    </motion.div>
  )
}