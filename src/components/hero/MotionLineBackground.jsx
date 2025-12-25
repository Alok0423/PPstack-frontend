import React from 'react'
import { motion } from 'framer-motion'

/**
 * Abstract motion lines background inspired by DeepLearning.AI hero.
 * It's lightweight: uses SVG lines that animate strokeDashoffset and opacity.
 */
export default function MotionLineBackground({ className='' }){
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
        <motion.path d="M0 70 Q20 30 50 60 T100 55" stroke="rgba(255,255,255,0.08)" strokeWidth="0.6" fill="none"
          initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:6, repeat: Infinity}} />
        <motion.path d="M0 40 Q30 20 70 45 T100 35" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" fill="none"
          initial={{pathLength:0}} animate={{pathLength:1}} transition={{duration:8, repeat: Infinity, delay:1}} />
      </svg>
    </div>
  )
}
