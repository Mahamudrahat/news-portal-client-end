import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <div className="bg-[#262521]">
    <div className="max-w-6xl mx-auto font-popppins">
        <Outlet />
    </div>
    </div>
  )
}
