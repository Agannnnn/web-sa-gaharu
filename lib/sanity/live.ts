import { defineLive } from "next-sanity/live";
import { client } from "./client";

const rawToken = process.env.NEXT_PUBLIC_SANITY_TOKEN;
const token = rawToken && rawToken.trim().length > 0 ? rawToken : false;

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
});
