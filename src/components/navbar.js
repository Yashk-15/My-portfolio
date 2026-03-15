'use client';

import { motion, AnimatePresence } from 'framer-motion';
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
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(13,27,42,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container-main">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0' }}>
          {/* Logo */}
          <motion.a href="#home" whileHover={{ scale: 1.03 }}
            style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none' }}
          >
            <span style={{ color: 'var(--teal)', fontWeight: 700, fontSize: '0.9rem' }}>{'</'}</span>
            <span style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.02em' }}>Yash Kaushik</span>
            <span style={{ color: 'var(--teal)', fontWeight: 700, fontSize: '0.9rem' }}>{'>'}</span>
          </motion.a>

          {/* Desktop nav */}
          <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="hidden-mobile">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--teal)'}
                onMouseLeave={e => e.target.style.color = '#94a3b8'}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'none' }}
            className="show-mobile"
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
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: '#94a3b8', textDecoration: 'none',
                    fontSize: '1rem', fontWeight: 500,
                    padding: '12px 8px',
                    borderRadius: 8,
                    display: 'block',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                    transition: 'color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--teal)'; e.currentTarget.style.background = 'rgba(0,217,181,0.06)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'transparent'; }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}
