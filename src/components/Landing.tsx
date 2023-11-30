import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";
import TypeWriter from "typewriter-effect";
import useAnimate from "../hooks/useAnimate";
import { LandingLinksProps } from "../interfaces/interfaces";

export default function Landing() {
  return (
    <>
      <BackgroundImage />
      {/*
      // Fix this later, this will be improved side bar
      <div className="relative max-w-[1300px] z-50 mx-auto">
        <div className="fixed mr-[90%] h-[262px] lg:mr-[1200px]   w-[7%] mt-[30vh]   flex flex-col items-center justify-between">
          <div className="f border border-black rounded-full w-6 h-6"></div>
          <div className="f border border-black rounded-full w-6 h-6"></div>
          <div className="f border border-black rounded-full w-6 h-6"></div>
        </div>
        <div className="fixed ml-[90%] lg:ml-[1200px] text-white w-[10%] lg:w-[7%] mt-[30vh] h-[262px] flex flex-col items-center justify-between">
          <div className="f border border-green-500 rounded-full w-6 h-6"></div>
          <div className="f border border-green-500 rounded-full w-6 h-6"></div>
          <div className="f border border-green-500 rounded-full w-6 h-6"></div>
        </div>
      </div> */}
      <section
        className="container  relative flex items-center p-6"
        id="home"
        style={{ height: `calc(100vh - 84px)` }}
      >
        <div className="font-bold ">
          <h1 className="leading-none animate__header  md:text-[120px]  text-[52px] text-left  ">
            Hey <br /> <span className="text-[#888] r">I'm Anthony.</span>
          </h1>
          <p className="md:text-[52px] text-[36px] animate__title">
            <TypeWriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Frontend Engineer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Frontend Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Software Engineer")
                  .start();
              }}
            />
          </p>
          <p className="text-[24px] font-semibold animate__about">
            Find out more{" "}
            <a href="#about">
              <span className="text-[#888] font-bold cursor-pointer">
                about me
              </span>
            </a>
          </p>
          <div className="flex gap-x-4 mt-1 animate__links">
            <LandingLinks
              href="https://www.linkedin.com/in/anthony-cakin/"
              icon={<FaLinkedinIn />}
            />
            <LandingLinks
              href="https://github.com/Cakinn1"
              icon={<FaGithub />}
            />
            <LandingLinks
              href="https://docs.google.com/document/d/1nr0BbmL9dMnSc6VOzTUdeh5AxknSbB8c/edit"
              icon={<FaFilePdf />}
            />
          </div>
        </div>
        <Mouse />
      </section>
    </>
  );
}

function Mouse() {
  const handleMouseClick = () => {
    window.scrollTo({ top: 790, behavior: "smooth" });
  };
  const { inViewPort: inView, ref: refInView } = useAnimate();
  return (
    <div
      onClick={() => handleMouseClick()}
      ref={refInView}
      className={` click absolute   animate__mouse cursor-pointer  flex justify-center items-center border-2 border-black w-6 rounded-t-full rounded-b-full h-10 bottom-14 left-1/2 -translate-x-1/2`}
    >
      <div className={` bg-black scroll-up h-2  rounded-full w-1`}></div>
    </div>
  );
}

 function LandingLinks({href, icon}: LandingLinksProps) {
    return (
      <a href={href} target="_blank" className="p-4 bg-white cursor-pointer click shadow-2xl hover:text-[#888]  text-black rounded-full">
          {icon}
      </a>
    );
  }

 function BackgroundImage() {
    return (
      <div
        className="absolute top-0 pointer-events-none w-[1000px] md:w-[1200px] lg:w-[1400px] rotate-90 -right-[640px] h-[650px] md:h-[700px] bg-cover -z-50 "
        style={{ backgroundImage: `url("./wave4.svg")` }}
      ></div>
    );
  }