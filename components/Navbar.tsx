import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import Button from "./buttons/Button";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-foreground/10 bg-background/20 backdrop-blur-md">
      <div className="relative max-w-[1240px] mx-auto flex items-center justify-between px-4 py-1">
        
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/logos/aurall-logo-solo.png"
            alt="Aurall Logo"
            width={120}
            height={120}
            priority
            className="dark:hidden w-24 h-14 object-contain"
          />
          <Image
            src="/logos/aurall-logo-solo-white.png"
            alt="Aurall Logo"
            width={120}
            height={120}
            priority
            className="hidden dark:block w-24 h-14 object-contain"
          />
        </Link>

        {/* Center nav */}
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-8 text-sm text-foreground">
          <Link href="#Productos" className="hover:opacity-70 transition">
            Productos
          </Link>
          <Link href="#Soluciones" className="hover:opacity-70 transition">
            Soluciones
          </Link>
          <Link href="#Recursos" className="hover:opacity-70 transition">
            Recursos
          </Link>
          <Link href="#Empresa" className="hover:opacity-70 transition">
            Empresa
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button href="/">Comenzar</Button>
          <div className="pl-2 border-l border-foreground/20">
            <ThemeToggle />
          </div>
        </div>

      </div>
    </nav>
  );
}
