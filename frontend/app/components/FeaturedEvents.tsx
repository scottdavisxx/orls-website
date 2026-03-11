import Link from "next/link";
import Image from "@/app/components/SanityImage";
import Cta from "./ui/Cta";

/** Event shape used by FeaturedEvents */
export type FeaturedEvent = {
  _id: string;
  title: string;
  slug: string;
  cardText?: string | null;
  coverImage?: { asset?: { _ref: string }; alt?: string } | null;
  cta?: { href: string; buttonText: string; newTab?: boolean; buttonColor?: string } | null;
  date?: string | null;
};

export default function FeaturedEvents({ events = [] as FeaturedEvent[] }: { events?: FeaturedEvent[] }) {
  const list = events ?? [];
  const [first, ...rest] = list;

  return (
    <div className="bg-white py-4 md:py-16">
      <div className="container flex flex-col gap-4 bg-white text-black">
        <h2 className="text-2xl md:text-8xl">Family Life at ORLS:</h2>
        <h3 className="text-xl font-bold text-medium-blue md:text-7xl">Upcoming Events</h3>
        {list.length === 0 ? (
          <p className="text-lg text-gray-600">No upcoming events at this time. Add events with today or a future date in Sanity to see them here.</p>
        ) : (
          <div className="flex flex-col gap-8 md:flex-row">
            {/* Large Card - first event */}
            <div className={`flex flex-col justify-end rounded-2xl text-white relative overflow-visible h-[500px] group ${list.length > 1 ? "md:w-2/3" : "md:w-full"}`}>
              {first.coverImage?.asset?._ref && (
                <Image
                  id={first.coverImage.asset._ref}
                  alt={first.coverImage.alt ?? first.title}
                  width={765}
                  height={506}
                  mode="cover"
                  className="absolute top-0 left-0 object-cover h-full w-full rounded-2xl z-0"
                />
              )}
              <div className="absolute inset-0 bg-black/44 group-hover:bg-black/64 transition-all duration-300 rounded-2xl z-10" />
              <div
                className="absolute inset-0 z-20"
                aria-label={first.title}
              />
              <div className="flex flex-col gap-4 p-8 relative z-30 md:w-3/5 pointer-events-none">
                <h3 className="text-5xl font-bold">{first.title}</h3>
                {first.cardText && (
                  <p className="text-xl">{first.cardText}</p>
                )}
                {first.cta?.href && first.cta?.buttonText ? (
                  <div className="w-fit pointer-events-auto">
                    <Cta
                      href={first.cta.href}
                      buttonText={first.cta.buttonText}
                      newTab={first.cta.newTab}
                      buttonColor="brand-white"
                      className="uppercase md:px-24 md:py-4"
                    />
                  </div>
                ) : null}
              </div>
              <div className="absolute top-0 left-0 w-full h-full border-2 border-black rounded-2xl group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300 pointer-events-none" />
            </div>
            {/* Two small cards - second and third event */}
            {list.length > 1 && (
              <div className="justify-between text-white w-1/3 gap-4 hidden md:flex flex-col
            md:flex-row">
                {rest.slice(0, 2).map((event) => (
                  <div
                    key={event._id}
                    className="flex rounded-2xl items-end relative flex-1 min-h-0 group overflow-visible"
                  >
                    {event.coverImage?.asset?._ref && (
                      <Image
                        id={event.coverImage.asset._ref}
                        alt={event.coverImage.alt ?? event.title}
                        width={765}
                        height={506}
                        mode="cover"
                        className="absolute top-0 left-0 object-cover h-full w-full rounded-2xl z-10"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/44 group-hover:bg-black/64 transition-all duration-300 rounded-2xl z-20" />
                    <div className="absolute top-0 left-0 w-full h-full border-2 border-black rounded-2xl group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300" />
                    <span className="text-xl font-bold p-4 z-30">{event.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
