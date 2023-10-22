import React, { useState } from "react";
import { BsCircleHalf } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import NavList from "./NavComponents/NavList";
import NavRightBar from "./NavComponents/NavRightBar";
export default function Nav() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [rightBarAnimate, setRightBarAnimate] = useState<boolean>(false);

  const handleModal = () => {
    if (isModalOpen) {
      setRightBarAnimate(false);
      const closeModalTimeout = setTimeout(() => {
        setIsModalOpen((prevModalValue) => !prevModalValue);
      }, 500);
      return () => {
        clearTimeout(closeModalTimeout);
      };
    } else {
      setRightBarAnimate(true);
      setIsModalOpen((prevModalValue) => !prevModalValue);
    }
  };

  return (
    <section className="bg-white xl:bg-transparent fixed w-full z-50    animate__nav shadow-lg xl:shadow-none xl:max-w-[1024px mx-auto">
      <NavRightBar
        handleModal={handleModal}
        isModalOpen={isModalOpen}
        rightBarAnimate={rightBarAnimate}
      />
      <nav className="xl:mt-4 mx-auto w-full xl:bg-white rounded-md xl:shadow-lg  p-6 max-w-[1024px] h-[80px] flex justify-between items-center">
        <figure>
          <img
            className="object-cover border-2 border-black h-[50px] rounded-full"
            src="./logo-cakin.jpg"
            alt=""
          />
        </figure>
        <FaBars
          className={`text-2xl flex md:hidden cursor-pointer click ${
            isModalOpen ? "hidden" : "flex"
          }`}
          onClick={() => handleModal()}
        />
        <ul
          className={`font-semibold justify-center items-center gap-x-4 hidden md:flex ${
            isModalOpen ? "-z-50" : "z-10"
          }`}
        >
          <NavList href="#about" paragraph="About" />
          <NavList href="#projects" paragraph="Projects" />
          <NavList href="#contact" paragraph="Contact" />
          <NavList
            href="#"
            icon={
              <BsCircleHalf className="fas border-2 rounded-full text-lg border-black fa-adjust" />
            }
          />
        </ul>
      </nav>
    </section>
  );
}
