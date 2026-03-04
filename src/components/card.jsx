const card = (props) => {
  return (
    <div className='Card'>
      <img src="https://images.unsplash.com/photo-1768479397383-49806c934167?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <h2>{props.user}</h2>
      <p>{props.des}</p>
      <button>View Profile</button>
    </div>
  )
}

export default card