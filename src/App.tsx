import AboutMe from "./components/AboutMe";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Project from "./components/Project";
import "./index.css";

function App() {
  return (
    <div className="overflow-x-hidden   overflow-y-scroll scroll-smooth relative">
      <Nav />
      <Landing />
      <AboutMe />
      <Project />
      <div className="h-screen">
        d
      </div>
    </div>
  );
}

export default App;

/// come back and chang ehte text underline on the nav
