"use client";

import Image from "next/image";
import { memo } from "react";
import ActiveUsers from "../users/ActiveUsers";
import { NavbarProps } from "@/types/type";

// import { Button } from "./ui/button";
// import ShapesMenu from "./ShapesMenu";
// import ActiveUsers from "./users/ActiveUsers";
// import { NewThread } from "./comments/NewThread";

const Navbar = ({ activeElement }: NavbarProps) => {
  return (
    <>
    <nav className="flex select-none items-center justify-between gap-4 bg-primary-black px-5 text-Black">
      <Image src="/assets/logo.svg" alt="FigPro Logo" width={58} height={20} />
      <ActiveUsers />
    </nav>
    
    </>
  );
};

export default memo(
  Navbar,
  (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement
);
