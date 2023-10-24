import Landing from "./Landing";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Contact from "./Contact";
import { GrMail } from "react-icons/gr";

export default function Main() {

  return (
    <>
      <a
        href="#contact"
        className="fixed click right-6 text-white bottom-6 p-5 px-5 rounded-full z-50 bg-[#1b1b1b]"
      >
        <GrMail className="text-2xl" />
      </a>
      <Landing />
      <AboutMe />
      <Project />
      <Contact />
    </>
  );
}
