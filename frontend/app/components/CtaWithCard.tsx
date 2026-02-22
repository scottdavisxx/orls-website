import Image from "next/image";
import Cta from "./ui/Cta";

export default function CtaWithCard() {
  return (
    <div className="flex items-center justify-center py-16 px-24 relative">
      {/* Card */}
      <div className="border-2 border-dark-blue rounded-4xl absolute left-24 bg-white">
        <Image
          src="/church.png"
          alt="CTA Card"
          width={415} height={537}
          className="p-6 relative z-10" />
        {/* Yellow BG */}
        <div className="bg-yellow h-9/12 w-[calc(100%-3rem)] absolute bottom-6 left-6"></div>
      </div>
      {/* Content */}
      <div className=" border-2 border-dark-blue rounded-4xl w-full my-12 bg-[url('/bg-pattern.png')] bg-cover">
        <div className="flex flex-col gap-4 pl-120 pr-20 py-8 ">
          <h2 className="text-7xl font-bold text-dark-blue">Our Lutheran Identity</h2>
          <p className="text-lg">As a school of The Lutheran Church Missouri Synod, Our Redeemer is rooted in Scripture and centered on Jesus Christ. We pair a high-quality, individualized education with daily faith formation, so students grow in wisdom, character, and strong academics from Preschool through 8th grade. </p>
          <p className="text-lg">OR Dallas is also accredited through National Lutheran School Accreditation (NLSA), reflecting our commitment to educational quality and continuous improvement.</p>
          <Cta dark href="#" buttonText="Meet Our Pastors" className="mt-4" />
        </div>
      </div>
    </div>
  )
}