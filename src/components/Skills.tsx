import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const skillsData = [
  { name: 'Frontend Development', icon: Globe, skills: ['React', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript'] },
  { name: 'Backend Development', icon: Database, skills: ['Node.js', 'Express', 'Python', 'Django'] },
  { name: 'Mobile Development', icon: Smartphone, skills: ['React Native', 'Flutter'] },
  { name: 'Other Skills', icon: Code, skills: ['Git', 'Docker', 'AWS', 'GraphQL'] },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <category.icon className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;