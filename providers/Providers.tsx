"use client";

import { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="data-theme"
        defaultTheme="system"
        enableColorScheme={true}
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
