// components/Buttons/ButtonGradient.tsx
import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  href,
  children,
  className = "",
}: ButtonProps) => {
  return (
    <Link href={href}>
      <span
        className={`
          relative inline-flex items-center gap-2 px-5 py-2.5 font-normal
          transition-transform duration-200 hover:scale-105
          cursor-pointer overflow-hidden
          bg-gradient-to-b from-primary/60 to-primary/80
          text-sm
          text-white
          rounded-full
          ${className}
        `}
      >
        {children}
      </span>
    </Link>
  );
};

export default Button;
