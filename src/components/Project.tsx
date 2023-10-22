import React from "react";
import useAnimate from "./useAnimate";
import Projects from "./ProjectComponents/Projects";
export default function Project() {
  const { inViewPort: titleView, ref: titleRef } = useAnimate();
  const titleAnimate = titleView && `animate__project`;

  const { inViewPort: project1View, ref: project1 } = useAnimate();
  const { inViewPort: project2View, ref: project2 } = useAnimate();
  const { inViewPort: project3View, ref: project3 } = useAnimate();
  const { inViewPort: project4View, ref: project4 } = useAnimate();
  const project1Animate = project1View && `animate__project1`;
  const project2Animate = project2View && `animate__project2`;
  const project3Animate = project3View && `animate__project3`;
  const project4Animate = project4View && `animate__project4`;

  return (
    <section className="container   p-[80px] px-[24px] space-y-12">
      <div className="flex font-bold justify-center items-center">
        <h1 className={`text-[40px] ${titleAnimate}`} ref={titleRef}>
          Here are some of my <span className="text-[#888]">projects</span>
        </h1>
      </div>
      <div className={`${project1Animate} `} ref={project1}>
        <Projects
        image='v.png'
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
      <div className={`${project2Animate} `} ref={project2}>
        <Projects
         image="/carTest.webp"
          projectName="E-commerce Library"
          project="Personal Project"
          Api="Custom API"
          javaScript="Javascript"
          CSS="TailwindCSS"
          framework="React.js"
          github="https://github.com/Cakinn1/Ecom-Library-React"
          vercel="https://ecom-library-react-v3.vercel.app/"
          paragraph="Ecom Library: React app, versatile sorting, seamless purchases, enhanced UX, skeleton loading. Showcases UI/UX skills, algorithm implementation.
        
        "
        />
      </div>
      <div className={`${project3Animate} `} ref={project3}>
        <Projects
          image="/carTest.webp"
          projectName="Car Rental"
          project="Personal Project"
          Api="Custom API"
          javaScript="Javascript"
          CSS="TailwindCSS"
          firebase="Firebase"
          typeScript="TypeScript"
          framework="React.js"
          github="https://github.com/Cakinn1/carRental-app"
          vercel="https://car-rental-app-mu.vercel.app/"
          paragraph="Revolutionize car rentals with a React TypeScript app featuring 6 dynamic pages, Redux-powered state management, and secure Firebase authentication."
        />
      </div>
      <div className={`${project4Animate} `} ref={project4}>
        <Projects
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
  );
}
// export interface ProjectProps {
//   title: string;
//   paragraph: string;
//   framework?: string;
//   CSS?: string;
//   javaScript?: string;
//   typeScript?: string;
//   redux?: string;
//   Api?: string;
//   firebase: string;
//   projectName: string;
//   project: string;
//   github: string;
//   vercel: string;
// }
