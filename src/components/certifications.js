'use client';

import { motion } from 'framer-motion';
import { FaAws, FaDatabase, FaBrain } from 'react-icons/fa';
import { SiMysql, SiGooglecloud } from 'react-icons/si';
import { MdVerified } from 'react-icons/md';
import { TbBrandCpp } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Sept 2025 – Sept 2028',
    icon: <FaAws className="text-2xl text-orange-400" />,
    color: 'border-orange-500/20',
    bg: 'from-orange-500/10 to-amber-500/5',
    badge: 'Active',
  },
  {
    title: 'Database Structures and Management with MySQL',
    issuer: 'Coursera / Meta',
    date: 'Feb 2025',
    icon: <SiMysql className="text-2xl text-blue-400" />,
    color: 'border-blue-500/20',
    bg: 'from-blue-500/10 to-cyan-500/5',
    badge: null,
  },
  {
    title: 'Google AI-ML Virtual Internship',
    issuer: 'AICTE',
    date: 'June 2024',
    icon: <FaBrain className="text-2xl text-green-400" />,
    color: 'border-green-500/20',
    bg: 'from-green-500/10 to-emerald-500/5',
    badge: null,
  },
  {
    title: 'Beginning C++ Programming — From Beginner to Beyond',
    issuer: 'Udemy',
    date: 'April 2024',
    icon: <TbBrandCpp className="text-2xl text-blue-500" />,
    color: 'border-indigo-500/20',
    bg: 'from-indigo-500/10 to-blue-500/5',
    badge: null,
  },
  {
    title: 'C Programming For Beginners — Master the C Language',
    issuer: 'Udemy',
    date: 'Nov 2023',
    icon: <VscCode className="text-2xl text-purple-400" />,
    color: 'border-purple-500/20',
    bg: 'from-purple-500/10 to-pink-500/5',
    badge: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="pill-label mb-4 block w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block" />
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Certifications
          </h2>
          <p className="text-gray-500 mt-3 text-base max-w-xl">
            Professional certifications that validate my technical expertise.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              className={`card-dark rounded-2xl p-6 flex flex-col gap-4 bg-gradient-to-br ${cert.bg} border ${cert.color}`}
            >
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {cert.icon}
                </div>
                {cert.badge === 'Active' && (
                  <span className="flex items-center gap-1 text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/20 px-2.5 py-1 rounded-full">
                    <MdVerified size={12} /> Active
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-500">{cert.issuer}</p>
              </div>
              <p className="text-xs text-gray-600 mt-auto font-medium">{cert.date}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
