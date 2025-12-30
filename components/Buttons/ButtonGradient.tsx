// components/Buttons/ButtonGradient.tsx
import Link from "next/link";
import React from "react";

interface ButtonGradientProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ButtonGradient = ({
  href,
  children,
  className = "",
}: ButtonGradientProps) => {
  return (
    <Link href={href}>
      <span
        className={`
          relative inline-flex items-center justify-center gap-2
          px-5 py-4 font-semibold text-white
          transition-transform duration-200 hover:scale-105
          cursor-pointer overflow-hidden
          rounded-full border border-white/50
          ${className}
        `}
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(233,76,78), rgb(74,120,235))",
          boxShadow: "0 0 15px rgba(233,76,78,0.45)",
        }}
      >
        {children}
      </span>
    </Link>
  );
};

export default ButtonGradient;
