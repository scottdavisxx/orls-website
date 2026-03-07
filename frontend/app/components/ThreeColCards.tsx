import Image from '@/app/components/SanityImage'
import Link from 'next/link'
import type { ThreeColCards } from '@/sanity.types'

type ThreeColCardsProps = {
  block: ThreeColCards
  index: number
  pageId: string
  pageType: string
}

export default function ThreeColCards({ block }: ThreeColCardsProps) {
  const cards = block?.cards ?? []

  return (
    <div className="py-4
    md:py-16">
      <div className="container flex flex-col px-6 py-8 gap-2 justify-between
    md:flex-row md:h-[478px]">
        {cards.map((card, i) => (
          <Link href={card.href || '#'} key={i} className="group flex flex-col gap-2 border border-gray rounded-xl relative items-center justify-center text-black text-4xl font-bold py-20 hover:-translate-y-2 transition-all duration-300 md:w-1/3 md:h-auto md:py-0">
            {card.imageAndAltText?.image?.asset?._ref && (
              <Image
                id={card.imageAndAltText.image.asset._ref}
                alt={card.imageAndAltText.altText || card.title || ''}
                width={446}
                height={478}
                className="absolute top-0 left-0 h-full w-full object-cover rounded-xl"
              />
            )}
            {/* Image overlay */}
            <div className="absolute top-0 left-0 h-full w-full bg-white/45 rounded-xl group-hover:bg-white/75 transition-all duration-300"></div>
            <h3 className="z-2">{card.title}</h3>
            <span className="z-2 group-hover:translate-x-2 transition-all duration-300">→ Learn More</span>
          </Link>
        ))}
      </div>
    </div>
  )
}