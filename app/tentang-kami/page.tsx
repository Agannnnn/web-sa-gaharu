import AboutUsSubNavigation from "@/app/components/AboutUsSubNavigation";
import { fetchTentangKami } from "@/lib/sanity/fetcher";
import type { TentangKamiPage } from "@/lib/sanity/queries.d";
import { ArrowRight } from "lucide-react";
import Button from "../components/Button";
import CustomImage from "../components/CustomImage";

/**
 * About Us page for Sekolah Alam Gaharu.
 * Displays school vision, mission, values (IHSAN), and four pillars of education.
 * Features tabbed navigation for different content sections.
 * Accessible at: /tentang-kami
 */

export default async function AboutPage() {
  const tabItems = [
    { id: "sekolah-komunitas", label: "Membangun Peradaban Dari Sekolah" },
    { id: "visi-misi", label: "Visi & Misi" },
    { id: "nilai-nilai", label: "Nilai - Nilai" },
  ];

  const data = await fetchTentangKami();

  return (
    <div className="bg-white">
      {/* SUB-NAVIGATION BAR */}
      <AboutUsSubNavigation tabItems={tabItems} />

      {/* MAIN CONTENT */}
      <div id="sekolah-komunitas" className="bg-white">
        {/* INTRODUCTION SECTION */}
        <section id="sekolah-komunitas" className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-4 order-2 lg:order-1">
                <div className="text-3xl lg:text-4xl font-bold">
                  <h1>Dari Sekolah Ke</h1>
                  <h1 className=" text-primary">Komunitas Ke Peradaban</h1>
                </div>

                <p className="text-text text-base leading-relaxed">
                  It takes a village to raise a child…
                </p>

                <p className="text-text text-base leading-relaxed">
                  Kata-kata bijak dari Afrika tersebut banyak dikutip untuk
                  menggambarkan perlunya dukungan dan kerjasama semua pihak
                  dalam menumbuhkan dan mendidik anak. Tidak cukup hanya Sekolah
                  dan orangtua, melainkan juga butuh peran masyarakat atau
                  komunitas. Perlu sebuah “kampung” untuk mendidik anak.
                </p>

                <Button
                  variant="secondary"
                  size="md"
                  href="https://www.youtube.com/channel/UCCZPAJNGlgUn2P94G4ti77A"
                  target="_blank"
                >
                  <div className="flex flex-row items-center gap-2">
                    <span>PROFIL SEKOLAH</span>
                    <ArrowRight height={16} width={16} />
                  </div>
                </Button>
              </div>

              {/* Right Content - Image Collage */}
              <CustomImage
                src={
                  (data as undefined | null | TentangKamiPage)?.banner1?.asset
                    ?.url || ""
                }
                alt="Sekolah Komunitas"
                width={600}
                height={400}
                className="mx-auto order-1 lg:order-2"
              />
            </div>
          </div>
        </section>

        {/* VISI MISI SECTION */}
        <section id="visi-misi">
          <CustomImage
            src={
              (data as undefined | null | TentangKamiPage)?.visiMisiDanPilar
                ?.asset?.url || ""
            }
            alt="Visi Misi dan Pilar"
            width={1240}
            height={2480}
            className="mx-auto order-1 lg:order-2"
          />
        </section>

        {/* NILAI-NILAI SECTION */}
        <section id="nilai-nilai">
          <CustomImage
            src={
              (data as undefined | null | TentangKamiPage)?.nilaiNilai?.asset
                ?.url || ""
            }
            alt="Nilai-nilai"
            width={1240}
            height={2480}
            className="mx-auto order-1 lg:order-2"
          />
        </section>
      </div>
    </div>
  );
}
