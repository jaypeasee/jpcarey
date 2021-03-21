import './Project.scss'

const Project = ({ project }) => {
  const { name, repository, link, description } = project
  return (
    <section className="projects">
        <h3>{name}</h3>
      <div className="project-details">
        <a href={repository} target="_blank">Repository</a>
        <a href={link} target="_blank">Deployed Page</a>
      </div>
      <p>{description}</p>
    </section>
  )
}

export default Project

