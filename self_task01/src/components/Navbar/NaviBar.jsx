import NavLogo from './NavLogo'
import NavMiddle from './NavMiddle'
import NavRight from './NavRight'

const NaviBar = () => {
  return (
    <div className="h-15 bg-green-100/50 flex justify-between rounded-2xl" >
      <NavLogo/>
      <NavMiddle/>
      <NavRight/>
    </div>
  )
}

export default NaviBar