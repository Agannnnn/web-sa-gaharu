import { fetchPustakaGaharu } from "@/lib/sanity/fetcher";
import Container from "../components/Container";
import RepositoryCard from "../components/RepositoryCard";

export default async function RepositoryPage() {
  const data = await fetchPustakaGaharu();

  console.log("Pustaka Gaharu Data:", data);

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
            {data?.map((item) => (
              <RepositoryCard
                key={item._id}
                cover={item?.cover?.asset?.url || ""}
                title={item.judul ?? ""}
                caption={item?.caption}
                documentLink={item?.link ?? ""}
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
