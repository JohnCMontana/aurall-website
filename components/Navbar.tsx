import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-3 z-50 flex items-center justify-between max-w-full">
      {/* Logo Section */}
      <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
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

      {/* Centered Navigation Pill */}
      <div className="absolute left-1/2 -translate-x-1/2 bg-white/70 backdrop-blur-md border border-white/20 shadow-lg rounded-full px-8 py-3 flex items-center gap-8 text-sm font-medium text-gray-700 dark:bg-black/70 dark:border-white/10 dark:text-gray-200">
        <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">
          Inicio
        </Link>
        <Link href="/features" className="hover:text-black dark:hover:text-white transition-colors">
          Productos
        </Link>
        <Link href="/pricing" className="hover:text-black dark:hover:text-white transition-colors">
          Soluciones
        </Link>
        <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">
          Recursos
        </Link>
        <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">
          Empresa
        </Link>
      </div>

      {/* Right Actions Section */}
      <div className="flex items-center gap-4">
        <Link 
          href="/get-started" 
          className="bg-black text-white px-5 py-3 rounded-full hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors text-sm font-medium"
        >
          Comenzar
        </Link>
        <div className="pl-2 border-l border-gray-200 dark:border-gray-700">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
