import './Education.scss'

const Education = ({ education }) => {
  const { school, location, degree, tenure } = education
  return (
    <section>
      <h3>{school}</h3>
      <div className="education-details">
        <h4>{location}</h4>
        <h4>{tenure}</h4>
      </div>
      <p>{degree}</p>
    </section>
  )
}

export default Education