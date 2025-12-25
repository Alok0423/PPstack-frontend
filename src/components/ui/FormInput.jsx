import React from 'react'

export default function FormInput({ label, ...props }){
  return (
    <label className="block">
      {label && <span className="text-sm text-slate-600 mb-1 inline-block">{label}</span>}
      <input
        {...props}
        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[rgba(13,71,161,0.12)]"
      />
    </label>
  )
}
