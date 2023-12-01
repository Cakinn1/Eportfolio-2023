import { RefObject } from "react";
import useAnimate from "../hooks/useAnimate";
import Projects from "./Projects";
import { ProjectDataProps } from "../interfaces/interfaces";

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
  const data: ProjectDataProps[] = [
    {
      image: ["u1.png", "u2.png", "u3.png", "u4.png"],
      information:
        "Ultraverse is my internship project built with React.js, tailwind & axios. During this internship i learnt how to create detail pull request, read documentation and explain why i programmed a feature.",
      links: {
        github: "https://github.com/Cakinn1/Anthony-internship",
        vercel: "https://anthony-internship.vercel.app/",
      },
      projectName: "Ultraverse",
      technologies: [
        {
          framework: "React.js",
          css: "Tailwind",
          Api: "FES Api",
          fireBase: "",
          javasScript: "",
          redux: "",
          typeScript: "",
        },
      ],
      imageInView: "ULTRAVERSE",
      refTest: project1,
      projectAnimate: project1Animate,
      projectInView: project1View,
    },
    {
      image: [
        "BUSY_BEE_PHOTO_1.png",
        "BUSY_BEE_PHOTO_2.png",
        "BUSY_BEE_PHOTO_3.png",
        "BUSY_BEE_PHOTO_4.png",
      ],
      information:
        "Busy Bee is a social media web application I built to practise Next.js, Tailwind, Redux and Firebase. Features include CRUD functionality, posts, user authentication, likes, comments and server-side rendering",
      links: {
        github: "https://github.com/Cakinn1/Busy-Bee",
        vercel: "https://busy-bee-opal.vercel.app/",
      },
      projectName: "Busy Bee",
      technologies: [
        {
          framework: "Next.js",
          typeScript: "",
          javasScript: "",
          css: "Tailwind",
          redux: "Redux",
          fireBase: "FireBase",
          Api: "",
        },
      ],
      imageInView: "BUSY_BEE",
      refTest: project4,
      projectAnimate: project4Animate,
      projectInView: project4View,
    },
    {
      // Ecom Library: React app, versatile sorting, seamless purchases, enhanced UX, skeleton loading. Showcases UI/UX skills, algorithm implementation.
      image: ["b1.png", "b2.png", "b3.png", "b4.png"],
      information:
        "Library is a E-commerece site i developed to further knowledge on React.js & UI/UX Deisgn. The site features stunning and responsive UI, skeleton loading states & cart functionalities.",
      links: {
        github: "https://github.com/Cakinn1/Ecom-App-lib",
        vercel: "https://ecom-app-lib.vercel.app/",
      },
      projectName: "Library",
      technologies: [
        {
          framework: "React.js",
          typeScript: "",
          javasScript: "",
          css: "",
          Api: "",
          fireBase: "",
          redux: "",
        },
      ],
      imageInView: "LIBRARY",
      refTest: project2,
      projectAnimate: project2Animate,
      projectInView: project2View,
    },
    {
      image: ["r1.png", "r2.png", "r3.png", "r4.png"],
      information:
        "Car Rental is a online car booking website created with React.js, Typescript Redux & Tailwind. Features include 6 dynamic pages, Firebase authentication, car booking & responsive UI",
      links: {
        github: "https://github.com/Cakinn1/carRental-app",
        vercel: "https://car-rental-app-mu.vercel.app/",
      },
      projectName: "Car Rental",
      technologies: [
        {
          framework: "React.js",
          typeScript: "TypeScript",
          javasScript: "",
          css: "Tailwind",
          redux: "Redux",
          Api: "",
          fireBase: "",
        },
      ],
      imageInView: "TBD",
      refTest: project3,
      projectAnimate: project3Animate,
      projectInView: project3View,
    },
  ];

  return (
    <section className="relative ">
      <section
        className="container   p-[80px] px-[24px] space-y-12"
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
        {data.map((projectData) => (
          <div
            className={`${projectData.projectAnimate} `}
            style={{ opacity: projectData.projectInView ? 1 : 0 }}
            key={projectData.projectName}
          >
            <Projects {...projectData} />
          </div>
        ))}
        <BackgroundImages isRightImage={true} />
        <BackgroundImages isRightImage={false} />
      </section>
    </section>
  );
}

function BackgroundImages({ isRightImage }: { isRightImage: boolean }) {
  return (
    <div
      className={`absolute   w-[1400px]  h-[650px] md:h-[700px] bg-cover -z-50 ${
        isRightImage
          ? "-rotate-90 -right-[700px] top-[100px]"
          : "rotate-90  top-[1400px] -left-[700px]"
      }`}
      style={{ backgroundImage: `url("./wave5.svg")` }}
    ></div>
  );
}
