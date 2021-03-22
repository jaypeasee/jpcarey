import './Resume.scss'
import Project from '../Project/Project'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import Education from '../Education/Education'
import resume from '../JPC_Dev_Resume.pdf'
import { experienceData, educationData, projectData, skillsData } from '../resumeData'
import { click, tick } from '../../sounds/sounds'
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
        <div className="pdf-btn-container-top">
          <a 
            href={resume} 
            className="pdf-download" 
            target="_blank"
            onClick={() => click.play()}
            onMouseOver={() => tick.play()}
          >See PDF version</a>
        </div>
        <h2 className="experience-title">EXPERIENCE</h2>
        {renderExperiences()}
        <h2 className="projects-title">FEATURED PROJECTS</h2>
        {renderProjects()}
        {renderSkillsSections()}
        {/* <Skills skills="programmingLanguages" title="Programming Languages"/>
        <Skills skills="frameworksLibraries" title="Frameworks and Libraries"/>
        <Skills skills="otherSkills" title="Other Skills"/> */}
        <h2 className="education-title">EDUCATION</h2>
        {renderEducation()}
        <div className="pdf-btn-container-bottom">
          <a 
            href={resume} 
            className="pdf-download" 
            target="_blank"
            onClick={() => click.play()}
            onMouseOver={() => tick.play()}
          >See PDF version</a>
        </div>
      </section>
    </section>
  )
}

export default Resume