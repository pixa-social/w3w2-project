import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../assets/ghost-logo.png'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Ghost Network" className="logo-img" />
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/bridge" className="nav-link">Bridge</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/docs" className="nav-link">Docs</Link>
        </nav>
        <Link to="/login" className="button button-secondary">
          <span className="button-text">Login</span>
          <span className="button-icon">→</span>
        </Link>
      </div>
    </header>
  )
}
