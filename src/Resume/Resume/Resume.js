import './Resume.scss'
import Project from '../Project/Project'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import Education from '../Education/Education'
import PdfBtn from '../PdfBtn/PdfBtn'
import { experienceData, educationData, projectData, skillsData } from '../resumeData'
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