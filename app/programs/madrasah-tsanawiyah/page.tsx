import Button from "@/app/components/Button";
import GallerySection from "@/app/components/GallerySection";
import JoinUsBanner from "@/app/components/JoinUsBanner";
import { sanityFetch } from "@/lib/sanity/live";
import {
  ProgramDetailPageResult,
  QUERY_MADRASAH_TSANAWIYAH_PAGE,
} from "@/lib/sanity/queries";
import Image from "next/image";

export default async function MadrasahTsanawiyahPage() {
  const { data } = await sanityFetch({ query: QUERY_MADRASAH_TSANAWIYAH_PAGE });

  return (
    <div className="bg-white">
      <section id="banner" className="relative">
        <Image
          src={
            (data as null | undefined | ProgramDetailPageResult)?.headerImage
              ?.asset?.url ?? "https://placehold.co/600x400/png"
          }
          alt="Banner"
          width={4000}
          height={3000}
          preload
        />
      </section>
      <section id="content">
        {(
          data as null | undefined | ProgramDetailPageResult
        )?.contentImages?.map((image, i) => (
          <Image
            key={i}
            src={image?.asset?.url ?? "https://placehold.co/600x400/png"}
            alt={`Content Image ${i + 1}`}
            width={4000}
            height={3000}
          />
        ))}
      </section>
      <JoinUsBanner
        url={
          (data as null | undefined | ProgramDetailPageResult)?.joinUsImage
            ?.asset?.url ?? "https://placehold.co/600x400/png"
        }
      />
      <GallerySection
        images={
          (
            data as null | undefined | ProgramDetailPageResult
          )?.galleryImages?.map((image, i) => ({
            url: image?.asset?.url ?? "https://placehold.co/600x400/png",
            alt: `Gallery Image ${i + 1}`,
          })) ?? []
        }
      />
    </div>
  );
}
