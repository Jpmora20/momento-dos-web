import {Link} from "react-router-dom";
import "./Home.css";
const Home = () => {
    return (
      <div id="root">
        <div className="container">
        <header className="side-bar">
            <img src="" alt="Logo" />
            <nav>
                <a href="/home">HOME</a>
                <a href="/profile">USUARIO</a>
            </nav>
            <button>
                <Link to="/">CERRAR SESION</Link>
            </button>
        </header>
        <main>
            <h1>Panel de control</h1>
        </main>
      </div>
      </div>
      
    )
  }
  
  export default Home;