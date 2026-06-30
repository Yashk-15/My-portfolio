'use client';

import { motion } from 'framer-motion';

const education = [
  {
    institution: 'SRM Institute of Science and Technology',
    degree: 'B.Tech — Computer Science (Software Engineering)',
    period: 'July 2023 – May 2027',
    location: 'Chennai, India',
    highlight: 'CGPA: 9.02 / 10.0',
    color: 'var(--accent)',
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
            <h2 style={{ color: 'var(--text)', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em' }}>Academic Background</h2>
          </motion.div>

          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}
          >
            {education.map((edu, idx) => (
              <motion.div key={edu.institution} variants={item} className="edu-item" style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '14px 20px',
                background: 'var(--bg-card)',
                borderBottom: idx < education.length - 1 ? '1px solid var(--border)' : 'none',
                borderLeft: `3px solid ${edu.color}`,
              }}
              >
                {/* Institution + degree */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ color: 'var(--text)', fontWeight: 700, fontSize: '0.88rem' }}>{edu.institution}</span>
                  <span style={{ color: 'var(--muted)', fontSize: '0.8rem', marginLeft: 8 }}>· {edu.degree}</span>
                </div>
                {/* Grade badge */}
                <span style={{
                  background: `${edu.color}18`, border: `1px solid ${edu.color}35`,
                  color: edu.color, fontSize: '0.7rem', fontWeight: 700,
                  padding: '2px 10px', borderRadius: 4, whiteSpace: 'nowrap', flexShrink: 0,
                }}>{edu.highlight}</span>
                {/* Period + location */}
                <div className="edu-meta" style={{ textAlign: 'right', flexShrink: 0 }}>
                  <p style={{ color: 'var(--subtle)', fontSize: '0.75rem', fontWeight: 600 }}>{edu.period}</p>
                  <p style={{ color: 'var(--subtle)', fontSize: '0.68rem', marginTop: 2 }}>{edu.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .edu-item { flex-direction: column !important; align-items: flex-start !important; gap: 8px !important; }
          .edu-meta { text-align: left !important; }
        }
      `}</style>
    </>
  );
}
