import clients from "@/data/clients";
import ButtonVideo from "./buttons/ButtonVideo";
import ClientsCarousel from "./others/ClientsCarousel";
import Button from "./buttons/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 min-h-screen">
     
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-center max-w-7xl mx-auto pt-30">
        {/* Left Column: Text and Buttons */}
        <div className="md:col-span-2 flex flex-col items-center text-center md:text-left">

          <h1 className="relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-tight text-gradient-main-title">
            <span className="font-bold">Grabación Inteligente</span>
            <br />
            de Interacciones con
            <span> IA</span>
          </h1>

          <h3 className="my-4 pr-0 md:pr-8 text-secondary text-md sm:text-lg">
            Automatiza, analiza y protege tus comunicaciones críticas en tiempo real
          </h3>
          <div className="relative flex flex-col sm:flex-row items-center justify-center md:justify-start mb-8 sm:mb-10 gap-3 sm:gap-4 z-10">
            <Button href="/get-started">Impulsa tu negocio</Button>
            <ButtonVideo href="/video"/>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="md:col-span-3 relative flex items-center justify-center w-full">
          {/* Red Glow behind the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-[var(--glow-red)] opacity-50 filter blur-3xl z-[-1]"></div>
          <Image
            src="/images/hero/aurall-screen-ui.png"
            alt="Hero Image"
            width={1000}
            height={700}
            priority
            layout="responsive"
            objectFit="contain"
            className="dark:hidden"
          />
          <Image
            src="/images/hero/aurall-screen-ui-dark.png"
            alt="Hero Image"
            width={1000}
            height={700}
            priority
            layout="responsive"
            objectFit="contain"
            className="hidden dark:block"
          />
          {/* Gradient overlay for fade-out effect */}
          <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-background to-transparent"></div>
        </div>
      </div>

      <p className="relative z-10 text-foreground/70 pt-20 text-md sm:text-lg">
        Con la confianza de startups líderes del sector
      </p>
      <ClientsCarousel clients={clients} />
    </section>
  );
}