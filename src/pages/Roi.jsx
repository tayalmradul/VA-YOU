import React from 'react'
import image from '/images/img9.jpg'
import Layout from '../layout/Layout'
import { NavLink } from 'react-router-dom'
const Roi = () => {
  document.title="ROI"
  console.log("helloo");
  return (

    <div
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "100vh",
    }}
    className="px-2"
    >
      <div><NavLink to='/login' className='text-center text-white text-7xl font-extrabold p-2 mt-10'>Rate Of Interest</NavLink></div>
    </div>
  )
}

export default Roi
