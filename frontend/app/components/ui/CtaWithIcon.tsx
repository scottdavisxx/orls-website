import Link from "next/link";
import OrlsIcon from "../icons/orls-icon";

interface CtaWithIconProps {
  href: string;
  buttonText: string;
  newTab?: boolean;
}

export default function CtaWithIcon({ href, buttonText, newTab }: CtaWithIconProps) {
  return (
    <Link target={newTab ? "_blank" : "_self"} href={href} className="flex gap-4 items-center text-dark-blue hover:text-white w-fit uppercase font-bold z-10 transition-all duration-300">
      <span className="text-2xl px-24 py-4 bg-white hover:bg-dark-blue transition-all duration-300 rounded-sm">{buttonText}</span>
      <OrlsIcon />
    </Link>
  );
}