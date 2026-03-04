import Image from '@/app/components/SanityImage'
import Cta from './ui/Cta'
import type { ExtractPageBuilderType } from '@/sanity/lib/types'

type ThreeColCardsTallProps = {
  block: ExtractPageBuilderType<'threeColCardsTall'>
  index: number
  pageId: string
  pageType: string
}

export default function ThreeColCardsTall({ block }: ThreeColCardsTallProps) {
  const title = block?.title
  const subtitle = block?.subtitle
  const cards = block?.cards ?? []

  return (
    <div className="bg-white px-6 py-16 lg:px-8">
      <div className="max-w-[85rem] mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center mb-12 gap-12">
          <h2 className="text-[4.375rem] min-md:max-lg:text-[4rem] max-md:[3.5rem] max-sm:text-[3rem] font-bold text-black leading-tight ">
            {title}
          </h2>
          <p className="text-[2rem] text-gray-700 max-w-3xl">
            {subtitle}
          </p>
        </div>

        <div className="grid max-[769px]:grid-cols-1 max-[769px]:justify-items-center max-[1200px]:grid-cols-2 grid-cols-3 gap-6 ">
          {cards.map((card, i) => (
            <div key={i} className="relative w-[398px] max-sm:w-[300px] max-sm:h-[550px] max-[769px]:w-[400px] max-[1200px]:w-[95%] max-[1299px]:w-[340px] min-h-[508px] pb-8">
              <div className="absolute border-2 shadow-lg w-[398px] max-sm:hidden max-[769px]:w-[400px] max-[1200px]:w-[95%] max-[1299px]:w-[340px] h-[508px] rounded-3xl top-[30px] left-[25px]" style={{ borderColor: '#242D65' }}></div>

              <div className="relative rounded-3xl group w-[398px] max-sm:w-[300px] max-sm:h-[550px] max-[769px]:w-[400px] max-[1200px]:w-[95%] max-[1299px]:w-[340px] h-[508px] overflow-hidden">
                {card.imageAndAltText?.image?.asset?._ref && (
                  <Image
                    id={card.imageAndAltText.image.asset._ref}
                    alt={card.imageAndAltText.altText || card.title || ''}
                    width={800}
                    height={600}
                    mode="cover"
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                  />
                )}

                <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col p-8 text-white">
                  <h3 className="text-[2rem] font-semibold mb-2">{card.title}</h3>
                  <p className="text-xl mb-6 leading-relaxed">{card.description}</p>
                  {card.cta?.href && (
                    <Cta
                      href={card.cta.href}
                      buttonText={card.cta.buttonText || 'Learn More'}
                      newTab={card.cta.newTab}
                      buttonColor="brand-white"
                      font="small"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
