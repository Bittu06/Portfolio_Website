import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

function RotatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Box ref={meshRef} args={[1, 1, 1]}>
      <meshStandardMaterial color="hotpink" />
    </Box>
  );
}

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm Bittu Dey
          </h1>
          <p className="text-xl mb-8">
            A passionate Full Stack Developer showcasing my skills and projects
          </p>
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Get in touch
          </a>
        </div>
        <div className="md:w-1/2 h-64">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <RotatingCube />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;