import "./App.css";
import Hero from "./components/sections/hero/Hero";
import About from "./components/sections/about/About";
import Project from "./components/sections/project/Project";
import ContactMe from "./components/sections/contact/Contact";
import Skills from "./components/sections/skills/Skills";
import Footer from "./components/sections/footer/Footer";
import Navbar from "./components/molecules/navbar/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Skills />
        <ContactMe />
        <Footer />
      </main>
    </>
  );
}

export default App;
