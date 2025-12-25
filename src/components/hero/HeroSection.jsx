import React from 'react'
import { motion } from 'framer-motion'
import GradientButton from '../ui/GradientButton'
import MotionLineBackground from './MotionLineBackground'
import { Link } from 'react-router-dom'

export default function HeroSection(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,var(--gd-left),var(--gd-right))] opacity-95" />
      <MotionLineBackground className="mix-blend-overlay" />
      <div className="max-w-7xl mx-auto relative z-10 py-24 px-6 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.1}} className="text-4xl md:text-5xl font-bold leading-tight">
              Learn cutting-edge AI & Machine Learning with <span className="text-yellow-300">PPStack</span>
            </motion.h1>
            <motion.p initial={{y:8, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.2}} className="text-lg mt-4 text-white/90">
              End-to-end courses built with real projects, mentors from industry, and career support.
            </motion.p>

            <div className="mt-6 flex gap-3">
              <GradientButton size="lg" onClick={()=> window.location='/courses'}>Explore Courses</GradientButton>
              <Link to="/signup" className="inline-flex items-center px-4 py-2 rounded-2xl bg-white/10 text-white">Sign up free</Link>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-3">
                <img src="/src/assets/placeholder-instructor.jpg" alt="instructor" className="w-12 h-12 rounded-full border-2 border-white/30"/>
                <div>
                  <div className="text-sm">Mentors include</div>
                  <div className="text-xs text-white/80">Top AI researchers & engineers</div>
                </div>
              </div>
            </div>

          </div>

          <div>
            <div className="card-glass p-6 rounded-xl relative overflow-hidden">
              <div className="text-sm text-white/80">Featured Course</div>
              <div className="text-xl font-semibold mt-2">Foundations of Deep Learning</div>
              <p className="mt-2 text-sm text-white/80">Start building real models today — practical labs & projects.</p>
              <div className="mt-4">
                <GradientButton onClick={()=> window.location='/courses'}>Enroll now</GradientButton>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
