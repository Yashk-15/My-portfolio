'use client';

import { motion } from 'framer-motion';

const education = [
  {
    institution: 'SRM Institute of Science and Technology',
    degree: 'B.Tech — Computer Science (Software Engineering)',
    period: 'July 2023 – May 2027',
    location: 'Chennai, India',
    highlight: 'CGPA: 8.98 / 10.0',
    color: 'var(--teal)',
  },
  {
    institution: 'Senior Secondary Education',
    degree: 'Class XII',
    period: 'March 2023',
    location: 'Jalandhar, India',
    highlight: 'Grade: 84.6%',
    color: '#a78bfa',
  },
  {
    institution: 'High School Education',
    degree: 'Class X',
    period: 'March 2021',
    location: 'Jalandhar, India',
    highlight: 'Percentage: 93.2%',
    color: '#34d399',
  },
];

const certifications = [
  { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: 'Sept 2025 – Sept 2028', active: true, color: '#FF9900' },
  { title: 'Database Structures and Management with MySQL', issuer: 'Coursera / Meta', date: 'Feb 2025', active: false, color: '#4479A1' },
  { title: 'Google AI-ML Virtual Internship', issuer: 'AICTE', date: 'June 2024', active: false, color: '#4285F4' },
  { title: 'Beginning C++ Programming', issuer: 'Udemy', date: 'April 2024', active: false, color: '#00599C' },
  { title: 'C Programming For Beginners', issuer: 'Udemy', date: 'Nov 2023', active: false, color: '#a855f7' },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.45 } } };

export default function Education() {
  return (
    <>
      {/* Education */}
      <section id="education" style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ marginBottom: 32 }}>
            <div className="section-label">Education</div>
            <h2 style={{ color: '#e2e8f0', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em' }}>Academic Background</h2>
          </motion.div>

          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}
          >
            {education.map((edu, idx) => (
              <motion.div key={edu.institution} variants={item} style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '14px 20px',
                background: 'var(--bg-card)',
                borderBottom: idx < education.length - 1 ? '1px solid var(--border)' : 'none',
                borderLeft: `3px solid ${edu.color}`,
              }}
              >
                {/* Institution + degree */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '0.88rem' }}>{edu.institution}</span>
                  <span style={{ color: '#4a6080', fontSize: '0.8rem', marginLeft: 8 }}>· {edu.degree}</span>
                </div>
                {/* Grade badge */}
                <span style={{
                  background: `${edu.color}18`, border: `1px solid ${edu.color}35`,
                  color: edu.color, fontSize: '0.7rem', fontWeight: 700,
                  padding: '2px 10px', borderRadius: 4, whiteSpace: 'nowrap', flexShrink: 0,
                }}>{edu.highlight}</span>
                {/* Period + location */}
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <p style={{ color: '#718096', fontSize: '0.75rem', fontWeight: 600 }}>{edu.period}</p>
                  <p style={{ color: '#4a6080', fontSize: '0.68rem', marginTop: 2 }}>{edu.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" style={{ padding: '60px 0 100px', borderTop: '1px solid var(--border)' }}>
        <div className="container-main">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} style={{ marginBottom: 40 }}>
            <div className="section-label">Certifications</div>
            <h2 style={{ color: '#e2e8f0', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em' }}>Professional Credentials</h2>
          </motion.div>

          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14 }}
          >
            {certifications.map(cert => (
              <motion.div key={cert.title} variants={item} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8,
                padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 8,
                transition: 'border-color 0.2s ease, transform 0.2s ease',
                borderLeft: `3px solid ${cert.color}`,
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.85rem', lineHeight: 1.4, flex: 1 }}>{cert.title}</h3>
                  {cert.active && (
                    <span style={{
                      background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)',
                      color: '#22c55e', fontSize: '0.62rem', fontWeight: 700, padding: '2px 8px',
                      borderRadius: 4, marginLeft: 8, whiteSpace: 'nowrap', flexShrink: 0,
                    }}>ACTIVE</span>
                  )}
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '0.75rem' }}>{cert.issuer}</p>
                <p style={{ color: '#4a6080', fontSize: '0.72rem', fontWeight: 600 }}>{cert.date}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
