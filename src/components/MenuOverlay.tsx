import Link from "next/link";
import React from "react";
import { navbarItem } from "../../constants";

interface ChildComponentProps {
  setIsOpen: (data: boolean) => void;
}

const MenuOverlay: React.FC<ChildComponentProps> = ({ setIsOpen }) => {
  return (
    <ul className="fixed top-12 w-full z-10 flex flex-col py-4 gap-3 items-center bg-violet-700 text-white">
      {navbarItem.map((item, idx) => (
        <li key={idx}>
          <Link
            href={item.href}
            className="font-normal tracking-wider"
            onClick={() => setIsOpen(false)}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
