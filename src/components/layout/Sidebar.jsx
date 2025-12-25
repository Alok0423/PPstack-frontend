import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Sidebar(){
  return (
    <aside className="w-64 bg-white border-r h-screen p-4 hidden md:block">
      <div className="mb-6">
        <div className="text-lg font-bold">PPStack</div>
        <div className="text-xs text-slate-500 mt-1">Your learning hub</div>
      </div>

      <nav className="flex flex-col gap-2 text-slate-700">
        <NavLink to="/app" className={({isActive})=> isActive ? 'font-semibold text-[var(--gd-left)]' : ''}>Overview</NavLink>
        <NavLink to="/app/courses">My Courses</NavLink>
        <NavLink to="/app/certificates">Certificates</NavLink>
        <NavLink to="/app/settings">Settings</NavLink>
      </nav>
    </aside>
  )
}
