// components/Buttons/ButtonVideo.tsx
import Link from "next/link";
import React from "react";

interface ButtonVideoProps {
  href: string;
  label?: string;
  className?: string;
}

const ButtonVideo = ({
  href,
  label = "Ver cómo funciona",
  className = "",
}: ButtonVideoProps) => {
  return (
    <Link href={href}>
      <span
        className={`
          relative inline-flex items-center gap-2 px-5 py-2.5 font-normal
          transition-transform duration-200 hover:scale-105
          cursor-pointer overflow-hidden
          bg-transparent
          text-sm text-primary/90
          border border-primary/70
          rounded-full
          ${className}
        `}
        aria-label={label}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        {label}
      </span>
    </Link>
  );
};

export default ButtonVideo;
