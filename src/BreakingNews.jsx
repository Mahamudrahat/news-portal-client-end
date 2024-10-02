import React from 'react'
import Marquee from "react-fast-marquee";

export default function BreakingNews() {
  return (
    <div className="w-5/6 flex">
        <button className="btn btn-warning">Latest News</button>
        <Marquee pauseOnHover={true} className="text-white" speed={50}>
            <div className="mr-4">Breaking News Climate Disaster</div>
            <div>Major Tsunami Happened</div>
            </Marquee>
    </div>
  )
}
