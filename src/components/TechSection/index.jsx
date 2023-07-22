import { TechCards } from "./TechCards"
import './style.css'
import {technologies} from '../../data/technologies'

export const TechSection = () => {
  return(
    <section className="sectionTech">
      <h2 className="title2">Tecnologias</h2>
      <ul className="sectionList">
        {technologies.map(tech => {
          console.log(tech.name)
          return <TechCards title={tech.name} img={tech.img}/>
        })}
      </ul>
    </section>
  )
}