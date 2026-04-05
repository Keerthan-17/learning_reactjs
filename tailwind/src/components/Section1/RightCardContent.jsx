import {ArrowRight} from "lucide-react"
const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
        <h2 className="bg-white h-10 w-10 rounded-full flex justify-center items-center font-bold">{props.id+1}</h2>
        <div>
          <p className="text-shadow-2xs text-ls leading-relaxed text-white mb-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vel doloribus cumque fugiat porro accusantium?</p>
          <div className="flex justify-between">
            <button style={{backgroundColor:props.color}} className="text-white font-medium px-7 py-1 rounded-full">
              {props.tag}
            </button>
            <button style={{backgroundColor:props.color}} className="text-white font-medium px-2 py-2 rounded-full">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent