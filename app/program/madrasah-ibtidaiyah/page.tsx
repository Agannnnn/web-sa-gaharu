import CustomImage from "@/app/components/CustomImage";
import GallerySection from "@/app/components/GallerySection";
import JoinUsBanner from "@/app/components/JoinUsBanner";
import { sanityFetch } from "@/lib/sanity/live";
import {
  ProgramDetailPageResult,
  QUERY_MADRASAH_IBTIDAIYAH_PAGE,
} from "@/lib/sanity/queries";

export default async function MadrasahIbtidaiyahPage() {
  const { data } = await sanityFetch({ query: QUERY_MADRASAH_IBTIDAIYAH_PAGE });

  return (
    <div className="bg-white">
      <section id="banner" className="relative">
        <CustomImage
          src={
            (data as null | undefined | ProgramDetailPageResult)?.headerImage
              ?.asset?.url || ""
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
          <CustomImage
            key={i}
            src={image?.asset?.url || ""}
            alt={`Content Image ${i + 1}`}
            width={4000}
            height={3000}
          />
        ))}
      </section>
      <JoinUsBanner
        url={
          (data as null | undefined | ProgramDetailPageResult)?.joinUsImage
            ?.asset?.url || ""
        }
      />
      <GallerySection
        images={
          (
            data as null | undefined | ProgramDetailPageResult
          )?.galleryImages?.map((image, i) => ({
            url: image?.asset?.url || "",
            alt: `Gallery Image ${i + 1}`,
          })) ?? []
        }
      />
    </div>
  );
}
