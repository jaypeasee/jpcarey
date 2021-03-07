import React from 'react'
import './Contact.scss'
import { tick, click } from '../sounds/sounds'
import { contactTypes } from './contactData' 

const Contact = () => {

  const renderContactButtons = () => {
    return (
      contactTypes.map(type => {
        return (
          <a
            href={type.link}
            className="icon-anchor-combo"
            onClick={() => click.play()}
            onMouseOver={() => tick.play()}
          >
            <img 
              src={type.image.src}
              alt={type.image.alt}
              role="button"
              className="contact-logo"
            />
            <p className="contact-link-txt">{type.text}</p>
          </a>
        )
      })
    )
  }

  return (
    <section className="contact-section">
      <section className="contact-card">
        <h2>Reach Out!</h2>
        <div className="contact-options">
          {renderContactButtons()}
        </div>
      </section> 
    </section>
  )
}

export default Contact