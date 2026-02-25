import FeaturesBento from "@/components/FeaturesBento";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Productos from "@/components/Productos";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Hero />
        <FeaturesBento />
        <Productos />
        <HowItWorks />
      </div>
    </>
  )
}

