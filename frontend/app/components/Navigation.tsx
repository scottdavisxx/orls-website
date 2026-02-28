"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import OrlsLogo, { LogoColor } from "./icons/orls-logo";
import type { Navigation } from "@/sanity.types";
import { Bars3Icon } from "@heroicons/react/24/outline";

const navigationItems = [
  {
    href: "/about",
    label: "About ORLS"
  },
  {
    href: "/admissions",
    label: "Admissions"
  },
  {
    href: "/academics",
    label: "Academics"
  },
  {
    href: "/student-life",
    label: "Student Life"
  },
  {
    href: "/support-orls",
    label: "Support ORLS"
  },
  {
    href: "/alumni",
    label: "Alumni"
  }
]

interface NavigationProps {
  block: Navigation;
  color?: LogoColor;
}
export default function Navigation({
  block
}: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 250);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`px-2 py-4 w-full flex uppercase just fixed top-0 left-0 right-0 z-50 font-bold transition-colors duration-600 bg-dark-blue
        md:px-11 md:py-6 md:justify-between md:items-center md:bg-transparent
        ${scrolled ? "bg-dark-blue" : ""} ${block?.color === LogoColor.light ? "text-white ho" : "text-dark-blue"}`}
      >
        <div className="flex flex-col justify-between w-full items-start gap-6
      md:flex-row md:container md:items-center md:gap-0">
          <Link href="/">
            <OrlsLogo
              color={block?.color && block.color === 'white' ? LogoColor.light : LogoColor.dark}
              className="w-9/12 md:w-auto"
            />
          </Link>
          <div className="flex flex-col justify-between gap-8 pl-6
        md:flex-row md:items-center md:pl-0">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className={`${block?.color === LogoColor.light ? "hover:underline" : "hover:text-white"}`}>{item.label}</Link>
            ))}
          </div>
        </div >
        {/* <Bars3Icon onClick={handleToggle} className="w-7 h-7 absolute right-4 top-4 md:hidden" /> */}
      </nav>
    </div>
  );
}
