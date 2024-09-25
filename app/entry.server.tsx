import * as ReactDOMServer from 'react-dom/server';
import { createReadableStreamFromReadable, type EntryContext } from "@remix-run/node";

import { isbot } from "isbot";
import { PassThrough } from 'stream';
import { RemixServer } from "@remix-run/react";
import { CacheProvider } from "@emotion/react";
import { renderToPipeableStream } from "react-dom/server";
import { ThemeProvider } from "@mui/material";

import theme from "./Src/theme";
import createEmotionCache from "./Src/createEmotionCache";
import createEmotionServer from '@emotion/server/create-instance';
import ServerStyleContext from './Src/server.context';

const ABORT_DELAY = 5_000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);
  const callbackName = isbot(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  
  function ServerComponent({contextValue}: any) {
    return (
      <>
        <ServerStyleContext.Provider value={contextValue}>
          <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
              <RemixServer 
                context={remixContext} 
                url={request.url}
                abortDelay={ABORT_DELAY}
              />
            </ThemeProvider>
          </CacheProvider>
        </ServerStyleContext.Provider>
      </>
    );
  }
  
  const html = ReactDOMServer.renderToString(<ServerComponent contextValue={null} />);
  const chunks = extractCriticalToChunks(html);

  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      <ServerComponent contextValue={chunks.styles} />,
      {
        [callbackName]: () => {
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          shellRendered = true;
          responseHeaders.set("Content-Type", "text/html");

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}