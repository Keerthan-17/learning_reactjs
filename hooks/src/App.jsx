import { useState } from "react"
const App = () => {

  const [data, setdata] = useState({user:'Mike', age:20})

  // const updatevalue = ()=>{
  //   const newData = {...data}
  //   newData.user = 'Keerthu'
  //   newData.age = '21'

  //   setdata(newData)
  // }

  // or we could use arrow function to directly change value

  const updatevalue = ()=>{
    setdata(prev=>({...prev,age:22}))
  }

  return (
    <div>
      <h1>Name: {data.user}, Age:{data.age}</h1>
      <button onClick={updatevalue}>Click Me!!</button>
    </div>
  )
}

export default App