import Image from "next/image";
import Link from "next/link";
import { Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent text-foreground mt-30 py-10 px-4 sm:px-6 lg:px-8 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* Logo */}
        <div className="md:col-span-2">
          <div className="flex items-center mb-4">
            <Image
              src="/logos/aurall-logo-solo.png"
              alt="Aurall Logo"
              width={120}
              height={120}
              className="dark:hidden"
            />
            <Image
              src="/logos/aurall-logo-solo.png"
              alt="Aurall Logo"
              width={120}
              height={120}
              className="hidden dark:block"
            />
          </div>
        </div>

        {/* Productos */}
        <div>
          <h4 className="font-medium mb-3">Productos</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link
                href="#"
                className="transition hover:underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
              >
                Aurall
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition hover:underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
              >
                Aurall Quantum
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition hover:underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
              >
                Aurall Quality
              </Link>
            </li>
          </ul>
        </div>

        {/* Soluciones */}
        <div>
          <h4 className="font-medium mb-3">Soluciones</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link
                href="#"
                className="transition hover:underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
              >
                Industrias
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition hover:underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
              >
                Casos de uso
              </Link>
            </li>
          </ul>
        </div>

        {/* Recursos */}
        <div>
          <h4 className="font-medium mb-3">Recursos</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link
                href="#"
                className="transition hover:underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition hover:underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
              >
                Casos de estudio
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition hover:underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
              >
                Documentación
              </Link>
            </li>
          </ul>
        </div>

        {/* Empresa + CTA */}
        <div>
          <h4 className="font-medium mb-3">Empresa</h4>
          <ul className="space-y-2 text-muted-foreground mb-4">
            <li>
              <Link
                href="#"
                className="transition hover:underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
              >
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="transition hover:underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground"
              >
                Clientes
              </Link>
            </li>
          </ul>

          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-4 py-2 text-xs font-medium backdrop-blur transition hover:border-foreground hover:bg-foreground hover:text-background"
          >
            Contáctanos
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto border-t border-foreground/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p className="text-foreground/70">
          © {currentYear} VOID SISTEMAS S.L. Todos los derechos reservados
        </p>

        <div className="flex space-x-4 text-foreground">
          <Link
            href="#"
            className="transition opacity-70 hover:opacity-100 hover:scale-105"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </Link>

          <Link
            href="#"
            className="transition opacity-70 hover:opacity-100 hover:scale-105"
            aria-label="YouTube"
          >
            <Youtube size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
