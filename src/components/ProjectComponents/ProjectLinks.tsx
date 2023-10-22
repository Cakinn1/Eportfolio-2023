import React, { ReactElement } from "react";

export interface ProjectLinksProps {
  icon: ReactElement;
  href: string;
  title: string;
}

export default function ProjectLinks({ href, icon, title }: ProjectLinksProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="py-2 px-3 rounded-full  bg-white gap-x-2 flex justify-center click items-center"
    >
      <p>{title}</p>
      <p className="cursor-pointer shadow-2xl text-black rounded-full">
        {icon}
      </p>
    </a>
  );
}
