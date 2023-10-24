import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import "./index.css";
import TypeWriter from "typewriter-effect";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import ExtraProjects from "./components/ExtraProjects";

function App() {
  const [loadingState, setLoadingState] = useState<boolean>(true);

  useEffect(() => {
    const loadingTimerId = setTimeout(() => {
      setLoadingState((prevLoading) => !prevLoading);
    }, 3000);
    return () => {
      clearTimeout(loadingTimerId);
    };
  }, []);

  return (
    <div className="overflow-x-hidden   overflow-y-scroll scroll-smooth relative">
      {loadingState ? (
        <section className="bg-[#1b1b1b]  mx-auto flex-col flex justify-center items-center h-screen">
          <div className="text-[64px] text-whte text-[#888] italic">
            <TypeWriter
              onInit={(typewriter) => {
                typewriter.typeString("< Anthony /> ").start();
              }}
            />
          </div>
        </section>
      ) : (
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/ExtraProjects" element={<ExtraProjects />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;

/// come back and chang ehte text underline on the nav

//make sure they can actually send emails
// anaimation
// black backgrounds
// fix project lower breakpoint
// maybe change animations on project
// extra: maybe add loading state based on width with time interval on mount
