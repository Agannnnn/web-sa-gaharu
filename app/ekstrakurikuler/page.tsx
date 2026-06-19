import Container from "@/app/components/Container";
import ProgramItem from "@/app/components/ProgramItem";
import { fetchEkstrakurikulerProgram } from "@/lib/sanity/fetcher";

export default async function EkstrakurikulerPage() {
  const data = await fetchEkstrakurikulerProgram();

  console.log(data);

  return (
    <div className="bg-white">
      <section className="py-16 lg:py-24">
        <Container>
          <div className="space-y-16 lg:space-y-20">
            <ProgramItem
              program={{
                slug: "/ekstrakurikuler/basket",
                title: "Basketball",
                imageUrl: data?.basketBallThumbnail?.asset?.url ?? "",
                description:
                  "Ekskul Basketball bukan hanya tentang mencetak poin, tapi tentang membentuk karakter.Dalam setiap latihan dan pertandingan, siswa belajar arti kerjasama, ketekunan, dan semangat pantang menyerah.Di lapangan, mereka tidak hanya bermain tapi tumbuh sebagai pribadi yang kuat, tangguh, dan berakhlak mulia.",
              }}
              reversed={false}
            />
            <ProgramItem
              program={{
                slug: "/ekstrakurikuler/taekwondo",
                title: "Taekwondo",
                imageUrl: data?.taekwondoThumbnail?.asset?.url ?? "",
                description:
                  "Ekskul Taekwondo di Sekolah Alam Gaharu bukan hanya melatih fisik, tapi juga membentuk jiwa.Dengan pendekatan disiplin, spiritualitas, dan kebugaran, siswa diajak menjadi pribadi yang kuat, rendah hati, dan penuh semangat.Setiap gerakan adalah proses belajar untuk mengendalikan diri, menghormati orang lain, dan terus bertumbuh menjadi lebih baik.",
              }}
              reversed={true}
            />
            <ProgramItem
              program={{
                slug: "/ekstrakurikuler/handlettering",
                title: "Handlettering",
                imageUrl: data?.handletteringThumbnail?.asset?.url ?? "",
                description:
                  "Ekskul Handlettering Club mengajak siswa mengenal seni menulis indah dengan penuh kesabaran dan kreativitas.Di dalamnya, siswa tidak hanya belajar stroke demi stroke huruf, tetapi juga menggunakannya dalam journaling kreatif yang menggambarkan ekspresi diri, rasa syukur, dan nilai-nilai positif.Sebuah kegiatan yang melatih fokus, estetika, dan kepekaan makna dalam bentuk visual yang menginspirasi.",
              }}
              reversed={false}
            />
            <ProgramItem
              program={{
                slug: "/ekstrakurikuler/robotic",
                title: "Robotic Club",
                imageUrl: data?.roboticClubThumbnail?.asset?.url ?? "",
                description:
                  "Ekskul Robotic Club hadir untuk menumbuhkan rasa ingin tahu dan kecintaan anak terhadap teknologi.Bersama fasilitator berpengalaman, anak-anak akan mengeksplorasi dunia robotika dengan pendekatan kontekstual dan menyenangkan.",
              }}
              reversed={true}
            />
            <ProgramItem
              program={{
                slug: "/ekstrakurikuler/archery",
                title: "Archery Club",
                imageUrl: data?.archeryClubThumbnail?.asset?.url ?? "",
                description:
                  "Ekskul Archery Club bukan hanya tentang membidik dan melepas anak panah.Ini adalah latihan untuk fokus, mengendalikan diri, dan tumbuh menjadi pribadi yang kuat, tenang, dan bertaqwa.Melalui semangat sunnah, siswa belajar bahwa kekuatan sejati lahir dari disiplin dan niat yang lurus.",
              }}
              reversed={false}
            />
            <ProgramItem
              program={{
                slug: "/ekstrakurikuler/kpa",
                title: "KPA",
                imageUrl: data?.kpaThumbnail?.asset?.url ?? "",
                description:
                  "Ekskul Pecinta Alam hadir untuk menumbuhkan rasa cinta, hormat, dan tanggung jawab terhadap alam.Melalui kegiatan luar ruang yang seru dan bermakna, siswa belajar menjadi pribadi yang tangguh, peduli, dan bersyukur atas ciptaan-Nya.",
              }}
              reversed={true}
            />
            <ProgramItem
              program={{
                slug: "/ekstrakurikuler/art",
                title: "Art Club",
                imageUrl: data?.artClubThumbnail?.asset?.url ?? "",
                description:
                  "Ekskul Art Club menjadi ruang bebas bagi siswa untuk mengekspresikan diri dan mengeksplorasi imajinasi melalui seni.Dengan pendekatan alam dan teknik seni yang variatif, anak-anak diajak untuk menemukan jati diri, membangun rasa percaya diri, dan terinspirasi untuk berkarya.",
              }}
              reversed={false}
            />
            <ProgramItem
              program={{
                slug: "/ekstrakurikuler/steam",
                title: "STEAM",
                imageUrl: data?.steamClubThumbnail?.asset?.url ?? "",
                description:
                  "STEAM adalah wadah eksplorasi interdisipliner yang menyenangkan dan penuh tantangan.Di sini, siswa belajar menjadi pemikir kritis dan pencipta solusi dengan menggabungkan ilmu pengetahuan, seni, dan teknologi.Semua dilakukan dengan cara yang kontekstual, kolaboratif, dan penuh rasa ingin tahu sesuai dengan semangat Sekolah Alam Gaharu.",
              }}
              reversed={true}
            />
            <ProgramItem
              program={{
                slug: "/ekstrakurikuler/english",
                title: "English Club",
                imageUrl: data?.englishClubThumbnail?.asset?.url ?? "",
                description:
                  "English Club bukan hanya tempat belajar bahasa, tapi juga ruang ekspresi.Di sini siswa diajak untuk berani bicara, menulis dengan imajinasi, dan menikmati proses berbahasa Inggris melalui proyek-proyek kreatif seperti membuat puisi, cerita, atau pertunjukan kecil.Dengan pendekatan yang menyenangkan dan penuh makna, siswa belajar menyampaikan isi pikirannya secara utuh dengan kata, nada, dan makna.",
              }}
              reversed={false}
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
