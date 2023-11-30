import { BsFilePdfFill, BsGithub } from "react-icons/bs";
import { FaFilePdf, FaLinkedinIn } from "react-icons/fa";
import { ProjectLinksProps } from "../interfaces/interfaces";

export default function Footer() {
  return (
    <footer className="p-6 h-20 flex items-center bg-black text-white">
      <div className="container flex justify-between items-center ">
        <div>
          <p>Copyright &copy; 2023. All rights reserved.</p>
        </div>
        <div className="flex justify-center gap-x-3 items-center">
          <ProjectLinks
            notProject={true}
            href="https://github.com/Cakinn1"
            icon={<BsGithub />}
            title=""
          />
          <ProjectLinks
            href="https://www.linkedin.com/in/anthony-cakin/"
            notProject={true}
            icon={<FaLinkedinIn />}
            title=""
          />
          <ProjectLinks
            href="https://docs.google.com/document/d/1ad_ZrwaocB6kb4dDSArsiPPEKfK2qAZdrhXwz5fF-lQ/edit"
            notProject={true}
            icon={<FaFilePdf />}
            title=""
          />
        </div>
      </div>
    </footer>
  );
}


function ProjectLinks({
  href,
  icon,
  title,
  notProject,
  reftest,
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