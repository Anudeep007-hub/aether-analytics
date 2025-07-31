import { motion } from "framer-motion"
import { 
  Brain,
  Zap,
  Shield,
  Layers,
  Eye,
  Cpu,
  Globe,
  Sparkles
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Advanced machine learning algorithms that adapt and learn from your data patterns.",
    gradient: "from-purple-500 to-blue-600"
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Lightning-fast data processing with sub-second response times.",
    gradient: "from-yellow-500 to-orange-600"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and compliance.",
    gradient: "from-green-500 to-teal-600"
  },
  {
    icon: Layers,
    title: "Unified Dashboard",
    description: "All your metrics in one beautiful, intuitive interface.",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    icon: Eye,
    title: "Visual Intelligence",
    description: "Smart visualizations that highlight the most important trends.",
    gradient: "from-pink-500 to-rose-600"
  },
  {
    icon: Cpu,
    title: "Smart Automation",
    description: "Automated insights and recommendations powered by AI.",
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Handle massive datasets from anywhere in the world.",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    icon: Sparkles,
    title: "Predictive Analytics",
    description: "Forecast trends and outcomes with advanced AI models.",
    gradient: "from-amber-500 to-orange-600"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to transform your data into actionable insights. 
            Built with cutting-edge AI technology and beautiful design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="glass-card p-6 rounded-3xl card-3d group relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {feature.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {feature.description}
                </motion.p>
              </div>

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ 
                  opacity: { duration: 0.3 },
                  backgroundPosition: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }
                }}
                style={{
                  background: `linear-gradient(45deg, transparent, hsl(var(--primary) / 0.1), transparent)`,
                  backgroundSize: "200% 200%",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}