import { sanityFetch } from "@/lib/sanity/live";
import { QUERY_LANDING_PAGE } from "@/lib/sanity/queries";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "./components/Button";
import Carousel from "./components/Carousel";
import Container from "./components/Container";
import HighlightText from "./components/HighlightText";
import TestimonialCarousel from "./components/TestimonialCarousel";

export default async function Home() {
  const { data } = await sanityFetch({ query: QUERY_LANDING_PAGE });

  const carouselImages = Array.isArray(data?.carousel) ? data?.carousel : [];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <Carousel
        images={
          carouselImages.map((carouselImage, i) => ({
            url: carouselImage?.asset?.url ?? "",
            alt: `Carousel Image ${i + 1}`,
          })) ?? []
        }
      />

      {/* INTRODUCTION SECTION */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Overlapped Images */}
            <Image
              src={data?.banner1?.asset?.url ?? "https://placehold.co/450x350"}
              alt="Sekolah Alam Gaharu"
              width={450}
              height={350}
              className="w-full"
            />

            {/* Right Content */}
            <div className="order-1 lg:order-2 space-y-2">
              <HighlightText>Get To Know About Us</HighlightText>

              <h2 className="text-3xl lg:text-4xl font-bold">
                Dari Sekolah Ke Komunitas
              </h2>

              <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                Ke Peradaban
              </h2>

              <p className="text-base leading-relaxed text-justify">
                Sekolah Alam Gaharu tidak dapat dipisahkan dari sejarah awal
                keberadaannya. Bermula dari keinginan mendirikan 'tempat ngaji',
                berdirilah Nun Learning Center yang menyelenggarakan Lembaga
                Pendidikan Al Qur'an. Keberadaan lembaga ini dimaksudkan untuk
                membina generasi yang cerdas, berwawasan luas dan berakhlak
                mulia. Alasan ini pula yang selanjutnya mendorong pengembangan
                lembaga dengan mendirikan Lembaga Pendidikan berikutnya. Sebelum
                menemukan konsep pendidikan yang cocok, pasangan pendiri Sekolah
                Alam Gaharu, yaitu dr. Ummie Wasitoh, Sp. PD dan Drs. Ahmad
                Rofie Usmani berkeliling mengunjungi berbagai lembaga dan konsep
                pendidikan ke sebagian penjuru nusantara, hingga akhirnya
                memilih konsep sekolahalam dengan harapan melalui pendidikan
                yang dirintis ini mampu menjawab permasalahan kerusakan
                lingkungan yang terjadi hari ini.
              </p>

              <Button variant="secondary" size="md">
                <div className="flex flex-row items-center gap-2">
                  <span>DISCOVER MORE</span>
                  <ArrowRight height={16} width={16} />
                </div>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="bg-primary py-16 lg:py-20">
        <Container>
          <TestimonialCarousel
            testimonials={
              data?.testimoni?.map((t) => ({
                message: t.pesan,
                owner: t.penulis,
                position: t.jabatan,
              })) ?? []
            }
          />
        </Container>
      </section>

      {/* PROGRAM SECTION */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <HighlightText>Program</HighlightText>

              <div className="flex flex-row items-center text-3xl lg:text-4xl font-bold gap-2">
                <h2>Program</h2>
                <h2 className="text-primary">Pendidikan</h2>
              </div>

              <p className="text-text text-base leading-relaxed">
                Sekolah Alam Gaharu menghadirkan pendidikan berbasis nilai
                Qurani yang membentuk anak menjadi pribadi berakhlak, mandiri,
                dan peduli lingkungan. Pembelajaran dirancang sesuai fitrah anak
                untuk menumbuhkan jiwa pemimpin yang bermanfaat bagi
                masyarakat.Di bawah naungan Yayasan Nun Bina Muda Indonesia,
                Sekolah Alam Gaharu menyediakan jenjang pendidikan mulai dari
                Daycare, Playgroup, RA, MI, MTs, hingga Sekolah Inklusi.
              </p>

              <Button variant="secondary" size="md" href="/programs">
                <div className="flex flex-row items-center gap-2">
                  <span>DISCOVER MORE</span>
                  <ArrowRight height={16} width={16} />
                </div>
              </Button>
            </div>

            {/* Right Image */}
            <div>
              <Image
                src={
                  data?.banner2?.asset?.url ?? "https://placehold.co/450x350"
                }
                alt="Program Pendidikan"
                width={450}
                height={350}
                className="w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ADMISSIONS SECTION */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <img
                src={"https://placehold.co/457x609/png"}
                className="mx-auto"
              />
            </div>

            {/* Right - Program List */}
            <div className="space-y-4">
              <div className="flex flex-col items-start text-3xl lg:text-4xl font-bold gap-2">
                <h2 className="text-primary italic">Timeline</h2>
                <h2>Penerimaan Siswa Baru</h2>
              </div>

              <p>
                Hubungi Bu Aisyah
                <br />
                <b>0853-5233-1928</b>
              </p>

              <div className="flex flex-col items-start">
                <p className="font-bold">Program Pendidikan</p>
                <ul>
                  <li>Daycare</li>
                  <li>Playgroup</li>
                  <li>Madrasah Ibtidaiyah (SD)</li>
                  <li>Madrasah Tsanawiyah (SMP)</li>
                  <li>Sekolah Inklusi</li>
                </ul>
              </div>

              <div className="flex flex-col items-start">
                <p className="font-bold">Lokasi</p>
                <p>Sekolah Alam Gaharu</p>
                <p>Jl. RT Endung Suria 1 No.210</p>
                <p>Baleendah, Kabupaten Bandung 40375</p>
              </div>

              <Button variant="secondary" size="md" href="/programs">
                <div className="flex flex-row items-center gap-2">
                  <span>START YOUR JOURNEY</span>
                  <ArrowRight height={16} width={16} />
                </div>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
