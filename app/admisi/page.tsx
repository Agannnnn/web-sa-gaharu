import { sanityFetch } from "@/lib/sanity/live";
import { QUERY_ADMISI } from "@/lib/sanity/queries";
import type { AdmissionPageQueryResult } from "@/lib/sanity/queries.d";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Button from "../components/Button";
import Container from "../components/Container";
import HighlightText from "../components/HighlightText";
import SectionHeading from "../components/SectionHeading";

/**
 * Admission page for Sekolah Alam Gaharu.
 * Displays admission requirements, procedures, post-admission steps, and contact information.
 * Accessible at: /admission
 */

export default async function AdmissionPage() {
  const { data } = await sanityFetch({ query: QUERY_ADMISI });

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section
        className="bg-right bg-cover h-[calc(100vh-64px)] bg-no-repeat"
        style={{
          backgroundImage: `url(${(data as AdmissionPageQueryResult | null | undefined)?.banner?.asset?.url ?? "https://placehold.co/2480x4980/png"})`,
        }}
      >
        <div className="py-12 lg:py-20 h-full lg:bg-transparent bg-white/85 flex items-center justify-center">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* LEFT SIDE - TEXT */}
              <div className="space-y-4">
                {/* Admission Label */}
                <HighlightText>Admission</HighlightText>

                {/* Headline */}
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Terima Kasih Atas Antusias{" "}
                  <span className="text-4xl lg:text-5xl font-bold leading-tight text-primary">
                    Ayah Bunda
                  </span>
                </h1>

                {/* Description */}
                <div className="space-y-4 text-base leading-relaxed">
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

                {/* CTA Button */}
                <Button variant="secondary" size="md" href="#requirements">
                  <ArrowRight size={20} className="mr-2" />
                  Lihat Persyaratan
                </Button>
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
            <Image
              key={i}
              src={item?.asset?.url ?? "https://placehold.co/1999x1414/png"}
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
