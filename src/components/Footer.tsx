import { Link } from 'react-router-dom';
import { Anchor, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="nav-logo mb-4">
              <Anchor size={24} className="text-accent" />
              PANHANDLE PRO
            </div>
            <p className="text-secondary mb-4">
              The "Anti-Flaky" Guarantee. We build uncompromising aluminum boat trailers for protecting wholesale margins and guaranteed lead times.
            </p>
            <p className="text-accent font-heading font-bold" style={{textTransform: 'uppercase', letterSpacing: '1px'}}>
              Dealer-Only Manufacturing
            </p>
          </div>
          
          <div>
            <h3 className="footer-title">Service Area</h3>
            <ul className="footer-links">
              <li><MapPin size={16} style={{display: 'inline', marginRight: '8px'}} /> Florida Panhandle</li>
              <li><MapPin size={16} style={{display: 'inline', marginRight: '8px'}} /> Alabama Coast</li>
              <li><MapPin size={16} style={{display: 'inline', marginRight: '8px'}} /> Georgia</li>
              <li><MapPin size={16} style={{display: 'inline', marginRight: '8px'}} /> Louisiana</li>
              <li className="mt-4 text-secondary text-sm">
                *We lock our geography to keep logistics fast and margins high.
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer-title">Contact Wholesale</h3>
            <ul className="footer-links">
              <li>
                <a href="tel:+18005550199" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <Phone size={16} /> (800) 555-0199
                </a>
              </li>
              <li>
                <a href="mailto:dealers@panhandlepro.com" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <Mail size={16} /> dealers@panhandlepro.com
                </a>
              </li>
              <li className="mt-4">
                <Link to="/partner" className="btn-secondary" style={{padding: '0.4rem 1rem', fontSize: '0.8rem'}}>Dealer Portal</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Panhandle Pro Trailers. All rights reserved. B2B Wholesale Only.</p>
        </div>
      </div>
    </footer>
  );
}
