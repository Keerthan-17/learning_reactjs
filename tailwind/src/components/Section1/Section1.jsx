import Context from "./Context"
import Navibar from "./Navibar"

const Section1 = (props) => {
  return (
    <div className='h-screen w-full'>
      <Navibar />
      <Context users={props.users}/>
    </div>
  )
}

export default Section1