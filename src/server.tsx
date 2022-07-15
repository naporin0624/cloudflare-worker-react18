import { Hono } from "hono";
// import { logger } from "hono/logger";
import { serveStatic } from "hono/serve-static";
import React from "react";
import { renderToReadableStream } from "react-dom/server";

import App from "./App";

const app = new Hono();
app.use("/assets/*", serveStatic({ root: "./" }));

app.get("/", async () => {
  const stream = await renderToReadableStream(
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* dist の中を見て手で変更してる */}
        <script type="module" src="/assets/client.d0bd8681.js"></script>
      </head>
      <body>
        <div id="app">
          <App />
        </div>
      </body>
    </html>
  );

  return new Response(stream, {
    headers: {
      "X-Content-Type-Options": "nosniff",
      "Content-Type": "text/html",
    },
  });
});

app.fire();
