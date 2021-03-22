import './ContactBtn.scss'
import { tick, click } from '../../sounds/sounds'

const ContactBtn = ({type}) => {
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
}

export default ContactBtn