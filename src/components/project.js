'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Crypto Pulse',
    subtitle: 'Cryptocurrency Dashboard',
    date: 'August 2025',
    description: 'Responsive cryptocurrency dashboard using Next.js and CoinGecko API with live market data, interactive charts, search, liquidity analysis, and a localStorage-based watchlist.',
    tags: ['Next.js', 'CoinGecko API', 'React', 'Tailwind CSS'],
    github: 'https://github.com/yashsk',
    previewBg: 'linear-gradient(135deg, #0f2a45 0%, #1a1a3e 100%)',
    preview: '₿ 📈',
  },
  {
    title: 'Cosmic Weather Dashboard',
    subtitle: 'Space-Themed Weather App',
    date: 'June 2025',
    description: 'Space-themed weather dashboard with real-time OpenWeather API data, dynamic galaxy backgrounds, glassmorphism cards, and Framer Motion animations.',
    tags: ['React.js', 'OpenWeather API', 'Framer Motion', 'CSS'],
    github: 'https://github.com/yashsk',
    previewBg: 'linear-gradient(135deg, #0a1628 0%, #1a0a2e 100%)',
    preview: '🌌 🌦',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ marginBottom: 48 }}
        >
          <div className="section-label">Laboratório</div>
          <h2 style={{ color: '#e2e8f0', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Projects
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}
        >
          {projects.map(proj => (
            <motion.div
              key={proj.title}
              variants={card}
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
              {/* Preview area */}
              <div style={{
                height: 160,
                background: proj.previewBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                borderBottom: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <span style={{ fontSize: '3rem', opacity: 0.7 }}>{proj.preview}</span>
                {/* Subtle grid overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'linear-gradient(rgba(0,217,181,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,217,181,0.03) 1px,transparent 1px)',
                  backgroundSize: '30px 30px',
                }} />
              </div>

              {/* Body */}
              <div style={{ padding: '20px 20px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <div>
                    <h3 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '1rem', marginBottom: 2 }}>{proj.title}</h3>
                    <p style={{ color: 'var(--teal)', fontSize: '0.72rem', fontWeight: 600 }}>{proj.subtitle}</p>
                  </div>
                  <span style={{ color: 'var(--muted)', fontSize: '0.7rem', whiteSpace: 'nowrap', marginLeft: 8 }}>{proj.date}</span>
                </div>

                <p style={{ color: 'var(--muted)', fontSize: '0.82rem', lineHeight: 1.7, marginBottom: 16, flex: 1 }}>
                  {proj.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {proj.tags.map(tag => (
                    <span key={tag} style={{
                      background: 'rgba(0,217,181,0.08)',
                      border: '1px solid rgba(0,217,181,0.2)',
                      color: 'var(--teal)',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      padding: '3px 10px',
                      borderRadius: 4,
                      letterSpacing: '0.03em',
                    }}>{tag}</span>
                  ))}
                </div>

                {/* Action */}
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ fontSize: '0.7rem', padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 8, width: 'fit-content' }}
                >
                  <FaGithub size={13} /> View Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
