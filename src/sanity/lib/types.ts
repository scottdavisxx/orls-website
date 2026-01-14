import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Event {
  _id: string;
  title: string;
  subtitle: string;
  image: SanityImageSource;
  href: string;
  publishDate: Date;
}
