import ButtonGradient from "./Buttons/ButtonGradient";
import ButtonVideo from "./Buttons/ButtonVideo";
import BentoCard from "./BentoCard";
import FeaturePill from "./others/FeaturePill";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-6 px-4 mt-[100px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[300px] rounded-full animate-cloud-gradient-blur" />
      </div>
      <div className="relative z-10 mb-4">
        <FeaturePill />
      </div>
      <h1 className="relative z-10 text-7xl font-normal text-center leading-tight font-space">
        Grabación Inteligente
        <br />
        de Interacciones con
        <span className="
          font-bold
          bg-gradient-to-r from-red-400 to-blue-500
          bg-clip-text text-transparent
          drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]
        "> IA</span>

      </h1>
      <p className="my-2 max-w-md text-center text-secondary">
        Automatiza, analiza y protege tus comunicaciones críticas en tiempo real
      </p>
      <div className="relative flex items-center justify-center mb-10 gap-4 z-10">
        <ButtonVideo href="/video"/>
        <ButtonGradient href="/get-started">Impulsa tu negocio</ButtonGradient>
      </div>
      <div className="relative z-10 w-full">
        <div className="relative overflow-hidden rounded-[50px] border border-white/20 dark:border-white/10 bg-black/10 dark:bg-white/5">
          <video
            className="w-full aspect-video object-cover"
            src="/videos/hero-bg-video.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 p-4 sm:p-6 md:p-8">
            <div className="grid h-full grid-cols-1 md:grid-cols-4 auto-rows-[minmax(90px,auto)] gap-4 md:gap-6">
              <BentoCard
                title="Grabación Multimodal"
                description="Multicanales de voz, pantallas, mensajería, posicionamiento y metadatos de comunicaciones."
                className="md:col-span-2 md:row-span-2"
                imageSrc="/images/hero/cards/grabacion-multimodal.png"
              />
              <BentoCard
                title="Gestión Inteligente"
                description="La gestión de grabaciones se automatiza con inteligencia artificial para decisiones más rápidas y precisas"
                className="md:col-span-2 md:row-span-1"
                imageSrc="/images/hero/GestionInteligente.png"
              />
              <BentoCard
                title="Alta Seguridad"
                description="Aplicación de controles de seguridad y cumplimiento de normativas legales (ENS, 27001, 22301, RGPD, …)"
                className="md:col-span-2 md:row-span-3"
                imageSrc="/images/hero/cards/alta-seguridad.png"
              />
              <BentoCard
                title="Elija el entorno"
                description="Instalación local 100% aislada (Todas las capacidades de IA sin internet) o despliegue cloud seguro."
                className="md:col-span-2 md:row-span-2"
                imageSrc="/images/hero/ElijaElEntorno.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
