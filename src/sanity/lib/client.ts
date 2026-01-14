import { ClientConfig, createClient } from "next-sanity";
import { Event } from "./types";

import { apiVersion, dataset, projectId } from "../env";
import { eventsQuery } from "./queries";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

