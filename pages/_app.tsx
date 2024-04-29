import type { AppProps } from "next/app";
import GameProvider from "@/context/game-context";
import "@/styles/globals.css";
import { Providers } from "@/providers/Providers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <GameProvider>
        <Component {...pageProps} />
      </GameProvider>
    </Providers>
  );
}
