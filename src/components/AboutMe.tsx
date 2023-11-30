import { RefObject } from "react";
import useAnimate from "../hooks/useAnimate";
import { TechStackProps } from "../interfaces/interfaces";

export default function AboutMe() {
  const { inViewPort: projectInView, ref: projectRef } = useAnimate();

  const projectAnimation = projectInView && "animate__about--me";

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
      <div className="container  p-[100px] px-[24px] relative" id="about">
        <div
          className={` min-h-[70vh] bg-gray-100 shadow-lg   rounded-b-lg ${
            projectAnimation ? "animate__about--me" : "opacity-0"
          } `}
        >
          <div className="border-b bg-[#e5e7eb] rounded-t-lg gap-x-4 p-4 flex items-center justify-end border-[#e5e7eb] h-12">
            <div className="bg-green-500 w-4 rounded-full h-4"></div>
            <div className="bg-yellow-500 w-4 rounded-full h-4"></div>
            <div className="bg-red-500 w-4 rounded-full h-4"></div>
          </div>
          <div className="p-12 flex-col md:flex-row flex gap-x-12">
            <AboutMain projectRef={projectRef} />
          </div>
          <div className="p-12 text-center space-y-2 md:flex items-center gap-x-8 ">
            <h1 className="font-bold mt-2 md:flex md:items-center gap-x-2">
              Tech Stack <span className="hidden md:flex">|</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-x-4 ">
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

function TechStack({ src, src1 }: TechStackProps) {
  return (
    <div className="flex mb-4  md:mb-0 gap-x-2">
      <img
        className="rounded-lg shadow-md click w-11 cursor-pointer h-11  "
        src={src}
        alt=""
      />
      <img
        className="rounded-lg shadow-md click w-11 h-11 cursor-pointer"
        src={src1}
        alt=""
      />
    </div>
  );
}

function AboutMain({ projectRef }: { projectRef: RefObject<HTMLDivElement>; }) {
  return (
    <>
      <div className="w-full md:w-1/2 mb-6 md:mb-0 relative h-full">
        <img
          src="./about-me-image.webp"
          className="object-cover min-h-[400px] hidden md:flex  w-full "
          alt=""
        />
        <img
          src="1.png"
          className="md:absolute bg-right md:w-[120px] mx-auto w-[200px]  rounded-full md:-bottom-8 md:-right-5 border-4 border-white "
          alt=""
        />
      </div>
      <div className="w-full md:w-1/2 space-y-3 text-[#888] text-sm">
        <header className="uppercase font-bold text-black">About me</header>
        <h1 className="font-bold text-[20px] text-black">
          A dedicted Front-end Developer based in Gold Coast, Australia. 📍
        </h1>
        <p>
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML, CSS, JavaScript, Typescript, React, Nextjs, Redux and
          Tailwind CSS.
        </p>
        <p>
          I excel in designing and maintaining responsive websites that offer a
          smooth user experience.
        </p>
        <p ref={projectRef}>
          My expertise lies in crafting dynamic, engaging interfaces through
          writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </div>
    </>
  );
}
