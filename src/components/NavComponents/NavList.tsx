import React, { ReactElement } from "react";
import { NavListProps } from "../Types/typings";

export default function NavList({ href, paragraph, icon }: NavListProps) {
  return (
    <li className="nav__link">
      <a
        href={href}
        className={`nav__link--anchor link__hover-effect link__hover-effect--black `}
      >
        {paragraph}
        {icon}
      </a>
    </li>
  );
}
