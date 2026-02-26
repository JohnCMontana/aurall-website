import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import Button from "./buttons/Button";

export default function Navbar() {
  return (
    <nav className="w-full bg-background/40 backdrop-blur-md border-b border-foreground/10">
      <div className="relative max-w-[1200px] mx-auto flex items-center justify-between px-4 py-1">
        {/* Logo */}
        <Link href="/" className="flex items-center text-foreground/90">
          <Image
            src="/logos/aurall-logo-solo.png"
            alt="Aurall Logo"
            width={120}
            height={120}
            priority
            className="dark:hidden w-24 h-14 object-contain"
          />
          {/*}
          <Image
            src="/logos/aurall-logo-solo-white.png"
            alt="Aurall Logo"
            width={120}
            height={120}
            priority
            className="hidden dark:block w-24 h-14 object-contain"
          />
         */}
        </Link>

        {/* Center nav */}
        <div className="flex gap-4 mx-auto">
          <Link href="#Productos" className="text-foreground/90 transition nav-link-item">Productos</Link>
          <Link href="#Soluciones" className="rounded-full text-foreground/90 transition nav-link-item">Soluciones</Link>
          <Link href="#Recursos" className="text-foreground/90 transition nav-link-item">Recursos</Link>
          <Link href="#Empresa" className="rounded-full text-foreground/90 transition nav-link-item">Empresa</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button href="/">Comenzar</Button>
            {/* 
            <div className="pl-2 border-l border-foreground/20">
              <ThemeToggle />
            </div> 
            */}
        </div>
      </div>
    </nav>
  );
}
