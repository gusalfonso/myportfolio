import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import ContactMe from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

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
