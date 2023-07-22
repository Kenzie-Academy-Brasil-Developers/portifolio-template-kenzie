import './style.css'

export const TechCards = ({ img, title}) => {
  console.log(title)
  return(
    <li className='cardBox'>
      <img src={img} alt={title} />
      <h2 className='text2'>{title}</h2>
    </li>
  )
}