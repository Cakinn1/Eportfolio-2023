import React, { ReactElement } from "react";
import { NavListProps } from "../Types/typings";

export default function NavList({ href, paragraph, icon }: NavListProps) {
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
