import { useState } from "react";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Photobooth App",
    desc: "Photobooth: A full-stack photo-sharing platform with features like user authentication, photo uploads, albums, likes, comments, tagging, and follower system. Built using Node.js, Express, MySQL, and Sequelize.",
   tech: "React, Node.js, Express, MySQL, Sequelize",
  image: "/project_photobooth.png",
    link: "https://github.com/LikithaShree-web/Photobooth-final-" 
  },
  {
    title: "Dynamic Portfolio",
    desc: "A 3D interactive, highly polished developer portfolio featuring glassmorphism elements and royal blue aesthetics.",
    tech: "React, Three.js, CSS Variables",
    image: "/project_portfolio.png",
    link: "#"
  }
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="projects-section section-padding">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02} transitionSpeed={2000}>
                <div 
                  className="project-card"
                  onClick={() => setSelected(proj)}
                >
                  <img src={proj.image} alt={proj.title} className="project-card-image" />
                  
                  <div className="project-card-content">
                    <h3 className="project-title">{proj.title}</h3>
                    <p className="project-desc">{proj.desc}</p>
                    <p className="project-tech">{proj.tech}</p>
                    
                    <div className="project-explore">
                      Click to explore <span>→</span>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selected && (
          <div className="modal-overlay" onClick={() => setSelected(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>{selected.title}</h3>
              <p>{selected.desc}</p>
              <p className="modal-tech">{selected.tech}</p>
              
              <div className="modal-actions">
                <a href={selected.link} className="btn-primary">
                  View Live
                </a>
                <button className="btn-secondary" onClick={() => setSelected(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
