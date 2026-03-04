import AbacusIcon from './icons/abacus-icon'
import CalendarIcon from './icons/calendar-icon'
import ChildIcon from './icons/child-icon'
import ColumnIcon from './icons/column-icon'
import type { ExtractPageBuilderType } from '@/sanity/lib/types'

type StatisticsTwoColProps = {
  block: ExtractPageBuilderType<'statisticsTwoCol'>
  index: number
  pageId: string
  pageType: string
}

export default function StatisticsTwoCol({ block }: StatisticsTwoColProps) {
  const title = block?.title
  const stats = block?.stats ?? []
  const [stat1, stat2, stat3, stat4] = stats

  return (
    <div className="bg-dark-blue py-4
    md:py-16">
      <div className="container flex flex-col items-center justify-between gap-4 bg-dark-blue text-white py-8 px-6 font-bold
    md:flex-row md:px-20 md:py-16">
        <h2 className="text-4xl font-bold mb-8 md:w-1/3 md:mb-0 md:text-7xl">{title}</h2>
        <div className="flex gap-6 md:gap-24">
          <div className="flex flex-col gap-20">
            {stat1 && (
              <div className="flex gap-4">
                <AbacusIcon />
                <div className="flex flex-col max-w-40">
                  <span className="text-3xl md:text-5xl">{stat1.number}</span>
                  <span className="text-xl md:text-2xl">{stat1.label}</span>
                </div>
              </div>
            )}
            {stat2 && (
              <div className="flex gap-4">
                <CalendarIcon />
                <div className="flex flex-col max-w-40">
                  <span className="text-3xl md:text-5xl">{stat2.number}</span>
                  <span className="text-xl md:text-2xl">{stat2.label}</span>
                </div>
              </div>
            )}
          </div>
          <div className="bg-white w-px hidden md:block" />
          <div className="flex flex-col gap-20">
            {stat3 && (
              <div className="flex gap-4">
                <ChildIcon />
                <div className="flex flex-col max-w-40">
                  <span className="text-3xl md:text-5xl">{stat3.number}</span>
                  <span className="text-xl md:text-2xl">{stat3.label}</span>
                </div>
              </div>
            )}
            {stat4 && (
              <div className="flex gap-4">
                <ColumnIcon />
                <div className="flex flex-col max-w-40">
                  <span className="text-3xl md:text-5xl">{stat4.number}</span>
                  <span className="text-xl md:text-2xl">{stat4.label}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}