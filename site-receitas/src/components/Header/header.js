import './header.css';
import { Link } from 'react-router-dom';
import { BsList} from "react-icons/bs";


function Header(){
    return (
      <header>
        <div id="header" className='header-container'>
          <div className='header-titulo'>
            <h1><Link to="/" className='routes-titulo'>Sabor Culinário</Link></h1>
          </div>
          <div className='header-content-right'>
            <div className='header-routes'>
              <nav>
                <ul>
                  <li><Link to="/" className='routes'>Página Inicial |</Link></li>
                  <li><Link to="/receitas" className='routes'>Receitas</Link></li>
                </ul>
              </nav>
            </div>
            <div className='header-icons'>
              <BsList className='routes-icon'/>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;