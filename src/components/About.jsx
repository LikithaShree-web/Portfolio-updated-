import { useState } from "react";

export default function About() {
  const [isTyping, setIsTyping] = useState(false);

  const handleInteract = () => {
    setIsTyping(true);
    // Continue the typing animation for 2.5 seconds giving it a playful interactive feel
    setTimeout(() => setIsTyping(false), 2500);
  };

  return (
    <div className="about-section section-padding">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div 
            className="about-avatar-wrapper animate-fade-up"
            onMouseEnter={handleInteract}
            onClick={handleInteract}
            style={{ cursor: "none" }}
          >
            <div className="about-avatar-glow"></div>
            <img 
              src="/avatar.png" 
              alt="Likitha avatar" 
              className={`about-avatar ${isTyping ? "avatar-typing" : "avatar-idle"}`} 
            />
            <div className={`typing-indicator ${isTyping ? "show" : ""}`}>
              <span></span><span></span><span></span>
            </div>
          </div>
          
          <div className="about-text animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <p>
              I am an aspiring software developer with a strong passion for building interactive, user-centric web applications. Currently, I am expanding my skills in frontend technologies and robust backend architectures.
            </p>
            <p>
              A selection of my work includes Project Photobooth, a full-stack photo-sharing application designed to offer a smooth, social media–inspired user experience. 
              It allows users to create accounts, manage profiles, upload and organize photos into albums, and engage with content through likes, comments, tagging, and a follower system. 
              The frontend was developed using React for a responsive and interactive interface, while Node.js and Express handle backend logic and API integration. 
              MySQL, managed through Sequelize ORM, was used to structure and maintain relational data efficiently. 
              This project highlights my ability to design and develop scalable, end-to-end web applications with a strong focus on both functionality and user experience.
            </p>
            <p>
              When I'm not coding, I'm usually exploring new design trends or learning about the latest technologies in the web ecosystem!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}