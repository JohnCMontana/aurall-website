import FeaturesBento from "@/components/FeaturesBento";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Productos from "@/components/Productos";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-20">

      <div className="absolute top-0 left-1/2 opacity-60">
        <div className="w-[1200px] max-w-[1500px] h-[500px] sm:h-[300px] md:h-[500px] animate-cloud-gradient-blur" />
      </div>

      <Hero />
      <FeaturesBento />
      <Productos />
      <HowItWorks />
    </div>
  )
}

