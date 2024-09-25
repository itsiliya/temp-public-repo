import { CacheProvider } from "@emotion/react";
import { hydrateRoot } from "react-dom/client";
import { RemixBrowser } from "@remix-run/react";
import { ThemeProvider } from "@mui/material";
import { startTransition, StrictMode, useMemo, useState } from "react";

import theme from "./Src/theme";
import createEmotionCache from "./Src/createEmotionCache";
import ClientStyleContext from "./Src/ClientStyleContext";

interface ClientCacheProviderProps {
  children: React.ReactNode;
}
function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache());

  const clientStyleContextValue = useMemo(() => ({
    reset() {
      setCache(createEmotionCache());
    },
  }), []);

  return (
    <ClientStyleContext.Provider value={clientStyleContextValue}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <ClientCacheProvider>
        <ThemeProvider theme={theme}>
            <StrictMode>
              <RemixBrowser />
            </StrictMode>
        </ThemeProvider>
      </ClientCacheProvider>
    );
  });
}

if (window?.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  setTimeout(hydrate, 1);
}