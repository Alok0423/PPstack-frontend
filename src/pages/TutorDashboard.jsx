import React from 'react'
import { useAuth } from '../context/AuthContext'
import StatsCard from '../components/ui/StatsCard'

export default function TutorDashboard(){
  const { user } = useAuth();

  const stats = [
    { title: 'Courses created', value: 5 },
    { title: 'Students', value: 240 },
    { title: 'Avg. Rating', value: '4.6 / 5' },
    { title: 'Revenue', value: '$3.2k' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Instructor Dashboard</h1>
          <p className="text-sm text-slate-500">Manage your courses and students</p>
        </div>
        <div className="text-sm text-slate-600">Signed in as <strong>{user?.name}</strong></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((s, i) => <StatsCard key={i} title={s.title} value={s.value} />)}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="card-glass p-4 rounded-xl">
            <h3 className="font-semibold">Your Courses</h3>
            <p className="text-sm text-slate-500 mt-2">Manage content, assignments and update pricing.</p>
          </div>

          <div className="card-glass p-4 rounded-xl">
            <h3 className="font-semibold">Student Feedback</h3>
            <p className="text-sm text-slate-500 mt-2">No new feedback</p>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="card-glass p-4 rounded-xl">
            <h3 className="font-semibold">Announcements</h3>
            <p className="text-sm text-slate-500 mt-2">Create announcement for your learners.</p>
          </div>

          <div className="card-glass p-4 rounded-xl">
            <h3 className="font-semibold">Payouts</h3>
            <p className="text-sm text-slate-500 mt-2">Next payout scheduled in 5 days.</p>
          </div>
        </aside>
      </div>
    </div>
  )
}
