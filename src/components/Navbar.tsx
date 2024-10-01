
import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className='w-full h-20 fixed md:h-16 text-white bg-black flex justify-between items-right text-right '>
            <div className='ml-5 md:ml-10 text-xl md:5xl lg:text-5xl font-bold cambira text-blue-500'>FARASAT MATEEN</div>
            <div className='flex flex-row text-xl mr-10 lg:mr-20 font-semibold'>
                <div className='hidden md:block md:mx-[20px] lg:mx-[35px] cursor-pointer '>Home</div>
                <div className='hidden md:block md:mx-[20px] lg:mx-[35px] cursor-pointer '>About</div>
                <div className='hidden md:block md:mx-[20px] lg:mx-[35px] cursor-pointer '>position</div>
                <div className='hidden md:block md:mx-[20px] lg:mx-[35px] cursor-pointer '>Apply</div>
                <div className='hidden md:block md:mx-[20px] lg:mx-[35px] cursor-pointer '>Contact</div>
            </div>
            <div className='md:hidden'>
                <a className='text-6xl mr-7' href="#">&#8805;</a>
            </div>
        </nav>
        
    </div>
  )
}

export default Navbar