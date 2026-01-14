import { defineType } from "sanity";
import { CalendarIcon } from "@sanity/icons";
import { title, subtitle, image, href, publishDate } from "./sharedFields";

// Fields: Title, Subtitle, Image, href

export const eventsType = defineType({
  name: "events",
  title: "Events",
  type: "document",
  icon: CalendarIcon,
  fields: [title, subtitle, image, href, dateText, time, publishDate],
});
