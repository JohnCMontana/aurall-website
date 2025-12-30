import clients from "@/data/clients";
import ButtonGradient from "./Buttons/ButtonGradient";
import ButtonVideo from "./Buttons/ButtonVideo";
import FeaturePill from "./others/FeaturePill";
import ClientsCarousel from "./others/ClientsCarousel";
import Button from "./Buttons/Button";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 mt-[20px] sm:mt-[30px] md:mt-[50px]">
      {/*
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="top-130 left-50 w-[1000px] max-w-[1500px] h-100 sm:h-40 md:h-[300px] animate-cloud-gradient-blur" />
      </div>
      */}
      <div className="relative z-10 mb-1 sm:mb-2">
        <FeaturePill />
      </div>

      <h1 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight font-space">
        <span className="font-bold">Grabación Inteligente</span>
        <br />
        de Interacciones con
        <span> IA</span>
      </h1>

      <h3 className="my-2 text-center text-secondary text-sm sm:text-base">
        Automatiza, analiza y protege tus comunicaciones críticas en tiempo real
      </h3>
      <div className="relative flex flex-col sm:flex-row items-center justify-center mb-8 sm:mb-10 gap-3 sm:gap-4 z-10">
        <ButtonVideo href="/video"/>
        <Button href="/get-started">Impulsa tu negocio</Button>
      </div>

      <ClientsCarousel clients={clients} />

    </section>
  );
}
