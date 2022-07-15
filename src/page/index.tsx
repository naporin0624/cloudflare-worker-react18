import { useReadData, fromAsyncFunction } from "@naporin0624/react-flowder";
import React, { Suspense, memo, useState, useCallback } from "react";

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

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);
  const decrement = useCallback(() => {
    setCount((c) => c - 1);
  }, []);

  return (
    <div>
      <p>count: {count}</p>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};
