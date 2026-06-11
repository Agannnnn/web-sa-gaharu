import { sanityFetch } from "@/lib/sanity/live";
import { QUERY_ADMISI } from "@/lib/sanity/queries";
import type { AdmissionPageQueryResult } from "@/lib/sanity/queries.d";
import { ArrowRight } from "lucide-react";
import Button from "../components/Button";
import Container from "../components/Container";
import CustomImage from "../components/CustomImage";
import HighlightText from "../components/HighlightText";
import SectionHeading from "../components/SectionHeading";

/**
 * Admission page for Sekolah Alam Gaharu.
 * Displays admission requirements, procedures, post-admission steps, and contact information.
 * Accessible at: /admisi
 */

export default async function AdmissionPage() {
  const { data } = await sanityFetch({ query: QUERY_ADMISI });

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section
        className="bg-surface bg-right bg-cover h-[calc(100vh-64px)] bg-no-repeat"
        style={{
          backgroundImage: `url(${(data as AdmissionPageQueryResult | null | undefined)?.banner?.asset?.url})`,
        }}
      >
        <div className="py-12 lg:py-20 min-h-full bg-linear-to-r from-white/80 to-white/30 flex items-center justify-center">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* LEFT SIDE - TEXT */}
              <div className="space-y-4">
                {/* Admission Label */}
                <HighlightText>Admission</HighlightText>

                {/* Headline */}
                <h1 className="text-2xl lg:text-5xl font-bold leading-tight">
                  Terima Kasih Atas Antusias{" "}
                  <span className="text-2xl lg:text-5xl font-bold leading-tight text-primary">
                    Ayah Bunda
                  </span>
                </h1>

                {/* Description */}
                <div className="space-y-4 text-base text-sm lg:text-md leading-relaxed">
                  <p>
                    Sekolah Alam Gaharu adalah sebuah upaya menghadirkan
                    pendidikan sejati dengan misi menyiapkan generasi pemimpin
                    peradaban. Dengan mengembangkan model sekolah yang tidak
                    hanya asyik dengan dirinya, namun berupaya menyatu dengan
                    lingkungan sekitarnya. Menjadikan sekolah sebagai tempat
                    belajar, berbagi dan berkontribusi.
                  </p>
                  <p>
                    Apakah Sekolah Alam Gaharu merupakan sekolah yang ideal
                    untuk Ananda?
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-8">
                  {/* CTA Button */}
                  <Button variant="secondary" size="md" href="#requirements">
                    <ArrowRight size={20} className="mr-2" />
                    Lihat Persyaratan
                  </Button>

                  {/* Contact */}
                  <Button
                    variant="primary"
                    size="md"
                    href="https://wa.me/6281234567890"
                    target="_blank"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* PENERIMAAN SISWA BARU SECTION */}
      <section
        className="py-16 px-8 lg:py-24 lg:px-16 bg-white"
        id="requirements"
      >
        <Container>
          {/* Section Title */}
          <SectionHeading
            title="Penerimaan Siswa Baru"
            alignment="center"
            className="mb-16"
          />
        </Container>

        <div className="lg:max-w-[70%] mx-auto space-y-12">
          {(
            data as AdmissionPageQueryResult | null | undefined
          )?.biayaPendaftaran?.map((item, i) => (
            <CustomImage
              key={i}
              src={item?.asset?.url || ""}
              alt={`Biaya Pendaftaraan ${i + 1}`}
              height={1414}
              width={1999}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
