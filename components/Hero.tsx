import Button from "./buttons/Button";
import TiltedCard from "./cards/TiltedCard";
import Image from "next/image";
import ButtonVideo from "./buttons/ButtonVideo";
import HeroCards from "./HeroCards";
import { features } from "@/data/features";
import { BackgroundBeams } from "./ui/background-beams";

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center sm:pt-20 md:pt-30 h-screen">
      <BackgroundBeams className="absolute inset-0 z-0" />

      <div className="relative z-10 grid gap-8 items-center">
        <div className="md:col-span-1 flex flex-col items-center text-center gap-4">
          <h1 className="relative z-10 font-semibold text-foreground/90 text-xl sm:text-3xl lg:text-6xl leading-tight">
            Sistema de Grabación <br />
            de Comunicaciones Críticas
          </h1>

          <h3 className="my-4 text-foreground/80 text-md sm:text-lg">
            Plataforma avanzada de grabación y análisis multimodal con IA para entornos críticos y corporativos.
          </h3>

          <div className="relative flex flex-col sm:flex-row items-center justify-start mb-8 sm:mb-10 gap-3 sm:gap-4 z-10">
            <Button href="/get-started">Impulsa tu negocio</Button>
            <ButtonVideo href="/video"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <TiltedCard
                key={i}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
