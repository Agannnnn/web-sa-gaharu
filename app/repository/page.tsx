import { sanityFetch } from "@/lib/sanity/live";
import { QUERY_REPOSITORY_PAGE } from "@/lib/sanity/queries";
import Button from "../components/Button";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import RepositoryCard from "./RepositoryCard";

export default async function RepositoryPage() {
  const { data } = await sanityFetch({ query: QUERY_REPOSITORY_PAGE });

  console.log("Repository Data:", data);

  return (
    <div className="bg-white">
      <section className="bg-primary text-white py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-secondary font-semibold uppercase tracking-[0.2em] text-sm">
              Salampedia Repository
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Repository Pembelajaran
            </h1>
            <p className="text-white/90 leading-relaxed text-base lg:text-lg">
              Koleksi komprehensif panduan, kurikulum, buku, dan materi
              pembelajaran yang mendukung perjalanan pendidikan di Sekolah Alam
              Gaharu.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-surface">
        <Container>
          <div className="mb-12 max-w-3xl">
            <SectionHeading
              title="Materi Pembelajaran"
              subtitle="Akses berbagai panduan, buku, dan kurikulum pembelajaran yang siap tersambung ke Sanity CMS."
              alignment="left"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data?.map((item) => (
              <RepositoryCard
                key={item._id}
                cover={item.cover.asset.url ?? "https://placehold.co/300x400"}
                title={item.title ?? ""}
                documentLink={item.documentPdf.asset.url ?? "#"}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-primary text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ingin Lebih Mengenal Program Kami?
            </h2>
            <p className="text-base lg:text-lg text-white/90">
              Hubungi kami atau kunjungi sekolah untuk pengalaman langsung dan
              diskusi lebih lanjut tentang program-program kami.
            </p>
            <Button variant="secondary" size="md" href="/contact">
              HUBUNGI KAMI
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
