import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { eventsQuery } from "@/sanity/lib/queries";
import { Event } from "@/sanity/lib/types";
import Image from "next/image";

export default async function EventsPage() {
  const events: Event[] = await client.fetch(eventsQuery);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Events</h1>

      <div className="space-y-6">
        {events.map((event) => (
          <div key={event._id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600">{event.subtitle}</p>
            <p>Date: {event.dateText}</p>
            <p>Time: {event.time}</p>
            {event.image && (
              <Image
                src={urlFor(event.image).width(400).url()}
                alt={event.altText}
                width={400}
                height={300}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
