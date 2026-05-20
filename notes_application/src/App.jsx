import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form className='flex items-start flex-col gap-4 p-10'>
        <input 
        type="text" 
        placeholder='Enter Task Title' 
        className='px-5 py-2 w-1/2 font-medium border-2 outline-none rounded'
        />
        <textarea 
        type="text" 
        placeholder='Enter Task Details' 
        className='px-5 py-2 w-1/2 h-32 font-medium border-2 outline-none rounded'
        />
        <button className='bg-white text-black px-5 py-2 w-1/2 font-medium outline-none rounded'>Add Task</button>
      </form>
    </div>
  )
}

export default App