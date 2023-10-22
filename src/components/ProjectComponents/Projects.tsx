import React, { useState } from "react";
import Project from "../Project";
import LandingLinks from "../LandingComponents/LandingLinks";
import { BsGithub, BsLink } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import ProjectLinks from "./ProjectLinks";

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
  image?: string;
  v?: boolean;
  l?: boolean;
  c?: boolean;
  t?: boolean;
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
}: ProjectProps) {
  return (
    <div className="rounded-2xl space-y-4 md:space-y-0 flex-col md:flex-row flex w-full min-h-2/5 p-8  shadow-2xl gap-x-8 bg-gray-100">
      <div className="relative  h-[320px]  rounded-2xl md:w-[500px] overflow-hidden bg-cover object-cover ">
        <img
          src={image}
          className={`shadow-lg  w-[100%] ${c && 'class3'} ${t && 'class4'} ${l && 'class2'}   object-cover rounded-2xl  ${
            v && "class1"
          }  `}
          alt=""
        />
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

        <div className="flex gap-x-6">
          <ProjectLinks href={github} icon={<BsGithub />} title="Code" />
          <ProjectLinks href={vercel} icon={<AiOutlineLink />} title="Link" />
        </div>
      </div>
    </div>
  );
}
