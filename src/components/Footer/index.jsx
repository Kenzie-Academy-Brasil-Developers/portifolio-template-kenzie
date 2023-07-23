import './style.css'
import {user} from '../../data/user'

export const Footer = () => {
  return(
    <footer>
      <div className='footerBoxOne'>
        <h3 className="title2">Contato</h3>
        <ul className='containerSocialMedia'>
          <img className='pointer' src='../../../src/assets/whatsapp-icon.png' alt="" />
          <img className='pointer' src='../../../src/assets/linkedin-icon.png' alt="" />
          <img className='pointer' src='../../../src/assets/github-icon.png' alt="" />
        </ul>
      </div>
      <div className='footerBoxTwo'>
        <p className="text1">Todos os direitos reservados - {user}</p>
      </div>
    </footer>
  )
}