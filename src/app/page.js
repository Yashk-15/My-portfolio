import Navbar from '@/components/navbar'
import Hero from '@/components/main'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/project'
import Education from '@/components/education'
import Contact from '@/components/contact'


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
  )
}
