import { skillsData } from '../resumeData'

const Skills = ({ skills, title }) => {

  const renderSkills = (index) => {
    return skillsData[index].map(skill => {
      return <span key={skill}>{skill}</span>
    })
  }

  return (
    <section>
      <h2 className="skills-title">{title}</h2>
      {renderSkills(skills)}
    </section>
  )
}

export default Skills