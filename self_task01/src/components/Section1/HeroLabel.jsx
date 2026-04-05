import {TreePine} from 'lucide-react'
const HeroLabel = () => {
  return (
    <div className='flex items-center '>
        <div className='z-1 bg-white h-10 w-10 rounded-2xl flex justify-center items-center'>
          <TreePine color="#065700" />
        </div>
        <h4 className='h-10 w-auto -ml-3 pl-6 bg-green-800 rounded-2xl text-white px-4 py-1 flex justify-center items-center'>Green Forest</h4>
      </div>
  )
}

export default HeroLabel