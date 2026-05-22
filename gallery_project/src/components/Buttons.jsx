import React from 'react'

const Buttons = (props) => {
  return (
    <div className='flex justify-center items-center gap-6'>
      <button 
        style={{opacity: props.index == 1 ? 0.5 : 1}}
        className='bg-amber-600 text-black px-4 py-2 rounded font-bold active:scale-95 cursor-pointer'
        onClick={()=>{
          if (props.index>1){
            props.setIndex(props.index-1)
            props.setUserdata([])
          }
        }}
        >Prev
        </button>
        <h4>Page {props.index}</h4>
        <button 
        className='bg-amber-600 text-black px-4 py-2 rounded font-bold active:scale-95 cursor-pointer'
        onClick={()=>{
          props.setIndex(props.index+1)
          props.setUserdata([])
        }}
        >Next
        </button>
    </div>
  )
}

export default Buttons