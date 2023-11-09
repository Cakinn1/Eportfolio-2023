import React, { useState } from "react";
import Project, { AllImagesProps } from "../Project";
import LandingLinks from "../LandingComponents/LandingLinks";
import { BsGithub, BsLink } from "react-icons/bs";
import { AiOutlineLeft, AiOutlineLink, AiOutlineRight } from "react-icons/ai";
import ProjectLinks from "./ProjectLinks";
import { BiRightArrow } from "react-icons/bi";

export interface ProjectProps {
  paragraph: string;
  framework?: string;
  CSS?: string;
  javaScript?: string;
  typeScript?: string;
  redux?: string;
  Api?: string;
  firebase?: string;
  projectName: string;
  project: string;
  github: string;
  vercel: string;
  image: string[];
  v?: boolean;
  l?: boolean;
  c?: boolean;
  t?: boolean;
  reftest?: any;
}

export default function Projects({
  paragraph,
  firebase,
  projectName,
  project,
  Api,
  CSS,
  framework,
  javaScript,
  redux,
  typeScript,
  github,
  vercel,
  image,
  v,
  c,
  l,
  t,
  reftest,
}: ProjectProps) {
  // const [images, setImages] = useState<string[]>([
  //   "u1.png",
  //   "u2.png",
  //   "u3.png",
  //   "u4.png",
  // ]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function handleNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex === image.length - 1 ? (prevIndex = 0) : prevIndex + 1
    );
  }

  function handlePrevious() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? (prevIndex = image.length - 1) : prevIndex - 1
    );
  }

  return (
    <div className="rounded-2xl space-y-4 md:space-y-0 flex-col md:flex-row flex w-full min-h-2/5 p-8  shadow-2xl gap-x-8 bg-gray-100">
      <div className="relative  h-[320px]  rounded-2xl md:w-[500px] overflow-hidden flex bg-cover object-cover ">
        {v && (
          <>
            {image.map((item, index) => (
              <img
                key={index}
                src={item}
                style={{
                  transitionDuration: "1s",
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
                alt="0.0"
              />
            ))}
            <div
              className="absolute right-4 top-[50%] bg-black bg-opacity-40 cursor-pointer click rounded-full text-white text-lg p-1 "
              onClick={() => handleNext()}
            >
              <AiOutlineRight />
            </div>
            <div
              className="absolute left-4 top-[50%] bg-black bg-opacity-40 cursor-pointer click rounded-full text-white text-lg p-1 "
              onClick={() => handlePrevious()}
            >
              <AiOutlineLeft />
            </div>
          </>
        )}

        {l && (
          <>
            {image.map((item, index) => (
              <img
                key={index}
                src={item}
                style={{
                  transitionDuration: "1s",
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
                alt="0.0"
              />
            ))}
            <div
              className="absolute right-4 top-[50%] bg-black bg-opacity-40 cursor-pointer click rounded-full text-white text-lg p-1 "
              onClick={() => handleNext()}
            >
              <AiOutlineRight />
            </div>
            <div
              className="absolute left-4 top-[50%] bg-black bg-opacity-40 cursor-pointer click rounded-full text-white text-lg p-1 "
              onClick={() => handlePrevious()}
            >
              <AiOutlineLeft />
            </div>
          </>
        )}

{l && (
          <>
            {image.map((item, index) => (
              <img
                key={index}
                src={item}
                style={{
                  transitionDuration: "1s",
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
                alt="0.0"
              />
            ))}
            <div
              className="absolute right-4 top-[50%] bg-black bg-opacity-40 cursor-pointer click rounded-full text-white text-lg p-1 "
              onClick={() => handleNext()}
            >
              <AiOutlineRight />
            </div>
            <div
              className="absolute left-4 top-[50%] bg-black bg-opacity-40 cursor-pointer click rounded-full text-white text-lg p-1 "
              onClick={() => handlePrevious()}
            >
              <AiOutlineLeft />
            </div>
          </>
        )}

{c && (
          <>
            {image.map((item, index) => (
              <img
                key={index}
                src={item}
                style={{
                  transitionDuration: "1s",
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
                alt="0.0"
              />
            ))}
            <div
              className="absolute right-4 top-[50%] bg-black bg-opacity-40 cursor-pointer click rounded-full text-white text-lg p-1 "
              onClick={() => handleNext()}
            >
              <AiOutlineRight />
            </div>
            <div
              className="absolute left-4 top-[50%] bg-black bg-opacity-40 cursor-pointer click rounded-full text-white text-lg p-1 "
              onClick={() => handlePrevious()}
            >
              <AiOutlineLeft />
            </div>
          </>
        )}


{t && (
          <>
            {image.map((item, index) => (
              <img
                key={index}
                src={item}
                style={{
                  transitionDuration: "1s",
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
                alt="0.0"
              />
            ))}
            <div
              className="absolute right-4 top-[50%] bg-black bg-opacity-40 cursor-pointer click rounded-full text-white text-lg p-1 "
              onClick={() => handleNext()}
            >
              <AiOutlineRight />
            </div>
            <div
              className="absolute left-4 top-[50%] bg-black bg-opacity-40 cursor-pointer click rounded-full text-white text-lg p-1 "
              onClick={() => handlePrevious()}
            >
              <AiOutlineLeft />
            </div>
          </>
        )}
      </div>

      <div className=" md:w-[40%] flex space-y-4  items-center text-center flex-col">
        <div className="flex gap-x-2">
          <h1 className="font-bold text-lg">
            {projectName} - <span>{project}</span>
          </h1>
        </div>
        <p className="text-[#888] ">{paragraph}</p>
        <div className="hidden md:flex gap-x-3 justify-center items-center text-[10px] flex-wrap">
          {framework && (
            <p className="text-[14px] bg-white border rounded-md shadow-md px-3 py-1 mb-2">
              {framework}
            </p>
          )}
          {CSS && (
            <p className="text-[14px] bg-white border rounded-md shadow-md px-3 py-1 mb-2">
              {CSS}
            </p>
          )}
          {javaScript && (
            <p className="text-[14px] bg-white border rounded-md shadow-md px-3 py-1 mb-2">
              {javaScript}
            </p>
          )}
          {typeScript && (
            <p className="text-[14px] bg-white border rounded-md shadow-md px-3 py-1 mb-2">
              {typeScript}
            </p>
          )}
          {redux && (
            <p className="text-[14px] bg-white border rounded-md shadow-md px-3 py-1 mb-2">
              {redux}
            </p>
          )}
          {Api && (
            <p className="text-[14px] bg-white border rounded-md shadow-md px-3 py-1 mb-2">
              {Api}
            </p>
          )}
          {firebase && (
            <p className="text-[14px] bg-white border rounded-md shadow-md px-3 py-1 mb-2">
              {firebase}
            </p>
          )}
        </div>

        <div className="flex gap-x-6" ref={reftest}>
          <ProjectLinks
            reftest={reftest}
            href={github}
            icon={<BsGithub />}
            title="Code"
          />
          <ProjectLinks href={vercel} icon={<AiOutlineLink />} title="Link" />
        </div>
      </div>
    </div>
  );
}
