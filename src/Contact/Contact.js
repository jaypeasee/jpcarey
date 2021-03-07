import React from 'react'
import './Contact.scss'
import UIfx from 'uifx'
import btnClick from '../sounds/btnClick.mp3'
import btnTick from '../sounds/btnTick.mp3'
import { contactTypes } from './contactData' 

const Contact = () => {
  const click = new UIfx(btnClick, {
      volume: .1
  })
  const tick = new UIfx(btnTick, {
      volume: .1
  })

  const renderContactButtons = () => {
    return (
      contactTypes.map(type => {
        return (
          <a
            href={type.link}
            className="icon-anchor-combo"
            onClick={() => click.play()}
          >
            <img 
              src={type.image.src}
              alt={type.image.alt}
              role="button"
              className="contact-logo"
              onMouseOver={() => tick.play()}
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