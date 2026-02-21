import Link from "next/link";
import Cta from "./NewCta";
import Image from "next/image";

export default function FeaturedEvents() {
  return (
    <div className="flex flex-col gap-4 bg-white text-black px-24 py-16">
      <h2 className="text-8xl">Family Life at ORLS:</h2>
      <h3 className="text-7xl font-bold text-medium-blue">Upcoming Events</h3>
      <div className="flex gap-8">
        <div className="flex flex-col justify-end w-2/3 rounded-2xl text-white relative overflow-hidden h-[500px]">
          <Image src="/fpo-event-1.jpg" alt="Event Image" width={765} height={506} className="absolute top-0 left-0 object-cover h-full w-full" />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/44" />
          <div className="flex flex-col gap-4 p-8 w-3/5">
            <span className="z-10 text-5xl font-bold">Event Name</span>
            <span className="z-10 text-xl">Degreed, certified teachers deliver rigorous, individualized instruction so every student is known, challenged, and supported to grow.</span>
            <Cta href="#" buttonText="View Calendar" />
          </div>
        </div>
        <div className="flex justify-between text-white w-1/3 gap-4">
          <Link href="#" className="flex rounded-2xl items-end relative w-1/2 overflow-hidden">
            <Image src="/fpo-event-2.jpg" alt="Event Image" width={765} height={506} className="absolute top-0 left-0 object-cover h-full w-full" />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/44" />
            <span className="text-xl font-bold p-4 z-10">Event Name</span>
          </Link>
          <Link href="#" className="flex rounded-2xl items-end relative w-1/2 overflow-hidden">
            <Image src="/fpo-event-3.jpg" alt="Event Image" width={765} height={506} className="absolute top-0 left-0 object-cover h-full w-full" />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/44" />
            <span className="text-xl font-bold p-4 z-10">Event Name</span>
          </Link>
        </div>
      </div>
    </div>
  )
}