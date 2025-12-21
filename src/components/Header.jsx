import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">GreenLight</span>
        </Link>
        <nav className="nav">
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            회사 소개
          </Link>
          <Link 
            to="/philosophy" 
            className={`nav-link ${isActive('/philosophy') ? 'active' : ''}`}
          >
            회사 철학
          </Link>
          <Link 
            to="/education" 
            className={`nav-link ${isActive('/education') ? 'active' : ''}`}
          >
            교육 소개
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

