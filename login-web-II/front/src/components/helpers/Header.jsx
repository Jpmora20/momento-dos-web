import { Link } from "react-router-dom";
import "../helpers/Header.css"
const Header = () => {
    return(
 
            <header className="side-bar">
            <img src="" alt="Logo" />
            <nav>
                <a href="/home">Home</a>
                <a href="/profile">Usuario</a>
            </nav>
            <button>
                <Link to="/">Cerrar Sesion</Link>
            </button>
        </header>
    
        
    )
}

export default Header;