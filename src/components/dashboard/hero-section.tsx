import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-20 p-4 glass-card rounded-3xl"
      >
        <BarChart3 className="h-8 w-8 text-primary" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-40 right-32 p-4 glass-card rounded-3xl"
      >
        <TrendingUp className="h-8 w-8 text-secondary" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 3, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-32 left-32 p-4 glass-card rounded-3xl"
      >
        <Zap className="h-8 w-8 text-accent" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-7xl md:text-8xl font-black mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            AI Powered
            <span className="block gradient-text">
              Analytics
            </span>
          </motion.h1>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Transform your data into actionable insights with our next-generation 
          AI analytics platform. Beautiful, powerful, and incredibly intuitive.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            size="lg" 
            className="btn-premium text-lg px-12 py-4 h-auto interactive-scale"
            onClick={() => window.location.href = '/dashboard'}
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="btn-glass text-lg px-12 py-4 h-auto"
            onClick={() => window.location.href = '/dashboard'}
          >
            View Dashboard
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {[
            { label: "Data Points Analyzed", value: "10B+" },
            { label: "Accuracy Rate", value: "99.7%" },
            { label: "Processing Speed", value: "Real-time" }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-foreground/30 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}