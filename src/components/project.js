'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import {
  FaGithub, FaAws, FaMobileAlt, FaReact, FaPython, FaDatabase,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTailwindcss, SiFirebase, SiFlutter, SiDart,
  SiAmazondynamodb, SiMysql, SiFramer,
} from 'react-icons/si';
import { MdWeb } from 'react-icons/md';
import { TbBrandOpenai } from 'react-icons/tb';

// ── Icon map ────────────────────────────────────────────
const ICONS = {
  'Next.js':        { icon: <SiNextdotjs size={14} />,      color: '#fff' },
  'React.js':       { icon: <FaReact size={14} />,          color: '#61DAFB' },
  'Tailwind CSS':   { icon: <SiTailwindcss size={14} />,    color: '#38BDF8' },
  'Framer Motion':  { icon: <SiFramer size={14} />,         color: '#FF5733' },
  'AWS Cognito':    { icon: <FaAws size={14} />,            color: '#FF9900' },
  'Lambda':         { icon: <FaAws size={14} />,            color: '#FF9900' },
  'DynamoDB':       { icon: <SiAmazondynamodb size={14} />, color: '#4053D6' },
  'API Gateway':    { icon: <FaAws size={14} />,            color: '#FF9900' },
  'Flutter':        { icon: <SiFlutter size={14} />,        color: '#54C5F8' },
  'Firebase':       { icon: <SiFirebase size={14} />,       color: '#FFCA28' },
  'Riverpod':       { icon: <FaDatabase size={14} />,       color: '#a78bfa' },
  'Dart':           { icon: <SiDart size={14} />,           color: '#00B4AB' },
  'Firestore':      { icon: <SiFirebase size={14} />,       color: '#FFCA28' },
  'CoinGecko API':  { icon: <TbBrandOpenai size={14} />,    color: '#8DC63F' },
  'OpenWeather API':{ icon: <TbBrandOpenai size={14} />,    color: '#f97316' },
  'CSS':            { icon: <FaReact size={14} />,          color: '#38BDF8' },
};

// ── Category tabs ────────────────────────────────────────
const categories = [
  { id: 'web', label: 'Web Development', icon: <MdWeb size={15} /> },
  { id: 'aws', label: 'AWS & Cloud',     icon: <FaAws size={13} /> },
  { id: 'app', label: 'App Development', icon: <FaMobileAlt size={13} /> },
];

// ── Project data ─────────────────────────────────────────
const projects = [
  {
    category: 'web',
    title: 'Crypto Pulse',
    subtitle: 'Cryptocurrency Dashboard',
    date: 'August 2025',
    type: 'Self Project',
    image: '/project-crypto.png',
    description:
      'Responsive cryptocurrency dashboard using Next.js and CoinGecko API with live market data, interactive charts, search, liquidity analysis, and a localStorage-based watchlist.',
    highlights: [
      'Live market data with real-time price charts and watchlist features',
      'Individual coin pages with price trends and key metrics',
      'Search, Portfolio tracker & personalised Watchlist via localStorage',
    ],
    techLogos: ['Next.js', 'React.js', 'Tailwind CSS', 'CoinGecko API'],
    github: 'https://github.com/Yashk-15',
  },
  {
    category: 'web',
    title: 'Cosmic Weather Dashboard',
    subtitle: 'Space-Themed Weather App',
    date: 'June 2025',
    type: 'Self Project',
    image: '/project-weather.png',
    description:
      'Space-themed weather dashboard with real-time OpenWeather API data, dynamic galaxy backgrounds, glassmorphism card UI, and Framer Motion animations.',
    highlights: [
      'Real-time weather via OpenWeather API with animated galaxy backgrounds',
      'Glassmorphism cards with blur effects, icons and responsive layout',
      'Framer Motion transitions and interactive animated search input',
    ],
    techLogos: ['React.js', 'OpenWeather API', 'Framer Motion', 'CSS'],
    github: 'https://github.com/Yashk-15',
  },
  {
    category: 'aws',
    title: 'URL Monitoring Dashboard',
    subtitle: 'Serverless Uptime Analytics',
    date: '2025',
    type: 'Self Project',
    image: '/project-urlmonitor.png',
    description:
      'Full-stack serverless URL monitoring dashboard with real-time uptime tracking, response-time analytics, and incident detection across multiple endpoints.',
    highlights: [
      'JWT auth via AWS Cognito — email verification, protected routes & session persistence',
      'Data table with drag-and-drop, column controls, pagination & per-row charts',
      'Interactive area chart for response-time trends (7d / 30d / 90d)',
      'Incident timeline with severity classification (critical / warning)',
    ],
    techLogos: ['Next.js', 'AWS Cognito', 'Lambda', 'DynamoDB', 'API Gateway', 'Tailwind CSS'],
    github: 'https://github.com/Yashk-15',
  },
  {
    category: 'app',
    title: 'TechPay',
    subtitle: 'Digital Wallet — Techforce Australia Internship',
    date: '2024',
    type: 'Internship Project',
    image: '/project-techpay.png',
    description:
      'Full-stack cross-platform digital payments app with NFC payments, QR scanning, P2P transfers, and bill-split across iOS and Android.',
    highlights: [
      'Riverpod architecture — 15+ screens with feature-based folder structure',
      'Firebase Auth + Firestore profiles, KYC verification & persistent session',
      'PCI DSS-aligned security — AES-256 encryption, SHA-256 PIN hashing',
      'Tiered rewards system (Silver / Gold / Platinum) with real-time wallet credit',
    ],
    techLogos: ['Flutter', 'Firebase', 'Riverpod', 'Dart', 'Firestore'],
    github: 'https://github.com/Yashk-15',
  },
];

// ── Card variants ─────────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: 'easeOut' },
  }),
};

// ── Tech logo chip ────────────────────────────────────────
function TechChip({ tech }) {
  const def = ICONS[tech];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.09)',
      borderRadius: 6, padding: '3px 9px',
      fontSize: '0.68rem', fontWeight: 600,
      color: def?.color ?? '#94a3b8',
      whiteSpace: 'nowrap',
    }}>
      {def?.icon}
      {tech}
    </span>
  );
}

// ── Main component ────────────────────────────────────────
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
            Categorized by domain — web development, cloud infrastructure, and mobile apps.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 40 }}
        >
          {categories.map(cat => {
            const isActive = activeCategory === cat.id;
            const count = projects.filter(p => p.category === cat.id).length;
            return (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 7,
                  padding: '8px 18px', borderRadius: 6, cursor: 'pointer',
                  border: isActive ? '1.5px solid var(--teal)' : '1.5px solid rgba(255,255,255,0.08)',
                  background: isActive ? 'rgba(0,217,181,0.1)' : 'var(--bg-card)',
                  color: isActive ? 'var(--teal)' : '#718096',
                  fontSize: '0.8rem', fontWeight: 600,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = 'rgba(0,217,181,0.3)'; e.currentTarget.style.color = '#a0aec0'; } }}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#718096'; } }}
              >
                {cat.icon} {cat.label}
                <span style={{
                  background: isActive ? 'rgba(0,217,181,0.2)' : 'rgba(255,255,255,0.06)',
                  color: isActive ? 'var(--teal)' : '#4a6080',
                  fontSize: '0.65rem', fontWeight: 700, padding: '1px 7px', borderRadius: 999,
                }}>{count}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}
          >
            {filtered.map((proj, i) => (
              <motion.div
                key={proj.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 12, overflow: 'hidden',
                  display: 'flex', flexDirection: 'column',
                  transition: 'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,217,181,0.3)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* ── Screenshot preview ── */}
                <div style={{
                  position: 'relative', height: 200, overflow: 'hidden',
                  background: '#0a1628',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <Image
                    src={proj.image}
                    alt={`${proj.title} preview`}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.4s ease' }}
                    className={`proj-img-${i}`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Gradient overlay at bottom */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
                    background: 'linear-gradient(to top, var(--bg-card), transparent)',
                    pointerEvents: 'none',
                  }} />
                  {/* Type badge */}
                  <span style={{
                    position: 'absolute', top: 10, right: 10,
                    background: 'rgba(13,27,42,0.85)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: proj.type === 'Internship Project' ? '#34d399' : '#94a3b8',
                    fontSize: '0.6rem', fontWeight: 700,
                    padding: '3px 9px', borderRadius: 4,
                    backdropFilter: 'blur(8px)',
                    letterSpacing: '0.05em',
                  }}>{proj.type}</span>
                </div>

                {/* ── Body ── */}
                <div style={{ padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>

                  {/* Title row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '1rem', marginBottom: 2 }}>
                        {proj.title}
                      </h3>
                      <p style={{ color: 'var(--teal)', fontSize: '0.71rem', fontWeight: 600 }}>{proj.subtitle}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 8, flexShrink: 0 }}>
                      <span style={{ color: '#4a6080', fontSize: '0.68rem' }}>{proj.date}</span>
                      <a href={proj.github} target="_blank" rel="noopener noreferrer"
                        style={{ color: '#4a6080', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#e2e8f0'}
                        onMouseLeave={e => e.currentTarget.style.color = '#4a6080'}
                      >
                        <FaGithub size={15} />
                      </a>
                    </div>
                  </div>

                  {/* Tech logo row */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 12 }}>
                    {proj.techLogos.map(tech => <TechChip key={tech} tech={tech} />)}
                  </div>

                  {/* Description */}
                  <p style={{ color: 'var(--muted)', fontSize: '0.81rem', lineHeight: 1.7, marginBottom: 12 }}>
                    {proj.description}
                  </p>

                  {/* Highlights */}
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 5, flex: 1, marginBottom: 16 }}>
                    {proj.highlights.map((h, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: 7, fontSize: '0.78rem', color: '#718096', lineHeight: 1.5 }}>
                        <span style={{ color: 'var(--teal)', flexShrink: 0, marginTop: 1 }}>›</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a href={proj.github} target="_blank" rel="noopener noreferrer"
                    className="btn-outline"
                    style={{ fontSize: '0.7rem', padding: '7px 16px', display: 'inline-flex', alignItems: 'center', gap: 7, width: 'fit-content' }}
                  >
                    <FaGithub size={12} /> View Code
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Replace note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ color: '#2d4a6b', fontSize: '0.72rem', marginTop: 20, textAlign: 'center' }}
        >
          💡 Replace preview images in <code style={{ color: '#3d5a7a' }}>/public</code> with your actual screenshots or screen recordings anytime.
        </motion.p>

      </div>
    </section>
  );
}
