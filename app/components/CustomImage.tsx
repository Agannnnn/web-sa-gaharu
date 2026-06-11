"use client";

import { isImageLoadable } from "@/lib/utils/checkImage";
import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

export default function CustomImage({
  src,
  alt,
  width,
  height,
  ...props
}: ImageProps) {
  const [loadable, setLoadable] = useState(false);

  useEffect(() => {
    if (!src) return;

    isImageLoadable(src.toString())
      .then((result) => setLoadable(result))
      .catch(() => setLoadable(false));
  }, []);

  if (loadable) {
    return (
      <Image
        src={src!}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        {...props}
      />
    );
  } else {
    return (
      <div className="animate-pulse rounded-2xl w-full h-full flex items-center justify-center">
        <div className="bg-gray-300" style={{ width, height }}></div>
      </div>
    );
  }
}
