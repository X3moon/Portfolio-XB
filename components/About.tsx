
import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-500/20 shadow-lg">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Professional Biography</h3>
          <p className="text-gray-300 leading-relaxed">{PERSONAL_INFO.bio}</p>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-500/20 shadow-lg">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Career Objectives</h3>
          <p className="text-gray-300 leading-relaxed">{PERSONAL_INFO.objectives}</p>
        </div>
      </div>
    </Section>
  );
};

export default About;