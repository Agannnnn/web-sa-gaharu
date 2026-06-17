import { ImageProps } from "next/image";
import Link from "next/link";
import CustomImage from "./CustomImage";

export type RepositoryItem = {
  title: string;
  caption?: string;
  cover: ImageProps["src"];
  documentLink: string;
};

type RepositoryCardProps = RepositoryItem;

export default function RepositoryCard({
  title,
  caption,
  cover,
  documentLink,
}: RepositoryCardProps) {
  return (
    <Link
      href={documentLink}
      target="_blank"
      className="group block h-full overflow-hidden rounded-2xl border border-surface bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <article className="flex h-full flex-col">
        <div className="relative bg-surface-soft p-4">
          <div
            className={`relative mx-auto overflow-hidden rounded-xl bg-surface min-h-[400px] aspect-[3/4]`}
          >
            <CustomImage
              src={cover}
              alt={title}
              fill
              className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h2 className="text-lg font-bold text-primary transition-colors group-hover:underline">
            {title}
          </h2>

          {caption && (
            <p className="mt-2 text-sm leading-relaxed text-text">{caption}</p>
          )}

          <div className="mt-6">
            <span className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-opacity group-hover:opacity-90">
              Lihat Dokumen
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
