'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

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

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(13,27,42,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="container-main">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0' }}>
          {/* Logo — CSS hover only */}
          <a href="#home" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none' }}>
            <span style={{ color: 'var(--teal)', fontWeight: 700, fontSize: '0.9rem' }}>{'</'}</span>
            <span style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.02em' }}>Yash Kaushik</span>
            <span style={{ color: 'var(--teal)', fontWeight: 700, fontSize: '0.9rem' }}>{'>'}</span>
          </a>

          {/* Desktop nav — CSS hover via class */}
          <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="hidden-mobile">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'none' }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
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
              background: 'rgba(13,27,42,0.98)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
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
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .nav-link:hover { color: var(--teal); }
        .nav-mobile-link {
          color: #94a3b8; text-decoration: none;
          font-size: 1rem; font-weight: 500;
          padding: 14px 12px;
          border-radius: 8px;
          display: block;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: color 0.2s ease, background 0.2s ease;
          -webkit-tap-highlight-color: transparent;
          cursor: pointer;
        }
        .nav-mobile-link:hover,
        .nav-mobile-link:active { color: var(--teal); background: rgba(0,217,181,0.06); }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
