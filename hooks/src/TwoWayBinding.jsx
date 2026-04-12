import { useState } from "react"


const TwoWayBinding = () => {

  const [Title, setTitle] = useState('')

  const btnSubmit=()=>{
    console.log('Submitted by',Title);
    setTitle('')    
  }

  return (
    <div>
      <input type="text" placeholder='UserName' value={Title} onChange={(e)=>{
        setTitle(e.target.value)
      }}/>
      <button onClick={btnSubmit}>Submit</button>
    </div>
  )
}

export default TwoWayBinding