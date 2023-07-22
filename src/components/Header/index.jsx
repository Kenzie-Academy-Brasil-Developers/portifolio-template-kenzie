import './style.css'

export const Header = () => {
  return(
    <header>
      <h2 className='logo'>Portifólio</h2>
      <div className='nav'>
        <h3 className='title3'>Sobre</h3>
        <h3 className='title3'>Slack</h3>
        <h3 className='title3'>Projetos</h3>
      </div>
      <button className='title3'>Contato</button>
    </header>
  )
}