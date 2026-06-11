import { ImageProps } from "next/image";
import Button from "./Button";
import CustomImage from "./CustomImage";

export default function JoinUsBanner({ url }: { url: ImageProps["src"] }) {
  return (
    <section id="join-us" className="relative">
      <CustomImage src={url} alt="Join Us Banner" width={4000} height={3000} />
      <Button
        variant="secondary"
        href="https://api.whatsapp.com/send/?phone=085352331928&text&type=phone_number&app_absent=0"
        className="absolute top-1/2 text-[8px] lg:text-2xl right-4 lg:right-20 -translate-y-1/2 bg-white"
        size="sm"
      >
        Join Us
      </Button>
    </section>
  );
}
