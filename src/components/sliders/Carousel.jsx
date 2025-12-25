import React from 'react'
import { motion } from 'framer-motion'

/**
 * Simple horizontal scroll carousel built from children.
 * Props: children, gap
 */
export default function Carousel({ children, gap=16 }){
  return (
    <div className="overflow-x-auto py-4">
      <div className="flex" style={{gap: gap}}>
        {React.Children.map(children, (child, i)=> (
          <motion.div whileHover={{ scale: 1.02 }} className="min-w-[260px]">{child}</motion.div>
        ))}
      </div>
    </div>
  )
}
