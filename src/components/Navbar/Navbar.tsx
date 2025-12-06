import { useState, useEffect, type FC } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Logo } from '../Logo/Logo';
import './Navbar.css';

export const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#volunteer', label: 'Volunteer' },
    { href: '#projects', label: 'Projects' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#" className="navbar__logo" aria-label="Home">
          <Logo size={40} />
          <span className="navbar__name">Mustafa Muhammad</span>
        </a>

        <div className={`navbar__menu ${mobileMenuOpen ? 'navbar__menu--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar__actions">
          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          <button
            className="navbar__mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="navbar__mobile-toggle-line"></span>
            <span className="navbar__mobile-toggle-line"></span>
            <span className="navbar__mobile-toggle-line"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};