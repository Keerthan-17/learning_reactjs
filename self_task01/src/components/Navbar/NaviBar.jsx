import NavLogo from './NavLogo'
import NavMiddle from './NavMiddle'
import NavRight from './NavRight'

const NaviBar = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-15 z-50 bg-green-100/90 flex justify-between rounded-2xl" >
      <NavLogo/>
      <NavMiddle/>
      <NavRight/>
    </div>
  )
}

export default NaviBar