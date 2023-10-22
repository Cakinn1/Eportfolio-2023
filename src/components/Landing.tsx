import React from "react";
import Mouse from "./LandingComponents/Mouse";
import BackgroundImage from "./LandingComponents/BackgroundImage";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";
import LandingLinks from "./LandingComponents/LandingLinks";
import TypeWriter from "typewriter-effect";

export default function Landing() {
  return (
    <>
      <BackgroundImage />
      <section
        className="container relative flex items-center p-6"
        style={{ height: `calc(100vh - 84px)` }}
      >
        <div className="font-bold">
          <h1 className="leading-none animate__header  md:text-[120px]  text-[52px] text-left  ">
            Hey <br /> <span className="text-[#888] r">I'm Anthony.</span>
          </h1>
          {/* .typeString("Software Engineer") */}
          <p className="text-[52px] animate__title">
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
            <span className="text-[#888] font-bold cursor-pointer">
              about me
            </span>
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
              href="https://docs.google.com/document/d/1ad_ZrwaocB6kb4dDSArsiPPEKfK2qAZdrhXwz5fF-lQ/edit"
              icon={<FaFilePdf />}
            />
          </div>
        </div>
        <Mouse />
      </section>
    </>
  );
}
