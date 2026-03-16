'use client';

import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaPython, FaAws, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMysql, SiVercel, SiJupyter, SiFlutter } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';
import { SiGooglecolab } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 size={32} />, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt size={32} />, color: '#1572B6' },
  { name: 'JavaScript', icon: <FaJs size={32} />, color: '#F7DF1E' },
  { name: 'React.js', icon: <FaReact size={32} />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs size={32} />, color: '#fff' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} />, color: '#38BDF8' },
  { name: 'Flutter', icon: <SiFlutter size={32} />, color: '#02569B' },
  { name: 'Python', icon: <FaPython size={32} />, color: '#3776AB' },
  { name: 'MySQL', icon: <SiMysql size={32} />, color: '#4479A1' },
  { name: 'AWS', icon: <FaAws size={32} />, color: '#FF9900' },
  { name: 'GitHub', icon: <FaGithub size={32} />, color: '#fff' },
  { name: 'VS Code', icon: <VscCode size={32} />, color: '#007ACC' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ marginBottom: 48 }}
        >
          <div className="section-label">Skills</div>
          <h2 style={{ color: '#e2e8f0', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Technologies I work with
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
            gap: 16,
          }}
        >
          {skills.map(skill => (
            <motion.div
              key={skill.name}
              variants={item}
              className="skill-card"
              style={{ cursor: 'default' }}
            >
              {/* Colored accent line at bottom */}
              <style>{`
                .skill-card-${skill.name.replace(/[^a-z]/gi, '')}::after {
                  background: ${skill.color};
                }
              `}</style>
              <div
                className={`skill-card-${skill.name.replace(/[^a-z]/gi, '')}`}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
                  width: '100%',
                  position: 'relative',
                  paddingBottom: 8,
                }}
              >
                <span style={{ color: skill.color, display: 'flex' }}>{skill.icon}</span>

                {/* Colored bottom bar */}
                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  height: 3,
                  background: skill.color,
                  opacity: 0.6,
                  borderRadius: '0 0 4px 4px',
                }} />
              </div>
              <span style={{ color: '#94a3b8', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.03em', textAlign: 'center' }}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
