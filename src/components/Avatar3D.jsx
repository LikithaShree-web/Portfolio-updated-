import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import Model from "./Model";

// Loading component
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-white">
        <div className="w-8 h-8 border-4 border-t-white border-white/20 rounded-full animate-spin mb-2"></div>
        <p className="text-sm font-medium">{progress.toFixed(0)}%</p>
      </div>
    </Html>
  );
}

export default function Avatar3D({ url = "/avatar-animated.glb" }) {
  return (
    <div className="w-full h-full min-h-[400px] relative canvas-container cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 1, 5], fov: 45 }}
        shadows
        gl={{ preserveDrawingBuffer: true, antialias: true }}
      >
        {/* Basic lighting for the 3D scene */}
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow 
          shadow-mapSize={1024}
        />
        <pointLight position={[-5, 5, -5]} intensity={0.5} />
        <spotLight 
          position={[0, 5, 5]} 
          angle={0.3} 
          penumbra={1} 
          intensity={1} 
          castShadow 
        />

        <Suspense fallback={<Loader />}>
          {/* We wrap the model in a group to easily position/scale it globally if needed */}
          <group position={[0, -1, 0]}>
            <Model url={url} />
          </group>
        </Suspense>

        {/* OrbitControls allows the user to rotate the model by dragging */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2 + 0.1}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
