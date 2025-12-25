import React from 'react'
import { COURSES } from '../../data/dummy'
import ProgressBar from '../ui/ProgressBar'

export default function RecentCourses(){
  const items = COURSES.slice(0,3);
  return (
    <div className="space-y-3">
      {items.map(c => (
        <div key={c.id} className="flex items-center gap-3 bg-white rounded-xl p-3 border">
          <img src={c.cover} alt="" className="w-14 h-14 rounded-md object-cover" />
          <div className="flex-1">
            <div className="font-semibold">{c.title}</div>
            <div className="text-xs text-slate-500">{c.author}</div>
            <div className="mt-2"><ProgressBar value={Math.floor(Math.random()*80)+10} /></div>
          </div>
        </div>
      ))}
    </div>
  )
}
