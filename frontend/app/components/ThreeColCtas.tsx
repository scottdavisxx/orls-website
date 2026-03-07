import Link from 'next/link'
import type { ExtractPageBuilderType } from '@/sanity/lib/types'

type ThreeColCtasProps = {
  block: ExtractPageBuilderType<'threeColCtas'>
  index: number
  pageId: string
  pageType: string
}

export default function ThreeColCtas({ block }: ThreeColCtasProps) {
  const cards = block?.cards ?? []

  return (
    <div className="bg-white">
      <div className="flex 2xl:container">
        <div className="flex flex-col items-stretch w-full text-center md:flex-row">
          {cards.map((card, i) => (
            <Link
              key={i}
              href={card.href || '#'}
              className="flex flex-col gap-2 items-center justify-center border border-black py-4 px-12 md:1/3 md:py-16"
            >
              <h3 className="text-medium-blue text-3xl">{card.title}</h3>
              <p className="text-xl">{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}