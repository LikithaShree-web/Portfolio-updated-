export default function About() {
  return (
    <div className="about-section section-padding">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-avatar-wrapper animate-fade-up">
            <div className="about-avatar-glow"></div>
            <img src="/avatar.png" alt="Likitha avatar" className="about-avatar" />
          </div>
          
          <div className="about-text animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <p>
              I am an aspiring software developer with a strong passion for building interactive, user-centric web applications. Currently, I am expanding my skills in frontend technologies and robust backend architectures.
            </p>
            <p>
              I'm actively working on a Skill Exchange platform to connect students, while constantly sharpening my Data Structures and Algorithms (DSA) proficiency and Javascript capabilities.
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