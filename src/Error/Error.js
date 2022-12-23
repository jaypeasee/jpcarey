import './Error.scss'
import wendyCone from './wendyCone.JPG'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error-section">
      <section className="error-card">
        <h1>Oops! This page doesn't exist.</h1>
        <img 
          alt="Wendy in the cone of shame" 
          src={wendyCone} 
          className="error-img"
        />
        <Link 
          className="back-to-home-btn"
          to="/"
        >Back To Home</Link>
      </section>
    </section>
  )
}

export default Error