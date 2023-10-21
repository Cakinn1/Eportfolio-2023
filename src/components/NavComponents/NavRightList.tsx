import { NavRightListProps } from "../Types/typings";

export default function NavRightList({ paragraph }: NavRightListProps) {
  return <p className="nav__side-bar--links p-2">{paragraph}</p>;
}
