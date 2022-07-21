import { useReadData, fromAsyncFunction } from "@naporin0624/react-flowder";
import React, { Suspense, memo } from "react";

import Counter from "../components/counter";

import type { FC } from "react";

const delay = fromAsyncFunction<[ms?: number], number>(
  (ms = 1000) =>
    new Promise<number>((resolve) => setTimeout(() => resolve(ms), ms))
);

const arr = [1000, 2000, 3000, 4000, 5000];

const Page: FC = () => {
  return (
    <section>
      <h1>Hello World</h1>
      <Counter />
      {arr.map((ms) => (
        <Suspense fallback={<p>waiting {ms} ms</p>} key={ms}>
          <SuspendComponent ms={ms} />
        </Suspense>
      ))}
    </section>
  );
};

export default memo(Page);

const SuspendComponent: FC<{ ms?: number }> = ({ ms }) => {
  const d = useReadData(delay(ms));

  return <p>delay: {d}</p>;
};
