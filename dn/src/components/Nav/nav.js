import './nav.css';
import HHB from './Hotelia horizontal blanco.svg'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <div class="logos">
        <img src={HHB}/>
            <i class="fa-solid fa-bars"></i>
        </div>
        
        <div class="menu">
            <a href="index.html" class="item">Inicio</a>
            <a href="#ubicacion" class="item">Ubícanos</a>
            <a href="#opinion" class="item">Opiniones</a>
            <Link to="/login">
            <button class="navbar-button">
                <i class="fa-solid fa-user"></i> Iniciar Sesión
            </button>
            </Link>
        </div>
</nav>
  );
}

export default Nav;
