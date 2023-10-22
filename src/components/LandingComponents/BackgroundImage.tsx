import React from "react";

export default function BackgroundImage() {
  return (
    <div
      className="absolute top-0 pointer-events-none w-[1000px] md:w-[1200px] lg:w-[1400px] rotate-90 -right-[640px] h-[650px] md:h-[700px] bg-cover -z-50 "
      style={{ backgroundImage: `url("./wave4.svg")` }}
    ></div>
  );
}
