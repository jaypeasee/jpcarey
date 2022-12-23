import './ContactBtn.scss'

const ContactBtn = ({type}) => {
  return (
    <a
      href={type.link}
      className="icon-anchor-combo"
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
}

export default ContactBtn