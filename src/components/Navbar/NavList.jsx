import {
  CodeBracketSquareIcon,
  CubeTransparentIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { MenuItem, Typography } from "@material-tailwind/react";
import React from "react";

import NavListMenu from "./NavListMenu";

// nav list component
const navListItems = [
  {
    label: "Account",
    value: "account",
    icon: UserCircleIcon,
    desc: `It really matters and then like it really doesn't matter.
    What matters is the people who are sparked by it. And the people 
    who are like offended by it, it doesn't matter.`,
  },
  {
    label: "Blocks",
    value: "blocks",
    icon: CubeTransparentIcon,
    desc: `Because it's about motivating the doers. Because I'm here
    to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "Docs",
    value: "docs",
    icon: CodeBracketSquareIcon,
    desc: `We're not always in the position that we want to be at.
    We're constantly growing. We're constantly making mistakes. We're
    constantly trying to express ourselves and actualize our dreams.`,
  },
];

const NavList = () => {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />

      {navListItems.map(({ label, icon }) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}
            {label}
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
};

export default NavList;
