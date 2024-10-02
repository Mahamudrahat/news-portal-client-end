import moment from 'moment'
import React from 'react'

export default function Header() {
  return (
    <div className="text-center py-6 text-gray-300">
      <h1 className="font-edu text-6xl ">The Breaking News</h1>
      <h2 className="text-2xl mt-4">
        Bold, Unbiased Reporting for a better informed world
      </h2>
      <p>{moment().format("LLLL")}</p>
    </div>
  )
}
