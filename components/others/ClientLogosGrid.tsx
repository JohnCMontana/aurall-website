import Image from "next/image";

export default function ClientLogosGrid() {
  return (
    <div className="relative z-10 w-full py-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0 border border-foreground/10 rounded-lg overflow-hidden">
        
        <div className="col-span-2 flex items-center justify-center py-6 px-16 border border-foreground/10">
          <p className="text-sm uppercase text-foreground/60 text-start">
            Equipos que transforman sus comunicaciones críticas en información segura y accionable.
          </p>
        </div>

        <div className="flex items-center justify-center p-6 border border-foreground/10">
          <Image src="/logos/clients/adif.png" alt="Adif" width={120} height={40} className="object-contain max-h-12 w-auto opacity-90 hover:opacity-100 transition" />
        </div>

        <div className="flex items-center justify-center p-6 border border-foreground/10">
          <Image src="/logos/clients/aena.png" alt="Aena" width={120} height={40} className="object-contain max-h-12 w-auto opacity-90 hover:opacity-100 transition" />
        </div>

        <div className="flex items-center justify-center p-6 border border-foreground/10">
          <Image src="/logos/clients/canal-isabel-ii.png" alt="Canal Isabel II" width={120} height={40} className="object-contain max-h-12 w-auto opacity-90 hover:opacity-100 transition" />
        </div>

        <div className="flex items-center justify-center p-6 border border-foreground/10">
          <Image src="/logos/clients/enaire.png" alt="Enaire" width={120} height={40} className="object-contain max-h-12 w-auto opacity-90 hover:opacity-100 transition" />
        </div>

        <div className="flex items-center justify-center p-6 border border-foreground/10">
          <Image src="/logos/clients/haitong.png" alt="Haitong" width={120} height={40} className="object-contain max-h-12 w-auto opacity-90 hover:opacity-100 transition" />
        </div>

        <div className="flex items-center justify-center p-6 border border-foreground/10">
          <Image src="/logos/clients/iberia.png" alt="Iberia" width={120} height={40} className="object-contain max-h-12 w-auto opacity-90 hover:opacity-100 transition" />
        </div>

        <div className="flex items-center justify-center p-6 border border-foreground/10">
          <Image src="/logos/clients/junta-de-andalucia.png" alt="Junta de Andalucía" width={120} height={40} className="object-contain max-h-12 w-auto opacity-90 hover:opacity-100 transition" />
        </div>

        <div className="flex items-center justify-center p-6 border border-foreground/10">
          <Image src="/logos/clients/metro-bilbao.png" alt="Metro Bilbao" width={120} height={40} className="object-contain max-h-12 w-auto opacity-90 hover:opacity-100 transition" />
        </div>

        <div className="flex items-center justify-center p-6 border border-foreground/10">
          <Image src="/logos/clients/metro-valencia.png" alt="Metro Valencia" width={120} height={40} className="object-contain max-h-12 w-auto opacity-90 hover:opacity-100 transition" />
        </div>

        <div className="flex items-center justify-center p-6 border border-foreground/10">
          <Image src="/logos/clients/pikolin.png" alt="Pikolin" width={120} height={40} className="object-contain max-h-12 w-auto opacity-90 hover:opacity-100 transition" />
        </div>

        <div className="flex items-center justify-center p-6 border border-foreground/10">
          <Image src="/logos/clients/policia-local-valencia.png" alt="Policía Local Valencia" width={120} height={40} className="object-contain max-h-12 w-auto opacity-90 hover:opacity-100 transition" />
        </div>

        <div className="flex items-center justify-center p-6 border border-foreground/10">
          <Image src="/logos/clients/puertos-del-estado.png" alt="Puertos del Estado" width={120} height={40} className="object-contain max-h-12 w-auto opacity-90 hover:opacity-100 transition" />
        </div>

        <div className="flex items-center justify-center p-6 border border-foreground/10">
          <Image src="/logos/clients/renfe.png" alt="Renfe" width={120} height={40} className="object-contain max-h-12 w-auto opacity-90 hover:opacity-100 transition" />
        </div>

        <div className="flex items-center justify-center p-6 border border-foreground/10">
          <Image src="/logos/clients/samu-061.png" alt="Samu 061" width={120} height={40} className="object-contain max-h-12 w-auto opacity-90 hover:opacity-100 transition" />
        </div>

      </div>
    </div>
  );
}