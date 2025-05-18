import React from 'react'
import { asset } from '../assets/asset'

const Nav = () => {
  return (
    <div>
    <div className='flex justify-between items-center px-[2vw] sm:px-[4vw] md:px-[6vw] lg:px-[7vw] py-4'>
      <img src={asset.img} className='w-[130px]' alt="" />
      <img src={asset.profile} className='w-[50px]' alt="" />
    </div>
    <hr className=''/>
    </div>
  )
}

export default Nav
