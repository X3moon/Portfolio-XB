import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Capstone from './components/Capstone';
import Certifications from './components/Certifications';
import Presentation from './components/Presentation';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      sectionRefs.current[section.id] = section as HTMLElement;
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-blue-900/10 to-slate-950 min-h-screen overflow-x-hidden">
      {/* Decorative gradient blobs */}
      <div 
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[32rem] md:h-[32rem] lg:w-[48rem] lg:h-[48rem] bg-cyan-500/15 rounded-full blur-3xl" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 md:w-[32rem] md:h-[32rem] lg:w-[48rem] lg:h-[48rem] bg-blue-700/15 rounded-full blur-3xl" 
        aria-hidden="true"
      />

      <Header activeSection={activeSection} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Capstone />
        <Certifications />
        <Presentation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;