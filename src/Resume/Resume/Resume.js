import './Resume.scss'
import Project from '../Project/Project'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import Education from '../Education/Education'
import PdfBtn from '../PdfBtn/PdfBtn'
import { experienceData, educationData, projectData, skillsData } from '../resumeData'
import startCase from 'lodash.startcase'

const Resume = () => {

  const renderExperiences = () => {
    return experienceData.map(experience => {
      return <Experience experience={experience} key={experience.company}/>
    })
  }

  const renderProjects = () => {
    return projectData.map(project => {
      return <Project project={project} key={project.name}/>
    })
  }

  const renderEducation = () => {
    return educationData.map(education => {
      return <Education education={education} key={education.school}/>
    })
  }

  const renderSkillsSections = () => {
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
        {renderExperiences()}
        <h2 className="projects-title">FEATURED PROJECTS</h2>
        {renderProjects()}
        {renderSkillsSections()}
        <h2 className="education-title">EDUCATION</h2>
        {renderEducation()}
        <PdfBtn position="bottom"/>
      </section>
    </section>
  )
}

export default Resume