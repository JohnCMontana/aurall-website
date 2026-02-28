import type { Metadata } from "next";
import { Montserrat, Space_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurall · Grabación de Comunicaciones Críticas",
  description: "Sistema de Grabación de Comunicaciones Críticas",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${spaceMono.variable} antialiased relative`}>
        
        {/*
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
        */}
      
          {/* Sticky navbar (FULL WIDTH, NOT CONSTRAINED) */}
          <div className="relative z-30">
            <Navbar />
          </div>

          {/* Page content (CONSTRAINED) */}
          <main className="relative z-10 pt-[70px]">
            {children}
            <Footer />
          </main>
        {/*
        </ThemeProvider>
      */}
      </body>
    </html>
  );
}
