import NavBar from "../Components/nav/NavBar";
import Projects from "../Pages/Projects";
import About from "../Pages/About";
import Contact from "../Pages/Contact";


function App() {
  return (
    <>
      <NavBar />
      <div style={{ background: "rgba(240, 240, 240, 0.1)" }}>
        <About />
      </div>
      <div style={{ background: "linear-gradient(to bottom, rgba(240, 240, 240, 0.1), gray)" }}>
        <Projects />
      </div>
      <div style={{ background: "linear-gradient(to bottom, gray, orange)" }}>
        <Contact />
      </div>
    </>
  );
}

export default App;
