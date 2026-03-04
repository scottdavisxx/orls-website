import Image from '@/app/components/SanityImage'
import { PortableText } from 'next-sanity'
import type { ExtractPageBuilderType } from '@/sanity/lib/types'

type TwoColInfoWithImageProps = {
  block: ExtractPageBuilderType<'twoColInfoWithImage'>
  index: number
  pageId: string
  pageType: string
}

export default function TwoColInfoWithImage({ block }: TwoColInfoWithImageProps) {
  const title = block?.title
  const blurb = block?.blurb
  const image = block?.imageAndAltText?.image
  const altText = block?.imageAndAltText?.altText || ''
  const card = block?.card

  return (
    <section className="bg-white px-6 py-12 md:px-16 md:py-14 lg:px-[83px] lg:py-[43px]">

      <h2 className="font-bold text-4xl md:text-6xl lg:text-[70px] text-black leading-tight">
        {title}
      </h2>

      <div className="flex flex-col lg:flex-row items-start mt-8 lg:mt-10 gap-10 lg:gap-12">
        <div className="flex-1 flex flex-col">
          {Array.isArray(blurb) ? (
            <div className="text-sm md:text-base lg:text-[20px] text-black leading-relaxed prose max-w-none">
              <PortableText value={blurb} />
            </div>
          ) : (
            blurb && <p className="text-sm md:text-base lg:text-[20px] text-black leading-relaxed">{blurb}</p>
          )}

          {image?.asset?._ref && (
            <div className="lg:hidden mt-6 rounded-[26px] border-2 border-black overflow-hidden">
              <div className="relative w-full" style={{ aspectRatio: '443 / 527' }}>
<Image
                    id={image.asset._ref}
                    alt={altText}
                    width={443}
                    height={527}
                    mode="cover"
                    className="w-full h-full object-cover object-top"
                  />
              </div>
            </div>
          )}

          {card && (
            <div className="border-2 border-black rounded-[12px] p-8 lg:p-[55px] mt-6 lg:mt-8">
              <h3 className="font-bold text-3xl md:text-4xl lg:text-[48px] text-dark-blue leading-tight">
                {card.cardTitle}
              </h3>
              {card.cardSubtitle && (
                <p className="font-medium italic text-xl md:text-2xl lg:text-[32px] text-black mt-3">
                  {card.cardSubtitle}
                </p>
              )}
              {Array.isArray(card.bio) && card.bio.length > 0 && (
                <div className="mt-4 space-y-4 text-sm md:text-base lg:text-[18px] text-black leading-relaxed prose max-w-none">
                  <PortableText value={card.bio} />
                </div>
              )}
            </div>
          )}
        </div>

        {image?.asset?._ref && (
          <div className="hidden lg:block lg:w-[38%] flex-shrink-0 relative">
            <div
              className="absolute bg-white border-2 border-black rounded-[26px] z-0"
              style={{ top: '72px', left: '-2px', right: 0, bottom: '-72px' }}
            />
            <div className="absolute -top-6 right-0 w-[70%] aspect-square z-10 pointer-events-none">
              <img src="/staff/orls-L-circle.svg" alt="" aria-hidden="true" className="w-full h-full" />
            </div>
            <div className="relative z-20 rounded-[26px] overflow-hidden mt-[54px]">
              <div className="relative w-full" style={{ aspectRatio: '443 / 527' }}>
                <Image id={image.asset._ref} alt={altText} width={443} height={527} mode="cover" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
