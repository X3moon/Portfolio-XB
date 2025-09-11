import React from 'react';
import { PERSONAL_INFO, CAREER_LINKS } from '../constants';
import { Download, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm" aria-hidden="true"></div>
      <div className="relative z-10 text-center">
        <div className="relative w-48 h-48 mx-auto mb-8">
            <img
                src="profile/pic.jpg"
                alt="Profile Picture"
                className="rounded-full w-full h-full object-cover border-4 border-blue-500/50 shadow-lg shadow-blue-500/20"
            />
            <div className="absolute inset-0 rounded-full border-4 border-cyan-500/50 animate-pulse"></div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          <span className="block text-gray-300 mb-2">Hi, I'm</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Xongile Baloyi
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          {PERSONAL_INFO.brandingStatement}
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href={CAREER_LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-6 py-3 text-white font-medium rounded-lg overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all duration-300"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
            </span>
          </a>
          <a
            href="www.linkedin.com/in/xongile-baloyi-1749731a2"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-6 py-3 text-white font-medium rounded-lg border border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
          >
            <span className="relative flex items-center">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
