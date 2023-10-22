import React from "react";

export interface TechStackProps {
  src: string;
  src1: string;
}
export default function TechStack({ src, src1 }: TechStackProps) {
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
