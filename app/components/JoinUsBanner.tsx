import Image from "next/image";
import Button from "./Button";

export default function JoinUsBanner({ url }: { url: string }) {
  return (
    <section id="join-us" className="relative">
      <Image src={url} alt="Join Us Banner" width={4000} height={3000} />
      <Button
        variant="primary"
        className="absolute top-1/2 right-4 lg:right-20 -translate-y-1/2"
        size="sm"
      >
        Join Us
      </Button>
    </section>
  );
}
