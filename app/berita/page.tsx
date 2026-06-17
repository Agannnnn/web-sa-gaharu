import { fetchBerita } from "@/lib/sanity/fetcher";
import Container from "../components/Container";
import NewsCard from "../components/NewsCard";

export default async function CommunityPage() {
  const data = await fetchBerita();

  return (
    <div className="bg-white">
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data?.map((item) => (
              <NewsCard
                key={item._id}
                imageUrl={item?.thumbnail?.asset?.url || ""}
                youtubeUrl={item?.thumbnailAlt || undefined}
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
