import './style.css'

export const Header = () => {
  return(
    <header>
      <h2 className='logo'>Portifólio</h2>
      <div className='nav'>
        <h3 className='title4'>Sobre</h3>
        <h3 className='title4'>Slack</h3>
        <h3 className='title4'>Projetos</h3>
      </div>
      <button className='title4'>Contato</button>
    </header>
  )
}