import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'
import BreakingNews from '../../../BreakingNews'
import LeftSideBar from '../../../leftsidebar/LeftSideBar'
import NewsCard from '../../../NewsCard'

export default function Home() {
  const [news,setNews]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/news')
    .then((res)=>res.json())
    .then((data)=>setNews(data))
   },[])
  return (
    <div>
        
    <Header />
    <BreakingNews />
    <Navbar />
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="text-gray-300"><LeftSideBar/></div>
        <div className="md:col-span-2 text-gray-300">{news.map((singleNews)=>(

            <NewsCard key={singleNews._id} singleNews={singleNews}/> ))
          
          }</div>
        <div className="text-gray-300">Right sidebar</div>
    </div>
    </div>
  )
}
