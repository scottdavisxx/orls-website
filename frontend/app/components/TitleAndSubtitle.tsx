import type { TitleAndSubtitle as TitleAndSubtitleBlock } from '@/sanity.types'

type TitleAndSubtitleProps = {
  block: TitleAndSubtitleBlock
  index: number
  pageId: string
  pageType: string
}

export default function TitleAndSubtitle({ block }: TitleAndSubtitleProps) {
  return (
    <div className="bg-white py-4">
      <div className="container flex flex-col gap-4 bg-white text-black">
        <h2 className="text-2xl md:text-8xl">{block?.titleOne}</h2>
        <h3 className="text-xl font-bold text-medium-blue md:text-7xl">{block?.titleTwo}</h3>
      </div>
    </div>
  )
}