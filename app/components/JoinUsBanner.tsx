import Image from "next/image";
import Button from "./Button";

export default function JoinUsBanner({ url }: { url: string }) {
  return (
    <section id="join-us" className="relative">
      <Image src={url} alt="Join Us Banner" width={4000} height={3000} />
      <Button
        variant="secondary"
        className="absolute top-1/2 text-[8px] lg:text-2xl right-4 lg:right-20 -translate-y-1/2 bg-white"
        size="sm"
      >
        Join Us
      </Button>
    </section>
  );
}
