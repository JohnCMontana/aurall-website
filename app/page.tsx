import FeaturesBento from "@/components/FeaturesBento";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Productos from "@/components/Productos";

export default function Home() {
  return (
    <>
      <div className="min-screen flex flex-col gap-20">
        <Hero />
        <div className="max-w-[1200px] mx-auto w-full px-4">
          <FeaturesBento />
          <Productos />
          <HowItWorks />
        </div>
      </div>
    </>
  )
}

