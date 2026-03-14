'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container-main">
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 64, alignItems: 'flex-start' }} className="about-grid">

          {/* Left — Avatar + name + socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
          >
            {/* Avatar placeholder */}
            <div className="avatar-ring" style={{ marginBottom: 16 }}>
              <div style={{
                width: 130, height: 130,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #1e3a5a, #0f2a45)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '3rem', fontWeight: 800, color: 'var(--teal)',
                letterSpacing: '-0.05em',
              }}>
                YK
              </div>
            </div>

            <h3 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '1.1rem', marginBottom: 4 }}>
              Yash Kaushik
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginBottom: 20 }}>
              Chennai, India
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: <FaEnvelope size={15} />, href: 'mailto:yashsk1505@gmail.com', label: 'Email' },
                { icon: <FaGithub size={15} />, href: 'https://github.com/Yashk-15', label: 'GitHub' },
                { icon: <FaLinkedin size={15} />, href: 'https://linkedin.com/in/yashk15', label: 'LinkedIn' },
              ].map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.15 }}
                  style={{
                    width: 34, height: 34,
                    borderRadius: '50%',
                    border: '1.5px solid rgba(255,255,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#94a3b8', textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#94a3b8'; }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="section-label">About</div>
            <h2 style={{ color: '#e2e8f0', fontSize: '1.8rem', fontWeight: 700, marginBottom: 24, letterSpacing: '-0.02em' }}>
              Know a little about me
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: 16 }}>
              I'm a passionate <span style={{ color: 'var(--teal)', fontWeight: 600 }}>Full Stack Developer</span> and{' '}
              <span style={{ color: 'var(--teal)', fontWeight: 600 }}>AWS Certified Cloud Practitioner</span> pursuing my B.Tech in
              Computer Science (Software Engineering) at SRM Institute of Science and Technology, Chennai — with a CGPA of 8.88/10.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: 24 }}>
              I love building real-world applications that are fast, scalable, and beautifully designed. My journey spans
              from working with{' '}
              <span style={{ color: '#e2e8f0', fontWeight: 500 }}>React & Next.js</span> on the frontend to{' '}
              <span style={{ color: '#e2e8f0', fontWeight: 500 }}>MySQL & AWS</span> on the backend and cloud.
              I'm always exploring new tools and patterns to push the quality of my work.
            </p>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 8 }}>
              {[
                { value: '4+', label: 'Projects Built' },
                { value: '8.98', label: 'CGPA / 10' },
                { value: '5+', label: 'Certifications' },
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
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
