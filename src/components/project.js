'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { FaMobileAlt } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';

const categories = [
  { id: 'web', label: 'Web Development', icon: <MdWeb size={15} /> },
  { id: 'aws', label: 'AWS & Cloud', icon: <FaAws size={13} /> },
  { id: 'app', label: 'App Development', icon: <FaMobileAlt size={13} /> },
];

const projects = [
  {
    category: 'web',
    title: 'Crypto Pulse',
    subtitle: 'Cryptocurrency Dashboard',
    date: 'August 2025',
    description:
      'Responsive cryptocurrency dashboard using Next.js and CoinGecko API with live market data, interactive charts, search, liquidity analysis, and a localStorage-based watchlist.',
    tags: ['Next.js', 'CoinGecko API', 'React', 'Tailwind CSS'],
    github: 'https://github.com/Yashk-15',
    previewBg: 'linear-gradient(135deg, #0f2a45 0%, #1a1a3e 100%)',
    preview: '₿ 📈',
  },
  {
    category: 'web',
    title: 'Cosmic Weather Dashboard',
    subtitle: 'Space-Themed Weather App',
    date: 'June 2025',
    description:
      'Space-themed weather dashboard with real-time OpenWeather API data, dynamic galaxy backgrounds, glassmorphism card UI, and Framer Motion animations.',
    tags: ['React.js', 'OpenWeather API', 'Framer Motion', 'CSS'],
    github: 'https://github.com/Yashk-15',
    previewBg: 'linear-gradient(135deg, #0a1628 0%, #1a0a2e 100%)',
    preview: '🌌 🌦',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.1, ease: 'easeOut' } }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('web');

  const filtered = projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" style={{ padding: '100px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container-main">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ marginBottom: 36 }}
        >
          <div className="section-label">Laboratório</div>
          <h2 style={{ color: '#e2e8f0', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Projects
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.87rem', marginTop: 8, maxWidth: 480, lineHeight: 1.6 }}>
            Categorized by domain — browse my work across web development, cloud, and app development.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          viewport={{ once: true }}
          style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 40 }}
        >
          {categories.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 7,
                  padding: '8px 18px',
                  borderRadius: 6,
                  border: isActive ? '1.5px solid var(--teal)' : '1.5px solid rgba(255,255,255,0.08)',
                  background: isActive ? 'rgba(0,217,181,0.1)' : 'var(--bg-card)',
                  color: isActive ? 'var(--teal)' : '#718096',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = 'rgba(0,217,181,0.3)'; e.currentTarget.style.color = '#a0aec0'; } }}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#718096'; } }}
              >
                {cat.icon}
                {cat.label}
                <span style={{
                  background: isActive ? 'rgba(0,217,181,0.2)' : 'rgba(255,255,255,0.06)',
                  color: isActive ? 'var(--teal)' : '#4a6080',
                  fontSize: '0.65rem', fontWeight: 700,
                  padding: '1px 7px', borderRadius: 999,
                  marginLeft: 2,
                }}>
                  {projects.filter(p => p.category === cat.id).length}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Project cards / Empty state */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}
            >
              {filtered.map((proj, i) => (
                <motion.div
                  key={proj.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 10,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'border-color 0.25s ease, transform 0.25s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,217,181,0.25)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {/* Preview */}
                  <div style={{
                    height: 150, background: proj.previewBg, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: '3rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden',
                  }}>
                    <span style={{ opacity: 0.7 }}>{proj.preview}</span>
                    <div style={{
                      position: 'absolute', inset: 0,
                      backgroundImage: 'linear-gradient(rgba(0,217,181,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,217,181,0.03) 1px,transparent 1px)',
                      backgroundSize: '30px 30px',
                    }} />
                  </div>

                  {/* Body */}
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                      <div>
                        <h3 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '1rem', marginBottom: 2 }}>{proj.title}</h3>
                        <p style={{ color: 'var(--teal)', fontSize: '0.72rem', fontWeight: 600 }}>{proj.subtitle}</p>
                      </div>
                      <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginLeft: 8, flexShrink: 0 }}>
                        <span style={{ color: 'var(--muted)', fontSize: '0.7rem' }}>{proj.date}</span>
                        <a href={proj.github} target="_blank" rel="noopener noreferrer"
                          style={{ color: '#4a6080', transition: 'color 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.color = '#e2e8f0'}
                          onMouseLeave={e => e.currentTarget.style.color = '#4a6080'}
                        >
                          <FaGithub size={15} />
                        </a>
                      </div>
                    </div>

                    <p style={{ color: 'var(--muted)', fontSize: '0.82rem', lineHeight: 1.7, marginBottom: 14, flex: 1 }}>
                      {proj.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                      {proj.tags.map(tag => (
                        <span key={tag} style={{
                          background: 'rgba(0,217,181,0.08)', border: '1px solid rgba(0,217,181,0.2)',
                          color: 'var(--teal)', fontSize: '0.68rem', fontWeight: 600,
                          padding: '3px 10px', borderRadius: 4,
                        }}>{tag}</span>
                      ))}
                    </div>

                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn-outline"
                      style={{ fontSize: '0.7rem', padding: '8px 18px', display: 'inline-flex', alignItems: 'center', gap: 8, width: 'fit-content' }}
                    >
                      <FaGithub size={13} /> View Code
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Empty state */
            <motion.div
              key={`empty-${activeCategory}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'var(--bg-card)',
                border: '1px dashed rgba(255,255,255,0.1)',
                borderRadius: 12,
                padding: '60px 40px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: 16, opacity: 0.4 }}>
                {activeCategory === 'aws' ? '☁️' : '📱'}
              </div>
              <h3 style={{ color: '#4a6080', fontWeight: 600, fontSize: '1rem', marginBottom: 8 }}>
                {activeCategory === 'aws' ? 'AWS & Cloud Projects' : 'App Development Projects'}
              </h3>
              <p style={{ color: '#334155', fontSize: '0.82rem', lineHeight: 1.6, maxWidth: 340, margin: '0 auto' }}>
                Projects in this category are currently in progress or coming soon. Stay tuned!
              </p>
              <div style={{
                display: 'inline-block', marginTop: 20,
                background: 'rgba(0,217,181,0.06)', border: '1px solid rgba(0,217,181,0.15)',
                color: 'var(--teal)', fontSize: '0.7rem', fontWeight: 700,
                padding: '5px 14px', borderRadius: 999, letterSpacing: '0.08em',
              }}>
                COMING SOON
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
