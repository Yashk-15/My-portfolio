'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const LINES = [
  { text: 'const yash = {', indent: 0 },
  { text: 'role: "SDE",', indent: 1 },
  { text: 'cloud: "AWS",', indent: 1 },
  { text: 'dsa: "C++",', indent: 1 },
  { text: 'status: "hiring",', indent: 1 },
  { text: '}', indent: 0 },
];

function TerminalWidget() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (visibleLines < LINES.length) {
      const t = setTimeout(() => setVisibleLines(v => v + 1), 420);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setVisibleLines(0), 2800);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  useEffect(() => {
    const t = setInterval(() => setShowCursor(c => !c), 530);
    return () => clearInterval(t);
  }, []);

  const teal = '#3d5a80';
  const muted = '#9a9a8a';
  const str = '#5a8a5a';
  const key = '#6a7a9a';

  return (
    <div style={{
      fontFamily: '"Fira Code", "Cascadia Code", monospace',
      fontSize: '7.5px',
      lineHeight: '1.65',
      padding: '10px 10px 10px 12px',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      {LINES.slice(0, visibleLines).map((line, i) => {
        const isLast = i === visibleLines - 1;
        const isComplete = visibleLines === LINES.length;
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{
              paddingLeft: line.indent * 8,
              color: line.indent === 0 ? teal
                : line.text.startsWith('role') ? key
                  : line.text.startsWith('cloud') ? key
                    : line.text.startsWith('dsa') ? key
                      : line.text.startsWith('status') ? key
                        : muted,
            }}>
              {line.indent > 0 ? (
                <>
                  <span style={{ color: key }}>
                    {line.text.split(':')[0]}
                  </span>
                  <span style={{ color: muted }}>:</span>
                  <span style={{ color: str }}>
                    {' ' + line.text.split(':').slice(1).join(':')}
                  </span>
                </>
              ) : line.text}
            </span>
            {isLast && !isComplete && (
              <span style={{
                display: 'inline-block',
                width: '1px',
                height: '9px',
                background: teal,
                marginLeft: '1px',
                opacity: showCursor ? 1 : 0,
                transition: 'opacity 0.1s',
              }} />
            )}
          </div>
        );
      })}
      {visibleLines === LINES.length && (
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
          <span style={{ color: teal, fontSize: '7px' }}>▶</span>
          <span style={{
            display: 'inline-block',
            width: '1px', height: '9px',
            background: teal, marginLeft: '3px',
            opacity: showCursor ? 1 : 0,
            transition: 'opacity 0.1s',
          }} />
        </div>
      )}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container-main">
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 64, alignItems: 'flex-start' }} className="about-grid">

          {/* Left — Avatar + name + socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
          >
            {/* Avatar placeholder */}
            <div className="avatar-ring" style={{ marginBottom: 16, borderColor: 'rgba(61, 90, 128, 0.2)' }}>
              <div style={{
                width: 130, height: 130,
                borderRadius: '50%',
                background: '#EEE9DF',
                border: '1.5px solid rgba(61,90,128,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden',
                flexShrink: 0,
              }}>
                <TerminalWidget />
              </div>
            </div>

            <h3 style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 4 }}>
              Yash Kaushik
            </h3>
            <p style={{ color: 'var(--subtle)', fontSize: '0.8rem', marginBottom: 20 }}>
              Chennai, India
            </p>

            {/* Social icons — CSS hover only */}
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: <FaEnvelope size={15} />, href: 'mailto:yashjk1505@outlook.com', label: 'Email' },
                { icon: <FaGithub size={15} />, href: 'https://github.com/Yashk-15', label: 'GitHub' },
                { icon: <FaLinkedin size={15} />, href: 'https://linkedin.com/in/yashk15', label: 'LinkedIn' },
                { icon: <SiLeetcode size={15} />, href: 'https://leetcode.com/u/Yk15/', label: 'LeetCode' },
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

          {/* Right — Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="section-label">About</div>
            <h2 style={{ color: 'var(--text)', fontSize: '1.8rem', fontWeight: 700, marginBottom: 24, letterSpacing: '-0.02em' }}>
              Know a little about me
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: 16 }}>
              I&apos;m a <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Full-Stack &amp; Cloud Engineer</span> and{' '}
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>AWS Certified Solutions Architect</span> pursuing my B.Tech in
              Computer Science (Software Engineering) at SRM Institute of Science and Technology, Chennai
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: 24 }}>
              I build serverless cloud applications and full-stack web products using React, Next.js, and AWS. My work spans{' '}
              <span style={{ color: 'var(--text)', fontWeight: 600 }}>Lambda, DynamoDB, Cognito, and EventBridge</span>{' '}
              — focused on real-time monitoring, secure authentication, and event-driven workflows. I&apos;m actively strengthening
              my DSA skills through consistent problem solving in{' '}
              <span style={{ color: 'var(--text)', fontWeight: 600 }}>C++</span>,
              and I enjoy building things that create measurable impact.
            </p>

            {/* Stats row */}
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 8 }}>
              {[
                { value: '4+', label: 'Projects Built' },
                { value: '9.02', label: 'CGPA / 10' },
                { value: '2', label: 'AWS Certs' },
              ].map(stat => (
                <div key={stat.label} style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  padding: '16px',
                  textAlign: 'center',
                }}>
                  <div style={{ color: 'var(--teal)', fontSize: '1.6rem', fontWeight: 800, lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.72rem', marginTop: 6, letterSpacing: '0.03em' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .social-icon-btn {
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          color: #94a3b8; text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .social-icon-btn:hover {
          border-color: var(--teal);
          color: var(--teal);
          transform: scale(1.15);
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .stats-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 10px !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
