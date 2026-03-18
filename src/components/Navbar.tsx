import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Anchor } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <Anchor size={24} className="text-accent" />
          PANHANDLE PRO <span>TRAILERS</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>The Guarantee</Link>
          <Link to="/our-edge" className={`nav-link ${isActive('/our-edge') ? 'active' : ''}`}>Our Edge</Link>
          <Link to="/assets" className={`nav-link ${isActive('/assets') ? 'active' : ''}`}>Dealer Assets</Link>
          <Link to="/partner" className="btn-primary">Become a Partner</Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>The Guarantee</Link>
        <Link to="/our-edge" className={`nav-link ${isActive('/our-edge') ? 'active' : ''}`} onClick={closeMenu}>Our Edge</Link>
        <Link to="/assets" className={`nav-link ${isActive('/assets') ? 'active' : ''}`} onClick={closeMenu}>Dealer Assets</Link>
        <Link to="/partner" className="btn-primary" onClick={closeMenu}>Become a Partner</Link>
      </div>
    </nav>
  );
}
