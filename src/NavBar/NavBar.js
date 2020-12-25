import React, {Component} from 'react'
import logo from '../images/logo.png'
import './NavBar.scss'
import UIfx from 'uifx'
import btnClick from '../Sounds/btnClick.mp3'
import btnTick from '../Sounds/btnTick.mp3'

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
                "dreadful swimmer",
                "Bills fan",
                "news junkie",
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
                    onMouseOver={() => this.tick.play()}
                    onClick={() => this.click.play()}
                />
                <div className="nav-btn-container">
                    <button 
                        className="nav-btn"
                        onMouseOver={() => this.tick.play()}
                        onClick={() => this.click.play()}
                    >Contact</button>
                    <button 
                        className="nav-btn"
                        onMouseOver={() => this.tick.play()}
                        onClick={() => this.click.play()}
                    >Resume</button>
                    <button 
                        className="nav-btn"
                        onMouseOver={() => this.tick.play()}
                        onClick={() => this.click.play()}
                    >Photos</button>
                    <button 
                        className="nav-btn"
                        onMouseOver={() => this.tick.play()}
                        onClick={() => this.click.play()}
                    >Music</button>
                </div>
            </nav>
        )
    }
}

export default NavBar