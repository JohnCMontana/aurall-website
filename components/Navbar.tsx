import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-3 z-50 flex justify-center w-full px-4">
      <div className="w-full bg-white/70 backdrop-blur-md border border-white/20 shadow-sm rounded-full px-8 py-2 flex items-center justify-between text-sm font-normal text-gray-700
                      dark:bg-black/70 dark:border-white/10 dark:text-gray-200">
        <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
          <Image
            src="/logos/aurall-logo-solo.png"
            alt="Aurall Logo"
            width={120}
            height={120}
            priority
            className="dark:hidden w-20 h-10 object-contain"
          />
          <Image
            src="/logos/aurall-logo-solo-white.png"
            alt="Aurall Logo"
            width={120}
            height={120}
            priority
            className="hidden dark:block w-20 h-10 object-contain"
          />
        </Link>
        
        <div className="flex items-center gap-6">
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
          <Link 
            href="/get-started" 
            className="bg-gray-100 px-6 py-3 rounded-full border-1 border-gray-200 hover:text-black hover:bg-gray-200
                       dark:bg-white/10 dark:text-white dark:border-white/10 dark:hover:bg-gray-800 dark:hover:text-white transition-colors"
          >
            Comenzar
          </Link>
          <div className="pl-2 border-l border-gray-200 dark:border-gray-700">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
