import React, {Component} from 'react'
import logo from './images/logo.png'
import './NavBar.scss'
import { NavLink } from 'react-router-dom'
import { click, tick } from '../sounds/sounds'
import { selfDescriptions, navigationOptions } from './navBarData'
class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      descriptions: selfDescriptions,
      currentDescription: "he/him/his"
    }
  }

  componentDidMount() {
    let i = 0
    setInterval(() => {
      this.setState({
        currentDescription: this.state.descriptions[i]
      })
      i++
      if (i === this.state.descriptions.length) {
        i = 0
      }
    }, 2000)
  }

handleNavClick = (view) => {
  click.play()
  this.props.toggleNav(view)
}

renderNavButtons = () => {
  const filteredOptions = navigationOptions.filter(option => {
    return !this.props[option.name.toLowerCase()]
  })
  return filteredOptions.map(option => {
    return (
      <NavLink 
        to={option.link} 
        className="nav-btn-anchor"
        onClick={() => this.handleNavClick(option.name.toLowerCase())}
        className="nav-btn"
        onMouseOver={() => tick.play()}
      >{option.name}</NavLink>
    )
  })
}

render() {
    return (
      <div className="nav-background">
        <nav className="nav-bar">
          <div className="nav-content">
            <div className="nav-intro">
              <h1>Jp Carey</h1>
              <h2 className="current-description">{this.state.currentDescription}</h2>
              <h3>currently living in Jackson, Wyoming</h3>
              <h2 className="mobile-section-title">{this.props.title.toUpperCase()}</h2>
            </div>
            <NavLink to="/">
              <img 
                src={logo}
                alt="Jp's Logo and Initials"
                className="nav-logo"
                onMouseOver={() => tick.play()}
                onClick={() => this.handleNavClick("home")}
              />
            </NavLink>
            <div className="nav-btn-container">
              <NavLink to="/">
                <img 
                  src={logo}
                  alt="Jp's Logo and Initials"
                  className="mobile-nav-logo"
                  onMouseOver={() => tick.play()}
                  onClick={() => this.handleNavClick("home")}
                />
              </NavLink>
              {this.renderNavButtons()}
            </div>
          </div>
          <h2 className="section-title">{this.props.title.toUpperCase()}</h2>
        </nav>
      </div>
    )
  }
}

export default NavBar