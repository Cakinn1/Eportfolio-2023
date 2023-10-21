import React from "react";
import Mouse from "./LandingComponents/Mouse";
import BackgroundImage from "./LandingComponents/BackgroundImage";
import { BsFilePdf, BsFilePdfFill, BsTwitter } from "react-icons/bs";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";
import LandingLinks from "./LandingComponents/LandingLinks";

export default function Landing() {
  return (
    <>
      <BackgroundImage />
      <section
        className="container relative flex items-center p-6"
        style={{ height: `calc(100vh - 84px)` }}
      >
        <div className="font-bold">
          <h1 className="leading-none  md:text-[120px]  text-[52px] text-left  ">
            Hey <br className="" />{" "}
            <span className="text-[#888]">I'm Anthony.</span>
          </h1>
          <p className="text-[52px]">Frontend Engineer</p>
          <p className="text-[24px] font-semibold">
            Find out more{" "}
            <span className="text-[#888] font-bold cursor-pointer">
              about me
            </span>
          </p>
          <div className="flex gap-x-4 mt-1">
           <LandingLinks href="https://www.linkedin.com/in/anthony-cakin/" icon={<FaLinkedinIn />} />
            <div className="p-4 bg-white cursor-pointer click shadow-2xl text-black rounded-full">
              <FaLinkedinIn className="" />
            </div>
            <div className="p-4 bg-white cursor-pointer click shadow-2xl text-black rounded-full">
              <FaGithub className="" />
            </div>
            <div className="p-4 bg-white cursor-pointer click shadow-2xl text-black rounded-full">
            <FaFilePdf />
            </div>
          </div>
        </div>
        <Mouse />
      </section>
    </>
  );
}
