import ButtonGradient from "./Buttons/ButtonGradient";
import ButtonVideo from "./Buttons/ButtonVideo";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 h-[calc(100vh-400px)]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[300px] bg-red-600/20 rounded-full blur-[120px]" />
      </div>
      <h1 className="relative z-10 text-6xl font-semibold text-center leading-tight font-space">
        <span className="bg-gradient-to-r from-red-400 via-red-500 to-blue-500 bg-clip-text text-transparent">Grabación Inteligente</span> 
        <br />
        <span className="font-normal text-gray-700 dark:text-gray-100">de Interacciones con <span className=" font-semibold bg-gradient-to-r from-red-400 to-blue-500 bg-clip-text text-transparent">IA</span></span>
      </h1>
      <div className="relative flex items-center justify-center gap-4 z-10 mt-10">
        <ButtonVideo href="/video"/>
        <ButtonGradient href="/get-started">Impulsa tu negocio</ButtonGradient>
      </div>
    </section>
  );
}
