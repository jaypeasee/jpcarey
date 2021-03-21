import React from 'react'
import './Resume.scss'
import Project from '../Project/Project'
import Experience from '../Experience/Experience'
import Skill from '../Skill/Skill'
import Education from '../Education/Education'
import resume from '../JPC_Dev_Resume.pdf'
import { experienceData, educationData, projectData, skillsData } from '../resumeData'

const Resume = () => {

  const renderExperiences = () => {
    return experienceData.map(experience => {
      console.log(experience)
      return <Experience experience={experience}/>
    })
  }

  const renderProjects = () => {
    return projectData.map(project => {
      return <Project project={project}/>
    })
  }

  const renderSkills = (index) => {
    return skillsData[index].map(skill => {
      return <Skill skill={skill}/>
    })
  }

  const renderEducation = () => {
    return educationData.map(education => {
      return <Education education={education}/>
    })
  }

  return (
    <section className="resume-section">
      <section className="resume-page">
        <h2 className="experience-title">EXPERIENCE</h2>
        {renderExperiences()}
        <h2 className="projects-title">FEATURED PROJECTS</h2>
        {renderProjects()}
        <h2 className="languages-title">PROGRAMMING LANGUAGES</h2>
        <section className="skills-section">
          {renderSkills('programmingLanguages')}
        </section>
        <h2 className="skills-title">FRAMEWORKS AND LIBRARIES</h2>
        <section className="skills-section">
          {renderSkills('frameworksLibraries')}
        </section>
        <h2 className="skills-title">OTHER SKILLS</h2>
        <section className="skills-section">
          {renderSkills('otherSkills')}
        </section>
        <h2 className="education-title">EDUCATION</h2>
        {renderEducation()}
      </section>
    </section>
  )
}

export default Resume