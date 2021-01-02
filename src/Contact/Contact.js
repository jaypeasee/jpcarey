import React from 'react'
import './Contact.scss'
import instagram from './images/instagram.png'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import gmail from './images/gmail.png'
import UIfx from 'uifx'
import btnClick from '../Sounds/btnClick.mp3'
import btnTick from '../Sounds/btnTick.mp3'
import thumbTack from '../images/thumbTack.png'


const Contact = () => {
    const click = new UIfx(btnClick, {
        volume: .1
    })
    const tick = new UIfx(btnTick, {
        volume: .1
    })

    return (
        <section className="contact-section">
                <section className="contact-card">
                    <h2>Reach Out!</h2>
                    <a
                        href="mailto:jpcarey4@gmail.com"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="icon-anchor-combo"
                        onClick={() => click.play()}
                    >
                        <img 
                            src={gmail}
                            alt="Gmail logo"
                            role="button"
                            className="contact-logo"
                            onMouseOver={() => tick.play()}
                        />
                        <p className="contact-link-txt">jpcarey4@gmail.com</p>
                    </a>
                    <a 
                        href="https://github.com/jaypeasee"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="icon-anchor-combo"
                        onClick={() => click.play()}
                    >
                        <img 
                            src={github}
                            alt="Github logo"
                            role="button"
                            className="contact-logo"
                            onMouseOver={() => tick.play()}
                        />
                        <p className="contact-link-txt">Github</p>
                    </a>  
                    <a
                        href="https://www.linkedin.com/in/jpcareyiv/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="icon-anchor-combo"
                        onClick={() => click.play()}
                    >
                        <img 
                            src={linkedin}
                            alt="LinkedIn logo"
                            role="button"
                            className="contact-logo"
                            onMouseOver={() => tick.play()}
                        />
                        <p className="contact-link-txt">LinkedIn</p>
                    </a>                 
                    <a 
                        href="https://www.instagram.com/jaypeasee4/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="icon-anchor-combo"
                        onClick={() => click.play()}
                    >
                        <img 
                            src={instagram}
                            alt="Instagram Logo"
                            role="button"
                            className="contact-logo"
                            onMouseOver={() => tick.play()}
                        />
                        <p className="contact-link-txt">Instagram</p>
                    </a>
            </section> 
        </section>
    )
}

export default Contact