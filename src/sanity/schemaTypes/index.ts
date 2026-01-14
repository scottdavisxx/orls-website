import { type SchemaTypeDefinition } from "sanity";
import { eventsType } from "./eventsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventsType],
};
