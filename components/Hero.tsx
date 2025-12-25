import ButtonGradient from "./Buttons/ButtonGradient";
import ButtonVideo from "./Buttons/ButtonVideo";
import FeaturePill from "./others/FeaturePill";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-6 px-4 mt-[80px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[300px] rounded-full animate-cloud-gradient-blur" />
      </div>
      <div className="relative z-10 mb-2">
        <FeaturePill />
      </div>
      <h1 className="relative z-10 text-7xl font-normal text-center leading-tight font-space">
        Grabación Inteligente
        <br />
        de Interacciones con
        <span className="
          font-normal
          bg-gradient-to-r from-red-500 to-blue-500
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
    </section>
  );
}
