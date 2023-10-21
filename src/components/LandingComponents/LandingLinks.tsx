import React, { ReactElement } from "react";
import { BsTwitter } from "react-icons/bs";


export interface LandingLinksProps {
href: string
icon: ReactElement
}
export default function LandingLinks({href, icon}: LandingLinksProps) {
  return (
    <a href={href} target="_blank" className="p-4 bg-white cursor-pointer click shadow-2xl text-black rounded-full">
        {icon}
    </a>
  );
}
