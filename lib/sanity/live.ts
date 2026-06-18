import { defineLive } from "next-sanity/live";
import { client } from "./client";

const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;
if (!token) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_TOKEN");
}

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
});
