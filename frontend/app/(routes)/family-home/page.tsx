import ThreeColExpandingCards from "@/app/components/ThreeColExpandingCards";
import TwoColInfoWithCard from "@/app/components/TwoColInfoWithCard";

const housesItems = [
  {
    id: 'luther',
    expanded: {
      name: 'Luther House',
      tagline: 'Courage In Truth',
      description: 'Luther House represents bold faith, integrity, and the courage to do what is right.',
      icon: '/houses/luther-icon.svg',
    },
    collapsed: {
      name: 'Luther House',
      icon: '/houses/luther-icon.svg',
    },
  },
  {
    id: 'melanchton',
    expanded: {
      name: 'Melanchton House',
      tagline: 'TODO: Tagline',
      description: 'TODO: Description for Melanchton House.',
      icon: '/houses/melanchton-icon.svg',
    },
    collapsed: {
      name: 'Melanchton House',
      icon: '/houses/melanchton-icon.svg',
    },
  },
  {
    id: 'chemnitz',
    expanded: {
      name: 'Chemnitz House',
      tagline: 'TODO: Tagline',
      description: 'TODO: Description for Chemnitz House.',
      icon: '/houses/chemnitz-icon.svg',
    },
    collapsed: {
      name: 'Chemnitz House',
      icon: '/houses/chemnitz-icon.svg',
    },
  },
  {
    id: 'walther',
    expanded: {
      name: 'Walther House',
      tagline: 'TODO: Tagline',
      description: 'TODO: Description for Walther House.',
      icon: '/houses/walther-icon.svg',
    },
    collapsed: {
      name: 'Walther House',
      icon: '/houses/walther-icon.svg',
    },
  },
]

const housesSectionProps = {
  heading: 'Our Four Houses',
  subtitle: 'Each House is named for a faithful Lutheran leader whose life reflects learning, conviction, and service.',
  footnote: '*Siblings are placed in the same House, and students remain in their House throughout their ORLS journey.',
  arrowLabel: 'Scroll for next steps',
  sectionBgImage: '/beyond-classroom/section-bg.png',
}

export default function TuitionPage() {
  return (
    <>
      <TwoColInfoWithCard />
      <ThreeColExpandingCards {...housesSectionProps} items={housesItems} />
    </>
  )
}
