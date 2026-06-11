import { sanityFetch } from "@/lib/sanity/live";
import { QUERY_PUSTAKA_GAHARU, RepositoryItem } from "@/lib/sanity/queries";
import Container from "../components/Container";
import RepositoryCard from "./RepositoryCard";

export default async function RepositoryPage() {
  const { data } = await sanityFetch({ query: QUERY_PUSTAKA_GAHARU });

  return (
    <div className="bg-white">
      <section className="bg-primary text-white py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-secondary font-semibold uppercase tracking-[0.2em] text-sm">
              PUSTAKA GAHARU
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Hasil Karya Siswa Dan Guru
            </h1>
            <p className="text-white/90 leading-relaxed text-base lg:text-lg">
              Merekam jejak proses belajar dan berkarya sebagai bagian dari
              perjalanan bertumbuh
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-surface">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {(data as null | undefined | RepositoryItem[])?.map((item) => (
              <RepositoryCard
                key={item._id}
                cover={item?.cover?.asset?.url || ""}
                title={item.judul ?? ""}
                documentLink={item?.documentPdf?.asset?.url ?? "#"}
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
