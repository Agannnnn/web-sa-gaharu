import Image from "next/image";
import { notFound } from "next/navigation";
import Button from "../../components/Button";
import Container from "../../components/Container";
import SectionHeading from "../../components/SectionHeading";
import { repositoryData } from "../repositoryData";

type RepositoryDetailPageProps = {
  params: Promise<{
    tautanDokumen: string;
  }>;
};

export function generateStaticParams() {
  return repositoryData.map((item) => ({
    tautanDokumen: item.tautanDokumen,
  }));
}

export default async function RepositoryDetailPage({
  params,
}: RepositoryDetailPageProps) {
  const { tautanDokumen } = await params;
  const repositoryItem = repositoryData.find(
    (item) => item.tautanDokumen === tautanDokumen,
  );

  if (!repositoryItem) {
    notFound();
  }

  return (
    <div className="bg-white">
      <section className="py-16 lg:py-24 bg-primary text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] gap-10 lg:gap-14 items-center">
            <div className="space-y-6">
              <p className="text-secondary font-semibold uppercase tracking-[0.2em] text-sm">
                Repository Detail
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold">
                {repositoryItem.judul}
              </h1>
              <p className="text-white/90 leading-relaxed text-base lg:text-lg">
                {repositoryItem.ringkasan}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="md" href="/repository">
                  KEMBALI KE REPOSITORY
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl">
              <Image
                src={repositoryItem.urlGambar}
                alt={repositoryItem.judul}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain p-6"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-surface">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <SectionHeading
              title="Tentang Dokumen"
              subtitle="Struktur data ini dipersiapkan untuk migrasi ke Sanity CMS tanpa mengubah pola render halaman."
              alignment="left"
            />

            <div className="rounded-3xl bg-white border border-surface shadow-sm p-8 lg:p-12 space-y-4">
              <p className="text-text leading-relaxed">
                {repositoryItem.ringkasan}
              </p>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                Tautan Dokumen: {repositoryItem.tautanDokumen}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
