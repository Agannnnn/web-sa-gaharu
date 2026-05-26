import React from "react";

interface HighlightTextProps {
  children: React.ReactNode;
}

const HighlightText: React.FC<HighlightTextProps> = ({ children }) => {
  return (
    <p className="bg-secondary text-primary w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
      {children}
    </p>
  );
};

export default HighlightText;
