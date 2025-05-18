import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Side = () => {
  return (
    <div className='min-w-[17vh] md:w-[30vh] border-red-500 h-screen overflow-hidden border-r-2 flex flex-col'>
      <Link className='px-4 py-2 sm:pl-[40px] sm:pr-[14px] text-center  sm:py-3 border border-red-300 ml-10 text-xl mt-8' to="/">Add</Link>
      <Link className='sm:pl-[40px] px-4 py-2 sm:pr-[14px] text-center  sm:py-3 border border-red-300 ml-10 text-xl mt-8' to="/list">List</Link>
    </div>
  )
}

export default Side
