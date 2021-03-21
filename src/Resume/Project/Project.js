import './Project.scss'

const Project = ({ project }) => {
  const { name, repository, link, description } = project
  return (
    <section className="projects">
        <h3>{name}</h3>
      <div className="project-details">
        <a href={repository}>Repository</a>
        <a href={link}>Deployed Page</a>
      </div>
      <p>{description}</p>
    </section>
  )
}

export default Project

