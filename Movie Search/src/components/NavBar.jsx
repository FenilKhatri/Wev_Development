import { Link } from 'react-router-dom'
import "../css/Navbar.css"

function NavBar() {

      return <nav className="navbar">
            <div className="navbar-brnad">
                  <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-links">
                  <Link to='/' className='nav-link'>Home</Link>
                  <Link to='/Favourites' className='nav-link'>Favourites</Link>
            </div>
      </nav>

}

export default NavBar;