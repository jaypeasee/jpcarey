import instagram from './images/instagram.png'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import gmail from './images/gmail.png'

const contactTypes = [
  {
    link: "mailto:jpcarey4@gmail.com",
    text: "jpcarey4@gmail.com",
    image: {
      alt: "Gmail Logo",
      src: gmail
    }
  },
  {
    link: "https://github.com/jaypeasee",
    text: "Github",
    image: {
      alt: "Github Logo",
      src: github
    }
  },
  {
    link: "https://www.linkedin.com/in/jpcareyiv/",
    text: "LinkedIn",
    image: {
      alt: "LinkedIn Logo",
      src: linkedin
    }
  },
  {
    link: "https://www.instagram.com/jaypeasee4/",
    text: "Instagram",
    image: {
      alt: "Instagram Logo",
      src: instagram
    }
  }
]

export { contactTypes }