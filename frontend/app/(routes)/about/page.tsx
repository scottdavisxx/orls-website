import CtaWithCard from "@/app/components/CtaWithCard";
import HeroBanner from "@/app/components/HeroBanner";
import Navigation from "@/app/components/Navigation";
import Subnav from "@/app/components/Subnav";

const tempNavigationContent = {
  "_key": "9cb3816cfaf4",
  "_type": "navigation",
  "color": "dark-blue"
}

const tempHeroContent = {
  "_key": "48df50bb7cf9",
  "_type": "heroBanner",
  "cta": {
    "buttonText": "Schedule A Visit",
    "href": "#",
    "newTab": true
  },
  "imageAndAltText": {
    "altText": "Kids at School",
    "image": {
      "_type": "image",
      "asset": {
        "_ref": "image-47cc3c814eba1e8eac1b6d50dc63b52ec521a575-871x581-png",
        "_type": "reference"
      }
    }
  },
  "titleOne": "Test Title One .",
  "titleTwo": "Test Title Two"
}

const ctaWithCardContent = {
  title: "Our Lutheran Identity",
  blurb: `As a school of The Lutheran Church Missouri Synod, Our Redeemer is rooted in Scripture and centered on Jesus Christ. We pair a high-quality, individualized education with daily faith formation, so students grow in wisdom, character, and strong academics from Preschool through 8th grade. 
  
  OR Dallas is also accredited through National Lutheran School Accreditation (NLSA), reflecting our commitment to educational quality and continuous improvement.`,
  ctaText: "Meet Our Pastors",
  ctaLink: "#",
}

export default function AboutPage() {
  return (
    <>
      {/* @ts-ignore */}
      <Navigation block={tempNavigationContent} />
      {/* @ts-ignore */}
      <HeroBanner block={tempHeroContent} />
      <Subnav />
      <CtaWithCard {...ctaWithCardContent} />
    </>
  )
}