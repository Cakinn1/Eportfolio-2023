import React from "react";

import { FaXmark } from "react-icons/fa6";
import { NavRightBarProps } from "../Types/typings";
import NavRightList from "./NavRightList";

export default function NavRightBar({
  handleModal,
  isModalOpen,
  rightBarAnimate,
}: NavRightBarProps) {
  return (
    <>
      {isModalOpen && (
        <section className="fixed bg-black bg-opacity-30 h-full w-full">
          <div
            className={`absolute right-0 p-6 bg-white h-full max-w-[600px] md:w-[50vw] w-[60vw] z-50 ${
              rightBarAnimate
                ? "animate__Right--Bar"
                : "animate__Right--Bar-close"
            }`}
          >
            <FaXmark
              className="ml-auto text-2xl nav__side-bar--links cursor-pointer click "
              onClick={() => handleModal()}
            />
            <div className="mt-10 space-y-2  text-lg cursor-pointer">
              <NavRightList paragraph="Home" />
              <NavRightList paragraph="About Me" />
              <NavRightList paragraph="Projects" />
              <NavRightList paragraph="Testimonials" />
              <button className="bg-black w-full py-3 shadow-2xl text-white hover:bg-white border hover:text-black ease-in-out border-black transition-colors duration-500 hover:duration-500">
                Contact
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
