import Container from "@/app/components/Container";
import LeaderCard from "@/app/components/LeaderCard";
import ProgramItem from "@/app/components/ProgramItem";
import SectionHeading from "@/app/components/SectionHeading";
import { sanityFetch } from "@/lib/sanity/live";
import {
  ProgramsPageQueryResult,
  QUERY_PROGRAMS_PAGE,
} from "@/lib/sanity/queries";

export default async function ProgramsPage() {
  const { data } = await sanityFetch({ query: QUERY_PROGRAMS_PAGE });

  return (
    <div className="bg-white">
      <section className="pt-10 pb-16 lg:pt-14 lg:pb-20">
        <Container>
          <div className="space-y-8 lg:space-y-12">
            <div className="max-w-3xl">
              <SectionHeading title="Programs Leaders" alignment="left" />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
              <LeaderCard
                name={
                  (data as null | undefined | ProgramsPageQueryResult)
                    ?.daycareCoordinator ?? ""
                }
                position={"Daycare & Playgroup Leader"}
                imageUrl={
                  (data as null | undefined | ProgramsPageQueryResult)
                    ?.daycareLeaderImage?.asset?.url ??
                  "https://placehold.co/300x300/png"
                }
              />
              <LeaderCard
                name={
                  (data as null | undefined | ProgramsPageQueryResult)
                    ?.raudhatulAthfalCoordinator ?? ""
                }
                position={"Daycare & Playgroup Leader"}
                imageUrl={
                  (data as null | undefined | ProgramsPageQueryResult)
                    ?.raudhatulAthfalLeaderImage?.asset?.url ??
                  "https://placehold.co/300x300/png"
                }
              />
              <LeaderCard
                name={
                  (data as null | undefined | ProgramsPageQueryResult)
                    ?.madrasahIbtidaiyahCoordinator ?? ""
                }
                position={"Daycare & Playgroup Leader"}
                imageUrl={
                  (data as null | undefined | ProgramsPageQueryResult)
                    ?.madrasahIbtidaiyahLeaderImage?.asset?.url ??
                  "https://placehold.co/300x300/png"
                }
              />
              <LeaderCard
                name={
                  (data as null | undefined | ProgramsPageQueryResult)
                    ?.madrasahTsanawiyahCoordinator ?? ""
                }
                position={"Daycare & Playgroup Leader"}
                imageUrl={
                  (data as null | undefined | ProgramsPageQueryResult)
                    ?.madrasahTsanawiyahLeaderImage?.asset?.url ??
                  "https://placehold.co/300x300/png"
                }
              />
              <LeaderCard
                name={
                  (data as null | undefined | ProgramsPageQueryResult)
                    ?.sekolahAvicennaInklusiCoordinator ?? ""
                }
                position={"Daycare & Playgroup Leader"}
                imageUrl={
                  (data as null | undefined | ProgramsPageQueryResult)
                    ?.sekolahAvicennaInklusiLeaderImage?.asset?.url ??
                  "https://placehold.co/300x300/png"
                }
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl mb-12">
            <SectionHeading
              title="Program List"
              subtitle="Urutan program dibuat zigzag di desktop dan tetap stacked di mobile untuk membaca yang lebih alami."
              alignment="left"
            />
          </div>

          <div className="space-y-16 lg:space-y-20">
            <ProgramItem
              program={{
                slug: "daycare",
                title: "Daycare",
                imageUrl:
                  (data as null | undefined | ProgramsPageQueryResult)
                    ?.daycareThumbnail?.asset?.url ??
                  "https://placehold.co/600x400/png",
                description:
                  "Gaharu Daycare hadir sebagai rumah kedua bagi si kecil, dengan mengedepankan nilai-nilai Islami, kedekatan dengan alam, dan pembentukan karakter mandiri sejak dini.",
              }}
              reversed={false}
            />
            <ProgramItem
              program={{
                slug: "playgroup",
                title: "Playgroup",
                imageUrl:
                  (data as null | undefined | ProgramsPageQueryResult)
                    ?.playgroupThumbnail?.asset?.url ??
                  "https://placehold.co/600x400/png",
                description:
                  "Playgroup Sekolah Alam Gaharu merupakan ruang eksplorasi bagi anak untuk mengasah kematangan emosional, sosial, dan kognitif sebagai bekal sebelum memasuki jenjang sekolah formal.",
              }}
              reversed={true}
            />
            <ProgramItem
              program={{
                slug: "raudhatul-athfal",
                title: "Raudhatul Athfal",
                imageUrl:
                  (data as null | undefined | ProgramsPageQueryResult)
                    ?.raudhatulAthfalThumbnail?.asset?.url ??
                  "https://placehold.co/600x400/png",
                description:
                  "RA Sekolah Alam Gaharu merupakan tempat untuk menumbuhkan karakter positif pada aspek kemandirian, mengenalkan al quran melalui metode qiroati, dan fokus terhadap aspek tumbuh kembang anak disesuaikan dengan perkembangan fitrahnya, sehingga anak, aktif, energic, dan kreatif",
              }}
              reversed={false}
            />
            <ProgramItem
              program={{
                slug: "madrasah-ibtidaiyah",
                title: "Madrasah Ibtidaiyah",
                imageUrl:
                  (data as null | undefined | ProgramsPageQueryResult)
                    ?.madrasahIbtidaiyahThumbnail?.asset?.url ??
                  "https://placehold.co/600x400/png",
                description:
                  "Madrasah Ibtidaiyyah (MI) Sekolah Alam Gaharu berfokus pada  internalisasi nilai-nilai kebaikan universal dan nilai-nilai agama, pembiasaan  kebiasaan baik untuk menghasilkan karakter positif, mengasah fitrah bernalar dan belajar melalui interaksi terbaik dengan alam dan kehidupan di dalamnya, mengarahkan leadership agar mampu membina diri dan sesama, serta mengembangkan kekuatan terbaik dalam dirinya.",
              }}
              reversed={true}
            />
            <ProgramItem
              program={{
                slug: "madrasah-tsanawiyah",
                title: "Madrasah Tsanawiyah",
                imageUrl:
                  (data as null | undefined | ProgramsPageQueryResult)
                    ?.madrasahTsanawiyahThumbnail?.asset?.url ??
                  "https://placehold.co/600x400/png",
                description:
                  "Madrasah Tsanawiyah (MTs) Sekolah Alam Gaharu berfokus pada mengembangkan potensi dirinya sehingga dapat memiliki kecakapan hidup yang sesuai dengan minat bakat yang mengembangkan kecerdasan spiritual, intelektual dan kinestetik. ",
              }}
              reversed={false}
            />
            <ProgramItem
              program={{
                slug: "sekolah-avicenna-inklusi",
                title: "Sekolah Avicenna Inklusi",
                imageUrl:
                  (data as null | undefined | ProgramsPageQueryResult)
                    ?.sekolahAvicennaInklusiThumbnail?.asset?.url ??
                  "https://placehold.co/600x400/png",
                description:
                  "Sekolah Alam Gaharu berkomitmen menghadirkan pendidikan yang ramah dan inklusif bagi setiap anak, termasuk anak berkebutuhan khusus. Program inklusi kami dirancang untuk mengakomodasi kebutuhan dan potensi unik setiap siswa melalui pendekatan yang tepat dan terarah.",
              }}
              reversed={true}
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
