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
    <nav
      className={`px-6 py-4 w-screen flex uppercase just fixed top-0 left-0 right-0 z-50 font-bold transition-colors duration-600 bg-dark-blue
        md:px-11 md:py-6 md:justify-between md:items-center md:bg-transparent
        ${scrolled ? "bg-dark-blue" : ""} ${block?.color === LogoColor.light ? "text-white ho" : "text-dark-blue"}`}
    >
      <div className={`flex flex-col justify-between w-full items-start
      md:flex-row md:container md:items-center md:gap-0 ${isOpen ? "gap-6" : ""}`}>
        <Link href="/">
          <OrlsLogo
            color={block?.color && block.color === 'white' ? LogoColor.light : LogoColor.dark}
            className="w-9/12 md:w-auto"
          />
        </Link>
        <div className={`flex flex-col justify-between gap-8 
        md:flex-row md:items-center md:pl-0
        ${isOpen ? "h-full" : "h-0 hidden"}`}>
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className={`${block?.color === LogoColor.light ? "hover:underline" : "hover:text-white"}`}>{item.label}</Link>
          ))}
        </div>
      </div >
      <Bars3Icon onClick={handleToggle} className="w-8 h-8 absolute right-5 top-5 md:hidden" />
    </nav>
  );
}
