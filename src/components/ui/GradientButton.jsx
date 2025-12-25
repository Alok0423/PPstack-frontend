import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

/**
 * Reusable GradientButton that accepts gradient type and variants.
 * Usage: <GradientButton>Join Now</GradientButton>
 */
export default function GradientButton({ children, className, onClick, size='md', variant='blue' }){
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-5 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  const style =
    variant === 'pink'
      ? 'bg-hotpink text-white shadow-md'
      : 'bg-[linear-gradient(90deg,var(--gd-left),var(--gd-right))] text-white shadow-md'

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={clsx('rounded-2xl font-medium', style, sizes[size], className)}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
