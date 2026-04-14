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
            className="hero-text"
          >
            {/* Role label */}
            <div className="section-label" style={{ marginBottom: 24 }}>
              Frontend Developer | React · Next.js · Flutter · AWS
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
              Building fast, scalable, web applications using Next.js, React, and AWS. Focused on delivering solutions that not only perform efficiently but also create measurable business value, improving operational efficiency, enhancing user experience, and enabling organizations to scale reliably while meeting the needs of their end users.{' '}
            </p>

            {/* Buttons — plain <a> tags with CSS transitions (no JS on hover/tap) */}
            <div className="hero-buttons" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 40 }}>
              <a href="#projects" className="btn-outline">
                View Projects
              </a>
              <a href="#contact" className="btn-solid">
                Contact Me
              </a>
            </div>

            {/* Social icons — CSS-only hover transitions */}
            <div className="hero-socials" style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              {[
                { icon: <FaEnvelope size={16} />, href: 'mailto:yashsk1505@gmail.com', label: 'Email' },
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
                fetchPriority="high"
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
        .social-icon-btn {
          width: 38px; height: 38px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          color: #94a3b8;
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .social-icon-btn:hover {
          border-color: var(--teal);
          color: var(--teal);
          transform: scale(1.15);
        }
        @media (max-width: 768px) {
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
      `}</style>
    </section>
  );
}
