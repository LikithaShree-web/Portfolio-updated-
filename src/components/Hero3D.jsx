import { useState } from "react";
import Tilt from "react-parallax-tilt";
import Avatar3D from "./Avatar3D";

export default function Hero3D() {
  const [clicked, setClicked] = useState(false);

  const handleDollClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1000); // Reset animation state after 1 second
  };

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

      <div className="canvas-container doll-container">
        {/* We replaced the 2D Tilt image with the new interactive 3D Avatar! */}
        <Avatar3D />
        
        <p className="doll-hint">Psst... drag to rotate me!</p>
      </div>
    </div>
  );
}