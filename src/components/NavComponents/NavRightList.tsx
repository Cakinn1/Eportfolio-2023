import { NavRightListProps } from "../Types/typings";

export default function NavRightList({ paragraph, href}: NavRightListProps) {
  return <a href={href} className="nav__side-bar--links block p-2">{paragraph}</a>;
}
