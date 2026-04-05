
import RightCardContent from "./RightCardContent"
const Rightcard = (props) => {
  return (
    <div className="h-full w-60 rounded-4xl overflow-hidden relative shrink-0">
      <img className="h-full w-full object-cover" src={props.img} />
      <RightCardContent id= {props.id} tag={props.tag} color={props.color}/>
    </div>
  )
}

export default Rightcard