import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Skills', section: 'skills' },
    { name: 'Projects', section: 'projects' },
    { name: 'Contact', section: 'contact' },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Bittu Dey</h1>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <a
              key={item.section}
              href={`#${item.section}`}
              className={`text-gray-600 hover:text-gray-900 ${
                activeSection === item.section ? 'font-semibold' : ''
              }`}
              onClick={() => setActiveSection(item.section)}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            {navItems.map((item) => (
              <a
                key={item.section}
                href={`#${item.section}`}
                className={`text-gray-600 hover:text-gray-900 ${
                  activeSection === item.section ? 'font-semibold' : ''
                }`}
                onClick={() => {
                  setActiveSection(item.section);
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;