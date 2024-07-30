import "./App.css";
// import Board from "./components/Board";
// import { DATA } from "./cv/cv";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import ContactMe from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      {/* <section className="home" id="home">
        <div className="app-container">
          <Board />
        </div>
      </section> */}
      {/* <Navbar /> */}
      <main>
        <Hero />
        <Project />
        <Skills />
        <About />
        <ContactMe />
      </main>
    </>
  );
}

export default App;
