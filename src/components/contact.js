'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '100px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ marginBottom: 48 }}
        >
          <div className="section-label">Contato</div>
          <h2 style={{ color: '#e2e8f0', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Let&apos;s Connect
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: 10, maxWidth: 500, lineHeight: 1.7 }}>
            I&apos;m always open to interesting conversations, projects, and opportunities. Feel free to reach out — I&apos;ll be happy to connect!
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'flex-start' }} className="contact-grid">
          {/* Left — contact items */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
          >
            {[
              { icon: <FaEnvelope size={15} />, label: 'yashsk1505@gmail.com', href: 'mailto:yashsk1505@gmail.com', color: '#f87171' },
              { icon: <FaGithub size={15} />, label: 'github.com/yashsk', href: 'https://github.com/yashk-15', color: '#e2e8f0' },
              { icon: <FaLinkedin size={15} />, label: 'linkedin.com/in/yash-kaushik', href: 'https://linkedin.com/in/yashk15', color: '#60a5fa' },
              { icon: <FaMapMarkerAlt size={15} />, label: 'Chennai, TN — India', href: null, color: '#f97316' },
            ].map(c => (
              <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: `${c.color}14`,
                  border: `1px solid ${c.color}30`,
                  color: c.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {c.icon}
                </div>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    style={{ color: '#94a3b8', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = c.color}
                    onMouseLeave={e => e.target.style.color = '#94a3b8'}
                  >{c.label}</a>
                ) : (
                  <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{c.label}</span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Right — CTA box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '36px',
            }}
          >
            <div style={{
              width: 40, height: 40, background: 'rgba(0,217,181,0.1)', borderRadius: 10,
              border: '1px solid rgba(0,217,181,0.25)', display: 'flex', alignItems: 'center',
              justifyContent: 'center', marginBottom: 20,
            }}>
              <FaEnvelope color="var(--teal)" size={16} />
            </div>
            <h3 style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '1.1rem', marginBottom: 10 }}>
              Ready to build something great?
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.75, marginBottom: 28 }}>
              Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open.
            </p>
            <motion.a
              href="mailto:yashsk1505@gmail.com"
              className="btn-outline"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Send me a message
            </motion.a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            marginTop: 80,
            paddingTop: 24,
            borderTop: '1px solid var(--border)',
            textAlign: 'center',
            color: '#334155',
            fontSize: '0.78rem',
          }}
        >
          © 2025 Yash Kaushik · Built with Next.js &amp; Deployed on AWS
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}