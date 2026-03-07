import Image from '@/app/components/SanityImage'
import type { ExtractPageBuilderType } from '@/sanity/lib/types'

type ThreeColCircleImageProps = {
  block: ExtractPageBuilderType<'threeColCircleImage'>
  index: number
  pageId: string
  pageType: string
}

export default function ThreeColCircleImage({ block }: ThreeColCircleImageProps) {
  const title = block?.title
  const columns = block?.columns ?? []

  return (
    <div className="flex items-center flex-col gap-12 px-8 py-8
    md:px-24 md:py-16">
      <div className="container">
        <h2 className="text-4xl font-bold text-center md:text-6xl">{title}</h2>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:px-8 mt-16">
          {columns.map((column, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-4 md:w-1/3 md:px-6">
              {column.imageAndAltText?.image?.asset?._ref ? (
                <Image
                  id={column.imageAndAltText.image.asset._ref}
                  alt={column.imageAndAltText.altText || column.name || ''}
                  width={238}
                  height={238}
                  className="rounded-full object-cover aspect-square"
                />
              ) : null}
              <h3 className="text-4xl font-bold">{column.name}</h3>
              <p>{column.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}