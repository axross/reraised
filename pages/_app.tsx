import "../styles/globals.css";
import type { AppProps } from "next/app";

if (typeof globalThis.Worker !== "undefined") {
  const piWorker = new Worker(new URL("../worker.ts", import.meta.url));

  piWorker.onmessage = (event) => {
    console.log("x100: " + event.data);
  };

  console.log(piWorker);

  piWorker.postMessage(42);
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
