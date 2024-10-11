import React, { useContext } from 'react'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../Provider/AuthProvider'

export default function Navbar() {
    const {user,logOut}=useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignOut=()=>{
        logOut().then(()=>{
            navigate("/login")
        }).catch((error)=>{
            console.error(error);
        })
    };
    const navLink=(
        <>
        <li><NavLink to="/" className="text-gray-300">Home</NavLink></li>
        <li><NavLink to="/about" className="text-gray-300">About</NavLink></li>
        <li><NavLink to="/career" className="text-gray-300">Career</NavLink></li>
        </>
    )
  return (
    <div>
        <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navLink}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl text-gray-300">The Breaking New</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>
  {user ? (
          <div className="navbar-end">
            <span className="text-gray-300 px-2">{user.displayName}</span>
            <img src={user.photoURL} alt="profilePicture" className="w-10 h-10 rounded-full border border-white p-1 m-2"/>
            <Link to="/">
              <button
                onClick={handleSignOut}
                className="btn btn-outline btn-accent"
              >
                LogOut
              </button>
            </Link>
          </div>
        ) : (
          <div className="navbar-end">
            <Link to="/login">
              <button className="btn btn-outline btn-accent">Login</button>
            </Link>
          </div>
        )}
</div>
    </div>
  )
}
