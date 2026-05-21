import { useState } from 'react'

const App = () => {

  const [Title, setTitle] = useState('')
  const [Details, setDetails] = useState('')
  const [Task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...Task]
    copyTask.push({Title,Details})
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...Task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen bg-black text-white lg:flex'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className='flex items-start flex-col gap-4 p-10 lg:w-1/2'>
        <h2 className='text-4xl font-bold'>Add Notes</h2>
        <input 
        type="text" 
        placeholder='Enter Task Title' 
        className='px-5 py-2 w-full font-medium border-2 outline-none rounded'
        value={Title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        />
        <textarea 
        type="text" 
        placeholder='Enter Task Details' 
        className='px-5 py-2 w-full h-32 font-medium border-2 outline-none rounded'
        value={Details}
        onChange={(e)=> {
          setDetails(e.target.value)
        }}
        />
        <button className='bg-white active:bg-gray-300 active:scale-95 text-black px-5 py-2 w-full font-medium outline-none rounded'>Add Task</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h2 className='text-4xl font-bold'>Recent Notes</h2>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
          {Task.map(function(elem,idx){

            return <div key={idx} className='flex justify-between flex-col items-start h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-7 bg-[url("https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png")]'>
              <div className='overflow-hidden flex-1 w-full'>
                <h3 className='leading-tight text-lg font-bold max-h-6 overflow-y-auto pr-1'>{elem.Title}</h3>
                <p className='mt-2 leading-tight text-sm font-medium text-gray-500 max-h-20 overflow-y-auto pr-1'>{elem.Details}</p>
              </div>
              <button onClick={()=> {
                deleteNote(idx)
              }} className='bg-red-400 w-full cursor-pointer active:scale-95 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App