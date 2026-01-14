import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Event {
  _id: string;
  title: string;
  subtitle: string;
  image: SanityImageSource;
  altText: string;
  href: string;
  dateText: string;
  time: string;
  publishDate: Date;
}
