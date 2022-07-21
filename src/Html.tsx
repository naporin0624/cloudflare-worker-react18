import React from "react";

import type { FC, ReactNode } from "react";

type Props = {
  script?: string;
  children?: ReactNode;
};

const Html: FC<Props> = ({ children, script: entryFile }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="app">{children}</div>
        {entryFile ? <script src={entryFile}></script> : null}
      </body>
    </html>
  );
};

export default Html;
