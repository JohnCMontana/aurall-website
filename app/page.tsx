import FeaturesBento from "@/components/FeaturesBento";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Productos from "@/components/Productos";
import ClientLogosGrid from "@/components/others/ClientLogosGrid";

export default function Home() {
  return (
    <>
      <div className="min-screen flex flex-col">
        <Hero />
        <hr className="border-foreground/10" />
        <ClientLogosGrid />
        <div className="max-w-[1200px] mx-auto w-full px-4 py-10">
          <FeaturesBento />
          <Productos />
          <HowItWorks />
        </div>
      </div>
    </>
  )
}

