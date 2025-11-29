import "./app.scss";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/Parallax/Parallax";
import Services from "./components/services/Services";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import Technology from "./components/Tech/Technology";
function App() {
  return (
    <>
      <Cursor />
      <section id="Home">
        <NavBar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="Services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Projects">
        <Parallax type="Projects" />
      </section>
      <Project />
      <section id="Tools">
        <Technology />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
