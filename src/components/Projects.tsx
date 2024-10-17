import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    title: 'Netflix Clone',
    description: 'A Netflix clone website built using HTML and CSS, replicating the popular streaming platform\'s user interface.',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0ZmxpeHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    technologies: ['HTML', 'CSS'],
    githubLink: 'https://github.com/Bittu06/Netflix-Clone',
    liveLink: '#',
  },
  {
    title: 'Rock-Paper-Scissors',
    description: 'A Rock-Paper-Scissors game website where you can play against the computer. Features score tracking and a reset button.',
    image: 'https://images.unsplash.com/photo-1612404730960-5c71577fca11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9jayUyMHBhcGVyJTIwc2Npc3NvcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/Bittu06/Rock-Paper-Scissors',
    liveLink: '#',
  },
  {
    title: 'Calculator',
    description: 'A simple and user-friendly calculator website built with HTML, CSS, and JavaScript, offering basic arithmetic operations with a clean, responsive design.',
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FsY3VsYXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/Bittu06/calculator',
    liveLink: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-900">
                    <Github className="w-5 h-5 mr-1" />
                    GitHub
                  </a>
                  {project.liveLink !== '#' && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-900">
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;