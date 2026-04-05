import RightCard from "./RightCard"

const RightContent = (props) => {
  return (
    <div id="right" className="h-full w-2/3 p-3 flex  rounded-4xl flex-nowrap overflow-x-auto gap-5">
      {props.users.map(function(elem, idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color}/>
      })}
    </div>
  )
}

export default RightContent