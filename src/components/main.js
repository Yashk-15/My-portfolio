'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const COMMANDS = [
  { type: 'cmd',  text: 'npx yash-kaushik' },
  { type: 'gap' },
  { type: 'key',  text: 'name',   value: '"Yash Kaushik"' },
  { type: 'key',  text: 'role',   value: '"Full-Stack & Cloud Engineer"' },
  { type: 'key',  text: 'stack',  value: '["Next.js", "React", "AWS"]' },
  { type: 'key',  text: 'dsa',    value: '"C++ / LeetCode"' },
  { type: 'key',  text: 'status', value: '"open to opportunities ✓"' },
  { type: 'gap' },
  { type: 'info', text: '→ Portfolio: yashkaushik-dev.vercel.app' },
  { type: 'info', text: '→ GitHub:    github.com/Yashk-15' },
];

function TerminalHero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor]     = useState(true);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) { setVisibleLines(COMMANDS.length); return; }
    if (visibleLines < COMMANDS.length) {
      const delay = COMMANDS[visibleLines]?.type === 'gap' ? 120 : 340;
      const t = setTimeout(() => setVisibleLines(v => v + 1), delay);
      return () => clearTimeout(t);
    }
  }, [visibleLines, prefersReduced]);

  useEffect(() => {
    const t = setInterval(() => setShowCursor(c => !c), 520);
    return () => clearInterval(t);
  }, []);

  const teal   = '#3d5a80';
  const muted  = '#9a9a8a';
  const str    = '#5a8a5a';
  const key    = '#6a7a9a';
  const prompt = '#8a7a6a';
  const info   = '#7a8a9a';

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      style={{ width: '100%', maxWidth: 480 }}
    >
      {/* Window chrome */}
      <div style={{
        background: '#EEE9DF',
        borderRadius: '10px 10px 0 0',
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        borderBottom: '1px solid rgba(0,0,0,0.08)',
      }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
        <span style={{
          marginLeft: 10,
          fontSize: '11px',
          color: 'var(--subtle)',
          fontFamily: 'monospace',
          letterSpacing: '0.03em',
        }}>
          terminal — zsh
        </span>
      </div>

      {/* Terminal body */}
      <div style={{
        background: '#E8E2D4',
        borderRadius: '0 0 10px 10px',
        border: '1px solid rgba(0,0,0,0.08)',
        borderTop: 'none',
        padding: '20px 22px 24px',
        fontFamily: '"Fira Code", "Cascadia Code", "Consolas", monospace',
        fontSize: '13px',
        lineHeight: 1.8,
        minHeight: 280,
      }}>
        {COMMANDS.slice(0, visibleLines).map((line, i) => {
          const isLast   = i === visibleLines - 1;
          const isTyping = visibleLines < COMMANDS.length;

          if (line.type === 'gap') return <div key={i} style={{ height: 6 }} />;

          if (line.type === 'cmd') return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <span style={{ color: prompt }}>❯</span>
              <span style={{ color: '#e2e8f0', fontWeight: 500 }}>{line.text}</span>
              {isLast && isTyping && (
                <span style={{
                  display: 'inline-block', width: 8, height: 15,
                  background: teal, opacity: showCursor ? 1 : 0,
                  transition: 'opacity 0.1s', borderRadius: 1,
                }} />
              )}
            </div>
          );

          if (line.type === 'key') return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', paddingLeft: 16 }}>
              <span style={{ color: key, minWidth: 60 }}>{line.text}</span>
              <span style={{ color: muted, margin: '0 6px' }}>:</span>
              <span style={{ color: str }}>{line.value}</span>
              {isLast && isTyping && (
                <span style={{
                  display: 'inline-block', width: 8, height: 15,
                  background: teal, marginLeft: 4,
                  opacity: showCursor ? 1 : 0,
                  transition: 'opacity 0.1s', borderRadius: 1,
                }} />
              )}
            </div>
          );

          if (line.type === 'info') return (
            <div key={i} style={{ color: info, paddingLeft: 4, fontSize: '12px' }}>
              {line.text}
              {isLast && isTyping && (
                <span style={{
                  display: 'inline-block', width: 8, height: 13,
                  background: teal, marginLeft: 4,
                  opacity: showCursor ? 1 : 0,
                  transition: 'opacity 0.1s', borderRadius: 1,
                }} />
              )}
            </div>
          );

          return null;
        })}

        {/* Blinking cursor after all lines typed */}
        {visibleLines === COMMANDS.length && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
            <span style={{ color: prompt }}>❯</span>
            <span style={{
              display: 'inline-block', width: 8, height: 15,
              background: teal, opacity: showCursor ? 1 : 0,
              transition: 'opacity 0.1s', borderRadius: 1,
            }} />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  // Disable infinite animations on devices that prefer reduced motion
  // (also catches most low-power mobile browsers)
  const prefersReduced = useReducedMotion();

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', paddingTop: '80px' }}>
      <div className="container-main" style={{ width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '60px', minHeight: 'calc(100vh - 80px)' }} className="hero-grid">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="hero-text"
          >
            {/* Role label */}
            <div className="section-label" style={{ marginBottom: 24 }}>
              Full-Stack & Cloud Engineer | React · Next.js · Node.js · AWS
            </div>

            {/* Name — this becomes the LCP element on mobile */}
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              fontWeight: 800,
              color: 'var(--text)',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: 20,
            }}>
              Yash Kaushik
            </h1>

            {/* Description */}
            <p style={{
              color: 'var(--muted)',
              fontSize: '0.95rem',
              lineHeight: 1.75,
              maxWidth: '420px',
              marginBottom: 36,
            }}>
              Building fast, scalable, web applications using Next.js, React, and AWS. Focused on delivering solutions that not only perform efficiently but also create measurable business value, improving operational efficiency, enhancing user experience, and enabling organizations to scale reliably while meeting the needs of their end users.{' '}
            </p>

            {/* Buttons — min 44px touch target height */}
            <div className="hero-buttons" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 40 }}>
              <a href="#projects" className="btn-outline hero-btn">
                View Projects
              </a>
              <a href="#contact" className="btn-solid hero-btn">
                Contact Me
              </a>
            </div>

            {/* Social icons — 44px touch targets */}
            <div className="hero-socials" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              {[
                { icon: <FaEnvelope size={16} />, href: 'mailto:yashjk1505@outlook.com', label: 'Email' },
                { icon: <FaGithub size={16} />, href: 'https://github.com/yashk-15', label: 'GitHub' },
                { icon: <FaLinkedin size={16} />, href: 'https://linkedin.com/in/yashk15', label: 'LinkedIn' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="social-icon-btn"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Terminal widget */}
          <div
            className="hero-illustration-wrapper"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <TerminalHero />
          </div>
        </div>

        {/* Scroll indicator — disabled on mobile (saves infinite animation cost) */}
        <motion.div
          className="scroll-indicator"
          style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: '#4a6080' }}
          animate={prefersReduced ? {} : { y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>scroll</span>
          <FaArrowDown size={10} />
        </motion.div>
      </div>

      <style>{`
        /* Hero illustration hidden on mobile — LCP shifts to H1 text (fast) */
        @media (max-width: 768px) {
          .hero-illustration-wrapper { display: none !important; }
          .scroll-indicator { display: none !important; }
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding-top: 40px;
          }
          .hero-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .hero-buttons {
            justify-content: center;
            width: 100%;
          }
          .hero-socials {
            justify-content: center;
          }
        }
        /* Ensure buttons have 44px min touch target on mobile */
        .hero-btn {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .social-icon-btn {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          color: #94a3b8;
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .social-icon-btn:hover {
          border-color: var(--teal);
          color: var(--teal);
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
