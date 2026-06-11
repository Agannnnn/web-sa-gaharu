import { sanityFetch } from "@/lib/sanity/live";
import { NewsItem, QUERY_BERITA } from "@/lib/sanity/queries";
import Container from "../components/Container";
import NewsCard from "./NewsCard";

export default async function CommunityPage() {
  const { data } = await sanityFetch({ query: QUERY_BERITA });

  return (
    <div className="bg-white">
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {(data as null | undefined | NewsItem[])?.map((item) => (
              <NewsCard
                key={item._id}
                imageUrl={item?.thumbnail?.asset?.url || ""}
                title={item?.judul ?? ""}
                content={item?.konten ?? []}
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
