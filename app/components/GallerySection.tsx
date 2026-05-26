import Image from "next/image";

type GalleryImage = {
  url: string;
  alt: string;
};

type GallerySectionProps = {
  images: Array<GalleryImage>;
};

export default function GallerySection({ images = [] }: GallerySectionProps) {
  return (
    <section id="gallery" className="mt-20 px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {images.map((image, i) => (
            <Image
              key={i}
              src={image.url}
              alt={image.alt}
              height={96}
              width={400}
              className="h-24 w-full object-cover transition duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
