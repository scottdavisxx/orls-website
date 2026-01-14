import { groq } from "next-sanity";

const eventFields = groq`
  _id,
  title,
  subtitle,
  image,
  altText,
  href,
  publishDate,
  dateText,
  time,
`;

export const eventsQuery = groq`
  *[_type == "events"] | order(publishDate, _updatedAt desc) {
    ${eventFields}
  }
`;
