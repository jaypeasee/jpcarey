import React from 'react'
import './Resume.scss'
import Project from '../Project/Project'
import Experience from '../Experience/Experience'
import Skill from '../Skill/Skill'
import Education from '../Education/Education'
import resume from '../JPC_Dev_Resume.pdf'
import { experienceData, educationData, projectData, skillsData } from '../resumeData'
import { click, tick } from '../../sounds/sounds'

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

  const renderSkills = (index) => {
    return skillsData[index].map(skill => {
      return <Skill skill={skill} key={skill}/>
    })
  }

  const renderEducation = () => {
    return educationData.map(education => {
      return <Education education={education} key={education.school}/>
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
        <h2 className="languages-title">Programming Languages</h2>
        <section className="skills-section">
          {renderSkills('programmingLanguages')}
        </section>
        <h2 className="skills-title">Frameworks and Libraries</h2>
        <section className="skills-section">
          {renderSkills('frameworksLibraries')}
        </section>
        <h2 className="skills-title">Other Skills</h2>
        <section className="skills-section">
          {renderSkills('otherSkills')}
        </section>
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