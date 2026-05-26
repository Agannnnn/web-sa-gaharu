import Button from "@/app/components/Button";
import GallerySection from "@/app/components/GallerySection";
import { sanityFetch } from "@/lib/sanity/live";
import {
  QUERY_MADRASAH_TSANAWIYAH_PAGE,
  QUERY_PLAYGROUP_PAGE,
} from "@/lib/sanity/queries";
import Image from "next/image";

export default async function MadrasahTsanawiyahPage() {
  const { data } = await sanityFetch({ query: QUERY_MADRASAH_TSANAWIYAH_PAGE });

  return (
    <div className="bg-white">
      <section id="banner" className="relative">
        <Image
          src={
            data?.headerImage?.asset.url ?? "https://placehold.co/600x400/png"
          }
          alt="Banner"
          width={4000}
          height={3000}
          preload
        />
      </section>
      <section id="content">
        {data?.contentImages?.map((image, i) => (
          <Image
            key={i}
            src={image?.asset.url ?? "https://placehold.co/600x400/png"}
            alt={`Content Image ${i + 1}`}
            width={4000}
            height={3000}
          />
        ))}
      </section>
      <section id="join-us" className="relative">
        <Image
          src={
            data?.joinUsImage?.asset.url ?? "https://placehold.co/600x400/png"
          }
          alt="Join Us Banner"
          width={4000}
          height={3000}
        />
        <Button
          variant="primary"
          className="absolute top-1/2 right-20 -translate-y-1/2"
        >
          Join Us
        </Button>
      </section>
      <GallerySection
        images={
          data?.galleryImages?.map((image, i) => ({
            url: image?.asset?.url ?? "https://placehold.co/600x400/png",
            alt: `Gallery Image ${i + 1}`,
          })) ?? []
        }
      />
    </div>
  );
}
