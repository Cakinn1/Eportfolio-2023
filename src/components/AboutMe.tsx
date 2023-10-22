import React from "react";
import AboutMain from "./AboutComponents/AboutMain";
import TechStack from "./AboutComponents/TechStack";
import useAnimate from "./useAnimate";
import BackgroundImage from "./LandingComponents/BackgroundImage";

export default function AboutMe() {
  const {inViewPort: projectInView, ref: projectRef} = useAnimate()


const projectAnimation = projectInView && 'animate__about--me'

  return (
    <>
      <div className="relative">
        <div
          className="absolute top-[440px]  w-[1400px] rotate-90 -left-[700px] h-[650px] md:h-[700px] bg-cover -z-50 "
          style={{
            backgroundImage: `url("./wave5.svg")`,
          }}
        ></div>
      </div>
      <div className="container h-screen p-[100px] px-[24px] relative">
        <div className={` min-h-[70vh] bg-gray-100 shadow-lg   rounded-b-lg ${projectAnimation ? "animate__about--me" : "opacity-0"} `}
      ref={projectRef}>
          <div  className="border-b bg-[#e5e7eb] rounded-t-lg gap-x-4 p-4 flex items-center justify-end border-[#e5e7eb] h-12">
            <div   className="bg-green-500 w-4 rounded-full h-4"></div>
            <div className="bg-yellow-500 w-4 rounded-full h-4"></div>
            <div className="bg-red-500 w-4 rounded-full h-4"></div>
          </div>
          <div    className="p-12 flex-col md:flex-row flex gap-x-12">
            <AboutMain  />
          </div>
          <div className="p-12 text-center space-y-2 md:flex items-center gap-x-8 ">
            <h1 className="font-bold mt-2 md:flex md:items-center gap-x-2">
              Tech Stack <span className="hidden md:flex">|</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-x-4 " >
              <TechStack
                src1="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
              />
              <TechStack
                src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                src1="https://cdn.iconscout.com/icon/free/png-256/typescript-3521774-2945272.png"
              />
              <TechStack
                src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
                src1="next-js.svg"
              />
              <TechStack
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                src1="https://cdn.iconscout.com/icon/free/png-512/free-redux-283024.png?f=avif&w=256"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
