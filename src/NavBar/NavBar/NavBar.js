import React, { useState, useEffect } from 'react'
import './NavBar.scss'
import { NavLink } from 'react-router-dom'
import { selfDescriptions, navigationOptions } from '../navBarData'
import NavLogo from '../Logo/NavLogo'

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
    props.toggleNav(view)
  }

  const NavBtns = () => {
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
          <NavLogo className="nav-logo" handleNavClick={handleNavClick}/>
          <div className="nav-btn-container">
            <NavLogo className="mobile-nav-logo" handleNavClick={handleNavClick}/>
            <NavBtns/>
          </div>
        </div>
        <h2 className="section-title">{props.title.toUpperCase()}</h2>
      </nav>
    </div>
  )
}

export default NavBar