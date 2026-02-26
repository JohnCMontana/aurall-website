"use client";

import FeaturesBento from "@/components/FeaturesBento";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Productos from "@/components/Productos";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const currentLocale = router.locale;

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Hero />
        {/* Example of translated content */}
        <div className="text-center py-8">
          {currentLocale === 'es' ? (
            <p className="text-lg">¡Bienvenido a nuestra aplicación!</p>
          ) : (
            <p className="text-lg">Welcome to our application!</p>
          )}
        </div>
        <FeaturesBento />
        <Productos />
        <HowItWorks />
      </div>
    </>
  )
}

