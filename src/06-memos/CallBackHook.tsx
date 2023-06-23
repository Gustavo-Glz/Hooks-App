import { useCallback, useState } from "react";
import { ShowIncrement } from "./components/ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementCounter = useCallback((value: number) => {
    setCounter((counter) => counter + value);
  }, []);

  // const incrementCounter = () => setCounter(counter + 1);

  return (
    <>
      <h1 className="mt-5">useCallBack Hook: {counter} </h1>
      <hr />
      <ShowIncrement increment={incrementCounter} />
    </>
  );
};
