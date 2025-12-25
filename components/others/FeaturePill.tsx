"use client";

import { useEffect, useState, useRef } from "react";

type Feature = {
  text: string;
  color: string; // circle color
};

const features: Feature[] = [
  { text: "On-Premise", color: "#FF6B6B" },
  { text: "IA", color: "#4ECDC4" },
  { text: "Multimodal", color: "#FFD93D" },
  { text: "Tiempo real", color: "#1A535C" },
  { text: "Seguro", color: "#FF9F1C" },
  { text: "Privacidad", color: "#6A4C93" },
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
      setWidth(textWidth + 40); // + left padding + circle spacing + extra right padding
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
      className="relative h-[30px] bg-foreground/10 backdrop-blur-md rounded-full flex items-center overflow-hidden select-none transition-[width] duration-300 ease-in-out"
      style={{ width }}
    >
      {/* Circle */}
      <div
        className={`w-2 h-2 rounded-full flex-shrink-0 ml-3 mr-2 transition-colors duration-300`}
        style={{ backgroundColor: feature.color, boxShadow: `0 0 8px ${feature.color}` }}
      ></div>

      {/* Text */}
      <div
        ref={textRef}
        className={`whitespace-nowrap text-foreground/60 text-xs font-light transition-transform duration-300 ease-in-out ${
          animate ? "-translate-x-6 opacity-0" : "translate-x-0 opacity-100"
        }`}
      >
        {feature.text}
      </div>

      {/* Extra right padding */}
      <div className="w-3 flex-shrink-0"></div>
    </div>
  );
}
