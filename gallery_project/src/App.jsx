import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './components/Cards'
import Buttons from './components/Buttons'

const App = () => {

  const [userData, setUserdata] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)
    setUserdata(response.data)
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-600 font-bold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading....</h3>

  if (userData.length >0 ) {
    printUserData = userData.map(function(elem, idx) {

      return <div key={idx}>
        <Cards elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto text-white h-screen p-4'>
      <div className='flex h-[85%] flex-wrap justify-center items-center gap-2'>
        {printUserData}
      </div>
      <div>
        <Buttons index={index} setIndex={setIndex} setUserdata={setUserdata}/>
      </div>
    </div>
  )
}

export default App