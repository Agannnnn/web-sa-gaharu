import { ArrowRight } from "lucide-react";
import { ImageProps } from "next/image";
import Button from "./Button";
import CustomImage from "./CustomImage";
import HighlightText from "./HighlightText";

interface Ekskul {
  slug: string;
  imageUrl: ImageProps["src"];
  title: string;
  label?: string;
  description?: string;
}

type EksulItemProps = {
  programEksul: Ekskul;
  reversed?: boolean;
};

export default function EksulItem({
  programEksul,
  reversed = false,
}: EksulItemProps) {
  return (
    <article
      key={programEksul.slug}
      className={`flex flex-col gap-6 lg:gap-10 lg:items-center ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-surface">
          <CustomImage
            src={programEksul.imageUrl}
            alt={programEksul.title}
            fill={true}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="max-w-xl space-y-8">
          <div className="space-y-4">
            {programEksul.label && <HighlightText>{programEksul.label}</HighlightText>}
            <h3 className="text-3xl lg:text-4xl font-bold text-primary">
              {programEksul.title}
            </h3>
            <p className="text-text leading-relaxed">{programEksul.description}</p>
          </div>

          <Button
            variant="secondary"
            size="md"
            href={`/ekstrakurikuler/${programEksul.slug}`}
          >
            <span className="flex items-center gap-2">
              <span>Telusuri</span>
              <ArrowRight width={16} height={16} />
            </span>
          </Button>
        </div>
      </div>
    </article>
  );
}
