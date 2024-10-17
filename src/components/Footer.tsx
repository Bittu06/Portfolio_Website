import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Bittu Dey. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/Bittu06" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/bittu-dey-71242114b" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/dey1869640?t=iM-Pxw002Hp4Ue-4f0iwLg&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;