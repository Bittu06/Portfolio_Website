import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="professional.image.jpg"
              alt="Bittu Dey"
              className="rounded-full w-64 h-64 object-cover mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              I'm Bittu Dey, a passionate Full Stack Developer with a strong
              background in web technologies. My journey in the world of
              programming started with a B.Tech in Computer Science and
              Engineering from Techno India University, West Bengal.
            </p>
            <p className="text-lg mb-4">
              I have experience working with various technologies including
              HTML, CSS, JavaScript, React, Node.js, and more. I'm always eager
              to learn and stay updated with the latest trends in web
              development.
            </p>
            <p className="text-lg">
              Let's connect and create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
