import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLeft, AiOutlineLink, AiOutlineRight } from "react-icons/ai";
import { ProjectDataProps, ProjectLinksProps } from "../interfaces/interfaces";

export default function Projects({
  imageInView,
  information,
  links,
  technologies,
  image,
  projectName,
  refTest,
}: ProjectDataProps) {
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
    <div className="rounded-2xl space-y-4 md:space-y-0 flex-col md:flex-row flex w-full min-h-2/5 p-8  shadow-md gap-x-8 bg-gray-100">
      <div className="relative  h-[320px]  rounded-2xl md:w-[500px] overflow-hidden flex bg-cover object-cover ">
        {imageInView && (
          <>
            {image.map((item, index) => (
              <img
                key={index}
                className="object-contain hover:scale-150 "
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

      <div className="md:w-[46%] flex space-y-4  items-center text-center flex-col">
        <div className="flex gap-x-2">
          <h1 className="font-bold text-2xl">
            <span>{projectName}</span>
          </h1>
        </div>
        {technologies.map((item, index) => (
          <div
            key={index}
            className="hidden md:flex gap-x-2 justify-center items-center text-[10px] flex-wrap"
          >
            {Object.entries(item).map(
              ([key, value]) =>
                value && (
                  <p
                    key={key}
                    className="flex rounded-md text-xs sm:text-sm px-3 py-1 bg-gray-200 mb-2"
                  >
                    {value}
                  </p>
                )
            )}
          </div>
        ))}
        <p className="text-[#888] ">{information}</p>

        <div className="flex gap-x-6" ref={refTest}>
          <ProjectLinks
            reftest={refTest}
            href={links.github}
            icon={<BsGithub />}
            title="Code"
          />
          <ProjectLinks
            href={links.vercel}
            icon={<AiOutlineLink />}
            title="Link"
          />
        </div>
      </div>
    </div>
  );
}

function ProjectLinks({
  href,
  icon,
  title,
  notProject,
}: ProjectLinksProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="py-2 px-3 rounded-full  bg-white gap-x-2 flex justify-center click items-center"
    >
      {notProject ? "" : <p>{title}</p>}
      <p className="cursor-pointer shadow-2xl text-black rounded-full">
        {icon}
      </p>
    </a>
  );
}
