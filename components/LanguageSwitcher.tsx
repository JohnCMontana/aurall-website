"use client";

import { useRouter, usePathname } from "next/navigation";
import React from "react";

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1];

  const locales = ['es', 'en'];

  const handleLocaleChange = (locale: string) => {
    const newPath = `/${locale}${pathname.substring(currentLocale.length + 1)}`;
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLocaleChange(locale)}
          className={`px-3 py-1 rounded-full text-sm transition ${
            currentLocale === locale
              ? "bg-primary text-white"
              : "bg-foreground/10 hover:bg-foreground/20 text-foreground"
          }`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
