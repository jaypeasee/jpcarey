import React from 'react'
import './Contact.scss'
import ContactBtn from '../ContactBtn/ContactBtn.jsx'
import { contactTypes } from '../contactData' 

const Contact = () => {

  const ContactBtns = () => {
    return contactTypes.map(type => {
      return <ContactBtn type={type}/>
    })
  }

  return (
    <section className="contact-section">
      <section className="contact-card">
        <h2>Reach Out!</h2>
        <div className="contact-options">
          <ContactBtns/>
        </div>
      </section> 
    </section>
  )
}

export default Contact