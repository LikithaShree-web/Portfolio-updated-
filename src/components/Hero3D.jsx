import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function FloatingSphere() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
    meshRef.current.rotation.x += 0.005;
    meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.5;
  });

  return (
    <mesh ref={meshRef}>
      {/* Icosahedron gives a cooler wireframe look than sphere */}
      <icosahedronGeometry args={[1.5, 1]} />
      {/* Royal blue accent color */}
      <meshStandardMaterial color="#4169e1" wireframe />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <div className="hero-section">
      <div className="hero-content animate-fade-up">
        <h1 className="hero-title">
          Hi, I'm <span>Likitha</span> 👋
        </h1>
        <p className="hero-subtitle">
          Aspiring Developer | Crafting beautiful digital experiences with React and Java
        </p>
      </div>

      <div className="canvas-container">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={2} />
          <FloatingSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    </div>
  );
}