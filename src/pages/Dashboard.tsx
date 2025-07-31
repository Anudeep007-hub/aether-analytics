import { Navbar } from "@/components/navigation/navbar"
import { OverviewDashboard } from "@/components/dashboard/overview-dashboard"

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <OverviewDashboard />
    </div>
  )
}

export default Dashboard