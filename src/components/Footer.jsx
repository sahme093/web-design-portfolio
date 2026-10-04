import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} SALMA KORASHY WEB DESIGN</span>
      <span className="footer__links">
        <Link to="/services">SERVICES</Link> · <Link to="/about">ABOUT</Link>
      </span>
    </footer>
  );
}
