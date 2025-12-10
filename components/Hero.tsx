export default function Hero() {
  return (
    <section className="relative flex items-center justify-center px-4 h-[calc(100vh-400px)]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[300px] bg-red-600/20 rounded-full blur-[120px]" />
      </div>
      <h1 className="relative z-10 text-6xl font-semibold text-center">
        <span className="bg-gradient-to-r from-red-700 via-red-700 to-blue-600 bg-clip-text text-transparent">Grabación Inteligente</span> 
        <br />
        <span className="font-normal text-gray-900 dark:text-gray-100">de Interacciones con <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">IA</span></span>
      </h1>
    </section>
  );
}
