import { useEffect, useState } from "react";
import Nav from "./Nav";
import "../styles/global.css";
import TypeWriter from "typewriter-effect";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import ExtraProjects from "../TBD/ExtraProjects";

function App() {
  const [loadingState, setLoadingState] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const loadingTimerId = setTimeout(() => {
      setLoadingState((prevLoading) => !prevLoading);
    }, 3000);
    return () => {
      clearTimeout(loadingTimerId);
    };
  }, []);

  return (
    <div className="overflow-x-hidden overflow-y-hidden scroll-smooth relative">
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
          <Router>
            <Nav isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                  />
                }
              />
              <Route path="/ExtraProjects" element={<ExtraProjects />} />
            </Routes>
            <Footer />
          </Router>
        </>
      )}
    </div>
  );
}

export default App;

/*
 Maybe add underlines within nav text
 could add more animations
 extra: maybe add loading state based on width with time interval on mount
implement modal for twitter clone link on how to not be alarmed when,
seeing the 'DECEPTIVE SITE AHEAD', make a modal on what to do and why
it says this

* {
   maybe add second page with more projects like secondary portfolio.
  }
*/



// fix loading state ot eb the same as  busy bee