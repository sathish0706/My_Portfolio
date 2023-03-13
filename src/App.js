import Header from "./Components/Header";
import "./App.css";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
// import Projects from "./Components/Projects";
import About from "./Components/About";
import Interests from "./Components/Interests";
import ProjectsContainer from "./Components/ProjectsContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills />
      <Interests />
      <ProjectsContainer />

      <About />
    </div>
  );
}

export default App;
