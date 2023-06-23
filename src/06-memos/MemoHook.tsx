import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = ( value: number) => {
  for (let i = 0; i < value; i++) {
    console.log("Aqui vamos")
  }
  return `${value} iteraciones`
}

export const MemoHook = () => {
  const { counter, handleIncrement } = useCounter(1000);
  const [show, setShow] = useState(true);
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h1 className="mt-5">
        Counter: <small>{counter}</small>
      </h1>
      <h4>{memorizedValue}</h4>
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
