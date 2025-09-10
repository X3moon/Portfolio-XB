
import React from 'react';
import Section from './Section';
import { PRESENTATION } from '../constants';

const Presentation: React.FC = () => {
  return (
    <Section id="presentation" title="Showcase Presentation" subtitle="A deeper dive into my work, methodology, and vision for the future.">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Introduction</h3>
                <p className="text-gray-400">{PRESENTATION.intro}</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Project Highlights</h3>
                <p className="text-gray-400">{PRESENTATION.projectHighlights}</p>
            </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center text-gray-200 mb-6">Capstone Demo Preview</h3>
          <div className="aspect-w-16 aspect-h-9 bg-gray-900 rounded-lg overflow-hidden shadow-lg shadow-blue-500/20 border border-blue-500/30">
            <iframe
              src={`https://www.youtube.com/embed/${PRESENTATION.youtubeEmbedId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-lg text-center border border-gray-700">
            <h3 className="text-xl font-bold text-gray-200 mb-3">Future Learning Plans</h3>
            <p className="text-gray-400">{PRESENTATION.futurePlans}</p>
        </div>
      </div>
    </Section>
  );
};

export default Presentation;