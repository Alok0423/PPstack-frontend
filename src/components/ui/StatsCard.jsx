import React from 'react'
import { motion } from 'framer-motion'

export default function StatsCard({ title, value, accent }){
  return (
    <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} className="card-glass p-4 rounded-xl flex flex-col items-start gap-2">
      <span className="text-xs text-slate-500">{title}</span>
      <div className="text-2xl font-semibold">{value}</div>
      {accent && <div className="text-[0.75rem] text-slate-500">{accent}</div>}
    </motion.div>
  )
}
