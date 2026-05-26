import { defineLive } from "next-sanity/live";
import { client } from "./client";

const browserToken = process.env.NEXT_PUBLIC_SANITY_TOKEN;

if (!browserToken) {
  throw new Error("Missing Sanity token.");
}

export const { sanityFetch, SanityLive } = defineLive({
  client,
  browserToken,
  serverToken: false, // No server token needed for client-side live updates
});
