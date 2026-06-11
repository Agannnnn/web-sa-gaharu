import { ImageProps } from "next/image";
import React from "react";
import CustomImage from "../components/CustomImage";

type NewsCardProps = {
  title: string;
  content: any[];
  imageUrl: ImageProps["src"];
  youtubeUrl?: string;
};

export default function NewsCard({
  title,
  content,
  imageUrl,
  youtubeUrl,
}: NewsCardProps) {
  return (
    <article className="group block h-full rounded-2xl border border-surface bg-white p-4 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <article className="flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
          {youtubeUrl?.match(/https\:\/\/youtu\.be\/{A-Za-z0-0}+/gi) &&
          youtubeUrl != "-" ? (
            <iframe
              className="absolute inset-0 h-full w-full rounded-xl"
              src={youtubeUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <CustomImage
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>

        <div className="flex flex-1 flex-col px-2 pt-5 pb-2 text-center">
          <h2 className="text-lg font-medium text-primary transition-colors group-hover:underline">
            {title}
          </h2>
          {content.map((c, i) => (
            <p className="mt-4 text-sm leading-7 text-text" key={i}>
              {c.children.map(
                (child: { text: any; marks: string | string[] }, i: any) => {
                  let text = child.text;
                  if (child.marks.includes("strong")) {
                    text = <strong>{text}</strong>;
                  }
                  if (child.marks.includes("em")) {
                    text = <em>{text}</em>;
                  }
                  return (
                    <React.Fragment key={`text-${i}`}>{text}</React.Fragment>
                  );
                },
              )}
            </p>
          ))}
        </div>
      </article>
    </article>
  );
}
