"use client";

import { Mail, MapPin, MessageCircleQuestion } from "lucide-react";
import Image from "next/image";
import Button from "../components/Button";
import Container from "../components/Container";

/**
 * Contact page for Sekolah Alam Gaharu.
 * Displays contact information, location, and contact form for inquiries.
 * Accessible at: /kontak
 */

export default function KontakPage() {
  return (
    <div className="bg-white">
      {/* MAIN CONTACT SECTION */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE - CONTACT INFO */}
            <div className="space-y-8 lg:ms-18">
              {/* Header */}
              <div className="space-y-2 text-primary lg:text-left text-center">
                <h1 className="text-3xl lg:text-4xl font-bold italic">
                  Keep In Touch With Us!
                </h1>
                <h1 className="text-3xl lg:text-4xl font-bold">
                  Sekolah Alam Gaharu
                </h1>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex flex-row gap-4 items-center">
                  <MapPin size={24} className="text-primary" />
                  <p>
                    Jl Rd. T Endung Suria 1 no 210
                    <br />
                    Baleendah, Kabupaten Bandung 40375
                  </p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <MessageCircleQuestion size={24} className="text-primary" />
                  <p>085352331928 (Sekolah Alam Gaharu)</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <Mail size={24} className="text-primary" />
                  <p>sekolahalamgaharu@gmail.com</p>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                variant="secondary"
                size="md"
                href="https://wa.me/+6285332331938"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="WhatsApp"
              >
                <div className="flex flex-row items-center gap-2">
                  <span>Whatsapp Us!</span>
                </div>
              </Button>
            </div>

            {/* RIGHT SIDE - BRANDING GRAPHIC */}
            <div className="flex items-center justify-center">
              <Image
                src={"/Icon Large.png"}
                alt="Sekolah Alam Gaharu Logo"
                width={400}
                height={400}
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
