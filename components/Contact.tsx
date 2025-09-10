
import React from 'react';
import Section from './Section';
import { CAREER_LINKS, SOCIAL_ICONS } from '../constants';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" subtitle="I'm open to new opportunities and collaborations. Feel free to reach out!">
      <div className="max-w-md mx-auto text-center">
        <p className="text-lg text-gray-300 mb-6">
          You can reach me via email at: <br/>
          <a href={`mailto:${CAREER_LINKS.email}`} className="text-blue-400 font-bold hover:underline">
            {CAREER_LINKS.email}
          </a>
        </p>
        <p className="text-gray-400 mb-6">Or connect with me on social media:</p>
        <div className="flex justify-center space-x-6">
          {SOCIAL_ICONS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-125"
            >
              {React.cloneElement(social.icon, { size: 32 })}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
