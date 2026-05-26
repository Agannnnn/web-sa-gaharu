import Image from "next/image";

interface LeaderCardProps {
  name: string;
  position?: string;
  imageUrl?: string;
}

export default function LeaderCard({
  name,
  position,
  imageUrl,
}: LeaderCardProps) {
  return (
    <article className="rounded-2xl border border-surface bg-white px-4 py-6 text-center shadow-md transition-transform duration-300 hover:-translate-y-1">
      <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-surface-soft sm:h-28 sm:w-28">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={position ? `${name} - ${position}` : name}
            width={300}
            height={300}
            className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28"
          />
        ) : (
          <div className="h-24 w-24 rounded-full bg-gray-100 sm:h-28 sm:w-28" />
        )}
      </div>
      <h2 className="text-sm font-bold text-primary sm:text-base">{name}</h2>
      {position && (
        <p className="mt-1 text-xs font-medium text-text sm:text-sm">
          {position}
        </p>
      )}
    </article>
  );
}
