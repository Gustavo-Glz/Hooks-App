import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Character } from "./components/Character";
import { Loading } from "./components/Loading";

export const MultipleCustomHooks = () => {
  const { counter, handleIncrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  const { image, name } = !!data && data;
  return (
    <>
      <h1 className="mt-5">BreakingBad Quotes</h1>
      <hr />
      {isLoading ? <Loading /> : <Character image={image} name={name}/>}
      <button className="btn btn-success mt-2" onClick={handleIncrement} disabled={isLoading}>
        Siguiente
      </button>
    </>
  );
};
