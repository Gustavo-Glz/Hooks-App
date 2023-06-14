import { useCounter } from "../hooks/useCounter";

export const CounterAppWithCustomHook = () => {
  const { counter, handleIncrement, handleDecrement, handleReset } =
    useCounter();

  return (
    <>
      <h1 className="mt-5">Counter with Hook: {counter}</h1>
      <hr />
      <div className="d-flex gap-2">
        <button className="btn btn-primary" onClick={handleIncrement}>
          Incrementar
        </button>
        <button className="btn btn-secondary" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn-danger" onClick={handleDecrement}>
          Decrementar
        </button>
      </div>
    </>
  );
};
