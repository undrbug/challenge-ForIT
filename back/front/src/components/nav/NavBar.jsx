import { Link } from 'react-router-dom'
import './navStyle.css'


const NavBar = () => {
  return (
    <div className="navbar">
        <div className="navbar__links">
            <Link to="/">Home</Link>
            <Link to="#about">About</Link>
            <Link to="#services">Services</Link>
            <a href="#contact">Contact</a>
        </div>     
    </div>
  )
}

export default NavBar