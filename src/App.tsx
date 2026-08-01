import { About } from './sections/About';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Footer } from './sections/Footer';
// import { GitHubStats } from './sections/GitHubStats';
import { Hero } from './sections/Hero';
import { Navbar } from './sections/Navbar';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        {/* <GitHubStats /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

