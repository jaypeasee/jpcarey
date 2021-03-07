import React, { useState, useEffect } from 'react'
import logo from './images/logo.png'
import './NavBar.scss'
import { NavLink } from 'react-router-dom'
import { click, tick } from '../sounds/sounds'
import { selfDescriptions, navigationOptions } from './navBarData'

const NavBar = (props) => {

  const [currentDescription, setCurrentDescription] = useState('he/him/his')

  useEffect(() => {
    let i = 0
    setInterval(() => {
      setCurrentDescription(selfDescriptions[i])
      i++
      if (i === selfDescriptions.length) {
        i = 0
      }
    }, 2000)
  }, [])

  const handleNavClick = (view) => {
    click.play()
    props.toggleNav(view)
  }

  const renderNavButtons = () => {
    const filteredOptions = navigationOptions.filter(option => {
      return !props[option.name.toLowerCase()]
    })
    return filteredOptions.map(option => {
      return (
        <NavLink 
          key={option.name}
          to={option.link} 
          className="nav-btn-anchor"
          onClick={() => handleNavClick(option.name.toLowerCase())}
          className="nav-btn"
          onMouseOver={() => tick.play()}
        >{option.name}</NavLink>
      )
    })
  }

  return (
    <div className="nav-background">
      <nav className="nav-bar">
        <div className="nav-content">
          <div className="nav-intro">
            <h1>Jp Carey</h1>
            <h2 className="current-description">{currentDescription}</h2>
            <h3>currently living in Jackson, Wyoming</h3>
            <h2 className="mobile-section-title">{props.title.toUpperCase()}</h2>
          </div>
          <NavLink to="/">
            <img 
              src={logo}
              alt="Jp's Logo and Initials"
              className="nav-logo"
              onMouseOver={() => tick.play()}
              onClick={() => handleNavClick("home")}
            />
          </NavLink>
          <div className="nav-btn-container">
            <NavLink to="/">
              <img 
                src={logo}
                alt="Jp's Logo and Initials"
                className="mobile-nav-logo"
                onMouseOver={() => tick.play()}
                onClick={() => handleNavClick("home")}
              />
            </NavLink>
            {renderNavButtons()}
          </div>
        </div>
        <h2 className="section-title">{props.title.toUpperCase()}</h2>
      </nav>
    </div>
  )
}

export default NavBar