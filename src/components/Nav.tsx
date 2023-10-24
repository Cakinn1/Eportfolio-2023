import React, { useState } from "react";
import { BsCircleHalf, BsFolderSymlink } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import NavList from "./NavComponents/NavList";
import NavRightBar from "./NavComponents/NavRightBar";
import { Link } from "react-router-dom";
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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
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
  <Link to="/" onClick={() => scrollToSection('home')}>
      <img
        className="object-cover click hover:border-[#888] cursor-pointer duration-500 hover:duration-500 ease-in-out border-2 border-black h-[50px] rounded-full"
        src="./logo-cakin.jpg"
        alt=""
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
             to="/" onClick={() => scrollToSection('about')}
              className={`nav__link--anchor  hover:text-[#888] duration-500 hover:duration-500 ease-in-out link__hover-effect link__hover-effect--black `}
            >
              About
            </Link>
          </li>
          <li className="nav__link click ">
            <Link
             to="/" onClick={() => scrollToSection('projects')}
              className={`nav__link--anchor   hover:text-[#888] duration-500 hover:duration-500 ease-in-out link__hover-effect link__hover-effect--black `}
            >
              Projects
            </Link>
          </li>
          <li className="nav__link click ">
            <Link
             to="/" onClick={() => scrollToSection('contact')}
              className={`nav__link--anchor   hover:text-[#888] duration-500 hover:duration-500 ease-in-out link__hover-effect link__hover-effect--black `}
            >
              Contact
            </Link>
          </li>
          <li className=" click">
            <Link to="/ExtraProjects"
              // className={`click poin  hover:text-[#888] duration-500 hover:duration-500 ease-in-out link__hover-effect link__hover-effect--black click`}
            >
              {/* <BsFolderSymlink className="fa border-rounded-full text-lg  fa-adjust" /> */}
              {/* <BsCircleHalf className="fas border-2 rounded-full text-lg border-black fa-adjust" /> */}
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
