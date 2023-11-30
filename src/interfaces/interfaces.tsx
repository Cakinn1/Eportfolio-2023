import { ReactElement, RefObject } from "react";

export default {};

// project

export interface ProjectLinksProps {
  icon: ReactElement;
  href: string;
  title: string;
  notProject?: boolean;
  reftest?: any;
}

export interface ProjectDataProps {
  information: string;
  projectName: string;
  links: {
    github: string;
    vercel: string;
  };
  image: string[];
  technologies: {
    framework: string;
    css: string;
    javasScript: string;
    typeScript: string;
    redux: string;
    Api: string;
    fireBase: string;
  }[];
  imageInView: "BUSY_BEE" | "LIBRARY" | "ULTRAVERSE" | "TBD";
  projectAnimate: any;
  projectInView: any;
  refTest: RefObject<HTMLDivElement>;
}

// Nav

export interface NavListProps {
  href: string;
  paragraph?: string;
  icon?: ReactElement;
}

export interface NavRightBarProps {
  handleModal: () => void;
  isModalOpen: boolean;
  rightBarAnimate: boolean;
}

export interface NavRightListProps {
  paragraph: string;
  href: string;
}

// landing

export interface LandingLinksProps {
  href: string;
  icon: ReactElement;
}

// about me


export interface TechStackProps {
  src: string;
  src1: string;
}