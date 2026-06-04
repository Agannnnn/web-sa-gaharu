"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Navigation bar for Sekolah Alam Gaharu.
 * Height: h-16 (64px / 4rem) — used by components like Carousel for height calculations
 * Sticky positioning allows it to stay at top while scrolling content
 */

type NavItem = {
  name: string;
  href: string;
};

type ProgramMenuItem = {
  name: string;
  href: string;
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems: Array<NavItem> = [
    { name: "BERANDA", href: "/" },
    { name: "ADMISSION", href: "/admission" },
    { name: "PROGRAMS", href: "/programs" },
    { name: "NEWS", href: "/news" },
    { name: "REPOSITORY", href: "/repository" },
    { name: "ABOUT US", href: "/about-us" },
    { name: "CONTACT", href: "/contact" },
  ];

  const programMenuItems: Array<ProgramMenuItem> = [
    { name: "Daycare", href: "/programs/daycare" },
    { name: "Playgroup", href: "/programs/playgroup" },
    { name: "Raudhatul Athfal", href: "/programs/raudhatul-athfal" },
    { name: "Madrasah Ibtidaiyah", href: "/programs/madrasah-ibtidaiyah" },
    { name: "Madrasah Tsanawiyah", href: "/programs/madrasah-tsanawiyah" },
    { name: "Sekolah Inklusi", href: "/programs/sekolah-avicenna-inklusi" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const isActivePath = (href: string) => {
    if (href === "/programs") {
      return pathname === href || pathname.startsWith("/programs/");
    }

    return pathname === href;
  };

  return (
    <nav className="bg-white border-b border-gray-200 top-0 z-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Image
            src={"/Icon Small.png"}
            height={48}
            width={48}
            alt="Icon small"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.href === "/programs" ? (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={`text-text hover:text-primary font-medium text-sm transition-colors relative ${
                      isActivePath(item.href)
                        ? "after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#035534] after:bottom-[-2px] after:left-0"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>

                  <div className="absolute left-0 top-full z-50 hidden w-72 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl group-hover:block group-focus-within:block">
                    {programMenuItems.map((program) => (
                      <Link
                        key={program.href}
                        href={program.href}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-text transition-colors hover:bg-secondary/20 hover:text-primary"
                      >
                        {program.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-text hover:text-primary font-medium text-sm transition-colors relative ${
                    isActivePath(item.href)
                      ? "after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#035534] after:bottom-[-2px] after:left-0"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden pb-4 px-4 space-y-2 absolute top-full left-0 w-full bg-white border-t border-gray-200"
          >
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`block text-text hover:text-primary font-medium py-2 transition-colors relative ${
                  isActivePath(item.href)
                    ? "after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#035534] after:bottom-[-2px] after:left-0"
                    : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
