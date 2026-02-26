import Button from "./buttons/Button";
import TiltedCard from "./cards/TiltedCard";
import Image from "next/image";
import ButtonVideo from "./buttons/ButtonVideo";
import HeroCards from "./HeroCards";
import { features } from "@/data/features";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen">

      <div className="relative z-10 grid gap-8 items-center max-w-7xl mx-auto">
        <div className="md:col-span-1 flex flex-col items-center text-center gap-4">
          <h1 className="relative z-10 font-semibold text-xl sm:text-3xl lg:text-6xl leading-tight">
            Inteligencia que escucha <br />
            Seguridad que protege
          </h1>

          <h3 className="my-4 pr-0 md:pr-8 text-secondary text-md sm:text-lg">
            Plataforma avanzada de grabación y análisis multimodal con IA para entornos críticos y corporativos.
          </h3>

          <div className="relative flex flex-col sm:flex-row items-center justify-start mb-8 sm:mb-10 gap-3 sm:gap-4 z-10">
            <Button href="/get-started">Impulsa tu negocio</Button>
            <ButtonVideo href="/video"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
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
