import type { Metadata } from "next";
import { Montserrat, Space_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
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
  title: "Aurall",
  description: "Sistema de Grabación de Comunicaciones Críticas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
      return (
      <html lang="es">
        <body
          className={`${montserrat.variable} ${spaceMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <div className="max-w-[1240px] mx-auto w-full relative">
              <Navbar />
              {children}
            </div>
          </ThemeProvider>
        </body>
    </html>
  );
}
