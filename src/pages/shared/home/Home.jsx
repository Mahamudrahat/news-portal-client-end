import React from 'react'
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'
import BreakingNews from '../../../BreakingNews'
import LeftSideBar from '../../../leftsidebar/LeftSideBar'

export default function Home() {
  return (
    <div>
        
    <Header />
    <BreakingNews />
    <Navbar />
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="text-gray-300"><LeftSideBar/></div>
        <div className="md:col-span-2 text-gray-300">Home</div>
        <div className="text-gray-300">Right sidebar</div>
    </div>
    </div>
  )
}
