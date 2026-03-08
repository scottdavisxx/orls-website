'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const defaultSubnavItems = [
  { href: '/admissions', label: 'Admissions' },
  { href: '/about', label: 'About ORLS' },
  { href: '/academics', label: 'Academics' },
  { href: '/student-life', label: 'Student Life' },
  { href: '/support-orls', label: 'Support ORLS' },
  { href: '/alumni', label: 'Alumni' },
]

type SubnavProps = {
  block?: { ctas?: Array<{ href?: string; buttonText?: string }> }
  index?: number
  pageId?: string
  pageType?: string
}

export default function Subnav({ block }: SubnavProps = {}) {
  const pathName = usePathname()
  const items =
    block?.ctas?.map((c) => ({ href: c.href || '#', label: c.buttonText || 'Link' })) ?? defaultSubnavItems

  return (
    <div className="bg-white hidden lg:block relative z-10">
      <nav className="flex justify-between items-center 2xl:container">
        {items.map((item) => (
          <Link
            className={`text-center py-8 w-1/6 text-dark-blue uppercase font-bold hover:bg-dark-blue ${pathName === item.href ? 'bg-dark-blue text-white cursor-default' : 'hover:text-white'
              }`}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}