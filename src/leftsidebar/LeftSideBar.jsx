import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function LeftSideBar() {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
     fetch('http://localhost:5000/catagories')
     .then((res)=>res.json())
     .then((data)=>setCategories(data))
    },[])
  return (
    <div>
        <h2 className="text-gray-300">All Categories:{categories.length}</h2>
        {categories.map((category)=>(
            <NavLink to={`/category/${category.id}`} key={category.id} className="block p-2">
            <button className="btn btn-outline btn-accent text-lg w-full">
            {category.name}
          </button>
            </NavLink>
        ))
            
            
        }
    </div>
  )
}
