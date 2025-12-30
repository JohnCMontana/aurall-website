"use client";

import { useEffect, useState, useRef } from "react";

type Feature = {
  text: string;
};

const features: Feature[] = [
  { text: "On-Premise" },
  { text: "IA"},
  { text: "Multimodal"},
  { text: "Tiempo real"},
  { text: "Seguro"},
  { text: "Privacidad"},
];

export default function FeaturePill() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | undefined>(undefined);

  // Update width for smooth pill resizing
  useEffect(() => {
    if (textRef.current) {
      const textWidth = textRef.current.offsetWidth;
      setWidth(textWidth);
    }
  }, [index]);

  // Cycle features every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % features.length);
        setAnimate(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const feature = features[index];

  return (
    <div
      className="relative h-[30px] py-5 bg-background/50 backdrop-blur-sm border border-foreground/20 rounded-full flex items-center overflow-hidden select-none transition-[width] duration-300 ease-in-out"
      style={{ width }}
    >

      {/* Text */}
      <div
        ref={textRef}
        className={`whitespace-nowrap text-foreground/80 px-6 text-xs font-semibold transition-transform duration-300 ease-in-out ${
          animate ? "-translate-x-6 opacity-0" : "translate-x-0 opacity-100"
        }`}
      >
        {feature.text}
      </div>
    </div>
  );
}
