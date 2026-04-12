import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Hero3D />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
      </main>
    </>
  );
}

export default App;