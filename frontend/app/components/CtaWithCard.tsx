import Image from "next/image";
import Cta from "./ui/Cta";

export interface CtaWithCardProps {
  title: string;
  blurb: string;
  ctaText: string;
  ctaLink: string;
}

export default function CtaWithCard({ title, blurb, ctaText, ctaLink }: CtaWithCardProps) {
  return (
    <div className="flex items-center justify-center py-16 px-24 relative">
      {/* Card */}
      <div className="border-2 border-dark-blue rounded-4xl absolute left-24 bg-white z-10">
        <Image
          src="/church.png"
          alt="CTA Card"
          width={415} height={537}
          className="p-6 relative z-10" />
        {/* Yellow BG */}
        <div className="bg-yellow h-9/12 w-[calc(100%-3rem)] absolute bottom-6 left-6"></div>
      </div>
      {/* Content */}
      <div className=" border-2 border-dark-blue rounded-4xl w-full my-12 relative">
        {/* BG Image */}
        <Image src="/bg-pattern.png" alt="CTA Card" width={1000} height={1000} className="absolute top-0 left-0 w-full h-full object-cover rounded-4xl" />
        <div className="flex flex-col gap-4 pl-120 pr-20 py-8 ">
          <h2 className="text-7xl font-bold text-dark-blue">{title}</h2>
          <p className="text-lg whitespace-pre-line">{blurb}</p>
          <Cta dark href={ctaLink} buttonText={ctaText} className="mt-4" />
        </div>
      </div>
    </div>
  )
}