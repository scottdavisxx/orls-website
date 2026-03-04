import Image from '@/app/components/SanityImage'
import type { ExtractPageBuilderType } from '@/sanity/lib/types'

type LeadershipProps = {
  block: ExtractPageBuilderType<'leadership'>
  index: number
  pageId: string
  pageType: string
}

export default function Leadership({ block }: LeadershipProps) {
  const title = block?.title
  const people = block?.people ?? []

  return (
    <div className="bg-dark-blue">
      <div className="flex flex-col text-white bg-dark-blue container">
        <div className="flex flex-col gap-8 text-center pt-10 pb-16">
          <h2 className="text-4xl font-bold text-white md:text-6xl">{title}</h2>
          <div className="flex flex-col gap-8 items-center justify-between text-2xl font-bold md:flex-row">
            {people.map((person, i) => (
              <div key={i} className="flex flex-col gap-2">
                {person.imageAndAltText?.image?.asset?._ref ? (
                  <Image
                    id={person.imageAndAltText.image.asset._ref}
                    alt={person.imageAndAltText.altText || person.name || ''}
                    width={266}
                    height={333}
                    className="rounded-full object-cover aspect-[266/333]"
                  />
                ) : null}
                <div className="flex flex-col">
                  <span>{person.name}</span>
                  <span>{person.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}