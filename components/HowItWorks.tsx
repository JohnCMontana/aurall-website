import React from "react";
import Image from "next/image";
import HIWCard from "./cards/HIWcard";
import SectionPill from "./others/SectionPill";

interface HowItWorksProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const ImageCard: React.FC<HowItWorksProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <HIWCard className="group bg-gradient-to-br from-white to-gray-50">
      <div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-foreground/70 text-base">{description}</p>
      </div>
      <div className="mt-4">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={300}
          height={200}
          style={{ width: '100%', height: 'auto' }}
          objectFit="contain"
        />
      </div>
    </HIWCard>
  );
};

import { features } from "@/data/features";

export default function HowItWorks() {
  const cardsData = features.map((feature, index) => ({
    title: feature.title,
    description: feature.description,
    imageSrc: `/placeholder-${index + 1}.png`,
    imageAlt: `${feature.title} illustration`,
  }));
  return (
    <section className="relative z-10 w-full px-4 py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <SectionPill>Cómo funciona Aurall</SectionPill>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-gradient-main-title">
          Control total sobre tus <br />
          interacciones
        </h2>
        <p className="mt-4 text-secondary max-w-3xl mx-auto text-center text-lg">
          Desde la captura hasta la auditoría, sin dependencias externas.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cardsData.map((card, index) => (
            <ImageCard
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}