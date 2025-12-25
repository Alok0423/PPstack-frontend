import React from 'react'
import { useAuth } from '../../context/AuthContext'

export default function WelcomeCard(){
  const { user } = useAuth();
  const name = user?.name || 'Learner';
  const email = user?.email || '';

  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-2xl p-6 shadow-lg flex items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
        {user?.picture ? (
          <img src={user.picture} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-xl font-bold">{name.charAt(0)}</span>
        )}
      </div>

      <div>
        <div className="text-lg font-semibold">Welcome back, {name.split(' ')[0]}</div>
        <div className="text-sm opacity-90">{email}</div>
        <div className="mt-3 text-sm">
          <button className="bg-white/20 hover:bg-white/25 px-3 py-1 rounded-md mr-2">View profile</button>
          <button className="bg-white/10 hover:bg-white/15 px-3 py-1 rounded-md">My learning</button>
        </div>
      </div>
    </div>
  )
}
