import { Link } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icons'
import { tracks } from '../data/tracks'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p>Practical courses and done-for-you services in e-commerce, marketing, web development and AI.</p>
        </div>
        <div>
          <h4>Courses</h4>
          <ul>
            {tracks.map((t) => (
              <li key={t.slug}><Link to={`/courses/${t.slug}`}>{t.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          {/* Replace with real contact details */}
          <ul className="footer__contact">
            <li><Icon name="mail" size={18} /> hello@digimatrix.example</li>
            <li><Icon name="phone" size={18} /> +00 000 0000000</li>
            <li><Icon name="pin" size={18} /> Your city, Country</li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Digi Matrix. All rights reserved.</span>
      </div>
    </footer>
  )
}
