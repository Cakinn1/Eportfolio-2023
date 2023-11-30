import Landing from "../components/Landing";
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";
import Contact from "../components/Contact";
import { GrMail } from "react-icons/gr";
import useAnimate from "../hooks/useAnimate";
import { useEffect, useState } from "react";

interface NavProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: any) => void;
}

export default function Main({ isModalOpen, setIsModalOpen }: NavProps) {
  const { inViewPort: mailInView, ref: mailRef } = useAnimate();

  const animate = mailInView ? "animate__mail" : "";

  return (
    <>
      {!isModalOpen && (
        <a
          ref={mailRef}
          href="#contact"
          style={{ opacity: mailInView ? 1 : 0 }}
          className={`${animate} fixed bottom-6  click right-6 text-white x p-5 px-5 rounded-full z-50 bg-[#1b1b1b]`}
        >
          <GrMail className="text-2xl" />
        </a>
      )}
      <Landing />
      <AboutMe />
      <Project />
      <Contact />
    </>
  );
}
