import type { ExtractPageBuilderType } from '@/sanity/lib/types'

type FourColStatisticsProps = {
  block: ExtractPageBuilderType<'fourColStatistics'>
  index: number
  pageId: string
  pageType: string
}

export default function FourColStatistics({ block }: FourColStatisticsProps) {
  const sideTitle = block?.sideTitle
  const sideBlurb = block?.sideBlurb
  const stats = block?.stats ?? []

  return (
    <div className="bg-dark-blue">
      <div className="text-white container">
        <div className="flex flex-col justify-between bg-dark-blue py-8 items-center
      md:flex-row md:py-20">
          <div className="flex flex-col justify-between text-center md:w-8/12 md:flex-row">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col gap-1 py-4 px-3 ${i < stats.length - 1 ? 'border-white md:border-r' : ''}`}
              >
                <span className="text-4xl font-bold md:text-5xl">{stat.number}</span>
                <span className="text-2xl">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 order-first md:order-last md:w-1/4">
            {sideTitle && <h3 className="text-4xl font-bold md:text-5xl">{sideTitle}</h3>}
            {sideBlurb && <p className="text-2xl">{sideBlurb}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}