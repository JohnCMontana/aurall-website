"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { bentoFeaturesData } from "@/data/bento-features";

export default function FeaturesBento() {
  const { mainTitle, mainSubtitle, features } = bentoFeaturesData;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [features.length]);

  const activeFeatureImageSrc = features[activeIndex]?.individualImageSrc;
  const activeFeatureImageAlt = features[activeIndex]?.title || "Feature Image";

  return (
    <div className="relative z-10 py-20 w-full">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Title, Subtitle, and Feature List */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground/90 mb-4">
              {mainTitle}
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              {mainSubtitle}
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 cursor-pointer transition-all duration-300 ${
                    index === activeIndex ? "text-foreground/90" : "text-foreground/60"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {feature.icon && (
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={24}
                      height={24}
                      className="flex-shrink-0 mt-1"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-base text-foreground/60">
                      {feature.description}
                    </p>
                    {/* Progress line */}
                    <div className="h-0.5 bg-foreground/20 rounded-full mt-2">
                      <div
                        className={`h-full bg-primary/50 rounded-full ${
                          index === activeIndex
                            ? "w-full transition-all duration-5000 ease-linear"
                            : "w-0"
                        }`}
                        style={{ animationDuration: "5s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center items-center">
            {activeFeatureImageSrc && (
              <Image
                src={activeFeatureImageSrc}
                alt={activeFeatureImageAlt}
                width={600}
                height={600}
                className="object-contain transition-opacity duration-500"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
