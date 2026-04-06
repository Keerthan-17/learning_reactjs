import React from 'react'
import LeftBackimg from './LeftBackimg'

const LeftContent = () => {
  return (
    <div className='h-full w-150' >
      <LeftBackimg/>
      <div className='absolute h-30 w-30 z-100 flex justify-center items-center rounded-full bg-green-700 border-white border-6 ml-13 -mt-75 text-white capitalize '>
        <h4>green home</h4>
      </div>
      <div className='absolute h-25 w-25 z-100 flex justify-center items-center rounded-full bg-amber-600 border-white border-10 ml-100 -mt-17 overflow-hidden'>
        <img className='size-15' src="src/assets/images/tree.png" alt="" />
      </div>
    </div>
  )
}

export default LeftContent