import './MyNavBar.css';
import MyThemeSwitcher from '../MyThemeSwitcher/MyThemeSwitcher';


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top"> 
    <div className="container-fluid cor"> 
      <div className="collapse navbar-collapse" id="navbarNav">
      <span className="titulo navbar-brand mb-0 h1">Curriculo Treina</span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a id ="cadastar" className="nav-link" aria-current="page" href="/">Cadastrar</a>
          </li>
          <li className="nav-item">
            <a id="visualizar" className="nav-link" href="/visualizar">Visualizar</a>
          </li>
        </ul>
        <MyThemeSwitcher/>
      </div>
    </div>
    </nav>
  );
}

export default NavBar;
