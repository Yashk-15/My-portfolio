'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from './ThemeProvider';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="container-main">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0' }}>
          {/* Logo */}
          <a href="#home" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none' }}>
            <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem' }}>{'</'}</span>
            <span style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.02em' }}>Yash Kaushik</span>
            <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '0.9rem' }}>{'>'}</span>
          </a>

          {/* Desktop nav */}
          <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="hidden-mobile">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link">
                {item.name}
              </a>
            ))}

            {/* Theme toggle — desktop */}
            <ThemeToggleBtn theme={theme} toggle={toggle} />
          </div>

          {/* Mobile: toggle + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="show-mobile">
            <ThemeToggleBtn theme={theme} toggle={toggle} />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', padding: 4 }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{
              background: 'var(--mobile-menu-bg)',
              borderTop: '1px solid var(--border)',
              overflow: 'hidden',
            }}
          >
            <div className="container-main" style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {navItems.map(item => (
                <a key={item.name} href={item.href}
                  onClick={() => setTimeout(() => setMenuOpen(false), 100)}
                  className="nav-mobile-link"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-logo { transition: opacity 0.2s ease; }
        .nav-logo:hover { opacity: 0.8; }
        .nav-link {
          color: var(--muted);
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .nav-link:hover { color: var(--text); }
        .nav-mobile-link {
          color: var(--muted); text-decoration: none;
          font-size: 1rem; font-weight: 500;
          padding: 14px 12px;
          border-radius: 8px;
          display: block;
          border-bottom: 1px solid var(--border);
          transition: color 0.2s ease, background 0.2s ease;
          -webkit-tap-highlight-color: transparent;
          cursor: pointer;
        }
        .nav-mobile-link:hover,
        .nav-mobile-link:active { color: var(--accent); background: var(--accent-dim); }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

function ThemeToggleBtn({ theme, toggle }) {
  return (
    <motion.button
      onClick={toggle}
      aria-label="Toggle theme"
      whileTap={{ scale: 0.9 }}
      style={{
        width: 36,
        height: 36,
        borderRadius: 8,
        border: '1.5px solid var(--border-hover)',
        background: 'var(--bg-card)',
        color: 'var(--muted)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'border-color 0.2s ease, background 0.2s ease, color 0.2s ease',
      }}
      title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          {theme === 'light' ? <FiMoon size={16} /> : <FiSun size={16} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
