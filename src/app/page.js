import dynamic from 'next/dynamic';
import Navbar from '@/components/navbar';
import Hero from '@/components/main';

// Skeleton placeholder keeps layout stable while chunks load,
// preventing CLS (Cumulative Layout Shift) during lazy hydration.
function SectionSkeleton() {
  return (
    <div style={{ minHeight: '400px', padding: '80px 0' }} aria-hidden="true" />
  );
}

// Lazy-load below-fold sections - they don't affect FCP/LCP,
// so deferring them keeps the main thread free during initial interaction.
const About     = dynamic(() => import('@/components/about'),     { loading: () => <SectionSkeleton /> });
const Skills    = dynamic(() => import('@/components/skills'),    { loading: () => <SectionSkeleton /> });
const Projects  = dynamic(() => import('@/components/project'),   { loading: () => <SectionSkeleton /> });
const Education = dynamic(() => import('@/components/education'), { loading: () => <SectionSkeleton /> });
const Contact   = dynamic(() => import('@/components/contact'),   { loading: () => <SectionSkeleton /> });

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