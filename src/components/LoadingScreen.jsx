import { motion } from 'framer-motion'

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Elegant Logo */}
          <div className="w-24 h-24 mx-auto relative">
            <motion.div
              className="absolute inset-0 border border-accent/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-4 border border-t-accent border-r-transparent border-b-transparent border-l-transparent rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 glass rounded-full flex items-center justify-center">
              <span className="text-3xl font-display text-accent">A</span>
            </div>
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-body text-textMuted font-light tracking-wider"
        >
          Creating Experiences
        </motion.p>
        
        {/* Elegant Progress Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 120, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-8"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-4"
        >
          <span className="text-caption text-textMuted font-mono">
            {Math.floor(Math.random() * 20 + 80)}%
          </span>
        </motion.div>
      </div>
    </div>
  )
}

export default LoadingScreen
