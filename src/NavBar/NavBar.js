import React, {Component} from 'react'
import logo from '../images/logo.png'
import './NavBar.scss'

class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            descriptions: [
                "software developer",
                "digital strategist",
                "dog dad",
                "public lands lover",
                "skier",
                "whitewater boater",
                "terrible swimmer",
                "mountain biker",
                "Catan sheep farmer",
                "Harry Potter nerd",
                "cooking enthusiast",
                "canoe tripper",
                "rollerblader",
                "software developer"
            ],
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
    
    render() {
        return (
            <nav className="nav-bar">
                <div className="nav-intro">
                    <h1>Jp Carey</h1>
                    <h2>{this.state.currentDescription}</h2>
                    <h3>currently living in Jackson, Wyoming</h3>
                </div>
                <img 
                    src={logo}
                    alt="Jp's Logo and Initials"
                    className="nav-logo"
                />
                <div className="nav-btn-container">
                    <button className="nav-btn">Contact</button>
                    <button className="nav-btn"
                    >Resume</button>
                    <button className="nav-btn"
                    >Photos</button>
                    <button className="nav-btn"
                    >Music</button>
                </div>
            </nav>
        )
    }
}

export default NavBar