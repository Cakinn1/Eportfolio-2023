import React from "react";
import useAnimate from "./useAnimate";
import Projects from "./ProjectComponents/Projects";

export interface AllImagesProps {
  u1: string;
  u2: string;
  u3: string;
  u4: string;
}

export default function Project() {
  const { inViewPort: titleView, ref: titleRef } = useAnimate();
  const titleAnimate = titleView ? "animate__project" : "";

  const { inViewPort: project1View, ref: project1 } = useAnimate();
  const { inViewPort: project2View, ref: project2 } = useAnimate();
  const { inViewPort: project3View, ref: project3 } = useAnimate();
  const { inViewPort: project4View, ref: project4 } = useAnimate();
  const project1Animate = project1View ? "animate__project1" : "";
  const project2Animate = project2View ? "animate__project2" : "";
  const project3Animate = project3View ? "animate__project3" : "";
  const project4Animate = project4View ? "animate__project4" : "";

  const allImagesForCarsuel: AllImagesProps[] = [
    {
      u1: "u1.png",
      u2: "u2.png",
      u3: "u3.png",
      u4: "u4.png",
    },
  ];

  return (
    <section className="relative">
      <section
        className="container p-[80px] px-[24px] space-y-12"
        id="projects"
      >
        <div
          className={`flex font-bold text-center md:text-left justify-center items-center ${titleAnimate}`}
          ref={titleRef}
          style={{ opacity: titleView ? 1 : 0 }}
        >
          <h1 className="text-[40px]">
            Here are some of my <span className="text-[#888]">projects</span>
          </h1>
        </div>
        <div
          className={`${project1Animate}`}
          style={{ opacity: project1View ? 1 : 0 }}
        >
          <Projects
            reftest={project1}
            v={true}
            image={['u1.png', 'u2.png', 'u3.png', 'u4.png']}
            projectName="Ultraverse"
            project="Internship"
            Api="FES API"
            javaScript="Javascript"
            CSS="TailwindCSS"
            framework="React.js"
            github="https://github.com/Cakinn1/Anthony-internship"
            vercel="https://anthony-internship.vercel.app/"
            paragraph="This project was a Virtual Internship mockup where I had to create all the functionality using the data provided via an API."
          />
        </div>
        <div
          className={`${project2Animate}`}
          style={{ opacity: project2View ? 1 : 0 }}
        >
          <Projects
            l={true}
            reftest={project2}
            image={['b1.png', 'b2.png', 'b3.png', 'b4.png']}
            projectName="E-commerce Library"
            project="Personal Project"
            Api="Custom API"
            javaScript="Javascript"
            CSS="TailwindCSS"
            framework="React.js"
            github="https://github.com/Cakinn1/Ecom-Library-React"
            vercel="https://ecom-library-react-v3.vercel.app/"
            paragraph="Ecom Library: React app, versatile sorting, seamless purchases, enhanced UX, skeleton loading. Showcases UI/UX skills, algorithm implementation."
          />
        </div>
        <div
          className="absolute top-[100px]  w-[1400px] -rotate-90 -right-[700px] h-[650px] md:h-[700px] bg-cover -z-50"
          style={{ backgroundImage: `url("./wave5.svg")` }}
        ></div>
        <div
          className={`${project3Animate}`}
          style={{ opacity: project3View ? 1 : 0 }}
        >
          <Projects
            c={true}
            reftest={project3}
            image={["r1.png","r2.png","r3.png","r4.png",]}
            projectName="Car Rental"
            project="Personal Project"
            Api="Custom API"
            javaScript="Javascript"
            CSS="TailwindCSS"
            firebase="Firebase"
            framework="React.js"
            redux="redux"
            github="https://github.com/Cakinn1/carRental-app"
            vercel="https://car-rental-app-mu.vercel.app/"
            paragraph="Revolutionize car rentals with a React TypeScript app featuring 6 dynamic pages, Redux-powered state management, and secure Firebase authentication."
          />
        </div>
        <div
          className="absolute top-[1400px]  w-[1400px] rotate-90 -left-[700px] h-[650px] md:h-[700px] bg-cover -z-50"
          style={{ backgroundImage: `url("./wave5.svg")` }}
        ></div>
        <div
          className={`${project4Animate}`}
          style={{ opacity: project4View ? 1 : 0 }}
        >
          <Projects
            t={true}
            reftest={project4}
            image={["t1.png","t2.png","t3.png","t4.png",]}
            redux="redux"
            projectName="Twitter Clone"
            project="Personal Project"
            javaScript="Javascript"
            firebase="Firebase"
            CSS="TailwindCSS"
            framework="Next.js"
            github="https://github.com/Cakinn1/twitter-clone"
            vercel="https://twitter-clone-cakinn1.vercel.app/"
            paragraph="A Twitter Clone featuring a responsive UI, real-time data sync, secure authentication, and comprehensive CRUD functionality."
          />
        </div>
      </section>
    </section>
  );
}
