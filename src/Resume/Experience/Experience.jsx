import './Experience.scss'

const Experience = ({ experience }) => {
  const { company, position, location, tenure, description } = experience
  return (
    <section className="experience">
      <section>
        <h3><span className="company-name">{company},</span> {position}</h3>
        <div className="experience-details">
          <h4>{location}</h4>
          <h4>{tenure}</h4>
        </div>
        <p>{description}</p>
      </section>
    </section>
  )
}

export default Experience