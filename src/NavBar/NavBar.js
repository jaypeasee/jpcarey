import React, {Component} from 'react'
import logo from './images/logo.png'
import './NavBar.scss'
import UIfx from 'uifx'
import btnClick from '../Sounds/btnClick.mp3'
import btnTick from '../Sounds/btnTick.mp3'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descriptions: [
                "software developer",
                "digital strategist",
                "dog dad",
                "public lands lover",
                "skier",
                "whitewater boater",
                "dreadful swimmer",
                "Bills fan",
                "news junkie",
                "mountain biker",
                "Catan sheep farmer",
                "Harry Potter nerd",
                "cooking enthusiast",
                "canoe tripper",
            ],
            currentDescription: "he/him/his"
        }
        this.tick = new UIfx(btnTick, {
            volume: .1
        })
        this.click = new UIfx(btnClick, {
            volume: .1
        })
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
        this.click.play()
        this.props.toggleNav(view)
    }
    
    render() {
        const { home, contact, resume, adventures, music } = this.props
        return (
           <div className="nav-background">
                <nav className="nav-bar">
                    <div className="nav-content">
                    <div className="nav-intro">
                        <h1>Jp Carey</h1>
                        <h2 
                            className="current-description"
                        >{this.state.currentDescription}</h2>
                        <h3>currently living in Jackson, Wyoming</h3>
                        <h2
                        className="mobile-section-title"
                    >{this.props.title.toUpperCase()}</h2>
                    </div>
                        <NavLink to="/">
                            <img 
                                src={logo}
                                alt="Jp's Logo and Initials"
                                className="nav-logo"
                                onMouseOver={() => this.tick.play()}
                                onClick={() => this.handleNavClick("home")}
                            />
                        </NavLink>
                    <div className="nav-btn-container">
                        <NavLink to="/">
                            <img 
                                src={logo}
                                alt="Jp's Logo and Initials"
                                className="mobile-nav-logo"
                                onMouseOver={() => this.tick.play()}
                                onClick={() => this.handleNavClick("home")}
                            />
                        </NavLink>
                        {!home && <NavLink
                            to="/"
                            className="nav-btn-anchor"
                        >
                            <button 
                                className="nav-btn"
                                onMouseOver={() => this.tick.play()}
                                onClick={() => this.handleNavClick("home")}
                            >Home</button>
                        </NavLink>}
                        {!contact && <NavLink 
                            to="/contact"
                            className="nav-btn-anchor"
                        >
                            <button 
                                className="nav-btn"
                                onMouseOver={() => this.tick.play()}
                                onClick={() => this.handleNavClick("contact")}
                            >Contact</button>
                        </NavLink>}
                        {!resume && <NavLink 
                            to="/resume"
                            className="nav-btn-anchor"
                        >
                            <button 
                                className="nav-btn"
                                onMouseOver={() => this.tick.play()}
                                onClick={() => this.handleNavClick("resume")}
                            >Resume</button>
                        </NavLink>}
                        {!adventures && <NavLink 
                            to="/adventures"
                            className="nav-btn-anchor"
                        >
                            <button 
                                className="nav-btn"
                                onMouseOver={() => this.tick.play()}
                                onClick={() => this.handleNavClick("adventures")}
                            >Adventures</button>
                        </NavLink>}
                        {!music && <NavLink 
                            to="/music"
                            className="nav-btn-anchor"
                        >
                            <button 
                                className="nav-btn"
                                onMouseOver={() => this.tick.play()}
                                onClick={() => this.handleNavClick("music")}
                            >Music</button>
                        </NavLink>}
                    </div>
                    </div>
                    <h2
                        className="section-title"
                    >{this.props.title.toUpperCase()}</h2>
                </nav>
            </div>
        )
    }
}

export default NavBar