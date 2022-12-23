import './NavLogo.scss'
import logo from '../navBarImages/logo.png'
import { NavLink } from 'react-router-dom'

const NavLogo = (props) => {
  return (
    <NavLink to="/">
      <img 
        src={logo}
        alt="Jp's Logo and Initials"
        className={props.className}
        onClick={() => props.handleNavClick("home")}
      />
    </NavLink>
  )
}

export default NavLogo