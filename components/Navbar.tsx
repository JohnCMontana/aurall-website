import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import Button from "./buttons/Button";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  return (
    <nav className="w-full bg-background">
      <div className="relative max-w-[1440px] mx-auto flex items-center justify-between px-4 py-3">
        
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
        <div className="flex gap-4 ml-10 md:ml-20">
          <Link href="#Productos" className="transition nav-link-item">
            Productos
            <span className="text-foreground text-2xl">+</span>
          </Link>
          <Link href="#Soluciones" className="rounded-full transition nav-link-item">
            Soluciones
          </Link>
          <Link href="#Recursos" className="transition nav-link-item">
            Recursos
            <span className="text-foreground text-2xl">+</span>
          </Link>
          <Link href="#Empresa" className="rounded-full transition nav-link-item">
            Empresa
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 ml-auto">
          <LanguageSwitcher /> {/* Use the new LanguageSwitcher component */}
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
