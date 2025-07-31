import { useState } from "react"
import { motion } from "framer-motion"
import { CalendarIcon, Download, Filter } from "lucide-react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface DateRange {
  from: Date | undefined
  to: Date | undefined
}

interface DashboardFiltersProps {
  onDateRangeChange: (range: DateRange) => void
  onMetricChange: (metric: string) => void
  onExport: (type: 'pdf' | 'csv') => void
}

export function DashboardFilters({ 
  onDateRangeChange, 
  onMetricChange, 
  onExport 
}: DashboardFiltersProps) {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
    to: new Date()
  })

  const handleDateSelect = (range: DateRange) => {
    setDateRange(range)
    onDateRangeChange(range)
  }

  return (
    <Card className="glass-card p-6 mb-8">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">Filters</span>
          </div>

          {/* Date Range Picker */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-[280px] justify-start text-left font-normal btn-glass",
                  !dateRange.from && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateRange.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, "LLL dd, y")} -{" "}
                      {format(dateRange.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(dateRange.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date range</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={dateRange.from}
                selected={{
                  from: dateRange.from,
                  to: dateRange.to,
                }}
                onSelect={(range) => handleDateSelect({
                  from: range?.from,
                  to: range?.to
                })}
                numberOfMonths={2}
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>

          {/* Metric Selector */}
          <Select onValueChange={onMetricChange} defaultValue="all">
            <SelectTrigger className="w-[180px] btn-glass">
              <SelectValue placeholder="Select metric" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Metrics</SelectItem>
              <SelectItem value="revenue">Revenue</SelectItem>
              <SelectItem value="users">Users</SelectItem>
              <SelectItem value="conversions">Conversions</SelectItem>
              <SelectItem value="growth">Growth</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Export Buttons */}
        <motion.div 
          className="flex gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            variant="outline"
            size="sm"
            onClick={() => onExport('pdf')}
            className="btn-glass"
          >
            <Download className="mr-2 h-4 w-4" />
            PDF
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onExport('csv')}
            className="btn-glass"
          >
            <Download className="mr-2 h-4 w-4" />
            CSV
          </Button>
        </motion.div>
      </div>
    </Card>
  )
}