import { useState } from "react";

export const CounterApp = () => {
  const [counters, setCounters] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  const { counter1, counter2, counter3 } = counters;

  return (
    <>
      <h1 className="mt-5">Counter1: {counter1}</h1>
      <h1 className="mt-5">Counter2: {counter2}</h1>
      <h1 className="mt-5">Counter3: {counter3}</h1>
      <hr />
      <div className="d-flex gap-2">
        <button
          className="btn btn-primary"
          onClick={() => setCounters({ ...counters, counter1: counter1 + 1 })}
        >
          Incrementar
        </button>
      </div>
    </>
  );
};
