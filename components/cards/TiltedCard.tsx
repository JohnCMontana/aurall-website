"use client";

import type { SpringOptions } from "motion/react";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface TiltedCardProps {
  title: string;
  description: string;
  containerHeight?: React.CSSProperties["height"];
  containerWidth?: React.CSSProperties["width"];
  scaleOnHover?: number;
  rotateAmplitude?: number;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  title,
  description,
  containerHeight = "250px",
  containerWidth = "350px",
  scaleOnHover = 1.1,
  rotateAmplitude = 18,
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  const opacity = useSpring(0);
  const rotateTooltip = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    rotateX.set(-(offsetY / (rect.height / 2)) * rotateAmplitude);
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateTooltip.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateTooltip.set(0);
    opacity.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative overflow-visible"
      style={{
        height: containerHeight,
        width: containerWidth,
        perspective: "800px",
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <motion.div
        className="relative rounded-[16px]"
        style={{
          width: "100%",
          height: "100%",
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Animated border */}
        <div className="absolute inset-0 rounded-[32px] p-[1px] overflow-hidden">
          <motion.div
            className="absolute inset-[-200%]"
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background:
                "conic-gradient(from 0deg, transparent, #ff575770, #ff6363c7, #ff5757a4)",
            }}
          />

          {/* Glass card */}
          <div className="absolute inset-[1px] rounded-[30px] bg-background backdrop-blur-xl border border-foreground/20 flex flex-col items-center justify-center text-black/70 p-6 text-center">
            
            {/* Overlay Title (3D depth) */}
            <motion.h1
                className="absolute top-6
                            bg-foreground/5 backdrop-blur-md 
                            text-foreground/70 text-sm font-semibold 
                            px-6 py-2 rounded-full 
                            shadow-xl"
                style={{ transform: "translateZ(40px)" }}
                >
                {title}
            </motion.h1>

            <p className="text-sm opacity-80 mt-2 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tooltip */}
      <motion.figcaption
        className="pointer-events-none absolute left-0 top-0 
                    rounded-md bg-white px-3 py-1 text-xs text-black 
                    shadow-md hidden sm:block z-[9999]"
        style={{ x, y, opacity, rotate: rotateTooltip, translateX: '10px', translateY: '10px' }}
      >
        {title}
      </motion.figcaption>
    </figure>
  );
}