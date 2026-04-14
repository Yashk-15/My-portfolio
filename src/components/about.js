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

            {/* Social icons — CSS hover only */}
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: <FaEnvelope size={15} />, href: 'mailto:yashsk1505@gmail.com', label: 'Email' },
                { icon: <FaGithub size={15} />, href: 'https://github.com/Yashk-15', label: 'GitHub' },
                { icon: <FaLinkedin size={15} />, href: 'https://linkedin.com/in/yashk15', label: 'LinkedIn' },
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
              I&apos;m a <span style={{ color: 'var(--teal)', fontWeight: 600 }}>Frontend &amp; Cloud Developer</span> and{' '}
              <span style={{ color: 'var(--teal)', fontWeight: 600 }}>AWS Certified Cloud Practitioner</span> pursuing my B.Tech in
              Computer Science (Software Engineering) at SRM Institute of Science and Technology, Chennai
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: 24 }}>
              I love building real-world applications that are fast, scalable, and beautifully designed. My work spans
              <span style={{ color: '#e2e8f0', fontWeight: 500 }}> React &amp; Next.js</span> on the frontend,{' '}
              <span style={{ color: '#e2e8f0', fontWeight: 500 }}>Flutter</span> for mobile, and{' '}
              <span style={{ color: '#e2e8f0', fontWeight: 500 }}>AWS serverless infrastructure</span> — including Lambda, DynamoDB, Cognito, and EventBridge.{' '}
              I&apos;m always exploring new tools and patterns to push the quality of my work.
            </p>

            {/* Stats row */}
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 8 }}>
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
