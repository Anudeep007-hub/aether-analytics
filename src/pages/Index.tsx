import { Navbar } from "@/components/navigation/navbar"
import { HeroSection } from "@/components/dashboard/hero-section"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import { FeaturesSection } from "@/components/dashboard/features-section"
import { Footer } from "@/components/dashboard/footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <div id="dashboard">
          <DashboardOverview />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
