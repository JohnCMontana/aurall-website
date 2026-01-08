import clients from "@/data/clients";
import ButtonVideo from "./buttons/ButtonVideo";
import FeaturePill from "./others/FeaturePill";
import ClientsCarousel from "./others/ClientsCarousel";
import Button from "./buttons/Button";
import Image from "next/image"; // Import Image component

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 min-h-screen">
      {/*
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="top-130 left-50 w-[1000px] max-w-[1500px] h-100 sm:h-40 md:h-[300px] animate-cloud-gradient-blur" />
      </div>
      */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        {/* Left Column: Text and Buttons */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">

          <h1 className="relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-tight">
            <span className="font-bold">Grabación Inteligente</span>
            <br />
            de Interacciones con
            <span> IA</span>
          </h1>

          <h3 className="my-4 pr-40 text-secondary text-md sm:text-lg">
            Automatiza, analiza y protege tus comunicaciones críticas en tiempo real
          </h3>
          <div className="relative flex flex-col sm:flex-row items-center justify-center md:justify-start mb-8 sm:mb-10 gap-3 sm:gap-4 z-10">
            <Button href="/get-started">Impulsa tu negocio</Button>
            <ButtonVideo href="/video"/>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative flex items-center justify-center">
          <Image
            src="/images/hero/ui-illustration.png" // Placeholder image path
            alt="Hero Image"
            width={1000} // Adjust as needed
            height={800} // Adjust as needed
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>

      <p className="relative z-10 text-foreground/70 text-md sm:text-lg">
        Con la confianza de startups líderes del sector
      </p>
      <ClientsCarousel clients={clients} />
    </section>
  );
}
