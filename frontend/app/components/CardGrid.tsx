import Image from "next/image"
import Cta from "./ui/Cta"

interface Card {
  title: string
  description: string
  image: string
  altText: string
  href: string
  fullWidth?: boolean
}

interface CardGridProps {
  heading?: string
  cards: Card[]
}

export default function CardGrid({ heading = "Courses and Pathways", cards }: CardGridProps) {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {heading && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            {heading}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`relative overflow-visible rounded-3xl group min-h-[500px] w-full ${
                card.fullWidth ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <Image
                src={card.image}
                alt={card.altText}
                fill
                className="object-cover rounded-3xl z-10"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/44 group-hover:bg-black/64 transition-all duration-300 rounded-3xl z-20" />

              <div className="absolute bottom-0 left-0 right-0 z-30 flex flex-col p-8 text-white">
                <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                <p className="text-xl mb-6 leading-relaxed">
                  {card.description}
                </p>

                <Cta
                  href={card.href}
                  buttonText="Learn More"
                  buttonColor="brand-white"
                  font="small"
                />
              </div>

              {/* Offset Border */}
              <div className="absolute top-0 left-0 w-full h-full border-2 border-black rounded-3xl group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
