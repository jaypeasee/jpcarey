import instagram from './contactIcons/instagram.png'
import linkedin from './contactIcons/linkedin.png'
import github from './contactIcons/github.png'
import gmail from './contactIcons/gmail.png'

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
    text: "jaypeasee4",
    image: {
      alt: "Instagram Logo",
      src: instagram
    }
  }
]

export { contactTypes }