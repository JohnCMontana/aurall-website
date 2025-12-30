import BentoCard from "./BentoCard";

export default function FeaturesBento() {
  return (
    <div className="relative z-10 py-20 w-full">
            <div className="relative overflow-hidden rounded-[50px] backdrop-blur-md border border-foreground/10 bg-background/40">
              <div className="p-4 sm:p-6 md:p-8">
                <div className="grid h-full grid-cols-1 md:grid-cols-4 auto-rows-[minmax(90px,auto)] gap-4 md:gap-6">
                  <BentoCard
                    title="Grabación Multimodal" 
                    description="Multicanales de voz, pantallas, mensajería, posicionamiento y metadatos de comunicaciones."
                    className="md:col-span-2 md:row-span-3"
                    imageSrc="/images/hero/cards/grabacion-multimodal.png"
                  />
                  <BentoCard
                    title="Gestión Inteligente"
                    description="La gestión de grabaciones se automatiza con inteligencia artificial para decisiones más rápidas y precisas"
                    className="md:col-span-2 md:row-span-2"
                    imageSrc="/images/hero/GestionInteligente.png"
                  />
                  <BentoCard
                    title="Alta Seguridad"
                    description="Aplicación de controles de seguridad y cumplimiento de normativas legales (ENS, 27001, 22301, RGPD, …)"
                    className="md:col-span-2 md:row-span-4"
                    imageSrc="/images/hero/cards/alta-seguridad.png"
                  />
                  <BentoCard
                    title="Elija el entorno"
                    description="Instalación local 100% aislada (Todas las capacidades de IA sin internet) o despliegue cloud seguro."
                    className="md:col-span-2 md:row-span-3"
                    imageSrc="/images/hero/ElijaElEntorno.png"
                  />
                </div>
              </div>
            </div>
          </div>
  );
}
