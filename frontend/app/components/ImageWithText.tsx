import Image from '@/app/components/SanityImage'
import { PortableText, type PortableTextBlock } from 'next-sanity'
import type { ImageWithText } from '@/sanity.types'

type ImageWithTextProps = {
  block: ImageWithText
  index: number
  pageId: string
  pageType: string
}

export default function ImageWithText({ block }: ImageWithTextProps) {
  const image = block?.imageAndAltText?.image
  const altText = block?.imageAndAltText?.altText || ''
  const title = block?.title
  const blurb = block?.blurb

  return (
    <div className="flex flex-col items-center px-6 py-12 max-w-7xl mx-auto">
      <div className="flex w-full mb-12 justify-center">
        {image?.asset?._ref ? (
          <Image
            id={image.asset._ref}
            alt={altText}
            width={1100}
            height={556}
            className="w-full"
          />
        ) : null}
      </div>
      <div className="text-center max-w-5xl">
        <h2 className="text-2xl font-bold mb-6
        md:text-[4.375rem]">{title}</h2>
        {Array.isArray(blurb) ? (
          <div className="text-[1.25rem] prose prose-lg max-w-none text-balance">
            <PortableText value={blurb as PortableTextBlock[]} />
          </div>
        ) : (
          <p className="text-xl">{blurb}</p>
        )}
      </div>
    </div>
  )
}
