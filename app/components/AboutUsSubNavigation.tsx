"use client";

import { useEffect, useState } from "react";

type TabItem = {
  id: string;
  label: string;
};

type AboutUsSubNavigationProps = {
  tabItems: TabItem[];
};

export default function AboutUsSubNavigation({
  tabItems,
}: AboutUsSubNavigationProps) {
  const [activeTab, setActiveTab] = useState("sekolah-komunitas");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "sekolah-komunitas";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id") || "sekolah-komunitas";
        }
      });

      setActiveTab(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 bg-white z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto gap-6 py-3">
          {tabItems.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`whitespace-nowrap font-semibold text-sm transition-all py-2 px-4 ${
                activeTab === tab.id
                  ? "bg-secondary text-primary"
                  : "bg-transparent text-text hover:text-primary"
              }`}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
