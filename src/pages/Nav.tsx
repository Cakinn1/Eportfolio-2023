import React, { useState } from "react";
import { BsCircleHalf, BsFolderSymlink } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavListProps, NavRightBarProps, NavRightListProps } from "../interfaces/interfaces";
import { FaXmark } from "react-icons/fa6";

interface NavProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: any) => void;
}

export default function Nav({ isModalOpen, setIsModalOpen }: NavProps) {
  const [rightBarAnimate, setRightBarAnimate] = useState<boolean>(false);

  const handleModal = () => {
    if (isModalOpen) {
      setRightBarAnimate(false);
      const closeModalTimeout = setTimeout(() => {
        setIsModalOpen((prevModalValue: boolean) => !prevModalValue);
      }, 500);
      return () => {
        clearTimeout(closeModalTimeout);
      };
    } else {
      setRightBarAnimate(true);
      setIsModalOpen((prevModalValue: boolean) => !prevModalValue);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white xl:bg-transparent fixed w-full z-50    animate__nav shadow-lg xl:shadow-none xl:max-w-[1024px mx-auto">
      <NavRight
        handleModal={handleModal}
        isModalOpen={isModalOpen}
        rightBarAnimate={rightBarAnimate}
      />
      <nav className="xl:mt-4 mx-auto w-full xl:bg-white rounded-md xl:shadow-lg  p-6 max-w-[1024px] h-[80px] flex justify-between items-center">
        <figure>
          <Link to="/" onClick={() => scrollToSection("home")}>
            <img
              className="object-cover click hover:border-[#888] cursor-pointer duration-500 hover:duration-500 ease-in-out border-2 border-black h-[50px] rounded-full"
              src="./logo-cakin.jpg"
              alt=""
              loading="lazy"
            />
          </Link>
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
          <li className="nav__link click ">
            <Link
              to="/"
              onClick={() => scrollToSection("about")}
              className={`nav__link--anchor  hover:text-[#888] duration-500 hover:duration-500 ease-in-out link__hover-effect link__hover-effect--black `}
            >
              About
            </Link>
          </li>
          <li className="nav__link click ">
            <Link
              to="/"
              onClick={() => scrollToSection("projects")}
              className={`nav__link--anchor   hover:text-[#888] duration-500 hover:duration-500 ease-in-out link__hover-effect link__hover-effect--black `}
            >
              Projects
            </Link>
          </li>
          <li className="nav__link click ">
            <Link
              to="/"
              onClick={() => scrollToSection("contact")}
              className={`nav__link--anchor   hover:text-[#888] duration-500 hover:duration-500 ease-in-out link__hover-effect link__hover-effect--black `}
            >
              Contact
            </Link>
          </li>
      
        </ul>
      </nav>
    </section>
  );
}

function NavRight({
  handleModal,
  isModalOpen,
  rightBarAnimate,
}: NavRightBarProps) {
  return (
    <>
      {isModalOpen && (
        <section className="fixed bg-black z-50 bg-opacity-30 h-full w-full">
          <div
            className={`absolute right-0 p-6 bg-white h-full max-w-[800px] md:w-[50vw] w-full z-50 ${
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
              <NavRightList href="#home" paragraph="Home" />
              <NavRightList href="#about" paragraph="About Me" />
              <NavRightList href="#projects" paragraph="Projects" />
              <NavRightList href="#contact" paragraph="Contact" />
            </div>
          </div>
        </section>
      )}
    </>
  );
}


function NavRightList({ paragraph, href }: NavRightListProps) {
  return (
    <a href={href} className="nav__side-bar--links block p-2">
      {paragraph}
    </a>
  );
}

function NavList({ href, paragraph, icon }: NavListProps) {
  return (
    <li className="nav__link click">
      <a
        href={href}
        className={`nav__link--anchor   hover:text-[#888] duration-500 hover:duration-500 ease-in-out link__hover-effect link__hover-effect--black click`}
      >
        {paragraph}
        {icon}
      </a>
    </li>
  );
}