import { sanityFetch } from "@/lib/sanity/live";
import { QUERY_NEWS_PAGE } from "@/lib/sanity/queries";
import Container from "../components/Container";
import NewsCard from "./NewsCard";

export default async function CommunityPage() {
  const { data } = await sanityFetch({ query: QUERY_NEWS_PAGE });

  console.log(data);

  return (
    <div className="bg-white">
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data?.map((item) => (
              <NewsCard
                key={item._id}
                imageUrl={item.thumbnail.asset.url}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
