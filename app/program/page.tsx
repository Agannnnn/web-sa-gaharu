import Container from "@/app/components/Container";
import LeaderCard from "@/app/components/LeaderCard";
import ProgramItem from "@/app/components/ProgramItem";
import SectionHeading from "@/app/components/SectionHeading";
import { fetchProgram } from "@/lib/sanity/fetcher";

export default async function ProgramsPage() {
  const data = await fetchProgram();

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
                name={data?.daycareCoordinator ?? ""}
                position={"Daycare & Playgroup Leader"}
                imageUrl={data?.daycareLeaderImage?.asset?.url ?? ""}
              />
              <LeaderCard
                name={data?.raudhatulAthfalCoordinator ?? ""}
                position={"Raudhatul Athfal Leader"}
                imageUrl={data?.raudhatulAthfalLeaderImage?.asset?.url ?? ""}
              />
              <LeaderCard
                name={data?.madrasahIbtidaiyahCoordinator ?? ""}
                position={"Madrasah Ibtidaiyah"}
                imageUrl={data?.madrasahIbtidaiyahLeaderImage?.asset?.url ?? ""}
              />
              <LeaderCard
                name={data?.madrasahTsanawiyahCoordinator ?? ""}
                position={"Madrasah Tsanawiyah"}
                imageUrl={data?.madrasahTsanawiyahLeaderImage?.asset?.url ?? ""}
              />
              <LeaderCard
                name={data?.sekolahAvicennaInklusiCoordinator ?? ""}
                position={"Sekolah Avicenna Inklusi"}
                imageUrl={
                  data?.sekolahAvicennaInklusiLeaderImage?.asset?.url ?? ""
                }
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="space-y-16 lg:space-y-20">
            <ProgramItem
              program={{
                slug: "/program/daycare",
                title: "Daycare",
                imageUrl: data?.daycareThumbnail?.asset?.url ?? "",
                description:
                  "Gaharu Daycare hadir sebagai rumah kedua bagi si kecil, dengan mengedepankan nilai-nilai Islami, kedekatan dengan alam, dan pembentukan karakter mandiri sejak dini.",
              }}
              reversed={false}
            />
            <ProgramItem
              program={{
                slug: "/program/playgroup",
                title: "Playgroup",
                imageUrl: data?.playgroupThumbnail?.asset?.url ?? "",
                description:
                  "Playgroup Sekolah Alam Gaharu merupakan ruang eksplorasi bagi anak untuk mengasah kematangan emosional, sosial, dan kognitif sebagai bekal sebelum memasuki jenjang sekolah formal.",
              }}
              reversed={true}
            />
            <ProgramItem
              program={{
                slug: "/program/raudhatul-athfal",
                title: "Raudhatul Athfal",
                imageUrl: data?.raudhatulAthfalThumbnail?.asset?.url ?? "",
                description:
                  "RA Sekolah Alam Gaharu merupakan tempat untuk menumbuhkan karakter positif pada aspek kemandirian, mengenalkan al quran melalui metode qiroati, dan fokus terhadap aspek tumbuh kembang anak disesuaikan dengan perkembangan fitrahnya, sehingga anak, aktif, energic, dan kreatif",
              }}
              reversed={false}
            />
            <ProgramItem
              program={{
                slug: "/program/madrasah-ibtidaiyah",
                title: "Madrasah Ibtidaiyah",
                imageUrl: data?.madrasahIbtidaiyahThumbnail?.asset?.url ?? "",
                description:
                  "Madrasah Ibtidaiyyah (MI) Sekolah Alam Gaharu berfokus pada internalisasi nilai-nilai kebaikan universal dan nilai-nilai agama, pembiasaan  kebiasaan baik untuk menghasilkan karakter positif, mengasah fitrah bernalar dan belajar melalui interaksi terbaik dengan alam dan kehidupan di dalamnya, mengarahkan leadership agar mampu membina diri dan sesama, serta mengembangkan kekuatan terbaik dalam dirinya.",
              }}
              reversed={true}
            />
            <ProgramItem
              program={{
                slug: "/program/madrasah-tsanawiyah",
                title: "Madrasah Tsanawiyah",
                imageUrl: data?.madrasahTsanawiyahThumbnail?.asset?.url ?? "",
                description:
                  "Madrasah Tsanawiyah (MTs) Sekolah Alam Gaharu berfokus pada mengembangkan potensi dirinya sehingga dapat memiliki kecakapan hidup yang sesuai dengan minat bakat yang mengembangkan kecerdasan spiritual, intelektual dan kinestetik. ",
              }}
              reversed={false}
            />
            <ProgramItem
              program={{
                slug: "/program/sekolah-avicenna-inklusi",
                title: "Sekolah Avicenna Inklusi",
                imageUrl:
                  data?.sekolahAvicennaInklusiThumbnail?.asset?.url ?? "",
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
