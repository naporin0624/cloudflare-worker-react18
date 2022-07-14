import { Provider } from "@naporin0624/react-flowder";
import React from "react";

import Page from "./page";

import type { FC } from "react";

const App: FC = () => {
  return (
    <Provider>
      <Page />
    </Provider>
  );
};

export default App;
