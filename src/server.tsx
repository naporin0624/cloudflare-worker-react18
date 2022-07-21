import { Hono } from "hono";
import { serveStatic } from "hono/serve-static";
import React from "react";
import { renderToReadableStream } from "react-dom/server";

import App from "./App";
import Html from "./Html";
import manifest from "./manifest.json";

const app = new Hono();
app.use("/assets/*", serveStatic({ root: "./" }));

app.get("/", async () => {
  const files = Object.values(manifest);
  const entryFile = files.find((file) => file.isEntry);

  const stream = await renderToReadableStream(
    <Html script={entryFile?.file}>
      <App />
    </Html>
  );

  return new Response(stream, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  });
});

app.fire();
