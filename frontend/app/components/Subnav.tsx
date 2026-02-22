'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const subnavItems = [
  {
    href: "/admissions",
    label: "Admissions"
  },
  {
    href: "/about",
    label: "About ORLS"
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
    href: "/support",
    label: "Support ORLS"
  },
  {
    href: "/alumni",
    label: "Alumni"
  }
]



export default function Subnav() {

  const searchParams = useSearchParams()
  const currentPage = searchParams.get('page')

  return (
    <nav className="flex justify-between items-center">
      {subnavItems.map((item) => (
        <Link className={`text-center py-8 w-1/6 text-dark-blue uppercase font-bold hover:bg-dark-blue hover:text-white ${currentPage === item.href ? "bg-dark-blue text-white" : ""}`} href={item.href} key={item.href}>{item.label}</Link>
      ))}
    </nav>
  )
}