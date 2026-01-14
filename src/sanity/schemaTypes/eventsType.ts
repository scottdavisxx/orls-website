import { defineType } from "sanity";
import { CalendarIcon } from "@sanity/icons";
import {
  title,
  subtitle,
  image,
  href,
  publishDate,
  altText,
  dateText,
  time,
} from "./sharedFields";

// Fields: Title, Subtitle, Image, href

export const eventsType = defineType({
  name: "events",
  title: "Events",
  type: "document",
  icon: CalendarIcon,
  fields: [title, subtitle, image, altText, href, dateText, time, publishDate],
});
