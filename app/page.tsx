import FeaturesBento from "@/components/FeaturesBento";
import Hero from "@/components/Hero";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <FeaturesBento />

    </div>
  )
}

