import {Search} from 'lucide-react'

const NavRight = () => {
  return (
    <div className='flex justify-between items-center w-40 mr-20'>
        <div>
          <Search />
        </div>
        <div className='h-8 pl-4 border-l-2'>
          <button className='bg-green-800 rounded-2xl h-fit px-4  py-1 text-white'>GetHouse</button>
        </div>
    </div>
  )
}

export default NavRight