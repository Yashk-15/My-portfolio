import dynamic from 'next/dynamic';
import Navbar from '@/components/navbar';
import Hero from '@/components/main';

// Lazy-load below-fold sections — they don't affect FCP/LCP,
// so deferring them keeps the main thread free during initial interaction.
const About = dynamic(() => import('@/components/about'));
const Skills = dynamic(() => import('@/components/skills'));
const Projects = dynamic(() => import('@/components/project'));
const Education = dynamic(() => import('@/components/education'));
const Contact = dynamic(() => import('@/components/contact'));

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
