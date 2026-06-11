import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="mb-12 text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Be Part Of Our Community!
          </h2>
          <Link
            href={"/tentang-kami"}
            className="bg-secondary hover:bg-[#a8d43a] text-primary font-bold py-3 px-8 rounded-lg transition-colors inline-block"
          >
            TENTANG KAMI
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-12 border-t border-b border-[#024126] py-8">
          <Link
            href="https://wa.me/+6285332331938"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
            aria-label="WhatsApp"
          >
            <div className="w-12 h-12 rounded-lg border-2 border-white hover:border-secondary flex items-center justify-center">
              <Image
                src={"/Whatsapp.png"}
                alt="Whatsapp"
                height={24}
                width={24}
              />
            </div>
          </Link>

          <Link
            href="https://www.facebook.com/SAGaharu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
            aria-label="Facebook"
          >
            <div className="w-12 h-12 rounded-lg border-2 border-white hover:border-secondary flex items-center justify-center">
              <Image
                src={"/Facebook.png"}
                alt="Facebook"
                height={24}
                width={24}
              />
            </div>
          </Link>

          <Link
            href="https://www.instagram.com/sekolahalamgaharu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
            aria-label="Instagram"
          >
            <div className="w-12 h-12 rounded-lg border-2 border-white hover:border-secondary flex items-center justify-center">
              <Image
                src={"/Instagram.png"}
                alt="Instagram"
                height={24}
                width={24}
              />
            </div>
          </Link>

          <Link
            href="https://m.youtube.com/@sekolahalamgaharu4025"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
            aria-label="YouTube"
          >
            <div className="w-12 h-12 rounded-lg border-2 border-white hover:border-secondary flex items-center justify-center">
              <Image
                src={"/Youtube.png"}
                alt="Youtube"
                height={24}
                width={24}
              />
            </div>
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-300 text-sm">
          <p className="mb-2">
            Hak Cipta ©2025 Sekolah Alam Gaharu, ERP - INTEGRA
          </p>
          <p className="font-semibold">Developed by Telkom University</p>
        </div>
      </div>
    </footer>
  );
}
