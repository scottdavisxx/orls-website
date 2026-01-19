import Image from "next/image";
import NewCta from "./NewCta";

export default function HeroBanner() {
  return (
    <div className="flex flex-col relative h-[950px] justify-end">
      <Image src="/fpo-hero-banner.png" alt="Hero Banner" width={1000} height={1000} className="absolute w-full top-0 -z-10" />
      <div className="flex flex-col gap-8 ml-16 mb-16">
        <h1 className="text-7xl font-bold relative">Education with Purpose<br></br>Faith with action</h1>
        <NewCta showIcon href="#" buttonText="Schedule a Visit" />
      </div>
    </div>
  )
}