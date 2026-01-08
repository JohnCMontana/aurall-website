import Link from "next/link"
import { Server, ShieldCheck, Atom, ArrowRight } from "lucide-react"
import SectionPill from "./others/SectionPill"

export default function Productos() {
  const products = [
    {
      accent: "Aurall Server",
      headline: "Grabación Multimodal Segura",
      description:
        "Captura voz, pantallas, mensajería y metadatos con alta disponibilidad y cumplimiento.",
      icon: Server,
      href: "#",
    },
    {
      accent: "Aurall Quality",
      headline: "Analítica de Calidad con IA",
      description:
        "Evalúa interacciones y detecta mejoras con modelos de IA y métricas accionables.",
      icon: ShieldCheck,
      href: "#",
    },
    {
      accent: "Aurall Quantum",
      headline: "IA Avanzada en Tiempo Real",
      description:
        "Automatiza decisiones críticas y orquesta flujos con capacidades de IA avanzadas.",
      icon: Atom,
      href: "#",
    },
  ]

  return (
    <section id="Productos" className="relative z-10 w-full px-4 scroll-mt-[100px]">
      <div className="text-center mb-6 sm:mb-8">
        <SectionPill>Productos</SectionPill>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">
          Arquitectura de Productos
        </h2>
        <p className="mt-2 text-secondary max-w-2xl mx-auto text-sm sm:text-base">
          Descubre nuestras soluciones para captura, análisis y automatización de comunicaciones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {products.map(({ accent, headline, description, icon: Icon, href }) => (
          <Link key={accent} href={href} className="group">
            <div className="relative overflow-hidden rounded-4xl border border-foreground/10 bg-background/70 card-surface backdrop-blur-md p-6 sm:p-8 h-full transition-transform duration-200 group-hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                  {accent}
                </div>
                <div className="w-9 h-9 rounded-full border border-foreground/10 badge-surface flex items-center justify-center">
                  <Icon className="w-4 h-4 text-foreground/70" />
                </div>
              </div>

              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-foreground/90">
                {headline}
              </h3>
              <p className="mt-1 text-foreground/60 text-sm sm:text-base">
                {description}
              </p>
              
              <div className="my-6 border-t border-foreground/10" />
              <div className="inline-flex items-center gap-2 text-sm text-foreground/70">
                <span>Más información</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
