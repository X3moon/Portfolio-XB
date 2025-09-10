
import React from 'react';
import Section from './Section';
import { CAPSTONE_PROJECT } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Capstone: React.FC = () => {
  return (
    <Section id="capstone" title="Capstone Project" subtitle={CAPSTONE_PROJECT.title}>
      <div className="max-w-5xl mx-auto bg-gray-800/50 p-8 rounded-lg border border-blue-500/30 shadow-2xl shadow-blue-500/10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <img src={CAPSTONE_PROJECT.image} alt={CAPSTONE_PROJECT.title} className="rounded-lg w-full object-cover mb-6 shadow-lg" />
            <div className="flex items-center space-x-6 justify-center lg:justify-start">
              <a href={CAPSTONE_PROJECT.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <ExternalLink className="w-5 h-5 mr-2" /> Live Demo
              </a>
              <a href="{https://github.com/X3moon/Portfolio-XB}" target="_blank" rel="noopener noreferrer" className="flex items-center font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Github className="w-5 h-5 mr-2" /> GitHub Repository
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-blue-400 mb-2">Problem & Solution</h4>
              <p className="text-gray-400 leading-relaxed">{CAPSTONE_PROJECT.problemStatement}</p>
              <p className="text-gray-300 leading-relaxed mt-2">{CAPSTONE_PROJECT.solution}</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-cyan-400 mb-2">Technical Deep-Dive</h4>
              <p className="text-gray-400 leading-relaxed">{CAPSTONE_PROJECT.technicalDeepDive}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Capstone;
