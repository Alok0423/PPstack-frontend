import React, { useState } from 'react'
import { motion } from 'framer-motion'
import GradientButton from './ui/GradientButton'

export default function EmailSubscribeBox(){
  const [email, setEmail] = useState('')
  const onSubscribe = ()=> {
    // placeholder: integrate backend POST /api/newsletter
    alert(`Subscribed ${email} (dummy)`)
    setEmail('')
  }
  return (
    <div className="card-glass p-5 rounded-xl">
      <div className="flex flex-col md:flex-row gap-3 items-center">
        <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your email" className="px-4 py-2 rounded-lg border w-full md:w-72" />
        <GradientButton onClick={onSubscribe}>Subscribe</GradientButton>
      </div>
    </div>
  )
}
