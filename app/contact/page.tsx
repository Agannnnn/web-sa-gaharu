"use client";

import { MapPin, Square } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";

/**
 * Contact page for Sekolah Alam Gaharu.
 * Displays contact information, location, and contact form for inquiries.
 * Accessible at: /contact
 */

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function KontakPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <div className="bg-white">
      {/* MAIN CONTACT SECTION */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE - CONTACT INFO */}
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-2 text-primary text-center">
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
                  <Square size={24} className="text-primary" />
                  <p>085352331928 (Sekolah Alam Gaharu)</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <Square size={24} className="text-primary" />
                  <p>sekolahalamgaharu@gmail.com</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button variant="secondary" size="md" href="/programs">
                  <div className="flex flex-row items-center gap-2">
                    <span>Whatsapp Us!</span>
                    <Square size={16} className="text-primary ml-2" />
                  </div>
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE - BRANDING GRAPHIC */}
            <div className="flex items-center justify-center">
              <img src={"https://placehold.co/480x480/png"} />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
