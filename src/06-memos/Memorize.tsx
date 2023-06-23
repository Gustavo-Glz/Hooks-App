import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./components/Small";

export const Memorize = () => {
  const { counter, handleIncrement } = useCounter(20);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1 className="mt-5">
        Counter: <Small value={counter} />
      </h1>
      <button className="btn btn-success" onClick={() => handleIncrement()}>
        Incrementar
      </button>
      <button
        className="btn btn-outline-primary ms-2"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
