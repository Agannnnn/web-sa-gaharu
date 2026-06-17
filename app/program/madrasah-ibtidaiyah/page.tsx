import CustomImage from "@/app/components/CustomImage";
import GallerySection from "@/app/components/GallerySection";
import JoinUsBanner from "@/app/components/JoinUsBanner";
import { fetchMadrasahIbtidaiyahProgram } from "@/lib/sanity/fetcher";

export default async function MadrasahIbtidaiyahPage() {
  const data = await fetchMadrasahIbtidaiyahProgram();

  return (
    <div className="bg-white">
      <section id="banner" className="relative">
        <CustomImage
          src={data?.headerImage?.asset?.url ?? ""}
          alt="Banner"
          width={4000}
          height={3000}
          preload
        />
      </section>
      <section id="content">
        {data?.contentImages?.map((image, i) => (
          <CustomImage
            key={i}
            src={image?.asset?.url ?? ""}
            alt={`Content Image ${i + 1}`}
            width={4000}
            height={3000}
          />
        ))}
      </section>
      <JoinUsBanner url={data?.joinUsImage?.asset?.url ?? ""} />
      <GallerySection
        images={
          data?.galleryImages?.map((image, i) => ({
            url: image?.asset?.url ?? "",
            alt: `Gallery Image ${i + 1}`,
          })) ?? []
        }
      />
    </div>
  );
}
