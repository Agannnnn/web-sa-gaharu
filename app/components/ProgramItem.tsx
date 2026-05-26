import Image from "next/image";
import Button from "./Button";
import HighlightText from "./HighlightText";
import { ArrowRight } from "lucide-react";

interface Program {
  slug: string;
  imageUrl: string;
  title: string;
  label?: string;
  description?: string;
}

type ProgramItemProps = {
  program: Program;
  reversed?: boolean;
};

export default function ProgramItem({
  program,
  reversed = false,
}: ProgramItemProps) {
  return (
    <article
      key={program.slug}
      className={`flex flex-col gap-6 lg:gap-10 lg:items-center ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-surface bg-surface">
          <Image
            src={program.imageUrl}
            alt={program.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="max-w-xl space-y-8">
          <div className="space-y-4">
            {program.label && <HighlightText>{program.label}</HighlightText>}
            <h3 className="text-3xl lg:text-4xl font-bold text-primary">
              {program.title}
            </h3>
            <p className="text-text leading-relaxed">{program.description}</p>
          </div>

          <Button
            variant="secondary"
            size="md"
            href={`/programs/${program.slug}`}
          >
            <span className="flex items-center gap-2">
              <span>DISCOVER MORE</span>
              <ArrowRight width={16} height={16} />
            </span>
          </Button>
        </div>
      </div>
    </article>
  );
}
