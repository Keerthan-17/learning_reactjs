import RightCard from "./RightCard"

const RightContent = (props) => {
  return (
    <div className="h-full w-2/3 p-3 flex overflow-x-auto rounded-4xl flex-nowrap gap-5">
      {props.users.map(function(elem){
        return <RightCard img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent