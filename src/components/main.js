'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', paddingTop: '80px' }}>
      <div className="container-main" style={{ width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '60px', minHeight: 'calc(100vh - 80px)' }} className="hero-grid">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Role label */}
            <div className="section-label" style={{ marginBottom: 24 }}>
              Full Stack Developer
            </div>

            {/* Name */}
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              fontWeight: 800,
              color: '#e2e8f0',
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
              Building fast, scalable, and user-centric web applications using Next.js, React, and AWS. Focused on delivering solutions that not only perform efficiently but also create measurable business value—improving operational efficiency, enhancing user experience, and enabling organizations to scale reliably while meeting the needs of their end users.{' '}
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 40 }}>
              <motion.a
                href="#projects"
                className="btn-outline"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-solid"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Contact Me
              </motion.a>
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              {[
                { icon: <FaEnvelope size={16} />, href: 'mailto:yashsk1505@gmail.com', label: 'Email' },
                { icon: <FaGithub size={16} />, href: 'https://github.com/yashk-15', label: 'GitHub' },
                { icon: <FaLinkedin size={16} />, href: 'https://linkedin.com/in/yashk15', label: 'LinkedIn' },
              ].map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, color: 'var(--teal)' }}
                  style={{
                    width: 38, height: 38,
                    borderRadius: '50%',
                    border: '1.5px solid rgba(255,255,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#94a3b8'; }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/hero-illustration.png"
                alt="Developer illustration"
                width={480}
                height={400}
                style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: '#4a6080' }}
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>scroll</span>
          <FaArrowDown size={10} />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
