import { skillsData } from '../resumeData'

const Skills = ({ skills }) => {

  const renderSkills = (index) => {
    return skillsData[index].map(skill => {
      return <span key={skill}>{skill}</span>
    })
  }

  return (
    <section>
      {renderSkills(skills)}
    </section>
  )
}

export default Skills