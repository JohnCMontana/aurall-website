import FeaturesBento from "@/components/FeaturesBento";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Productos from "@/components/Productos";
import ClientsCarousel from "@/components/others/ClientsCarousel";
import clientsData from "@/data/clients";

export default function Home() {
  return (
    <>
      <div className="min-screen flex flex-col">
        <Hero />
        <h2 className="mb-20 text-lg font-normal text-foreground/70 text-center">
          La confianza de nuestros clientes empieza con la seguridad de sus comunicaciones
        </h2>
        <ClientsCarousel clients={clientsData} />
        <div className="max-w-[1200px] mx-auto w-full px-4 py-10">
          <FeaturesBento />
          <Productos />
          <HowItWorks />
        </div>
      </div>
    </>
  )
}

