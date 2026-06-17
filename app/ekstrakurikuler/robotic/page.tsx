import Container from "@/app/components/Container";
import NewsCard from "@/app/components/NewsCard";
import { fetchEkstrakurikulerDetail } from "@/lib/sanity/fetcher";

export default async function EkskulRobotic() {
  const data = await fetchEkstrakurikulerDetail("robotic");

  return (
    <div className="bg-white">
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data?.map((item) => (
              <NewsCard
                key={item._id}
                imageUrl={item?.thumbnail?.asset?.url ?? ""}
                youtubeUrl={item?.thumbnailAlt ?? undefined}
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
