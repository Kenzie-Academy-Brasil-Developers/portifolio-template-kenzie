import { ProjectsCard } from "./ProjectsCards"
import { projects } from "../../data/projects"
import './style.css'

export const ProjectsSection = () => {
  return(
    <section className="sectionProjects">
      <h2 className="title2">Projetos</h2>
      <ul className="sectionList">
      {projects.map(project => {
          return <ProjectsCard title={project.name} text={project.description}/>
        })}
      </ul>
    </section>
  )
}