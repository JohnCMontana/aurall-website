import React from "react";

interface HIWCardProps {
  children: React.ReactNode;
  className?: string;
}

const HIWCard: React.FC<HIWCardProps> = ({ children, className }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-4xl border border-foreground/10 bg-background
        backdrop-blur-md p-6 sm:p-8 h-full transition-transform duration-200 hover:-translate-y-0.5 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default HIWCard;