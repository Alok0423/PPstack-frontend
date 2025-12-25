import React from 'react'
import { useAuth } from '../context/AuthContext'
import StatsCard from '../components/ui/StatsCard'
import WelcomeCard from '../components/ui/WelcomeCard'
import RecentCourses from '../components/home/RecentCourses'
import { COURSES } from '../data/dummy'

export default function LearnerDashboard(){
  const { user } = useAuth();

  // sample stats (replace with real data when available)
  const stats = [
    { title: 'Courses enrolled', value: 8 },
    { title: 'Hours learned', value: '120h' },
    { title: 'Progress', value: '54%' },
    { title: 'Certificates', value: 2 }
  ];

  return (
    <div className="space-y-6">
      <WelcomeCard />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((s, idx) => (
          <StatsCard key={idx} title={s.title} value={s.value} />
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Your Courses</h2>
            <div className="text-sm text-slate-500">Showing recent</div>
          </div>
          <RecentCourses />
        </div>

        <aside className="space-y-4">
          <div className="card-glass p-4 rounded-xl">
            <h3 className="font-semibold">Upcoming</h3>
            <p className="text-sm text-slate-500 mt-2">No upcoming sessions</p>
          </div>

          <div className="card-glass p-4 rounded-xl">
            <h3 className="font-semibold">Certificates</h3>
            <div className="mt-2 text-sm text-slate-600">You have 2 certificates</div>
          </div>
        </aside>
      </div>
    </div>
  )
}
