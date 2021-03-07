import './NavLogo.scss'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'
import { tick } from '../../sounds/sounds'

const NavLogo = (props) => {
  return (
    <NavLink to="/">
      <img 
        src={logo}
        alt="Jp's Logo and Initials"
        className={props.className}
        onMouseOver={() => tick.play()}
        onClick={() => props.handleNavClick("home")}
      />
    </NavLink>
  )
}

export default NavLogo