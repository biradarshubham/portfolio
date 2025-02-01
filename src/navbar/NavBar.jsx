import NavLogo from "./NavLogo"
import NavMenu from "./NavMenu"
import NavRight from "./NavRight"
import '../App.css'

const NavBar = () => {
  return (
    <div className="nav">
    <NavLogo/>
    <NavMenu/>
    <NavRight/>
    </div>
  )
}

export default NavBar
