import { useEffect, useRef, useState } from "react";
import AboutMe from "./components/AboutMe";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Project from "./components/Project";
import "./index.css";
import { FaTruckLoading } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import TypeWriter from "typewriter-effect";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
        <>

          <Nav />
          <Landing />
          <AboutMe />
          <Project />
          <Contact />
          <Footer />
        </>
      )}
      {/* <div className="h-screen">d</div> */}
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