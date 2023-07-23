import './style.css'
import {username} from '../../data/user'


export const BannerSection = () => {
  return(
    <section className='container'>
      <div className='box-primary'>
        <h3 className='text3'>{username}</h3>
        <h2 className="title1">Bem vindo ao meu portfólio</h2>
        <p className="text1 textBanner">Uma frase interessante sobre mim</p>
        <button className="title4">Saiba mais</button>
      </div>
      <div>
      <img src='../../../src/assets/banner-img.png' alt="" />
      </div>
    </section>
  )
}