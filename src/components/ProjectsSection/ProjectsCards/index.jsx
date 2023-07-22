import './style.css'

export const ProjectsCard = ({text, title}) => {
  return(
    <li className='cardBoxProject'>
      <div className='cardBoxDiv'>
        <h3 className="text2">{title}</h3>
        <p className="text1">{text}</p>
        <a className="title3" href="">Saiba Mais</a>
      </div>
      <div>
        <img src='../../../src/assets/git-icon.png' alt="" />
      </div>
    </li>
  )
}