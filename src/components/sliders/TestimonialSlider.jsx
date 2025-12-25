import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TestimonialSlider({ items }) {
  const [idx, setIdx] = useState(0)

  useEffect(()=> {
    const t = setInterval(()=> setIdx(i => (i+1)%items.length), 4000)
    return ()=> clearInterval(t)
  }, [items.length])

  return (
    <div className="relative">
      <AnimatePresence>
        <motion.div key={items[idx].id} initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} className="card-glass p-6 rounded-xl">
          <div className="text-lg">“{items[idx].text}”</div>
          <div className="mt-4 text-sm text-slate-500">— {items[idx].name}, {items[idx].role}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
