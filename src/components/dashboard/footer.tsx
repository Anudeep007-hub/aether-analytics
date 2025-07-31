import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">A</span>
            </div>
            <span className="text-3xl font-bold gradient-text">
              Analytics
            </span>
          </div>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your data into actionable insights with our next-generation 
            AI analytics platform. Beautiful, powerful, and incredibly intuitive.
          </p>
          
          <div className="text-sm text-muted-foreground">
            © 2024 AI Analytics. All rights reserved. Built with ❤️ and cutting-edge technology.
          </div>
        </motion.div>
      </div>
    </footer>
  )
}