import React from 'react'

const Formpage = () => {

  const submitForm = (e)=>{
    e.preventDefault()
    console.log("sumitted")
  }
  return (
    <div>
      <form onSubmit={e=>{
        submitForm(e)
      }}>
        <input type="text" placeholder='UserName' className='border-2 ml-5'/>
        <button className='border-2 m-10'>Submit</button>
      </form>
    </div>
  )
}

export default Formpage