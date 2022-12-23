import './Resume.scss'
import Experience from '../Experience/Experience.jsx'
import Skills from '../Skills/Skills.jsx'
import Education from '../Education/Education.jsx'
import PdfBtn from '../PdfBtn/PdfBtn.jsx'
import { experienceData, educationData, skillsData } from '../resumeData'
import startCase from 'lodash.startcase'

const Resume = () => {

  const Experiences = () => {
    return experienceData.map(experience => {
      return <Experience experience={experience} key={experience.company}/>
    })
  }

  const EducationSection = () => {
    return educationData.map(education => {
      return <Education education={education} key={education.school}/>
    })
  }

  const SkillsSections = () => {
    return Object.keys(skillsData).map(section => {
      const title = startCase(section)
      return <Skills skills={section} title={title}/>
    })
  }

  return (
    <section className="resume-section">
      <section className="resume-page">
        <PdfBtn position="top"/>
        <h2 className="experience-title">EXPERIENCE</h2>
        <Experiences/>
        <SkillsSections/>
        <h2 className="education-title">EDUCATION</h2>
        <EducationSection/>
        <PdfBtn position="bottom"/>
      </section>
    </section>
  )
}

export default Resume