import { Hono } from "hono";
import { logger } from "hono/logger";
import React from "react";
import { renderToReadableStream } from "react-dom/server";

import App from "./App";

const app = new Hono();
app.use("*", logger());

app.get("/", async () => {
  const stream = await renderToReadableStream(
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <App />
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
